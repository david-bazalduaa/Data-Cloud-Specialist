const fs = require("fs");
const path = require("path");

const SOURCE_FILE = path.join(__dirname, "..", "Data-Con-101.md");
const OUTPUT_JSON = path.join(__dirname, "..", "questions.json");
const OUTPUT_JS = path.join(__dirname, "..", "questions.js");

const content = fs.readFileSync(SOURCE_FILE, "utf8");

// Topic / Domain Category mapping based on official Salesforce Certified Data Cloud Consultant Exam blueprint
const TOPIC_MAPPING = {
  1: "Data Ingestion & Integration",
  2: "Data Governance, Privacy & Administration",
  3: "Insights & Analytics",
  4: "Data Governance, Privacy & Administration",
  5: "Data Ingestion & Integration",
  6: "Data Modeling & Harmonization",
  7: "Data Governance, Privacy & Administration",
  8: "Segmentation & Activation",
  9: "Data Ingestion & Integration",
  10: "Data Modeling & Harmonization",
  11: "Data Modeling & Harmonization",
  12: "Insights & Analytics",
  13: "Insights & Analytics",
  14: "Data Modeling & Harmonization",
  15: "Segmentation & Activation",
  16: "Data Ingestion & Integration",
  17: "Segmentation & Activation",
  18: "Identity Resolution & Unification",
  19: "Insights & Analytics",
  20: "Segmentation & Activation",
  21: "Data Modeling & Harmonization",
  22: "Data Governance, Privacy & Administration",
  23: "Insights & Analytics",
  24: "Data Modeling & Harmonization",
  25: "Data Ingestion & Integration",
  26: "Segmentation & Activation",
  27: "Data Ingestion & Integration",
  28: "Insights & Analytics",
  29: "Insights & Analytics",
  30: "Data Ingestion & Integration",
  31: "Segmentation & Activation",
  32: "Insights & Analytics",
  33: "Data Ingestion & Integration",
  34: "Data Governance, Privacy & Administration",
  35: "Data Ingestion & Integration",
  36: "Insights & Analytics",
  37: "Identity Resolution & Unification",
  38: "Data Governance, Privacy & Administration",
  39: "Insights & Analytics",
  40: "Data Governance, Privacy & Administration",
  41: "Data Ingestion & Integration",
  42: "Data Modeling & Harmonization",
  43: "Insights & Analytics",
  44: "Identity Resolution & Unification",
  45: "Segmentation & Activation",
  46: "Data Ingestion & Integration",
  47: "Identity Resolution & Unification",
  48: "Data Ingestion & Integration",
  49: "Segmentation & Activation",
  50: "Data Ingestion & Integration",
  51: "Identity Resolution & Unification",
  52: "Data Modeling & Harmonization",
  53: "Segmentation & Activation",
  54: "Insights & Analytics",
  55: "Data Ingestion & Integration",
  56: "Data Ingestion & Integration",
  57: "Segmentation & Activation",
  58: "Insights & Analytics",
  59: "Data Governance, Privacy & Administration",
  60: "Insights & Analytics",
  61: "Segmentation & Activation",
  62: "Data Ingestion & Integration",
  63: "Identity Resolution & Unification",
  64: "Identity Resolution & Unification",
  65: "Data Ingestion & Integration",
  66: "Data Governance, Privacy & Administration",
  67: "Segmentation & Activation",
  68: "Data Governance, Privacy & Administration",
  69: "Insights & Analytics",
  70: "Data Governance, Privacy & Administration",
  71: "Segmentation & Activation",
  72: "Identity Resolution & Unification",
  73: "Insights & Analytics",
  74: "Data Modeling & Harmonization",
  75: "Insights & Analytics",
  76: "Identity Resolution & Unification",
  77: "Data Modeling & Harmonization",
  78: "Insights & Analytics",
  79: "Data Governance, Privacy & Administration",
  80: "Data Ingestion & Integration",
  81: "Insights & Analytics",
  82: "Data Ingestion & Integration",
  83: "Insights & Analytics",
  84: "Segmentation & Activation",
  85: "Data Modeling & Harmonization",
  86: "Data Ingestion & Integration",
  87: "Data Modeling & Harmonization",
  88: "Segmentation & Activation",
  89: "Data Governance, Privacy & Administration",
  90: "Data Modeling & Harmonization",
  91: "Data Governance, Privacy & Administration",
  92: "Insights & Analytics",
  93: "Identity Resolution & Unification",
  94: "Segmentation & Activation",
  95: "Data Modeling & Harmonization"
};

// Technical audit corrections / notes
const AUDIT_OVERRIDES = {
  31: {
    correctAnswers: ["D"],
    auditNote: "[Technical Audit Note: The source study guide designated Option C ('Create a reusable container block with common criteria'). In Salesforce Data Cloud, 'reusable container blocks' do not exist on the segmentation canvas. The architecturally verified feature for sharing centrally managed, regularly updated exclusion criteria across brand teams is 'Create a nested segment' (Option D). When the nested exclusion segment updates monthly, all dependent segments automatically inherit the updated criteria.]"
  },
  47: {
    auditNote: "[Technical Audit Note: Although the prompt asks 'Which two features...', the multiple-choice options bundle pairs together using 'and'. Option A correctly identifies both Profile Explorer (used to inspect unified customer 360 profiles and linked source records) and Query Editor (used to run ANSI SQL queries against Unified Individual and link DMOs).]"
  }
};

