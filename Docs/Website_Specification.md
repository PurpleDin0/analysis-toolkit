# NDU Analyst Toolkit — Website Specification

**Version:** 2.2 — January 2026  
**Target Platform:** Vercel (Next.js or static HTML)  
**Security:** No API calls, no external dependencies, purely static content

---

## Overview

Build a static website that displays the NotebookLM Gutting Framework prompts with:
- Course-specific prompt switching (dropdown)
- One-click copy functionality
- Collapsible sections
- Mobile responsive design
- No backend, no API calls, no user data collection

---

## Site Architecture

```
/
├── index.html (or pages/index.tsx for Next.js)
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
└── data/
    └── prompts.js (all prompt content as JS object)
```

**For Next.js:**
```
/app
├── page.tsx
├── layout.tsx
├── globals.css
└── components/
    ├── CourseSelector.tsx
    ├── StepContainer.tsx
    ├── PromptCard.tsx
    ├── CopyButton.tsx
    ├── AboutSection.tsx
    └── MediaTabs.tsx
/lib
└── prompts.ts (typed prompt data)
```

---

## Design Specifications

### Color Palette (from existing design)

```css
:root {
    --bg-color: #0f1115;
    --card-bg: #161b22;
    --accent-color: #00f0ff;      /* Cyan */
    --accent-dim: #00f0ff33;
    --text-main: #c9d1d9;
    --text-muted: #8b949e;
    --border-color: #30363d;
    --success-color: #2ea043;     /* Green for "COPIED!" feedback */
    --warning-color: #d29922;
    --font-mono: 'Courier New', Courier, monospace;
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
}
```

### Typography
- Headers: Monospace, uppercase, cyan accent
- Body: System sans-serif
- Prompts: Monospace, muted color

### Layout
- Max width: 900px centered
- Mobile responsive (stack on small screens)
- Padding: 20px

---

## Page Structure

### Header
- Title: `NDU // ANALYST TOOLKIT`
- Subtitle: `NOTEBOOKLM GUTTING FRAMEWORK v2.2`
- Course dropdown selector
- Status badge (decorative): `SYSTEM: [COURSE] PROTOCOL`

### Course Selector Options
```
GENERIC // COURSE-AGNOSTIC
EMSO // ELECTROMAGNETIC SPECTRUM
MSW // MILITARY STRATEGY
SAR // STRATEGIC ACQUISITION
IA // INDUSTRY ANALYSIS
SSS // SUBVERSION & TRADECRAFT
```

### About Section (Collapsible, default collapsed)
Content from existing design + updates for v2.2 batched workflow:
- Purpose
- Design Principles (Syllabus First, 14-Header Framework, Course-Specific Lenses)
- The 14 Gutting Headers
- Batched Workflow explanation (NEW)
- Troubleshooting
- Version info

---

## Workflow Steps

### Step 0: Custom Role (Chat Settings)
**Description:** Configure the AI persona in NotebookLM settings.

**Checklist:**
- [ ] Open NotebookLM Chat Panel
- [ ] Click Settings/Sparkle icon
- [ ] Paste Custom Role into "Custom Instructions"
- [ ] Set response length to "Longer"

**Prompt Card:** `CUSTOM ROLE` — course-specific, changes with dropdown

---

### Step 1: Preliminary Analysis
**Description:** Run first to inventory readings, check for missing/unreadable sources, and get batch recommendations.

**Source Selection Box:**
```
☑ Lesson Syllabus  ☑ All Required Readings
```

**Prompt Card:** `PRELIMINARY` — same for all courses

**Action Note:** 
```
Copy output to Word doc. This becomes part of [XX]_GUTTING_FULL.
```

---

### Step 2: Gutting Batches
**Description:** Run once per batch of 3-5 readings. Repeat as needed based on Preliminary recommendations.

**Source Selection Box:**
```
☑ Lesson Syllabus  ☑ All Required Readings
```

**Prompt Card:** `GUTTING BATCH` — same for all courses

**Instructions Box:**
```
Replace a, b, c, d with actual reading letters from Preliminary.
Adjust batch size as recommended (3-5 readings per batch).
Copy each output to Word doc (append after previous batch).
After ALL batches complete: Paste full Word doc as NotebookLM text source → Name: [XX]_GUTTING_FULL
```

---

### Step 3: Synthesis
**Description:** Generate cross-reading synthesis and Issues for Consideration analysis.

**Source Selection Box:**
```
☑ Lesson Syllabus  ☑ All Readings  ☑ [XX]_GUTTING_FULL note
```

**Prompt Card:** `SYNTHESIS` — course-specific Framework Check section

**Action Note:**
```
Copy output to Word doc (insert after Preliminary).
Pin as note → Rename to [XX]_SYNTHESIS_CORE → Convert to source.
```

---

### Step 4: Media Generation (Optional)
**Description:** Use NotebookLM Audio/Video Studio with these prompts.

**Tabs:**
- PODCAST
- VIDEO  
- SLIDES

**Source Selection Box (all tabs):**
```
☑ [XX]_GUTTING_FULL  ☑ [XX]_SYNTHESIS_CORE
Optional: Lesson Syllabus, Original Readings
```

**Prompt Cards:** Same for all courses (media prompts are generic)

---

## Prompt Data Structure

