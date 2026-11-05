---
Titel: Gedanken-/Agenda-System – Mechanik-Konzept (Besprechungsergebnis)
Typ: Info
Status: erledigt
Priorität: hoch
Auftraggeber: Koordinator
Agent: Spielmechanik-Agent
Erstellt: 2026-11-04
Fälligkeit: -
Abhängigkeiten: 2026-08-17-Aufgabe-CoreGameLoop-AhaEffekt.md (OUTBOX); 2026-11-04-Info-Delegation-Gedanken-UI-HTML-Prototype.md; Character-Development/ (Regina, Norman, Lukas, Stefania)
---

# Gedanken-/Agenda-System – Mechanik-Konzept

Dieses Dokument hält das Besprechungsergebnis zur Spielmechanik der Gedanken (Ziele) fest.
Es **ergänzt und überschreibt Teile** der Aufgabe `CoreGameLoop-AhaEffekt` (siehe Abschnitt 9).
Die technische Umsetzung der Anzeige ist separat delegiert (siehe Verweis oben).

---

## 1. Grundidee

- Ein **Gedanke** ist eine kurze Intention des Charakters (z. B. „Beruhige die Kinder", „Halte den Kontakt", „Folge dem Fahrplan").
- Gedanken sind **Information und Feedback**: Sie zeigen dem Spieler, wohin sich die Lage entwickelt und wie seine bisherigen Entscheidungen wirken.
- Gedanken haben **keine direkte Wirkung** auf Variablen. Wirkung entsteht nur über Entscheidungen. Ein Gedanke kann umgesetzt, ignoriert oder abgelaufen sein.
- Das System ist **einheitlich** für alle Charaktere, fühlt sich aber je Charakter durch Agenda-Gewichtung unterschiedlich an.

---

## 2. Agenden (Farbcodierung, 4 Typen)

| Agenda | Farbe | Kern-Intention | Spielgefühl |
|---|---|---|---|
| **Strategie** | Hellblau | Überblick, Plan, Lage ordnen, distanziert denken | klar, abwägend, übergeordnet |
| **Akut** | Hellviolett | Dringlichkeit, sofort handeln, Ziel erreichen | drängend, fordernd, ehrgeizig |
| **Beziehung** | Hellgrün | Verbindung zu Personen, Vertrauen, Fürsorge, Rücksicht | warm, personenbezogen |
| **Routine** | Grau | Ruhig bleiben, Plan halten, „Ball flach halten", weiter wie bisher | passiv, gemütlich, wenig Abweichung |

**Hinweis Routine:** Routine ist kein Fehler-Zustand, sondern eine legitime Intention mit eigenem Reiz (Ruhe, Stabilität). Sie ist eher passiv als dominant.

---

## 3. Charakter-Profile (Agenda-Gewichtung, Stand Besprechung)

| Charakter | Hauptagenda | Nebenagenda | Typische Gedanken | Hinweis |
|---|---|---|---|---|
| **Regina** | Akut (ehrgeizig) | – | „Kontakt halten", Ziele mit Dringlichkeit | Akut dominiert |
| **Norman** | Strategie (Manager) | – | Überblick, distanzierte Planung | Strategie dominiert |
| **Lukas** | Beziehung | – | Auf Kinder bezogene Ziele; lernt, bei Bedarf auf anderes (Verkehr) zu fokussieren | Beziehungsorientiert, aber lernfähig |
| **Stefania** | Akut | Routine | „In Ruhe gelassen werden", Abwehr | Schnell in aggressive Abwehr; wenig Beziehung |

**Offen:** In welcher Phase Stefania selbst spielbar wird, ist noch nicht geklärt.

---

## 4. Entstehung neuer Gedanken

1. **Situationsbezogen, nicht generativ und nicht zufällig.** Neue Gedanken entstehen an konkreten Situationen (Beat, Entscheidung, Zustand). Ein Pool ist je Situation definiert.
2. **Charakter-Gewichtung innerhalb der Situation.** Aus dem situativen Pool wird nach der Hauptagenda des Charakters gewichtet ausgewählt. Die Gewichtung ist nicht die Quelle von Zufall, sondern verschiebt die Wahrscheinlichkeit, was den Charakter ausmacht.
3. **Nicht vollständig planbar** entsteht nicht durch Zufall, sondern durch:
   - **Verzögerung** (neue Gedanken kommen nicht sofort, siehe Abschnitt 6),
   - **Folgen von Fälligkeit** (Abschnitt 5),
   - **Mehrdeutigkeit:** Ein Gedanke kann mehreren Situationen zugeordnet sein, sodass der Spieler die Wirkung seiner Wahl nicht sicher vorhersieht.

---

## 5. Fälligkeit (Strich am unteren Rand)

- Der Strich zeigt die **verbleibende Zeit bzw. Gelegenheit** eines Gedankens an.
- **Ablauf hat Folgen.** Ein abgelaufener Gedanke ist nicht neutral.
- Folgen je Agenda (Vorschlag, noch zu konkretisieren):

| Agenda | Folge bei Ablauf (Vorschlag) |
|---|---|
| **Akut** | Druck steigt; die Lage wird dringlicher (`pressure`) |
| **Strategie** | Die Option verschwindet; der Spieler verliert eine Handlungsmöglichkeit |
| **Beziehung** | Die Beziehung kühlt ab, z. B. Vertrauen sinkt indirekt (über den Kontext, nicht direkt) |
| **Routine** | Passivität wird belohnt oder bleibt neutral, je nach Situation (z. B. Ruhe bewahrt vs. Chance verpasst) |

- **Nichtstun** ist eine Entscheidung (Abschnitt 7).

---

## 6. Abweichende Entscheidungen → neue Gedanken

1. Wählt der Spieler wiederholt Gedanken außerhalb der Hauptagenda des Charakters, entstehen **neue Gedanken aus anderen Agenden**.
2. Die neuen Gedanken entstehen **mit gewisser Verzögerung** (Vorschlag: 1 Beat).
3. Sie müssen **im Kontext klarmachen, was sich geändert hat**: Etwas wurde **geöffnet** oder **geschlossen**. Beispiel-Form: „Die Lage hat sich verschoben: … ist jetzt offen" bzw. „… ist nicht mehr möglich".
4. **Phasen (nur intern):** Die Phasen werden im Konzept explizit benannt (z. B. „Phase: Einsatz", „Phase: Übergabe"). Sie sind **Konzeptions-Werkzeug** und erscheinen **nicht** im Spiel. Der Gedanke im Spiel beschreibt nur die Öffnung bzw. Schließung, nicht die Phase.

---

## 7. Nichtstun

- Nichtstun ist eine vollwertige Entscheidung.
- In bestimmten Situationen ist Nichtstun sogar die **richtige** Wahl (z. B. Routine: „Ball flach halten" in einer Situation, die Eskalation verlangt).
- Das System darf Passivität **nicht** pauschal bestrafen. Ob Nichtstun Folgen hat, hängt von der Situation und Agenda ab (Abschnitt 5).

---

## 8. Beziehung zum Aha-Effekt (Update)

Der Aha-Effekt aus der Aufgabe `CoreGameLoop-AhaEffekt` ist ein **abstrakter Mechanismus**. Er darf durch einen Gedanken gezeigt werden, der **vom üblichen Bias des Charakters abweicht**.

Beispiel: Regina (Akut) erhält einen Beziehungs-Gedanken, der die Konsequenz ihrer eigenen Maßnahme sichtbar macht.

Der Rücksetzer-Beat bleibt als Mechanismus bestehen, seine Anzeige kann über einen Gedanken erfolgen.

---

## 9. Überschriebene Teile der Aufgabe `CoreGameLoop-AhaEffekt` (OUTBOX, 2026-10-08)

| Abschnitt (alt) | Neue Festlegung |
|---|---|
| 1, Regel 1–3 (Schema) | Gilt im Grundsatz weiter. Konsequenz-Latenz ≤ 1 Beat bleibt. |
| 2.2 Rücksetzer „genau 1× pro Szene, fester Beat H4" | **Überschrieben:** Rücksetzer ist ein abstrakter Mechanismus, der situativ und über Gedanken ausgelöst werden kann. Nicht mehr fest an H4 gebunden. |
| 3.4 Druck-Takt „+8 pro Beat, deterministisch" | **Überschrieben:** Druck-Entwicklung situativ; Schwellwert 70 bleibt als Idee, Gewichtung noch offen. |
| 5.1 „Kohärenz: deterministisch, kein RNG" | **Überschrieben:** Kein Zufall, aber situative Mehrdeutigkeit und Verzögerung (Abschnitt 4.3). |
| 4.x Statusanzeige, Rückschritt-Zustand | Bleibt gültig, ist aber Teil der Delegation (Verweis unten). |

---

## 10. Offene Punkte

| # | Punkt | Zuständig |
|---|---|---|
| O-1 | Konkrete Fälligkeitsdauer (Beats oder Sekunden?) je Agenda | Spielmechanik |
| O-2 | Konkrete Folgen bei Ablauf je Agenda (Abschnitt 5 ausformulieren) | Spielmechanik |
| O-3 | Gewichtungs-Werte (z. B. Hauptagenda 60–70 %) | Spielmechanik, **keine systematische Wertung vorerst** |
| O-4 | Situationspools je Beat (welche Gedanken können wo entstehen) | Spielmechanik + Story-Development |
| O-5 | Phase, in der Stefania selbst spielbar wird | Koordinator |
| O-6 | Konkrete Gedanken-Texte und Ink-Umsetzung | Story-Development |
| O-7 | Umsetzung der Anzeige (Scroll, Aufklappen, Ausblenden) | HTML-Prototyp (delegiert, siehe Verweis) |
| O-8 | Einheitliches Interface in Unity | Offen (später) |

---

## 11. Status

- Besprechungsergebnis dokumentiert. Die Mechanik ist konzeptionell festgelegt, die Werte und Pools sind noch offen (Abschnitt 10).
- Technischer Teil ist **nicht** Teil dieser Info, sondern delegiert (siehe `2026-11-04-Info-Delegation-Gedanken-UI-HTML-Prototype.md`).
- Nicht selbst archiviert (Koordinator).

*Verfasst: 2026-11-04 · Spielmechanik-Agent*
