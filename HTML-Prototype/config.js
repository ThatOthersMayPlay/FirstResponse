// Basis-Konfiguration für den HTML-Point&Click-Prototyp "First Response"
// Verbindliche Schnittstelle: ProjectManagement/HTML-Ink-Schnittstelle.md
// Alle Pfade sind relativ zu HTML-Prototype/ (Root des Prototyps).

var CONFIG = {
    version: "0.1.0",

    // --- Ink-Story (Single Source of Truth) ---
    // Die Story liegt in unity/Assets/Story/*.ink und wird von inkjs direkt im Browser kompiliert.
    story: {
        // Pfad zur Ink-Datei relativ zu HTML-Prototype/
        // Test-Story für die Integration (saubere Ink-Struktur, Szenen-Variable "scene").
        // ReginaStefania.ink bleibt unangetastet, ist aber NICHT spielbar (toter Code).
        path: "../unity/Assets/Story/Test-Dialog.ink",
        // Start-Knoten (Knoten = Szene), in dem die Story beginnt.
        startKnot: "intro"
    },

    // --- Szenen ---
    scenes: {
        // Ordner für Szenen-Hintergrundbilder (PNG)
        dir: "scenes/",
        // Start-Szene (muss zum Start-Knoten passen)
        startScene: "intro"
    },

    // --- Optionen / Hotspots ---
    hotspots: {
        // Ordner für die Options-Definitionen
        dir: "hotspots/",
        // Pro Szene eine Datei: hotspots/<Szene>.json (siehe hotspots/README.md)
        sceneOptionsFile: "<scene>.json"
    },

    // --- Audio (lokal, keine CDN) ---
    audio: {
        dir: "assets/audio/",
        // Atmosphäre-Spur (Default: leise)
        music: "atmosphere.mp3",
        // Klick-Sound bei jeder Option/Auswahl
        click: "click.mp3",
        // Format-Fallback, falls der Browser MP3 nicht abspielt
        musicFallback: "atmosphere.ogg",
        clickFallback: "click.ogg",
        // Default-Lautstärken (0..1); Musik bewusst leise
        musicVolume: 0.35,
        clickVolume: 0.8,
        // Musik je Szene (optional): { "<szene>": "<datei>" }
        // Nicht gepflegte Szenen nutzen `music`.
        sceneMusic: {}
    }
};