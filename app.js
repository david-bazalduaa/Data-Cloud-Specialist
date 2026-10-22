// ============================================================
// Data 360 Consultant Exam Simulator — Core Application Logic
// Identical architecture and UI to Agentforce Specialist
// Dual-Shuffle Engine: Fisher-Yates global + per-question option shuffle
// ============================================================

"use strict";

// ---------- Category Constants (6 Official Exam Domains) ----------
const CATEGORIES = {
  POSITIONING: "Solution Positioning",
  SETUP_ADMIN: "Data 360 Setup and Administration",
  INGESTION: "Data Source Connection and Ingestion",
  HARMONIZATION: "Harmonization and Unification",
  ENHANCEMENTS: "Data Enhancements, Sharing, and Analysis",
  ACTIVATIONS: "Data Activations and Utilization"
};

// ---------- Category Exam Weights ----------
const CATEGORY_WEIGHTS = {
  [CATEGORIES.POSITIONING]: "14%",
  [CATEGORIES.SETUP_ADMIN]: "13%",
  [CATEGORIES.INGESTION]: "18%",
  [CATEGORIES.HARMONIZATION]: "17%",
  [CATEGORIES.ENHANCEMENTS]: "18%",
  [CATEGORIES.ACTIVATIONS]: "20%"
};

// ---------- Category to Tab Mapping ----------
// Tab 0 = Dashboard, Tabs 1-6 = Categories, Tab 7 = Full Simulator
const TAB_CATEGORIES = [
  null,                       // Tab 0: Dashboard
  CATEGORIES.POSITIONING,     // Tab 1
  CATEGORIES.SETUP_ADMIN,     // Tab 2
  CATEGORIES.INGESTION,       // Tab 3
  CATEGORIES.HARMONIZATION,   // Tab 4
  CATEGORIES.ENHANCEMENTS,    // Tab 5
  CATEGORIES.ACTIVATIONS,     // Tab 6
  null                        // Tab 7: Full Simulator
];

// ---------- Global State ----------
const state = {
  questions: [],          // Parsed questions array
  activeTab: 0,
  mode: "study",          // "study" | "exam"
  answers: {},            // { questionId: [selectedTexts] }
  submitted: {},          // { questionId: true }
  shuffleMap: {},         // { questionId: [shuffledOptions] }
  timerInterval: null,
  timerSeconds: 105 * 60, // 105 minutes
  examSubmitted: false
};

// ---------- DOM References ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ============================================================
// SECTION 1: PASSWORD SECURITY
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

