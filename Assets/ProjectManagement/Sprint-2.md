# Sprint 2 - Story-Prototyp Integration

**Zeitraum:** 2 Wochen  
**Sprint Goal:** Integration von Entscheidungsverwaltung und UI mit Story-Szenen-Grundlagen

## Sprint Backlog

### User Stories (technische Fokussierung)

#### US-4: Integration validieren
**Als** Entwickler **möchte ich** die Zusammenarbeit von Entscheidungsverwaltung und UI validieren  
**Akzeptanzkriterien:**
- [ ] Entscheidungsverwaltung ist mit UI verbunden
- [ ] Story-State-gesteuerte UI-Aktualisierung funktioniert
- [ ] Debug.Log Ausgabe für UI-Reaktionen auf Story-States
- [ ] Grundlegende Integrationstests sind bestanden
- [ ] Beide Komponenten arbeiten zusammen

#### US-3: Szenen-Grundlagen schaffen
**Als** Entwickler **möchte ich** grundlegende Unity-Szenen für beide Demo-Szenen erstellen  
**Akzeptanzkriterien:**
- [ ] Unity-Szene "Szene1-Regina" mit Leitstellen-Setup
- [ ] Unity-Szene "Szene2-Lukas" mit Auto-Cockpit
- [ ] Platzhalter-Assets für beide Szenen
- [ ] Environment-Lighting für atmosphärische Stimmung
- [ ] Szenen-Wechsel zwischen beiden Szenen funktioniert

#### US-5: Story-Integration testen
**Als** Entwickler **möchte ich** die vollständige Story-Integration mit Szenen testen  
**Akzeptanzkriterien:**
- [ ] Ink-Dialoge funktionieren in beiden Szenen
- [ ] Story-States beeinflussen Szenen-Übergänge
- [ ] Debug.Log zeigt vollständige Story-Flüsse
- [ ] Cutscene-Tracking funktioniert in beiden Szenen
- [ ] End-to-End Story-Flow ist validiert

## Technical Tasks

### Integration (Fortsetzung von Sprint 1)
- [ ] Entscheidungsverwaltung mit UI verbinden
- [ ] Story-State-gesteuerte UI-Aktualisierung
- [ ] Debug.Log Ausgabe für UI-Reaktionen auf Story-States
- [ ] Integrationstests beider Komponenten
- [ ] Fehlerbehandlung für Integration

### Scene Setup (neu)
- [ ] Unity-Szene "Szene1-Regina" erstellen (Leitstellen-Setup)
- [ ] Unity-Szene "Szene2-Lukas" erstellen (Auto-Cockpit)
- [ ] Platzhalter-Assets für beide Szenen
- [ ] Environment-Lighting für atmosphärische Stimmung
- [ ] Szenen-Wechsel-System implementieren

### Story Integration
- [ ] Ink-Dialoge in beide Szenen integrieren
- [ ] Story-States mit Szenen-Logik verbinden
- [ ] Cutscene-Tracking in beiden Szenen
- [ ] Debug.Log für vollständige Story-Flüsse
- [ ] End-to-End Story-Tests

### Game Logic
- [ ] Szenen-Manager für Story-Wechsel
- [ ] Story-State-Persistenz über Szenen hinweg
- [ ] GameManager für Story-Zustände
- [ ] Grundlegendes Save/Load-System für Story

## Definition of Done
- [ ] User Story vollständig implementiert
- [ ] Funktioniert im Unity Editor
- [ ] Keine Console Errors
- [ ] Integrationstests bestanden
- [ ] Code kommentiert und dokumentiert

## Risiken & Blocker
- **Szenen-Integration:** Komplexe Übergänge zwischen Story-States → Einfache Szenen zuerst
- **Story-Persistenz:** States über Szenen hinweg erhalten → Robustes State-System
- **Performance:** Zwei Szenen gleichzeitig im Speicher → Optimiertes Laden

## Demo Criteria
Für Sprint Review:
1. Entscheidungsverwaltung und UI arbeiten nahtlos zusammen
2. Story-States beeinflussen UI-Updates korrekt
3. Beide Szenen sind mit Story-System verbunden
4. Szenen-Wechsel funktionieren mit Story-Kontinuität
5. Debug.Log zeigt vollständige Story-Integration

## Velocity Tracking
- Geschätzte Story Points: 35
- Verfügbarer Zeitraum: 4 Wochen
- Team-Kapazität: 1 Developer

## Retrospective Vorbereitung
- Was lief gut bei der Story-Integration?
- Was könnte bei der Szenen-Implementierung verbessert werden?
- Neue Erkenntnisse für visuelle Verbesserungen

---

## **Abhängigkeiten und Voraussetzungen**

### **Von Sprint 1 übernommen:**
- **US-1:** Entscheidungsverwaltung implementiert ✅
- **US-2:** Point&Click UI entwickelt ✅
- **Ink-Plugin:** Eingerichtet und konfiguriert ✅
- **Dialog-Manager:** Funktioniert ✅
- **Story-State-System:** Implementiert ✅

### **Für Sprint 2 erforderlich:**
- **Integrationstests:** US-4 Validierung der Komponenten-Zusammenarbeit
- **Szenen-Setup:** US-3Grundlagen für Story-Szenen
- **Story-Integration:** US-5End-to-End Story-Flüsse

### **Checklisten:**
- [ ] Sprint 1 Ergebnisse sind vollständig getestet
- [ ] Debug.Log Ausgaben aus Sprint 1 funktionieren
- [ ] Grundlegende UI-Interaktionen sind validiert
- [ ] Story-State-System ist stabil

---

## **Story-Flow für Sprint 2**

### **Integration Flow:**
1. **UI → Entscheidungsverwaltung:** Klicks lösen Story-Changes aus
2. **Story-States → UI:** UI reagiert auf Story-Änderungen
3. **Story → Szenen:** Story-States steuern Szenen-Wechsel
4. **Szenen → Story:** Szenen liefern Story-Kontext

### **Debug-Flow:**
```
[UI-Event] Button clicked: Choice_Gefährderin
[Story-State] stefania_trust: 0 → -1
[Story-State] police_prepared: false → true
[Cutscene] Player Perspective: Regina hat Stefania verraten
[Scene] Transition: Szene1_Hauptteil → Szene1_Outro
```

---

*Aktualisiert: 14.02.2026*  
*Fokus: Story-Integration mit Szenen-Grundlagen*
