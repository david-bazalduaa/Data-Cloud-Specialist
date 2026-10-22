// ============================================================
// Salesforce Certified Data 360 Consultant Exam Simulator
// Application Engine — 6 Official Blueprint Domains & Mastery Tracking
// ============================================================

"use strict";

// Resolve EXAM_DOMAINS from global or fallback definition
const DOMAINS_CONFIG = (typeof window !== "undefined" && window.EXAM_DOMAINS) || {
  solution_positioning: {
    id: "solution_positioning",
    name: "Solution Positioning",
    weight: 14,
    colorToken: "slate",
    topics: ["Terminology & Business Value", "Generative & Predictive AI Role", "Initial Use Cases", "Data Ethics & Governance"]
  },
  setup_and_administration: {
    id: "setup_and_administration",
    name: "Data 360 Setup and Administration",
    weight: 13,
    colorToken: "slate",
    topics: ["Permissions & Permission Sets", "Org-Wide Settings & Data Governance", "ALM & Development Tooling", "Troubleshooting & Diagnostics"]
  },
  connection_and_ingestion: {
    id: "connection_and_ingestion",
    name: "Data Source Connection and Ingestion",
    weight: 18,
    colorToken: "slate",
    topics: ["Data Transformations", "Ingestion Processes & Considerations", "Data Collaboration & Zero-Copy"]
  },
  harmonization_and_unification: {
    id: "harmonization_and_unification",
    name: "Harmonization and Unification",
    weight: 17,
    colorToken: "slate",
    topics: ["Unification Purpose & Processes", "Data Modeling & DMO Mapping"]
  },
  enhancements_sharing_analysis: {
    id: "enhancements_sharing_analysis",
    name: "Data Enhancements, Sharing, and Analysis",
    weight: 18,
    colorToken: "slate",
    topics: ["Calculated Insights & Unified Data", "External System Data Sharing", "Reports & Dashboards", "AI Tooling Scenarios"]
  },
  activations_and_utilization: {
    id: "activations_and_utilization",
    name: "Data Activations and Utilization",
    weight: 20,
    colorToken: "slate",
    topics: ["Segmentation Concepts & Use Cases", "Segment Management", "Publishing Activations", "Actioning Data & Salesforce Flows"]
  }
};

// Domain Navigation Items Definition
const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard & Mastery", icon: "📊", isDomain: false },
  { id: "all", label: "All Questions (Full Bank)", icon: "⚡", isDomain: false },
  { id: "solution_positioning", label: "Solution Positioning", icon: "🧭", isDomain: true },
  { id: "setup_and_administration", label: "Setup & Administration", icon: "⚙️", isDomain: true },
  { id: "connection_and_ingestion", label: "Connection & Ingestion", icon: "📥", isDomain: true },
  { id: "harmonization_and_unification", label: "Harmonization & Unification", icon: "🧩", isDomain: true },
  { id: "enhancements_sharing_analysis", label: "Enhancements & Analysis", icon: "📈", isDomain: true },
  { id: "activations_and_utilization", label: "Activations & Utilization", icon: "🎯", isDomain: true },
  { id: "bookmarks", label: "Bookmarked Deck", icon: "⭐", isDomain: false }
];

// Application State
const state = {
  questions: [],             // All 95 audited question objects
  activeNavId: "dashboard",  // Current view ID
  activeFilter: "all",       // "all" | "unanswered" | "answered" | "correct" | "incorrect" | "bookmarked"
  searchQuery: "",
  mode: "study",             // "study" | "exam"
  userAnswers: {},           // { [qId]: string[] }
  revealedExplanations: {},  // { [qId]: boolean }
  bookmarked: {},            // { [qId]: boolean }
  proportionalExamIds: null, // array of 60 IDs if running proportional simulation
  shuffledOrder: null,       // custom shuffle array
  timerInterval: null,
  timerSeconds: 105 * 60,    // 105 minutes standard time
  examSubmitted: false
};

