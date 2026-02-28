# JsonInkConverter Development Plan

## 🎯 Ziel
Robuster KI-Authoring Workflow mit JSON-basiertem Story-System

## 📊 Technical Tasks

### 1. JsonInkConverter Script
- [x] JSON-Parser für story.schema.json entwickeln
- [x] Ink-Generator implementieren
- [x] Schema-Validierung hinzufügen
- [x] Error-Handling für ungültige JSON
- [x] Unity JsonUtility Integration (statt Newtonsoft.Json)
- [x] JsonValidationTool für erweiterte Validierung

### 2. Unity Integration
- [x] JsonInkConverter als Editor Script
- [x] Menu Item für "JSON → Ink Konvertierung"
- [x] JsonValidationTool als Editor Script
- [x] Menu Item für "JSON Validierung"
- [x] Automatische Konvertierung bei JSON-Änderungen
- [ ] Build-Prozess Integration

### 3. Story Migration
- [x] ReginaStefania.ink als JSON neu erstellen
- [ ] Konvertierung testen und validieren
- [ ] DialogManager an JSON-Workflow anpassen

### 4. KI-Authoring Workflow
- [ ] JSON-Story-Editor in Unity Inspector
- [ ] Vorlagen für gängige Story-Patterns
- [ ] Validierung in Echtzeit

## 🔄 Prioritäten
1. **JsonInkConverter Script** (Höchste Priorität)
2. **Unity Integration** (Mittlere Priorität)
3. **Story Migration** (Niedrige Priorität)
4. **KI-Authoring Workflow** (Zukünftige Erweiterung)

## 📊 Akzeptanzkriterien
- [x] JSON wird zu validem Ink konvertiert
- [x] Schema-Validierung funktioniert
- [ ] Integration in Unity Build-Prozess
- [ ] ReginaStefania Story funktioniert mit neuem Workflow

---
*JsonInkConverter Plan: 28.02.2026*  
*Status: Script entwickelt, Testing erforderlich*
