---
Titel: SD-Szenen-Prompts für Szene 1 „Unfall-Schock & Führung"
Typ: Aufgabe
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: Story-Development-Agent
Erstellt: 2026-10-09
Fälligkeit: 2026-10-23
Abhängigkeiten: Szenen-Konzept Szene 1; Bildererzeugung/BRIEFING.md; Asset-Generierung-StableDiffusion.md
---

## Kontext

Aus der Koordinator-Antwort R2 (`HTML-Prototype/INBOX/2026-10-09-Entscheidung-Koordinator-Antwort-R1-R9.md`):
Die Szenen-Bilder für den HTML-Prototyp werden über die lokale Stable-Diffusion-API
(Easy Diffusion) erzeugt. Die **Prompts kommen aus dem Szenen-Konzept des
Story-Development-Agenten** – ausdrücklich **„nicht improvisieren"**.
Diese Aufgabe liefert die Prompts.

## Ziel

Für Szene 1 (Intro / Hauptteil / Outro) die **SD-Prompts** als Textbausteine
erstellen, aus denen der Bildererzeugungs-Agent die Szenen-PNGs generieren kann.

## Umfang

1. Szenen-Konzept Szene 1 sichten und die benötigten **Szenen-Bilder** festlegen
   (Intro, Hauptteil, Outro – bei Bedarf weitere Szenenwechsel).
2. Je Bild einen **Prompt** liefern (positiv) sowie – falls nötig – Negative-Prompt
   und ein konsistentes Stil-Setting (Epoche, Licht, Perspektive, Bildaufbau).
3. Ablage: in einem Story-Development-Dokument
   (`Story-Development/Szene-1-.../SD-Prompts.md` o. ä.) **und** als Auftrag an die
   Bildererzeugung melden.

## Ergebnis (Definition of Done)

- [ ] Liste der benötigten Szene-1-Bilder (Dateinamen passend zu `scenes/<name>.png`)
- [ ] Prompt + ggf. Negative-Prompt je Bild
- [ ] Einheitlicher Stil definiert (Kohärenz über alle Bilder)
- [ ] Ergebnis im Aufgaben-Text dokumentiert
- [ ] Status `erledigt`, Datei in `Story-Development/OUTBOX/`

## Hinweise

- SD-API: Easy Diffusion, `http://localhost:9000`, `POST /render` (Legacy-Feldnamen),
  Bild via `GET /image/stream/{task_id}` – Details in
  `ProjectManagement/Asset-Generierung-StableDiffusion.md`.
- Kein Story-Text nötig – es geht ausschließlich um **Bild-Prompts**.
- Szenen-Images sind für den HTML-Prototyp und Unity gleichermaßen nutzbar.