const STORAGE_KEY = "salesforce_data_360_exam_simulator_v2";

// ============================================================
// SECTION 1: ACCESS GATE & AUTHENTICATION
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
    if (fillBar) fillBar.style.width = "30%";

    let loadedQuestions = null;

    // Attempt fetch questions.json
    try {
      const resp = await fetch("questions.json");
      if (resp.ok) {
        loadedQuestions = await resp.json();
      }
    } catch (fetchErr) {
      console.warn("Fetch failed (file:// protocol), falling back to questions.js", fetchErr);
    }

    // Fallback to window.DATA_CLOUD_QUESTIONS
    if (!loadedQuestions && typeof window !== "undefined" && window.DATA_CLOUD_QUESTIONS) {
      loadedQuestions = window.DATA_CLOUD_QUESTIONS;
    }

    if (!loadedQuestions || !Array.isArray(loadedQuestions) || loadedQuestions.length === 0) {
      throw new Error("Unable to load questions from questions.json or script fallback.");
    }

    state.questions = loadedQuestions;
    if (fillBar) fillBar.style.width = "75%";

    // Load persisted state
    loadPersistedState();

    // Render components
    renderNavigationBar();
    renderCurrentView();
    updateTelemetry();
    bindSearchAndFilters();

    if (fillBar) fillBar.style.width = "100%";

    setTimeout(() => {
      if (loadingOverlay) loadingOverlay.classList.add("hidden");
      if (sessionStorage.getItem("simulator_unlocked") === "true") {
        unlockApp(true);
      }
    }, 300);

  } catch (err) {
    console.error("Critical error starting Exam Engine:", err);
    if (loadingOverlay) {
      loadingOverlay.innerHTML = `
        <div class="loading-card neumorphic-card">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">⚠️</div>
          <h2>Engine Initialization Failed</h2>
          <p>${err.message}</p>
          <button class="neumorphic-btn primary-btn" onclick="location.reload()">Reload</button>
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
    "Are you sure you want to clear all your answers, scores, and bookmarks? This will reset all mastery metrics.",
    () => {
      state.userAnswers = {};
      state.revealedExplanations = {};
      state.bookmarked = {};
      state.shuffledOrder = null;
      state.proportionalExamIds = null;
      state.examSubmitted = false;
      stopTimer();
      state.timerSeconds = 105 * 60;
      updateTimerDisplay();
      localStorage.removeItem(STORAGE_KEY);
      renderNavigationBar();
      renderCurrentView();
      updateTelemetry();
      showToast("All progress and answers reset.");
    }
  );
};

// ============================================================
// SECTION 4: NAVIGATION & DOMAIN SELECTOR
// ============================================================

function renderNavigationBar() {
  const bar = document.getElementById("domain-nav-bar");
  if (!bar) return;

  bar.innerHTML = NAV_ITEMS.map(item => {
    let countBadge = "";
    let weightBadge = "";

    if (item.isDomain) {
      const domain = DOMAINS_CONFIG[item.id];
      const count = state.questions.filter(q => q.domainId === item.id).length;
      weightBadge = `<span class="nav-weight-badge" title="Official Exam Weight">${domain.weight}%</span>`;
      countBadge = `<span class="nav-count-badge">${count} Qs</span>`;
    } else if (item.id === "all") {
      const totalCount = state.proportionalExamIds ? state.proportionalExamIds.length : state.questions.length;
      countBadge = `<span class="nav-count-badge">${totalCount} Qs</span>`;
    } else if (item.id === "bookmarks") {
      const count = Object.values(state.bookmarked).filter(Boolean).length;
      countBadge = `<span class="nav-count-badge">${count}</span>`;
    }

    const isActive = state.activeNavId === item.id;

    return `
      <button type="button" 
              class="domain-nav-item ${isActive ? 'active' : ''}" 
              role="tab" 
              aria-selected="${isActive}" 
              onclick="selectNav('${item.id}')">
        <span>${item.icon} ${item.label}</span>
        ${weightBadge}
        ${countBadge}
      </button>
    `;
  }).join("");
}

window.selectNav = function (navId) {
  state.activeNavId = navId;
  renderNavigationBar();
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.practiceDomain = function (domainId) {
  state.activeNavId = domainId;
  state.activeFilter = "all";
  renderNavigationBar();
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast(`Launched Practice Deck: ${DOMAINS_CONFIG[domainId].name}`);
};

// ============================================================
// SECTION 5: PROPORTIONAL 60-QUESTION EXAM ENGINE
// ============================================================

window.startProportionalExam = function () {
  showConfirmModal(
    "Start 60-Question Proportional Simulation",
    "This will assemble a timed, 60-question exam proportionally balanced according to the official certification blueprint weights (14%, 13%, 18%, 17%, 18%, 20%). Ready to begin?",
    () => {
      // Required counts per domain for 60 questions:
      // solution_positioning: 14% of 60 = 8 Qs
      // setup_and_administration: 13% of 60 = 8 Qs
      // connection_and_ingestion: 18% of 60 = 11 Qs
      // harmonization_and_unification: 17% of 60 = 10 Qs
      // enhancements_sharing_analysis: 18% of 60 = 11 Qs
      // activations_and_utilization: 20% of 60 = 12 Qs
      // Total = 60 Qs!
      const targets = {
        solution_positioning: 8,
        setup_and_administration: 8,
        connection_and_ingestion: 11,
        harmonization_and_unification: 10,
        enhancements_sharing_analysis: 11,
        activations_and_utilization: 12
      };

      const selectedIds = [];

      for (const [domainId, targetCount] of Object.entries(targets)) {
        const pool = state.questions.filter(q => q.domainId === domainId);
        // Shuffle pool
        const shuffled = [...pool].sort(() => 0.5 - Math.random());
        const picked = shuffled.slice(0, targetCount).map(q => q.id);
        selectedIds.push(...picked);
      }

      // Shuffle final 60 questions
      selectedIds.sort(() => 0.5 - Math.random());
      state.proportionalExamIds = selectedIds;
      state.activeNavId = "all";
      state.userAnswers = {};
      state.revealedExplanations = {};
      state.examSubmitted = false;
      state.timerSeconds = 105 * 60; // 105 minutes

      switchMode("exam", false);
      renderNavigationBar();
      renderCurrentView();
      updateTelemetry();
      showToast("🎯 60-Question Proportional Simulation Generated & Started.");
    }
  );
};

// ============================================================
// SECTION 6: VIEW RENDERING (DASHBOARD VS QUESTION STREAM)
// ============================================================

function getActiveDeckQuestions() {
  let list = [...state.questions];

  // If in 60-Q Proportional Exam
  if (state.proportionalExamIds && state.activeNavId === "all") {
    const qMap = new Map(state.questions.map(q => [q.id, q]));
    list = state.proportionalExamIds.map(id => qMap.get(id)).filter(Boolean);
  } else if (state.activeNavId === "all") {
    // all 95
  } else if (state.activeNavId === "bookmarks") {
    list = list.filter(q => state.bookmarked[q.id]);
  } else if (DOMAINS_CONFIG[state.activeNavId]) {
    list = list.filter(q => q.domainId === state.activeNavId);
  }

  // If general shuffle is active
  if (state.shuffledOrder && state.activeNavId === "all" && !state.proportionalExamIds) {
    const qMap = new Map(state.questions.map(q => [q.id, q]));
    list = state.shuffledOrder.map(id => qMap.get(id)).filter(Boolean);
  }

  // Text search
  if (state.searchQuery.trim().length > 0) {
    const qLower = state.searchQuery.toLowerCase();
    list = list.filter(q => {
      const mPrompt = q.question.toLowerCase().includes(qLower);
      const mOptions = q.options.some(o => o.text.toLowerCase().includes(qLower));
      const mExpl = q.explanation.toLowerCase().includes(qLower);
      const mTopic = (q.topic || "").toLowerCase().includes(qLower);
      return mPrompt || mOptions || mExpl || mTopic;
    });
  }

  // Filter chips
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

function renderCurrentView() {
  const container = document.getElementById("tab-content-area");
  const filterBar = document.getElementById("filter-bar");
  const contextBanner = document.getElementById("domain-context-banner");
  if (!container) return;

  if (state.activeNavId === "dashboard") {
    if (filterBar) filterBar.classList.add("hidden");
    if (contextBanner) contextBanner.classList.add("hidden");
    container.innerHTML = renderDashboardView();
  } else {
    if (filterBar) filterBar.classList.remove("hidden");

    // Check if domain view
    const domain = DOMAINS_CONFIG[state.activeNavId];
    if (domain && contextBanner) {
      contextBanner.classList.remove("hidden");
      const iconEl = document.getElementById("banner-domain-icon");
      const titleEl = document.getElementById("banner-domain-title");
      const weightEl = document.getElementById("banner-domain-weight");
      const subtopicsEl = document.getElementById("banner-domain-subtopics");
      const masteryEl = document.getElementById("banner-domain-mastery");

      const navItem = NAV_ITEMS.find(n => n.id === domain.id);
      if (iconEl) iconEl.textContent = navItem ? navItem.icon : "⚡";
      if (titleEl) titleEl.textContent = domain.name;
      if (weightEl) weightEl.textContent = `${domain.weight}%`;
      if (subtopicsEl) subtopicsEl.textContent = domain.topics.join(" • ");

      // Compute domain mastery
      const domainQs = state.questions.filter(q => q.domainId === domain.id);
      let dAns = 0;
      let dCorr = 0;
      domainQs.forEach(q => {
        if (state.userAnswers[q.id]) {
          dAns++;
          if (arraysEqual(state.userAnswers[q.id], q.correctAnswers)) dCorr++;
        }
      });
      const dScore = dAns > 0 ? Math.round((dCorr / dAns) * 100) : 0;
      if (masteryEl) masteryEl.textContent = `${dScore}%`;
    } else if (contextBanner) {
      contextBanner.classList.add("hidden");
    }

    const deck = getActiveDeckQuestions();
    updateFilterChipCounts();

    if (deck.length === 0) {
      container.innerHTML = `
        <div class="empty-deck neumorphic-card">
          <div class="empty-deck-icon">🔍</div>
          <h3 style="color: #fff; margin-bottom: 6px;">No Questions Found</h3>
          <p>No questions matched your current filter criteria or search query.</p>
          <button class="neumorphic-btn btn-sm" onclick="clearFilters()" style="margin-top: 14px;">Clear All Filters</button>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="questions-stream">
          ${deck.map(q => renderQuestionCard(q)).join("")}
        </div>
      `;
    }
  }

  updateTelemetry();
}

// ============================================================
// SECTION 7: DASHBOARD & DOMAIN MASTERY CARDS
// ============================================================

function renderDashboardView() {
  const masteryCardsHtml = Object.values(DOMAINS_CONFIG).map(domain => {
    const domainQs = state.questions.filter(q => q.domainId === domain.id);
    const totalQs = domainQs.length;
    let answered = 0;
    let correct = 0;

    domainQs.forEach(q => {
      const userAns = state.userAnswers[q.id];
      if (userAns && userAns.length > 0) {
        answered++;
        if (arraysEqual(userAns, q.correctAnswers)) {
          correct++;
        }
      }
    });

    const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    const progressPct = totalQs > 0 ? Math.round((answered / totalQs) * 100) : 0;

    // Mastery Indicator
    let indicatorClass = "indicator-review";
    let indicatorText = "Needs Review";

    if (answered === 0) {
      indicatorClass = "indicator-review";
      indicatorText = "Not Started";
    } else if (accuracy >= 80) {
      indicatorClass = "indicator-mastered";
      indicatorText = "Mastered (>80%)";
    } else if (accuracy >= 65) {
      indicatorClass = "indicator-proficient";
      indicatorText = "Proficient (65-80%)";
    } else {
      indicatorClass = "indicator-review";
      indicatorText = "Needs Review (<65%)";
    }

    const subtopicsHtml = domain.topics.map(t => `<span class="subtopic-tag">${t}</span>`).join("");

    return `
      <div class="mastery-card neumorphic-card" id="mastery-${domain.id}">
        <div>
          <div class="mastery-card-header">
            <div class="mastery-card-title">
              <h3>${domain.name}</h3>
            </div>
            <span class="mastery-weight-pill">${domain.weight}% Weight</span>
          </div>

          <div class="mastery-subtopics" style="margin-top: 10px;">
            ${subtopicsHtml}
          </div>
        </div>

        <div>
          <div class="mastery-metrics">
            <div class="mastery-stats-row">
              <div>
                <span class="pill-label">Domain Accuracy</span>
                <div class="mastery-score-big" style="color: ${accuracy >= 80 ? 'var(--mastery-mastered)' : accuracy >= 65 ? 'var(--mastery-proficient)' : 'var(--mastery-review)'}">
                  ${answered > 0 ? accuracy + '%' : '--'}
                </div>
              </div>
              <span class="mastery-indicator-tag ${indicatorClass}">${indicatorText}</span>
            </div>

            <div style="margin-top: 4px;">
              <div style="display: flex; justify-content: space-between; font-size: 0.74rem; color: var(--slate-400); margin-bottom: 4px;">
                <span>Completed: ${answered} / ${totalQs}</span>
                <span>${progressPct}%</span>
              </div>
              <div class="mastery-bar">
                <div class="mastery-bar-fill" style="width: ${progressPct}%; background: var(--accent-blue);"></div>
              </div>
            </div>
          </div>

          <div class="mastery-card-footer">
            <span class="mastery-q-count">${totalQs} Blueprint Questions</span>
            <button class="neumorphic-btn btn-sm primary-btn" onclick="practiceDomain('${domain.id}')">
              <span>🎯</span> Practice Domain
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  return `
    <div class="mastery-grid">
      <!-- Hero Banner -->
      <div class="dashboard-hero neumorphic-card">
        <div>
          <div class="password-badge">Official Candidate Readiness Platform</div>
          <h2>Salesforce Certified Data 360 Consultant</h2>
          <p>
            Systematic exam preparation structured strictly around the 6 official blueprint domains. Practice individual domains with verified answer keys, or launch a full 60-question weighted simulation.
          </p>
        </div>
        <div class="hero-btn-group">
          <button class="neumorphic-btn primary-btn" onclick="selectNav('all')">⚡ Full 95-Question Bank</button>
          <button class="neumorphic-btn" onclick="startProportionalExam()">🎯 Proportional 60-Q Exam</button>
        </div>
      </div>

      <!-- Domain Mastery Cards -->
      ${masteryCardsHtml}
    </div>
  `;
}

// ============================================================
// SECTION 8: QUESTION CARD COMPONENT
// ============================================================

function renderQuestionCard(q) {
  const isBookmarked = !!state.bookmarked[q.id];
  const userAns = state.userAnswers[q.id] || [];
  const isAnswered = userAns.length > 0;
  const isCorrect = isAnswered && arraysEqual(userAns, q.correctAnswers);
  const isRevealed = state.mode === "study" ? isAnswered || !!state.revealedExplanations[q.id] : state.examSubmitted;

  const domain = DOMAINS_CONFIG[q.domainId] || { name: q.topic, weight: q.domainWeight || 0 };

  // Status badge
  let statusBadge = "";
  if (isAnswered) {
    if (state.mode === "study" || state.examSubmitted) {
      statusBadge = isCorrect 
        ? `<span class="q-status-badge" style="background: var(--color-correct-bg); color: var(--color-correct); border: 1px solid var(--color-correct);">✓ Correct</span>`
        : `<span class="q-status-badge" style="background: var(--color-incorrect-bg); color: var(--color-incorrect); border: 1px solid var(--color-incorrect);">✕ Incorrect</span>`;
    } else {
      statusBadge = `<span class="q-status-badge" style="background: rgba(56, 189, 248, 0.15); color: var(--accent-blue);">Answered</span>`;
    }
  }

  // Multi-select check
  const isMulti = q.correctAnswers.length > 1;

  // Render options
  const optionsHtml = q.options.map(opt => {
    const isSelected = userAns.includes(opt.id);
    let optClasses = ["option-item"];

    if (isSelected) optClasses.push("selected");

    if (isRevealed) {
      optClasses.push("locked");
      if (q.correctAnswers.includes(opt.id)) {
        optClasses.push("opt-correct");
      } else if (isSelected) {
        optClasses.push("opt-incorrect");
      }
    }

    return `
      <button type="button" 
              class="${optClasses.join(' ')}" 
              onclick="handleOptionClick('${q.id}', '${opt.id}')"
              ${state.examSubmitted ? 'disabled' : ''}>
        <span class="option-letter">${opt.id}</span>
        <span class="option-text">${escapeHtml(opt.text)}</span>
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
        <div class="audit-callout">
          <div class="audit-callout-icon">🛡️</div>
          <div class="audit-callout-body">
            <strong>Technical Audit Note:</strong> ${escapeHtml(noteText)}
          </div>
        </div>
      `;
    }

    explanationHtml = `
      <div class="explanation-box">
        <div class="explanation-title">
          <span>💡 Technical Rationale &amp; Key Verification</span>
        </div>
        <div class="explanation-text">${escapeHtml(cleanExpl)}</div>
        ${auditNoteHtml}
      </div>
    `;
  }

  return `
    <div class="question-card neumorphic-card ${isAnswered ? (isCorrect ? 'answered-correct' : 'answered-incorrect') : ''}" id="card-${q.id}">
      <div class="question-header">
        <div class="q-meta-left">
          <span class="q-id-pill">${q.id.toUpperCase()}</span>
          <span class="q-domain-pill">${escapeHtml(domain.name)}</span>
          <span class="q-weight-pill">${domain.weight}%</span>
          ${isMulti ? `<span class="q-status-badge" style="background: rgba(251, 191, 36, 0.15); color: #fbbf24;">Multi-Select (${q.correctAnswers.length})</span>` : ''}
        </div>
        <div class="q-meta-right">
          ${statusBadge}
          <button type="button" 
                  class="bookmark-icon-btn ${isBookmarked ? 'active' : ''}" 
                  onclick="toggleBookmark('${q.id}')" 
                  title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}">
            ${isBookmarked ? '★' : '☆'}
          </button>
        </div>
      </div>

      <div class="question-prompt">${escapeHtml(q.question)}</div>

      <div class="options-list">
        ${optionsHtml}
      </div>

      <div class="question-footer">
        ${state.mode === "study" && !isRevealed ? `
          <button type="button" class="neumorphic-btn btn-sm" onclick="revealExplanation('${q.id}')">
            👁️ Reveal Explanation &amp; Key
          </button>
        ` : ''}
        ${isAnswered && state.mode === "study" ? `
          <span style="font-size: 0.82rem; color: var(--slate-400);">
            Verified Answer: <strong style="color: #fff;">${q.correctAnswers.join(", ")}</strong>
          </span>
        ` : ''}
      </div>

      ${explanationHtml}
    </div>
  `;
}

// ============================================================
// SECTION 9: USER INTERACTION HANDLERS
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
  updateTelemetry();
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
  updateFilterChipCounts();
  renderNavigationBar();
  showToast(state.bookmarked[qId] ? "Question bookmarked." : "Bookmark removed.");
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
// SECTION 10: MODE SWITCHING & EXAM TIMING
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
    showToast("Exam Mode enabled: 105-minute countdown active, answers concealed until submission.");
  } else {
    if (btnExam) btnExam.classList.remove("active");
    if (btnStudy) btnStudy.classList.add("active");
    if (examTimer) examTimer.classList.add("hidden");
    if (submitBtn) submitBtn.classList.add("hidden");
    stopTimer();
    showToast("Study Mode enabled: Immediate answer key feedback and technical rationales available.");
  }

  saveState();
  if (rerender && state.activeNavId !== "dashboard") {
    renderCurrentView();
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
      alert("⏱️ Exam time elapsed! Submitting answers automatically.");
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

  const h = Math.floor(state.timerSeconds / 3600);
  const m = Math.floor((state.timerSeconds % 3600) / 60);
  const s = state.timerSeconds % 60;

  el.textContent = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

document.getElementById("submit-exam-btn")?.addEventListener("click", () => {
  const activeDeck = getActiveDeckQuestions();
  let answeredCount = 0;
  activeDeck.forEach(q => {
    if (state.userAnswers[q.id]) answeredCount++;
  });

  showConfirmModal(
    "Submit Exam for Evaluation",
    `You have answered ${answeredCount} of ${activeDeck.length} questions in this deck. Ready to submit for official grading?`,
    () => {
      submitExam();
    }
  );
});

function submitExam() {
  stopTimer();
  state.examSubmitted = true;

  const activeDeck = getActiveDeckQuestions();
  const total = activeDeck.length;
  let correctCount = 0;
  const domainBreakdown = {};

  Object.keys(DOMAINS_CONFIG).forEach(dId => {
    domainBreakdown[dId] = { total: 0, correct: 0 };
  });

  activeDeck.forEach(q => {
    if (domainBreakdown[q.domainId]) domainBreakdown[q.domainId].total++;
    const userAns = state.userAnswers[q.id];
    if (userAns && arraysEqual(userAns, q.correctAnswers)) {
      correctCount++;
      if (domainBreakdown[q.domainId]) domainBreakdown[q.domainId].correct++;
    }
  });

  const finalScore = Math.round((correctCount / total) * 100);
  const passed = finalScore >= 68;

  renderResultsModal(finalScore, passed, correctCount, total, domainBreakdown);
  renderCurrentView();
}

function renderResultsModal(score, passed, correct, total, breakdown) {
  const overlay = document.getElementById("results-overlay");
  const modal = document.getElementById("results-modal");
  if (!overlay || !modal) return;

  const rows = Object.entries(breakdown).map(([dId, data]) => {
    const domain = DOMAINS_CONFIG[dId];
    if (data.total === 0) return "";
    const pct = Math.round((data.correct / data.total) * 100);
    return `
      <div class="domain-res-row">
        <span class="res-domain-name">${domain.name} (${domain.weight}%)</span>
        <span class="res-domain-score" style="color: ${pct >= 68 ? 'var(--mastery-mastered)' : 'var(--mastery-review)'}">
          ${data.correct} / ${data.total} (${pct}%)
        </span>
      </div>
    `;
  }).join("");

  modal.innerHTML = `
    <div class="results-header-badge ${passed ? 'pass' : 'fail'}">
      ${passed ? '🎉 Passed Certification Standard' : '⚠️ Below Passing Standard'}
    </div>
    <div class="results-score-big" style="color: ${passed ? 'var(--mastery-mastered)' : 'var(--color-incorrect)'}">
      ${score}%
    </div>
    <div class="results-subtext">
      ${correct} of ${total} questions answered correctly · Passing Standard: 68%
    </div>

    <div class="domain-res-table">
      <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--slate-400); margin-bottom: 6px;">Domain Breakdown</h4>
      ${rows}
    </div>

    <div style="display: flex; justify-content: center; gap: 12px;">
      <button class="neumorphic-btn primary-btn" onclick="closeResultsModal()">Review Questions</button>
      <button class="neumorphic-btn" onclick="resetAllProgress()">Retake Exam</button>
    </div>
  `;

  overlay.classList.add("active");
}

window.closeResultsModal = function () {
  const overlay = document.getElementById("results-overlay");
  if (overlay) overlay.classList.remove("active");
};

// ============================================================
// SECTION 11: TELEMETRY & FILTER CONTROLS
// ============================================================

function updateTelemetry() {
  const activeDeck = getActiveDeckQuestions();
  const total = activeDeck.length;
  let answered = 0;
  let correct = 0;

  activeDeck.forEach(q => {
    const ans = state.userAnswers[q.id];
    if (ans && ans.length > 0) {
      answered++;
      if (arraysEqual(ans, q.correctAnswers)) correct++;
    }
  });

  const accuracy = answered > 0 ? ((correct / answered) * 100).toFixed(1) : "0.0";
  const progressPct = total > 0 ? Math.round((answered / total) * 100) : 0;

  const progressText = document.getElementById("progress-text");
  const progressBarFill = document.getElementById("progress-bar-fill");
  if (progressText) progressText.textContent = `${answered} / ${total}`;
  if (progressBarFill) progressBarFill.style.width = `${progressPct}%`;

  const accuracyText = document.getElementById("accuracy-text");
  if (accuracyText) accuracyText.textContent = `${accuracy}%`;

  const statusBadge = document.getElementById("status-badge");
  if (statusBadge) {
    if (answered === 0) {
      statusBadge.textContent = "Not Started";
      statusBadge.className = "pill-value status-badge neutral";
    } else if (parseFloat(accuracy) >= 68) {
      statusBadge.textContent = "Passing (≥68%)";
      statusBadge.className = "pill-value status-badge pass";
    } else {
      statusBadge.textContent = "Needs Review";
      statusBadge.className = "pill-value status-badge review";
    }
  }

  updateFilterChipCounts();
}

function updateFilterChipCounts() {
  let base = [...state.questions];
  if (state.proportionalExamIds && state.activeNavId === "all") {
    const qMap = new Map(state.questions.map(q => [q.id, q]));
    base = state.proportionalExamIds.map(id => qMap.get(id)).filter(Boolean);
  } else if (state.activeNavId === "bookmarks") {
    base = base.filter(q => state.bookmarked[q.id]);
  } else if (DOMAINS_CONFIG[state.activeNavId]) {
    base = base.filter(q => q.domainId === state.activeNavId);
  }

  let unans = 0, ans = 0, corr = 0, incorr = 0, bkmk = 0;

  base.forEach(q => {
    const userAns = state.userAnswers[q.id];
    const hasAns = userAns && userAns.length > 0;
    const isCorr = hasAns && arraysEqual(userAns, q.correctAnswers);

    if (hasAns) {
      ans++;
      if (isCorr) corr++;
      else incorr++;
    } else {
      unans++;
    }

    if (state.bookmarked[q.id]) bkmk++;
  });

  setCountText("count-all", base.length);
  setCountText("count-unanswered", unans);
  setCountText("count-answered", ans);
  setCountText("count-correct", corr);
  setCountText("count-incorrect", incorr);
  setCountText("count-bookmarked", bkmk);
}

function setCountText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
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
      renderCurrentView();
    });
  }

  const chips = document.querySelectorAll(".filter-chips .chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.activeFilter = chip.dataset.filter;
      renderCurrentView();
    });
  });
}

window.clearSearch = function () {
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-search-btn");
  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.classList.add("hidden");
  state.searchQuery = "";
  renderCurrentView();
};

window.clearFilters = function () {
  clearSearch();
  state.activeFilter = "all";
  document.querySelectorAll(".filter-chips .chip").forEach(c => {
    c.classList.toggle("active", c.dataset.filter === "all");
  });
  renderCurrentView();
};

window.shuffleCurrentView = function () {
  if (state.activeNavId === "dashboard") {
    selectNav("all");
  }

  const ids = state.questions.map(q => q.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }

  state.shuffledOrder = ids;
  renderCurrentView();
  showToast("🔀 Question order randomized.");
};

// ============================================================
// SECTION 12: UTILITY HELPERS
// ============================================================

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

// Kickoff
document.addEventListener("DOMContentLoaded", initQuestionEngine);
