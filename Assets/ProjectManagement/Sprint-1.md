# Sprint 1 - Story-Prototyp Foundation

**Zeitraum:** 2 Wochen  
**Sprint Goal:** Technische Grundlagen für atmosphärische Story-Szenen mit Point&Click-Interaktion und emotionaler Dichte schaffen

## Sprint Backlog

### User Stories (technische Fokussierung)

#### US-1: Entscheidungsverwaltung implementieren
**Als** Entwickler **möchte ich** ein funktionierendes Ink-Dialogsystem mit Story-States erstellen  
**Akzeptanzkriterien:**
- [ ] Unity Ink-Plugin ist eingerichtet und konfiguriert
- [ ] Dialog-Manager für Ink-Integration funktioniert
- [ ] Story-State-Lese-System ist implementiert
- [ ] Entscheidungs-Logging mit Story-Variablen funktioniert
- [ ] Debug.Log Ausgabe für alle Story-State-Änderungen in der Laufzeit

#### US-2: Point&Click UI entwickeln
**Als** Entwickler **möchte ich** eine funktionierende Point&Click UI mit Hover-Feedback erstellen  
**Akzeptanzkriterien:**
- [ ] Unity UI Canvas mit Image/Text Buttons ist eingerichtet
- [ ] Transparente Hitboxen mit Outline-Visualisierung funktionieren
- [ ] Hover-Feedback für Hotspots ist implementiert
- [ ] Click-Event-System für Interaktionen funktioniert

## Technical Tasks

### Dialog System (Sprint-1-Entscheidungsverwaltung)
- [ ] Unity Ink-Plugin einrichten und konfigurieren
- [ ] Dialog-Manager für Ink-Integration entwickeln
- [ ] Story-State-Lese-System implementieren
- [ ] Entscheidungs-Logging mit Story-Variablen
- [ ] Debug.Log Ausgabe für Story-State-Änderungen implementieren
- [ ] Cutscene-Tracking für Perspektiven-Wechsel
- [ ] Test-Dialoge für Regina-Stefania und Lukas-Kinder

### UI System (Sprint-1-PointClick-UI)
- [ ] Unity UI Canvas mit Image/Text Buttons einrichten
- [ ] Transparente Hitboxen mit Outline-Visualisierung
- [ ] Hover-Feedback für Hotspots implementieren
- [ ] Click-Event-System für Interaktionen
- [ ] UI-Layout für beide Szenen erstellen

### Game Logic
- [ ] GameManager für Story-Zustände
- [ ] Grundlegendes Save/Load-System
- [ ] Debug-System für Story-State-Tracking

## Definition of Done
- [ ] User Story vollständig implementiert
- [ ] Funktioniert im Unity Editor
- [ ] Keine Console Errors
- [ ] Unit-Tests bestanden
- [ ] Code kommentiert und dokumentiert

## Risiken & Blocker
- **Ink-Integration:** Unbekannte technische Herausforderungen → Frühe Prototypen
- **UI-Performance:** Langsame Response bei vielen Hotspots → Einfache UI zuerst
- **Story-Komplexität:** Emotionale Dichte schwer zu messen → Early User Testing

## Demo Criteria
Für Sprint Review:
1. Ink-Dialogsystem lädt und zeigt Dialoge korrekt an
2. Point&Click UI reagiert auf Klicks und Hover-Effekte
3. Entscheidungen werden gespeichert und beeinflussen Story-States
4. Debug.Log Ausgaben zeigen alle Story-State-Änderungen in der Konsole
5. Cutscene-Tracking zeigt Perspektiven-Wechsel des Spielers

## Velocity Tracking
- Geschätzte Story Points: 25
- Verfügbarer Zeitraum: 4 Wochen
- Team-Kapazität: 1 Developer

## Retrospective Vorbereitung
- Was lief gut bei der technischen Implementierung?
- Was könnte bei der Komponenten-Entwicklung verbessert werden?
- Neue Erkenntnisse für Sprint 2 Integration

---

## **Voraussetzungen für Sprint 2**

### **Abhängigkeiten:**
- **US-1 und US-2** müssen vollständig implementiert sein
- **Debug.Log System** muss stabil funktionieren
- **Story-State-System** muss robust sein
- **UI-Komponenten** müssen getestet sein

### **Checklisten für Sprint 2:**
- [ ] Ink-Dialogsystem ist stabil und fehlerfrei
- [ ] Point&Click UI reagiert zuverlässig
- [ ] Debug.Log Ausgaben sind vollständig und korrekt
- [ ] Story-States werden konsistent verwaltet
- [ ] Grundlegende Integrationstests bestehen

### **Übergabe an Sprint 2:**
- **Entscheidungsverwaltung:** Fertig für UI-Integration
- **Point&Click UI:** Fertig für Story-Integration
- **Debug-System:** Bereit für erweiterte Story-Flüsse
- **Technical Debt:** Keine offenen technischen Schulden

---

*Aktualisiert: 14.02.2026*  
*Fokus: Technische Grundlagen für Story-Prototyp*
