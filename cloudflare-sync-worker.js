const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
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

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const key = syncKeyFromUrl(request);
    if (!key) {
      return json({ error: "Use /sync/<your-private-sync-key>" }, 404);
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
