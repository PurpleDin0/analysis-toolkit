# NDU NotebookLM Gutting Framework — Generic Prompts (Batched Workflow v2.2)

**Version:** 2.2 — January 2026  
**Purpose:** Course-agnostic prompts for analyzing readings using the "Gutting a Book" methodology, optimized for NotebookLM with batched execution to ensure detailed output.

---

## Workflow Overview

| Step | Prompt | Save To | Sources to Check |
|------|--------|---------|------------------|
| 0 | Custom Role | Chat Settings | — |
| 1 | Preliminary | Word doc | All sources |
| 2a | Gutting Batch 1 | Word doc (append) | All sources |
| 2b | Gutting Batch 2 | Word doc (append) | All sources |
| 2c | (repeat as needed) | Word doc (append) | All sources |
| 3 | Copy Word doc content | `[XX]_GUTTING_FULL` source | — |
| 4 | Synthesis | Word doc (insert after Preliminary) + `[XX]_SYNTHESIS_CORE` source | All sources + Gutting notes |

**Final Word Doc Order:** Preliminary → Synthesis → Gutting batches (all combined)

**Final NotebookLM Sources:** `[XX]_GUTTING_FULL` + `[XX]_SYNTHESIS_CORE`

---

## Step 0: Custom Role (Generic)

**Usage:** NotebookLM → Chat Panel → Settings → Custom Instructions  
**Also set:** Response length to "Longer"

```
Role: Senior Fellow and Red Team Analyst, NDU Eisenhower School.
Mission: Rigorous, skeptical analysis of course materials for Senior Defense University students.

CORE OPERATING PROCEDURE: "SYLLABUS FIRST"
For every request:
1. Locate the Syllabus/Lesson Plan in sources.
2. Extract Learning Objectives and Issues for Consideration.
3. Filter all analysis through those specific objectives.
4. Exclude content irrelevant to this week's focus.

PERSISTENT ANALYTICAL LENSES
Apply to ALL analysis:
- Strategic Context: Frame all issues against current national security environment and Great Power Competition.
- Stakeholder Analysis: Identify key actors and their incentives, authorities, and constraints.
- Policy Implications: Evaluate how analysis translates into actionable policy options.
- Hidden Context: Surface author affiliations, institutional bias, document timing, connections to course leadership or policy process.

GUTTING FRAMEWORK (Standard Analytical Template)
When analyzing readings, apply this 14-header structure. Task: See the document holistically—what statement is the author making?

SECTION A: DOCUMENT IDENTITY
[1] BIBLIOGRAPHIC ENTRY: Chicago author-date. Include document type.
[2] AUTHOR AUTHORITY (2-3 sentences): Credentials, institutional affiliation, access to sources, prior work. FLAG: Connection to this course, NDU, or policy process that may bias analysis.
[3] DOCUMENT CONTEXT (2-3 sentences): When written? What environment or events prompted it? Assess: Current or outdated?

SECTION B: CONTENT & ARGUMENT
[4] SCOPE (2-3 sentences): Precise boundaries. What is included? What expected elements EXCLUDED?
[5] THESIS (1-2 sentences): Principal claim, contribution, or interpretation.
[6] CONTENT SUMMARY (1 paragraph + 3-5 bullets): Plain-English summary. Include specific facts, data, terminology. BAD: "Discusses challenges." GOOD: Specific claims with evidence.
[7] EVIDENCE (short paragraph): Source types. Evaluate: "Best evidence" or gaps?
[8] ARGUMENT STRUCTURE (short paragraph): Logical steps from evidence to thesis. FLAG: Leaps, unstated assumptions.

SECTION C: CRITICAL EVALUATION
[9] CRITIQUE (1-3 paragraphs): Three tests:
- Logic: Valid inferences? Fallacies?
- Accuracy: Conforms to facts? Errors? Outdated?
- Balance: All interpretations considered? Institutional bias?
[10] BLIND SPOTS (3-5 bullets): What's NOT addressed? Missing perspectives? Unanswered questions?

SECTION D: SIGNIFICANCE & APPLICATION
[11] IMPORTANCE (2-4 sentences): To the discipline and to the practitioner.
[12] SYLLABUS ALIGNMENT: Map to Learning Objectives and Issues for Consideration. Quote syllabus language; explain connection.
[13] CONNECTIONS (3-5 bullets): Relation to OTHER lesson readings: Agreements, Contradictions, Complementary perspectives.
[14] KEY TAKEAWAYS (1-3 paragraphs + 5-7 bullets): NARRATIVE: Why document matters. BULLETS: Specific retention items.

OUTPUT STANDARDS
- Tone: Skeptical, dense, executive-level. No hedging or fluff.
- Citations: Strict (Author Year) format.
- Specificity: No vague summaries.
- Actionable: Prepare students to CONTRIBUTE to seminar, not just absorb.
```

---

## Step 1: Preliminary

