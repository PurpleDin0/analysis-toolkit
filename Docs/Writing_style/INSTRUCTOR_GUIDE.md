# Instructor Guide: Writing Style Builder

## What This Tool Does

The Writing Style Builder is a prompt file that students upload to an AI chat tool (Claude, ChatGPT, Gemini) along with samples of their own writing. The AI asks them questions, analyzes their samples, and produces a personalized style guide they can reuse in future AI-assisted writing.

Students receive five deliverables: a style analysis, a reusable prompt template, a profile configuration for Claude.ai, a test sample demonstrating their voice, and a usage guide.

## The Core Concept: AI Contamination Prevention

This is the insight that makes the assignment work, and the concept students will resist the most.

When a student provides clean, authentic writing samples and asks an AI to "write in my style," the AI correctly identifies the student's patterns but then injects its own default habits into the output. The result sounds like the student plus AI contamination. Em dashes appear where the student never used them. "Pivotal" and "transformative" replace the student's plain language. Trailing participles ("highlighting the need for," "reflecting the importance of") attach themselves to sentences the student would have ended cleanly.

This happens because AI models develop default writing tendencies from training data. A style guide that only tells the AI what TO do leaves gaps. The AI fills those gaps with its own patterns. The fix is explicit negative constraints: a "Do Not Use" list that bans specific AI patterns from the output. The student prompt includes a comprehensive default ban list. During the build process, the AI checks whether the student's writing actually uses any banned patterns and asks before keeping or removing them.

The critical framing for students: this is not about detecting AI in their writing. It is about preventing AI from contaminating their voice when it writes for them. Students who understand this distinction engage with the assignment differently. Those who do not understand it will treat negative constraints as optional and produce generic results.

## Package Contents

The package has three student-facing documents:

**STUDENT_PROMPT.md** is the prompt file students upload to start the process. It contains the AI's instructions, the question sequence, the analysis process, the default ban list, and the deliverable specifications. Students do not need to edit this file. They upload it and follow the AI's lead.

**STUDENT_HANDOUT.md** is a quick reference guide. It explains what the assignment is, how to choose writing samples, the step-by-step process, the contamination concept in plain language, and troubleshooting tips. Distribute this alongside the prompt file.

**AI_CONTAMINATION_EXPLAINER.md** is a standalone teaching document that explains the contamination phenomenon in depth with before/after examples. Use it as pre-reading, a class discussion starter, or a reference when students ask "why do I need negative constraints?"

## How to Assign This

**Option 1: Standalone Assignment.** "Create a custom writing style guide based on your own writing. Use the Writing Style Builder prompt to analyze 3-5 of your best papers (2,000-5,000 words total). Submit your style guide and a 500-word test sample."

**Option 2: Integration with a Major Paper.** "Before starting your thesis, capstone, or major paper, create a writing style guide. Use it to maintain consistency throughout the project. Submit your style guide with your first draft."

**Option 3: Workshop Format.** Week 1: students build style guides individually. Week 2: peer review, exchanging test samples to see if they sound authentic. Week 3: refinement based on feedback. Week 4: students apply their style guides to a writing assignment.

**Option 4: Professional Development.** "Create a style guide that captures your professional voice for memos, reports, and briefings. This becomes a career tool, not just a class assignment."

## Student Instructions (What to Tell Them)

1. Download STUDENT_PROMPT.md and gather 3-5 of your best writing samples (2,000-5,000 words total).
2. Open Claude.ai (or ChatGPT, Gemini, etc.) and upload the prompt file along with your writing samples.
3. Answer the AI's questions about your writing preferences.
4. Review the test sample. If it doesn't sound like you, tell the AI what's wrong and iterate.
5. Submit your completed style guide, a 500-word test sample, and a one-paragraph reflection on what you learned about your writing.

Budget 30-45 minutes for initial creation, plus 15-30 minutes for testing and refinement.

## Suggested Grading Rubric

**Style Guide Completeness (40%).** Includes all five deliverables. Rules are specific and actionable, not generic. Evidence is drawn from actual writing samples. Negative constraints are explicit and comprehensive.

**Test Sample Quality (30%).** Demonstrates the student's authentic voice. Follows the style guide's rules. Avoids AI writing patterns. Appropriate for the intended audience and context.

**Metacognitive Awareness (20%).** Student can articulate their writing patterns in concrete terms. Shows understanding of style choices and their effects. Recognizes AI patterns to avoid. Demonstrates critical thinking about voice.

