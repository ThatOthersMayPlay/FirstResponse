---
Titel: Audio: Hintergrundmusik + Klick-Sound
Typ: Aufgabe
Status: blockiert
Priorität: mittel
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-08-15
Fälligkeit: 2026-08-29
Blockiert seit: 2026-10-08
Abhängigkeiten: Canvas-Basistemplate; MP3-/OGG-Encoder (fehlt derzeit)
---

## Ziel
Grundlegendes Audio-Feeling für den HTML-Prototyp: leise Hintergrundmusik (atmosphärisch) und ein kurzer Klick-Sound bei Auswahl/Interaktion.

## Umfang
- Hintergrundmusik: eine Atmosphäre-Spur, leise (Default-Lautstärke), läuft beim Szenenstart, stoppt/wechselt beim Szenenwechsel
- Klick-Sound: kurzer Effekt bei jeder Option/Interaktion
- Audio-Dateien als MP3/OGG lokal in `assets/audio/` ablegen (keine CDN)
- Bedienelemente: Stummschalter (Mute) + Lautstärke-Regler (optional, aber empfohlen)
- Autoplay-Behandlung: Browser blockiert Autoplay → Start des Sounds nach erster Spieler-Interaktion
- Audio-Ordner im Setup-Grundgerüst (`assets/audio/`) sicherstellen

## Ergebnis (Definition of Done)
- [ ] Hintergrundmusik läuft atmosphärisch beim Spielstart (nach erster Interaktion)
- [ ] Klick-Sound ertönt bei jeder Option/Auswahl
- [ ] Musik wechselt bei Szenenwechsel korrekt
- [ ] Mute-Schalter funktioniert
- [ ] Keine CDN-Abhängigkeit, Dateien liegen lokal

## Koordinator-Hinweis (2026-08-17)
- **Startbar:** Diese Aufgabe ist **storyunabhängig** – kann parallel zur Mechanik-/Story-Klärung laufen.
- Basis: `index.html` (Canvas-Basistemplate, abgeschlossen) + `assets/audio/` (Setup-Grundgerüst, abgeschlossen) sind vorhanden.
---

## BLOCKIERT – Abwartet auf Encoder (2026-10-08)

**Status: `blockiert`** (wartet auf Input des Koordinators, Agenten-Workflow.md 5.3).
Datei bleibt in der INBOX.

### Geprueft am 2026-10-08
- `assets/audio/` vorhanden, **0 Dateien** (Setup-Grundgeruest erfuellt Vorgabe).
- Umfang verlangt **MP3/OGG lokal, keine CDN**.
- Auf dem System kein Encoder vorhanden:
  `ffmpeg`, `lame`, `sox`, `avconv` – alle fehlen.
- Browser-Kodierung in Edge/Chromium (via `MediaRecorder.isTypeSupported`, geprueft):
  `audio/ogg;codecs=vorbis` = nein, `audio/ogg` = nein, `audio/mpeg` = nein,
  `audio/mp3` = nein, `audio/wav` = nein, **nur `audio/webm;codecs=opus` = ja**.
  Ein Browser-Pfad wuerde die MP3/OGG-Vorgabe also ebenfalls NICHT erfuellen.

### Entscheidung (Koordinator, 2026-10-08)
> **„Encoder bereitstellen"** – es wird kein Format-Kompromiss (WAV/WebM)
> gewaehlt. Sobald ein MP3-/OGG-Encoder verfuegbar ist, werden die Dateien
> erzeugt und die Aufgabe ohne Abweichung abgeschlossen.

Zweite Entscheidung desselben Tages: **„Erst auf Entscheidung warten"** –
die Audio-Engine (Autoplay-Gating nach erster Spieler-Interaktion,
Mute-Schalter, Lautstaecke-Regler, Musikwechsel beim Szenenwechsel,
Klick-Sound-Hook) wird **noch nicht** gebaut, sondern erst nach dem Encoder.

### Benoetigter Input
1. Encoder verfuegbar machen (z. B. `ffmpeg` oder `lame`) **oder**
2. Freigabe, einen solchen zu installieren.

Danach: Synthese von Klick-Sound + Atmosphaere-Spur, Ablage als MP3 **und**
ggf. OGG in `assets/audio/`, danach Umfang + DoD in einem Rutsch.