function unlockApp(instant = false) {
  sessionStorage.setItem("simulator_unlocked", "true");
  const overlay = document.getElementById("password-overlay");
  const header = document.querySelector(".app-header");
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
// SECTION 2: DATA LOADING & ADAPTATION
// ============================================================

async function fetchAndParseQuestions() {
  const loadingFill = document.getElementById("loading-fill");
  if (loadingFill) loadingFill.style.width = "40%";

  let rawList = null;
  try {
    const res = await fetch("questions.json");
    if (res.ok) {
      rawList = await res.json();
    }
  } catch (err) {
    console.warn("questions.json fetch failed, using window fallback.", err);
  }

  if (!rawList && typeof window !== "undefined" && window.DATA_CLOUD_QUESTIONS) {
    rawList = window.DATA_CLOUD_QUESTIONS;
  }

  if (!rawList || !Array.isArray(rawList)) {
    throw new Error("Unable to load question bank from questions.json or fallback script.");
  }

  if (loadingFill) loadingFill.style.width = "90%";

  // Adapt raw question objects into the simulator format
  const parsed = rawList.map((q, idx) => {
    const numId = parseInt(String(q.id).replace(/\D/g, ""), 10) || (idx + 1);
    const choices = q.options.map(opt => opt.text);
    const correctOptionTexts = q.options
      .filter(opt => q.correctAnswers.includes(opt.id))
      .map(opt => opt.text);

    return {
      id: numId,
      originalId: q.id,
      category: q.topic,
      question: q.question,
      choices: choices,
      correctAnswers: q.correctAnswers,
      correctOptionTexts: correctOptionTexts,
      correctAnswerText: correctOptionTexts.join(" | "),
      explanation: q.explanation
    };
  });

  if (loadingFill) loadingFill.style.width = "100%";
  return parsed;
}

// ============================================================
// SECTION 3: DUAL-SHUFFLE ENGINE (Fisher-Yates)
// ============================================================

function fisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleQuestions(questions) {
  return fisherYatesShuffle([...questions]);
}

function shuffleOptions(question) {
  const choicesCopy = [...question.choices];
  fisherYatesShuffle(choicesCopy);
  return choicesCopy;
}

function generateShuffleMaps(questions) {
  questions.forEach(q => {
    state.shuffleMap[q.id] = shuffleOptions(q);
  });
}

// ============================================================
// SECTION 4: TAB SYSTEM
// ============================================================

function renderTabButtons() {
  const nav = $(".tab-nav");
  if (!nav) return;
  nav.innerHTML = "";

  const tabs = [
    { label: "Dashboard", icon: "📊" },
    { label: "Solution Positioning", weight: "14%" },
    { label: "Setup & Admin", weight: "13%" },
    { label: "Connection & Ingest", weight: "18%" },
    { label: "Harmonization", weight: "17%" },
    { label: "Enhancements", weight: "18%" },
    { label: "Activations", weight: "20%" },
    { label: "Full Exam (95)", icon: "🎯" }
  ];

  tabs.forEach((tab, i) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (i === 0 ? " active" : "");
    btn.dataset.tab = i;

    let countBadge = "";
    if (i > 0 && i < 7) {
      const count = state.questions.filter(q => q.category === TAB_CATEGORIES[i]).length;
      countBadge = `<span class="tab-badge">${count}</span>`;
    } else if (i === 7) {
      countBadge = `<span class="tab-badge">${state.questions.length}</span>`;
    }

    btn.innerHTML = `${tab.icon || ""}${tab.label}${tab.weight ? ` (${tab.weight})` : ""}${countBadge}`;
    nav.appendChild(btn);
  });
}

function setActiveTab(index) {
  state.activeTab = index;
  $$(".tab-btn").forEach((btn, i) => btn.classList.toggle("active", i === index));
  $$(".tab-pane").forEach((pane, i) => pane.classList.toggle("active", i === index));
}

// ============================================================
// SECTION 5: DASHBOARD RENDERING
// ============================================================

