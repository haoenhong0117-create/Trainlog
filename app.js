const STORAGE_KEY = "trainlog-v2";

const translations = {
  zh: {
    top_eyebrow: "AI 身材教练",
    today_eyebrow: "今日状态",
    today_title: "腹肌线条阶段",
    today_copy: "轻微减脂，保持力量，优先修正圆肩和骨盆控制。",
    readiness: "状态分",
    calories: "热量",
    protein: "蛋白质",
    streak: "连续打卡",
    days: "天",
    level: "等级",
    next_level: "下一级",
    quests_eyebrow: "今日任务",
    quests_title: "完成 3 件关键事",
    reset: "重置",
    coach_eyebrow: "AI 教练",
    coach_title: "今天最该关注",
    coach_message: "先记录第一餐或完成一个训练任务，TrainLog 会开始生成今天的监督建议。",
    food_eyebrow: "饮食记录",
    food_title: "拍照，估算，复用",
    meal_photo: "饭菜肉",
    package_photo: "包装食品",
    manual_input: "手动输入",
    upload_food: "上传食物照片",
    upload_food_hint: "包装食品可再拍营养表，提高准确度",
    upload_label: "上传营养表或配料表",
    optional: "可选",
    recommended: "建议上传",
    hidden_in_manual: "手动输入模式不需要照片",
    food_name: "食物名称",
    food_name_placeholder: "例如：鸡胸饭 + 青菜",
    amount_eaten: "实际吃了多少",
    amount_eaten_placeholder: "例如：2 片 / 半包 / 1 碗",
    grams: "估算克数",
    grams_placeholder: "可选",
    notes: "补充信息",
    food_notes_placeholder: "例如：少油，半碗饭，鸡胸大概一掌半",
    take_label_photo: "拍营养表",
    estimate: "AI 估算",
    save_favorite: "收藏",
    add_to_today: "加入今日",
    clear_today_food: "清空今日饮食",
    added_to_today: "已加入今日",
    today_food_cleared: "今日饮食已清空",
    estimate_first: "请先完成一次估算",
    add_favorite_today: "加入今日",
    history_eyebrow: "饮食历史",
    history_title: "回看每天吃了什么",
    show_all: "全部",
    filter_date: "筛选日期",
    no_food_history: "还没有饮食记录。",
    delete_log: "删除",
    ai_endpoint: "AI 分析端点",
    ai_not_configured: "尚未配置真实 AI，当前结果仅为低置信度粗略估算。",
    ai_analyzing: "正在分析多张照片...",
    ai_failed: "AI 分析失败，请检查端点、密钥或网络。",
    ai_fallback_rough: "已改用低置信度本地粗略估算。",
    ai_exact_label: "营养表计算",
    ai_visual_estimate: "视觉估算",
    local_rough_estimate: "本地粗略估算",
    saved_food: "常用食物",
    ai_photo_privacy: "启用真实 AI 分析后，所选食物照片会发送到你配置的 AI 服务。",
    real_ai_ready: "真实 AI 已连接",
    rough_mode: "粗略模式",
    result_eyebrow: "估算结果",
    awaiting_scan: "等待扫描",
    calories_short: "热量",
    protein_short: "蛋白",
    carbs: "碳水",
    fat: "脂肪",
    food_empty_note: "拍照或输入后会生成热量、宏量营养和准确度建议。",
    favorites_eyebrow: "常用食物",
    favorites_title: "一键复用",
    no_favorites: "还没有收藏，先保存一个常吃组合。",
    body_eyebrow: "身材与体态",
    body_title: "直接指出问题，鼓励推进",
    front: "正面",
    side: "侧面",
    back: "背面",
    analyze_body: "分析身材与体态",
    neck_tag: "头前伸",
    shoulder_tag: "圆肩",
    hip_tag: "骨盆控制",
    physique_eyebrow: "身材反馈",
    physique_title: "下一阶段重点",
    future_eyebrow: "未来参考",
    future_title: "生成目标视觉",
    future_note: "用于激励和方向感，不作为医学或结果承诺。",
    generate: "生成",
    plan_eyebrow: "训练计划",
    plan_title: "6 练 + 体态修复",
    today_training_eyebrow: "今日训练",
    mobility_eyebrow: "体态修复",
    mobility_title: "8 分钟启动",
    custom_training_eyebrow: "自定义训练",
    custom_training_title: "修改当天内容",
    exercise_name: "动作名称",
    exercise_detail: "组数说明",
    exercise_name_placeholder: "例如：上斜哑铃卧推",
    exercise_detail_placeholder: "4 组，8-10 次",
    save_exercise: "保存动作",
    clear_form: "清空",
    reset_training: "恢复当天默认",
    training_edit_note: "编辑或删除默认动作时，会自动复制一份当天计划给你单独修改。",
    edit: "编辑",
    delete: "删除",
    exercise_saved: "动作已保存",
    training_reset_done: "已恢复默认",
    review_eyebrow: "每周复盘",
    review_title: "看趋势，不看一天",
    trend_eyebrow: "7 天趋势",
    trend_title: "热量与蛋白质",
    best_win: "最佳进展",
    best_win_text: "开始后生成",
    best_win_copy: "记录饮食、训练和体态后，这里会显示你最稳定的进展。",
    main_risk: "主要风险",
    main_risk_text: "暂无风险",
    main_risk_copy: "数据不足时不会乱下结论，记录几天后再判断。",
    next_adjustment: "下周调整",
    next_adjustment_text: "等待第一周数据",
    next_adjustment_copy: "满一周后再调整热量、训练容量和体态任务。",
    profile_eyebrow: "个人目标",
    profile_title: "你的实验参数",
    height: "身高",
    weight: "体重",
    age: "年龄",
    training_days: "每周训练",
    goal: "目标",
    save_profile: "保存目标",
    privacy_note: "身材照默认只保留在本机预览。体态分析不是医疗诊断。",
    nav_today: "今日",
    nav_food: "饮食",
    nav_body: "身材",
    nav_plan: "计划",
    nav_review: "复盘",
    saved: "已保存",
    estimated: "已估算",
    body_done: "已完成分析",
    future_done: "目标视觉已加入队列",
    use: "使用",
    confidence: "可信度",
    sync_eyebrow: "独立 App 与同步",
    sync_title: "手机和电脑共用数据",
    local_only: "本机模式",
    cloud_ready: "云端已配置",
    sync_intro: "正式使用时，把 TrainLog 部署到 HTTPS，然后手机添加到主屏幕。开启云同步后，手机和电脑打开同一个网址即可共享数据。",
    sync_endpoint: "同步端点",
    sync_key: "同步密钥",
    device_name: "设备名称",
    save_sync: "保存同步设置",
    push_sync: "上传到云端",
    pull_sync: "从云端恢复",
    export_data: "导出备份",
    import_data: "导入备份",
    sync_note: "当前仍是本机优先。没有同步端点时，数据只保存在这台设备的浏览器里。",
    sync_saved: "同步设置已保存",
    sync_missing: "请先填写同步端点和同步密钥。",
    sync_upload_done: "已上传到云端",
    sync_pull_done: "已从云端恢复",
    sync_failed: "同步失败，请检查端点、密钥或网络。",
    export_done: "已导出",
    import_done: "已导入"
  },
  en: {
    top_eyebrow: "AI physique coach",
    today_eyebrow: "Today",
    today_title: "Abs definition phase",
    today_copy: "Small cut, keep strength, prioritize shoulders and pelvis control.",
    readiness: "Readiness",
    calories: "Calories",
    protein: "Protein",
    streak: "Streak",
    days: "days",
    level: "Level",
    next_level: "Next",
    quests_eyebrow: "Daily quests",
    quests_title: "Finish 3 key actions",
    reset: "Reset",
    coach_eyebrow: "AI coach",
    coach_title: "Main focus today",
    coach_message: "Log your first meal or finish one training task, then TrainLog will start generating today's coaching note.",
    food_eyebrow: "Food log",
    food_title: "Scan, estimate, reuse",
    meal_photo: "Meal",
    package_photo: "Packaged",
    manual_input: "Manual",
    upload_food: "Upload food photo",
    upload_food_hint: "Packaged foods can add a nutrition label for better accuracy",
    upload_label: "Upload label or ingredients",
    optional: "Optional",
    recommended: "Recommended",
    hidden_in_manual: "Manual mode does not need photos",
    food_name: "Food name",
    food_name_placeholder: "Example: chicken rice + greens",
    amount_eaten: "Amount eaten",
    amount_eaten_placeholder: "Example: 2 slices / half pack / 1 bowl",
    grams: "Estimated grams",
    grams_placeholder: "Optional",
    notes: "Notes",
    food_notes_placeholder: "Example: low oil, half bowl of rice, chicken about 1.5 palms",
    take_label_photo: "Take label photo",
    estimate: "AI estimate",
    save_favorite: "Save",
    add_to_today: "Add to today",
    clear_today_food: "Clear today's food",
    added_to_today: "Added to today",
    today_food_cleared: "Today's food cleared",
    estimate_first: "Estimate a food first",
    add_favorite_today: "Add to today",
    history_eyebrow: "Food history",
    history_title: "Review what you ate",
    show_all: "All",
    filter_date: "Filter date",
    no_food_history: "No food history yet.",
    delete_log: "Delete",
    ai_endpoint: "AI analysis endpoint",
    ai_not_configured: "Real AI is not configured. This is only a low-confidence rough estimate.",
    ai_analyzing: "Analyzing multiple photos...",
    ai_failed: "AI analysis failed. Check endpoint, key, or network.",
    ai_fallback_rough: "Fell back to a low-confidence local rough estimate.",
    ai_exact_label: "Nutrition label calculation",
    ai_visual_estimate: "Visual estimate",
    local_rough_estimate: "Local rough estimate",
    saved_food: "Saved food",
    ai_photo_privacy: "With real AI enabled, selected food photos are sent to your configured AI service.",
    real_ai_ready: "Real AI connected",
    rough_mode: "Rough mode",
    result_eyebrow: "Estimate",
    awaiting_scan: "Waiting",
    calories_short: "Cal",
    protein_short: "Protein",
    carbs: "Carbs",
    fat: "Fat",
    food_empty_note: "After a photo or text entry, TrainLog estimates calories, macros, and confidence.",
    favorites_eyebrow: "Saved foods",
    favorites_title: "Reuse fast",
    no_favorites: "No saved foods yet. Save a frequent combo first.",
    body_eyebrow: "Physique and posture",
    body_title: "Direct posture notes, motivating physique feedback",
    front: "Front",
    side: "Side",
    back: "Back",
    analyze_body: "Analyze physique and posture",
    neck_tag: "Forward head",
    shoulder_tag: "Rounded shoulders",
    hip_tag: "Pelvis control",
    physique_eyebrow: "Physique",
    physique_title: "Next phase focus",
    future_eyebrow: "Future reference",
    future_title: "Generate goal visual",
    future_note: "For motivation and direction, not a medical or outcome promise.",
    generate: "Generate",
    plan_eyebrow: "Training plan",
    plan_title: "6 sessions + posture work",
    today_training_eyebrow: "Today session",
    mobility_eyebrow: "Posture reset",
    mobility_title: "8 minute primer",
    custom_training_eyebrow: "Custom training",
    custom_training_title: "Edit this day",
    exercise_name: "Exercise name",
    exercise_detail: "Sets and notes",
    exercise_name_placeholder: "Example: incline dumbbell press",
    exercise_detail_placeholder: "4 sets, 8-10 reps",
    save_exercise: "Save exercise",
    clear_form: "Clear",
    reset_training: "Reset this day",
    training_edit_note: "Editing or deleting a default exercise creates your own copy of this day's plan.",
    edit: "Edit",
    delete: "Delete",
    exercise_saved: "Exercise saved",
    training_reset_done: "Defaults restored",
    review_eyebrow: "Weekly review",
    review_title: "Track trends, not one day",
    trend_eyebrow: "7 day trend",
    trend_title: "Calories and protein",
    best_win: "Best win",
    best_win_text: "Generated after you start",
    best_win_copy: "After you log food, training, and posture, this shows your most consistent win.",
    main_risk: "Main risk",
    main_risk_text: "No risk yet",
    main_risk_copy: "TrainLog will not guess from thin data. Log a few days first.",
    next_adjustment: "Next adjustment",
    next_adjustment_text: "Waiting for week one data",
    next_adjustment_copy: "After one week, adjust calories, training volume, and posture tasks.",
    profile_eyebrow: "Profile",
    profile_title: "Your experiment settings",
    height: "Height",
    weight: "Weight",
    age: "Age",
    training_days: "Training days",
    goal: "Goal",
    save_profile: "Save goal",
    privacy_note: "Body photos stay as local previews by default. Posture analysis is not a medical diagnosis.",
    nav_today: "Today",
    nav_food: "Food",
    nav_body: "Body",
    nav_plan: "Plan",
    nav_review: "Review",
    saved: "Saved",
    estimated: "Estimated",
    body_done: "Analysis complete",
    future_done: "Goal visual queued",
    use: "Use",
    confidence: "Confidence",
    sync_eyebrow: "Standalone app and sync",
    sync_title: "Share data across phone and PC",
    local_only: "Local only",
    cloud_ready: "Cloud ready",
    sync_intro: "For real use, deploy TrainLog to HTTPS, then add it to your phone home screen. With cloud sync enabled, phone and PC can share the same data from the same URL.",
    sync_endpoint: "Sync endpoint",
    sync_key: "Sync key",
    device_name: "Device name",
    save_sync: "Save sync settings",
    push_sync: "Upload to cloud",
    pull_sync: "Restore from cloud",
    export_data: "Export backup",
    import_data: "Import backup",
    sync_note: "TrainLog is local-first. Without a sync endpoint, data only stays in this browser.",
    sync_saved: "Sync settings saved",
    sync_missing: "Add a sync endpoint and sync key first.",
    sync_upload_done: "Uploaded to cloud",
    sync_pull_done: "Restored from cloud",
    sync_failed: "Sync failed. Check endpoint, key, or network.",
    export_done: "Exported",
    import_done: "Imported"
  }
};

