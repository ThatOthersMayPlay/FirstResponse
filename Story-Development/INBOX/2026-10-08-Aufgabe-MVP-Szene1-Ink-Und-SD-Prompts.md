---
Titel: MVP-Szene 1 („Unfall-Schock & Führung") – echte Ink-Datei + SD-Szenen-Prompts liefern
Typ: Aufgabe
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: Story-Development-Agent
Erstellt: 2026-10-08
Fälligkeit: 2026-10-15
Abhängigkeiten: Szenen-Konzept.md; Info-StableDiffusion-Prompts.md; Asset-Generierung-StableDiffusion.md; HTML-Ink-Schnittstelle.md §3.4
---

## Zweck

Rückfragen **R1** und **R2** der HTML-Prototyp-Rückmeldung
(`HTML-Prototype/OUTBOX/2026-10-08-Entscheidung-Offene-Punkte-Rueckmeldung.md`)
sind damit an die Story-Seite delegiert. Der HTML-Prototyp arbeitet derzeit auf
`Test-Dialog.ink` (freigegebenes Scaffolding) und **blockiert bis zur Lieferung
dieser Aufgabe**.

## Umfang

1. **Echte MVP-Story-Datei für Szene 1** „Unfall-Schock & Führung" (Regina)
   als spielbare Ink-Datei, Ablage:
   `unity/Assets/Story/<Name>.ink` (Single Source of Truth, wie gehabt).
   - Muss ohne toten Code spielbar sein (kein `+ Choice -> divert`, das
     `~`-Zeilen überspringt – Lessons learned aus `ReginaStefania.ink`).
   - **Szenen-Konvention nach `HTML-Ink-Schnittstelle.md` §3.4:** jeder
     Knoten setzt zuerst `~ scene = "…"`.
2. **SD-Szenen-Prompts** für die Teile Intro / Hauptteil / Outro der Szene 1
   aus dem Szenen-Konzept – verbindlich, **nicht improvisieren**
   (`Info-StableDiffusion-Prompts.md`). Ablage: in diese Aufgabe als
   Abschnitt „SD-Prompts" einfügen (damit der HTML-Prototyp sie direkt
   übernehmen kann).
3. **Choice-Labels** mitliefern (Identifier, auf die `options.json`
   `inkChoice` verweist).

## Ergebnis (Definition of Done)

- [ ] Ink-Datei liegt in `unity/Assets/Story/` und kompiliert fehlerfrei
- [ ] `~ scene = "…"` je Knoten gesetzt
- [ ] Spielbar bis zum Szene-1-Abschluss (toter Code ausgeschlossen)
- [ ] SD-Prompts für Intro/Hauptteil/Outro in dieser Datei dokumentiert
- [ ] Choice-Labels identisch zu den in `options.json` geplanten Verweisen

## Nach Lieferung (Koordinator)

- `HTML-Prototype/INBOX/2026-08-15-Aufgabe-Beispielszene-Szene1.md` wird
  entblockiert, Story-Verweis von `Test-Dialog.ink` auf die echte Datei
  umgestellt.
- Freigabe an den HTML-Prototyp-Agenten über die INBOX desselben Bereichs.
