(function () {
    // --- Gedanken-/Agenda-Leiste (Testversion) ---
    // Liest nur, keine Story-Logik. Testdaten, Format als Vorschlag.
    // Farben: Strategie=Hellblau, Akut=Hell-Violett, Beziehung=Hell-Grün, Routine=Grau.

    var AGENDA_COLORS = {
        strategie: "#63b3ed",
        akut: "#b794f4",
        beziehung: "#68d391",
        routine: "#a0aec0"
    };

    var MAX_VISIBLE = 3;
    var AUTO_CLOSE_MS = 5000;

    var thoughts = []; // { agenda, text, detail, due (0..1) }
    var expandedIndex = -1;
    var autoCloseTimer = null;

    var barEl = document.getElementById("thought-bar");
    var listEl = document.getElementById("thought-list");

    function colorFor(agenda) {
        return AGENDA_COLORS[agenda] || "#a0aec0";
    }

    function truncate(text, max) {
        if (!text) return "";
        if (text.length <= max) return text;
        return text.slice(0, max - 1) + "…";
    }

    function render() {
        if (!listEl) return;
        listEl.innerHTML = "";
        // Zeige max MAX_VISIBLE, neueste oben; älteste verschwindet.
        var visible = thoughts.slice(-MAX_VISIBLE);
        var offset = thoughts.length - visible.length; // Index-Offset in thoughts[]
        visible.forEach(function (t, i) {
            var realIndex = offset + i;
            var isOld = (i < visible.length - 1) && (thoughts.length > MAX_VISIBLE);
            var isExpanded = (expandedIndex === realIndex);

            var item = document.createElement("div");
            item.className = "thought-item" + (isOld ? " thought-old" : "") + (isExpanded ? " thought-expanded" : "");
            item.style.borderLeftColor = colorFor(t.agenda);

            var line = document.createElement("div");
            line.className = "thought-line";
            line.textContent = truncate(t.text, 48);
            line.title = t.text;
            line.addEventListener("click", function (e) {
                e.stopPropagation();
                toggleExpand(realIndex);
            });
            item.appendChild(line);

            var due = document.createElement("div");
            due.className = "thought-due";
            due.style.width = Math.max(0, Math.min(100, (t.due || 0) * 100)) + "%";
            due.style.backgroundColor = colorFor(t.agenda);
            item.appendChild(due);

            if (isExpanded) {
                var detail = document.createElement("div");
                detail.className = "thought-detail";
                detail.textContent = t.detail || "";
                item.appendChild(detail);
            }

            listEl.appendChild(item);
        });
    }

    function toggleExpand(index) {
        if (expandedIndex === index) {
            expandedIndex = -1;
            clearTimeout(autoCloseTimer);
            autoCloseTimer = null;
            render();
            return;
        }
        expandedIndex = index;
        clearTimeout(autoCloseTimer);
        autoCloseTimer = setTimeout(function () {
            expandedIndex = -1;
            autoCloseTimer = null;
            render();
        }, AUTO_CLOSE_MS);
        render();
    }

    function closeExpanded() {
        if (expandedIndex !== -1) {
            expandedIndex = -1;
            clearTimeout(autoCloseTimer);
            autoCloseTimer = null;
            render();
        }
    }

    // Schließen bei anderer Aktivität
    document.addEventListener("pointerdown", function (e) {
        if (!e.target || !e.target.closest || !e.target.closest("#thought-list")) {
            closeExpanded();
        }
    }, true);

    function addThought(thought) {
        if (!thought || !thought.text) return;
        thoughts.push({
            agenda: thought.agenda || "routine",
            text: thought.text,
            detail: thought.detail || "",
            due: (typeof thought.due === "number") ? thought.due : 1.0
        });
        render();
        logGedanken("Gedanke hinzugefuegt: " + thought.text + " (" + thought.agenda + ")");
    }

    function removeOldest() {
        if (thoughts.length > 0) {
            thoughts.shift();
            if (expandedIndex >= 0) expandedIndex = Math.max(-1, expandedIndex - 1);
            render();
        }
    }

    function clear() {
        thoughts = [];
        expandedIndex = -1;
        clearTimeout(autoCloseTimer);
        autoCloseTimer = null;
        render();
    }

    function count() { return thoughts.length; }

    function logGedanken(msg) {
        if (typeof log === "function") {
            try { log("Gedanke", msg); } catch (e) { /* log nicht verfuegbar */ }
        } else {
            console.log("[Gedanke] " + msg);
        }
    }

    // Testdaten (Vorschlag, Format als Vorschlag)
    var TEST_THOUGHTS = [
        { agenda: "akut", text: "Kontakt halten", detail: "Stefania ist die einzige Informationsquelle. Die Verbindung muss stabil bleiben.", due: 0.8 },
        { agenda: "strategie", text: "Lage ordnen", detail: "Unfallort, Brücke, Tunnel – was ist bekannt, was unklar?", due: 0.6 },
        { agenda: "beziehung", text: "Stefania beruhigen", detail: "Sie will fliehen. Vertrauen aufbauen, ohne zu lügen.", due: 0.9 },
        { agenda: "routine", text: "Ball flach halten", detail: "Keine Eskalation. Ruhig bleiben, Protokoll folgen.", due: 0.4 },
        { agenda: "akut", text: "Zeitdruck Brücke", detail: "Einsturzgefahr. Jede Minute zählt für die Rettung.", due: 0.7 }
    ];

    // Öffentliche API
    window.GedankenEngine = {
        add: addThought,
        removeOldest: removeOldest,
        clear: clear,
        count: count,
        render: render,
        testThoughts: TEST_THOUGHTS
    };

    // Auto-Init nach DOM-Ready
    function init() {
        if (!barEl || !listEl) {
            console.warn("Gedanken-Leiste: DOM-Elemente nicht gefunden.");
            return;
        }
        var addBtn = document.getElementById("thought-add");
        var clearBtn = document.getElementById("thought-clear");
        var statusEl = document.getElementById("thought-status");
        var idx = 1;
        if (addBtn) {
            addBtn.addEventListener("click", function () {
                if (idx < TEST_THOUGHTS.length) {
                    addThought(TEST_THOUGHTS[idx]);
                    idx++;
                } else {
                    // Zyklisch: von vorne
                    idx = 0;
                    addThought(TEST_THOUGHTS[idx]);
                    idx = 1;
                }
                if (statusEl) statusEl.textContent = count() + " Gedanke(n)";
            });
        }
        if (clearBtn) {
            clearBtn.addEventListener("click", function () {
                clear();
                idx = 1;
                if (statusEl) statusEl.textContent = "0 Gedanken";
            });
        }
        // Test: ersten Gedanken laden
        addThought(TEST_THOUGHTS[0]);
        if (statusEl) statusEl.textContent = count() + " Gedanke(n)";
        logGedanken("Testversion geladen (" + TEST_THOUGHTS.length + " Testgedanken verfügbar)");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();