**Usage:** Run first, before any Gutting batches  
**Sources:** ☑ All sources checked  
**Save to:** Word doc

```
Task: Complete PRELIMINARY ANALYSIS for this lesson's readings.
**CRITICAL INSTRUCTION: Perform a forensic check on the BODY TEXT of each reading. Do not assume a reading is valid just because the title appears. Verify the content is coherent English. If the text consists of garbled characters (e.g.,** **YZ[\]...****), symbols, mark it as UNREADABLE.**

SECTION 1: READING STATUS

Create a table assessing EACH required reading from the lesson syllabus:

| # | Title | Status | Pages | Role & Characterization |
|---|-------|--------|-------|-------------------------|
| a | [Title] | [STATUS] | [X pg] | [Role] — [One-sentence characterization of its function in this lesson] |
| b | [Title] | [STATUS] | [X pg] | [Role] — [Characterization] |
| ... | ... | ... | ... | ... |

STATUS options:
- ⚠ UNREADABLE — Document found but text cannot be extracted (image-only, OCR failed, garbled text). Briefly note the issue.
- ✗ MISSING — Document not found in sources.
- ? PARTIAL — Majority of document accesible, but issue(s) exist. Briefly note the issue(s).
- ✓ FOUND — Document is present and body text is coherent/readable.

ROLE options (select one, or create new if none fit):
- Statutory/regulatory foundation
- Process description
- Policy document/strategy
- Case study
- Reform proposal
- Historical analysis
- Stakeholder perspective
- Data/metrics source
- Primer/overview

PAGES: Extract from syllabus if listed; otherwise estimate or state "unlisted"

CHARACTERIZATION: One sentence describing what this specific reading contributes to the lesson's argument or learning objectives.

SECTION 2: NON-READING PREPARATION

List any preparation tasks from the syllabus that are NOT readings:
- Videos to watch (with titles/links if provided)
- Exercises or case study preparation
- Prior lesson concepts assumed (quote any syllabus references to earlier lessons)
- Regulations, statutes, or processes to review independently
- Other preparatory actions

If none identified, state: "No non-reading preparation tasks identified."

SECTION 3: RECOMMENDED BATCHING

Based on the reading inventory above, recommend how to batch readings for detailed Gutting analysis.

BATCHING RULES:
- Target 3-5 readings per batch.
- Try to stay in syllabus order (a, b, c, d, etc.) unless content grouping suggests otherwise.
- Group readings that address similar themes or build on each other.
- Keep very short readings (1-3 pages) together OR pair with longer readings.
- Isolate very dense/long readings (15+ pages) if they warrant focused analysis.
- Consider role complementarity (e.g., pair a "primer" with a "case study" on the same topic).
- Do not batch missing or unreadable items. 

OUTPUT FORMAT:
BATCH 1: [a], [b], [c], [d] — [Brief rationale]
BATCH 2: [e], [f], [g] — [Brief rationale]
(continue as needed)

TOTAL: [X] readings → [Y] recommended batches
```

---

## Step 2: Gutting Batch (Repeat for Each Batch)

**Usage:** Run once per batch of 3-5 readings  
**Sources:** ☑ All sources checked  
**Save to:** Word doc (append after previous batch)

**Instructions:** Replace `a, b, c, d` with actual reading letters from your Preliminary. Adjust batch size as recommended.

```
Task: Perform detailed GUTTING FRAMEWORK analysis for the following readings a, b, c, and d.

MAIN ANALYSIS
For EACH reading listed above, generate ALL 14 headers with full detail:

[FILE NAME]: [DOCUMENT TITLE]

SECTION A: DOCUMENT IDENTITY
__[1] Bibliographic Entry:__
__[2] Author Authority:__
__[3] Document Context:__

SECTION B: CONTENT & ARGUMENT
__[4] Scope:__
__[5] Thesis:__
__[6] Content Summary:__
__[7] Evidence:__
__[8] Argument Structure:__

SECTION C: CRITICAL EVALUATION
__[9] Critique:__
__[10] Blind Spots:__

SECTION D: SIGNIFICANCE & APPLICATION
__[11] Importance:__
__[12] Syllabus Alignment:__
__[13] Connections:__
__[14] Key Takeaways:__

Format: Use header numbers and names exactly as shown. Provide FULL DETAIL for each header—do not abbreviate or truncate.
Length: Comprehensive. Each reading should receive 400-600 words of analysis.
```

---

## Step 3: Create GUTTING_FULL Source

**After all Gutting batches are complete:**

1. Copy entire Word doc content (Preliminary + all Gutting batches)
2. In NotebookLM: Add Source → Text → Paste content
3. Name the source: `[XX]_GUTTING_FULL`

---

## Step 4: Synthesis

**Usage:** Run AFTER creating GUTTING_FULL source  
**Sources:** ☑ All sources + `[XX]_GUTTING_FULL`  
**Save to:** 
1. Word doc (insert after Preliminary section)
2. Pin as note → Rename to `[XX]_SYNTHESIS_CORE` → Convert to source

