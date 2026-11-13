---
Titel: Voicing-Grundsetup – Plattform und Schnittstelle klären
Typ: Aufgabe
Status: offen
Priorität: hoch
Auftraggeber: Koordinator
Agent: Voicing-Agent
Erstellt: 2026-11-13
Fälligkeit: 2026-11-27
Abhängigkeiten: Voicing/BRIEFING.md; Character-Development/ (Charakterprofile); Story-Development/ (Dialoge)
---

## Ziel

Das grundsätzliche Projektsetting für Sprachaufnahmen klären und eine erste Aufgabe zur Erkundung der Plattform erstellen.

## Projektsetting

First Response ist ein Story-basiertes Serious Game mit sieben Protagonisten (Regina, Lukas, Kilian, Norman, Stefania, Viktor, Milon) und zwei Kindern (Jonas). Die Szenen spielen im Schwarzwald, rund um einen Tunnelunfall mit einsturzgefährdeter Brücke. Der Spieler erlebt die Situationen aus Perspektive der Charaktere, trifft Entscheidungen und erlebt Konsequenzen.

Sprachaufnahmen (Voice-Over) werden für folgende Bereiche benötigt:
- **Charakter-Dialoge:** Jeder Charakter hat eine eigene Stimme, die zu seiner Persönlichkeit passt.
- **Erzählertexte:** Off-Screen-Kommentare, Intro-Monologe (z. B. Justizbeamtin im Intro).
- **UI-Sounds:** Systemmeldungen, Hinweise (optional).

## Umfang

1. **Plattform erkunden:** Welche Plattformen für Sprachaufnahmen/TTS stehen zur Verfügung? (z. B. lokale TTS, Cloud-Dienste, menschliche Aufnahme). Vor- und Nachteile dokumentieren.
2. **Stimmen zuordnen:** Für jeden der sieben Protagonisten eine Stimme vorschlagen (Geschlecht, Alter, Tonfall, Akzent). Nur Vorschläge, keine Festlegung.
3. **Format klären:** Welches Audio-Format wird benötigt? (WAV, MP3, OGG – abhängig von Unity und HTML-Prototyp). Abstimmung mit `HTML-Ink-Schnittstelle.md` und Unity-Audio-Setup.
4. **Schnittstelle definieren:** Wie wird die Plattform angesteuert? (API, manuelle Aufnahme, Hybrid). Dokumentation der Schnittstelle.
5. **Erster Test:** Eine kurze Sprachaufnahme (z. B. ein Satz von Regina) erzeugen und in der OUTBOX dokumentieren.

## Regeln

- Keine Figurenfakten erfinden. Stimmen, Sprechstil und Dialekt nur nach Vorgabe oder festgelegter Quelle.
- Ergebnis in der OUTBOX, Status `erledigt`. Nicht selbst archivieren.
- Wenn eine Änderung außerhalb deines Ordners nötig ist, Aufgabe in `ProjectManagement/INBOX/` anlegen.

## Ergebnis (Definition of Done)

- [ ] Plattform-Übersicht mit Vor- und Nachteilen
- [ ] Stimmen-Vorschläge für die sieben Protagonisten
- [ ] Audio-Format festgelegt (mit Begründung)
- [ ] Schnittstellen-Dokumentation
- [ ] Erster Test (eine Sprachaufnahme) mit Dokumentation
- [ ] Bericht in der OUTBOX, Status `erledigt`