**Practical Usability (10%).** Style guide is actually usable in future writing tasks. Prompt template is properly formatted and self-contained. Documentation is clear.

## Common Student Questions

**"How many writing samples do I need?"** Minimum 3 samples, 2,000-5,000 words total. More is better. Choose work that represents authentic voice, not idealized performance.

**"What if my writing isn't consistent across samples?"** This is worth exploring with the AI. The student may need multiple style configs for different contexts (academic, professional, creative), or may have a flexible core style.

**"Should I fix errors in my samples before uploading?"** Fix obvious typos. Do not change actual writing patterns. The AI needs authentic data.

**"I don't have AI patterns in my writing. Why do I need negative constraints?"** This is the critical misconception to address. Even if the student's writing is clean, the AI will inject its own patterns when writing in their style. The negative constraints prevent contamination of their voice, not detection of AI in their writing. Use the AI Contamination Explainer to demonstrate this.

**"Can I update my style guide later?"** Yes. Writing evolves. Revisit and refine as needed.

**"Will this make all my writing sound the same?"** No. A good style guide preserves core voice while adapting to context. Students can tell the AI to adjust tone for different audiences while maintaining foundational patterns.

## Teaching Tips

**Before the assignment:** Show students the contamination concept using the AI Contamination Explainer. A live demonstration is effective: take a clean writing sample, ask an AI to write "in that style" without constraints, and show the class what the AI injects. Then show the constrained version. The before/after contrast makes the concept concrete.

**During the process:** Push back if students produce generic rules ("be clear and concise" applies to everyone). Challenge them to identify what makes their writing specifically theirs. Help them see patterns they may not consciously recognize.

**After completion:** Have students exchange test samples. Can peers identify whose voice is whose? Discuss what students learned about their own writing. Share interesting patterns students discovered.

**Common pitfalls to watch for:** Generic rules that apply to anyone. Style guides that are too prescriptive to be usable. Students who skip the iteration step. Students who cherry-pick only "perfect" samples instead of representative work. Students who treat negative constraints as optional.

## Advanced Variations

**For upper-level students:** "Compare your undergraduate writing to your current writing. Create two style guides and analyze how your voice has evolved."

**For graduate students:** "Create separate style guides for different professional contexts: academic papers, policy memos, public-facing writing. What stays constant? What changes?"

**For writing-intensive programs:** "Build your style guide in Week 1. Submit monthly reflections on how you're refining it. Final portfolio includes the evolution of your style guide across the semester."

**For capstone projects:** "Your style guide becomes part of your final deliverable. Show how you maintained voice consistency across the project."

## Integration with AI Literacy Curriculum

This assignment pairs with discussions on: when AI assistance is appropriate vs. inappropriate, how to use AI tools without compromising authorship, how to maintain professional voice while using AI, and how to evaluate AI-generated text against personal standards. The assignment teaches students that AI tools have inherent biases, that good inputs do not guarantee good outputs, and that tools require active management through explicit constraints and iterative testing.

## Ethical Considerations

Be clear with students: they own their style guides. This is about understanding their voice, not creating a writing robot. AI assistance is not AI authorship. Style guides are tools for consistency, not replacements for thinking. The goal is enhanced human writing, not perfect AI imitation.

Discuss where the line falls between style maintenance and content generation, how much AI assistance crosses into ghost-writing, and how professionals use similar tools in practice.

## Success Metrics

The assignment works when students can articulate their own writing patterns in concrete terms, test samples sound authentically like the student, students avoid generic AI writing patterns, style guides are actually used in future assignments, and writing quality improves while voice remains authentic.

## Troubleshooting

**"My style guide is too complicated to use."** Simplify to 5-7 core rules. Details can come later.

**"The test sample doesn't sound like me."** Expected, especially on the first try. Iterate. This is a feature of the process, not a failure.

**"I don't have enough writing samples."** Use what they have (minimum 2,000 words). Update the style guide as they produce more writing.

**"The AI keeps using banned patterns."** Make negative constraints more explicit. Add the specific phrases that keep appearing.

**"Different samples show different styles."** Explore whether the student needs multiple style configs or a more flexible core system. This is pedagogically valuable data about the student's writing.

---

**Questions?** Contact [your contact info] or share experiences with other instructors using this assignment.

**Version:** 2.0
**Last updated:** [Date]
