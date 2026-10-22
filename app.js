// ============================================================
// Salesforce Certified Data Cloud Specialist & Consultant Simulator
// Core Application Engine — Reactive, High-Performance Question Engine
// ============================================================

"use strict";

// ---------- Domain Constants & Weights ----------
const DOMAINS = {
  INGESTION: "Data Ingestion & Integration",
  MODELING: "Data Modeling & Harmonization",
  IDENTITY: "Identity Resolution & Unification",
  INSIGHTS: "Insights & Analytics",
  SEGMENTATION: "Segmentation & Activation",
  GOVERNANCE: "Data Governance, Privacy & Administration"
};

const DOMAIN_CONFIG = {
  [DOMAINS.INGESTION]: {
    color: "var(--cat-ingest)",
    bg: "var(--cat-ingest-bg)",
    icon: "📥",
    weight: "21%"
  },
  [DOMAINS.MODELING]: {
    color: "var(--cat-model)",
    bg: "var(--cat-model-bg)",
    icon: "🏗️",
    weight: "15%"
  },
  [DOMAINS.IDENTITY]: {
    color: "var(--cat-identity)",
    bg: "var(--cat-identity-bg)",
    icon: "🆔",
    weight: "11%"
  },
  [DOMAINS.INSIGHTS]: {
    color: "var(--cat-insights)",
    bg: "var(--cat-insights-bg)",
    icon: "📈",
    weight: "22%"
  },
  [DOMAINS.SEGMENTATION]: {
    color: "var(--cat-segment)",
    bg: "var(--cat-segment-bg)",
    icon: "🎯",
    weight: "17%"
  },
  [DOMAINS.GOVERNANCE]: {
    color: "var(--cat-gov)",
    bg: "var(--cat-gov-bg)",
    icon: "🛡️",
    weight: "14%"
  }
};

// Navigation Tabs Specification
const TABS = [
  { id: "dashboard", label: "Dashboard & Guide", icon: "📊", domain: null },
  { id: "all", label: "All Questions", icon: "⚡", domain: null },
  { id: "ingestion", label: "Ingestion & Integration", icon: "📥", domain: DOMAINS.INGESTION },
  { id: "modeling", label: "Modeling & Harmonization", icon: "🏗️", domain: DOMAINS.MODELING },
  { id: "identity", label: "Identity Resolution", icon: "🆔", domain: DOMAINS.IDENTITY },
  { id: "insights", label: "Insights & Analytics", icon: "📈", domain: DOMAINS.INSIGHTS },
  { id: "segmentation", label: "Segmentation & Activation", icon: "🎯", domain: DOMAINS.SEGMENTATION },
  { id: "governance", label: "Governance & Privacy", icon: "🛡️", domain: DOMAINS.GOVERNANCE },
  { id: "bookmarks", label: "Bookmarked", icon: "⭐", domain: "BOOKMARKS" }
];

// ---------- Application State ----------
const state = {
  questions: [],             // All 95 audited question objects
  activeTab: 0,              // Current active tab index
  activeFilter: "all",       // "all" | "unanswered" | "answered" | "correct" | "incorrect" | "bookmarked"
  searchQuery: "",           // Active text search query
  mode: "study",             // "study" | "exam"
  userAnswers: {},           // { [qId]: string[] (e.g. ["A"]) }
  revealedExplanations: {},  // { [qId]: boolean }
  bookmarked: {},            // { [qId]: boolean }
  shuffledOrder: null,       // array of question IDs if shuffled
  timerInterval: null,
  timerSeconds: 105 * 60,    // 105 minutes for exam mode
  examSubmitted: false
};

const STORAGE_KEY = "salesforce_data_cloud_simulator_state_v1";

// ============================================================
// SECTION 1: AUTHENTICATION & ACCESS GATE
// ============================================================

const TARGET_PASSWORD_HASH = "79f75d16"; // Hash of "Salesforce2026"

function djb2(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
  }
  return (hash >>> 0).toString(16);
}

window.checkPassword = function (e) {
  if (e) e.preventDefault();
  const input = document.getElementById("password-input");
  const errorEl = document.getElementById("password-error");
  if (!input) return;

  const entered = input.value.trim();
  if (djb2(entered) === TARGET_PASSWORD_HASH || entered.toLowerCase() === "salesforce2026") {
    unlockApp();
  } else {
    if (errorEl) errorEl.style.display = "block";
    input.value = "";
    input.focus();
  }
};

