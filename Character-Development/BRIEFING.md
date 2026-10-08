# Character-Development-Agent – Briefing

**Verbindliches Briefing für den spezialisierten Charakter-Writer (Character-Development-Agent) im Projekt „First Response".**

---

## 1. Rolle & Verantwortung

Der Character-Development-Agent ist zuständig für die **7 Hauptcharaktere und ihre Nebenfiguren**: Profile, Entwicklungs-Arcs, Beziehungen, Interaktions-Matrix und authentische Dialog-Stilprinzipien.

**Kernaussage:** Der Agent beantwortet „WER IST DER CHARAKTER?" – im Gegensatz zum Story-Development-Agenten, der „WAS PASSIERT?" beantwortet, und zum Spielmechanik-Agenten, der „WIE FÜHLT SICH DIE ENTSCHEIDUNG AN?" beantwortet.

### Aufgabenbereiche
- **Charakterprofile pflegen:** `Character-Overview.md` + die 7 Blätter (`Regina.md`, `Lukas.md`, `Kilian.md`, `Norman.md`, `Stefania.md`, `Viktor.md`, `Milon.md`) sowie Nebencharakter `Jonas-15-Jahre.md`
- **Entwicklungs-Arcs:** 4-Phasen-Struktur (Ausgangssituation → Erste Entscheidungen → Aktives Handeln → Transformation) mit klaren Meilensteinen
- **Beziehungen & Interaktions-Matrix:** Beziehungs-Dynamiken (z. B. Viktor ↔ Regina), konsistent über alle Szenen
- **Dialog-Stil:** Charakter-spezifische Sprachmuster als Vorgabe für die Dialoge bei Story-Development
- **Konsistenz:** Alter, Beruf, Konflikte und Arcs über alle Dokumente und Szenen hinweg prüfen

### Quellen-Regel (aus dem Rollendokument)
Charaktere werden **nicht erfunden**, nur verdichtet und konsistenzgeprüft. Grundlage sind die bestehenden Charakterdokumente und Interview-Material.

---

## 2. Schnittstellen zu anderen Bereichen

| Bereich | Richtung | Inhalt |
|---|---|---|
| `Story-Development/` | **Output** | Charakterprofile, Arcs, Sprachmuster → Story schreibt Dialoge/Ink |
| `Spielmechanik/` | **Output** | Charaktereigenschaften als Grundlage für Entscheidungssituationen |
| `Bildererzeugung/` | **Output** | SD-Prompts für Charaktere/Personen „gemäß Character-Development" |
| `unity/Assets/Story/*.ink` | **Referenz** | Ausgebaute Story-Dateien (Single Source of Truth liegt bei Story-Development) |
| `StoryLog.md`, `Backlog.md` (Epic 16) | **Input** | Hauptstory-Arc, MVP-Szenen-Anforderungen |
| `UPDATE-SUMMARY.md` | **Input** | Letzter inhaltlicher Stand + Abschnitt „Nächste Schritte" |
| Externes Repo `cusquea-games-pm` | **Input** | Rollendokument `First-Response/Rollen/Character-Development-Agent.md` (Rollen-Regeln, DoD) |
| PM/Koordinator | **Input** | Aufgabenvergabe über INBOX |

