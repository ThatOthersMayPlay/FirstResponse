# GitHub Update - Sprint-Planung & Story-Development

**Datum:** 2026-02-14  
**Zweck:** Zusammenfassung der Sprint-Aufteilung und Story-Development Fortschritt

---

## 🔄 **Sprint-Aufteilung implementiert**

### **Sprint 1: Technische Grundlagen (4 Wochen)**
- **Fokus:** US-1 (Entscheidungsverwaltung) + US-2 (Point&Click UI)
- **Ziel:** Technische Grundlagen für Story-Szenen schaffen
- **Status:** Geplant, Arbeitsordner eingerichtet
- **Arbeitsordner:** 
  - `Sprint-1-Entscheidungsverwaltung/` (Ink-Integration, Story-States)
  - `Sprint-1-PointClick-UI/` (UI-Canvas, Button-System)

### **Sprint 2: Story-Integration (2 Wochen)**
- **Fokus:** US-4 (Integration) → US-3 (Szenen-Grundlagen) → US-5 (Story-Integration)
- **Ziel:** Vollständige Story-Integration mit Szenen-Wechseln
- **Status:** Geplant, abhängig von Sprint 1
- **Arbeitsordner:** `Sprint-2-Story-Integration/` (neu)

---

## 📁 **Story-Development Vault erweitert**

### **Vault-Struktur:**
```
Story-Development/
├── README.md (Vault-Übersicht)
├── Szene-1-Unfall-Schock-Fuehrung/
│   └── Szenen-Konzept.md (Regina's Perspektive)
│   └── Dialog-Optionen-Regina-Stefania.md
├── Szene-2-Ablenkung-Verantwortung/
│   └── Szenen-Konzept.md (Lukas' Perspektive)
│   └── Kinder-Interaktions-Design.md
└── Story-Development-Einrichtung.md
```

### **Story-Szenen finalisiert:**
- **Szene 1:** Regina's Führung mit indirekter Steuerung
- **Szene 2:** Lukas' Fahrt mit Fokuswechsel-Mechanik
- **Dialog-Optionen:** Detaillierte Entscheidungs-Verzweigungen
- **Kinder-Mechanik:** Golden Path mit elterlichem Kommentar

---

## 🎯 **Strategische Anpassungen**

### **Vision-Korrektur:**
- **Von:** Unfall-orientierte Erste-Hilfe-Simulation
- **Zu:** Atmosphärische Story mit emotionaler Dichte
- **Fokus:** Subtile Erste-Hilfe-Thematik statt direkter Simulation

### **Backlog-Konsolidierung:**
- **Epic 16:** "Emotional dichte Story-Erlebnisse"
- **Epic 1:** "Story-Prototyp Foundation"
- **Epic 3:** "Erweiterte Erste-Hilfe-Simulation" (entfernt)
- **Epic 5:** "Atmosphäre und Story-Immersion"

### **Character-Authentizität:**
- **Regina:** Visuelles Outro statt Monolog (introvertierte Art)
- **Lukas:** Müdigkeits-Effekte und nächtliche E-Mail-Situation
- **Dialog-Stil:** Monolog als Antwort (Fight Club/District 9/Notruf)

---

## 🔧 **Technische Spezifikationen**

### **Debug-Logging System:**
```
[Story-State] variableName: oldValue → newValue
[Story-State] Time: HH:mm:ss.fff
[Cutscene] Player Perspective: Stefania ist JVA-insassin...
[Decision] Choice: Gefährderin
[Decision] Consequence: Regina hat Stefania verraten...
```

### **Cutscene-Tracking:**
- **Perspektiven-Wechsel:** Spieler-Mentales Modell wird protokolliert
- **Story-States:** Alle Änderungen werden in der Laufzeit sichtbar
- **Integration:** UI-Reaktionen auf Story-States validiert

### **Ink-Story-Struktur:**
- **Intro → Hauptteil → Outro:** Dynamische Szenen-Struktur
- **Story-Variablen:** `stefania_trust`, `police_prepared`, `player_perspective`
- **Debug-Integration:** Kommentare in Ink für Protokollierung

---

## 📊 **Games BW Förderung**

### **MVP-Szenen für Konzeptphase:**
- **Szene 1:** "Unfall-Schock & Führung" (Regina's Perspektive)
- **Szene 2:** "Ablenkung & Verantwortung" (Lukas' Perspektive)
- **Innovation:** Indirekte Steuerung + Fokuswechsel-Mechanik
- **Emotionale Dichte:** 100% spürbare Wirkung

### **Technische Machbarkeit:**
- **Entwicklungszeit:** 4-6 Wochen für MVP-Demo
- **Kosten-Nachweis:** Unter 20.000€ realisierbar
- **Unity-Features:** Standard 2D-Tools, Audio-System, Ink-Integration

---

## 📝 **Nächste Schritte**

### **Sprint 1 (sofort):**
1. Ink-Plugin einrichten und konfigurieren
2. Unity UI Canvas mit Buttons erstellen
3. Story-State-System implementieren
4. Debug-Logging für Story-States

### **Sprint 2 (nach Sprint 1):**
1. Entscheidungsverwaltung mit UI integrieren
2. Unity-Szenen für Regina und Lukas erstellen
3. Story-Integration mit Szenen-Wechseln
4. End-to-End Story-Tests

### **Games BW Förderung:**
1. Konzeptdokumentation für Antrag
2. Partner-Validation mit Erste-Hilfe-Organisationen
3. Technical Demo als Proof-of-Concept
4. Antragsformulare ausfüllen (Frist: 10.07.2026)

---

## 🔄 **Änderungen gegenüber vorheriger Version**

### **Strategisch:**
- **Perspektivwechsel:** Regina statt Stefania als spielbarer Charakter
- **Müdigkeits-Aspekt:** Neue Gefahrenquelle für realistische Spannung
- **Golden Path:** Einfacher elterlicher Kommentar statt komplexer Pädagogik

### **Technisch:**
- **Debug-Logging:** Vollständige Story-State-Protokollierung
- **Cutscene-Tracking:** Perspektiven-Wechsel nachvollziehbar
- **Sprint-Aufteilung:** Klare Fokusssetzung mit Abhängigkeiten

### **Organisatorisch:**
- **Story-Development Vault:** Zentrale Dokumentation
- **Arbeitsordner:** Unabhängige Entwicklung von Komponenten
- **Backlog-Konsolidierung:** Entfernung veralteter Epics

---

*Zusammenfassung erstellt: 14.02.2026*  
*Status: Sprint-Planung abgeschlossen, bereit für Entwicklung*
