# Entscheidungsverwaltung - Sprint 1 Entwicklung

## 🎯 **Ziele**
- **Ink-Integration:** Dialog-System mit Story-Verzweigungen
- **Story-State-Management:** Zustände und Konsequenzen verwalten
- **Entscheidungs-Logging:** Spieler-Entscheidungen speichern
- **Konsequenzen-System:** Auswirkungen auf nachfolgende Szenen
- **Iterativer Ansatz:** Nach Testen mit Verbesserungen neu angehen

## 🛠️ **Technische Komponenten**

### **Unity Ink Plugin Setup**
- **Ink-Integration:** Unity Ink Plugin einrichten und konfigurieren
- **JSON-Compiler:** Ink-Dateien in Unity-ladbare Formate umwandeln
- **Story-Loader:** Dynamisches Laden von Ink-Story-Dateien
- **Variable-System:** Story-Variablen für Entscheidungs-Tracking

### **Dialog-Manager**
- **Story-Execution:** Ink-Story ausführen und verwalten
- **Choice-Handling:** Dialog-Optionen extrahieren und präsentieren
- **Flow-Control:** Story-Verzweigungen steuern
- **State-Synchronization:** UI mit Story-States synchronisieren

### **Story-State-System**
- **State-Container:** Zentrale Verwaltung aller Story-Zustände
- **Variable-Tracking:** Änderungen an Story-Variablen überwachen
- **State-Persistence:** States speichern und laden
- **Event-System:** Benachrichtigung bei State-Änderungen
- **Debug-Logging:** Debug.Log Ausgabe für alle Story-State-Änderungen in der Laufzeit
- **Cutscene-Tracking:** Story-States für Cutscenes und Perspektiven-Wechsel

## 📋 **Story-Struktur für MVP**

### **Szene 1: Regina-Stefania Dialog**
```ink
// Beispiel-Struktur für Regina-Stefania Telefonat
VAR stefania_trust = 0
VAR police_prepared = false
VAR first_aid_speed = 1
VAR player_perspective = ""

// Cutscene Story-States
-> Szene1_Intro

=== Szene1_Intro ===
// Justizbeamtin Monolog über Stefania
// Spieler erfährt Stefania's Hintergrund
~ player_perspective = "Stefania ist JVA-insassin, wahrscheinlich flüchtig"
// Debug.Log: [Cutscene] Intro-Monolog - Spieler weiß über Stefania's Hintergrund

-> Szene1_Hauptteil

=== Szene1_Hauptteil ===
Regina: "Stefania, bleiben Sie bei der Person!"
Stefania: "Ich... ich kann nicht. Die Polizei kommt!"
Regina: "Die Polizei ist nur zur Hilfe da."

* {"Gefährderin"} -> ReginaWarntPolizei
* {"Beruhigen"} -> ReginaBeruhigtStefania
* {"Drängen"} -> ReginaDrängtStefania

=== ReginaWarntPolizei ===
Regina: (funk) "Achtung, Person könnte gewaltbereit sein."
// Polizisten sind vorbereitet
~ stefania_trust -= 1
~ police_prepared = true
~ player_perspective = "Regina hat Stefania verraten, Konsequenzen absehbar"
// Debug.Log: [Decision] Gefährderin - Spieler wählt Vorsicht vor Vertrauen

=== ReginaBeruhigtStefania ===
Regina: "Alles ist gut. Kein Grund zur Panik."
// Stefania beruhigt sich
~ stefania_trust += 1
~ player_perspective = "Regina beruhigt Stefania, Vertrauen steigt"
// Debug.Log: [Decision] Beruhigen - Spieler wählt Vertrauen vor Vorsicht

=== ReginaDrängtStefania ===
Regina: "Jetzt sofort helfen Sie!"
// Stefania's Panik wächst
~ stefania_trust -= 2
~ first_aid_speed = 2
```

### **Szene 2: Lukas-Kinder Interaktion**
```ink
// Beispiel-Struktur für Lukas' Fahrt
VAR handy_usage_time = 0
VAR children_conflict_level = 0
VAR focus_lost = false

-> Szene2_Intro

=== Szene2_Intro ===
// Lukas schreibt E-Mail nachts
// Teenager kommt beim Toilettengang

-> Szene2_Hauptteil

=== Szene2_Hauptteil ===
// Handy-Nachricht kommt alle 30-45 Sekunden
// Kinder streiten über Musik

* {"Handy checken"} -> PlayerUsesHandy
* {"Kinder schlichten"} -> PlayerCalmsChildren
* {"Straße fokussieren"} -> PlayerFocusesRoad

=== PlayerUsesHandy ===
~ handy_usage_time += 5
~ children_conflict_level += 1
// Risiko für Unfall steigt

=== PlayerCalmsChildren ===
// "Später darfst du auch deine Musik hören."
~ children_conflict_level -= 2
// Konflikt wird gelöst

=== PlayerFocusesRoad ===
~ focus_lost = false
// Sicherheit wiederhergestellt
```

