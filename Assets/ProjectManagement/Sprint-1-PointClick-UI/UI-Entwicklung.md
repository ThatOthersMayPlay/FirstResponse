# Point&Click UI - Sprint 1 Entwicklung

## 🎯 **Ziele**
- **Vorabversion:** Funktionsfähige UI ohne visuelle Perfektion
- **Einfache Buttons:** Keine Bilder, nur Text/Outline-Buttons
- **Iterativer Ansatz:** Nach Testen mit Verbesserungen neu angehen
- **Unabhängige Entwicklung:** Von Entscheidungsverwaltung getrennt

## 🛠️ **Technische Komponenten**

### **Unity UI Canvas Setup**
- **Canvas-Struktur:** Hierarchische Organisation für beide Szenen
- **Canvas-Scaler:** Responsive Design für verschiedene Bildschirmgrößen
- **Graphic Raycaster:** Klick-Detektion für UI-Elemente
- **EventSystem:** Input-Management für Maus/Touch-Interaktion

### **Button-System**
- **Unity UI Buttons:** Standard Button-Komponenten als Basis
- **Text-Buttons:** Beschriftung mit Unity TextMeshPro
- **Outline-Buttons:** Transparente Buttons mit visuellem Rahmen
- **Button-States:** Normal, Hover, Pressed, Disabled

### **Hotspot-Detektion**
- **Collider-System:** Unsichtbare Collider für Interaktionsbereiche
- **Mouse-Tracking:** Realzeit-Verfolgung der Cursor-Position
- **Hover-Effekte:** Visuelle Rückmeldung bei Mausüberfahrt
- **Click-Events:** Zuverlässige Klick-Erkennung

## 🎨 **UI-Design (Vorabversion)**

### **Button-Stile**
```csharp
// Einfache Button-Designs für Sprint 1
public enum ButtonStyle
{
    TextOnly,           // Nur Text, kein Hintergrund
    TextWithBackground,  // Text mit einfachem Farb-Hintergrund
    OutlineOnly,         // Nur Rahmen, transparenter Hintergrund
    HighlightOnHover     // Farbe ändert sich bei Hover
}
```

### **Farbschema**
- **Normal:** Grau (#808080)
- **Hover:** Blau (#0066CC)
- **Pressed:** Dunkelblau (#004499)
- **Disabled:** Hellgrau (#CCCCCC)
- **Outline:** Weiß (#FFFFFF) oder Schwarz (#000000)

### **Layout-Struktur**
```
Canvas
├── Szene1_Panel
│   ├── Dialog_Area
│   ├── Choice_Buttons
│   └── Hotspot_Overlay
└── Szene2_Panel
    ├── Dialog_Area
    ├── Choice_Buttons
    └── Hotspot_Overlay
```

## 🔄 **Interaktions-Flow**

### **1. Initialisierung**
- Canvas wird für aktuelle Szene aktiviert
- Button-Styles werden zugewiesen
- Hotspot-Collider werden eingerichtet

### **2. Hover-Detection**
- Maus-Position wird kontinuierlich getrackt
- Überprüft ob sich Maus über Button/Hotspot befindet
- Visueller Hover-Effekt wird ausgelöst

### **3. Click-Handling**
- Klick wird erkannt und verarbeitet
- Button-Action wird ausgelöst
- Event wird an Entscheidungsverwaltung gesendet

### **4. UI-Update**
- Basierend auf Story-States werden UI-Elemente aktualisiert
- Buttons werden ein/ausgeblendet
- Neue Hotspots werden aktiviert/deaktiviert

## 📋 **Implementierungs-Tasks**

### **Phase 1: Grundlagen (Woche 1)**
- [ ] Unity UI Canvas einrichten
- [ ] Button-Prefabs erstellen (Text, Outline)
- [ ] Grundlegendes Event-System implementieren
- [ ] Maus-Tracking für Hover-Effekte

### **Phase 2: Funktionalität (Woche 2)**
- [ ] Hotspot-Detektion mit Collidern
- [ ] Click-Event-System vervollständigen
- [ ] UI-Layout für beide Szenen erstellen
- [ ] Button-State-Visualisierungen

### **Phase 3: Integration (Woche 3)**
- [ ] Interface zur Entscheidungsverwaltung definieren
- [ ] UI-Events an Entscheidungs-System senden
- [ ] Story-State-gesteuerte UI-Updates
- [ ] Test-Szenen mit UI-Komponenten

### **Phase 4: Testing (Woche 4)**
- [ ] Komponenten-Tests durchführen
- [ ] Integration-Tests mit Entscheidungsverwaltung
- [ ] User-Testing mit Prototyp
- [ ] Feedback-Sammlung und Analyse

## 🧪 **Testing-Strategie**

### **Unit-Tests**
- **Button-Funktionalität:** Klick, Hover, States
- **Hotspot-Detektion:** Position, Größe, Klick-Zuordnung
- **Event-System:** Korrekte Weiterleitung von Events

### **Integration-Tests**
- **UI ↔ Entscheidungsverwaltung:** Korrekte Kommunikation
- **Story-State-Updates:** UI reagiert auf Zustandsänderungen
- **Szenen-Wechsel:** UI wird korrekt umgeschaltet

### **User-Tests**
- **Intuitivität:** Benutzer können UI ohne Anleitung bedienen
- **Performance:** Response-Zeiten und Flüssigkeit
- **Funktionalität:** Alle Interaktionen arbeiten wie erwartet

## 📊 **Performance-Ziele**

### **Response-Zeiten**
- **Button-Hover:** < 16ms (60 FPS)
- **Click-Verarbeitung:** < 50ms
- **UI-Update:** < 100ms

### **Memory-Usage**
- **UI-Objects:** < 100 GameObjects
- **Texturen:** < 10MB (einfache Farben/Outlines)
- **Scripts:** < 5MB kompilierter Code

## 🔄 **Nach-Sprint-Verbesserungen**

### **Visuelle Verbesserungen**
- **Button-Assets:** Professionelle Grafiken statt einfacher Farben
- **Animationen:** Smooth-Transitions, Hover-Effekte
- **Particle-Effekte:** Für Interaktions-Feedback

### **Erweiterte Funktionalität**
- **Touch-Unterstützung:** Für mobile Geräte
- **Accessibility:** Screen-Reader, Keyboard-Navigation
- **Multi-Language:** Internationalisierung der UI-Texte

### **Performance-Optimierung**
- **Object-Pooling:** Für häufige UI-Updates
- **Lazy Loading:** UI-Elemente nur bei Bedarf laden
- **Async-Operationen:** UI-Updates ohne Frame-Drops

---

## 📝 **Dokumentation**

### **Code-Dokumentation**
- **API-Referenz:** Alle öffentlichen Methoden dokumentiert
- **Usage-Beispiele:** Typische Anwendungsfälle
- **Best Practices:** Empfohlene Implementierungsmuster

### **Design-Dokumentation**
- **UI-Guidelines:** Konsistente Design-Prinzipien
- **Interaction-Patterns:** Wiedererkennbare Interaktionsmuster
- **Accessibility-Standards:** Barrierefreie Gestaltung

---

*Erstellt: 14.02.2026*  
*Focus: Point&Click UI Vorabversion*  
*Duration: 4 Wochen*
