# Development Workflow & File Management

## 🔄 **Entwicklungs-Ablauf**

### **Grundprinzip:**
- **Entwicklung direkt im richtigen Ordner:** `Assets/Scripts/Tools/`
- **Dokumentation im Projektmanagement:** `Assets/ProjectManagement/`
- **Keine redundanten Ablagen:** Scripts nur an einem Ort

---

## 📁 **Ordner-Struktur & Verantwortlichkeiten**

### **Development Ordner (direkte Entwicklung)**
```
Assets/
├── Scripts/
│   ├── Tools/                    # Sprint 1: Dialog-System
│   │   ├── DialogManager.cs      # Hier entwickeln (+ .meta)
│   │   └── DialogChoiceHandler.cs # Hier entwickeln (+ .meta)
│   ├── Core/                     # Sprint 2: Spiel-Logik
│   ├── UI/                       # Sprint 2: Benutzeroberfläche
│   └── README.md                 # Struktur-Dokumentation
└── Story/
    └── ReginaStefania.ink        # Hier entwickeln (+ .meta)
```

> **⚠️ Wichtig:** Unity-Assets benötigen .meta Dateien! ProjectManagement hat keine .meta Dateien.

### **ProjectManagement Ordner (Dokumentation)**
```
Assets/ProjectManagement/
├── Sprint-1.md                   # Sprint-Plan & Backlog
├── Sprint-1-Status.md            # Status-Analyse
├── Sprint-1-Ink-Setup.md         # Setup-Anleitung
├── Sprint-1-Entscheidungsverwaltung/
│   └── Entscheidungs-Management.md # Technische Spezifikation
├── Sprint-1-PointClick-UI/
│   └── UI-Entwicklung.md         # UI-Spezifikation
├── HTML-Ink-Schnittstelle.md     # Schnittstellen-Design (HTML-Point&Click ↔ Ink)
└── Story-Development/            # Story-Content
    └── Szene-1-Unfall-Schock-Fuehrung/
        └── Szenen-Konzept.md
```

---

## 🌐 **HTML-Prototyp-Entwicklung (HTML-first MVP, ab 2026-08-15)**

### **Grundprinzip:**
- **Story bleibt nur in Ink:** `Assets/Story/*.ink` ist die einzige Story-Quelle
- **HTML-Prototyp nur Präsentation:** `Assets/HTML-Prototype/` rendert & interagiert, enthält keine Story-Logik
- **Schnittstelle:** [HTML-Ink-Schnittstelle.md](HTML-Ink-Schnittstelle.md) ist verbindlich
- **Keine zweite Story-Engine:** inkjs im Browser, identisch zu Unity

### **Ablage:**
```
Assets/
├── HTML-Prototype/               # HTML-Point&Click-MVP
│   ├── index.html                # Spielfläche (Point&Click-Canvas)
│   ├── inkjs.min.js              # Ink-Engine (lokal, keine CDN)
│   ├── scenes/                   # Szenen-Bilder (PNG-Platzhalter)
│   ├── hotspots.json             # Hotspot-Definitionen pro Szene
│   └── assets/                   # Audio (MP3/OGG, optional)
└── Story/                        # Story-Content (Ink – single source of truth)
```

### **Regeln:**
1. Story-Änderungen nur in `Assets/Story/*.ink` (JSON→Ink-Workflow über JsonInkConverter)
2. HTML-Prototyp liest Ink, schreibt nie Story-Logik
3. `inkjs.min.js` immer lokal ablegen (offline-fähig, GDPR-konform)
4. Szenen-Bilder als PNG (web-tauglich, keine Unity-Texte) – Erzeugung über lokale Stable-Diffusion-API, siehe [Asset-Generierung-StableDiffusion.md](Asset-Generierung-StableDiffusion.md)
5. Hotspots über `hotspots.json`, jeder Hotspot = genau ein Ink-Choice
6. Deployment über GitHub Pages (sofort spielbar)
7. Konsistenz: HTML-Ergebnis muss Unity-Story-Pfaden entsprechen (Validierung)

---

## 🎯 **Development Workflow**

### **1. Sprint-Planung (ProjectManagement)**
```
1. Sprint-1.md aktualisieren
2. Technical Tasks definieren
3. User Stories erstellen
4. Akzeptanzkriterien festlegen
```

### **2. Entwicklung (direkt in Assets/)**
```
1. Script erstellen in Assets/Scripts/Tools/
2. Story erstellen in Assets/Story/
3. Direkt im Unity Editor testen
4. Debug-Logs überprüfen
```

### **3. Dokumentation (ProjectManagement)**
```
1. Sprint-1-Status.md aktualisieren
2. Sprint-1-Ink-Setup.md anpassen
3. Entscheidungs-Management.md ergänzen
4. GitHub-Update erstellen
```

