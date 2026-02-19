// NDU Analyst Toolkit — Main Script v2.2

document.addEventListener("DOMContentLoaded", function () {
    let currentCourse = "GENERIC";

    // ─── DOM References ──────────────────────────────────────────
    const courseSelect = document.getElementById("course-select");
    const statusBadge = document.getElementById("status-badge");
    const rolePromptText = document.getElementById("prompt-role");
    const synthesisPromptText = document.getElementById("prompt-synthesis");

    // ─── Course Switching ────────────────────────────────────────
    courseSelect.addEventListener("change", function () {
        currentCourse = this.value;
        updateCourseContent();
    });

    function updateCourseContent() {
        // Update status badge
        statusBadge.textContent = "SYSTEM: " + currentCourse + " PROTOCOL";

        // Update Custom Role prompt
        rolePromptText.textContent = CUSTOM_ROLES[currentCourse];

        // Update Synthesis prompt (assembled dynamically)
        synthesisPromptText.textContent = buildSynthesisPrompt(currentCourse);
    }

    // ─── Copy to Clipboard ───────────────────────────────────────
    document.querySelectorAll(".copy-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var targetId = this.getAttribute("data-target");
            var targetEl = document.getElementById(targetId);
            if (!targetEl) return;

            var text = targetEl.textContent;
            navigator.clipboard.writeText(text).then(function () {
                btn.textContent = "COPIED!";
                btn.classList.add("copied");
                setTimeout(function () {
                    btn.textContent = "COPY";
                    btn.classList.remove("copied");
                }, 2000);
            }).catch(function () {
                // Fallback for older browsers
                var textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed";
                textarea.style.opacity = "0";
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
                btn.textContent = "COPIED!";
                btn.classList.add("copied");
                setTimeout(function () {
                    btn.textContent = "COPY";
                    btn.classList.remove("copied");
                }, 2000);
            });
        });
    });

    // ─── Collapsible Sections ────────────────────────────────────
    document.querySelectorAll(".collapsible-header").forEach(function (header) {
        header.addEventListener("click", function () {
            var content = this.nextElementSibling;
            this.classList.toggle("expanded");
            content.classList.toggle("expanded");
        });
    });

    // ─── Media Tabs ──────────────────────────────────────────────
    var VALID_TABS = ["podcast", "video", "slides"];
    document.querySelectorAll(".tab-btn").forEach(function (tabBtn) {
        tabBtn.addEventListener("click", function () {
            var tabGroup = this.closest(".media-section");
            var targetTab = this.getAttribute("data-tab");
            if (VALID_TABS.indexOf(targetTab) === -1) return;

            // Deactivate all tabs in group
            tabGroup.querySelectorAll(".tab-btn").forEach(function (t) {
                t.classList.remove("active");
            });
            tabGroup.querySelectorAll(".tab-content").forEach(function (c) {
                c.classList.remove("active");
            });

            // Activate selected tab
            this.classList.add("active");
            tabGroup.querySelector('[data-tab-content="' + targetTab + '"]').classList.add("active");
        });
    });

    // ─── Populate Shared Prompts ───────────────────────────────────
    document.getElementById("prompt-preliminary").textContent = PRELIMINARY_PROMPT;
    document.getElementById("prompt-gutting").textContent = GUTTING_PROMPT;
    document.getElementById("prompt-podcast").textContent = MEDIA_PROMPTS.podcast;
    document.getElementById("prompt-video").textContent = MEDIA_PROMPTS.video;
    document.getElementById("prompt-slides").textContent = MEDIA_PROMPTS.slides;

    // ─── Initialize ──────────────────────────────────────────────
    updateCourseContent();
});
