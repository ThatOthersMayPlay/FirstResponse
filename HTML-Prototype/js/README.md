# inkjs – lokale Bibliothek

## Bibliothek
- **Name:** inkjs (JavaScript-Port der Ink-Story-Engine)
- **Version:** 2.4.0
- **Build:** `ink-full.min.js` (Full-Build inkl. Compiler → kompiliert `.ink` direkt im Browser)
- **Datei:** `js/ink-full.min.js` (249 KB)

## Quelle
- **npm-Paket:** `inkjs@2.4.0`
- **Download:** `https://cdn.jsdelivr.net/npm/inkjs@2.4.0/dist/ink-full.min.js`
- **Projekt:** https://github.com/y-lohse/inkjs
- **Lizenz:** MIT

## Warum Full-Build?
Der HTML-Prototyp lädt die Story-Quelle als `.ink`-Textdatei (`Assets/Story/*.ink`) und
kompiliert sie zur Laufzeit im Browser. Dafür ist der Build **mit Compiler** erforderlich
(`ink-full.min.js`). Der Runtime-only-Build (`ink.js`) würde nur kompilierte JSON-Stories
verstehen und ist hier nicht nutzbar.

## Einbindung
```html
<script src="js/ink-full.min.js"></script>
```
Das Script legt ein globales `inkjs`-Objekt an (`inkjs.Compiler`, `inkjs.Story`).

## Offline-Fähigkeit
Die Datei liegt lokal im Repository – keine CDN-Abhängigkeit zur Laufzeit (offline-fähig, GDPR-konform).

## Updates
Bei einem Update der Bibliothek:
1. Neue `ink-full.min.js` aus dem npm-Paket herunterladen.
2. Dieses Dokument (Version, Quelle) aktualisieren.
3. Kurztest im Browser gegen eine Beispiel-Story ausführen.