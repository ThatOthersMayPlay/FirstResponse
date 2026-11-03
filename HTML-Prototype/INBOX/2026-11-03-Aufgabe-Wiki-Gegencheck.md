---
Titel: Wiki-Gegencheck – festgelegte Punkte und Falschinfos melden
Typ: Aufgabe
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: HTML-Prototyp-Agent
Erstellt: 2026-11-03
Fälligkeit: 2026-11-10
Abhängigkeiten: ProjectManagement/Wiki/ (README.md, Ink-Variablen.md, Szenen-Index.md, Begriffe.md, Festlegungen-Log.md)
---

## Ziel

Gegencheck gegen das Wiki aus Sicht der technischen Umsetzung (Ink-Variablen, Szenen-Konvention, Pfade, Begriffe).

## Umfang

1. **Fehlende Festlegungen:** Prüfe deine Dokumente (HTML-Ink-Schnittstelle, Antwort-Entscheidungen, Hotspot- und Szenen-Dokumentation, `config.js`) auf Festlegungen, die bereits getroffen und belegbar sind, aber im Wiki fehlen. Nenne je Punkt: Inhalt, Quelle (Datei und Abschnitt), Vorschlag für den Wiki-Eintrag.
2. **Falschinfos:** Prüfe die Wiki-Einträge `Ink-Variablen.md`, `Szenen-Index.md`, `Begriffe.md` und `Festlegungen-Log.md` auf Widersprüche zu deinen Quellen. Achte besonders auf Variablen, Szenennamen und Pfade. Nenne je Punkt: Wiki-Stelle, was dort steht, was deine Quelle sagt.
3. **Keine Annahmen:** Nur belegte Festlegungen melden.

## Regeln

- **Nichts im Wiki ändern.** Das Wiki ist nur lesbar; Änderungen macht der Koordinator.
- Ergebnis als Review-Bericht in deiner OUTBOX (`HTML-Prototype/OUTBOX/2026-11-03-Review-Wiki-Gegencheck.md`), Status `erledigt`.
- Wenn du eine Änderung außerhalb deines Ordners für nötig hältst, legst du dafür eine Aufgabe in `ProjectManagement/INBOX/` an. Ohne Genehmigung keine Änderung.

## Ergebnis (Definition of Done)

- [ ] Fehlende Festlegungen mit Quelle aufgelistet (oder „keine" vermerkt)
- [ ] Falschinfos im Wiki mit Gegenbeleg aufgelistet (oder „keine" vermerkt)
- [ ] Review-Bericht in der OUTBOX, Status `erledigt`
