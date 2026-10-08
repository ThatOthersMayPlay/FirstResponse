// Automatische Verifikation des Setup-Grundgerüsts (Aufgabe 1).
// Prüft: inkjs-Full-Build, Kompilierung einer .ink-Story, Choices (mehrere parallel),
// Variablen-Änderung, State-Serialisierung und config.js.
// Ausführen: node js/verify.js  → Exit-Code 0 = alle Checks bestanden.
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const inkjs = require(path.join(__dirname, "ink-full.min.js"));

let passed = 0;
let failed = 0;

function check(name, ok, detail) {
    const prefix = ok ? "PASS" : "FAIL";
    console.log(`[${prefix}] ${name}${detail ? " -> " + detail : ""}`);
    ok ? passed++ : failed++;
}

// --- Test-Story (repräsentativ für Szene 1: Variablen + mehrere Options-Choices) ---
const TEST_STORY = `
VAR stefania_trust = 0

=== Szene1_Intro ===
Ruhige Leitstelle. Du hoerst Stefania ueber Funk.
-> Szene1_Wahl

=== Szene1_Wahl ===
Was tust du?

* [Polizei warnen]
    ~ stefania_trust += 1
    Die Zentrale wird alarmiert.
    -> Szene1_Hauptteil

* [Stefania beruhigen]
    ~ stefania_trust += 2
    Du sprichst ruhig mit Stefania.
    -> Szene1_Hauptteil

=== Szene1_Hauptteil ===
Einsatz laeuft. Vertrauen: {stefania_trust}
-> END
`;

function drainText(story) {
    let text = "";
    while (story.canContinue) {
        text += story.Continue();
    }
    return text;
}

console.log("=== Verifikation HTML-Prototype Setup ===");

// T1: Bibliothek geladen (Full-Build)
check("inkjs-Bibliothek geladen (Compiler + Story)", !!(inkjs.Compiler && inkjs.Story));

// T2: .ink-Quelle wird kompiliert
let story;
try {
    story = new inkjs.Compiler(TEST_STORY).Compile();
    check("Kompilierung der .ink-Quelle", story && typeof story.Continue === "function");
} catch (e) {
    check("Kompilierung der .ink-Quelle", false, e.message);
}

if (story) {
    // T3: Dialogzeile via Continue()
    story.ChoosePathString("Szene1_Intro");
    const intro = drainText(story);
    check("Continue() liefert Dialogtext", intro.includes("Leitstelle"), JSON.stringify(intro.trim()));

    // T4: Mehrere Choices parallel (Basis-Level des Options-Systems)
    const choices = story.currentChoices;
    check("Mehrere Choices parallel (2)", Array.isArray(choices) && choices.length === 2,
        choices.map((c) => c.text).join(" | "));

    // T5: Wahl 0 -> Variable stefania_trust +1
    story.ChooseChoiceIndex(0);
    const t1 = drainText(story);
    check("Wahl 0: Story-Pfad korrekt", t1.includes("alarmiert"));
    check("Wahl 0: stefania_trust == 1", story.variablesState["stefania_trust"] === 1,
        "trust=" + story.variablesState["stefania_trust"]);

    // T6: Zweiter Pfad (frische Story) -> Variable +2
    const story2 = new inkjs.Compiler(TEST_STORY).Compile();
    story2.ChoosePathString("Szene1_Wahl");
    drainText(story2); // erst Continue() bis zur Choice-Position
    check("Wahl 1: 2 Choices verfügbar", story2.currentChoices.length === 2,
        story2.currentChoices.map((c) => c.text).join(" | "));
    story2.ChooseChoiceIndex(1);
    const savedState = story2.state.ToJson(); // Save vor Konsum der Verzweigung
    drainText(story2);
    check("Wahl 1: stefania_trust == 2", story2.variablesState["stefania_trust"] === 2,
        "trust=" + story2.variablesState["stefania_trust"]);

    // T7: State-Serialisierung JSON -> Restore (Basis localStorage-Persistenz)
    const restored = new inkjs.Compiler(TEST_STORY).Compile();
    restored.state.LoadJson(savedState);
    const t2 = drainText(restored);
    const restoredOk = t2.includes("Vertrauen: 2") && restored.variablesState["stefania_trust"] === 2;
    check("State-Serialisierung/Restore", restoredOk, JSON.stringify(t2.trim()));
}

