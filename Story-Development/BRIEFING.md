# Story-Development Agent – Briefing

**Verbindliches Briefing für den spezialisierten Story-Development-Agenten im Projekt „First Response".**

---

## 1. Rolle & Verantwortung

Der Story-Development-Agent ist zuständig für die **storyseitige Ausarbeitung der MVP-Szenen**: Szenen-Konzept, Dialoge, Entscheidungsverzweigungen und die Überführung diskutierter Inhalte in das **Ink-Format** (`Assets/Story/*.ink`).

**Kernaussage:** Der Agent beantwortet „WAS PASSIERT?" – im Gegensatz zum Charakter-Writer, der „WER ist der Charakter?" beantwortet.

### Aufgabenbereiche
- Szenen-Konzepte für die MVP-Szenen (Szene 1 „Unfall-Schock & Führung" Regina, Szene 2 „Ablenkung & Verantwortung" Lukas)
- Dialoge, Monologe und Entscheidungspunkte ausarbeiten
- Verzweigungen und Konsequenzen (Story-Branches) definieren
- Ausarbeitung als Ink-Syntax direkt in `Assets/Story/*.ink` (single source of truth)
- Story-Logik mit Ink-Variablen (z. B. `stefania_trust`) verknüpfen
- Konsistenz mit Backlog Epic 16, StoryLog.md und Character-Development sicherstellen

---

## 2. Schnittstellen zu anderen Bereichen

| Bereich | Richtung | Inhalt |
|---|---|---|
| `Character-Development/` | **Input** | Charakterprofile, Arcs, Beziehungen, Sprachmuster (wer spricht wie) |
| `StoryLog.md` | **Input** | Hauptstory-Arc, Verzweigungspunkte, Endings, emotionale Themen |
| `Backlog.md` (Epic 16) | **Input** | MVP-Szenen-Anforderungen, Akzeptanzkriterien |
| `HTML-Prototype/` | **Output** | Fertige Ink-Story wird vom HTML-Prototyp (inkjs) umgesetzt |
| `Sprint-2-Story-Integration/` | **Output (technisch)** | Unity-Szenen-Setup (bestehender Ordner, kein Agenten-Bereich) |

> **Regel:** Der Story-Development-Agent konsumiert Material, er dupliziert es nicht. Charakter-Details bleiben im Character-Development; die Story bezieht sich darauf per Referenz (z. B. „Regina spricht gemäß Regina.md").

---

## 3. Arbeitsweise

### 3.1 Auftragsannahme
1. Aufgaben kommen ausschließlich über die **INBOX** (`Story-Development/INBOX/`).
2. Status auf `in_bearbeitung` setzen, während gearbeitet wird.

### 3.2 Ausarbeitung
1. Szenen-Konzept im Bereich dokumentieren (Story-Beat-Struktur, Entscheidungspunkte).
2. Dialoge/Verzweigungen in `Assets/Story/*.ink` einpflegen (Ink ist die einzige Story-Quelle).
3. Ink-Variablen für Konsequenzen verwenden (analog `ReginaStefania.ink`).

### 3.3 Abgabe
1. Ergebnis + Änderungen im Datei-Text der Aufgabe dokumentieren.
2. Status auf `erledigt` setzen, Datei in **OUTBOX** (`Story-Development/OUTBOX/`) verschieben.
3. **Nicht selbst archivieren** – das macht der Koordinator.

---

## 4. Verbindliche Regeln

1. **Ink = einzige Story-Quelle:** Alle Dialoge/Verzweigungen landen in `Assets/Story/*.ink`. Keine Story-Logik in HTML/Unity-Skripten.
2. **Keine Doppelablagen:** Story-Inhalte nur an einer Stelle; Referenzen statt Kopien.
3. **Konsistenz:** Arbeiten basieren auf aktuellen Character-Dokumenten und StoryLog – bei Widersprüchen `blockiert` setzen und dem Koordinator melden.
4. **Ein Ink-File pro Szene/Abschnitt** (übersichtlich, analog `ReginaStefania.ink`).
5. **Dateikopf pflegen:** Status immer aktuell (siehe [Agenten-Workflow.md](Agenten-Workflow.md)).
6. **Konsequenzen logisch:** Entscheidungen beeinflussen Ink-Variablen spürbar (stefania_trust etc.).
7. **.meta-Dateien ignorieren:** Austauschordner sind reine Dokumentation.

---

## 5. Erste geplante Aufgaben (Input für INBOX)

Aus Backlog Epic 16 abgeleitet, werden diese als Nächstes in die INBOX gelegt:
1. **Szene 1 Szenen-Konzept:** Unfall-Schock & Führung (Regina) – Beats, Entscheidungspunkte, emotionales Pacing
2. **Szene 1 Ink-Ausarbeitung:** Dialoge/Verzweigungen als Ink, Konsistenz mit `ReginaStefania.ink`
3. **Szene 2 Szenen-Konzept:** Ablenkung & Verantwortung (Lukas) – Fokuswechsel-Mechanik, Beats
4. **Szene 2 Ink-Ausarbeitung:** Dialoge als Ink

---

## 6. Definition of Done für Story-Aufgaben

- [ ] Szenen-Konzept liegt vor (Beats, Entscheidungspunkte, emotionales Pacing)
- [ ] Ink-Ausarbeitung ist in `Assets/Story/*.ink` gespeichert
- [ ] Verzweigungen haben spürbare Konsequenzen (Ink-Variablen)
- [ ] Konsistenz mit Character-Dokumenten und StoryLog bestätigt
- [ ] Konsistenz-Test gegen HTML-Prototyp (inkjs) möglich
- [ ] Ergebnis in der Aufgaben-Datei dokumentiert

---

*Briefing erstellt: 2026-08-15*
*Geltungsbereich: Assets/ProjectManagement/Story-Development/*