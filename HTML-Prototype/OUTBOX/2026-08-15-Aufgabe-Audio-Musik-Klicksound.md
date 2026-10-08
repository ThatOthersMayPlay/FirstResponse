---
Titel: Audio: Hintergrundmusik + Klick-Sound
Typ: Aufgabe
Status: erledigt
Priorität: mittel
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-08-15
Fälligkeit: 2026-08-29
Erledigt: 2026-10-08
Abhängigkeiten: Canvas-Basistemplate; MP3-/OGG-Encoder (winget `Gyan.FFmpeg` 9.0.2, installiert 2026-10-08)
---

## Ziel
Grundlegendes Audio-Feeling für den HTML-Prototyp: leise Hintergrundmusik (atmosphärisch) und ein kurzer Klick-Sound bei Auswahl/Interaktion.

## Umfang – umgesetzt
- [x] **Hintergrundmusik:** eine Atmosphäre-Spur (`atmosphere.mp3`, 16 s nahtloser Loop, leise gemastert ~ -21 LUFS), läuft beim Szenenstart nach erster Interaktion und bleibt beim Szenenwechsel aktiv
- [x] **Klick-Sound:** kurzer Effekt (`click.mp3`, 0,08 s) bei jeder Option/Auswahl (3-Kanal-Pool für schnelle Folgen)
- [x] **Audio-Dateien lokal in `assets/audio/`** – `atmosphere.mp3`/`.ogg`, `click.mp3`/`.ogg` (keine CDN)
- [x] **Bedienelemente:** Stummschalter (Mute) + Lautstärke-Regler in neuer `#audio-bar`
- [x] **Autoplay-Behandlung:** Browser-Autoplay-Gating – Ton startet nach der **ersten Spieler-Interaktion** (pointerdown/keydown)
- [x] **Audio-Ordner** `assets/audio/` sichergestellt (`.gitkeep` + 4 Dateien)

## Ergebnis (Definition of Done)
- [x] Hintergrundmusik läuft atmosphärisch beim Spielstart (nach erster Interaktion)
- [x] Klick-Sound ertönt bei jeder Option/Auswahl
- [x] Musik wechselt bei Szenenwechsel korrekt (Szenen-Mapping via `CONFIG.audio.sceneMusic`; aktuell eine Spur → "läuft weiter")
- [x] Mute-Schalter funktioniert
- [x] Keine CDN-Abhängigkeit, Dateien liegen lokal

---

## Blockade aufgelöst (2026-10-08)

**Status: `erledigt`.** Die Blockade B2a/B2b (kein MP3-/OGG-Encoder) ist behoben:

| Kürzel | Blockade | Auflösung |
|---|---|---|
| B2a | `ffmpeg`/`lame`/`sox` fehlen | **Encoder bereitgestellt laut Koordinator-Entscheidung:** `winget install Gyan.FFmpeg` (Version 9.0.2, Full-Build mit `libmp3lame` + `libvorbis`) |
| B2b | „Encoder bereitstellen" + „Erst auf Entscheidung warten" | Encoder ist da → Audio-Dateien erzeugt, Audio-Engine gebaut, Umfang + DoD **in einem Rutsch abgeschlossen** |

B3 der Aufgabe `Beispielszene-Szene1` (Audio-Assets fehlen) ist damit ebenfalls entfallen:
`assets/audio/` ist jetzt gefüllt.

---

## Verifikation (2026-10-08)

### `node js/verify.js` → **24/24 PASS, Exit 0**
19 bestehende Checks + 5 neue Audio-Checks:
1. Audio-Dateien vorhanden (MP3 + OGG, nicht leer)
2. Container gültig (Header `ID3`/mp3, `OggS`/ogg)
3. `config.audio` vollständig + CDN-frei
4. Audio-Controls in `index.html`
5. Audio-Engine in `main.js` (Autoplay-Gating, Klick-/Szenen-Hook)

### Headless-Browser (Edge/CDP) → **19/19 PASS, 0 JS-Konsolenfehler**
- **Autoplay-Gating:** Vor Interaktion Status „Audio: gesperrt", Musik pausiert → nach echter Mouse-Eingabe: `unlocked`, Status „Audio: an", Musik `paused=false` (Quelle `atmosphere.mp3`, loop, Vol. 0,35)
- **Szenenwechsel:** Wahl auf erster Option (→ `polizei_warnt`) – Musik hält: `Szene 'polizei_warnt' -> Musik 'atmosphere.mp3' (laeuft weiter)`
- **Klick-Sound:** Zähler ≥ 1 nach Auswahl (`AudioEngine.clicksPlayed()`)
- **Mute:** Button „Ton: aus", `aria-pressed=true`, Musik-Volumen 0, Status „Audio: stumm"; Unmute → Volumen 0,35
- **Lautstärke-Regler:** Slider 50 % → Musik-Volumen ≈ 0,5

---

## Geänderte/neue Dateien

| Datei | Änderung |
|---|---|
| `assets/audio/atmosphere.mp3` / `.ogg` | **neu** (16 s Atmosphäre-Loop, ffmpeg-Synthese: 55/110/165-Hz-Drones + gefiltertes Rauschen, nahtlos) |
| `assets/audio/click.mp3` / `.ogg` | **neu** (0,08 s Klick: Blip + Lowpass-Rauschen) |
| `js/main.js` | Audio-Engine `AudioEngine` (Autoplay-Gating, Mute, Volume, `sceneMusic`-Map, Klick-Pool, Debug-Zugang `window.AudioEngine`) |
| `index.html` | `#audio-bar` mit `#audio-mute`, `#audio-volume`, `#audio-status` + CSS (bestehender Stil, Hover-/Fokus-Regeln ergänzt) |
| `config.js` | `audio`-Block: Fallback-Formate (`*.ogg`), `musicVolume` 0.35, `clickVolume` 0.8, `sceneMusic` |
| `js/verify.js` | +5 Audio-Checks (Dateien, Container, config, UI, Engine) |

---

*Verfasst: 2026-10-08 · HTML-Prototyp-Agent · Encoder-Freigabe laut
`2026-10-08-Entscheidung-Offene-Punkte-Rueckmeldung.md` (B2/R9, Koordinator-Entscheidung „Encoder bereitstellen")*