function renderDashboard() {
  const pane = $("#tab-0");
  if (!pane) return;

  const totalQuestions = state.questions.length;

  const topicList = [
    {
      name: CATEGORIES.POSITIONING,
      weight: "14%",
      desc: "Value proposition, business use cases, cross-cloud architecture boundaries",
      color: "var(--cat-positioning)"
    },
    {
      name: CATEGORIES.SETUP_ADMIN,
      weight: "13%",
      desc: "Permission sets, tenant provisioning, data spaces, security & governance",
      color: "var(--cat-setup)"
    },
    {
      name: CATEGORIES.INGESTION,
      weight: "18%",
      desc: "Source connectors (CRM, S3, B2C, Ingestion API), streaming and batch ingestion pipelines",
      color: "var(--cat-ingest)"
    },
    {
      name: CATEGORIES.HARMONIZATION,
      weight: "17%",
      desc: "DLO to standard DMO mapping, data modeling, Identity Resolution rulesets",
      color: "var(--cat-harmonize)"
    },
    {
      name: CATEGORIES.ENHANCEMENTS,
      weight: "18%",
      desc: "Calculated Insights, streaming insights, AI features, and data sharing integrations",
      color: "var(--cat-enhancements)"
    },
    {
      name: CATEGORIES.ACTIVATIONS,
      weight: "20%",
      desc: "Audience segmentation, nested segments, activation targets, and payload configurations",
      color: "var(--cat-activations)"
    }
  ];

  pane.innerHTML = `
    <div class="dashboard-grid">
      <div class="dash-card">
        <h2>📋 Exam Overview</h2>
        <p>Salesforce Certified Data 360 Consultant (Spring '26)</p>
        <div class="stat-row">
          <div class="stat-box">
            <div class="stat-value">60</div>
            <div class="stat-label">Exam Qs</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">105</div>
            <div class="stat-label">Minutes</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">68%</div>
            <div class="stat-label">Passing Score</div>
          </div>
        </div>
        <p style="font-size:.8rem;color:var(--text-muted);margin-top:12px">
          Multiple-choice & multi-select scenario questions. This simulator contains ${totalQuestions} audited practice questions across all 6 blueprint domains directly parsed from <code>Data-Con-101.md</code>.
        </p>
      </div>

      <div class="dash-card">
        <h2>🎯 Your Progress</h2>
        <p>Track your study progress across all sections.</p>
        <div class="stat-row">
          <div class="stat-box">
            <div class="stat-value" id="dash-answered">0</div>
            <div class="stat-label">Answered</div>
          </div>
          <div class="stat-box">
            <div class="stat-value" id="dash-correct">0</div>
            <div class="stat-label">Correct</div>
          </div>
          <div class="stat-box">
            <div class="stat-value" id="dash-score">—</div>
            <div class="stat-label">Score</div>
          </div>
        </div>
      </div>

      <div class="dash-card full-width">
        <h3>📚 Exam Topic Breakdown</h3>
        <p>The Data 360 Consultant exam covers 6 blueprint domains. Click each category tab to practice.</p>
        <ul class="topic-checklist">
          ${topicList.map((t, idx) => {
            const count = state.questions.filter(q => q.category === t.name).length;
            return `
            <li>
              <input type="checkbox" id="chk-${idx}">
              <div>
                <strong>${t.name}</strong><br>
                <span style="font-size:.78rem;color:var(--text-muted)">${t.desc}</span>
              </div>
              <span class="topic-weight" style="color:${t.color}">${t.weight} · ${count} Qs</span>
            </li>`;
          }).join("")}
        </ul>
      </div>

      <div class="dash-card full-width">
        <h3>📈 Category Progress</h3>
        <p>Your completion rate per study domain.</p>
        <div class="cat-progress-grid">
          ${topicList.map((t, idx) => {
            const catId = `cat-progress-${idx}`;
            return `
            <div class="cat-progress-item" style="border-left-color:${t.color}">
              <div class="cp-label">${t.name}</div>
              <div class="cp-bar"><div class="cp-fill" id="${catId}-fill" style="background:${t.color}"></div></div>
              <div class="cp-text" id="${catId}-text">0% complete</div>
            </div>`;
          }).join("")}
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// SECTION 6: QUIZ RENDERING
// ============================================================

function renderAllQuizTabs() {
  // Tabs 1-6: Category-filtered, original sequential order
  for (let i = 1; i <= 6; i++) {
    const cat = TAB_CATEGORIES[i];
    const questions = state.questions.filter(q => q.category === cat);
    renderQuizTab(i, cat, questions);
  }
  // Tab 7: Full simulator (all questions in original order)
  renderQuizTab(7, "Full 95-Question Simulator", [...state.questions]);
}

function getTabQuestions(tabIndex) {
  if (tabIndex === 7) return [...state.questions];
  const cat = TAB_CATEGORIES[tabIndex];
  return state.questions.filter(q => q.category === cat);
}

window.shuffleTab = function (tabIndex) {
  const title = tabIndex === 7
    ? "Full 95-Question Simulator"
    : TAB_CATEGORIES[tabIndex];
  const questions = getTabQuestions(tabIndex);
  const shuffled = shuffleQuestions(questions);
  generateShuffleMaps(shuffled);
  renderQuizTab(tabIndex, title, shuffled);
  restoreSubmittedState(tabIndex);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function restoreSubmittedState(tabIndex) {
  const pane = document.getElementById(`tab-${tabIndex}`);
  if (!pane) return;

  const cards = pane.querySelectorAll(".question-card");
  cards.forEach(card => {
    const qid = parseInt(card.dataset.qid);
    if (!state.submitted[qid]) return;

    const q = state.questions.find(x => x.id === qid);
    if (!q) return;

    const selectedList = state.answers[qid] || [];
    const isCorrect = isAnswerCorrect(q, selectedList);

    if (state.mode === "study") {
      card.classList.add(isCorrect ? "answered-correct" : "answered-incorrect");
      const options = card.querySelectorAll(".option-item");
      options.forEach(opt => {
        const optText = opt.querySelector(".option-text").textContent.trim();
        opt.classList.add("disabled");
        if (q.correctOptionTexts.some(t => t.trim() === optText)) {
          opt.classList.add("correct");
        } else if (selectedList.includes(optText)) {
          opt.classList.add("incorrect");
        }
      });
      const btn = card.querySelector(`.btn-submit`);
      if (btn) btn.style.display = "none";
      const explanation = card.querySelector(`.explanation-panel`);
      if (explanation) explanation.classList.add("visible");
    } else {
      const btn = card.querySelector(`.btn-submit`);
      if (btn) {
        btn.textContent = "✓ Saved";
        btn.disabled = true;
        btn.classList.remove("primary");
        btn.classList.add("secondary");
      }
      const options = card.querySelectorAll(".option-item");
      options.forEach(opt => {
        const optText = opt.querySelector(".option-text").textContent.trim();
        opt.classList.toggle("selected", selectedList.includes(optText));
      });
    }
  });
}

function renderQuizTab(tabIndex, title, questions) {
  const pane = document.getElementById(`tab-${tabIndex}`);
  if (!pane) return;

  const shuffleBtn = `<button class="btn-shuffle" onclick="shuffleTab(${tabIndex})" title="Shuffle question order and option positions">🔀 Shuffle</button>`;

  pane.innerHTML = `
    <div class="section-header">
      <h2>${title}</h2>
      <div class="section-header-actions">
        ${shuffleBtn}
        <span class="section-progress" id="progress-${tabIndex}">0 / ${questions.length} Answered</span>
      </div>
    </div>
    <div class="quiz-container" id="quiz-${tabIndex}">
      ${questions.map(q => renderQuestionCard(q)).join("")}
    </div>
  `;
}

function renderQuestionCard(q) {
  let displayOptions = state.shuffleMap[q.id];
  if (!displayOptions) {
    displayOptions = [...q.choices];
  }

  const LETTERS = ['A', 'B', 'C', 'D', 'E'];
  const isMulti = q.correctOptionTexts.length > 1;
  const isExamMode = state.mode === "exam";
  const actionsStyle = isExamMode ? "display: none;" : "";

  return `
    <div class="question-card" id="qcard-${q.id}" data-qid="${q.id}">
      <div class="question-header">
        <div class="question-number">Q${q.id}</div>
        <div class="question-body">
          <div class="question-text">
            ${escapeHtml(q.question)}
            ${isMulti ? `<span style="display:inline-block; margin-left:8px; font-size:.75rem; background:#FFF4E5; color:#D97706; padding:2px 8px; border-radius:4px; font-weight:600;">Choose ${q.correctOptionTexts.length}</span>` : ''}
          </div>
        </div>
      </div>
      <div class="options-list" id="options-${q.id}">
        ${displayOptions.map((optText, idx) => {
          const letter = LETTERS[idx] || String.fromCharCode(65 + idx);
          return `
            <div class="option-item ${isMulti ? 'multi-option' : ''}" data-qid="${q.id}" data-idx="${idx}" onclick="selectOption(${q.id},${idx})">
              <div class="option-radio ${isMulti ? 'checkbox-radio' : ''}"></div>
              <div class="option-letter">${letter}</div>
              <div class="option-text">${escapeHtml(optText)}</div>
            </div>
          `;
        }).join("")}
      </div>
      <div class="question-actions" id="actions-${q.id}" style="${actionsStyle}">
        <button class="btn-submit primary" id="submit-${q.id}" disabled onclick="submitAnswer(${q.id})">Submit Answer</button>
      </div>
      <div class="explanation-panel" id="explanation-${q.id}">
        <h4>💡 Explanation</h4>
        <p>${escapeHtml(q.explanation)}</p>
      </div>
    </div>
  `;
}

// ============================================================
// SECTION 7: ANSWER SELECTION & SUBMISSION
// ============================================================

function isAnswerCorrect(q, selectedList) {
  if (!selectedList || selectedList.length === 0) return false;
  if (selectedList.length !== q.correctOptionTexts.length) return false;
  const sortedSelected = [...selectedList].map(s => s.trim()).sort();
  const sortedCorrect = [...q.correctOptionTexts].map(s => s.trim()).sort();
  return sortedSelected.every((val, i) => val === sortedCorrect[i]);
}

window.selectOption = function (qid, selectedIdx) {
  if (state.submitted[qid] && state.mode === "study") return;

  const activeTabPane = $(`#tab-${state.activeTab}`);
  if (!activeTabPane) return;

  const q = state.questions.find(x => x.id === qid);
  if (!q) return;

  const optionEl = activeTabPane.querySelector(`#options-${qid} .option-item[data-idx="${selectedIdx}"]`);
  if (!optionEl) return;
  const selectedText = optionEl.querySelector(".option-text").textContent.trim();

  const isMulti = q.correctOptionTexts.length > 1;
  let currentSelections = state.answers[qid] ? [...state.answers[qid]] : [];

  if (isMulti) {
    if (currentSelections.includes(selectedText)) {
      currentSelections = currentSelections.filter(t => t !== selectedText);
    } else {
      currentSelections.push(selectedText);
    }
  } else {
    currentSelections = [selectedText];
  }

  state.answers[qid] = currentSelections;

  // Update UI in active tab
  const options = activeTabPane.querySelectorAll(`#options-${qid} .option-item`);
  options.forEach(opt => {
    const text = opt.querySelector(".option-text").textContent.trim();
    opt.classList.toggle("selected", currentSelections.includes(text));
  });

  if (state.mode === "exam") {
    state.submitted[qid] = currentSelections.length > 0;
    updateScoreMatrix();
    updateTabProgress();
  } else {
    const btn = activeTabPane.querySelector(`#submit-${qid}`);
    if (btn) btn.disabled = currentSelections.length === 0;
  }
};