const defaultState = {
  lang: "zh",
  calories: 0,
  protein: 0,
  caloriesGoal: 2250,
  proteinGoal: 135,
  streak: 0,
  xp: 0,
  level: 1,
  activeMealType: "meal",
  activePlanDay: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][new Date().getDay()],
  favorites: [],
  foodLogs: [],
  foodLogVersion: 1,
  customTraining: {},
  quests: [
    { id: "protein", titleZh: "蛋白质达到 135g", titleEn: "Reach 135g protein", detailZh: "从第一餐开始记录", detailEn: "Start with your first meal", xp: 40, done: false },
    { id: "posture", titleZh: "训练前肩胛激活", titleEn: "Scapula primer before training", detailZh: "面拉 + 墙天使 + Y raise", detailEn: "Face pulls + wall slides + Y raise", xp: 30, done: false },
    { id: "photo", titleZh: "更新一张体态照", titleEn: "Update one posture photo", detailZh: "侧面最能看出头和骨盆", detailEn: "Side view shows head and pelvis best", xp: 25, done: false }
  ],
  completedExercises: {},
  profile: {
    height: 177,
    weight: 66,
    age: 20,
    days: 6,
    goal: "改善体态，上镜更好看，练出腹肌。"
  },
  sync: {
    endpoint: "",
    key: "",
    deviceName: "",
    lastSync: "",
    lastStatus: ""
  },
  ai: {
    endpoint: ""
  },
  updatedAt: ""
};

let state = loadState();
let pendingFoodEstimate = null;
let foodImages = [];
let labelImages = [];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return mergeState(structuredClone(defaultState), stored || {});
  } catch {
    return structuredClone(defaultState);
  }
}

function mergeState(base, incoming) {
  const merged = { ...base, ...incoming };
  merged.profile = { ...base.profile, ...(incoming.profile || {}) };
  merged.sync = { ...base.sync, ...(incoming.sync || {}) };
  merged.ai = { ...base.ai, ...(incoming.ai || {}) };
  merged.quests = Array.isArray(incoming.quests) ? incoming.quests : base.quests;
  merged.favorites = Array.isArray(incoming.favorites) ? incoming.favorites : base.favorites;
  merged.foodLogs = Array.isArray(incoming.foodLogs) ? incoming.foodLogs : base.foodLogs;
  merged.completedExercises = incoming.completedExercises || base.completedExercises;
  merged.customTraining = incoming.customTraining || base.customTraining;
  if (incoming.foodLogVersion !== 1) {
    merged.foodLogs = [];
    merged.calories = 0;
    merged.protein = 0;
    merged.foodLogVersion = 1;
  }
  return merged;
}

