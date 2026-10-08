# Sprint 2: Story-Integration & Szenen-Grundlagen

## 🎯 **Sprint-Ziele**
- **Ziel:** Integration von Entscheidungsverwaltung und UI mit Story-Szenen-Grundlagen
- **Fokus:** Vollständige Story-Integration mit Szenen-Wechseln
- **Dauer:** 2 Wochen (verkürzt)
- **Story-Fokus:** Atmosphärische Szenen mit emotionaler Dichte

## 📁 **Arbeitsordner-Struktur**

### **Sprint-1-Entscheidungsverwaltung/** (übernommen)
- **Status:** In Entwicklung aus Sprint 1
- **Zuständigkeit:** Story-Entscheidungen, Konsequenzen-System
- **Technologie:** Unity Ink-Integration, Story-State-Management

### **Sprint-1-PointClick-UI/** (übernommen)
- **Status:** In Entwicklung aus Sprint 1
- **Zuständigkeit:** UI-System, Hotspot-Interaktion, Interface-Design
- **Technologie:** Unity UI Canvas, Button-System, Hover-Feedback

### **Sprint-2-Story-Integration/** (neu)
- **Zuständigkeit:** Szenen-Setup, Story-Integration, Cutscene-Tracking
- **Technologie:** Unity Szenen, Story-States, Debug-Logging
- **Aufgaben:** Szenen-Wechsel, Story-Persistenz, End-to-End Tests

## 🎮 **MVP-Scope für Sprint 2**

### **Story-Integration:**
- [ ] Entscheidungsverwaltung mit UI verbinden
- [ ] Story-State-gesteuerte UI-Aktualisierung
- [ ] Debug.Log Ausgabe für UI-Reaktionen auf Story-States
- [ ] Grundlegende Integrationstests
- [ ] Fehlerbehandlung für Integration

### **Szenen-Grundlagen:**
- [ ] Unity-Szene "Szene1-Regina" erstellen (Leitstellen-Setup)
- [ ] Unity-Szene "Szene2-Lukas" erstellen (Auto-Cockpit)
- [ ] Platzhalter-Assets für beide Szenen
- [ ] Environment-Lighting für atmosphärische Stimmung
- [ ] Szenen-Wechsel-System implementieren

### **Story-Integration erweitert:**
- [ ] Ink-Dialoge in beide Szenen integrieren
- [ ] Story-States mit Szenen-Logik verbinden
- [ ] Cutscene-Tracking in beiden Szenen
- [ ] Debug.Log für vollständige Story-Flüsse
- [ ] End-to-End Story-Tests

## 🔄 **Abhängigkeiten von Sprint 1**

### **Übernommene Komponenten:**
- **Entscheidungsverwaltung:** In Entwicklung aus Sprint 1
- **Point&Click UI:** In Entwicklung aus Sprint 1
- **Debug-System:** In Entwicklung für Story-State-Tracking
- **Test-Dialoge:** Regina-Stefania und Lukas-Kinder

### **Voraussetzungen:**
- Alle Story-State-Änderungen werden protokolliert
- UI reagiert zuverlässig auf Interaktionen
- Ink-Dialogsystem ist stabil und fehlerfrei
- Grundlegende Integrationstests bestehen

## 📋 **Definition of Done**

### **Story-Integration:**
- [ ] UI reagiert auf Entscheidungs-System
- [ ] Story-States steuern UI-Aktualisierungen
- [ ] Szenen-Wechsel funktionieren mit Story-Kontinuität
- [ ] Debug.Log zeigt vollständige Story-Integration

### **Szenen-Grundlagen:**
- [ ] Beide Szenen sind mit Story-System verbunden
- [ ] Szenen-Wechsel sind nahtlos
- [ ] Atmosphärische Stimmung ist erreicht
- [ ] Platzhalter-Assets sind funktional

### **End-to-End:**
- [ ] Story-Fluss funktioniert über beide Szenen hinweg
- [ ] Entscheidungen beeinflussen Szenen-Übergänge
- [ ] Cutscene-Tracking funktioniert vollständig
- [ ] Debug.Log zeigt vollständige Story-Flüsse

## 🎯 **Erfolgsmetriken**

### **Quantitativ:**
- **Story-Integration:** 100% der Story-States beeinflussen UI
- **Szenen-Wechsel:** < 2 Sekunden Ladezeit
- **Debug-Abdeckung:** Alle Story-Änderungen protokolliert

### **Qualitativ:**
- **Story-Kontinuität:** Nahtlose Übergänge zwischen Szenen
- **Emotionale Dichte:** Atmosphärische Immersion spürbar
- **Debug-Nachvollziehbarkeit:** Story-Flüsse vollständig nachvollziehbar

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

*Erstellt: 14.02.2026*  
*Status: Sprint 2 Planung, aufbauend auf Sprint 1*
