# Scripts Ordner Struktur

## 📁 **Assets/Scripts/**

### **Tools/ (Dialog-System)**
- **DialogManager.cs:** Haupt-Script für Ink-Integration
- **DialogChoiceHandler.cs:** UI-Button Handler für Dialog-Optionen

### **Zukünftige Kategorien:**

#### **Core/ (Spiel-Logik)**
- **GameManager.cs:** Zentrale Spiel-Steuerung
- **SceneLoader.cs:** Szenen-Wechsel-Management
- **SaveSystem.cs:** Spielstand-Verwaltung

#### **UI/ (Benutzeroberfläche)**
- **UIManager.cs:** UI-Koordinierung
- **ButtonHandler.cs:** Allgemeine Button-Logik
- **HoverEffect.cs:** Hover-Feedback für Point&Click

#### **Character/ (Charakter-System)**
- **CharacterController.cs:** Charakter-Steuerung
- **CharacterAnimator.cs:** Animations-Steuerung
- **DialogueController.cs:** Charakter-spezifische Dialoge

#### **Audio/ (Audio-System)**
- **AudioManager.cs:** Audio-Koordinierung
- **SoundEffects.cs:** Sound-Effekte
- **BackgroundMusic.cs:** Hintergrundmusik

#### **Utilities/ (Hilfs-Scripts)**
- **DebugLogger.cs:** Erweiterte Debug-Logging
- **EventSystem.cs:** Event-Management
- **Singleton.cs:** Singleton-Pattern Basis

---

## 🎯 **Sprint 1 Fokus: Tools/**

### **Aktuell:**
```
Assets/Scripts/Tools/
├── DialogManager.cs (Ink-Integration)
└── DialogChoiceHandler.cs (UI-Handler)
```

### **Sprint 1 Ziel:**
- Dialog-System vollständig implementieren
- Debug-Logging für Story-States
- UI-Integration mit Point&Click

### **Sprint 2 Erweiterung:**
```
Assets/Scripts/Core/
├── GameManager.cs
└── SceneLoader.cs

Assets/Scripts/UI/
├── UIManager.cs
└── HoverEffect.cs
```

---

## 🔄 **Unity-konforme Struktur**

### **Vorteile:**
- **Übersichtlichkeit:** Klare Trennung nach Funktionsbereichen
- **Wartbarkeit:** Leicht zu finden und zu erweitern
- **Team-Arbeit:** Verschiedene Entwickler können an verschiedenen Bereichen arbeiten
- **Skalierbarkeit:** Einfach neue Kategorien hinzuzufügen

### **Best Practices:**
- **Keine zirkulären Abhängigkeiten:** Tools → Core → UI → Character
- **Klare Verantwortlichkeiten:** Jeder Ordner hat einen spezifischen Zweck
- **Dokumentation:** README.md in jedem Ordner mit Beschreibung
- **Tests:** Unit-Tests in entsprechenden Ordnern

---

*Erstellt: 21.02.2026*  
*Status: Tools/ Ordner erstellt, Sprint 1 bereit*
