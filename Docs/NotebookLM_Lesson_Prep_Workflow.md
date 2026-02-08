# NotebookLM Lesson Prep Workflow

**Version:** 2.2 — January 2026  
**Purpose:** Step-by-step process for preparing course materials and executing the Gutting Framework analysis in NotebookLM.

---

## Prerequisites

| Tool | Purpose | Notes |
|------|---------|-------|
| NotebookLM Pro | Analysis platform | 300 sources/notebook limit |
| PDF editor with OCR | Fix image-only PDFs | Adobe Acrobat Pro or PDF24 (free) |
| Batch rename tool | File naming | Windows PowerToys PowerRename or similar |
| Word processor | Assembly | For combining outputs |
| Course materials access | Source documents | Blackboard, Teams, web, etc. |

---

## Naming Convention

| Source Type | Pattern | Example |
|-------------|---------|---------|
| Lesson Syllabus | `XX_SYLLABUS` | `04a_SYLLABUS.docx` |
| Required Reading | `XX_Y_[filename]` | `04a_a_Bush_1946_Speech.pdf` |
| Additional Reading | `XX_XR.Y_[filename]` | `04a_XR.a_OECD_Outlook.pdf` |
| YouTube/URL (renamed in NotebookLM) | `XX_Y_[title]` | `04a_c_TED_Innovation_Talk` |
| Gutting Output | `[XX]_GUTTING_FULL` | `05_GUTTING_FULL` |
| Synthesis Output | `[XX]_SYNTHESIS_CORE` | `05_SYNTHESIS_CORE` |

**Why this convention:**
- NotebookLM displays sources alphabetically
- Prefix ensures lesson materials group together
- Letter suffix (a, b, c) matches syllabus reading order
- Enables quick visual scan of what's loaded per lesson

---

## Folder Structure (Local)

```
📁 [Course Code]
├── 📁 Lesson 04a
│   ├── 📁 Syllabus
│   ├── 📁 Required Readings
│   └── 📁 Additional Readings
├── 📁 Lesson 04b
│   └── ...
└── 📁 Lesson 05
    └── ...
```

---

## Phase 1: Gather Materials

**Timing:** Weekend before class week

### 1.1 Open Lesson Syllabus

Identify all required readings from the syllabus. Note:
- Titles and authors
- Page counts (if listed)
- Source locations (Blackboard, Teams, web, book)
- Reading order (a, b, c, etc.)

### 1.2 Locate Each Source

| Source Type | Action |
|-------------|--------|
| Blackboard/Teams PDF | Download to lesson folder |
| Web link (article/report) | Download PDF or save URL |
| Podcast | Download MP3 **or** copy transcript from podcast page |
| YouTube video | Copy URL (will add directly to NotebookLM) |
| Hard copy book | Scan relevant pages **or** create summary doc **or** skip |

### 1.3 Handle Unavailable Sources

If a source cannot be retrieved:
- **Option A:** Create summary document using AI assistance based on your understanding
- **Option B:** Skip it — the Preliminary prompt will flag it as missing

**Result:** Lesson folder contains all retrievable materials + list of URLs

---

## Phase 2: Verify Documents

### 2.1 Check Each PDF for Machine-Readable Text

1. Open PDF
2. Press `Ctrl+A` (Select All)
3. If text highlights → ✅ Good
4. If nothing selects (image-only) → Needs OCR

### 2.2 Run OCR on Image-Only PDFs

**Adobe Acrobat Pro:**
1. Open PDF
2. Tools → Scan & OCR → Recognize Text
3. Save

**PDF24 (free alternative):**
1. Open PDF24 Toolbox
2. Select OCR tool
3. Upload and process
4. Download result

### 2.3 Verify OCR Success

After OCR, repeat the `Ctrl+A` test to confirm text is now selectable.

---

## Phase 3: Rename Files

### 3.1 Batch Rename Required Readings

Use PowerRename or similar tool to prepend `XX_Y_` to each file:

| Before | After |
|--------|-------|
| `Bush_Speech_1946.pdf` | `04a_a_Bush_Speech_1946.pdf` |
| `DIB_Innovation_Strategy.pdf` | `04a_b_DIB_Innovation_Strategy.pdf` |
| `Beyond_Sputnik_Ch1.pdf` | `04a_c_Beyond_Sputnik_Ch1.pdf` |

### 3.2 Rename Syllabus

Rename lesson syllabus to `XX_SYLLABUS`:
- `04a_SYLLABUS.docx`

---

## Phase 4: Upload to NotebookLM

### 4.1 Open Course Notebook

- One notebook per course (Pro tier: 300 sources max)
- If notebook doesn't exist, create it

### 4.2 Upload Files

1. Click "Add Source"
2. Upload lesson syllabus first
3. Upload all required readings

