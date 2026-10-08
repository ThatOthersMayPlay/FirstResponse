(function () {
    var debugEl = document.getElementById("debug-panel");
    var statusEl = document.getElementById("scene-status");
    var speakerEl = document.getElementById("dialog-speaker");
    var textEl = document.getElementById("dialog-text");
    var choiceEl = document.getElementById("choice-panel");
    var imageEl = document.getElementById("scene-image");

    var story = null;
    var lastScene = null;
    var sceneOptions = null;
    var loadedScene = null;

    function log(level, msg) {
        var line = "[" + level + "] " + msg;
        console.log(line);
        var div = document.createElement("div");
        div.textContent = line;
        if (level.indexOf("WARN") === 0) div.className = "warn";
        if (level.indexOf("FEHLER") === 0) div.className = "error";
        debugEl.appendChild(div);
        debugEl.scrollTop = debugEl.scrollHeight;
    }

    // Warnung nur einmal pro Schluessel (verhindert Log-Spam bei wiederholtem Laden)
    var warnedKeys = {};
    function warnOnce(key, msg) {
        if (warnedKeys[key]) return;
        warnedKeys[key] = true;
        log("WARN", msg);
    }

    // --- Audio-Engine (Aufgabe: Audio-Musik-Klicksound) ---
    // Autoplay-Gating: Browser verbieten Ton ohne vorherige Interaktion,
    // deshalb startet die Musik erst nach dem ersten Klick/Keystroke.
    var AudioEngine = (function () {
        var A = CONFIG.audio || {};
        var supported = typeof Audio !== "undefined";
        var unlocked = false;
        var muted = false;
        var musicVolume = typeof A.musicVolume === "number" ? A.musicVolume : 0.35;
        var clickVolume = typeof A.clickVolume === "number" ? A.clickVolume : 0.8;
        var track = null;
        var lastScene = null;
        var musicEl = null;
        var clickEls = [];
        var clickIdx = 0;
        var clickPlays = 0;

        var statusEl = document.getElementById("audio-status");
        var muteBtn = document.getElementById("audio-mute");
        var volumeEl = document.getElementById("audio-volume");

        function canPlay(mime) {
            try {
                var probe = document.createElement("audio");
                return !!probe.canPlayType && probe.canPlayType(mime) !== "";
            } catch (e) { return false; }
        }

        function pickFile(preferred, fallback) {
            if (canPlay("audio/mpeg")) return preferred;
            if (canPlay('audio/ogg; codecs="vorbis"')) return fallback;
            return preferred;
        }

        function path(file) {
            return (A.dir || "assets/audio/") + file;
        }

        function setStatus(text) {
            if (statusEl) statusEl.textContent = text;
        }

        function applyVolumes() {
            if (musicEl) musicEl.volume = muted ? 0 : musicVolume;
            for (var i = 0; i < clickEls.length; i++) clickEls[i].volume = muted ? 0 : clickVolume;
        }

        function makeElement() {
            var el = new Audio();
            el.preload = "auto";
            el.addEventListener("error", function () {
                var src = el.currentSrc || el.getAttribute("src") || "(unbekannt)";
                warnOnce("audio:" + src,
                    "Audiodatei nicht abspielbar: " + src + " – Datei fehlt oder Format wird nicht unterstuetzt.");
            });
            return el;
        }

        function ensureClickPool() {
            if (clickEls.length > 0 || !supported) return;
            var f = pickFile(A.click, A.clickFallback);
            for (var i = 0; i < 3; i++) {
                var el = makeElement();
                el.src = path(f);
                clickEls.push(el);
            }
            log("Audio", "Klick-Sound bereit ('" + f + "', 3 Kanaele fuer schnelle Folgen)");
        }

        function playMusic() {
            if (!musicEl) return;
            var p = musicEl.play();
            if (p && typeof p.catch === "function") {
                p.catch(function (e) {
                    warnOnce("audio:play",
                        "Musik-Start verhindert: " + (e && e.message ? e.message : "Fehler") + " (Autoplay-Gating?).");
                });
            }
        }

        function unlock() {
            if (unlocked || !supported) return;
            unlocked = true;
            document.removeEventListener("pointerdown", unlock, true);
            document.removeEventListener("keydown", unlock, true);
            ensureClickPool();
            applyVolumes();
            playMusic();
            log("Audio", "Audio freigeschaltet (erste Interaktion) – Musik '" + track + "' laeuft");
            setStatus(muted ? "Audio: stumm" : "Audio: an");
        }

        var api = {
            setScene: function (scene) {
                if (!supported || scene === lastScene) return;
                lastScene = scene;
                var map = A.sceneMusic || {};
                var want = map[scene] || A.music || "atmosphere.mp3";
                var changed = want !== track;
                track = want;
                if (!musicEl) {
                    musicEl = makeElement();
                    musicEl.loop = true;
                }
                if (changed) {
                    musicEl.src = path(want);
                    musicEl.load();
                    applyVolumes();
                    if (unlocked) playMusic();
                }
                log("Audio", "Szene '" + scene + "' -> Musik '" + want + "' " +
                    (changed ? "(gewechselt)" : "(laeuft weiter)"));
            },
            click: function () {
                if (!unlocked || muted || clickEls.length === 0) return;
                var el = clickEls[clickIdx];
                clickIdx = (clickIdx + 1) % clickEls.length;
                try {
                    el.currentTime = 0;
                    var p = el.play();
                    clickPlays++;
                    if (p && typeof p.catch === "function") {
                        p.catch(function (e) {
                            warnOnce("audio:click",
                                "Klick-Sound nicht abspielbar: " + (e && e.message ? e.message : "Fehler"));
                        });
                    }
                } catch (e) {
                    warnOnce("audio:click", "Klick-Sound nicht abspielbar: " + e.message);
                }
            },
            setMuted: function (next) {
                muted = !!next;
                applyVolumes();
                if (muteBtn) {
                    muteBtn.textContent = muted ? "Ton: aus" : "Ton: an";
                    muteBtn.setAttribute("aria-pressed", muted ? "true" : "false");
                }
                setStatus(muted ? "Audio: stumm"
                    : (unlocked ? "Audio: an" : "Audio: gesperrt (startet nach erster Interaktion)"));
                log("Audio", muted ? "Stummgeschaltet" : "Ton eingeschaltet");
            },
            isMuted: function () { return muted; },
            setVolume: function (v) {
                musicVolume = Math.max(0, Math.min(1, v));
                applyVolumes();
                log("Audio", "Lautstaerke Musik: " + Math.round(musicVolume * 100) + "%");
            },
            volume: function () { return musicVolume; },
            isUnlocked: function () { return unlocked; },
            clicksPlayed: function () { return clickPlays; },
            musicState: function () {
                if (!musicEl) return null;
                return {
                    src: musicEl.getAttribute("src"),
                    paused: musicEl.paused,
                    volume: musicEl.volume,
                    loop: musicEl.loop
                };
            },
            init: function () {
                if (!supported) {
                    setStatus("Audio: nicht verfuegbar");
                    log("WARN", "Keine Audio-API im Browser – Audio-Engine deaktiviert.");
                    return;
                }
                if (volumeEl) {
                    volumeEl.value = String(Math.round(musicVolume * 100));
                    volumeEl.addEventListener("input", function () {
                        api.setVolume(Number(volumeEl.value) / 100);
                    });
                }
                if (muteBtn) {
                    muteBtn.addEventListener("click", function () { api.setMuted(!muted); });
                }
                // Autoplay-Gating: erst Interaktion -> dann Ton
                document.addEventListener("pointerdown", unlock, true);
                document.addEventListener("keydown", unlock, true);
                log("Audio", "Audio-Engine bereit (Start nach erster Interaktion), Format: " +
                    pickFile(A.click || "click.mp3", A.clickFallback));
            }
        };
        return api;
    })();

    function drainText() {
        var out = "";
        while (story.canContinue) out += story.Continue();
        return out;
    }

    // --- Story-State-Tracking (Parität zu Unity Sprint-1/2 Debug-System) ---
    // Unity: [Story-State] <var>: <old> → <new>
    //        [Story-State] Time: HH:mm:ss.fff
    function varSnapshot() {
        var snap = {};
        if (!story) return snap;
        try {
            Object.getOwnPropertyNames(story.variablesState).forEach(function (k) {
                if (k === "$") return;
                var v = story.variablesState[k];
                if (typeof v !== "function") snap[k] = v;
            });
        } catch (e) { /* Variablen nicht lesbar – Snapshot bleibt leer */ }
        return snap;
    }

    function fmtValue(v) {
        if (typeof v === "string") return v === "" ? '(leer "" )' : v;
        if (v === null || v === undefined) return String(v);
        return String(v);
    }

    function clockTime() {
        var d = new Date();
        function p(n, l) { n = String(n); while (n.length < l) n = "0" + n; return n; }
        return p(d.getHours(), 2) + ":" + p(d.getMinutes(), 2) + ":" + p(d.getSeconds(), 2) + "." + p(d.getMilliseconds(), 3);
    }

    function logStoryStateChanges(before, after) {
        var changed = [];
        Object.keys(after).forEach(function (k) {
            var b = before[k];
            var a = after[k];
            if (JSON.stringify(b) !== JSON.stringify(a)) changed.push(k);
        });
        if (changed.length === 0) return;
        changed.forEach(function (k) {
            log("Story-State", k + ": " + fmtValue(before[k]) + " → " + fmtValue(after[k]));
        });
        log("Story-State", "Time: " + clockTime());
    }

    function currentScene() {
        // Szenen-Variable aus der Story lesen (Knoten = Szene).
        // inkjs currentPathString ist an Choice-Punkten null, der Pfad
        // liefert den aktuellen Knoten also nicht zuverlaessig.
        var s = null;
        try { s = story.variablesState["scene"]; } catch (e) { s = null; }
        if (typeof s === "string" && s.length > 0) return s;
        // Unbekannter Knoten: keine lesbare Szenen-Variable -> Fallback + klare Meldung
        var p = story.state.currentPathString || "";
        var k = p.split(".")[0];
        var fallback = k || lastScene || CONFIG.scenes.startScene;
        warnOnce("scene-var",
            "Unbekannter Knoten: Szenen-Variable 'scene' fehlt oder ist leer – Fallback auf '" +
            fallback + "'. Bitte VAR scene im betreffenden Ink-Knoten setzen.");
        return fallback;
    }

    function parseDialog(raw) {
        var lines = raw.split("\n").filter(function (l) { return l.trim().length > 0; });
        var turns = [];
        var current = null;
        lines.forEach(function (l) {
            var m = l.match(/^([^:]+):\s*(.*)$/);
            if (m) {
                current = { speaker: m[1].trim(), text: m[2].trim() };
                turns.push(current);
            } else if (current) {
                // Zeile ohne Sprecher-Kennung: Fortsetzung des letzten Sprechers
                current.text += "\n" + l.trim();
            } else {
                current = { speaker: "Erzähler", text: l.trim() };
                turns.push(current);
            }
        });
        return turns;
    }

    function renderDialog(raw) {
        var turns = parseDialog(raw);
        if (turns.length === 0) {
            speakerEl.textContent = "";
            textEl.textContent = "";
            return;
        }
        // Mehrere Speaker pro Ausgabe: jede Redezeile mit Sprecher-Label ausgeben.
        var distinct = {};
        turns.forEach(function (t) { distinct[t.speaker] = true; });
        var multi = Object.keys(distinct).length > 1;
        speakerEl.textContent = turns[0].speaker;
        textEl.textContent = turns.map(function (t) {
            if (!multi || t.speaker === "Erzähler") return t.text;
            return t.speaker + ": " + t.text;
        }).join("\n");
    }

    function sceneImage(scene) {
        if (sceneOptions && loadedScene === scene && sceneOptions.image) {
            return sceneOptions.image;
        }
        return CONFIG.scenes.dir + scene + ".png";
    }

    function updateScene(scene) {
        if (scene !== lastScene) {
            log("Scene", "Wechsel zu Szene '" + scene + "' (harter Wechsel)");
            lastScene = scene;
        }
        statusEl.textContent = "Szene: " + scene;
        var src = sceneImage(scene);
        imageEl.onload = function () {
            imageEl.classList.add("loaded");
            imageEl.onerror = null;
        };
        imageEl.onerror = function () {
            imageEl.classList.remove("loaded");
            // Klare Meldung statt Absturz: Bildasset fehlt (siehe Info-StableDiffusion)
            warnOnce("img:" + src,
                "Szenen-Bild nicht gefunden: " + src + " – Szenenfläche bleibt Platzhalter (Bildasset ausstehend).");
        };
        imageEl.src = src;
        AudioEngine.setScene(scene);
    }

    function choiceLabel(text) {
        if (sceneOptions && loadedScene === currentScene()) {
            var opts = sceneOptions.options || [];
            for (var i = 0; i < opts.length; i++) {
                if (opts[i].inkChoice === text) return opts[i].label || text;
            }
        }
        return text;
    }

    function renderChoices() {
        choiceEl.innerHTML = "";
        var choices = story.currentChoices || [];
        if (choices.length > 0) {
            log("Choice", choices.length + " Option(en): " + choices.map(function (c) { return choiceLabel(c.text); }).join(" | "));
            choices.forEach(function (c, i) {
                var btn = document.createElement("button");
                btn.className = "choice";
                btn.type = "button";
                btn.textContent = choiceLabel(c.text);
                btn.addEventListener("click", function () {
                    choose(i);
                });
                choiceEl.appendChild(btn);
            });
        }
    }

    function validateOptions(data) {
        var errors = [];
        if (!data || typeof data !== "object") {
            errors.push("kein Objekt");
            return errors;
        }
        if (typeof data.scene !== "string") errors.push("scene fehlt (String)");
        if (data.image !== undefined && typeof data.image !== "string") errors.push("image muss String sein");
        if (data.options !== undefined) {
            if (!Array.isArray(data.options)) {
                errors.push("options muss Array sein");
            } else {
                data.options.forEach(function (o, i) {
                    if (!o || typeof o !== "object") { errors.push("options[" + i + "] kein Objekt"); return; }
                    if (typeof o.id !== "string") errors.push("options[" + i + "].id fehlt (String)");
                    if (typeof o.label !== "string") errors.push("options[" + i + "].label fehlt (String)");
                    if (typeof o.inkChoice !== "string") errors.push("options[" + i + "].inkChoice fehlt (String)");
                    if (o.spot !== undefined) {
                        var s = o.spot;
                        if (!s || typeof s !== "object") { errors.push("options[" + i + "].spot kein Objekt"); return; }
                        ["x", "y", "width", "height"].forEach(function (k) {
                            if (typeof s[k] !== "number") errors.push("options[" + i + "].spot." + k + " muss Zahl sein");
                        });
                        if (s.type && s.type !== "image_text" && s.type !== "outline") {
                            errors.push("options[" + i + "].spot.type ungültig (image_text|outline)");
                        }
                    }
                });
            }
        }
        return errors;
    }

    async function loadSceneOptions(scene) {
        loadedScene = scene;
        try {
            var res = await fetch(CONFIG.hotspots.dir + scene + ".json");
            if (!res.ok) throw new Error("HTTP " + res.status);
            var data = await res.json();
            var errors = validateOptions(data);
            if (errors.length > 0) {
                log("FEHLER", "options.json ungültig (" + scene + "): " + errors.join("; "));
                sceneOptions = null;
            } else {
                sceneOptions = data;
                log("Choice", "options.json geladen für Szene '" + scene + "' (" + (data.options || []).length + " Option(en))");
                var geo = (data.options || []).filter(function (o) { return o.spot; });
                if (geo.length > 0) {
                    log("WARN", "Geometrie-Hotspots (" + geo.length + ") werden im Basis-Level nicht gerendert – optionale Erweiterung.");
                }
            }
        } catch (e) {
            sceneOptions = null;
            log("WARN", "Keine options.json für Szene '" + scene + "' (" + e.message + ") – Fallback auf story.currentChoices.");
        }
        renderChoices();
        updateScene(scene);
    }

    function continueStory() {
        var before = varSnapshot();
        var raw = drainText();
        if (raw.trim().length > 0) {
            var parts = raw.split("\n");
            log("Story-State", "Text ausgegeben: " + parts[0] + (parts.length > 1 ? " (+" + (parts.length - 1) + " Zeilen)" : ""));
            renderDialog(raw);
        } else {
            renderDialog("");
        }
        // Story-State-Änderungen nach dem Draining protokollieren (Unity-Format)
        logStoryStateChanges(before, varSnapshot());
        renderChoices();
        // Szene NACH drainText lesen: die Szenen-Variable wird erst beim
        // Betreten des Knotens gesetzt (nach dem Draining ist sie aktuell).
        var scene = currentScene();
        updateScene(scene);
        if (loadedScene !== scene) {
            loadSceneOptions(scene);
        }
    }

    function choose(index) {
        var c = (story.currentChoices || [])[index];
        AudioEngine.click();
        // Präfix [Choice] laut Aufgabenvorgabe, Inhalt analog Unity "[Decision] Choice: <name>"
        log("Choice", "Choice: " + (c ? c.text : "?") + " (Index " + index + ")");
        story.ChooseChoiceIndex(index);
        continueStory();
    }

    var FALLBACK_STORY = [
        'VAR stefania_trust = 0',
        'VAR player_perspective = ""',
        '',
        '-> intro',
        '',
        '=== intro',
        'Regina: "Stefania, bleiben Sie bei der Person!"',
        'Stefania: "Ich... ich kann nicht. Die Polizei kommt!"',
        '',
        '+ Gefährderin -> regina_warnt_polizei',
        '    ~ stefania_trust -= 1',
        '    ~ player_perspective = "Regina hat Stefania verraten, Konsequenzen absehbar"',
        '+ Beruhigen -> regina_beruhigt_stefania',
        '    ~ stefania_trust += 1',
        '    ~ player_perspective = "Regina beruhigt Stefania, Vertrauen steigt"',
        '',
        '=== regina_warnt_polizei',
        'Regina: (funk) "Achtung, Person könnte gewaltbereit sein."',
        '',
        '-> DONE',
        '',
        '=== regina_beruhigt_stefania',
        'Regina: "Alles ist gut. Kein Grund zur Panik."',
        '',
        '-> DONE',
        ''
    ].join("\n");

    async function boot() {
        log("Story-State", "Prototyp startet (config.js geladen)");
        var src;
        try {
            var res = await fetch(CONFIG.story.path);
            if (!res.ok) throw new Error("HTTP " + res.status);
            src = await res.text();
            log("Story-State", "Story geladen: " + CONFIG.story.path);
        } catch (e) {
            log("WARN", "fetch fehlgeschlagen (" + e.message + ") – Fallback-Teststory aktiv (file://-Modus). Für die echte Story per lokalem Server öffnen.");
            src = FALLBACK_STORY;
        }
        try {
            story = new inkjs.Compiler(src).Compile();
            log("Story-State", "inkjs kompiliert (ink-full.min.js, Version 2.4.0)");
        } catch (e) {
            log("FEHLER", "Kompilierung fehlgeschlagen: " + e.message);
            return;
        }
        story.ChoosePathString(CONFIG.story.startKnot);
        log("Story-State", "Start-Knoten: " + CONFIG.story.startKnot);
        continueStory();
    }

    AudioEngine.init();
    // Debug-/Test-Zugang (wird von der CDP-Verifikation genutzt)
    window.AudioEngine = AudioEngine;
    boot();
})();