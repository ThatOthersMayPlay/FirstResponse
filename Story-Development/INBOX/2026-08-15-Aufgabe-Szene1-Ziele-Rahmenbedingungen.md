---
Titel: Szene 1 "Unfall-Schock & Führung" – Abstrakte Ziele & Rahmenbedingungen
Typ: Aufgabe
Status: in_bearbeitung
Priorität: hoch
Auftraggeber: Koordinator
Agent: Story-Development-Agent
Erstellt: 2026-08-15
Fälligkeit: 2026-08-29
Abhängigkeiten: StoryLog.md; Backlog.md (Epic 16); Character-Development/ (Regina.md, Stefania.md); BRIEFING.md
---

## Auftrag

Erarbeite mit dem Koordinator **schrittweise im Interview** ein Szenen-Konzept für die MVP-Szene 1 „Unfall-Schock & Führung" (Regina). Dieses Dokument definiert **nur die abstrakten Ziele und Rahmenbedingungen** – die konkrete Ausarbeitung (Beats, Dialoge, Verzweigungen) erfolgt im Dialog mit dem Koordinator.

## Abstrakte Ziele (WARUM)

1. **Emotionale Dichte:** 100% spürbare atmosphärische Immersion, spürbare Spannung (Visions-/Backlog-Standard)
2. **Bedeutungsvolle Entscheidungen:** Jede Wahl hat spürbare Konsequenzen für Story und Charaktere (Ink-Variablen)
3. **Regina-Perspektive:** Spieler erlebt die Führung von Stefania über Funk/Telefon (indirekte Steuerung, Leitstellen-Setting)
4. **Subtile Erste-Hilfe-Thematik:** Natürlicher Teil der Story, kein erkennbares Lernmodul
5. **Authentische Charaktere:** Konflikt „Professionalität vs. Emotionen" (Regina) glaubwürdig transportieren

## Rahmenbedingungen (EINSCHRÄNKUNGEN)

### Story & Engine
- **Ink = einzige Story-Quelle:** Dialoge/Verzweigungen in `Assets/Story/*.ink`, keine Story-Logik im HTML-Code
- **Konsequenzen über Ink-Variablen:** z. B. `stefania_trust`, `player_perspective` (analog `ReginaStefania.ink`)
- Konsistenz mit `Regina.md`, `Stefania.md`, `StoryLog.md` – bei Widersprüchen: `blockiert` + Koordinator informieren

### Interaktion (HTML-Prototyp, Basis-Level)
- **Mehrere Optionen parallel** anzeigen (einfacher choice-basierter Ansatz, keine Geometrie)
- Jede Option = genau ein Ink-Choice
- **Keine Überblendeffekte** – harter Szenenwechsel
- Audio: Hintergrundmusik + Klick-Sound (Kein Story-Input, nur Feeling)

### Umfang MVP
- Szene 1 als Intro / Hauptteil / Outro-Struktur (Referenz: Backlog Epic 16 Technical Tasks)
- Erlebbar in unter 5 Minuten, ohne Installation
- Ziel: als HTML-Prototyp (inkjs) umsetzbar

## Offene Punkte für die Interview-Diskussion (Vorschläge, nicht abschließend)
- Exakter Story-Aufhänger des Intro-Monologs (Justizbeamtin, Fight-Club/District-9-Stil)
- Konkrete Entscheidungspunkte im Hauptteil und ihre Konsequenzen
- Anzahl/Position der parallelen Optionen je Beat
- Outro-Gestaltung (Regina, visuell, ohne Monolog)
- Wie viel Erste-Hilfe-Inhalt sichtbar wird (subtile Integration)

## Ergebnis (Definition of Done)
- [ ] Szenen-Konzept liegt vor (Beats, Entscheidungspunkte, emotionales Pacing)
- [ ] Entscheidungen haben spürbare Konsequenzen über Ink-Variablen
- [ ] Ink-Ausarbeitung in `Assets/Story/*.ink` gespeichert
- [ ] Konsistenz mit Character-Dokumenten und StoryLog bestätigt
- [ ] Konsistenz-Test gegen HTML-Prototyp (inkjs) möglich
- [ ] Ergebnis in der Aufgaben-Datei dokumentiert

> **Hinweis an den Agenten:** Führe die Szenen-Diskussion Schritt für Schritt mit dem Koordinator im Interview. Stell gezielte Rückfragen, statt das Konzept einseitig zu erarbeiten.

## Interview-Verlauf (2026-08-17)

- **Anforderung Koordinator:** MVP braucht erkennbaren Core Game Loop (Entscheidung → Konsequenz → neue Situation) mit mindestens einem **Aha-Effekt** und **drastischer erlebbarer Konsequenz**.
- **Scope-Klärung:** Core Game Loop, Aha-Effekt-Design und Mechanik-Balance gehören in den Bereich **Game Design/Spielmechanik**, nicht Story-Development. Erkenntnisse und Delegationsempfehlungen liegen in der OUTBOX (`2026-08-17-Info-Szene1-Interview-Erkenntnisse-Delegation.md`).
- **Story-Development-Fokus:** Wie Entscheidungen neuen Horizont eröffnen oder schließen (narrative Verzweigungen, Ink-Variablen).
- **Status-Hinweis:** Die konkrete Szenen-Ausarbeitung wird fortgesetzt, sobald die Mechanik-Vorgaben (Game Design) vorliegen.