## 🔄 **Entscheidungs-Flow**

### **1. Story-Initialisierung**
- Ink-Story wird geladen
- Start-Variablen werden gesetzt
- Dialog-Manager wird initialisiert

### **2. Dialog-Präsentation**
- Aktuelle Textzeile wird angezeigt
- Verfügbare Optionen werden extrahiert
- UI wird mit Choices aktualisiert

### **3. Spieler-Entscheidung**
- Spieler wählt Option
- Choice wird an Ink übergeben
- Story wird fortgesetzt

### **4. State-Updates**
- Variablen werden aktualisiert
- Events werden ausgelöst
- UI wird synchronisiert
- **Debug.Log Ausgabe:** Alle State-Änderungen werden in Konsole protokolliert

### **Debug-Logging Implementierung:**
```csharp
// Beispiel für Debug.Log Ausgaben
public void UpdateStoryVariable(string variableName, object newValue)
{
    var oldValue = GetStoryVariable(variableName);
    SetStoryVariable(variableName, newValue);
    
    Debug.Log($"[Story-State] {variableName}: {oldValue} → {newValue}");
    Debug.Log($"[Story-State] Time: {System.DateTime.Now:HH:mm:ss.fff}");
    
    // UI-Update auslösen
    OnStoryStateChanged?.Invoke(variableName, newValue);
}

public void UpdatePlayerPerspective(string perspective)
{
    SetStoryVariable("player_perspective", perspective);
    
    Debug.Log($"[Cutscene] Player Perspective: {perspective}");
    Debug.Log($"[Cutscene] Time: {System.DateTime.Now:HH:mm:ss.fff}");
    
    // UI-Update auslösen
    OnPlayerPerspectiveChanged?.Invoke(perspective);
}

public void LogDecision(string choice, string consequence)
{
    Debug.Log($"[Decision] Choice: {choice}");
    Debug.Log($"[Decision] Consequence: {consequence}");
    Debug.Log($"[Decision] Time: {System.DateTime.Now:HH:mm:ss.fff}");
}
```

### **5. Konsequenzen-Verarbeitung**
- Auswirkungen werden berechnet
- Nachfolgende Szenen werden vorbereitet
- States werden gespeichert

## 🧪 **Testing-Strategie**

### **Unit-Tests**
- **Ink-Integration:** Korrektes Laden und Ausführen
- **Variable-System:** Korrekte Speicherung und Abrufung
- **Choice-Handling:** Alle Optionen werden korrekt verarbeitet

### **Integration-Tests**
- **UI ↔ Dialog-Manager:** Korrekte Kommunikation
- **State-Synchronization:** UI reagiert auf Story-Änderungen
- **Konsequenzen-System:** Auswirkungen werden korrekt berechnet

### **Story-Tests**
- **Dialog-Flüsse:** Alle Pfade werden getestet
- **Variablen-Tracking:** Entscheidungen beeinflussen korrekt nachfolgende Szenen
- **End-Szenarien:** Alle möglichen Enden werden erreicht

## 📊 **Performance-Ziele**

### **Ladezeiten**
- **Story-Loading:** < 500ms für Ink-Dateien
- **Choice-Extraction:** < 50ms für Options-Generierung
- **State-Updates:** < 100ms für UI-Synchronisation

### **Memory-Usage**
- **Story-Data:** < 5MB für alle Szenen
- **Variable-Storage:** < 1MB für State-Tracking
- **Event-System:** < 2MB für Event-Management

## 🔄 **Nach-Sprint-Verbesserungen**

### **Erweiterte Funktionalität**
- **Save/Load-System:** Komplettes Spiel speichern/laden
- **Debug-Tools:** Story-Visualisierung und Debug-Informationen
- **Performance-Monitoring:** Laufzeit-Analyse und Optimierung

### **Story-Features**
- **Bedingte Logik:** Komplexere Bedingungen für Entscheidungen
- **Zeitgesteuerte Events:** Zeitabhängige Story-Elemente
- **Multi-Language:** Internationalisierung der Dialoge

### **Integration-Features**
- **Audio-Integration:** Dialoge mit Ton synchronisieren
- **Animation-System:** Story-gesteuerte Animationen
- **UI-Adaptation:** Dynamische UI-Anpassung basierend auf Story

---

## 📝 **Dokumentation**

### **API-Dokumentation**
- **Dialog-Manager:** Alle öffentlichen Methoden
- **State-System:** Variable-Management und Events
- **Integration-Interface:** Kommunikation mit UI-System

### **Story-Dokumentation**
- **Ink-Syntax:** Richtlinien für Story-Autoren
- **Variable-Konventionen:** Namensgebung und Verwendung
- **Testing-Guidelines:** Wie Stories getestet werden

---

*Erstellt: 14.02.2026*  
*Focus: Entscheidungsverwaltung mit Ink-Integration*  
*Duration: 4 Wochen*