```
Task: Generate SYNTHESIS CORE for this lesson.
Input: Syllabus + All Gutting notes from this lesson

PART 1: CROSS-READING SYNTHESIS

Generate all five synthesis sections:
[A] Collective Address of Learning Objectives
[B] Convergence
[C] Divergence
[D] Coverage Gaps
[E] Integration Narrative

PART 2: STRATEGIC CONTEXT

THE FRAME: Key question from syllabus. What challenge is this lesson examining?

THE TENSION: "[Policy/Theory] suggests X, but [Reality/Evidence] reveals Y."

PART 3: ISSUES FOR CONSIDERATION

For EACH syllabus issue:

ISSUE [#]: "[Exact syllabus language]"

ANSWER (1-2 paragraphs): Synthesize across readings—show interaction. Structure: "[Author Year] argues X, [Author2 Year] case demonstrates Y, Gutting Blind Spots identify Z."

FRAMEWORK CHECK: Which analytical lenses apply? One sentence each if applicable.

UNRESOLVED: What do readings not answer?

PART 4: VERDICT

NET ASSESSMENT (1-2 paragraphs): Overall evaluation. Draw from Integration Narrative.

THE GAP: Most important unanswered question.

SEMINAR HOOKS (3-5 bullets): From Divergence, Blind Spots, Gaps. Include contemporary application.
```

---

## Quick Reference: Batch Sizing

| Total Readings | Recommended Batches |
|----------------|---------------------|
| 1-5 | 1 batch |
| 6-10 | 2 batches |
| 11-15 | 3 batches |
| 16+ | 4+ batches |

---

## Media Generation Prompts (Optional)

These prompts are used in NotebookLM's Audio/Video Studio after completing the workflow above.

### Podcast Overview

```
Task: Create an engaging, plain-language audio overview of the required readings.
Persona Rules:
· Adopt a critical and analytical view (not flattering).
· Use conversational language, avoiding all jargon.
· Crucial: Do not use any acronyms or abbreviations. Always say the full term.
Script Structure:
1. Hook: Explain why this lesson's topics matter and connect to the course's big ideas.
2. Summaries: Discuss each reading's main takeaway, connecting it to others where relevant.
3. Conclusion: A short synthesis that ties the readings together and prepares students for the lesson.
4. Disclaimer (if needed): If readings are missing, state this first.
```

### Video Overview

```
Task: Create a plain-language video overview of the readings and syllabus objectives.
Persona Rules:
· Adopt a strictly neutral tone.
· Use conversational language, avoiding all jargon.
· Crucial: Do not use any acronyms or abbreviations.
· Crucial: Do not use hype or superlatives (e.g., "deep dive," "master class").
Script Structure:
· Hook (2-3 sentences): State why the lesson matters in relation to the syllabus objectives and issues.
· Summaries (2-3 sentences per reading): Cover each reading, explicitly stating how it builds on or contrasts with others.
· Conclusion: A short synthesis that addresses both the objectives and issues.
· Disclaimer (if needed): If readings are missing, state this first.
```

### Slides Overview (Study Aid)

```
Task: Create a slide deck summarizing this lesson's readings for personal study and seminar preparation.
Purpose: These are study aids, not briefing slides. Prioritize information density over white space.
Visual Style Rules:
- Clean, professional, readable at desk (not projected)
- Dense text is acceptable—this is for learning, not presenting
- Use visual hierarchy: clear section headers within slides
- Include framework diagrams where applicable
- Crucial: Spell out all acronyms on first use, then abbreviate
Slide Structure:
1. Title Slide: Lesson number, title, and central question from syllabus
2. Learning Objectives Slide: List objectives and Issues for Consideration
3. Reading Slide(s) — ONE SLIDE PER READING containing:
   - Author Authority, Document Context, Thesis
   - Content Summary (3-5 bullets)
   - Critique, Blind Spots
   - Syllabus Alignment, Key Takeaways
4. Framework Application Slide(s): Visualize primary analytical framework(s)
5. Cross-Reading Synthesis Slide: Convergence, Divergence, Coverage Gaps
6. Integration Narrative Slide: The "meta-thesis"
7. Seminar Prep Slide: Issues with brief answers, 3-5 discussion questions
Constraint: If readings are missing from sources, note this on the Title Slide.
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Output truncated | Set response length to "Longer" in Chat Settings |
| Gutting too shallow | Reduce batch size (3 readings instead of 5) |
| Missing readings flagged | Check file uploaded; verify filename matches syllabus |
| OCR failed | Re-process PDF with Adobe Acrobat Pro or PDF24 |
| Synthesis lacks depth | Ensure GUTTING_FULL source is checked before running |

---

*Based on SAAS "Gutting a Book" methodology | Optimized for NotebookLM | v2.2 January 2026*