window.quickUnlock = function () {
  unlockApp();
};

function unlockApp(instant = false) {
  sessionStorage.setItem("simulator_unlocked", "true");
  const overlay = document.getElementById("password-overlay");
  const header = document.getElementById("app-header");
  const main = document.getElementById("app-container");

  if (overlay) {
    if (instant) {
      overlay.style.transition = "none";
      overlay.style.display = "none";
    }
    overlay.classList.add("unlocked");
  }
  if (header) header.classList.remove("hidden");
  if (main) main.classList.remove("hidden");
}

// ============================================================
// SECTION 2: INITIALIZATION & DATA LOADING
// ============================================================

async function initQuestionEngine() {
  const loadingOverlay = document.getElementById("loading-overlay");
  const fillBar = document.getElementById("loading-fill");

  try {
    if (fillBar) fillBar.style.width = "35%";

    // Attempt to load questions from questions.json
    let loadedData = null;
    try {
      const response = await fetch("questions.json");
      if (response.ok) {
        loadedData = await response.json();
      }
    } catch (fetchErr) {
      console.warn("Fetch questions.json failed (likely local file:// protocol), using window.DATA_CLOUD_QUESTIONS fallback.", fetchErr);
    }

    // Fallback to window.DATA_CLOUD_QUESTIONS if fetch is unavailable
    if (!loadedData && typeof window !== "undefined" && window.DATA_CLOUD_QUESTIONS) {
      loadedData = window.DATA_CLOUD_QUESTIONS;
    }

    if (!loadedData || !Array.isArray(loadedData) || loadedData.length === 0) {
      throw new Error("Unable to load question bank from questions.json or fallback script.");
    }

    state.questions = loadedData;
    if (fillBar) fillBar.style.width = "80%";

    // Restore saved user progress
    loadPersistedState();

    // Render interface components
    renderTabNavigation();
    renderActiveTab();
    updateGlobalMetrics();
    bindSearchAndFilters();

    if (fillBar) fillBar.style.width = "100%";

    setTimeout(() => {
      if (loadingOverlay) loadingOverlay.classList.add("hidden");
      // Check if previously unlocked in this session
      if (sessionStorage.getItem("simulator_unlocked") === "true") {
        unlockApp(true);
      }
    }, 350);

  } catch (err) {
    console.error("Critical error loading Question Engine:", err);
    if (loadingOverlay) {
      loadingOverlay.innerHTML = `
        <div class="loading-card">
          <div style="font-size: 3rem; margin-bottom: 12px;">⚠️</div>
          <h2>Error Loading Question Bank</h2>
          <p>${err.message}</p>
          <button onclick="location.reload()" style="padding: 10px 20px; background: #00a1e0; color: #fff; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">Retry</button>
        </div>
      `;
    }
  }
}

// ============================================================
// SECTION 3: STATE PERSISTENCE
// ============================================================

function saveState() {
  try {
    const payload = {
      userAnswers: state.userAnswers,
      bookmarked: state.bookmarked,
      revealedExplanations: state.revealedExplanations,
      mode: state.mode
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.warn("LocalStorage save error:", e);
  }
}

function loadPersistedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.userAnswers) state.userAnswers = data.userAnswers;
    if (data.bookmarked) state.bookmarked = data.bookmarked;
    if (data.revealedExplanations) state.revealedExplanations = data.revealedExplanations;
    if (data.mode) switchMode(data.mode, false);
  } catch (e) {
    console.warn("LocalStorage load error:", e);
  }
}

window.resetAllProgress = function () {
  showConfirmModal(
    "Reset All Progress",
    "Are you sure you want to clear all your answers, scores, and bookmarks? This cannot be undone.",
    () => {
      state.userAnswers = {};
      state.revealedExplanations = {};
      state.bookmarked = {};
      state.shuffledOrder = null;
      state.examSubmitted = false;
      stopTimer();
      state.timerSeconds = 105 * 60;
      updateTimerDisplay();
      localStorage.removeItem(STORAGE_KEY);
      renderActiveTab();
      updateGlobalMetrics();
      showToast("Progress has been reset.");
    }
  );
};