window.submitAnswer = function (qid) {
  if (state.submitted[qid]) return;

  const q = state.questions.find(x => x.id === qid);
  if (!q) return;

  const selectedList = state.answers[qid];
  if (!selectedList || selectedList.length === 0) return;

  const isCorrect = isAnswerCorrect(q, selectedList);
  const activeTabPane = $(`#tab-${state.activeTab}`);

  if (state.mode === "exam") {
    state.submitted[qid] = true;
    const btn = activeTabPane ? activeTabPane.querySelector(`#submit-${qid}`) : null;
    if (btn) {
      btn.textContent = "✓ Saved";
      btn.disabled = true;
      btn.classList.remove("primary");
      btn.classList.add("secondary");
    }
    updateScoreMatrix();
    updateTabProgress();
    return;
  }

  // Study mode: show immediate feedback
  state.submitted[qid] = true;

  const card = activeTabPane ? activeTabPane.querySelector(`#qcard-${qid}`) : null;
  if (card) card.classList.add(isCorrect ? "answered-correct" : "answered-incorrect");

  const options = activeTabPane ? activeTabPane.querySelectorAll(`#options-${qid} .option-item`) : [];
  options.forEach(opt => {
    const optText = opt.querySelector(".option-text").textContent.trim();
    opt.classList.add("disabled");
    opt.classList.remove("selected");

    if (q.correctOptionTexts.some(t => t.trim() === optText)) {
      opt.classList.add("correct");
    } else if (selectedList.includes(optText)) {
      opt.classList.add("incorrect");
    }
  });

  const btn = activeTabPane ? activeTabPane.querySelector(`#submit-${qid}`) : null;
  if (btn) btn.style.display = "none";

  const explanation = activeTabPane ? activeTabPane.querySelector(`#explanation-${qid}`) : null;
  if (explanation) explanation.classList.add("visible");

  updateScoreMatrix();
  updateTabProgress();
};

