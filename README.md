# 11ty Portfolio Website

Ein modernes Portfolio-Website-Projekt gebaut mit [Eleventy (11ty)](https://www.11ty.dev/) und einem nerdy, greptile-inspirierten Design.


## 📋 Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Sie folgende Software installiert haben:

- [Node.js](https://nodejs.org/) (Version 16 oder höher)
- [npm](https://www.npmjs.com/) (kommt mit Node.js)

## 🛠️ Installation

1. **Repository klonen oder herunterladen**
   ```bash
   git clone <repository-url>
   cd 11ty_iad15
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

## 🏃‍♂️ Entwicklung starten

### Development Server starten
```bash
npm start
```

Dies startet:
- Den Eleventy Development Server
- Live Reload für automatische Browser-Updates
- File Watching für CSS und Markdown-Änderungen

Die Website ist dann verfügbar unter: **http://localhost:8080**

### Produktions-Build erstellen
```bash
npm run build
```

Dies erstellt eine optimierte Version der Website im `public/` Ordner.

## 📁 Projektstruktur

```
11ty_iad15/
├── src/                    # Quellcode
│   ├── css/
│   │   └── style.css      # Haupt-Stylesheet
│   ├── images/            # Bilder und Assets
│   ├── projects/          # Projekt-Seiten
│   │   ├── projects.json  # Collection-Konfiguration
│   │   └── teletext.md    # Beispiel-Projekt
│   ├── _includes/         # Templates und Layouts
│   │   ├── base.njk       # Basis-Layout
│   │   └── project.njk    # Projekt-Layout
│   ├── index.md           # Startseite
│   └── projects.md        # Projekte-Übersicht
├── public/                # Generierte Website (wird erstellt)
├── .eleventy.js          # Eleventy-Konfiguration
├── package.json          # NPM-Konfiguration
└── README.md            # Diese Datei
```

## ✏️ Inhalte bearbeiten

### Neue Projekte hinzufügen

1. Erstellen Sie eine neue `.md` Datei in `src/projects/`
2. Fügen Sie Front Matter hinzu:
   ```markdown
   ---
   title: "Ihr Projekttitel"
   layout: base.njk
   ---
   
   # Ihr Projekttitel
   
   Beschreibung des Projekts...
   ```

### Startseite bearbeiten
Bearbeiten Sie `src/index.md` für den Inhalt der Startseite.

### Design anpassen
Das CSS befindet sich in `src/css/style.css` mit CSS Custom Properties für einfache Anpassungen.

## 🔧 Konfiguration

Die Eleventy-Konfiguration befindet sich in `.eleventy.js`:
- Input-Verzeichnis: `src/`
- Output-Verzeichnis: `public/`
- CSS und Images werden automatisch kopiert
- Live Reload für CSS-Änderungen

## 📱 Browser-Unterstützung

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🐛 Troubleshooting

### Server startet nicht
```bash
# Dependencies neu installieren
rm -rf node_modules package-lock.json
npm install
```

### Port bereits belegt
Eleventy wählt automatisch einen freien Port. Der verwendete Port wird im Terminal angezeigt.

### CSS-Änderungen erscheinen nicht
```bash
# Hard Refresh im Browser
Cmd/Ctrl + Shift + R
```

## 📚 Weitere Ressourcen

- [Eleventy Dokumentation](https://www.11ty.dev/docs/)
- [Nunjucks Template Engine](https://mozilla.github.io/nunjucks/)
- [Markdown Guide](https://www.markdownguide.org/)

## 📄 Lizenz

Dieses Projekt steht unter der ISC-Lizenz.

---

**Happy Coding!** 🚀