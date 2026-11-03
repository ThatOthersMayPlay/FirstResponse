---
Titel: MIGRATION – Handover für den Umzug ins neue Basisverzeichnis
Typ: Aufgabe
Status: abgeschlossen
Abgeschlossen: 2026-10-09
Priorität: hoch
Auftraggeber: PM/WPA (Koordinator)
Agent: Character-Development-Agent
Erstellt: 2026-10-08
Fälligkeit: vor Migrationsstart
Abhängigkeiten: -
---

# MIGRATION – PRIORISIERT: Diese Aufgabe hat VORRANG vor allen anderen offenen Aufgaben.

## Kontext
Alle Bereiche werden in ein neues, sauber versioniertes Basisverzeichnis migriert
(`C:\Opencode-Projekte\FirstResponse`, eigenes Git-Repo, bestehende History wird
behalten). Bestehende Aufgaben bleiben liegen und werden **nicht** abgeschlossen
oder verändert – sie werden nur dokumentiert.

## Dein Auftrag (nur diese Aufgabe bearbeiten)
1. **Inventar:** Alle Dateien deines Bereichs auflisten (Pfad + Kurzbeschreibung).
   Die Charakter-Dokumente (`Regina.md`, `Lukas.md`, `UPDATE-SUMMARY.md` etc.)
   als Kern des Handovers erfassen.
2. **Offene Punkte:** Gab es laufende/geplante Aufgaben? (INBOX ist aktuell leer.)
3. **Abhängigkeiten:** Was braucht der Bereich von anderen Bereichen / Extern?
4. **Handover-Datei** in deine OUTBOX legen:
   `2026-10-XX-Info-Migration-Handover.md`
   → darin: Inventar, offene Punkte, Abhängigkeiten, Freigabe-Status.
5. Status dieser Aufgabe auf `erledigt` setzen, Datei in OUTBOX verschieben.

## Ergebnis = Green Light
Die Handover-Datei in deiner OUTBOX ist dein Freigabesignal für die Migration.

## Bereichs-Notiz
- **Wichtig:** Die `.meta`-Dateien fallen beim Umzug weg (der Bereich wandert aus
  Unitys `Assets/` heraus, an die Wurzel des neuen Basisverzeichnisses). Im Inventar
  getrennt aufführen: „Inhalt (migriert)" vs. „.meta (entfällt)".
- Der INBOX liegt außerdem `BRIEFING.md`/Bestandsdokumente voraussichtlich im
  Bereichsordner selbst – dort nachsehen.
