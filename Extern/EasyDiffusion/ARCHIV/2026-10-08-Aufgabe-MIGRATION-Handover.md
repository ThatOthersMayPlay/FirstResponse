---
Titel: MIGRATION – Handover für den Umzug ins neue Basisverzeichnis
Typ: Aufgabe
Status: abgeschlossen
Abgeschlossen: 2026-10-09
Abgeschlossen: 2026-10-09
Priorität: hoch
Auftraggeber: PM/WPA (Koordinator)
Agent: EasyDiffusion-Stakeholder (Tool-Entwicklung)
Erstellt: 2026-10-08
Fälligkeit: vor Migrationsstart
Abhängigkeiten: -
---

# MIGRATION – PRIORISIERT: Diese Aufgabe hat VORRANG vor allen anderen offenen Aufgaben.

## Kontext
Das Projekt „First Response" migriert in ein neues, sauber versioniertes
Basisverzeichnis (`C:\Opencode-Projekte\FirstResponse`). Der Stakeholder
`Extern/EasyDiffusion/` ist der Kanal für die **Tool-Entwicklung** – das Tool
selbst (`C:\EasyDiffusion`) bleibt extern und wandert **nicht** mit.

## Dein Auftrag (nur diese Aufgabe bearbeiten)
1. **Entwicklungsstand dokumentieren** in `STATUS.md` dieses Stakeholders:
   aktueller Stand des Tools, bekannte Fehler/offene Punkte, geplante nächste Schritte.
2. **API-Erreichbarkeit** prüfen: `GET http://localhost:9000`
   - erreichbar → in `STATUS.md` vermerken (Server lauffähig)
   - nicht erreichbar → ebenfalls vermerken („Server muss gestartet werden"),
     **nicht** selbst starten.
3. **Handover-Datei** in deine OUTBOX legen:
   `2026-10-XX-Info-Migration-Handover.md`
   → darin: Tool-Status, API-Status, offene Punkte, Freigabe-Status.
4. Status dieser Aufgabe auf `erledigt` setzen, Datei in OUTBOX verschieben.

## Ergebnis = Green Light
Die Handover-Datei in deiner OUTBOX ist das Freigabesignal des Stakeholders
für die Migration. (Das Projekt migriert auch ohne den Stakeholder – hier geht es
nur darum, den Tool-Stand vor dem Umzug festzuhalten.)

## Bereichs-Notiz
- Es gibt **keine laufenden Bildaufträge** – der Handover ist kurz.
- Das Tool selbst muss für die Migration **nicht** angefasst werden.
