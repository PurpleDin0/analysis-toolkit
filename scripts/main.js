// NDU Analyst Toolkit — Main Script v2.2

document.addEventListener("DOMContentLoaded", function () {
    let currentCourse = "GENERIC";

    // ─── DOM References ──────────────────────────────────────────
    const courseSelect = document.getElementById("course-select");
    const statusBadge = document.getElementById("status-badge");
    const rolePromptText = document.getElementById("prompt-role");
    const synthesisPromptText = document.getElementById("prompt-synthesis");

    // ─── Course Switching (toolkit page only) ────────────────────
    if (courseSelect) {
        courseSelect.addEventListener("change", function () {
            currentCourse = this.value;
            updateCourseContent();
        });
    }

    function updateCourseContent() {
        if (!statusBadge || !rolePromptText || !synthesisPromptText) return;
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
    document.querySelectorAll(".tab-btn").forEach(function (tabBtn) {
        tabBtn.addEventListener("click", function () {
            var tabGroup = this.closest(".media-section");
            var targetTab = this.getAttribute("data-tab");

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

    // ─── Initialize (toolkit page only) ─────────────────────────
    if (courseSelect) {
        updateCourseContent();
    }
});