function saveState(options = {}) {
  if (options.touch !== false) {
    state.updatedAt = new Date().toISOString();
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function t(key) {
  return translations[state.lang][key] || translations.zh[key] || key;
}

function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  $("[id='languageToggle']").textContent = lang === "zh" ? "EN" : "中";
  $$("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  $$("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  saveState();
  renderAll();
}

function clamp(number, min, max) {
  return Math.min(max, Math.max(min, number));
}

function renderStats() {
  const calorieRatio = clamp(state.calories / state.caloriesGoal, 0, 1);
  const proteinRatio = clamp(state.protein / state.proteinGoal, 0, 1);
  const hasActivity = state.calories > 0 || state.protein > 0 || state.xp > 0 || state.quests.some((quest) => quest.done);
  const readiness = Math.round(72 + proteinRatio * 13 + state.quests.filter((quest) => quest.done).length * 2);
  $("#caloriesValue").textContent = state.calories.toLocaleString();
  $("#caloriesGoal").textContent = state.caloriesGoal.toLocaleString();
  $("#proteinValue").textContent = state.protein;
  $("#proteinGoal").textContent = state.proteinGoal;
  $("#streakValue").textContent = state.streak;
  $("#xpValue").textContent = state.xp;
  $("#levelValue").textContent = state.level;
  $("#nextLevelValue").textContent = `${Math.max(0, 500 - state.xp)} XP`;
  $("#caloriesBar").style.width = `${calorieRatio * 100}%`;
  $("#proteinBar").style.width = `${proteinRatio * 100}%`;
  $("#readinessScore").textContent = hasActivity ? clamp(readiness, 0, 98) : "--";
  const readinessArc = hasActivity ? clamp(readiness, 0, 100) : 0;
  $(".score-orbit").style.background = `radial-gradient(circle at center, #181a19 54%, transparent 55%), conic-gradient(var(--green) 0 ${readinessArc}%, rgba(255,255,255,.12) ${readinessArc}% 100%)`;
}

function renderQuests() {
  $("#questList").innerHTML = state.quests
    .map((quest) => {
      const title = state.lang === "zh" ? quest.titleZh : quest.titleEn;
      const detail = state.lang === "zh" ? quest.detailZh : quest.detailEn;
      return `
        <button class="quest-item ${quest.done ? "is-complete" : ""}" data-quest="${quest.id}" type="button">
          <span class="check-dot"></span>
          <span><strong>${title}</strong><small>${detail}</small></span>
          <span class="quest-xp">+${quest.xp}</span>
        </button>
      `;
    })
    .join("");
}

function renderFavorites() {
  if (!state.favorites.length) {
    $("#favoriteList").innerHTML = `<p class="muted">${t("no_favorites")}</p>`;
    return;
  }
  $("#favoriteList").innerHTML = state.favorites
    .map(
      (item, index) => `
      <article class="favorite-item">
        <span><strong>${item.name}</strong><small>${item.calories} kcal · P ${item.protein}g · C ${item.carbs}g · F ${item.fat}g</small></span>
        <button class="favorite-use-button" data-favorite="${index}" type="button">${t("add_favorite_today")}</button>
      </article>
    `
    )
    .join("");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderFoodHistory() {
  const selectedDate = $("#historyDateInput")?.value || "";
  const logs = state.foodLogs
    .filter((item) => !selectedDate || item.date === selectedDate)
    .slice()
    .sort((a, b) => String(b.createdAt || b.id).localeCompare(String(a.createdAt || a.id)));

  if (!logs.length) {
    $("#foodHistoryList").innerHTML = `<p class="muted">${t("no_food_history")}</p>`;
    return;
  }

  $("#foodHistoryList").innerHTML = logs
    .map((item) => {
      const source = t(item.source || "local_rough_estimate");
      const time = item.createdAt
        ? new Date(item.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        : "";
      return `
        <article class="food-history-item">
          ${item.thumbnail ? `<img src="${item.thumbnail}" alt="" />` : `<div class="food-history-placeholder"></div>`}
          <div>
            <div class="food-history-heading">
              <strong>${escapeHtml(item.name)}</strong>
              <small>${escapeHtml(item.date)} ${escapeHtml(time)}</small>
            </div>
            <p>${item.calories} kcal · P ${item.protein}g · C ${item.carbs || 0}g · F ${item.fat || 0}g</p>
            <small>${escapeHtml(source)}${item.servingSummary ? ` · ${escapeHtml(item.servingSummary)}` : ""}</small>
          </div>
          <button class="tiny-button danger" data-delete-food-log="${escapeHtml(item.id)}" type="button">${t("delete_log")}</button>
        </article>
      `;
    })
    .join("");
}

function renderMealType() {
  $$(".chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.mealType === state.activeMealType);
  });
  const config = mealModeConfig()[state.activeMealType] || mealModeConfig().meal;
  $("#mealModeTitle").textContent = config.title;
  $("#mealModeCopy").textContent = config.copy;
  $("#foodUploadTitle").textContent = config.foodUploadTitle;
  $("#foodUploadHint").textContent = config.foodUploadHint;
  $("#labelUploadTitle").textContent = config.labelUploadTitle;
  $("#labelUploadHint").textContent = config.labelUploadHint;
  $("#foodName").placeholder = config.namePlaceholder;
  $("#foodGrams").placeholder = config.gramsPlaceholder;
  $("#foodNotes").placeholder = config.notesPlaceholder;
  $("#foodUploadZone").hidden = !config.showFoodUpload;
  $("#labelUploadZone").hidden = !config.showLabelUpload;
  $("#foodPreviewGrid").hidden = !config.showFoodUpload;
  $("#labelPreviewGrid").hidden = !config.showLabelUpload;
  $("#cameraActionRow").hidden = !config.showFoodUpload;
  $("#takeLabelPhotoButton").hidden = !config.showLabelUpload;
  $("#takeFoodPhotoLabel").textContent =
    state.activeMealType === "package"
      ? state.lang === "zh"
        ? "拍包装照片"
        : "Take package photo"
      : state.lang === "zh"
        ? "直接拍餐食"
        : "Take meal photo";
  $("#mealModeCard").dataset.mode = state.activeMealType;
}

function renderFoodAiStatus() {
  const pill = $("#foodAiStatusPill");
  const ready = Boolean(aiEndpoint());
  pill.textContent = ready ? t("real_ai_ready") : t("rough_mode");
  pill.classList.toggle("is-online", ready);
}

function mealModeConfig() {
  const zh = state.lang === "zh";
  return {
    meal: {
      title: zh ? "饭菜肉模式" : "Meal mode",
      copy: zh
        ? "适合饭、菜、肉、外食便当。上传餐食照片，补充克数会更准。"
        : "For rice, vegetables, meat, and restaurant meals. Add a meal photo; grams improve accuracy.",
      foodUploadTitle: zh ? "上传整餐照片" : "Upload full meal photo",
      foodUploadHint: zh ? "尽量拍到主食、肉和配菜比例" : "Capture carbs, protein, and vegetables clearly",
      labelUploadTitle: zh ? "营养表" : "Nutrition label",
      labelUploadHint: zh ? "饭菜肉通常不需要" : "Usually not needed for meals",
      namePlaceholder: zh ? "例如：牛肉饭 + 青菜" : "Example: beef rice + greens",
      gramsPlaceholder: zh ? "可选，例：450" : "Optional, e.g. 450",
      notesPlaceholder: zh ? "例如：少油，半碗饭，牛肉一掌" : "Example: low oil, half bowl rice, one palm beef",
      showFoodUpload: true,
      showLabelUpload: false,
      defaultGrams: 420,
      caloriesPerGram: 1.35,
      proteinRatio: 0.105,
      carbsRatio: 0.24,
      fatRatio: 0.035,
      baseConfidence: 58
    },
    package: {
      title: zh ? "包装食品模式" : "Packaged food mode",
      copy: zh
        ? "适合零食、面包、饮料、即食食品。拍营养表会明显提高准确度。"
        : "For snacks, bread, drinks, and ready-to-eat foods. Label photos greatly improve accuracy.",
      foodUploadTitle: zh ? "上传包装正面或食物照片" : "Upload package front or food photo",
      foodUploadHint: zh ? "如果只拍正面，也可以先估算" : "Front photo can still give a rough estimate",
      labelUploadTitle: zh ? "上传营养表" : "Upload nutrition label",
      labelUploadHint: zh ? "建议上传" : "Recommended",
      namePlaceholder: zh ? "例如：巧克力面包 / 无糖可乐" : "Example: chocolate bun / diet cola",
      gramsPlaceholder: zh ? "可选，例：80" : "Optional, e.g. 80",
      notesPlaceholder: zh ? "例如：一包吃完，或只吃了一半" : "Example: whole pack, or only half",
      showFoodUpload: true,
      showLabelUpload: true,
      defaultGrams: 80,
      caloriesPerGram: 3.4,
      proteinRatio: 0.08,
      carbsRatio: 0.52,
      fatRatio: 0.12,
      baseConfidence: 64
    },
    manual: {
      title: zh ? "手动输入模式" : "Manual mode",
      copy: zh
        ? "适合你知道食物和克数时使用。不需要照片，直接输入名称、克数和备注。"
        : "Use this when you know the food and amount. No photo needed; enter name, grams, and notes.",
      foodUploadTitle: zh ? "不需要照片" : "No photo needed",
      foodUploadHint: zh ? "直接填写下面的信息" : "Fill in the fields below",
      labelUploadTitle: zh ? "不需要营养表" : "No label needed",
      labelUploadHint: zh ? "手动输入模式" : "Manual mode",
      namePlaceholder: zh ? "例如：米饭 150g + 鸡胸 180g" : "Example: rice 150g + chicken 180g",
      gramsPlaceholder: zh ? "建议填写，例：330" : "Recommended, e.g. 330",
      notesPlaceholder: zh ? "例如：按熟重，鸡胸无皮，米饭一碗" : "Example: cooked weight, skinless chicken, one bowl rice",
      showFoodUpload: false,
      showLabelUpload: false,
      defaultGrams: 300,
      caloriesPerGram: 1.5,
      proteinRatio: 0.13,
      carbsRatio: 0.25,
      fatRatio: 0.04,
      baseConfidence: 62
    }
  };
}

function hasFoodPhotos() {
  return foodImages.length > 0;
}

function hasLabelPhotos() {
  return labelImages.length > 0;
}

function parseAmountCount(amount) {
  const normalized = amount.toLowerCase().replace(",", ".");
  if (/(半|half)/i.test(normalized)) return 0.5;
  const match = normalized.match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : 0;
}

function breadSliceRoughEstimate(amount, name) {
  const sliceCount = parseAmountCount(amount);
  const looksLikeSlices = /(片|slice|slices)/i.test(amount);
  if (!sliceCount || !looksLikeSlices) return null;
  return {
    name: name || (state.lang === "zh" ? "面包片（粗略）" : "Bread slices (rough)"),
    calories: Math.round(sliceCount * 100.5),
    protein: Number((sliceCount * 3.7).toFixed(1)),
    carbs: Number((sliceCount * 17.95).toFixed(1)),
    fat: Number((sliceCount * 1.25).toFixed(1)),
    confidence: 34,
    mode: state.activeMealType,
    source: "local_rough_estimate",
    servingSummary: amount,
    reasoning:
      state.lang === "zh"
        ? `粗略模式无法读取照片，暂按普通全麦面包每片约 101 kcal 估算。`
        : "Rough mode cannot read photos, so this temporarily uses about 101 kcal per wholemeal bread slice.",
    warnings: [
      state.lang === "zh"
        ? "这不是营养表识别结果；连接真实 AI 后才能读取包装上的每份数据。"
        : "This is not a nutrition-label reading. Connect real AI to read the package values."
    ]
  };
}

function localFoodEstimate() {
  const grams = Number($("#foodGrams").value || 0);
  const amount = $("#foodAmount").value.trim();
  const name = $("#foodName").value.trim() || (state.lang === "zh" ? "未命名食物" : "Unnamed food");
  if (!grams) {
    const sliceEstimate = breadSliceRoughEstimate(amount, $("#foodName").value.trim());
    if (sliceEstimate) return sliceEstimate;
  }
  const config = mealModeConfig()[state.activeMealType] || mealModeConfig().meal;
  const effectiveGrams = grams || config.defaultGrams;
  const hasFoodPhoto = hasFoodPhotos();
  const hasLabel = hasLabelPhotos();
  const hasNotes = Boolean($("#foodNotes").value.trim());
  const calories = Math.round(effectiveGrams * config.caloriesPerGram);
  const protein = Math.round(clamp(effectiveGrams * config.proteinRatio, 2, 75));
  const carbs = Math.round(clamp(effectiveGrams * config.carbsRatio, 0, 150));
  const fat = Math.round(clamp(effectiveGrams * config.fatRatio, 0, 45));
  const confidence = clamp(
    28 +
      (grams ? 10 : 0) +
      (hasFoodPhoto && config.showFoodUpload ? 3 : 0) +
      (hasLabel && state.activeMealType === "package" ? 3 : 0) +
      (hasNotes ? 5 : 0),
    20,
    49
  );

  return {
    name,
    calories,
    protein,
    carbs,
    fat,
    confidence,
    mode: state.activeMealType,
    source: "local_rough_estimate",
    servingSummary: amount || (grams ? `${grams}g` : `~${effectiveGrams}g`),
    reasoning:
      state.lang === "zh"
        ? "未连接真实视觉 AI，仅按食物模式和克数进行粗略计算。"
        : "Real vision AI is not connected; this uses only mode and grams.",
    warnings: [t("ai_not_configured")]
  };
}

function renderFoodEstimate(result) {
  $("#foodResultTitle").textContent = result.name;
  $("#resultCalories").textContent = `${Math.round(result.calories)} kcal`;
  $("#resultProtein").textContent = `${Number(result.protein).toFixed(1)}g`;
  $("#resultCarbs").textContent = `${Number(result.carbs).toFixed(1)}g`;
  $("#resultFat").textContent = `${Number(result.fat).toFixed(1)}g`;
  $("#confidencePill").textContent = `${t("confidence")} ${Math.round(result.confidence)}%`;
  const sourceLabel = t(result.source) || result.source;
  const warningText = Array.isArray(result.warnings) && result.warnings.length ? ` ${result.warnings.join(" ")}` : "";
  const calculationText = result.calculation ? ` ${result.calculation}.` : "";
  $("#foodCoachNote").textContent = `${sourceLabel} · ${result.servingSummary || ""}.${calculationText} ${result.reasoning || ""}${warningText}`;
  pendingFoodEstimate = {
    ...result,
    calories: Math.round(Number(result.calories) || 0),
    protein: Number(Number(result.protein || 0).toFixed(1)),
    carbs: Number(Number(result.carbs || 0).toFixed(1)),
    fat: Number(Number(result.fat || 0).toFixed(1)),
    confidence: Math.round(Number(result.confidence) || 0),
    mode: state.activeMealType,
    thumbnail: foodImages[0]?.thumbnail || labelImages[0]?.thumbnail || "",
    notes: $("#foodNotes").value.trim()
  };
}

function aiEndpoint() {
  return (state.ai.endpoint || state.sync.endpoint || "").replace(/\/+$/, "");
}

async function estimateFood() {
  const button = $("#estimateFoodButton");
  const original = button.textContent;
  button.disabled = true;
  button.textContent = t("ai_analyzing");
  const endpoint = aiEndpoint();

  try {
    if (!endpoint) {
      const rough = localFoodEstimate();
      renderFoodEstimate(rough);
      return;
    }

    const response = await fetch(`${endpoint}/analyze-food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-TrainLog-Key": state.sync.key || ""
      },
      body: JSON.stringify({
        mode: state.activeMealType,
        language: state.lang,
        name: $("#foodName").value.trim(),
        amount: $("#foodAmount").value.trim(),
        grams: Number($("#foodGrams").value || 0),
        notes: $("#foodNotes").value.trim(),
        foodImages: foodImages.map((item) => item.dataUrl),
        labelImages: labelImages.map((item) => item.dataUrl)
      })
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const result = await response.json();
    renderFoodEstimate(result);
  } catch {
    const rough = localFoodEstimate();
    rough.warnings = [t("ai_failed"), t("ai_fallback_rough")];
    renderFoodEstimate(rough);
  } finally {
    button.disabled = false;
    button.textContent = original;
  }
}

function todayKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function recalculateFoodTotals() {
  const today = todayKey();
  const todayLogs = state.foodLogs.filter((item) => item.date === today);
  state.calories = todayLogs.reduce((total, item) => total + Number(item.calories || 0), 0);
  state.protein = todayLogs.reduce((total, item) => total + Number(item.protein || 0), 0);
}

function addFoodLog(item) {
  state.foodLogs.push({
    ...item,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    date: todayKey(),
    createdAt: new Date().toISOString()
  });
  recalculateFoodTotals();
  saveState();
  renderStats();
  renderFoodHistory();
}

function addPendingFoodToToday() {
  if (!pendingFoodEstimate) {
    $("#foodCoachNote").textContent = t("estimate_first");
    flashButton("#addFoodToTodayButton", t("estimate_first"));
    return;
  }
  addFoodLog(pendingFoodEstimate);
  pendingFoodEstimate = null;
  foodImages = [];
  labelImages = [];
  renderFoodImagePreviews();
  $("#foodCoachNote").textContent =
    state.lang === "zh" ? "已记录一次，不会因为重复估算而累加。" : "Logged once. Re-estimating will not add duplicates.";
  flashButton("#addFoodToTodayButton", t("added_to_today"));
}

function clearTodayFood() {
  const today = todayKey();
  state.foodLogs = state.foodLogs.filter((item) => item.date !== today);
  recalculateFoodTotals();
  saveState();
  renderStats();
  renderFoodHistory();
  $("#foodCoachNote").textContent = t("today_food_cleared");
  flashButton("#clearTodayFoodButton", t("today_food_cleared"));
}

function saveFavorite() {
  const name = $("#foodName").value.trim() || (state.lang === "zh" ? "常用食物" : "Saved food");
  const caloriesText = $("#resultCalories").textContent;
  const proteinText = $("#resultProtein").textContent;
  const carbsText = $("#resultCarbs").textContent;
  const fatText = $("#resultFat").textContent;
  const fallback = pendingFoodEstimate || { calories: 520, protein: 36, carbs: 58, fat: 14 };
  state.favorites.unshift({
    name,
    calories: Number.parseInt(caloriesText, 10) || fallback.calories,
    protein: Number.parseInt(proteinText, 10) || fallback.protein,
    carbs: Number.parseInt(carbsText, 10) || fallback.carbs,
    fat: Number.parseInt(fatText, 10) || fallback.fat
  });
  state.favorites = state.favorites.slice(0, 8);
  saveState();
  renderFavorites();
  flashButton("#saveFavoriteButton", t("saved"));
}

function useFavorite(index) {
  const item = state.favorites[index];
  if (!item) return;
  $("#foodName").value = item.name;
  $("#foodGrams").value = "";
  $("#foodResultTitle").textContent = item.name;
  $("#resultCalories").textContent = `${item.calories} kcal`;
  $("#resultProtein").textContent = `${item.protein}g`;
  $("#resultCarbs").textContent = `${item.carbs}g`;
  $("#resultFat").textContent = `${item.fat}g`;
  $("#confidencePill").textContent = `${t("confidence")} 91%`;
  $("#foodCoachNote").textContent =
    state.lang === "zh" ? "已将这份常用食物加入今日一次。" : "Saved food added to today once.";
  addFoodLog({ ...item, source: "saved_food", servingSummary: state.lang === "zh" ? "常用食物" : "Saved food" });
}

function renderBodyAnalysis() {
  const postureItems = [
    {
      tone: "risk",
      zh: ["头前伸倾向", "常见原因是久坐、颈深屈肌弱、胸椎伸展不足。先做下巴回收和胸椎伸展。"],
      en: ["Forward head tendency", "Often linked to sitting, weak deep neck flexors, and limited thoracic extension. Start with chin tucks and thoracic extension."]
    },
    {
      tone: "work",
      zh: ["圆肩和肩胛控制", "胸小肌紧、下斜方和前锯肌弱会让上镜显窄。训练前加面拉、墙天使、Y raise。"],
      en: ["Rounded shoulders and scapula control", "Tight pec minor plus weak lower traps and serratus can make the frame look narrower. Add face pulls, wall slides, and Y raises."]
    },
    {
      tone: "win",
      zh: ["当前优势", "体重和训练频率适合做轻微减脂。保持蛋白质，腹肌线条会比盲目大减重更稳。"],
      en: ["Current advantage", "Your weight and training frequency fit a small cut. Keep protein high for a steadier abs phase than an aggressive cut."]
    }
  ];

  $("#postureList").innerHTML = postureItems
    .map((item) => {
      const [title, detail] = item[state.lang];
      return `<article class="analysis-item" data-tone="${item.tone}"><strong>${title}</strong><small>${detail}</small></article>`;
    })
    .join("");

  const focusItems = [
    {
      zh: ["上胸和肩宽", "推日增加上斜哑铃卧推和侧平举容量。"],
      en: ["Upper chest and shoulder width", "Add incline dumbbell press and more lateral raise volume on push days."]
    },
    {
      zh: ["背阔和后束", "拉日用胸托划船、宽握下拉和反向飞鸟做视觉宽度。"],
      en: ["Lats and rear delts", "Use chest-supported rows, wide pulldowns, and reverse flyes for visual width."]
    },
    {
      zh: ["腹肌显现", "热量小缺口，核心做抗伸展，不靠每天卷腹硬堆。"],
      en: ["Visible abs", "Use a small calorie deficit and anti-extension core work instead of piling on crunches."]
    },
    {
      zh: ["上镜姿态", "练胸椎打开和肩胛后收，下巴微收会立刻改善镜头感。"],
      en: ["Camera posture", "Open the thoracic spine, set scapulae, and slightly tuck the chin for an instant camera upgrade."]
    }
  ];

  $("#physiqueFocus").innerHTML = focusItems
    .map((item) => {
      const [title, detail] = item[state.lang];
      return `<article><strong>${title}</strong><p>${detail}</p></article>`;
    })
    .join("");
}

let editingExerciseKey = "";

function getTrainingPlan() {
  return [
    {
      id: "mon",
      day: "Mon",
      zh: "推",
      en: "Push",
      titleZh: "推：上胸 + 肩宽",
      titleEn: "Push: upper chest + width",
      load: 76,
      exercises: [
        { id: "incline", zh: ["上斜哑铃卧推", "4 组，8-10 次"], en: ["Incline dumbbell press", "4 sets, 8-10 reps"] },
        { id: "press", zh: ["坐姿肩推", "3 组，8-10 次"], en: ["Seated shoulder press", "3 sets, 8-10 reps"] },
        { id: "lateral", zh: ["侧平举", "4 组，12-20 次"], en: ["Lateral raise", "4 sets, 12-20 reps"] },
        { id: "fly", zh: ["绳索夹胸", "3 组，12-15 次"], en: ["Cable fly", "3 sets, 12-15 reps"] },
        { id: "triceps", zh: ["绳索下压", "3 组，10-12 次"], en: ["Rope pressdown", "3 sets, 10-12 reps"] }
      ]
    },
    {
      id: "tue",
      day: "Tue",
      zh: "拉",
      en: "Pull",
      titleZh: "拉：背宽 + 体态",
      titleEn: "Pull: back width + posture",
      load: 72,
      exercises: [
        { id: "pullup", zh: ["引体向上或高位下拉", "4 组，8-12 次"], en: ["Pull-up or lat pulldown", "4 sets, 8-12 reps"] },
        { id: "row", zh: ["胸托划船", "4 组，8-10 次"], en: ["Chest-supported row", "4 sets, 8-10 reps"] },
        { id: "rear", zh: ["反向飞鸟", "3 组，15-20 次"], en: ["Reverse fly", "3 sets, 15-20 reps"] },
        { id: "curl", zh: ["上斜哑铃弯举", "3 组，10-12 次"], en: ["Incline dumbbell curl", "3 sets, 10-12 reps"] },
        { id: "core", zh: ["死虫 + 侧桥", "各 3 组"], en: ["Dead bug + side plank", "3 rounds each"] }
      ]
    },
    {
      id: "wed",
      day: "Wed",
      zh: "腿",
      en: "Legs",
      titleZh: "腿：臀腿 + 核心",
      titleEn: "Legs: glutes + core",
      load: 82,
      exercises: [
        { id: "squat", zh: ["深蹲或腿举", "4 组，6-10 次"], en: ["Squat or leg press", "4 sets, 6-10 reps"] },
        { id: "rdl", zh: ["罗马尼亚硬拉", "4 组，8-10 次"], en: ["Romanian deadlift", "4 sets, 8-10 reps"] },
        { id: "split", zh: ["保加利亚分腿蹲", "3 组，每侧 10 次"], en: ["Bulgarian split squat", "3 sets, 10 each side"] },
        { id: "curl", zh: ["腿弯举", "3 组，12-15 次"], en: ["Leg curl", "3 sets, 12-15 reps"] },
        { id: "abs", zh: ["悬垂举腿或卷腹", "3 组，10-15 次"], en: ["Hanging knee raise or crunch", "3 sets, 10-15 reps"] }
      ]
    },
    {
      id: "thu",
      day: "Thu",
      zh: "推",
      en: "Push",
      titleZh: "推：胸肩容量",
      titleEn: "Push: chest + delt volume",
      load: 70,
      exercises: [
        { id: "bench", zh: ["平板卧推或俯卧撑", "4 组，8-12 次"], en: ["Bench press or push-up", "4 sets, 8-12 reps"] },
        { id: "machine", zh: ["器械推胸", "3 组，10-12 次"], en: ["Machine chest press", "3 sets, 10-12 reps"] },
        { id: "lateral", zh: ["侧平举递减组", "3 轮"], en: ["Lateral raise drop set", "3 rounds"] },
        { id: "yraise", zh: ["Y raise", "3 组，12-15 次"], en: ["Y raise", "3 sets, 12-15 reps"] },
        { id: "plank", zh: ["平板支撑", "3 组，45 秒"], en: ["Plank", "3 sets, 45 seconds"] }
      ]
    },
    {
      id: "fri",
      day: "Fri",
      zh: "拉",
      en: "Pull",
      titleZh: "拉：背厚 + 后束",
      titleEn: "Pull: back thickness + rear delts",
      load: 74,
      exercises: [
        { id: "row", zh: ["杠铃或器械划船", "4 组，8-10 次"], en: ["Barbell or machine row", "4 sets, 8-10 reps"] },
        { id: "pulldown", zh: ["宽握下拉", "4 组，10-12 次"], en: ["Wide-grip pulldown", "4 sets, 10-12 reps"] },
        { id: "facepull", zh: ["面拉", "3 组，15-20 次"], en: ["Face pull", "3 sets, 15-20 reps"] },
        { id: "shrug", zh: ["哑铃耸肩", "3 组，10-12 次"], en: ["Dumbbell shrug", "3 sets, 10-12 reps"] },
        { id: "curl", zh: ["锤式弯举", "3 组，10-12 次"], en: ["Hammer curl", "3 sets, 10-12 reps"] }
      ]
    },
    {
      id: "sat",
      day: "Sat",
      zh: "腿",
      en: "Legs",
      titleZh: "腿：线条 + 稳定",
      titleEn: "Legs: shape + stability",
      load: 68,
      exercises: [
        { id: "front", zh: ["前蹲或哈克深蹲", "4 组，8-10 次"], en: ["Front squat or hack squat", "4 sets, 8-10 reps"] },
        { id: "hipthrust", zh: ["臀推", "4 组，8-12 次"], en: ["Hip thrust", "4 sets, 8-12 reps"] },
        { id: "extension", zh: ["腿屈伸", "3 组，12-15 次"], en: ["Leg extension", "3 sets, 12-15 reps"] },
        { id: "calf", zh: ["提踵", "4 组，12-20 次"], en: ["Calf raise", "4 sets, 12-20 reps"] },
        { id: "sideplank", zh: ["侧桥", "每侧 3 组"], en: ["Side plank", "3 sets each side"] }
      ]
    },
    {
      id: "sun",
      day: "Sun",
      zh: "恢复",
      en: "Reset",
      titleZh: "恢复：体态 + 复盘",
      titleEn: "Reset: posture + review",
      load: 36,
      exercises: [
        { id: "walk", zh: ["轻松步行", "30-45 分钟"], en: ["Easy walk", "30-45 minutes"] },
        { id: "mobility", zh: ["胸椎活动", "8 分钟"], en: ["Thoracic mobility", "8 minutes"] },
        { id: "hips", zh: ["髋屈肌拉伸", "每侧 60 秒"], en: ["Hip flexor stretch", "60 seconds each side"] },
        { id: "breath", zh: ["仰卧呼吸", "3 组，6 次慢呼吸"], en: ["Supine breathing", "3 sets, 6 slow breaths"] },
        { id: "review", zh: ["更新体重或照片", "记录本周变化"], en: ["Update weight or photos", "Log weekly changes"] }
      ]
    }
  ];
}

function getActiveTrainingDay() {
  const week = getTrainingPlan();
  return week.find((item) => item.id === state.activePlanDay) || week[0];
}

function cloneExercise(exercise) {
  return {
    id: exercise.id,
    zh: [...exercise.zh],
    en: [...exercise.en]
  };
}

function ensureCustomTrainingDay(dayId) {
  state.customTraining ||= {};
  if (!state.customTraining[dayId]) {
    const day = getTrainingPlan().find((item) => item.id === dayId);
    state.customTraining[dayId] = (day?.exercises || []).map(cloneExercise);
  }
  return state.customTraining[dayId];
}

function getExercisesForDay(day) {
  return state.customTraining?.[day.id] || day.exercises;
}

function renderTraining() {
  const week = getTrainingPlan();
  const activeDay = getActiveTrainingDay();
  const activeExercises = getExercisesForDay(activeDay);
  $("#weekStrip").innerHTML = week
    .map(
      (item) => `
      <button class="day-pill ${item.id === activeDay.id ? "is-active" : ""}" data-plan-day="${item.id}" type="button">
        <strong>${item.day}</strong>
        <small>${state.lang === "zh" ? item.zh : item.en}</small>
      </button>`
    )
    .join("");

  $("#trainingTitle").textContent = state.lang === "zh" ? activeDay.titleZh : activeDay.titleEn;
  $("#trainingLoad").textContent = `${activeDay.load}%`;
  $("#exerciseList").innerHTML = activeExercises
    .map((exercise) => {
      const [title, sets] = exercise[state.lang];
      const exerciseKey = `${activeDay.id}:${exercise.id}`;
      const done = state.completedExercises[exerciseKey];
      return `
        <article class="exercise-item ${done ? "is-complete" : ""}" data-exercise="${exerciseKey}">
          <span class="check-dot"></span>
          <span><strong>${title}</strong><small>${sets}</small></span>
          <span class="exercise-actions">
            <span class="exercise-sets">${done ? "OK" : "+10 XP"}</span>
            <button class="tiny-button" data-edit-exercise="${exerciseKey}" type="button">${t("edit")}</button>
            <button class="tiny-button danger" data-delete-exercise="${exerciseKey}" type="button">${t("delete")}</button>
          </span>
        </article>
      `;
    })
    .join("");

  const mobility = [
    { zh: ["下巴回收", "2 组，每组 8 次，停 3 秒。"], en: ["Chin tuck", "2 sets of 8 reps, hold 3 seconds."] },
    { zh: ["墙天使", "2 组，每组 10 次，保持肋骨下沉。"], en: ["Wall slide", "2 sets of 10, keep ribs down."] },
    { zh: ["髋屈肌拉伸", "每侧 45 秒，夹臀。"], en: ["Hip flexor stretch", "45 seconds each side, glute squeezed."] },
    { zh: ["前锯肌推墙", "2 组，每组 12 次。"], en: ["Serratus wall press", "2 sets of 12."] }
  ];
  $("#mobilityGrid").innerHTML = mobility
    .map((item) => {
      const [title, detail] = item[state.lang];
      return `<article><strong>${title}</strong><p>${detail}</p></article>`;
    })
    .join("");
}

function clearExerciseForm() {
  editingExerciseKey = "";
  $("#customExerciseName").value = "";
  $("#customExerciseDetail").value = "";
}

function splitExerciseKey(key) {
  const index = key.indexOf(":");
  return {
    dayId: key.slice(0, index),
    exerciseId: key.slice(index + 1)
  };
}

function editTrainingExercise(key) {
  const { dayId, exerciseId } = splitExerciseKey(key);
  state.activePlanDay = dayId;
  const exercises = ensureCustomTrainingDay(dayId);
  const exercise = exercises.find((item) => item.id === exerciseId);
  if (!exercise) return;
  editingExerciseKey = key;
  const [title, detail] = exercise[state.lang];
  $("#customExerciseName").value = title;
  $("#customExerciseDetail").value = detail;
  saveState();
  renderTraining();
}

function deleteTrainingExercise(key) {
  const { dayId, exerciseId } = splitExerciseKey(key);
  state.activePlanDay = dayId;
  const exercises = ensureCustomTrainingDay(dayId);
  const index = exercises.findIndex((item) => item.id === exerciseId);
  if (index === -1) return;
  exercises.splice(index, 1);
  delete state.completedExercises[key];
  clearExerciseForm();
  saveState();
  renderTraining();
}

function saveCustomExercise() {
  const name = $("#customExerciseName").value.trim();
  const detail = $("#customExerciseDetail").value.trim();
  if (!name) return;
  const activeDay = getActiveTrainingDay();
  const exercises = ensureCustomTrainingDay(activeDay.id);
  const exercise = {
    id: `custom-${Date.now()}`,
    zh: [name, detail || "自定义"],
    en: [name, detail || "Custom"]
  };

  if (editingExerciseKey) {
    const { dayId, exerciseId } = splitExerciseKey(editingExerciseKey);
    const targetExercises = ensureCustomTrainingDay(dayId);
    const index = targetExercises.findIndex((item) => item.id === exerciseId);
    if (index !== -1) {
      targetExercises[index].zh = [name, detail || "自定义"];
      targetExercises[index].en = [name, detail || "Custom"];
    }
  } else {
    exercises.push(exercise);
  }

  clearExerciseForm();
  saveState();
  renderTraining();
  flashButton("#saveExerciseButton", t("exercise_saved"));
}

function resetActiveTrainingDay() {
  state.customTraining ||= {};
  delete state.customTraining[state.activePlanDay];
  Object.keys(state.completedExercises).forEach((key) => {
    if (key.startsWith(`${state.activePlanDay}:`)) {
      delete state.completedExercises[key];
    }
  });
  clearExerciseForm();
  saveState();
  renderTraining();
  flashButton("#resetTrainingButton", t("training_reset_done"));
}

function renderWeeklyChart() {
  const hasActivity = state.calories > 0 || state.protein > 0 || state.xp > 0;
  const data = hasActivity
    ? [
        [82, 66],
        [91, 84],
        [76, 72],
        [88, 86],
        [94, 82],
        [79, 76],
        [86, 89]
      ]
    : [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ];
  const labels = state.lang === "zh" ? ["一", "二", "三", "四", "五", "六", "日"] : ["M", "T", "W", "T", "F", "S", "S"];
  $("#weeklyChart").innerHTML = data
    .map(
      ([cal, pro], index) => `
      <div class="bar-day">
        <div class="bar-stack">
          <span class="bar cal" style="height:${cal}%"></span>
          <span class="bar pro" style="height:${pro}%"></span>
        </div>
        <small>${labels[index]}</small>
      </div>`
    )
    .join("");
}

function renderProfile() {
  $("#heightInput").value = state.profile.height;
  $("#weightInput").value = state.profile.weight;
  $("#ageInput").value = state.profile.age;
  $("#daysInput").value = state.profile.days;
  $("#goalInput").value = state.profile.goal;
}

function renderSync() {
  $("#syncEndpointInput").value = state.sync.endpoint || "";
  $("#syncKeyInput").value = state.sync.key || "";
  $("#deviceNameInput").value = state.sync.deviceName || "";
  $("#aiEndpointInput").value = state.ai.endpoint || state.sync.endpoint || "";
  const hasCloud = Boolean(state.sync.endpoint && state.sync.key);
  const pill = $("#syncStatusPill");
  pill.textContent = hasCloud ? t("cloud_ready") : t("local_only");
  pill.classList.toggle("is-online", hasCloud);
  pill.classList.toggle("is-error", state.sync.lastStatus === "error");
  if (state.sync.lastStatus === "error") {
    pill.textContent = t("sync_failed");
  }
  if (state.sync.lastSync) {
    $("#syncNote").textContent =
      state.lang === "zh"
        ? `上次同步：${new Date(state.sync.lastSync).toLocaleString()}`
        : `Last sync: ${new Date(state.sync.lastSync).toLocaleString()}`;
  } else {
    $("#syncNote").textContent = t("sync_note");
  }
}

function saveSyncSettings() {
  state.sync.endpoint = $("#syncEndpointInput").value.trim().replace(/\/+$/, "");
  state.sync.key = $("#syncKeyInput").value.trim();
  state.sync.deviceName = $("#deviceNameInput").value.trim() || navigator.userAgent.slice(0, 42);
  state.ai.endpoint = $("#aiEndpointInput").value.trim().replace(/\/+$/, "");
  state.sync.lastStatus = state.sync.endpoint && state.sync.key ? "ready" : "";
  saveState();
  renderSync();
  renderFoodAiStatus();
  flashButton("#saveSyncButton", t("sync_saved"));
}

function syncUrl() {
  if (!state.sync.endpoint || !state.sync.key) return "";
  return `${state.sync.endpoint.replace(/\/+$/, "")}/sync/${encodeURIComponent(state.sync.key)}`;
}

function publicStateSnapshot() {
  return {
    ...state,
    sync: {
      ...state.sync,
      key: ""
    }
  };
}

async function pushSync() {
  saveSyncSettings();
  const url = syncUrl();
  if (!url) {
    setSyncError(t("sync_missing"));
    return;
  }
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        app: "TrainLog",
        version: 1,
        deviceName: state.sync.deviceName,
        updatedAt: state.updatedAt || new Date().toISOString(),
        state: publicStateSnapshot()
      })
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.sync.lastSync = new Date().toISOString();
    state.sync.lastStatus = "ok";
    saveState({ touch: false });
    renderSync();
    flashButton("#pushSyncButton", t("sync_upload_done"));
  } catch {
    setSyncError(t("sync_failed"));
  }
}

async function pullSync() {
  saveSyncSettings();
  const url = syncUrl();
  if (!url) {
    setSyncError(t("sync_missing"));
    return;
  }
  try {
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const remoteState = payload.state || payload;
    const currentSync = { ...state.sync };
    state = mergeState(structuredClone(defaultState), remoteState);
    state.sync = {
      ...currentSync,
      lastSync: new Date().toISOString(),
      lastStatus: "ok"
    };
    saveState({ touch: false });
    setLanguage(state.lang);
    flashButton("#pullSyncButton", t("sync_pull_done"));
  } catch {
    setSyncError(t("sync_failed"));
  }
}

function setSyncError(message) {
  state.sync.lastStatus = "error";
  saveState({ touch: false });
  $("#syncStatusPill").textContent = message;
  $("#syncStatusPill").classList.add("is-error");
  $("#syncNote").textContent = message;
}

function exportData() {
  const backup = {
    app: "TrainLog",
    version: 1,
    exportedAt: new Date().toISOString(),
    state: publicStateSnapshot()
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `trainlog-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  flashButton("#exportDataButton", t("export_done"));
}

function importData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const payload = JSON.parse(String(reader.result || "{}"));
      const importedState = payload.state || payload;
      const currentSync = { ...state.sync };
      state = mergeState(structuredClone(defaultState), importedState);
      state.sync = { ...currentSync, ...state.sync, key: currentSync.key };
      saveState();
      setLanguage(state.lang);
      flashButton("#importDataButton", t("import_done"));
    } catch {
      setSyncError(t("sync_failed"));
    }
  });
  reader.readAsText(file);
}

function renderAll() {
  renderStats();
  renderMealType();
  renderFoodAiStatus();
  renderQuests();
  renderFavorites();
  renderFoodHistory();
  renderBodyAnalysis();
  renderTraining();
  renderWeeklyChart();
  renderProfile();
  renderSync();
}

function flashButton(selector, label) {
  const button = $(selector);
  const original = button.textContent;
  button.textContent = label;
  setTimeout(() => {
    button.textContent = original;
  }, 1100);
}

function resizeDataUrl(dataUrl, maxDimension, quality = 0.82) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(1, maxDimension / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    image.onerror = () => resolve(dataUrl);
    image.src = dataUrl;
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function handleFoodImageFiles(input, kind) {
  const target = kind === "label" ? labelImages : foodImages;
  const available = Math.max(0, 8 - target.length);
  const files = Array.from(input.files || []).slice(0, available);
  for (const file of files) {
    const original = await readFileAsDataUrl(file);
    const dataUrl = await resizeDataUrl(original, 1800, 0.84);
    const thumbnailCandidate = await resizeDataUrl(dataUrl, 320, 0.72);
    const thumbnail = thumbnailCandidate.length < 250000 ? thumbnailCandidate : "";
    target.push({ dataUrl, thumbnail, name: file.name });
  }
  input.value = "";
  renderFoodImagePreviews();
}

function renderFoodImagePreviews() {
  const renderGrid = (selector, images, kind) => {
    $(selector).innerHTML = images
      .map(
        (item, index) => `
          <figure class="upload-preview-item">
            <img src="${item.thumbnail || item.dataUrl}" alt="" />
            <button type="button" data-remove-food-image="${kind}:${index}" aria-label="${t("delete")}">×</button>
          </figure>
        `
      )
      .join("");
  };
  renderGrid("#foodPreviewGrid", foodImages, "food");
  renderGrid("#labelPreviewGrid", labelImages, "label");
}

function removeFoodImage(event) {
  const button = event.target.closest("[data-remove-food-image]");
  if (!button) return;
  const [kind, rawIndex] = button.dataset.removeFoodImage.split(":");
  const target = kind === "label" ? labelImages : foodImages;
  target.splice(Number(rawIndex), 1);
  renderFoodImagePreviews();
}

function previewFile(input, imageSelector) {
  const image = $(imageSelector);
  const file = input.files?.[0];
  if (!file) return;
  image.src = URL.createObjectURL(file);
  image.hidden = false;
  input.closest("label")?.classList.add("has-image");
  image.closest(".upload-zone")?.classList.add("has-image");
}

function bindEvents() {
  $("#languageToggle").addEventListener("click", () => setLanguage(state.lang === "zh" ? "en" : "zh"));

  $$(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.dataset.target;
      $$(".nav-item").forEach((nav) => nav.classList.toggle("is-active", nav === item));
      $$(".screen").forEach((screen) => screen.classList.toggle("is-active", screen.dataset.screen === target));
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  $("#questList").addEventListener("click", (event) => {
    const item = event.target.closest("[data-quest]");
    if (!item) return;
    const quest = state.quests.find((entry) => entry.id === item.dataset.quest);
    quest.done = !quest.done;
    state.xp += quest.done ? quest.xp : -quest.xp;
    if (state.xp >= 500) {
      state.level += 1;
      state.xp = state.xp - 500;
    }
    saveState();
    renderAll();
  });

  $("#resetDayButton").addEventListener("click", () => {
    state.quests = structuredClone(defaultState.quests);
    state.foodLogs = state.foodLogs.filter((item) => item.date !== todayKey());
    recalculateFoodTotals();
    state.completedExercises = {};
    saveState();
    renderAll();
  });

  $$(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.activeMealType = chip.dataset.mealType;
      saveState();
      renderMealType();
    });
  });

  $("#foodPhoto").addEventListener("change", (event) => handleFoodImageFiles(event.target, "food"));
  $("#labelPhoto").addEventListener("change", (event) => handleFoodImageFiles(event.target, "label"));
  $("#takeFoodPhotoButton").addEventListener("click", () => $("#foodCameraInput").click());
  $("#takeLabelPhotoButton").addEventListener("click", () => $("#labelCameraInput").click());
  $("#foodCameraInput").addEventListener("change", (event) => handleFoodImageFiles(event.target, "food"));
  $("#labelCameraInput").addEventListener("change", (event) => handleFoodImageFiles(event.target, "label"));
  $("#frontPhoto").addEventListener("change", (event) => previewFile(event.target, "#frontPreview"));
  $("#sidePhoto").addEventListener("change", (event) => previewFile(event.target, "#sidePreview"));
  $("#backPhoto").addEventListener("change", (event) => previewFile(event.target, "#backPreview"));

  $("#estimateFoodButton").addEventListener("click", estimateFood);

  $("#saveFavoriteButton").addEventListener("click", saveFavorite);
  $("#addFoodToTodayButton").addEventListener("click", addPendingFoodToToday);
  $("#clearTodayFoodButton").addEventListener("click", clearTodayFood);

  $("#favoriteList").addEventListener("click", (event) => {
    const item = event.target.closest("[data-favorite]");
    if (!item) return;
    useFavorite(Number(item.dataset.favorite));
  });

  $("#foodHistoryList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-food-log]");
    if (!button) return;
    state.foodLogs = state.foodLogs.filter((item) => item.id !== button.dataset.deleteFoodLog);
    recalculateFoodTotals();
    saveState();
    renderStats();
    renderFoodHistory();
  });

  $("#historyDateInput").addEventListener("change", renderFoodHistory);
  $("#showAllHistoryButton").addEventListener("click", () => {
    $("#historyDateInput").value = "";
    renderFoodHistory();
  });

  $("#foodPreviewGrid").addEventListener("click", removeFoodImage);
  $("#labelPreviewGrid").addEventListener("click", removeFoodImage);

  $("#analyzeBodyButton").addEventListener("click", () => {
    renderBodyAnalysis();
    state.xp += 25;
    saveState();
    renderStats();
    flashButton("#analyzeBodyButton", t("body_done"));
  });

  $("#futureButton").addEventListener("click", () => {
    flashButton("#futureButton", t("future_done"));
  });

  $("#weekStrip").addEventListener("click", (event) => {
    const item = event.target.closest("[data-plan-day]");
    if (!item) return;
    state.activePlanDay = item.dataset.planDay;
    clearExerciseForm();
    saveState();
    renderTraining();
  });

  $("#exerciseList").addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit-exercise]");
    if (editButton) {
      editTrainingExercise(editButton.dataset.editExercise);
      return;
    }
    const deleteButton = event.target.closest("[data-delete-exercise]");
    if (deleteButton) {
      deleteTrainingExercise(deleteButton.dataset.deleteExercise);
      return;
    }
    const item = event.target.closest("[data-exercise]");
    if (!item) return;
    const id = item.dataset.exercise;
    state.completedExercises[id] = !state.completedExercises[id];
    state.xp += state.completedExercises[id] ? 10 : -10;
    saveState();
    renderAll();
  });

  $("#saveExerciseButton").addEventListener("click", saveCustomExercise);
  $("#clearExerciseButton").addEventListener("click", clearExerciseForm);
  $("#resetTrainingButton").addEventListener("click", resetActiveTrainingDay);

  $("#saveProfileButton").addEventListener("click", () => {
    state.profile = {
      height: Number($("#heightInput").value || 177),
      weight: Number($("#weightInput").value || 66),
      age: Number($("#ageInput").value || 20),
      days: Number($("#daysInput").value || 6),
      goal: $("#goalInput").value.trim()
    };
    saveState();
    flashButton("#saveProfileButton", t("saved"));
  });

  $("#saveSyncButton").addEventListener("click", saveSyncSettings);
  $("#pushSyncButton").addEventListener("click", pushSync);
  $("#pullSyncButton").addEventListener("click", pullSync);
  $("#exportDataButton").addEventListener("click", exportData);
  $("#importDataButton").addEventListener("click", () => $("#importDataInput").click());
  $("#importDataInput").addEventListener("change", (event) => importData(event.target.files?.[0]));
}

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

recalculateFoodTotals();
saveState({ touch: false });
bindEvents();
setLanguage(state.lang);
