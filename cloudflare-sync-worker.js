const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, X-TrainLog-Key"
};

const nutritionSchema = {
  type: "object",
  properties: {
    name: { type: "string", description: "Short food name in the requested language." },
    calories: { type: "number", description: "Total kcal actually consumed." },
    protein: { type: "number", description: "Total protein grams actually consumed." },
    carbs: { type: "number", description: "Total carbohydrate grams actually consumed." },
    fat: { type: "number", description: "Total fat grams actually consumed." },
    confidence: { type: "integer", minimum: 1, maximum: 99 },
    source: {
      type: "string",
      enum: ["ai_exact_label", "ai_visual_estimate"],
      description: "Use ai_exact_label only when readable nutrition-label values were mathematically scaled to consumed amount."
    },
    consumedWeightGrams: { type: "number", description: "Consumed food weight in grams, or 0 if unknown." },
    labelBasis: { type: "string", description: "What the label values are based on, such as per slice or per 100 g." },
    calculation: { type: "string", description: "Short arithmetic used to scale label values to amount eaten." },
    servingSummary: { type: "string", description: "The consumed amount and calculation basis." },
    reasoning: { type: "string", description: "Concise explanation of the calculation." },
    warnings: { type: "array", items: { type: "string" } }
  },
  required: [
    "name",
    "calories",
    "protein",
    "carbs",
    "fat",
    "confidence",
    "source",
    "consumedWeightGrams",
    "labelBasis",
    "calculation",
    "servingSummary",
    "reasoning",
    "warnings"
  ]
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

function syncKeyFromUrl(request) {
  const url = new URL(request.url);
  const match = url.pathname.match(/^\/sync\/([^/]+)$/);
  return match ? decodeURIComponent(match[1]) : "";
}

function requireAiAccess(request, env) {
  if (!env.TRAINLOG_AI_KEY) return true;
  return request.headers.get("X-TrainLog-Key") === env.TRAINLOG_AI_KEY;
}

function imagePart(dataUrl) {
  const match = String(dataUrl).match(/^data:(image\/[^;]+);base64,(.+)$/);
  if (!match) return null;
  return {
    inline_data: {
      mime_type: match[1],
      data: match[2]
    }
  };
}

function nutritionPrompt(input) {
  const language = input.language === "en" ? "English" : "Simplified Chinese";
  return `
You are TrainLog's nutrition-label reader and food portion analyst. Return the final result in ${language}.

User context:
- Mode: ${input.mode || "meal"}
- User food name: ${input.name || "not provided"}
- User stated amount eaten: ${input.amount || "not provided"}
- User entered grams: ${input.grams || "not provided"}
- User notes about amount eaten: ${input.notes || "not provided"}
- Food photos: ${(input.foodImages || []).length}
- Nutrition-label photos: ${(input.labelImages || []).length}

Accuracy rules, in priority order:
1. If a readable nutrition label exists, treat its printed values as authoritative. Determine whether values are per serving, per slice, per 100 g, or per package, then multiply or divide to match the amount the user ACTUALLY ATE.
2. Never confuse serving weight, slice weight, package weight, or grams eaten with grams of protein. For example, "2 slices (44 g)" means the consumed weight is 44 g, not protein = 44 g.
3. Cross-check calories against approximately 4*protein + 4*carbs + 9*fat. If the label and math conflict, mention it in warnings instead of inventing a correction.
4. Use source ai_exact_label only when a readable label and consumed amount support a direct calculation. Otherwise use ai_visual_estimate and lower confidence.
5. For an unlabeled meal, estimate visible portions conservatively and mention hidden oil/sauce uncertainty. Do not pretend photo-only portions are exact.
6. All returned calories and macros must be totals for the consumed amount, not per 100 g unless the user consumed exactly 100 g.
7. Use all provided photos together. Multiple photos may show the same food, package front, serving count, ingredients, and nutrition table.
8. Return consumedWeightGrams as 0 when it cannot be established. If it is known, no individual macro can exceed the consumed food weight.
`;
}

function validateNutritionResult(result, input) {
  const normalized = {
    ...result,
    calories: Math.max(0, Number(result.calories) || 0),
    protein: Math.max(0, Number(result.protein) || 0),
    carbs: Math.max(0, Number(result.carbs) || 0),
    fat: Math.max(0, Number(result.fat) || 0),
    consumedWeightGrams: Math.max(0, Number(result.consumedWeightGrams) || Number(input.grams) || 0),
    confidence: Math.min(99, Math.max(1, Number(result.confidence) || 1)),
    warnings: Array.isArray(result.warnings) ? result.warnings : []
  };

  if (normalized.source === "ai_exact_label" && !(input.labelImages || []).length) {
    normalized.source = "ai_visual_estimate";
    normalized.confidence = Math.min(normalized.confidence, 55);
    normalized.warnings.push("Exact label calculation was rejected because no nutrition-label image was supplied.");
  }

  if (
    normalized.consumedWeightGrams > 0 &&
    Math.max(normalized.protein, normalized.carbs, normalized.fat) > normalized.consumedWeightGrams
  ) {
    normalized.confidence = Math.min(normalized.confidence, 30);
    normalized.warnings.push("A macro exceeded the consumed food weight. Verify the nutrition label and amount eaten.");
  }

  const macroCalories = 4 * normalized.protein + 4 * normalized.carbs + 9 * normalized.fat;
  const allowedDifference = Math.max(80, normalized.calories * 0.35);
  if (Math.abs(macroCalories - normalized.calories) > allowedDifference) {
    normalized.confidence = Math.min(normalized.confidence, 60);
    normalized.warnings.push("Calories and macro-derived calories differ substantially. Verify the label.");
  }

  return normalized;
}

async function callGemini(input, env) {
  if (!env.GEMINI_API_KEY) {
    throw new Error("Missing GEMINI_API_KEY secret");
  }

  const imageParts = [...(input.foodImages || []), ...(input.labelImages || [])]
    .slice(0, 12)
    .map(imagePart)
    .filter(Boolean);
  const parts = [{ text: nutritionPrompt(input) }, ...imageParts];
  const models = [...new Set([env.GEMINI_MODEL, "gemini-3-pro-preview", "gemini-2.5-pro"].filter(Boolean))];
  let lastError = "";

  for (const model of models) {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": env.GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [{ parts }],
          generationConfig: {
            responseMimeType: "application/json",
            responseJsonSchema: nutritionSchema
          }
        })
      }
    );

    if (!response.ok) {
      lastError = `${model}: HTTP ${response.status} ${await response.text()}`;
      continue;
    }

    const payload = await response.json();
    const text = payload.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("") || "";
    const result = JSON.parse(text);
    return { ...validateNutritionResult(result, input), modelUsed: model };
  }

  throw new Error(lastError || "No Gemini model returned a result");
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    if (url.pathname === "/analyze-food" && request.method === "POST") {
      if (!requireAiAccess(request, env)) {
        return json({ error: "Invalid AI access key" }, 401);
      }
      try {
        const input = await request.json();
        const result = await callGemini(input, env);
        return json(result);
      } catch (error) {
        return json({ error: String(error?.message || error) }, 502);
      }
    }

    const key = syncKeyFromUrl(request);
    if (!key) {
      return json({ error: "Use /analyze-food or /sync/<your-private-sync-key>" }, 404);
    }

    if (!env.TRAINLOG_KV) {
      return json({ error: "Missing TRAINLOG_KV binding" }, 503);
    }

    const storageKey = `trainlog:${key}`;

    if (request.method === "GET") {
      const stored = await env.TRAINLOG_KV.get(storageKey, "json");
      return json(stored || { state: null });
    }

    if (request.method === "PUT") {
      const body = await request.json();
      await env.TRAINLOG_KV.put(
        storageKey,
        JSON.stringify({
          ...body,
          syncedAt: new Date().toISOString()
        })
      );
      return json({ ok: true });
    }

    return json({ error: "Method not allowed" }, 405);
  }
};
