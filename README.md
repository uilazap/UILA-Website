# UILA Website

Source for [www.uila.io](https://www.uila.io) — a single-page marketing site for UILA.

## Stack
- Static HTML, CSS, vanilla JavaScript. No build step.
- Client-side English/Spanish language toggle (`assets/js/i18n.js`).
- Hosted on GitHub Pages with a custom domain.
- Continuous deployment via GitHub Actions (`.github/workflows/deploy.yml`).

## Local preview
Any static file server works. Examples:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Then open http://localhost:8080.

## Project structure
```
.
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   ├── js/i18n.js
│   ├── img/         # logo, favicon, flag SVGs
│   └── video/       # hero background video
├── CNAME            # www.uila.io
└── .github/workflows/deploy.yml
```

## Deployment
Push to `main` → GitHub Actions uploads the repository contents as a Pages artifact → served at www.uila.io.

## Contact
info@uila.io
