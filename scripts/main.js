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
            var expanded = this.classList.toggle("expanded");
            content.classList.toggle("expanded");
            this.setAttribute("aria-expanded", expanded ? "true" : "false");
        });
    });

    // ─── Prompt Minimize Toggle ───────────────────────────────────
    document.querySelectorAll(".prompt-minimize-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var bodyId = this.getAttribute("data-target-body");
            var body = document.getElementById(bodyId);
            if (!body) return;
            if (body.classList.contains("minimized")) {
                body.classList.remove("minimized");
                this.textContent = "MINIMIZE";
            } else {
                body.classList.add("minimized");
                this.textContent = "EXPAND";
            }
        });
    });

    // ─── Floating Nav Scroll Tracking ────────────────────────────
    var floatingNavItems = document.querySelectorAll(".floating-nav-item");
    if (floatingNavItems.length > 0) {
        var sectionIds = [];
        floatingNavItems.forEach(function (item) {
            var href = item.getAttribute("href");
            if (href && href.charAt(0) === "#") {
                sectionIds.push(href.substring(1));
            }
        });

        function updateActiveNav() {
            var activeId = sectionIds[0];
            sectionIds.forEach(function (id) {
                var el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 120) {
                    activeId = id;
                }
            });
            floatingNavItems.forEach(function (item) {
                var href = item.getAttribute("href");
                if (href === "#" + activeId) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
        }

        window.addEventListener("scroll", updateActiveNav, { passive: true });
        updateActiveNav();

        // On click: expand target collapsible section if collapsed
        floatingNavItems.forEach(function (item) {
            item.addEventListener("click", function () {
                var href = this.getAttribute("href");
                if (!href || href.charAt(0) !== "#") return;
                var targetEl = document.getElementById(href.substring(1));
                if (!targetEl) return;
                var header = targetEl.querySelector(".collapsible-header");
                var content = targetEl.querySelector(".collapsible-content");
                if (header && content && !header.classList.contains("expanded")) {
                    header.classList.add("expanded");
                    header.setAttribute("aria-expanded", "true");
                    content.classList.add("expanded");
                }
            });
        });
    }

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
