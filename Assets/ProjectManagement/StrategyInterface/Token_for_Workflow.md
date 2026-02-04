# GitHub Workflow Token Information

## ⚠️ WICHTIG: Keine Tokens im Repository speichern!

### ❌ Niemals tun:
- Personal Access Tokens im Code speichern
- Tokens in Markdown-Dateien schreiben
- Tokens in Git committen

### ✅ Korrekte Vorgehensweise:
1. **GitHub Secrets** für sensible Daten verwenden
2. **GITHUB_TOKEN** für GitHub Actions nutzen
3. **Minimal Berechtigungen** vergeben

### 🔧 Aktuelle Workflow-Konfiguration:
Der GitHub Pages Workflow verwendet bereits die korrekten Berechtigungen:
- `contents: read`
- `pages: write` 
- `id-token: write`

### 📞 Bei Problemen:
Repository Settings → Actions → General → Workflow permissions überprüfen

---
*Diese Datei dient als Dokumentation - keine Tokens enthalten!*