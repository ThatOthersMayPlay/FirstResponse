# Unity Project Setup - Legacy Input Manager Deaktivieren

## 🔄 **Legacy Input Manager deaktivieren**

### **Problem:**
Unity 6.3.9 LTS verwendet standardmäßig den alten Input Manager, der mit dem neuen Input System kollidiert.

### **Lösung:**

#### **1. Input Manager deaktivieren**
```
Edit → Project Settings → Player → Other Settings
```

**Einstellungen anpassen:**
- **Active Input Handling:** `Both` → `Input System Package (New)`
- **Input System Package:** `Enabled` (falls nicht aktiv)

#### **2. Input System Package sicherstellen**
```
Window → Package Manager → Packages: Unity Registry
Suchen nach: "Input System"
Installieren (falls nicht vorhanden)
```

#### **3. Input Actions prüfen**
```
Assets → InputSystem_Actions.inputactions
```
**Sollte bereits vorhanden sein** aus der initialen Einrichtung.

#### **4. Testen**
- **Scene erstellen:** `GameObject → UI → Canvas`
- **Input testen:** Maus-Klicks sollten funktionieren
- **Debug.Log:** `Input System aktiviert`

---

## 📋 **Sprint 1 Vorbereitung nach Input-Setup**

### **Nächste Schritte:**
1. **Ink-Plugin installieren** (Asset Store)
2. **Szene erstellen:** `Szene1-Regina`
3. **Canvas hinzufügen:** UI System
4. **Test-Dialog:** Regina-Stefania

### **Input System für Sprint 1:**
- **Point&Click:** Maus-Klicks für UI-Buttons
- **Hover-Feedback:** Maus-Over-Ereignisse
- **Touch-Unterstützung:** Für mobile Geräte

---

*Erstellt: 21.02.2026*  
*Status: Input Manager deaktivieren, dann Ink installieren*
