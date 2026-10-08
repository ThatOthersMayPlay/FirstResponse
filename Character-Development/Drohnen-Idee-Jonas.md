# Drohnen-Idee für Szene 2 - Lukas & Kinder

## 💡 **Story-Idee: Drohne als Rettungswerkzeug**

### **Konzept:**
Der Teenager-Sohn von Lukas hat eine Drohne dabei, die bisher nur als Spielzeug diente. In der kritischen Situation kann die Drohne für eine Rettungsaktion eingesetzt werden.

### **Story-Kontext:**
- **Szene:** "Ablenkung & Verantwortung" mit Lukas und seinen Kindern
- **Situation:** Autofahrt mit Fokuswechsel zwischen Handy und Straße
- **Konflikt:** Plötzliche Notwendigkeit, die Drohne einzusetzen

### **Mögliche Szenarien:**

#### **1. Unfall-Sichtung**
- **Situation:** Drohne entdeckt einen Unfall aus der Luft
- **Entscheidung:** Lukas muss zwischen Weiterfahren und Helfen wählen
- **Drohnen-Einsatz:** Überfliegen der Unfallstelle für bessere Einschätzung

#### **2. Verlorene Person**
- **Situation:** Kind verläuft sich, Drohne kann aus der Luft suchen
- **Gameplay:** Spieler steuert Drohne über Touch-Interface
- **Konsequenz:** Schnelle Rettung vs. Zeitverlust

#### **3. Kommunikations-Hilfe**
- **Situation:** Handy-Verbindung schlecht, Drohne als Relais
- **Mechanik:** Drohne positioniert sich für besseren Empfang
- **Story-Impact:** Entscheidung über Prioritäten

### **Gameplay-Mechaniken:**

#### **Drohnen-Steuerung:**
- **Point&Click Interface:** Einfache Steuerung per Touch/Klick
- **Fokuswechsel:** Zwischen Drohnen-Sicht und Auto-Sicht
- **Energie-Management:** Begrenzte Flugzeit für Spannung

#### **Entscheidungs-Verzweigungen:**
```ink
VAR drone_used = false
VAR rescue_success = false
VAR time_pressure = high

=== Drone_Choice ===
* {"Drohne einsetzen"} -> Drone_Rescue
* {"Weiterfahren"} -> Continue_Driving

=== Drone_Rescue ===
~ drone_used = true
// Gameplay: Drohnen-Steuerung
// Debug.Log: [Decision] Drohne eingesetzt - Spieler wählt Rettung
```

### **Character-Entwicklung:**
- **Teenager:** Von Spielzeug zu ernstem Werkzeug
- **Lukas:** Stolz auf Sohn vs. Sorge um Sicherheit
- **Dynamik:** Kind wird zum Helden in der Notlage

### **Emotionale Dichte:**
- **Spannung:** Drohnen-Einsatz gegen die Zeit
- **Stolz:** Vater sieht Sohn als verantwortungsvoll
- **Moral:** Spielzeug wird zum Lebensretter

### **Technical Implementation:**
- **Unity:** Einfache Drohnen-Physik mit Rigidbody
- **Camera:** Switch zwischen Auto-Kamera und Drohnen-Kamera
- **UI:** Drohnen-Steuerung mit Point&Click Interface
- **Story:** Ink-Integration für Entscheidungs-Verzweigungen

### **Integration in Sprint 2:**
- **Szene 2:** Drohnen-Mechanik als zusätzliche Herausforderung
- **Gamist-Element:** Skill-basierte Drohnen-Steuerung
- **Story-Verzweigung:** Verschiedene Endings basierend auf Drohnen-Einsatz

---

## 💭 **Story-Potenzial**

### **Themen:**
- **Verantwortung:** Spielzeug wird zum ernsten Werkzeug
- **Generationen:** Vater sieht Kind als kompetent
- **Innovation:** Moderne Technologie in Rettungssituation

### **Konflikte:**
- **Zeitdruck:** Drohnen-Einsatz kostet wertvolle Zeit
- **Risiko:** Drohne könnte abstürzen oder verloren gehen
- **Prioritäten:** Rettung vs. eigene Sicherheit

### **Moralische Fragen:**
- **Wann ist ein Risiko gerechtfertigt?**
- **Kann Technologie menschliches Handeln ersetzen?**
- **Wie viel Verantwortung kann ein Teenager übernehmen?**

---

## 🎮 **Gameplay-Varianten**

### **Einfach:**
- **Drohnen-Sicht:** Nur Beobachten aus der Luft
- **Entscheidung:** Einsetzen oder nicht einsetzen

### **Mittel:**
- **Steuerung:** Einfache Point&Click Steuerung
- **Ziele:** Bestimmte Bereiche überfliegen

### **Komplex:**
- **Voll-Steuerung:** Drohne frei steuerbar
- **Herausforderungen:** Wind, Hindernisse, Energie

---

## 📝 **Integration in Story-Development**

### **Placement:**
- **Szene 2:** Nach Handy-Konflikt, vor Haupt-Entscheidung
- **Timing:** Als überraschende Wendung in der Story
- **Impact:** Verändert den gesamten Handlungsverlauf

### **Character-Arc:**
- **Teenager:** Von unsicher zu selbstbewusst
- **Lukas:** Von kontrollierend zu vertrauend
- **Beziehung:** Neue Dynamik zwischen Vater und Sohn

---

*Erstellt: 21.02.2026*  
*Status: Story-Idee für Szene 2, Integration in Sprint 2 geplant*
