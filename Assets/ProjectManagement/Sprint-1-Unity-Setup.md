# Sprint 1 - Unity Setup Checkliste

## ✅ **Unity Editor Status**
- **Version:** 6.3.9 LTS (erfolgreich geladen)
- **Projekt:** Auf neue Version aktualisiert
- **Status:** Bereit für Ink-Installation

## 🔄 **Nächste Schritte**

### **1. Ink-Plugin Installation**
```
Window → Asset Store → "Ink" → Install
```

### **2. Grundlegendes Setup**
- **Szene erstellen:** `Szene1-Regina` und `Szene2-Lukas`
- **Canvas hinzufügen:** `GameObject → UI → Canvas`
- **Ink-Datei erstellen:** `Assets/Story/ReginaStefania.ink`

### **3. Test-Dialog (minimal)**
```ink
// Regina-Stefania Test-Dialog
VAR stefania_trust = 0

=== Szene1_Intro ===
Regina: "Stefania, bleiben Sie bei der Person!"
Stefania: "Ich... ich kann nicht. Die Polizei kommt!"

* {"Gefährderin"} -> ReginaWarntPolizei
* {"Beruhigen"} -> ReginaBeruhigtStefania

=== ReginaWarntPolizei ===
Regina: (funk) "Achtung, Person könnte gewaltbereit sein."
~ stefania_trust -= 1
// Debug.Log: [Decision] Gefährderin - Spieler wählt Vorsicht vor Vertrauen

=== ReginaBeruhigtStefania ===
Regina: "Alles ist gut. Kein Grund zur Panik."
~ stefania_trust += 1
// Debug.Log: [Decision] Beruhigen - Spieler wählt Vertrauen vor Vorsicht
```

### **4. Debug.Log System**
```csharp
// In Awake() Methode
Debug.Log("Sprint 1: Entscheidungsverwaltung initialisiert");
Debug.Log("Sprint 1: Point&Click UI eingerichtet");
```

## 📋 **Sprint 1 Tasks nach Ink-Installation**

### **US-1: Entscheidungsverwaltung**
- [ ] Ink-Plugin konfigurieren
- [ ] Dialog-Manager erstellen
- [ ] Story-State-System implementieren
- [ ] Debug.Log für Story-Changes

### **US-2: Point&Click UI**
- [ ] UI Canvas mit Buttons
- [ ] Hover-Feedback implementieren
- [ ] Click-Events für Dialoge

### **Demo Criteria**
- [ ] Ink-Dialoge laden und anzeigen
- [ ] UI reagiert auf Klicks
- [ ] Debug.Log zeigt Story-Changes

---

*Erstellt: 21.02.2026*  
*Status: Unity bereit, Ink wird installiert*
