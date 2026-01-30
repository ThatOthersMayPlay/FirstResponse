# Sprint 1 - Prototyp Foundation

**Zeitraum:** 2 Wochen  
**Sprint Goal:** Grundlegende spielbare Unfallszene mit Platzhalter-Assets

## Sprint Backlog

### User Stories (aus Epic 1)

#### US-1: Unfallszene erstellen
**Als** Spieler **möchte ich** die Unfallszene aus erster Perspektive erleben  
**Akzeptanzkriterien:**
- [ ] Unity-Szene mit grundlegendem Straßen-Setup
- [ ] Platzhalter-Fahrzeuge positioniert
- [ ] Grundlegende Beleuchtung für Unfallatmosphäre
- [ ] Kamera-Position für Spieler-Perspektive

#### US-2: Grundlegende Dialoge
**Als** Spieler **möchte ich** einfache Dialogoptionen haben  
**Akzeptanzkriterien:**
- [ ] Dialog-UI-System implementiert
- [ ] 2-3 Beispiel-Dialoge mit Charakteren
- [ ] Button-basierte Auswahlmöglichkeiten
- [ ] Platzhalter-Texte für Charaktere

#### US-3: Einfache Erste-Hilfe-Aktion
**Als** Spieler **möchte ich** eine einfache Erste-Hilfe-Aktion ausführen  
**Akzeptanzkriterien:**
- [ ] Input-System für Aktionen
- [ ] Eine Beispiel-Aktion (z.B. "Verletzten überprüfen")
- [ ] Visuelles Feedback bei Aktion
- [ ] Einfache Animation oder Platzhalter-Effekt

#### US-4: Entscheidungskonsequenz
**Als** Spieler **möchte ich** die Konsequenzen meiner Entscheidungen sehen  
**Akzeptanzkriterien:**
- [ ] Grundlegendes Entscheidungssystem
- [ ] Einfache Reaktion auf Spieler-Entscheidungen
- [ ] Text-Feedback für Konsequenzen
- [ ] Status-Änderungen bei Charakteren

## Technical Tasks

### Scene Setup
- [ ] Neue Unity-Szene "AccidentScene" erstellen
- [ ] Grundlegendes Terrain/Street-Setup
- [ ] Platzhalter-Assets für Fahrzeuge
- [ ] Environment-Lighting konfigurieren

### UI System
- [ ] Dialog-Manager Skript erstellen
- [ ] UI-Canvas für Dialoge
- [ ] Button-Prefabs für Optionen
- [ ] Text-Display für Charakter-Sprache

### Input & Interaction
- [ ] Input-System für Maus/Tastatur
- [ ] Klick-Detection für UI-Elemente
- [ ] Action-Button für Erste-Hilfe
- [ ] Grundlegende Animation-Trigger

### Game Logic
- [ ] GameManager für Spielzustände
- [ ] Character-Manager für Charakter-Status
- [ ] Decision-Tracker für Spieler-Entscheidungen
- [ ] Simple Save/Load Funktionalität

## Definition of Done
- [ ] User Story vollständig implementiert
- [ ] Funktioniert im Unity Editor
- [ ] Keine Console Errors
- [ ] Grundlegende Tests bestanden
- [ ] Code kommentiert

## Risiken & Blocker
- **Platzhalter-Assets:** Möglicherweise nicht verfügbar → Eigene primitive Objekte verwenden
- **Dialog-System:** Komplexität unterschätzt → Einfachste Version zuerst
- **Performance:** URP-Einstellungen optimieren

## Demo Criteria
Für Sprint Review:
1. Spieler kann Szene betrachten
2. Mindestens ein Dialog kann ausgelöst werden
3. Eine Aktion kann ausgeführt werden
4. Entscheidung führt zu sichtbarer Reaktion

## Velocity Tracking
- Geschätzte Story Points: 20
- Verfügbarer Zeitraum: 2 Wochen
- Team-Kapazität: 1 Developer

## Retrospective Vorbereitung
- Was lief gut?
- Was könnte verbessert werden?
- Neue Erkenntnisse für Sprint 2
