---
Titel: Wiki-Gegencheck – Bildgenerierung (Figuren/Setting/Szenen)
Typ: Review
Status: erledigt
Priorität: mittel
Auftraggeber: Koordinator
Agent: Bildererzeugungs-Agent
Erstellt: 2026-11-03
Fälligkeit: 2026-11-10
Abhängigkeiten: ProjectManagement/Wiki/ (Figuren.md, Setting.md, Szenen-Index.md)
---

# Wiki-Gegencheck – Bildgenerierung

Geprüft aus Sicht der Bildgenerierung (Asset-Generierung-StableDiffusion.md, BRIEFING.md, Story-Development/ARCHIV/Info-StableDiffusion-Prompts.md, HTML-Prototype/ARCHIV/Info-StableDiffusion-Bilder.md). Keine Änderungen am Wiki vorgenommen.

## 1. Fehlende Festlegungen (belegbar)

**Keine belegten figuren-/setting-/szenenbezogenen Festlegungen gefunden, die im Wiki fehlen und aus dem Bereich der Bildgenerierung stammen.**

- Der Bereich Bildgenerierung dokumentiert ausschließlich Tool-/API-/Prozessfestlegungen (Easy Diffusion, Port 9000, Legacy-Feldnamen, Modellpfad-Schutz, Standard-Parameter, Ablage-Konventionen). Diese betreffen keine Figuren, Settings oder Szenen und sind daher wiki-irrelevant.
- Eine einzige figurenbezogene Erwähnung existiert als **illustratives Prompt-Beispiel** in `Asset-Generierung-StableDiffusion.md` §3.1: „Leitstelle bei Nacht, Notruf-Disponentin Regina an der Konsole, kühles blaues Licht, filmisch, 16:9". Dies ist ein Beispiel-Prompt, keine Festlegung von Setting oder Charakter-Erscheinung → **nicht als Festlegung gemeldet**, nur zur Kenntnis. Falls der Koordinator dieses Beispiel als visuelle Konvention festschreiben will, wäre ein Wiki-Eintrag unter Setting.md „Leitstelle (Regina)" denkbar (Quelle: Asset-Generierung-StableDiffusion.md §3.1).

## 2. Falschinfos im Wiki

**Keine Widersprüche gefunden.**

- `Figuren.md`: Regina als „Leitstellendisponentin" stimmt mit `Character-Development/Character-Overview.md` („Regina | 28 | Leitstellendisponentin") überein.
- `Figuren.md`: Jonas als „Nebenfigur", Sohn von Lukas, stimmt mit `Character-Development/Jonas-15-Jahre.md` überein.
- `Setting.md`: „Leitstelle (Regina)" als Ort ist konsistent; keine widersprüchlichen Angaben aus dem Bildgenerierungsbereich.
- `Szenen-Index.md`: Szene 1 Verweis auf `Story-Development/INBOX/2026-10-08-Aufgabe-MVP-Szene1-Ink-Und-SD-Prompts.md` ist plausibel; SD-Prompts als „—" (offen) ist konsistent mit der offenen Aufgabe `2026-10-09-Aufgabe-SD-Szenen-Prompts-Szene1.md`.

## 3. Hinweis (nicht inhaltlich)

- Die Wiki-Dateien enthalten Zeichenkodierungs-Artefakte („�?") in mehreren Zellen (z. B. Alter/Stand-Spalten, Setting.md, Szenen-Index.md). Inhaltlich nicht bewertbar; Vorschlag: Dateien als UTF-8 speichern. Kein Änderungsantrag gestellt (Wiki nur lesbar).
- `Figuren.md` listet für Milon keinen Eintrag „LKW-Fahrer, 50" mit polnischen Wurzeln – das ist im Character-Development belegt (`Character-Overview.md`), liegt aber außerhalb meines Bereichs (Character-Development) und wird hier nicht als eigene Festlegung gemeldet; ggf. Character-Development-Agent ansprechen.

## Fazit

Kein Handlungsbedarf aus Sicht der Bildgenerierung. Keine Aufgabe in `ProjectManagement/INBOX/` angelegt.

*Erledigt: 2026-11-03 – Bildererzeugungs-Agent*