---

## 🧩 **Story JSON Effects (JsonUtility-konform)**

### **Regeln (verbindlich)**
- `choices[].effects` ist **immer** ein Array von Objekten (keine Strings)
- Jeder Effect definiert **genau einen** Typ:
  - `{ "raw": "stefania_trust += 1" }`
  - `{ "assign": { "variable": "player_perspective", "value": "Text" } }`
  - `{ "function": { "name": "DoThing", "parameters": [] } }`
- **Keine** gemischten Typen in Arrays (`["string", { ... }]` ist verboten)
- Kein `type`-Feld in Effects (der Key `raw/assign/function` ist die Typinformation)

---

## 🔄 **Update-Prozess**

### **Keine redundanten Ablagen mehr:**
- **❌ Alt:** Scripts in ProjectManagement → Assets/Scripts/ kopieren
- **✅ Neu:** Direkt in Assets/Scripts/ entwickeln

### **Dokumentation-Update:**
```
Wenn Script geändert wird:
1. Code direkt in Assets/Scripts/Tools/ bearbeiten
2. Projektmanagement-Dokumentation aktualisieren
3. Status in Sprint-1-Status.md anpassen
4. GitHub-Update bei Meilensteinen
```

---

## 📋 **Arbeitsabläufe pro Sprint**

### **Sprint 1 (Dialog-System)**
```
Entwicklung:
├── Assets/Scripts/Tools/DialogManager.cs
├── Assets/Scripts/Tools/DialogChoiceHandler.cs
└── Assets/Story/ReginaStefania.ink

Dokumentation:
├── Sprint-1.md (Sprint-Plan)
├── Sprint-1-Status.md (Fortschritt)
├── Sprint-1-Ink-Setup.md (Anleitung)
└── Entscheidungs-Management.md (Spezifikation)
```

### **Sprint 2 (Story-Integration)**
```
Entwicklung:
├── Assets/Scripts/Core/GameManager.cs
├── Assets/Scripts/Core/SceneLoader.cs
├── Assets/Scripts/UI/UIManager.cs
└── Assets/Story/Szene2-Lukas.ink

Dokumentation:
├── Sprint-2.md (Sprint-Plan)
├── Sprint-2-Status.md (Fortschritt)
└── Story-Development/ (Story-Content)
```

---

## 🎯 **Vorteile dieses Workflows**

### **Keine Redundanz:**
- Scripts nur an einem Ort
- Keine doppelte Pflege
- Immer aktuelle Version

### **Klarheit:**
- Development = Code
- ProjectManagement = Dokumentation
- Eindeutige Verantwortlichkeiten

### **Effizienz:**
- Direkt im Unity Editor testen
- Kein Kopieren/verschieben nötig
- Schnelle Iterationen möglich

### **Version Control:**
- Git tracking nur für Code-Änderungen
- Dokumentation separat versioniert
- Klare Commit-Historie

---

## 🔄 **Best Practices**

### **Code-Entwicklung:**
1. **Direkt im richtigen Ordner** arbeiten
2. **Unity Editor** für schnelles Testen
3. **Debug-Logs** für Validierung
4. **Git Commits** nach Meilensteinen
5. **Meta-Dateien** immer mit verschieben/löschen

> **⚠️ Wichtig:** Beim Verschieben von Unity-Assets immer die .meta Dateien mit verschieben! Siehe [Unity-Meta-Management.md](Unity-Meta-Management.md)

### **Dokumentation:**
1. **ProjectManagement** für Planung und Status
2. **Regelmäßige Updates** bei Fortschritt
3. **GitHub-Updates** bei wichtigen Meilensteinen
4. **Sprint-Reviews** mit Demo

### **Quality Assurance:**
1. **Code-Review** vor Sprint-Ende
2. **Demo-Kriterien** überprüfen
3. **Debug-Logs** analysieren
4. **User Stories** validieren

---

## 📊 **Status nach Workflow-Änderung**

### **Aufgeräumt:**
- [x] Redundante Scripts entfernt
- [x] Klare Ordner-Struktur etabliert
- [x] Development Workflow definiert

### **Bereit für Sprint 1:**
- [x] Scripts in richtigen Ordnern
- [x] Dokumentation getrennt
- [x] Workflow etabliert

---

## 🎯 **Empfehlung**

### **Für Sprint 1:**
1. **Direkt in Assets/Scripts/Tools/ entwickeln**
2. **ProjectManagement nur für Dokumentation**
3. **Keine redundanten Ablagen mehr**

### **Für zukünftige Sprints:**
1. **Workflow beibehalten**
2. **Bei Bedarf erweitern**
3. **Regelmäßig optimieren**

---

*Workflow definiert: 21.02.2026*  
*Status: Keine Redundanzen mehr, klarer Arbeitsablauf*