// ============================================================
// SECTION 8: SCORE MATRIX & PROGRESS
// ============================================================

function updateScoreMatrix() {
  const totalQuestions = state.questions.length;
  const totalAnswered = Object.keys(state.submitted).filter(qid => state.submitted[qid]).length;
  let correctCount = 0;

  Object.keys(state.submitted).forEach(qid => {
    if (!state.submitted[qid]) return;
    const q = state.questions.find(x => x.id === parseInt(qid));
    if (!q) return;

    const selectedList = state.answers[qid];
    if (isAnswerCorrect(q, selectedList)) {
      correctCount++;
    }
  });

  const score = totalAnswered > 0 ? ((correctCount / totalAnswered) * 100).toFixed(1) : "0.0";
  const passing = parseFloat(score) >= 68;

  // Update header pills
  const progressPill = $("#pill-progress");
  const scorePill = $("#pill-score");
  const statusPill = $("#pill-status");

  if (progressPill) progressPill.querySelector(".pill-value").textContent = `${totalAnswered}/${totalQuestions}`;
  if (scorePill) scorePill.querySelector(".pill-value").textContent = `${score}%`;
  if (statusPill) {
    statusPill.querySelector(".pill-value").textContent = passing ? "Passing" : "Not Passing";
    statusPill.className = `score-pill ${passing ? "passing" : "failing"}`;
  }

  // Update dashboard stats
  const dashAnswered = $("#dash-answered");
  const dashCorrect = $("#dash-correct");
  const dashScore = $("#dash-score");

  if (dashAnswered) dashAnswered.textContent = totalAnswered;
  if (dashCorrect) dashCorrect.textContent = correctCount;
  if (dashScore) dashScore.textContent = totalAnswered > 0 ? `${score}%` : "—";
}

