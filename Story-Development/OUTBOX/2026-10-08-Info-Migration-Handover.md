---
Titel: MIGRATION – Handover Story-Development (Inventar, offene Punkte, Abhängigkeiten)
Typ: Info
Status: erledigt
Priorität: hoch
Auftraggeber: PM/WPA (Koordinator)
Agent: Story-Development-Agent
Erstellt: 2026-10-08
Fälligkeit: vor Migrationsstart
Abhängigkeiten: -
---

# MIGRATION-Handover: Story-Development

## 1. Inventar

Der Bereich existiert an **zwei Stellen** – beide erfasst.

### A) `Assets/ProjectManagement/Story-Development/` (Workflow-Bereich)

| Datei | Kurzbeschreibung | Status |
|---|---|---|
| `BRIEFING.md` | Verbindliches Briefing: Rolle, Regeln, Ablauf, DoD | aktuell |
| `Notizen-Story-Rahmen-Schauplaetze-2026-08-17.md` | Interview-Notizen Gesamtstory: Schauplatz Schwarzwald, Charakter-Positionen, falsche-Adresse-Mechanik, Recherche Notrufsäulen, offene Punkte | **Arbeitsstand, laufend** |
| `INBOX/2026-08-15-Aufgabe-Szene1-Ziele-Rahmenbedingungen.md` | Hauptaufgabe Szene 1, Interview-Verlauf dokumentiert | **offen / in_bearbeitung** |
| `INBOX/2026-08-15-Info-StableDiffusion-Prompts.md` | Szenen-Bilder via SD-API: visuelle Beschreibungen ins Szenen-Konzept einarbeiten | **offen** |
| `INBOX/2026-10-08-Aufgabe-MIGRATION-Handover.md` | Diese Aufgabe | wird nach Abgabe `erledigt` → OUTBOX |
| `OUTBOX/2026-08-17-Info-Gameplay-Hinweis-Tunnel-Dunkelheit.md` | Delegation: Tunnel-Dunkelheit-Gameplay (schwarzer Bildschirm) | `erledigt`, wartet auf Koordinator-Übernahme |
| `OUTBOX/2026-08-17-Info-Mechanik-Delegation-Fokuswechsel-Lukas.md` | Delegation: Fokuswechsel-Mechanik Szene 2 (Lukas) | `erledigt`, wartet auf Koordinator-Übernahme |
| `ARCHIV/2026-08-17-Info-Szene1-Interview-Erkenntnisse-Delegation.md` | Erste Erkenntnisse-Übergabe (Core Game Loop → Game Design) | bereits vom Koordinator übernommen |
| `ARCHIV/` (weitere Einträge) | – | – |

### B) `Assets/Story-Development/` (Inhalte-Bereich)

| Datei/Ordner | Kurzbeschreibung |
|---|---|
| `README.md` | Bereichs-Readme |
| `Story-Development-Einrichtung.md` | Einrichtungsdokumentation |
| `Szenen-Konzept.md` | Szenen-Konzept (übergeordnet) |
| `Dialog-Optionen-Regina-Stefania.md` | Dialog-Optionen Regina/Stefania |
| `Archiv-MVP-Szenen-2026-02-12.md` | Archivierte MVP-Szenen (Feb. 2026) |
| `Szene-2-Ablenkung-Verantwortung/` | `Szenen-Konzept.md`, `Kinder-Interaktions-Design.md` |
| `Szene-3-Tunnel-Einsturz/` | `Szenen-Zusammenfassung.md`, `Regina-PreScene-Mutteranruf.md`, `Regina-PreScene-Jogging-Atmosphaere.md` |
| `INBOX/`, `OUTBOX/` | (leer, nur Workflow-Platzhalter) |
| `Sprint-1-Entscheidungsverwaltung/` | Ordner (Sprint-1-Inhalte) |
| diverse `.meta`-Dateien | Unity-Meta-Dateien – laut Workflow **nicht pflegen, nicht beachten** |

> **Hinweis:** Die Szene-1-Ink-Ausarbeitung liegt noch nicht als eigene Datei vor; `Assets/Story/ReginaStefania.ink` ist nur eine **Beispielszene** (laut Interview, kommt nicht live im Spiel).

## 2. Offene Punkte

1. **`2026-08-15-Aufgabe-Szene1-Ziele-Rahmenbedingungen`** – Status `in_bearbeitung`:
   - Interview-Modus läuft; dokumentierter Verlauf im Datei-Text (bis Punkt „Tunnel-Cliffhanger = nur Idee").
   - Beantwortet/entschieden: Stefania-Position (Plattform am Tunnelausgang), temporäre Baustellen-Notrufsäule als Kontaktquelle, **falsche Adresse = Variante A (Säule meldet „Ort, der es nicht geben kann")**, Manipulation A→C (bewusst, ambivalent entwickelbar), Tunnel-Sequenz als Auto-Szene/Cutscene-Ende im Dunkeln (nur Idee).
   - **Noch offen:** Zuspitzung „jemand noch im Tunnel?" (A/B/C, nicht beantwortet), Zeitliche Abfolge Stefania (Variante 1 leere Tankstelle vs. Variante 2 Tunnel durchfahren), Regina-Auftakt (Modell A „kein Ernst" vs. B „falsch verbunden"), Norman-Verzögerung, Milon-Endmechanik, Brief-Unterbrechung.
2. **`2026-08-15-Info-StableDiffusion-Prompts`** – Status `offen`: Visuelle Beschreibungen je Beat/Szene sind noch **nicht** ins Szenen-Konzept eingearbeitet (hängt an laufender Szene-1-Diskussion).
3. **Ink-Ausarbeitung Szene 1** noch nicht begonnen (Definition of Done der Hauptaufgabe).

## 3. Abhängigkeiten

| Von wem | Was | Auswirkung |
|---|---|---|
| **Game Design / Spielmechanik** | **Aha-Effekt-/Mechanik-Vorgaben, Core Game Loop, drastische Konsequenz, Fokuswechsel-Mechanik** | **BLOCKIEREND für die konkrete Szenen-Ausarbeitung** – Ink-Ausarbeitung startet erst nach Mechanik-Klärung |
| Character-Development | Aktuelle `Regina.md`, `Stefania.md`, `Character-Overview.md` | Inputs für Dialoge/Charakter-Konsistenz |
| Koordinator | `StoryLog.md`, `Backlog.md` (Epic 16) | Story-Arc & MVP-Anforderungen; StoryLog-Update nach Konsolidierung offen |
| HTML-Prototype | Inkjs-Umsetzung, `options.json`, Szenenbilder | Output der Ink-Ausarbeitung; Konsistenz-Test gegen Prototyp |
| Asset-Generierung (SD-API) | `Asset-Generierung-StableDiffusion.md`, Easy Diffusion `http://localhost:9000` | Visuelle Beschreibungen aus Szenen-Konzept → Bilder |
| Extern (Spezialist) | Tunnelbau-/Statik-Wissen | Milon-Lkw-Schäden (Stützenzerstörung) realistisch ausgestalten |

## 4. Freigabe-Status

- [x] Inventar beider Standorte erfasst
- [x] Status aller offenen INBOX-Aufgaben dokumentiert
- [x] Abhängigkeiten dokumentiert
- [x] Keine Dateien verändert/gelöscht/verschoben (nur diese Handover-Datei neu)
- **→ GREEN LIGHT: Story-Development ist migrationsbereit.**

*Migrations-Aufgabe selbst wird nach Abgabe dieser Datei auf `erledigt` gesetzt und in die OUTBOX verschoben.*