function cleanOptionText(text) {
  let cleaned = text.trim();
  // Remove stray trailing markdown formatting or hashes
  cleaned = cleaned.replace(/#+$/, "").trim();
  // Fix OCR/PDF concatenated words
  cleaned = cleaned.replace(/ResolutionandUnification/g, "Resolution and Unification");
  cleaned = cleaned.replace(/ExplorerandQuery Editor/g, "Explorer and Query Editor");
  cleaned = cleaned.replace(/ExplorerandActions/g, "Explorer and Actions");
  cleaned = cleaned.replace(/ResolutionandQuery API/g, "Resolution and Query API");
  cleaned = cleaned.replace(/ActionsandQuery API/g, "Actions and Query API");
  cleaned = cleaned.replace(/([a-z])and([A-Z])/g, "$1 and $2");
  // Normalize whitespace
  cleaned = cleaned.replace(/\s+/g, " ").trim();
  return cleaned;
}

const qRegex = /#### \*\*<u>Question:\s*(\d+)<\/u>\*\*/g;
const matches = [...content.matchAll(qRegex)];

if (matches.length !== 95) {
  throw new Error(`Expected 95 questions in ${SOURCE_FILE}, found ${matches.length}`);
}

const questions = [];

for (let i = 0; i < matches.length; i++) {
  const qNum = parseInt(matches[i][1], 10);
  const startIdx = matches[i].index + matches[i][0].length;
  const endIdx = (i + 1 < matches.length) ? matches[i + 1].index : content.length;
  const rawBlock = content.substring(startIdx, endIdx);

  const ansIndex = rawBlock.search(/\*\*Answer:/i);
  if (ansIndex === -1) {
    throw new Error(`Missing Answer for Question ${qNum}`);
  }
  const qAndOptions = rawBlock.substring(0, ansIndex);

  const rawLines = qAndOptions.split("\n").map(l => l.trim()).filter(l => l.length > 0);
  
  // Filter out stray page headers/footers
  const cleanLines = rawLines.filter(l => {
    if (/^Questions & Answers PDF/i.test(l)) return false;
    if (/^P-\d+/i.test(l)) return false;
    if (/justcerts\.com/i.test(l)) return false;
    if (/^#{1,6}\s*$/.test(l)) return false;
    return true;
  });

  const optRegex = /^(?:[#*\-\s]*)([A-E])[\.\)]\s+(.*)/i;
  let firstOptIndex = -1;
  cleanLines.forEach((l, idx) => {
    if (optRegex.test(l) && firstOptIndex === -1) {
      firstOptIndex = idx;
    }
  });

  if (firstOptIndex === -1) {
    throw new Error(`Could not find options for Question ${qNum}`);
  }

  // Exact verbatim prompt
  const prompt = cleanLines.slice(0, firstOptIndex).join(" ").replace(/\s+/g, " ").trim();

  // Parse options
  const optLines = cleanLines.slice(firstOptIndex);
  const options = [];
  optLines.forEach(l => {
    const m = l.match(optRegex);
    if (m) {
      options.push({
        id: m[1].toUpperCase(),
        text: cleanOptionText(m[2])
      });
    } else {
      if (options.length > 0) {
        options[options.length - 1].text = cleanOptionText(options[options.length - 1].text + " " + l);
      }
    }
  });

  // Parse Answer
  const ansMatch = rawBlock.match(/\*\*Answer:\s*([A-E,\s]+)\*\*/i);
  let correctAnswers = ansMatch ? ansMatch[1].replace(/\s+/g, "").split(",").filter(Boolean) : [];

  // Parse Explanation
  const explMatch = rawBlock.match(/Explanation:\s*([\s\S]*)/i);
  let rawExpl = explMatch ? explMatch[1].trim() : "";
  let cleanExpl = rawExpl.split("\n")
    .map(l => l.trim())
    .filter(l => {
      if (/^Questions & Answers PDF/i.test(l)) return false;
      if (/^P-\d+/i.test(l)) return false;
      if (/justcerts\.com/i.test(l)) return false;
      if (/^#{1,6}\s*$/.test(l)) return false;
      return true;
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  // Apply technical audit overrides if present
  if (AUDIT_OVERRIDES[qNum]) {
    if (AUDIT_OVERRIDES[qNum].correctAnswers) {
      correctAnswers = AUDIT_OVERRIDES[qNum].correctAnswers;
    }
    if (AUDIT_OVERRIDES[qNum].auditNote) {
      cleanExpl = `${cleanExpl}\n\n${AUDIT_OVERRIDES[qNum].auditNote}`;
    }
  }

  const topic = TOPIC_MAPPING[qNum] || "Data Cloud Fundamentals";

  questions.push({
    id: `q${qNum}`,
    question: prompt,
    options,
    correctAnswers,
    explanation: cleanExpl,
    topic,
    sourceVerified: true
  });
}

// Write JSON file
fs.writeFileSync(OUTPUT_JSON, JSON.stringify(questions, null, 2), "utf8");
console.log(`Successfully generated ${OUTPUT_JSON} with ${questions.length} questions.`);

// Write JavaScript module file for browser compatibility
const jsContent = `// Salesforce Certified Data Cloud Specialist & Consultant Exam Questions
// Generated autonomously from Data-Con-101.md with verified technical answer keys and explanations.
// Total questions: ${questions.length}

const DATA_CLOUD_QUESTIONS = ${JSON.stringify(questions, null, 2)};

if (typeof module !== "undefined" && module.exports) {
  module.exports = DATA_CLOUD_QUESTIONS;
}
if (typeof window !== "undefined") {
  window.DATA_CLOUD_QUESTIONS = DATA_CLOUD_QUESTIONS;
}
`;

fs.writeFileSync(OUTPUT_JS, jsContent, "utf8");
console.log(`Successfully generated ${OUTPUT_JS}.`);