function updateTabProgress() {
  for (let i = 1; i <= 6; i++) {
    const cat = TAB_CATEGORIES[i];
    const questions = state.questions.filter(q => q.category === cat);
    const answered = questions.filter(q => state.submitted[q.id]).length;
    const el = $(`#progress-${i}`);
    if (el) el.textContent = `${answered} / ${questions.length} Answered`;
  }

  const allAnswered = Object.keys(state.submitted).filter(qid => state.submitted[qid]).length;
  const el7 = $(`#progress-7`);
  if (el7) el7.textContent = `${allAnswered} / ${state.questions.length} Answered`;

  const topicKeys = [
    CATEGORIES.POSITIONING,
    CATEGORIES.SETUP_ADMIN,
    CATEGORIES.INGESTION,
    CATEGORIES.HARMONIZATION,
    CATEGORIES.ENHANCEMENTS,
    CATEGORIES.ACTIVATIONS
  ];
  topicKeys.forEach((cat, idx) => {
    const questions = state.questions.filter(q => q.category === cat);
    const answered = questions.filter(q => state.submitted[q.id]).length;
    const pct = questions.length > 0 ? Math.round((answered / questions.length) * 100) : 0;

    const fill = $(`#cat-progress-${idx}-fill`);
    const text = $(`#cat-progress-${idx}-text`);
    if (fill) fill.style.width = `${pct}%`;
    if (text) text.textContent = `${pct}% complete (${answered}/${questions.length})`;
  });
}

// ============================================================
// SECTION 9: MODE TOGGLE (STUDY / EXAM)
// ============================================================

function toggleMode(isExam) {
  state.mode = isExam ? "exam" : "study";

  const timer = $(".exam-timer");
  const submitExamBtn = $(".submit-exam-btn");

  if (isExam) {
    state.answers = {};
    state.submitted = {};
    state.shuffleMap = {};
    state.examSubmitted = false;
    state.timerSeconds = 105 * 60;

    renderAllQuizTabs();
    updateScoreMatrix();
    updateTabProgress();

    if (timer) timer.classList.add("visible");
    if (submitExamBtn) submitExamBtn.classList.add("visible");
    startTimer();

    setActiveTab(7);
  } else {
    state.answers = {};
    state.submitted = {};
    state.shuffleMap = {};

    stopTimer();
    if (timer) timer.classList.remove("visible");
    if (submitExamBtn) submitExamBtn.classList.remove("visible");

    renderAllQuizTabs();
    updateScoreMatrix();
    updateTabProgress();

    setActiveTab(0);
  }
}

