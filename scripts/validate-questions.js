const fs = require("fs");
const path = require("path");

const SOURCE_FILE = path.join(__dirname, "..", "Data-Con-101.md");
const QUESTIONS_JSON = path.join(__dirname, "..", "questions.json");
const QUESTIONS_JS = path.join(__dirname, "..", "questions.js");

console.log("==================================================");
console.log("   DATA CLOUD SPECIALIST QUESTION BANK AUDITOR   ");
console.log("==================================================");

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

// 5. Validate schema and constraints
const seenIds = new Set();
const allowedTopics = new Set([
  "Data Ingestion & Integration",
  "Data Modeling & Harmonization",
  "Identity Resolution & Unification",
  "Insights & Analytics",
  "Segmentation & Activation",
  "Data Governance, Privacy & Administration"
]);

const topicCounts = {};
let totalAuditNotes = 0;

questions.forEach((q, idx) => {
  const qNum = idx + 1;
  const expectedId = `q${qNum}`;

  // Check ID
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

  // Check Question prompt
  if (typeof q.question !== "string" || q.question.trim().length === 0) {
    console.error(`❌ FAILED: Question ${q.id} has empty prompt`);
    process.exit(1);
  }

  // Check Options
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

  // Check Correct Answers
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

  // Check Explanation
  if (typeof q.explanation !== "string" || q.explanation.trim().length === 0) {
    console.error(`❌ FAILED: Question ${q.id} has empty explanation`);
    process.exit(1);
  }

  if (q.explanation.includes("[Technical Audit Note:")) {
    totalAuditNotes++;
  }

  // Check Topic
  if (!q.topic || !allowedTopics.has(q.topic)) {
    console.error(`❌ FAILED: Question ${q.id} has unknown topic: "${q.topic}"`);
    process.exit(1);
  }
  topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;

  // Check Source Verified
  if (q.sourceVerified !== true) {
    console.error(`❌ FAILED: Question ${q.id} sourceVerified is not true`);
    process.exit(1);
  }
});

console.log("✓ No duplicate question IDs found.");
console.log("✓ All correctAnswers map to valid option IDs.");
console.log("✓ All question prompts, options, and explanations are verified and complete.");
console.log(`✓ Technical audit notes incorporated: ${totalAuditNotes}`);
console.log("\n--- Domain Category Distribution ---");
for (const [topic, count] of Object.entries(topicCounts)) {
  console.log(`  • ${topic.padEnd(45)}: ${count} questions`);
}

// 6. Test JS export file
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

console.log("==================================================");
console.log("✅ ALL VALIDATION CHECKS PASSED SUCCESSFULLY!    ");
console.log("==================================================");