### 4.3 Add YouTube/URL Sources

1. Click "Add Source" → "YouTube" or "Website"
2. Paste URL
3. After added: Click `⋮` → "Rename"
4. Apply naming convention: `XX_Y_[descriptive title]`

### 4.4 Spot Check

Open 1-2 sources to confirm content is readable in NotebookLM.

---

## Phase 5: Execute Prompts

### 5.0 Set Custom Role

1. Open Chat Panel → Settings → Custom Instructions
2. Paste course-specific Custom Role (from course customizations document)
3. Set Response length to "Longer"

### 5.1 Run Preliminary

1. Check all lesson sources
2. Paste Preliminary prompt
3. Copy output to Word doc

**Review output for:**
- ✗ MISSING readings → locate and upload
- ⚠ UNREADABLE readings → run OCR, re-upload
- Recommended batching → note batch assignments

### 5.2 Run Gutting Batches

For each recommended batch:

1. Paste Gutting Batch prompt
2. Replace `a, b, c, d` with actual reading letters
3. Copy output to Word doc (append after previous batch)

**Repeat until all readings are analyzed.**

### 5.3 Create GUTTING_FULL Source

1. Copy entire Word doc content (Preliminary + all Gutting batches)
2. In NotebookLM: Add Source → Text
3. Paste content
4. Name: `[XX]_GUTTING_FULL`

### 5.4 Run Synthesis

1. Check all sources + `[XX]_GUTTING_FULL`
2. Paste Synthesis prompt (with course-specific Framework Check)
3. Copy output to Word doc (insert after Preliminary section)
4. Pin as note → Rename to `[XX]_SYNTHESIS_CORE` → Convert to source

---

## Phase 6: Assemble Final Document

### Word Doc Order

| Order | Section | Source |
|-------|---------|--------|
| 1 | Preliminary | Step 5.1 output |
| 2 | Synthesis | Step 5.4 output |
| 3 | Gutting Batch 1 | Step 5.2a output |
| 4 | Gutting Batch 2 | Step 5.2b output |
| ... | ... | ... |

**Rationale:** Conclusions first (synthesis), evidence last (guttings).

---

## Phase 7: Optional Media Generation

After completing the workflow, use NotebookLM's Audio/Video Studio:

1. Check `[XX]_GUTTING_FULL` and `[XX]_SYNTHESIS_CORE` sources
2. Open Audio Overview or Video Overview
3. Click "Customize"
4. Paste media prompt (Podcast, Video, or Slides)
5. Generate

---

## Quick Reference: Time Estimates

| Phase | Time |
|-------|------|
| Gather materials | 15-30 min |
| Verify/OCR | 5-15 min |
| Rename | 5 min |
| Upload | 5-10 min |
| Execute prompts | 15-30 min |
| Assemble document | 5 min |
| **Total** | **50-95 min per lesson** |

---

## Quick Reference: Batch Sizing

| Total Readings | Recommended Batches |
|----------------|---------------------|
| 1-5 | 1 batch |
| 6-10 | 2 batches |
| 11-15 | 3 batches |
| 16+ | 4+ batches |

**Rule of thumb:** 3-5 readings per batch produces detailed analysis. More than 5 risks truncated output.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| PDF shows as image (no selectable text) | Run through OCR tool |
| NotebookLM errors on upload | Check file size (<200MB), try re-saving PDF |
| Podcast has no transcript | Upload MP3 directly — NotebookLM auto-transcribes |
| YouTube video blocked/unavailable | Download transcript via third-party tool or skip |
| Source exceeds reasonable page count | Upload relevant chapter/section only |
| Output truncated | Set response length to "Longer"; reduce batch size |
| Gutting too shallow | Reduce batch size (3 readings instead of 5) |
| Synthesis lacks depth | Ensure GUTTING_FULL source is checked |
| Course lenses not applied | Verify Custom Role is set in Chat Settings |

---

## NotebookLM Source Limits

| Constraint | Limit |
|------------|-------|
| Sources per notebook | 300 (Pro) |
| Sources created per lesson | 2 (`GUTTING_FULL` + `SYNTHESIS_CORE`) |
| Estimated sources for 24-lesson course | ~200 (readings) + ~48 (outputs) = ~248 |

**If approaching limit:** Consider merging lesson syllabus + required readings into single PDF per lesson before upload.

---

## Document Set Reference

| Document | Purpose |
|----------|---------|
| `Generic_Batched_Workflow_v2.2.md` | Complete prompts (Preliminary, Gutting, Synthesis, Media) |
| `[Course]_Customizations_v2.2.md` | Course-specific Custom Role + Framework Check |
| `NotebookLM_Lesson_Prep_Workflow.md` | This document — process guide |

---

*v2.2 January 2026 | Based on SAAS "Gutting a Book" methodology*