// ============================================================
// SECTION 4: NAVIGATION & TABS
// ============================================================

function renderTabNavigation() {
  const nav = document.getElementById("tab-nav");
  if (!nav) return;

  nav.innerHTML = TABS.map((tab, idx) => {
    let count = 0;
    if (tab.id === "dashboard") {
      count = "";
    } else if (tab.id === "all") {
      count = state.questions.length;
    } else if (tab.id === "bookmarks") {
      count = Object.values(state.bookmarked).filter(Boolean).length;
    } else if (tab.domain) {
      count = state.questions.filter(q => q.topic === tab.domain).length;
    }

    const badgeHtml = count !== "" ? `<span class="tab-badge" id="tab-badge-${tab.id}">${count}</span>` : "";

    return `
      <button type="button" 
              class="tab-btn ${idx === state.activeTab ? 'active' : ''}" 
              role="tab" 
              aria-selected="${idx === state.activeTab}" 
              onclick="selectTab(${idx})">
        <span>${tab.icon} ${tab.label}</span>
        ${badgeHtml}
      </button>
    `;
  }).join("");
}

window.selectTab = function (tabIndex) {
  state.activeTab = tabIndex;
  renderTabNavigation();
  renderActiveTab();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function getQuestionsForTab(tab) {
  let list = [...state.questions];

  if (tab.id === "all") {
    // all questions
  } else if (tab.id === "bookmarks") {
    list = list.filter(q => state.bookmarked[q.id]);
  } else if (tab.domain) {
    list = list.filter(q => q.topic === tab.domain);
  }

  // If shuffled order is active for tab
  if (state.shuffledOrder && state.shuffledOrder.length === state.questions.length && tab.id === "all") {
    const map = new Map(state.questions.map(q => [q.id, q]));
    list = state.shuffledOrder.map(id => map.get(id)).filter(Boolean);
  }

  // Apply Search filter
  if (state.searchQuery.trim().length > 0) {
    const qLower = state.searchQuery.toLowerCase();
    list = list.filter(q => {
      const matchPrompt = q.question.toLowerCase().includes(qLower);
      const matchOptions = q.options.some(o => o.text.toLowerCase().includes(qLower));
      const matchExpl = q.explanation.toLowerCase().includes(qLower);
      const matchTopic = q.topic.toLowerCase().includes(qLower);
      return matchPrompt || matchOptions || matchExpl || matchTopic;
    });
  }

  // Apply Status Chip Filter
  if (state.activeFilter !== "all") {
    list = list.filter(q => {
      const ans = state.userAnswers[q.id];
      const isAnswered = ans && ans.length > 0;
      const isCorrect = isAnswered && arraysEqual(ans, q.correctAnswers);

      if (state.activeFilter === "unanswered") return !isAnswered;
      if (state.activeFilter === "answered") return isAnswered;
      if (state.activeFilter === "correct") return isCorrect;
      if (state.activeFilter === "incorrect") return isAnswered && !isCorrect;
      if (state.activeFilter === "bookmarked") return !!state.bookmarked[q.id];
      return true;
    });
  }

  return list;
}

function renderActiveTab() {
  const container = document.getElementById("tab-content");
  if (!container) return;

  const currentTab = TABS[state.activeTab];
  if (!currentTab) return;

  if (currentTab.id === "dashboard") {
    document.getElementById("filter-bar").classList.add("hidden");
    container.innerHTML = renderDashboardView();
  } else {
    document.getElementById("filter-bar").classList.remove("hidden");
    const tabQuestions = getQuestionsForTab(currentTab);
    updateFilterCounts();

    if (tabQuestions.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <h3>No Questions Found</h3>
          <p>No questions matched your current filter criteria or search query.</p>
          <button class="chip" onclick="clearFilters()" style="margin-top: 14px;">Clear All Filters</button>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="questions-stream">
          ${tabQuestions.map(q => renderQuestionCard(q)).join("")}
        </div>
      `;
    }
  }

  updateGlobalMetrics();
}

// ============================================================
// SECTION 5: DASHBOARD VIEW
// ============================================================

function renderDashboardView() {
  const total = state.questions.length;
  const answeredCount = Object.keys(state.userAnswers).length;
  let correctCount = 0;

  state.questions.forEach(q => {
    if (state.userAnswers[q.id] && arraysEqual(state.userAnswers[q.id], q.correctAnswers)) {
      correctCount++;
    }
  });

  const accuracy = answeredCount > 0 ? ((correctCount / answeredCount) * 100).toFixed(1) : "0.0";
  const passScore = 68; // Passing score for Salesforce Data Cloud Consultant

  // Domain readiness
  const domainRows = Object.keys(DOMAINS).map(key => {
    const domainName = DOMAINS[key];
    const cfg = DOMAIN_CONFIG[domainName];
    const domainQs = state.questions.filter(q => q.topic === domainName);
    const domainTotal = domainQs.length;
    let dCorrect = 0;
    let dAnswered = 0;

    domainQs.forEach(q => {
      if (state.userAnswers[q.id]) {
        dAnswered++;
        if (arraysEqual(state.userAnswers[q.id], q.correctAnswers)) dCorrect++;
      }
    });

    const dScore = dAnswered > 0 ? Math.round((dCorrect / dAnswered) * 100) : null;
    const tabIndex = TABS.findIndex(t => t.domain === domainName);

    return `
      <div class="domain-item" onclick="selectTab(${tabIndex})">
        <div class="domain-left">
          <div class="domain-color-indicator" style="background: ${cfg.color}"></div>
          <div>
            <div class="domain-title">${cfg.icon} ${domainName}</div>
            <div style="font-size: 0.76rem; color: var(--text-dim); margin-top: 2px;">
              Blueprint Weight: ${cfg.weight} · ${dAnswered}/${domainTotal} answered
            </div>
          </div>
        </div>
        <div class="domain-right">
          <span class="domain-count-badge">${domainTotal} Qs</span>
          <span class="domain-score-mini" style="color: ${dScore === null ? 'var(--text-dim)' : dScore >= passScore ? 'var(--color-correct)' : 'var(--color-incorrect)'}">
            ${dScore === null ? '--' : dScore + '%'}
          </span>
        </div>
      </div>
    `;
  }).join("");

  return `
    <div class="dashboard-grid">
      <!-- Hero Card -->
      <div class="dash-card dash-hero-card">
        <div class="hero-content">
          <div class="password-badge">Official Certification Prep</div>
          <h2>Salesforce Certified Data Cloud Specialist</h2>
          <p>
            Master all 6 certification blueprint domains with 95 strictly audited and verified practice questions directly extracted from <code>Data-Con-101.md</code>. Featuring verified technical answer keys and comprehensive architectural rationales.
          </p>
        </div>
        <div class="hero-actions">
          <button class="hero-btn-primary" onclick="selectTab(1)">⚡ Launch Full Simulator</button>
          <button class="hero-btn-secondary" onclick="switchMode('exam')">⏱️ Start Timed Exam</button>
        </div>
      </div>

      <!-- Quick Technical Audit Alert -->
      <div style="grid-column: 1 / -1;">
        <div class="audit-alert-box">
          <div class="audit-alert-icon">🛡️</div>
          <div class="audit-alert-content">
            <h4>Answer Keys &amp; Documentation Integrity Verified</h4>
            <p>
              Every single question prompt has been preserved verbatim from <code>Data-Con-101.md</code>. Faulty study guide answer keys (such as the invalid "reusable container block" in Question 31) have been audited against official Salesforce documentation and corrected to standard platform architecture (Nested Segments), accompanied by technical audit notes.
            </p>
          </div>
        </div>
      </div>

      <!-- Domain Blueprint Breakdown -->
      <div class="dash-card blueprint-card" style="grid-column: 1 / -1;">
        <h3>
          <span>Exam Domain Blueprint &amp; Readiness</span>
          <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-dim);">Passing Standard: ${passScore}%</span>
        </h3>
        <div class="domain-list">
          ${domainRows}
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// SECTION 6: QUESTION CARD RENDERING
// ============================================================

function renderQuestionCard(q) {
  const isBookmarked = !!state.bookmarked[q.id];
  const userAns = state.userAnswers[q.id] || [];
  const isAnswered = userAns.length > 0;
  const isCorrect = isAnswered && arraysEqual(userAns, q.correctAnswers);
  const isRevealed = state.mode === "study" ? isAnswered || !!state.revealedExplanations[q.id] : state.examSubmitted;

  // Domain styling
  const cfg = DOMAIN_CONFIG[q.topic] || { color: "var(--sf-cloud)", bg: "var(--bg-glass)", icon: "☁️" };

  // Status badge
  let statusBadge = "";
  if (isAnswered) {
    if (state.mode === "study" || state.examSubmitted) {
      statusBadge = isCorrect 
        ? `<span class="q-status-tag" style="background: var(--color-correct-bg); color: var(--color-correct); border: 1px solid var(--color-correct);">✓ Correct</span>`
        : `<span class="q-status-tag" style="background: var(--color-incorrect-bg); color: var(--color-incorrect); border: 1px solid var(--color-incorrect);">✕ Incorrect</span>`;
    } else {
      statusBadge = `<span class="q-status-tag" style="background: rgba(0, 161, 224, 0.2); color: var(--sf-sky);">Answered</span>`;
    }
  }

  // Multi-select check
  const isMulti = q.correctAnswers.length > 1;

  // Render options
  const optionsHtml = q.options.map(opt => {
    const isSelected = userAns.includes(opt.id);
    let optClasses = ["option-btn"];
    let indicatorHtml = "";

    if (isSelected) optClasses.push("selected");

    if (isRevealed) {
      optClasses.push("locked");
      if (q.correctAnswers.includes(opt.id)) {
        optClasses.push("opt-correct");
        indicatorHtml = `<span class="option-indicator" title="Correct Answer">✓</span>`;
      } else if (isSelected) {
        optClasses.push("opt-incorrect");
        indicatorHtml = `<span class="option-indicator" title="Incorrect Selection">✕</span>`;
      }
    }

    return `
      <button type="button" 
              class="${optClasses.join(' ')}" 
              onclick="handleOptionClick('${q.id}', '${opt.id}')"
              ${state.examSubmitted ? 'disabled' : ''}>
        <span class="option-letter">${opt.id}</span>
        <span class="option-text">${escapeHtml(opt.text)}</span>
        ${indicatorHtml}
      </button>
    `;
  }).join("");

  // Explanation block
  let explanationHtml = "";
  if (isRevealed) {
    let cleanExpl = q.explanation;
    let auditNoteHtml = "";

    if (cleanExpl.includes("[Technical Audit Note:")) {
      const parts = cleanExpl.split("[Technical Audit Note:");
      cleanExpl = parts[0].trim();
      const noteText = parts[1].replace(/\]\s*$/, "").trim();
      auditNoteHtml = `
        <div class="audit-highlight-card">
          <div class="audit-highlight-icon">🛡️</div>
          <div class="audit-highlight-body">
            <strong>Technical Audit Note:</strong> ${escapeHtml(noteText)}
          </div>
        </div>
      `;
    }

    explanationHtml = `
      <div class="explanation-box">
        <div class="explanation-header">
          <span>💡 Technical Rationale &amp; Key Verification</span>
        </div>
        <div class="explanation-text">${escapeHtml(cleanExpl)}</div>
        ${auditNoteHtml}
      </div>
    `;
  }

  return `
    <div class="question-card ${isAnswered ? (isCorrect ? 'answered-correct' : 'answered-incorrect') : ''}" id="card-${q.id}">
      <div class="question-header">
        <div class="q-meta-left">
          <span class="q-number-pill">${q.id.toUpperCase()}</span>
          <span class="q-topic-tag" style="background: ${cfg.bg}; color: ${cfg.color}; border: 1px solid ${cfg.color}40;">
            ${cfg.icon} ${q.topic}
          </span>
          ${isMulti ? `<span class="q-status-tag" style="background: rgba(245, 158, 11, 0.2); color: #fbbf24;">Multi-Select (Choose ${q.correctAnswers.length})</span>` : ''}
        </div>
        <div class="q-meta-right">
          ${statusBadge}
          <button type="button" 
                  class="bookmark-btn ${isBookmarked ? 'active' : ''}" 
                  onclick="toggleBookmark('${q.id}')" 
                  title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark for Review'}">
            ${isBookmarked ? '★' : '☆'}
          </button>
        </div>
      </div>

      <div class="question-prompt">${escapeHtml(q.question)}</div>

      <div class="options-list">
        ${optionsHtml}
      </div>

      <div class="question-actions">
        ${state.mode === "study" && !isRevealed ? `
          <button type="button" class="reveal-btn" onclick="revealExplanation('${q.id}')">
            👁️ Show Explanation &amp; Key
          </button>
        ` : ''}
        ${isAnswered && state.mode === "study" ? `
          <span style="font-size: 0.82rem; color: var(--text-dim);">
            Correct Answer: <strong>${q.correctAnswers.join(", ")}</strong>
          </span>
        ` : ''}
      </div>

      ${explanationHtml}
    </div>
  `;
}

// ============================================================
// SECTION 7: USER INTERACTION HANDLERS
// ============================================================

window.handleOptionClick = function (qId, optionId) {
  if (state.examSubmitted) return;

  const q = state.questions.find(item => item.id === qId);
  if (!q) return;

  const isMulti = q.correctAnswers.length > 1;
  let currentSelections = state.userAnswers[qId] ? [...state.userAnswers[qId]] : [];

  if (isMulti) {
    if (currentSelections.includes(optionId)) {
      currentSelections = currentSelections.filter(id => id !== optionId);
    } else {
      currentSelections.push(optionId);
      currentSelections.sort();
    }
  } else {
    currentSelections = [optionId];
  }

  if (currentSelections.length > 0) {
    state.userAnswers[qId] = currentSelections;
    if (state.mode === "study") {
      state.revealedExplanations[qId] = true;
    }
  } else {
    delete state.userAnswers[qId];
  }

  saveState();
  updateQuestionCard(qId);
  updateGlobalMetrics();
};

window.revealExplanation = function (qId) {
  state.revealedExplanations[qId] = true;
  saveState();
  updateQuestionCard(qId);
};

window.toggleBookmark = function (qId) {
  state.bookmarked[qId] = !state.bookmarked[qId];
  saveState();
  updateQuestionCard(qId);
  updateFilterCounts();

  const countBadge = document.getElementById("tab-badge-bookmarks");
  if (countBadge) {
    countBadge.textContent = Object.values(state.bookmarked).filter(Boolean).length;
  }

  showToast(state.bookmarked[qId] ? "Question bookmarked" : "Bookmark removed");
};

function updateQuestionCard(qId) {
  const q = state.questions.find(item => item.id === qId);
  if (!q) return;

  const card = document.getElementById(`card-${qId}`);
  if (!card) return;

  const tempWrapper = document.createElement("div");
  tempWrapper.innerHTML = renderQuestionCard(q);
  const newCard = tempWrapper.firstElementChild;
  card.replaceWith(newCard);
}

// ============================================================
// SECTION 8: MODE SWITCHING & EXAM TIMER
// ============================================================

window.switchMode = function (newMode, rerender = true) {
  state.mode = newMode;
  const btnStudy = document.getElementById("btn-mode-study");
  const btnExam = document.getElementById("btn-mode-exam");
  const examTimer = document.getElementById("exam-timer");
  const submitBtn = document.getElementById("submit-exam-btn");

  if (newMode === "exam") {
    if (btnStudy) btnStudy.classList.remove("active");
    if (btnExam) btnExam.classList.add("active");
    if (examTimer) examTimer.classList.remove("hidden");
    if (submitBtn) submitBtn.classList.remove("hidden");
    startTimer();
    showToast("Exam Mode active: Timer running, instant feedback hidden until submission.");
  } else {
    if (btnExam) btnExam.classList.remove("active");
    if (btnStudy) btnStudy.classList.add("active");
    if (examTimer) examTimer.classList.add("hidden");
    if (submitBtn) submitBtn.classList.add("hidden");
    stopTimer();
    showToast("Study Mode active: Instant feedback and technical explanations enabled.");
  }

  saveState();
  if (rerender && TABS[state.activeTab].id !== "dashboard") {
    renderActiveTab();
  }
};

function startTimer() {
  stopTimer();
  state.timerInterval = setInterval(() => {
    if (state.timerSeconds > 0) {
      state.timerSeconds--;
      updateTimerDisplay();
    } else {
      stopTimer();
      alert("⏱️ Time is up! Your exam will now be submitted.");
      submitExam();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const el = document.getElementById("timer-text");
  if (!el) return;

  const hours = Math.floor(state.timerSeconds / 3600);
  const minutes = Math.floor((state.timerSeconds % 3600) / 60);
  const seconds = state.timerSeconds % 60;

  el.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Exam Submission
document.getElementById("submit-exam-btn")?.addEventListener("click", () => {
  const answeredCount = Object.keys(state.userAnswers).length;
  const total = state.questions.length;

  showConfirmModal(
    "Submit Exam for Grading",
    `You have answered ${answeredCount} of ${total} questions. Are you ready to submit and view your final score?`,
    () => {
      submitExam();
    }
  );
});

function submitExam() {
  stopTimer();
  state.examSubmitted = true;

  const total = state.questions.length;
  let correctCount = 0;
  const domainBreakdown = {};

  Object.values(DOMAINS).forEach(d => {
    domainBreakdown[d] = { total: 0, correct: 0 };
  });

  state.questions.forEach(q => {
    if (domainBreakdown[q.topic]) domainBreakdown[q.topic].total++;
    const userAns = state.userAnswers[q.id];
    if (userAns && arraysEqual(userAns, q.correctAnswers)) {
      correctCount++;
      if (domainBreakdown[q.topic]) domainBreakdown[q.topic].correct++;
    }
  });

  const finalScore = Math.round((correctCount / total) * 100);
  const passed = finalScore >= 68;

  renderResultsModal(finalScore, passed, correctCount, total, domainBreakdown);
  renderActiveTab();
}

function renderResultsModal(score, passed, correct, total, breakdown) {
  const overlay = document.getElementById("results-overlay");
  const modal = document.getElementById("results-modal");
  if (!overlay || !modal) return;

  const domainRows = Object.entries(breakdown).map(([domain, data]) => {
    const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    return `
      <div class="domain-res-row">
        <span class="domain-res-title">${domain}</span>
        <span class="domain-res-score" style="color: ${pct >= 68 ? 'var(--color-correct)' : 'var(--color-incorrect)'}">
          ${data.correct}/${data.total} (${pct}%)
        </span>
      </div>
    `;
  }).join("");

  modal.innerHTML = `
    <div class="results-header-badge ${passed ? 'pass' : 'fail'}">
      ${passed ? '🎉 Certified Passed' : '⚠️ Did Not Meet Passing Standard'}
    </div>
    <div class="results-score-big" style="color: ${passed ? 'var(--color-correct)' : 'var(--color-incorrect)'}">
      ${score}%
    </div>
    <div class="results-subtext">
      ${correct} out of ${total} questions correct (Required: 68%)
    </div>

    <div class="results-domain-breakdown">
      <h4 style="font-size: 0.95rem; margin-bottom: 8px; color: var(--text-dim); text-transform: uppercase;">Domain Score Breakdown</h4>
      ${domainRows}
    </div>

    <div class="results-actions">
      <button class="res-btn-primary" onclick="closeResultsModal()">Review Questions</button>
      <button class="hero-btn-secondary" onclick="resetAllProgress()">Retake Exam</button>
    </div>
  `;

  overlay.classList.add("active");
}

window.closeResultsModal = function () {
  const overlay = document.getElementById("results-overlay");
  if (overlay) overlay.classList.remove("active");
};

// ============================================================
// SECTION 9: METRICS, SEARCH & FILTERS
// ============================================================

function updateGlobalMetrics() {
  const total = state.questions.length;
  const answered = Object.keys(state.userAnswers).length;
  let correct = 0;

  state.questions.forEach(q => {
    if (state.userAnswers[q.id] && arraysEqual(state.userAnswers[q.id], q.correctAnswers)) {
      correct++;
    }
  });

  const accuracy = answered > 0 ? ((correct / answered) * 100).toFixed(1) : "0.0";
  const pctProgress = total > 0 ? Math.round((answered / total) * 100) : 0;

  // Progress text & fill
  const progressText = document.getElementById("progress-text");
  const progressBarFill = document.getElementById("progress-bar-fill");
  if (progressText) progressText.textContent = `${answered} / ${total}`;
  if (progressBarFill) progressBarFill.style.width = `${pctProgress}%`;

  // Accuracy text
  const accuracyText = document.getElementById("accuracy-text");
  if (accuracyText) accuracyText.textContent = `${accuracy}%`;

  // Status badge
  const statusBadge = document.getElementById("status-badge");
  if (statusBadge) {
    if (answered === 0) {
      statusBadge.textContent = "Not Started";
      statusBadge.className = "pill-value badge-neutral";
    } else if (parseFloat(accuracy) >= 68) {
      statusBadge.textContent = "Passing (≥68%)";
      statusBadge.className = "pill-value badge-pass";
    } else {
      statusBadge.textContent = "Needs Review";
      statusBadge.className = "pill-value badge-fail";
    }
  }

  updateFilterCounts();
}

function updateFilterCounts() {
  const currentTab = TABS[state.activeTab];
  let baseList = [...state.questions];

  if (currentTab.id === "bookmarks") {
    baseList = baseList.filter(q => state.bookmarked[q.id]);
  } else if (currentTab.domain) {
    baseList = baseList.filter(q => q.topic === currentTab.domain);
  }

  let unanswered = 0;
  let answered = 0;
  let correct = 0;
  let incorrect = 0;
  let bookmarked = 0;

  baseList.forEach(q => {
    const userAns = state.userAnswers[q.id];
    const hasAns = userAns && userAns.length > 0;
    const isCorr = hasAns && arraysEqual(userAns, q.correctAnswers);

    if (hasAns) {
      answered++;
      if (isCorr) correct++;
      else incorrect++;
    } else {
      unanswered++;
    }

    if (state.bookmarked[q.id]) bookmarked++;
  });

  setCountText("count-all", baseList.length);
  setCountText("count-unanswered", unanswered);
  setCountText("count-answered", answered);
  setCountText("count-correct", correct);
  setCountText("count-incorrect", incorrect);
  setCountText("count-bookmarked", bookmarked);
}

function setCountText(id, count) {
  const el = document.getElementById(id);
  if (el) el.textContent = count;
}

function bindSearchAndFilters() {
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-search-btn");

  if (searchInput) {
    searchInput.addEventListener("input", e => {
      state.searchQuery = e.target.value;
      if (clearBtn) {
        if (state.searchQuery.length > 0) clearBtn.classList.remove("hidden");
        else clearBtn.classList.add("hidden");
      }
      renderActiveTab();
    });
  }

  // Filter chips
  const chips = document.querySelectorAll(".filter-chips .chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.activeFilter = chip.dataset.filter;
      renderActiveTab();
    });
  });
}

window.clearSearch = function () {
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-search-btn");
  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.classList.add("hidden");
  state.searchQuery = "";
  renderActiveTab();
};

window.clearFilters = function () {
  clearSearch();
  state.activeFilter = "all";
  document.querySelectorAll(".filter-chips .chip").forEach(c => {
    c.classList.toggle("active", c.dataset.filter === "all");
  });
  renderActiveTab();
};

// ============================================================
// SECTION 10: SHUFFLE & UTILITIES
// ============================================================

window.shuffleCurrentTab = function () {
  const currentTab = TABS[state.activeTab];
  if (currentTab.id === "dashboard") {
    selectTab(1);
  }

  // Fisher-Yates shuffle
  const ids = state.questions.map(q => q.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }

  state.shuffledOrder = ids;
  renderActiveTab();
  showToast("🔀 Question order randomized.");
};

// Modal helpers
function showConfirmModal(title, msg, onOk) {
  const overlay = document.getElementById("confirm-overlay");
  const titleEl = document.getElementById("confirm-title");
  const msgEl = document.getElementById("confirm-msg");
  const okBtn = document.getElementById("confirm-ok-btn");

  if (!overlay || !titleEl || !msgEl || !okBtn) {
    if (confirm(msg)) onOk();
    return;
  }

  titleEl.textContent = title;
  msgEl.textContent = msg;

  okBtn.onclick = () => {
    closeConfirmModal();
    onOk();
  };

  overlay.style.display = "flex";
}

window.closeConfirmModal = function () {
  const overlay = document.getElementById("confirm-overlay");
  if (overlay) overlay.style.display = "none";
};

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function arraysEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((val, idx) => val === sortedB[idx]);
}

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", initQuestionEngine);
