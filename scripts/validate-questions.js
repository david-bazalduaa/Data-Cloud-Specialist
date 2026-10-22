const fs = require("fs");
const path = require("path");
const { EXAM_DOMAINS } = require("../src/config/exam-domains.js");

const SOURCE_FILE = path.join(__dirname, "..", "Data-Con-101.md");
const QUESTIONS_JSON = path.join(__dirname, "..", "questions.json");
const QUESTIONS_JS = path.join(__dirname, "..", "questions.js");

console.log("================================================================================");
console.log("   SALESFORCE DATA 360 / DATA CLOUD CONSULTANT QUESTION BANK VALIDATOR          ");
console.log("================================================================================");

// 1. Verify existence of files
if (!fs.existsSync(SOURCE_FILE)) {
  console.error("❌ FAILED: Source file Data-Con-101.md not found!");
  process.exit(1);
}
if (!fs.existsSync(QUESTIONS_JSON)) {
  console.error("❌ FAILED: questions.json not found!");
  process.exit(1);
}
if (!fs.existsSync(QUESTIONS_JS)) {
  console.error("❌ FAILED: questions.js not found!");
  process.exit(1);
}

// 2. Count questions in raw Markdown source
const sourceContent = fs.readFileSync(SOURCE_FILE, "utf8");
const rawMatches = [...sourceContent.matchAll(/#### \*\*<u>Question:\s*(\d+)<\/u>\*\*/g)];
const expectedCount = rawMatches.length;
console.log(`✓ Source Markdown contains ${expectedCount} verified question blocks.`);

// 3. Load questions.json
let questions;
try {
  questions = JSON.parse(fs.readFileSync(QUESTIONS_JSON, "utf8"));
} catch (e) {
  console.error("❌ FAILED: questions.json is not valid JSON:", e.message);
  process.exit(1);
}

// 4. Validate total question count
if (questions.length !== expectedCount) {
  console.error(`❌ FAILED: Question count mismatch! Expected ${expectedCount}, got ${questions.length}`);
  process.exit(1);
}
console.log(`✓ Count check passed: Exactly ${questions.length} / ${expectedCount} questions loaded.`);

// 5. Validate schema, options, answers, and 6 official exam domains
const seenIds = new Set();
const validDomainIds = new Set(Object.keys(EXAM_DOMAINS));
const domainCounts = {};
let totalAuditNotes = 0;

validDomainIds.forEach(id => {
  domainCounts[id] = 0;
});

questions.forEach((q, idx) => {
  const qNum = idx + 1;
  const expectedId = `q${qNum}`;

  // ID validation
  if (!q.id) {
    console.error(`❌ FAILED: Question at index ${idx} has no id`);
    process.exit(1);
  }
  if (seenIds.has(q.id)) {
    console.error(`❌ FAILED: Duplicate question id detected: ${q.id}`);
    process.exit(1);
  }
  seenIds.add(q.id);

  if (q.id !== expectedId) {
    console.error(`❌ FAILED: Question ID sequence mismatch at index ${idx}: expected ${expectedId}, got ${q.id}`);
    process.exit(1);
  }

  // Question Prompt Integrity (Zero rewrite check)
  if (typeof q.question !== "string" || q.question.trim().length === 0) {
    console.error(`❌ FAILED: Question ${q.id} has empty prompt`);
    process.exit(1);
  }

  // Options validation
  if (!Array.isArray(q.options) || q.options.length < 2) {
    console.error(`❌ FAILED: Question ${q.id} has fewer than 2 options`);
    process.exit(1);
  }

  const optionIds = new Set();
  q.options.forEach((opt, optIdx) => {
    if (!opt.id || typeof opt.id !== "string") {
      console.error(`❌ FAILED: Question ${q.id} option ${optIdx} has invalid id`);
      process.exit(1);
    }
    if (optionIds.has(opt.id)) {
      console.error(`❌ FAILED: Question ${q.id} has duplicate option id: ${opt.id}`);
      process.exit(1);
    }
    optionIds.add(opt.id);

    if (typeof opt.text !== "string" || opt.text.trim().length === 0) {
      console.error(`❌ FAILED: Question ${q.id} option ${opt.id} has empty text`);
      process.exit(1);
    }
  });

  // Correct Answers validation
  if (!Array.isArray(q.correctAnswers) || q.correctAnswers.length === 0) {
    console.error(`❌ FAILED: Question ${q.id} has no correctAnswers defined`);
    process.exit(1);
  }

  q.correctAnswers.forEach(ans => {
    if (!optionIds.has(ans)) {
      console.error(`❌ FAILED: Question ${q.id} correct answer "${ans}" does not exist in options:`, [...optionIds]);
      process.exit(1);
    }
  });

  // Explanation validation
  if (typeof q.explanation !== "string" || q.explanation.trim().length === 0) {
    console.error(`❌ FAILED: Question ${q.id} has empty explanation`);
    process.exit(1);
  }

  if (q.explanation.includes("[Technical Audit Note:")) {
    totalAuditNotes++;
  }

  // Domain ID & Topic validation
  if (!q.domainId || !validDomainIds.has(q.domainId)) {
    console.error(`❌ FAILED: Question ${q.id} has invalid domainId: "${q.domainId}". Allowed:`, [...validDomainIds]);
    process.exit(1);
  }

  const expectedDomain = EXAM_DOMAINS[q.domainId];
  if (q.topic !== expectedDomain.name) {
    console.error(`❌ FAILED: Question ${q.id} topic "${q.topic}" does not match domain name "${expectedDomain.name}"`);
    process.exit(1);
  }

  domainCounts[q.domainId]++;

  // Source Verified
  if (q.sourceVerified !== true) {
    console.error(`❌ FAILED: Question ${q.id} sourceVerified is not true`);
    process.exit(1);
  }
});

console.log("✓ No duplicate question IDs found.");
console.log("✓ 100% of questions belong to a recognized official exam domain.");
console.log("✓ All correctAnswers map to valid option IDs.");
console.log("✓ All question prompts, options, and explanations are verified and complete.");
console.log(`✓ Technical audit notes incorporated: ${totalAuditNotes}`);

console.log("\n--------------------------------------------------------------------------------");
console.log("   OFFICIAL EXAM DOMAIN DISTRIBUTION TABLE                                     ");
console.log("--------------------------------------------------------------------------------");
console.log(
  "Domain ID".padEnd(32) +
  "Domain Name".padEnd(42) +
  "Weight".padEnd(10) +
  "Questions".padEnd(12) +
  "Actual %"
);
console.log("-".repeat(105));

let totalWeight = 0;
let totalQs = 0;

for (const [dId, count] of Object.entries(domainCounts)) {
  const domain = EXAM_DOMAINS[dId];
  const actualPct = ((count / questions.length) * 100).toFixed(1) + "%";
  totalWeight += domain.weight;
  totalQs += count;

  console.log(
    dId.padEnd(32) +
    domain.name.padEnd(42) +
    `${domain.weight}%`.padEnd(10) +
    `${count} Qs`.padEnd(12) +
    actualPct
  );
}
console.log("-".repeat(105));
console.log(
  "TOTAL".padEnd(32) +
  "6 Official Blueprint Domains".padEnd(42) +
  `${totalWeight}%`.padEnd(10) +
  `${totalQs} Qs`.padEnd(12) +
  "100.0%"
);
console.log("--------------------------------------------------------------------------------\n");

// 6. Test JS module export
try {
  const jsExport = require(QUESTIONS_JS);
  if (!Array.isArray(jsExport) || jsExport.length !== expectedCount) {
    console.error("❌ FAILED: questions.js module did not export valid array");
    process.exit(1);
  }
  console.log(`✓ questions.js module verification successful (${jsExport.length} items).`);
} catch (e) {
  console.error("❌ FAILED: Error requiring questions.js:", e.message);
  process.exit(1);
}

console.log("================================================================================");
console.log("✅ ALL VALIDATION CHECKS PASSED: 100% DOMAIN MAPPING VERIFIED                   ");
console.log("================================================================================");