function startTimer() {
  stopTimer();
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    if (state.timerSeconds > 0) {
      state.timerSeconds--;
      updateTimerDisplay();
    } else {
      stopTimer();
      alert("⏱️ Time is up! Submitting your exam now.");
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
  const hours = Math.floor(state.timerSeconds / 3600);
  const mins = Math.floor((state.timerSeconds % 3600) / 60);
  const secs = state.timerSeconds % 60;
  const display = `${hours > 0 ? hours + ':' : ''}${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  const timerText = $("#timer-text");
  if (timerText) timerText.textContent = display;
}

// ============================================================
// SECTION 10: EXAM SUBMISSION & RESULTS
// ============================================================

function submitExam() {
  if (state.examSubmitted) return;
  state.examSubmitted = true;
  stopTimer();

  let totalCorrect = 0;
  const sectionResults = {};

  Object.values(CATEGORIES).forEach(cat => {
    sectionResults[cat] = { total: 0, correct: 0 };
  });

  state.questions.forEach(q => {
    if (sectionResults[q.category]) sectionResults[q.category].total++;
    const selectedList = state.answers[q.id];

    if (isAnswerCorrect(q, selectedList)) {
      totalCorrect++;
      if (sectionResults[q.category]) sectionResults[q.category].correct++;
    }
  });

  const totalQuestions = state.questions.length;
  const totalAnswered = Object.keys(state.submitted).filter(qid => state.submitted[qid]).length;
  const score = ((totalCorrect / totalQuestions) * 100).toFixed(1);
  const passed = parseFloat(score) >= 68;

  showResultsModal(totalAnswered, totalCorrect, score, passed, sectionResults);
}

function showResultsModal(answered, correct, score, passed, sections) {
  const overlay = $(".results-overlay");
  if (!overlay) return;

  const circumference = 2 * Math.PI * 65;
  const offset = circumference - (parseFloat(score) / 100) * circumference;
  const strokeColor = passed ? "var(--color-correct)" : "var(--color-incorrect)";
  const totalQuestions = state.questions.length;

  const modal = overlay.querySelector(".results-modal");
  if (!modal) return;

  modal.innerHTML = `
    <h2>${passed ? "🎉 Congratulations!" : "📝 Keep Studying!"}</h2>
    <p class="result-subtitle">${passed ? "You passed the practice exam!" : "You didn't reach the 68% passing threshold."}</p>

    <div class="result-score-ring">
      <svg viewBox="0 0 140 140">
        <circle class="ring-bg" cx="70" cy="70" r="65"/>
        <circle class="ring-progress" cx="70" cy="70" r="65"
          stroke="${strokeColor}"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${offset}"/>
      </svg>
      <div class="ring-text" style="color:${strokeColor}">
        ${score}%
        <span>Score</span>
      </div>
    </div>

    <div class="results-breakdown">
      <div class="result-stat ${passed ? 'pass' : 'fail'}">
        <div class="rs-value">${correct}/${totalQuestions}</div>
        <div class="rs-label">Correct</div>
      </div>
      <div class="result-stat">
        <div class="rs-value">${answered}</div>
        <div class="rs-label">Answered</div>
      </div>
      <div class="result-stat">
        <div class="rs-value">${totalQuestions - answered}</div>
        <div class="rs-label">Unanswered</div>
      </div>
      <div class="result-stat ${passed ? 'pass' : 'fail'}">
        <div class="rs-value">${passed ? "PASS" : "FAIL"}</div>
        <div class="rs-label">Status (≥68%)</div>
      </div>
    </div>

    <table class="results-section-table">
      <thead>
        <tr><th>Section</th><th>Weight</th><th>Score</th><th>Result</th></tr>
      </thead>
      <tbody>
        ${Object.entries(sections).map(([name, data]) => {
          const pct = data.total > 0 ? ((data.correct / data.total) * 100).toFixed(0) : 0;
          const weight = CATEGORY_WEIGHTS[name] || "—";
          return `<tr>
            <td>${name}</td>
            <td>${weight}</td>
            <td>${data.correct}/${data.total} (${pct}%)</td>
            <td style="color:${pct >= 68 ? 'var(--color-correct)' : 'var(--color-incorrect)'}">${pct >= 68 ? "✓ Pass" : "✕ Needs Work"}</td>
          </tr>`;
        }).join("")}
      </tbody>
    </table>

    <button class="results-close-btn" onclick="closeResults()">Review Answers</button>
  `;

  overlay.classList.add("visible");
}

window.closeResults = function () {
  const overlay = $(".results-overlay");
  if (overlay) overlay.classList.remove("visible");

  state.questions.forEach(q => {
    const selectedList = state.answers[q.id] || [];
    const isCorrect = isAnswerCorrect(q, selectedList);

    const cards = $$(`#qcard-${q.id}`);
    cards.forEach(card => {
      card.classList.add(isCorrect ? "answered-correct" : "answered-incorrect");

      const options = card.querySelectorAll(".option-item");
      options.forEach(opt => {
        const optText = opt.querySelector(".option-text").textContent.trim();
        opt.classList.add("disabled");
        opt.classList.remove("selected");

        if (q.correctOptionTexts.some(t => t.trim() === optText)) {
          opt.classList.add("correct");
        } else if (selectedList.includes(optText)) {
          opt.classList.add("incorrect");
        }
      });

      const explanation = card.querySelector(`.explanation-panel`);
      if (explanation) explanation.classList.add("visible");

      const btn = card.querySelector(`.btn-submit`);
      if (btn) btn.style.display = "none";
    });
  });
};

