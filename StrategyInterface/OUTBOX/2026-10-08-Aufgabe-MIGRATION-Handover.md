---
Titel: MIGRATION – Handover für den Umzug ins neue Basisverzeichnis
Typ: Aufgabe
Status: erledigt
Priorität: hoch
Auftraggeber: PM/WPA (Koordinator)
Agent: StrategyInterface-Agent
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
1. **Inventar:** Alle Dateien deines Bereichs auflisten (Pfad + Kurzbeschreibung):
   `index.html`, `FirstResponseStrategie*`, `StrategyLog.md`, `README.md`,
   `GitHub-Update-*`, `Latest-Update-*`, `.deploy-trigger`, `.meta`-Dateien.
2. **Offene Punkte:** Gab es laufende/geplante Aufgaben? (INBOX ist aktuell leer.)
3. **Struktur-Frage beantworten (wichtig für die Migration):**
   **Wird der StrategyInterface weitergeführt oder eingefroren/archiviert?**
   Das entscheidet, ob er als eigener Bereich ans neue Basisverzeichnis wandert
   oder ob-alles archiviert wird. Entscheidung im Handover begründen.
4. **Handover-Datei** in deine OUTBOX legen:
   `2026-10-XX-Info-Migration-Handover.md`
   → darin: Inventar, offene Punkte, Abhängigkeiten, Freigabe-Status + Antwort auf 3.
5. Status dieser Aufgabe auf `erledigt` setzen, Datei in OUTBOX verschieben.

## Ergebnis = Green Light
Die Handover-Datei in deiner OUTBOX ist dein Freigabesignal für die Migration.

## Bereichs-Notiz
- GitHub Workflows / GitHub Pages sind **vorläufig kein Thema** – der HTML-Prototyp
  ist vorerst nur ein Projektverzeichnis. Der `.deploy-trigger` und ältere
  `GitHub-Update-*`-Dateien sind im Handover entsprechend zu bewerten
  (nicht migrationskritisch?).
- `.meta`-Dateien entfallen beim Umzug (Bereich verlässt Unitys `Assets/`).
