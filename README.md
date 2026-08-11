# Marginalia website

This repository contains the public website for [Marginalia](https://github.com/K-K-Szostak/marginalia-local-search), a private local search application for Zotero and Obsidian.

The site is deliberately static: there is no build step, analytics service, account system, or third-party JavaScript dependency.

## Local preview

From this folder, run:

```powershell
py -m http.server 8080
```

Then open <http://localhost:8080>.

## Deployment

GitHub Pages serves the `main` branch from the repository root.

## License

Copyright © 2026 Marginalia contributors. The website code is licensed under AGPL-3.0-only.
