# Unity Meta-Dateien Management

## 🔄 **Problem: Verwaiste Meta-Dateien**

### **Was passiert ist:**
- **Sprint-1-Scripts.meta** existiert noch im ProjectManagement-Ordner
- **Original-Ordner** `Sprint-1-Scripts/` wurde gelöscht
- **Unity** zeigt Fehler wegen fehlender Asset-Datei

### **Lösung:**
- **Verwaiste Meta-Dateien entfernen**
- **Nur Assets in Unity-Struktur belassen**
- **ProjectManagement** nur für Dokumentation

---

## 🧹 **Aufgeräumt:**

### **Entfernte verwaiste Meta-Dateien:**
- [x] `Sprint-1-Scripts.meta` (verwaist)

### **Korrekte Meta-Dateien:**
- [x] `Assets/Scripts/Tools/DialogManager.cs.meta`
- [x] `Assets/Scripts/Tools/DialogChoiceHandler.cs.meta`
- [x] `Assets/Story/ReginaStefania.ink.meta`

---

## 📋 **Best Practices für Meta-Dateien**

### **1. Immer mit Dateien verschieben:**
```powershell
# FALSCH (nur Datei verschieben)
Move-Item "script.cs" "new/location/script.cs"

# RICHTIG (Datei + Meta verschieben)
Move-Item "script.cs" "new/location/script.cs"
Move-Item "script.cs.meta" "new/location/script.cs.meta"
```

### **2. Unity Asset-Struktur beachten:**
- **Assets/** = Unity-Assets (brauchen .meta)
- **ProjectManagement/** = Dokumentation (keine Unity-Assets)

### **3. Verwaiste Meta-Dateien vermeiden:**
- Immer Datei + .meta zusammen verschieben
- Bei Löschungen beide entfernen
- Unity Editor für Asset-Management nutzen

---

## 🎯 **Aktueller Status**

### **Bereinigt:**
- [x] Verwaiste `Sprint-1-Scripts.meta` entfernt
- [x] Keine Unity-Fehler mehr
- [x] Klare Trennung Development vs. ProjectManagement

### **Struktur:**
```
Assets/
├── Scripts/Tools/ (mit .meta Dateien)
├── Story/ (mit .meta Dateien)
└── ProjectManagement/ (ohne .meta Dateien)
```

### **Workflow:**
- **Development:** Direkt in Assets/ (mit .meta)
- **Dokumentation:** Nur in ProjectManagement/ (ohne .meta)
- **Keine Redundanzen:** Eindeutige Verantwortlichkeiten

---

## 🔧 **Zukünftige Vorsicht**

### **Beim Verschieben:**
1. **Immer beide Dateien verschieben:** `.cs` + `.cs.meta`
2. **Unity Editor nutzen** für Asset-Operationen
3. **Batch-Operationen** vermeiden bei .meta Dateien

### **Beim Löschen:**
1. **Unity Editor** für Asset-Löschung nutzen
2. **Manuell beide Dateien** löschen wenn nötig
3. **ProjectManagement** von Unity-Assets trennen

---

## 📊 **Fazit**

### **Problem gelöst:**
- **Unity-Fehler:** Keine verwaisten Meta-Dateien mehr
- **Struktur:** Klare Trennung etabliert
- **Workflow:** Best Practices definiert

### **Empfehlung:**
- **Unity Editor** für Asset-Management nutzen
- **Manuelle Operationen** nur mit .meta Dateien durchführen
- **ProjectManagement** von Unity-Assets trennen

---

*Meta-Dateien Management: 21.02.2026*  
*Status: Bereinigt, Workflow etabliert*
