---
Titel: MIGRATION – Handover Character-Development (Inventar, offene Punkte, Abhängigkeiten)
Typ: Info
Status: erledigt
Priorität: hoch
Auftraggeber: PM/WPA (Koordinator)
Agent: Character-Development-Agent
Erstellt: 2026-10-08
Fälligkeit: vor Migrationsstart
Abhängigkeiten: -
---

# MIGRATION-Handover: Character-Development

Bereich: `FirstResponse/Assets/ProjectManagement/Character-Development/`
(kein zweiter Standort – alle Inhalte liegen in diesem einen Ordner)

## 1. Inventar

### A) Inhalt (migriert)

| Datei | Kurzbeschreibung | Status |
|---|---|---|
| `Character-Overview.md` | Kernübersicht: die 7 Protagonisten (Tabelle Alter/Beruf/Konflikt/Arc), Interaktions-Matrix, 4 Entwicklungs-Phasen, Gameplay-Integration, Story-Verzweigungen, Endings | aktuell, ausgewiesen als Platzhalter-Stand |
| `Regina.md` | Charakterblatt Regina, 28, Leitstellendisponentin – Hauptkonflikt Professionalität vs. Emotionen, 4-Phasen-Arc, Beziehung zu Viktor, Skills | aktuell (Stand Update 02/2026) |
| `Lukas.md` | Charakterblatt Lukas, 35, getrennter Familienvater – Überforderung/multiple Verantwortung, Vater-Sohn-Dynamik mit Jonas, Geheimnis Arbeitslosigkeit | aktuell |
| `Kilian.md` | Charakterblatt Kilian, 56, Pastor einer Freikirche – Gemeinde-Blase vs. authentische Menschlichkeit | aktuell |
| `Norman.md` | Charakterblatt Norman, 54, Manager – Rationalität vs. Empathie | aktuell |
| `Stefania.md` | Charakterblatt Stefania, 32, Nähherin (kürzlich aus Haft) – Pflicht vs. Freiheit, Flucht-Illusion, Opferrolle → Ersthelferin | aktuell |
| `Viktor.md` | Charakterblatt Viktor, 35, Rettungssanitäter (Draufgänger) – Souveränität vs. emotionale Offenheit, Bindungsangst | aktuell |
| `Milon.md` | Charakterblatt Milon, 50, LKW-Fahrer – Routine vs. Lebensbejahung, polnische Wurzeln, ungeöffneter Tochter-Brief | aktuell |
| `Jonas-15-Jahre.md` | Nebencharakter Jonas (15), Sohn von Lukas – Drohnen-Kompetenz, Vater-Sohn-Dynamik, 3-Phasen-Arc | aktuell, Charakter-Profil langfristige Entwicklung |
| `Drohnen-Idee-Jonas.md` | Story-Idee „Drohne als Rettungswerkzeug" für Szene 2 (Lukas & Kinder): 3 Szenarien, Gameplay-Mechaniken, Ink-Skizze, Unity-Implementierungshinweise | Idee, **Integration in Sprint 2 geplant (nicht begonnen)** |
| `UPDATE-SUMMARY.md` | Änderungsstand 07.02.2026: Korrekturen an allen Charakterblättern (Alter/Beruf/Konflikte), Story-Dynamiken (Viktor↔Regina, Stefania-Flucht-Illusion), **Abschnitt „Nächste Schritte"** | aktuell, dokumentiert den letzten inhaltlichen Stand |
| `INBOX/2026-10-08-Aufgabe-MIGRATION-Handover.md` | Diese Aufgabe | nach Abgabe `erledigt` → OUTBOX |

### B) `.meta` (entfällt beim Umzug)

Der Bereich wandert aus Unitys `Assets/` an die Wurzel des neuen Basisverzeichnisses → alle `.meta`-Dateien fallen weg und werden **nicht** mit migriert:

- `Character-Overview.md.meta`
- `Drohnen-Idee-Jonas.md.meta`
- `Jonas-15-Jahre.md.meta`
- `Kilian.md.meta`
- `Lukas.md.meta`
- `Milon.md.meta`
- `Norman.md.meta`
- `Regina.md.meta`
- `Stefania.md.meta`
- `UPDATE-SUMMARY.md.meta`
- `Viktor.md.meta`
- (`Character-Development.meta` im übergeordneten `ProjectManagement/`-Ordner, ebenso entfallend)