// T8: config.js lädt und definiert Start-Szene + Start-Knoten
try {
    const configSrc = fs.readFileSync(path.join(ROOT, "config.js"), "utf8");
    const CONFIG = new Function(configSrc + "; return CONFIG;")();
    const cfgOk = CONFIG &&
        CONFIG.story && CONFIG.story.path && CONFIG.story.startKnot &&
        CONFIG.scenes && CONFIG.scenes.startScene &&
        CONFIG.hotspots && CONFIG.hotspots.dir &&
        CONFIG.audio && CONFIG.audio.dir;
    check("config.js gültig (Pfade, Start-Szene, Start-Knoten)", !!cfgOk,
        JSON.stringify({ startKnot: CONFIG && CONFIG.story && CONFIG.story.startKnot,
                         startScene: CONFIG && CONFIG.scenes && CONFIG.scenes.startScene }));
} catch (e) {
    check("config.js gültig", false, e.message);
}

// T9: definierte Ordnerstruktur vorhanden
const dirs = ["scenes", "hotspots", "assets/audio", "js"];
const dirOk = dirs.every((d) => fs.existsSync(path.join(ROOT, d)));
check("Ordnerstruktur vollständig (" + dirs.join(", ") + ")", dirOk);

// T10: echte Test-Story aus unity/Assets/Story/ laden und Integrations-Eigenschaften pruefen
const REAL_STORY = path.join(path.resolve(ROOT, ".."), "unity", "Assets", "Story", "Test-Dialog.ink");
try {
    const realSrc = fs.readFileSync(REAL_STORY, "utf8");
    const real = new inkjs.Compiler(realSrc).Compile();
    check("Test-Dialog.ink kompiliert", !!real, path.relative(ROOT, REAL_STORY));

    const bootText = drainText(real);
    check("Szenen-Variable an Choice-Punkt lesbar (== intro)",
        real.variablesState["scene"] === "intro",
        "scene=" + real.variablesState["scene"]);

    check("Mehrere Choices pro Szene (3)", real.currentChoices.length === 3,
        real.currentChoices.map((c) => c.text).join(" | "));

    const echo = real.currentChoices.some((c) => bootText.includes(c.text));
    check("Kein Choice-Echo im Ausgabe-Stream (kein Speaker-Bug)", !echo);

    const multiSpeaker = bootText.split("\n").filter((l) => l.includes(":")).length >= 2;
    check("Mehrere Speaker pro Ausgabe (Regina + Stefania)", multiSpeaker);

    // Wahl 0 -> Szenenwechsel + Variablen-Logik (Divert NACH den ~-Zeilen)
    real.ChooseChoiceIndex(0);
    drainText(real);
    check("Nach Wahl: Szenen-Variable wechselt (intro -> polizei_warnt)",
        real.variablesState["scene"] === "polizei_warnt",
        "scene=" + real.variablesState["scene"]);
    check("Nach Wahl: stefania_trust == -1 (toter-Code-Bug behoben)",
        real.variablesState["stefania_trust"] === -1,
        "trust=" + real.variablesState["stefania_trust"]);
    check("Nach Wahl: player_perspective gesetzt",
        typeof real.variablesState["player_perspective"] === "string" &&
        real.variablesState["player_perspective"].length > 0,
        JSON.stringify(real.variablesState["player_perspective"]));
} catch (e) {
    check("Test-Dialog.ink laden", false, e.message);
}

console.log(`\nErgebnis: ${passed} bestanden, ${failed} fehlgeschlagen`);
process.exit(failed > 0 ? 1 : 0);