// ============================================================
// SECTION 11: EVENT BINDINGS & HELPERS
// ============================================================

function bindEvents() {
  document.addEventListener("click", (e) => {
    const tabBtn = e.target.closest(".tab-btn");
    if (tabBtn) {
      setActiveTab(parseInt(tabBtn.dataset.tab));
    }
  });

  const toggle = $("#mode-toggle");
  if (toggle) {
    toggle.addEventListener("change", (e) => {
      if (e.target.checked) {
        if (confirm("Switching to Exam Mode will reset all your answers and start a 105-minute timer. Continue?")) {
          toggleMode(true);
        } else {
          e.target.checked = false;
        }
      } else {
        if (confirm("Switching back to Study Mode will reset your exam progress. Continue?")) {
          toggleMode(false);
        } else {
          e.target.checked = true;
        }
      }
    });
  }

  const submitBtn = $(".submit-exam-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to submit the exam? You cannot change answers after submitting.")) {
        submitExam();
      }
    });
  }
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

// ============================================================
// SECTION 12: INITIALIZATION
// ============================================================

document.addEventListener("DOMContentLoaded", async () => {
  if (sessionStorage.getItem("simulator_unlocked") === "true") {
    unlockApp(true);
  }

  try {
    const questions = await fetchAndParseQuestions();
    state.questions = questions;

    const loadingOverlay = document.getElementById("loading-overlay");
    if (loadingOverlay) loadingOverlay.classList.add("hidden");

    renderTabButtons();
    renderDashboard();
    renderAllQuizTabs();
    updateScoreMatrix();
    updateTabProgress();
    bindEvents();
    setActiveTab(0);
  } catch (err) {
    console.error("Initialization error:", err);
    const loadingCard = document.querySelector(".loading-card");
    if (loadingCard) {
      loadingCard.innerHTML = `
        <div style="font-size:2.5rem;margin-bottom:10px">⚠️</div>
        <h2>Error Loading Questions</h2>
        <p>${err.message}</p>
        <button onclick="location.reload()" style="padding:10px 20px;background:#fff;color:#0176D3;border:none;border-radius:6px;font-weight:700;cursor:pointer;margin-top:12px">Retry</button>
      `;
    }
  }
});
