---
Titel: MIGRATION – Handover für den Umzug ins neue Basisverzeichnis
Typ: Aufgabe
Status: erledigt
Priorität: hoch
Auftraggeber: PM/WPA (Koordinator)
Agent: Story-Development-Agent
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
   **Wichtig:** Der Bereich existiert an ZWEI Stellen – beide erfassen:
   - `Assets/ProjectManagement/Story-Development/` (Workflow: INBOX/OUTBOX/ARCHIV, BRIEFING)
   - `Assets/Story-Development/` (Inhalte: Szenen-Konzepte, Dialog-Optionen, README etc.,
     außerhalb von ProjectManagement, enthält Unity-`.meta`-Dateien)
2. **Offene Punkte:** Status jeder offenen INBOX-Aufgabe (was läuft, was blockiert?).
3. **Abhängigkeiten:** Was braucht der Bereich von anderen Bereichen / Extern?
4. **Handover-Datei** in deine OUTBOX legen:
   `2026-10-XX-Info-Migration-Handover.md`
   → darin: Inventar, offene Punkte, Abhängigkeiten, Freigabe-Status.
5. Status dieser Aufgabe auf `erledigt` setzen, Datei in OUTBOX verschieben.

## Ergebnis = Green Light
Die Handover-Datei in deiner OUTBOX ist dein Freigabesignal für die Migration.

## Bereichs-Notiz
- Die offenen Aufgaben (`Szene1-Ziele-Rahmenbedingungen`, `Info-StableDiffusion-Prompts`)
  bleiben unverändert in der INBOX liegen und werden im Handover als „offen" vermerkt.
- Die beiden OUTBOX-Infos (`Gameplay-Hinweis-Tunnel-Dunkelheit`,
  `Mechanik-Delegation-Fokuswechsel-Lukas`) bleiben unverändert liegen.
- Aha-Effekt-Delegation an Spielmechanik: als Abhängigkeit im Handover aufführen
  (Story-Konzept hängt an den Mechanik-Vorgaben).