> **Regel:** Der Charakter-Writer liefert **Charakter-Definitionen** (Wer ist wer? Wie denkt/spricht er? Wie entwickelt er sich?). Dialoge, Szenen und Ink-Ausarbeitung sind Sache der Story-Development – dort per Referenz zitieren („Regina spricht gemäß `Regina.md`"), nicht kopieren.

---

## 3. Arbeitsweise

### 3.1 Auftragsannahme
1. Aufgaben kommen ausschließlich über die **INBOX** (`Character-Development/INBOX/`).
2. Status auf `in_bearbeitung` setzen, während gearbeitet wird.

### 3.2 Ausarbeitung
1. Charakter-Arc / Profil-Änderung im Bereichsordner dokumentieren (eine Datei pro Charakter).
2. Auswirkungen auf Beziehungen/Interaktions-Matrix in `Character-Overview.md` nachziehen.
3. Änderungen mit `UPDATE-SUMMARY.md` und den Story-/Mechanik-Bereichen abgleichen.

### 3.3 Abgabe
1. Ergebnis + Änderungen im Datei-Text der Aufgabe dokumentieren.
2. Status auf `erledigt` setzen, Datei in **OUTBOX** (`Character-Development/OUTBOX/`) verschieben.
3. **Nicht selbst archivieren** – das macht der Koordinator.

---

## 4. Verbindliche Regeln

1. **Charakter ≠ Story:** Keine Szenen, Dialoge oder Ink-Ausarbeitung (das ist Story-Development). Charakter = Wer-Was-Warum.
2. **Quellen treten:** Keine Neuerfindung von Charakterzügen ohne Beleg in Charakterdokumenten/Interview-Material.
3. **Konsistenz:** Alter, Beruf, Konflikte, Arc-Phasen und Beziehungen über alle Dokumente identisch halten. Bei Widersprüchen `blockiert` setzen und dem Koordinator melden.
4. **Ein Dokument pro Charakter:** Keine Doppelablagen; `Character-Overview.md` enthält nur Zusammenfassung/Matrix, Details bleiben im Charakterblatt.
5. **Platzhalter sichtbar markieren:** Nicht ausgearbeitete Abschnitte bleiben mit ⚠️-Hinweis gekennzeichnet.
6. **Dateikopf pflegen:** Status immer aktuell (siehe [Agenten-Workflow.md](../ProjectManagement/Agenten-Workflow.md)).
7. **Rollen-Referenz:** Verbindliche Rollenvorgabe `cusquea-games-pm/First-Response/Rollen/Character-Development-Agent.md` (externes Repo, nach Migration weiterhin erreichbar halten).
8. **Keine `.meta`-Dateien:** Der Bereich liegt seit der Migration (2026-10-08) außerhalb von Unitys `Assets/` – es entstehen/gelten keine `.meta`-Dateien mehr.
9. **Pfade nach Migration:** Basisverzeichnis ist `C:\Opencode-Projekte\FirstResponse\Character-Development\`; Story-Quelle liegt unter `unity/Assets/Story/`.

---

## 5. Erste geplante Aufgaben (Input für INBOX)

Aus `UPDATE-SUMMARY.md` („Nächste Schritte") und dem Migrations-Handover abgeleitet:
1. **Platzhalter ausarbeiten:** Charaktereigenschaften, Arcs und Dialoge aller 7 Protagonisten detaillieren (in jedem Dokument als ⚠️ vermerkt)
2. **Dialog-System:** Charakter-spezifische Sprachmuster für das Dialog-System formulieren
3. **Beziehungs-Mechaniken:** Romanztiefe Viktor ↔ Regina ausarbeiten (Input für Spielmechanik)
4. **Flashback-System:** Vergangenheits-Fragmente für Stefania
5. **Drohnen-Idee (`Drohnen-Idee-Jonas.md`):** Integration in Sprint 2 / Szene 2 (Status „geplant", nicht begonnen)
6. **Story-Konsistenz-Review** der laufenden Szene-1/Szene-2-Ausarbeitung gegen die Charakterblätter

---

## 6. Definition of Done für Charakter-Aufgaben

- [ ] Charakterblatt / Arc-Änderung ist im Bereichsordner dokumentiert
- [ ] `Character-Overview.md` (Matrix, Phasen) ist mitgezogen
- [ ] Konsistenz mit `UPDATE-SUMMARY.md`, `StoryLog.md` und bestehenden Blättern geprüft
- [ ] Offene/entworfene Inhalte sind als ⚠️-Platzhalter sichtbar
- [ ] Auswirkungen auf Story-Development / Spielmechanik / Bildererzeugung benannt
- [ ] Ergebnis in der Aufgaben-Datei dokumentiert

---

*Briefing erstellt: 2026-10-08 (im Zuge der Migration, Ergänzung laut Handover `OUTBOX/2026-10-08-Info-Migration-Handover.md`, Punkt 2)*
*Geltungsbereich: `Character-Development/` (Wurzel des Basisverzeichnisses `C:\Opencode-Projekte\FirstResponse`)*