> Sub-Ordner (`INBOX/`, `OUTBOX/`, `ARCHIV/`) haben **keine** eigenen `.meta`-Dateien.

**Git-Status:** Die Inhaltsdateien (`A`) sind bereits im Monorepo getrackt und committet – die History wird durch Übernahme ins neue Repo erhalten. Nur `INBOX/` ist aktuell untracked.

## 2. Offene Punkte

- **Keine offenen/bearbeiteten Aufgaben.** Die INBOX enthielt ausschließlich diese Migrations-Aufgabe; es gab keine laufenden Aufgaben. (Bestehende Aufgaben werden laut Auftrag ohnehin nicht verändert, nur dokumentiert.)
- **Geplante, nicht begonnene Arbeiten** (dokumentiert, aber als Task nicht angelegt):
  1. Ausarbeitung der Platzhalter: Charaktereigenschaften, Arcs und Dialoge aller 7 Protagonisten müssen noch detailliert ausgearbeitet werden (in jedem Dokument als ⚠️-Hinweis vermerkt).
  2. `UPDATE-SUMMARY.md` → „Nächste Schritte": Gameplay-Prototyp (Stressfaktoren), Dialog-System (Sprachmuster), Beziehungs-Mechaniken (Viktor/Regina), Flashback-System (Stefania), Entscheidungs-Engine.
  3. `Drohnen-Idee-Jonas.md`: Integration in Sprint 2 / Szene 2 (Status „geplant").
- **Kein `BRIEFING.md` in diesem Bereich** (anders als in Story-Development, Spielmechanik, Bildererzeugung, Extern). Als verbindliche Rollenvorgabe dient stattdessen `cusquea-games-pm/First-Response/Rollen/Character-Development-Agent.md`. Empfehlung nach Migration: BRIEFING.md ergänzen oder Rollendokument als Referenz verankern.

## 3. Abhängigkeiten

| Von wem | Was | Auswirkung |
|---|---|---|
| **Story-Development** | Konsumiert `Regina.md`, `Stefania.md`, `Character-Overview.md` als Input für Dialoge/Charakter-Konsistenz (dokumentiert in deren Handover + `Story-Development/BRIEFING.md`) | **Ausgehende** Abhängigkeit: Referenzen/Pfade nach Migration anpassen, Inhalte bleiben unverändert |
| **Spielmechanik** | `Spielmechanik/BRIEFING.md`: Charaktereigenschaften als Grundlage für Entscheidungssituationen | ausgehend – Pfad-Referenzen |
| **Bildererzeugung / Asset-Generierung** | SD-Prompts für Charakter/Personen „gemäß Character-Development" (`Asset-Generierung-StableDiffusion.md`) | ausgehend – Pfad-Referenzen |
| **PM/Koordinator** | Aufgabenvergabe über INBOX, `StoryLog.md`/`Backlog.md` als Projektkontext | eingehend |
| **externes Repo `cusquea-games-pm`** | Rollendokument `Rollen/Character-Development-Agent.md` (Rollen-Regeln, DoD) | eingehend – getrenntes Repo, muss nach Migration erreichbar bleiben |
| **`opencode-bridge/agents.json`** | Agenten-Definition mit `rolldoc`-Pfad auf das Rollendokument | eingehend – Pfad ggf. anpassen |
| **Unity** | `.meta`-Generierung nur solange der Bereich unter `Assets/` liegt | entfällt mit dem Umzug (gewollt) |

Keine blockierenden Abhängigkeiten für die Migration selbst.

## 4. Freigabe-Status

- [x] Inventar erfasst (Inhalt migriert vs. `.meta` entfällt getrennt)
- [x] Offene Punkte dokumentiert (keine laufenden Aufgaben)
- [x] Abhängigkeiten dokumentiert
- [x] Keine bestehenden Dateien verändert/gelöscht/verschoben (nur diese Handover-Datei neu)
- **→ GREEN LIGHT: Character-Development ist migrationsbereit.**

*Migrations-Aufgabe selbst wird nach Abgabe dieser Datei auf `erledigt` gesetzt und in die OUTBOX verschoben.*