```javascript
const PROMPTS = {
    GENERIC: {
        name: "GENERIC",
        fullName: "GENERIC // COURSE-AGNOSTIC",
        role: `[Full Custom Role prompt text]`,
        preliminary: `[Preliminary prompt text]`,
        gutting: `[Gutting Batch prompt text]`,
        synthesis: `[Synthesis prompt text]`,
        frameworkCheck: `[Generic framework check text]`,
        seminarHooks: `[Generic seminar hooks text]`
    },
    SAR: {
        name: "SAR",
        fullName: "SAR // STRATEGIC ACQUISITION",
        role: `[SAR Custom Role prompt text]`,
        preliminary: `[Same as generic]`,
        gutting: `[Same as generic]`,
        synthesis: `[SAR Synthesis prompt text]`,
        frameworkCheck: `[SAR-specific framework check]`,
        seminarHooks: `[SAR-specific seminar hooks]`
    },
    // ... MSW, EMSO, IA, SSS
};

const MEDIA_PROMPTS = {
    podcast: `[Podcast prompt text]`,
    video: `[Video prompt text]`,
    slides: `[Slides prompt text]`
};
```

---

## Interactive Elements

### Copy Button Behavior
1. On click: Copy prompt text to clipboard
2. Show feedback: Button text changes to "COPIED!", green background
3. After 2 seconds: Revert to original state

```javascript
function copyText(elementId, button) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = 'COPIED!';
        button.style.backgroundColor = '#2ea043';
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
    });
}
```

### Collapsible Sections
- Click header to toggle content visibility
- Arrow indicator: ▼ (collapsed) / ▲ (expanded)
- Smooth transition animation

### Course Selector
- On change: Update all course-specific prompts
- Update status badge text
- Update course name display in descriptions

### Tabs (Media Section)
- Click tab to show corresponding content
- Active tab highlighted with accent color border

---

## Content Sources

Pull prompt content from these markdown files:

| File | Content to Extract |
|------|-------------------|
| `Generic_Batched_Workflow_v2.2.md` | Custom Role, Preliminary, Gutting Batch, Synthesis, Media prompts |
| `SAR_Customizations_v2.2.md` | SAR Custom Role, SAR Framework Check, SAR Seminar Hooks |
| `MSW_Customizations_v2.2.md` | MSW Custom Role, MSW Framework Check |
| `EMSO_Customizations_v2.2.md` | EMSO Custom Role, EMSO Framework Check |
| `IA_Customizations_v2.2.md` | IA Custom Role, IA Framework Check |
| `SSS_Customizations_v2.2.md` | SSS Custom Role, SSS Framework Check |

---

## Removed Features (vs. Gemini Draft)

| Feature | Reason |
|---------|--------|
| Step 0 Calibration | Removed API integration — no external calls |
| Gemini API call | Security concern, unreliable |
| API key input | Not needed |
| "CALIBRATED" badges | Not needed without calibration |

---

## Mobile Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 768px) {
    .container { padding: 15px; }
    .header { flex-direction: column; align-items: flex-start; }
    .course-select { width: 100%; }
}

/* Mobile */
@media (max-width: 480px) {
    h1 { font-size: 1.2rem; }
    .step-number { left: -30px; width: 24px; height: 24px; font-size: 0.8rem; }
    .step-container { padding-left: 15px; }
    .tabs { flex-wrap: wrap; }
    .tab-btn { flex: 1 1 auto; text-align: center; }
}
```

---

## Deployment (Vercel)

### Option A: Static HTML
1. Create single `index.html` with embedded CSS/JS
2. Push to GitHub repo
3. Connect repo to Vercel
4. Deploy (zero config needed)

### Option B: Next.js
1. `npx create-next-app@latest ndu-toolkit`
2. Build components as specified above
3. Push to GitHub
4. Connect to Vercel
5. Deploy (auto-detected as Next.js)

### Vercel Settings
- Framework: Auto-detect (or Static/Next.js)
- Build command: (default)
- Output directory: (default)
- No environment variables needed
- No serverless functions needed

---

## File Checklist for Handoff

Provide to Claude Code / developer:

1. ☐ This specification document
2. ☐ `Generic_Batched_Workflow_v2.2.md` — base prompts
3. ☐ `SAR_Customizations_v2.2.md`
4. ☐ `MSW_Customizations_v2.2.md`
5. ☐ `EMSO_Customizations_v2.2.md`
6. ☐ `IA_Customizations_v2.2.md`
7. ☐ `SSS_Customizations_v2.2.md`
8. ☐ `NotebookLM_Lesson_Prep_Workflow.md` — for About section content
9. ☐ (Optional) Existing HTML from Gemini draft for styling reference

---

## Build Prompt for Claude Code

```
Build a static website for Vercel deployment based on the attached specification.

Requirements:
- No API calls, no backend, purely static
- Single page with course selector dropdown
- Collapsible prompt cards with copy-to-clipboard
- Dark theme with cyan accent (colors in spec)
- Mobile responsive
- Pull all prompt content from the attached markdown files

Tech stack preference: 
- Option 1: Single HTML file with embedded CSS/JS (simplest)
- Option 2: Next.js with TypeScript (if you prefer component structure)

Attached files:
- Website_Specification.md (this document)
- Generic_Batched_Workflow_v2.2.md
- SAR_Customizations_v2.2.md
- MSW_Customizations_v2.2.md
- EMSO_Customizations_v2.2.md
- IA_Customizations_v2.2.md
- SSS_Customizations_v2.2.md
```

---

*v2.2 January 2026*
