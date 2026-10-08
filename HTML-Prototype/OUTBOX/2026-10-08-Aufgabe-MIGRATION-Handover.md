---
Titel: MIGRATION – Handover für den Umzug ins neue Basisverzeichnis
Typ: Aufgabe
Status: erledigt
Priorität: hoch
Auftraggeber: PM/WPA (Koordinator)
Agent: HTML-Prototyp-Agent
Erstellt: 2026-10-08
Erledigt: 2026-10-08
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
   Wichtig: Der eigentliche Prototyp-Code liegt unter `Assets/HTML-Prototype/`
   (außerhalb von ProjectManagement) – diesen ebenfalls erfassen:
   `index.html`, `js/` (ink-full.min.js, main.js, verify.js, README.md), `config.js`,
   `scenes/`, `hotspots/`, `assets/audio/`.
2. **Offene Punkte:** Status jeder offenen INBOX-Aufgabe (was läuft, was blockiert?).
3. **Abhängigkeiten:** Was braucht der Bereich von anderen Bereichen / Extern?
4. **Handover-Datei** in deine OUTBOX legen:
   `2026-10-XX-Info-Migration-Handover.md`
   → darin: Inventar, offene Punkte, Abhängigkeiten, Freigabe-Status.
5. Status dieser Aufgabe auf `erledigt` setzen, Datei in OUTBOX verschieben.

## Ergebnis = Green Light
Die Handover-Datei in deiner OUTBOX ist dein Freigabesignal für die Migration.

## Bereichs-Notiz
- Die offene Rückmeldung `2026-10-08-Entscheidung-Offene-Punkte-Rueckmeldung.md`
  in deiner OUTBOX bleibt **unverändert offen** – sie wird vom Koordinator nach
  der Migration bearbeitet. Nur im Handover als „offene Koordinator-Rückfrage" vermerken.
- Die Aufgabe `GitHub-Pages-Deployment` ist **optional/später** – im Handover
  entsprechend als nicht migrationskritisch markieren.
- Alle anderen offenen Aufgaben (Audio, Beispielszene, StableDiffusion-Bilder)
  bleiben unverändert in der INBOX liegen.

---

## Ergebnis (2026-10-08)

**Handover-Datei liegt in der OUTBOX (das ist das Green-Light-Signal):**
`OUTBOX/2026-10-08-Info-Migration-Handover.md`

Alle 5 Aufträge aus diesem Dokument erfuellt:

1. **Inventar** – beide Standorte erfasst:
   `ProjectManagement/HTML-Prototype/` (12 Dateien) und
   `Assets/HTML-Prototype/` (12 Dateien + 2 leere Ordner), jeweils mit
   Kurzbeschreibung und Groesse.
2. **Offene Punkte** – Status aller 4 uebrigen INBOX-Dateien dokumentiert
   (2 blockiert, 2 offen), inkl. Ursache der Blockaden.
3. **Abhaengigkeiten** – intern (Story-Development: MVP-Story, SD-Prompts;
   Koordinator: R1-R9) und extern (SD-API erreichbar, MP3-/OGG-Encoder
   fehlt, keine CDN).
4. **Handover-Datei** in der OUTBOX abgelegt, mit Freigabe-Status.
5. **Status `erledigt`**, Datei in die OUTBOX verschoben.

### Besonders hervorgehoben (Punkt 5 „Migrationsrisiken")
- **Der gesamte Bereich ist `untracked`** – `git ls-files` liefert fuer
  `Assets/HTML-Prototype/` und `ProjectManagement/HTML-Prototype/` kein
  Ergebnis; zusaetzlich ist `Assets/Story/Test-Dialog.ink` ungetrackt,
  auf das `config.js` zeigt. Eine Migration nur getrackter Dateien wuerde
  den Prototyp komplett verlieren.
- **Leere Ordner** `scenes/` und `assets/audio/` (je 0 Dateien) gehen bei
  Git-Migration verloren.

### Was NICHT veraendert wurde (laut Auftrag)
- Die Rueckmeldung `2026-10-08-Entscheidung-Offene-Punkte-Rueckmeldung.md`
  bleibt unveraendert in der OUTBOX und ist im Handover als
  „offene Koordinator-Rueckfrage" vermerkt.
- `GitHub-Pages-Deployment` ist als „optional/nicht migrationskritisch"
  markiert, Status bleibt `offen`.
- `Audio-Musik-Klicksound`, `Beispielszene-Szene1`,
  `Info-StableDiffusion-Bilder` bleiben unveraendert in der INBOX.
