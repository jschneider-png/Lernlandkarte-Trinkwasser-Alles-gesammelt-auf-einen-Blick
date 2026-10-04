# Interaktive Lernlandkarte – Trinkwasserversorgung

Diese Version ist für **GitHub Pages** vorbereitet und benötigt keinen Server.

## Inhalt
- `index.html` – Startseite
- `styles.css` – Gestaltung
- `app.js` – Aufgabenlogik und Aufgabenbank
- `assets/lernlandkarte.png` – Lernlandkarte
- 54 Übungen in den Schwierigkeitsstufen **Leicht**, **Mittel** und **Schwer**
- verschiedene Aufgabentypen: Single Choice, Mehrfachauswahl, Richtig/Falsch, Zuordnung, Reihenfolge und Kurzantwort
- lokaler Lernfortschritt über `localStorage`

## Veröffentlichung mit GitHub Pages
1. Neues GitHub-Repository anlegen, z. B. `lernlandkarte-trinkwasser`.
2. Alle Dateien und den Ordner `assets` hochladen.
3. In GitHub: **Settings → Pages**.
4. Unter **Build and deployment**: `Deploy from a branch`.
5. Branch `main` und Ordner `/ (root)` auswählen.
6. Speichern. Nach kurzer Zeit ist die Seite unter deiner GitHub-Pages-Adresse erreichbar.

## Aufgaben anpassen
Die Aufgaben stehen in `app.js` im Array `bank`.

Schwierigkeitsgrade:
- `easy` = Leicht
- `medium` = Mittel
- `hard` = Schwer

Aufgabentypen:
- `mcq` = Single Choice
- `multi` = Mehrfachauswahl
- `tf` = Richtig/Falsch
- `short` = Kurzantwort mit Schlüsselwortprüfung
- `order` = Reihenfolge
- `match` = Zuordnung

## Hinweis
Die Kurzantworten werden absichtlich tolerant über Schlüsselwörter geprüft. Für eine benotete Prüfung sollte eine Lehrkraft Freitextantworten zusätzlich kontrollieren.


## Bildpfad
In dieser korrigierten Version liegt `lernlandkarte.png` direkt neben `index.html`. Dadurch funktioniert der relative Pfad `./lernlandkarte.png` zuverlässig auf GitHub Pages.
