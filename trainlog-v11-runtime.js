// TrainLog v11 runtime health-check patch. Appended by the service worker.
function ensureAiHealthNote() {
  let note = document.querySelector("#aiHealthNote");
  if (note) return note;

  note = document.createElement("p");
  note.id = "aiHealthNote";
  note.className = "connection-note";
  const button = document.querySelector("#testAiButton");
  button?.closest(".button-row")?.insertAdjacentElement("afterend", note);

  if (!document.querySelector("#trainlogV11RuntimeStyle")) {
    const style = document.createElement("style");
    style.id = "trainlogV11RuntimeStyle";
    style.textContent = [
      ".connection-note{margin:12px 0 0;color:var(--muted);font-size:.86rem;line-height:1.5}",
      ".connection-note.is-success{color:#65d69b}",
      ".connection-note.is-error{color:#f3a4a4}"
    ].join("");
    document.head.append(style);
  }
  return note;
}

function renderAiHealthNote() {
  const note = ensureAiHealthNote();
  if (!note) return;
  note.textContent = state.ai.lastMessage || (state.lang === "zh" ? "尚未检查 AI 连接。" : "AI connection has not been checked.");
  note.classList.toggle("is-success", Boolean(state.ai.healthy));
  note.classList.toggle("is-error", Boolean(state.ai.checkedAt && !state.ai.healthy));
}

async function checkAiHealth(options = {}) {
  const endpoint = aiEndpoint();
  const button = document.querySelector("#testAiButton");
  const showFeedback = options.feedback !== false;
  const idleLabel = state.lang === "zh" ? "检查 AI 连接" : "Check AI connection";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  if (button && showFeedback) {
    button.disabled = true;
    button.textContent = state.lang === "zh" ? "正在检查 AI..." : "Checking AI...";
  }

  state.ai.healthy = false;
  state.ai.checkedAt = new Date().toISOString();

  try {
    if (!endpoint) {
      state.ai.lastMessage = state.lang === "zh"
        ? "尚未填写 AI 分析端点。请先填写 Cloudflare Worker 地址并保存。"
        : "No AI endpoint is configured. Add the Cloudflare Worker URL and save.";
      return false;
    }
    if (!state.sync.key) {
      state.ai.lastMessage = state.lang === "zh"
        ? "尚未填写同步密钥。它必须与 Worker 的 TRAINLOG_AI_KEY 完全一致。"
        : "No sync key is configured. It must match the Worker's TRAINLOG_AI_KEY.";
      return false;
    }

    const response = await fetch(`${endpoint}/health`, {
      headers: { "X-TrainLog-Key": state.sync.key },
      cache: "no-store",
      signal: controller.signal
    });
    const text = await response.text();
    let payload = {};
    try {
      payload = text ? JSON.parse(text) : {};
    } catch {
      payload = {};
    }

    state.ai.healthy = Boolean(response.ok && payload.ok && payload.aiConfigured && payload.authConfigured);
    if (state.ai.healthy) {
      state.ai.lastMessage = state.lang === "zh"
        ? "真实 AI 已连接，可以分析食物照片与营养标签。"
        : "Real AI is connected and ready to analyze food photos and nutrition labels.";
    } else if (response.status === 401 || response.status === 403) {
      state.ai.lastMessage = state.lang === "zh"
        ? "连接到 Worker，但同步密钥不正确。请检查 TRAINLOG_AI_KEY。"
        : "Worker reached, but the sync key is incorrect. Check TRAINLOG_AI_KEY.";
    } else if (response.status === 503) {
      state.ai.lastMessage = state.lang === "zh"
        ? "Worker 已连接，但 Gemini 或认证密钥尚未配置。请检查 Cloudflare Secrets。"
        : "Worker reached, but Gemini or authentication secrets are missing. Check Cloudflare Secrets.";
    } else {
      state.ai.lastMessage = state.lang === "zh"
        ? `Worker 回应异常（HTTP ${response.status}）。请确认已经部署最新版 Worker。`
        : `Unexpected Worker response (HTTP ${response.status}). Deploy the latest Worker.`;
    }
    return state.ai.healthy;
  } catch (error) {
    state.ai.lastMessage = error?.name === "AbortError"
      ? (state.lang === "zh" ? "AI 检查超过 10 秒，已自动停止。请检查 Worker 地址或网络。" : "AI check timed out after 10 seconds. Check the Worker URL or network.")
      : (state.lang === "zh" ? "无法连接 AI Worker。请检查地址、网络和 Cloudflare 部署状态。" : "Could not reach the AI Worker. Check its URL, network, and Cloudflare deployment.");
    return false;
  } finally {
    clearTimeout(timeout);
    saveState({ touch: false });
    renderFoodAiStatus();
    renderAiHealthNote();
    if (button && showFeedback) {
      button.disabled = false;
      button.textContent = idleLabel;
    }
  }
}

state.ai.lastMessage ||= "";
const versionButtonV11 = document.querySelector("#checkUpdateButton");
if (versionButtonV11) versionButtonV11.textContent = "v11";
renderAiHealthNote();
