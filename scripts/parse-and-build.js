const fs = require("fs");
const path = require("path");
const { EXAM_DOMAINS } = require("../src/config/exam-domains.js");

const SOURCE_FILE = path.join(__dirname, "..", "Data-Con-101.md");
const OUTPUT_JSON = path.join(__dirname, "..", "questions.json");
const OUTPUT_JS = path.join(__dirname, "..", "questions.js");

const content = fs.readFileSync(SOURCE_FILE, "utf8");

// Strict 1-to-1 mapping of questions to official 6 exam domains
const DOMAIN_MAPPING = {
  1: "connection_and_ingestion",
  2: "setup_and_administration",
  3: "enhancements_sharing_analysis",
  4: "solution_positioning",
  5: "connection_and_ingestion",
  6: "solution_positioning",
  7: "setup_and_administration",
  8: "activations_and_utilization",
  9: "connection_and_ingestion",
  10: "harmonization_and_unification",
  11: "harmonization_and_unification",
  12: "enhancements_sharing_analysis",
  13: "solution_positioning",
  14: "solution_positioning",
  15: "activations_and_utilization",
  16: "setup_and_administration",
  17: "activations_and_utilization",
  18: "harmonization_and_unification",
  19: "enhancements_sharing_analysis",
  20: "activations_and_utilization",
  21: "harmonization_and_unification",
  22: "setup_and_administration",
  23: "enhancements_sharing_analysis",
  24: "connection_and_ingestion",
  25: "connection_and_ingestion",
  26: "activations_and_utilization",
  27: "setup_and_administration",
  28: "enhancements_sharing_analysis",
  29: "activations_and_utilization",
  30: "enhancements_sharing_analysis",
  31: "activations_and_utilization",
  32: "enhancements_sharing_analysis",
  33: "connection_and_ingestion",
  34: "setup_and_administration",
  35: "connection_and_ingestion",
  36: "enhancements_sharing_analysis",
  37: "harmonization_and_unification",
  38: "solution_positioning",
  39: "solution_positioning",
  40: "enhancements_sharing_analysis",
  41: "connection_and_ingestion",
  42: "harmonization_and_unification",
  43: "enhancements_sharing_analysis",
  44: "harmonization_and_unification",
  45: "activations_and_utilization",
  46: "enhancements_sharing_analysis",
  47: "harmonization_and_unification",
  48: "connection_and_ingestion",
  49: "activations_and_utilization",
  50: "connection_and_ingestion",
  51: "harmonization_and_unification",
  52: "harmonization_and_unification",
  53: "activations_and_utilization",
  54: "enhancements_sharing_analysis",
  55: "connection_and_ingestion",
  56: "connection_and_ingestion",
  57: "activations_and_utilization",
  58: "enhancements_sharing_analysis",
  59: "setup_and_administration",
  60: "enhancements_sharing_analysis",
  61: "activations_and_utilization",
  62: "connection_and_ingestion",
  63: "harmonization_and_unification",
  64: "harmonization_and_unification",
  65: "connection_and_ingestion",
  66: "setup_and_administration",
  67: "activations_and_utilization",
  68: "setup_and_administration",
  69: "enhancements_sharing_analysis",
  70: "setup_and_administration",
  71: "activations_and_utilization",
  72: "harmonization_and_unification",
  73: "enhancements_sharing_analysis",
  74: "solution_positioning",
  75: "enhancements_sharing_analysis",
  76: "harmonization_and_unification",
  77: "harmonization_and_unification",
  78: "enhancements_sharing_analysis",
  79: "enhancements_sharing_analysis",
  80: "connection_and_ingestion",
  81: "enhancements_sharing_analysis",
  82: "connection_and_ingestion",
  83: "enhancements_sharing_analysis",
  84: "activations_and_utilization",
  85: "enhancements_sharing_analysis",
  86: "connection_and_ingestion",
  87: "harmonization_and_unification",
  88: "activations_and_utilization",
  89: "setup_and_administration",
  90: "solution_positioning",
  91: "solution_positioning",
  92: "enhancements_sharing_analysis",
  93: "harmonization_and_unification",
  94: "activations_and_utilization",
  95: "harmonization_and_unification"
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
  cleaned = cleaned.replace(/#+$/, "").trim();
  cleaned = cleaned.replace(/ResolutionandUnification/g, "Resolution and Unification");
  cleaned = cleaned.replace(/ExplorerandQuery Editor/g, "Explorer and Query Editor");
  cleaned = cleaned.replace(/ExplorerandActions/g, "Explorer and Actions");
  cleaned = cleaned.replace(/ResolutionandQuery API/g, "Resolution and Query API");
  cleaned = cleaned.replace(/ActionsandQuery API/g, "Actions and Query API");
  cleaned = cleaned.replace(/([a-z])and([A-Z])/g, "$1 and $2");
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

  // Exact verbatim prompt preservation
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

  const domainId = DOMAIN_MAPPING[qNum];
  if (!domainId || !EXAM_DOMAINS[domainId]) {
    throw new Error(`Question ${qNum} has missing or invalid domain mapping: ${domainId}`);
  }

  const domain = EXAM_DOMAINS[domainId];

  questions.push({
    id: `q${qNum}`,
    question: prompt,
    options,
    correctAnswers,
    explanation: cleanExpl,
    domainId: domain.id,
    topic: domain.name,
    domainWeight: domain.weight,
    sourceVerified: true
  });
}

// Write JSON file
fs.writeFileSync(OUTPUT_JSON, JSON.stringify(questions, null, 2), "utf8");
console.log(`Successfully generated ${OUTPUT_JSON} with ${questions.length} questions.`);

// Write JavaScript module file for browser compatibility
const jsContent = `// Salesforce Certified Data 360 / Data Cloud Consultant Exam Questions
// Generated autonomously from Data-Con-101.md mapped to the official 6 exam domains.
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
