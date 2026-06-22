# IntuiFit — Website

Marketing & legal website for **IntuiFit**, a minimalist iOS workout tracker — _log a set in 3 seconds. No setup. No ads._

🔗 **Live site:** [codebygaetan.github.io/intuifit-web](https://codebygaetan.github.io/intuifit-web/)

This repository is published as part of my portfolio to showcase my work. It is not intended to be reused.

## Overview

A small, fast, fully static single-page site built with Angular. It serves as the landing page, support page, and privacy policy (GDPR) for the IntuiFit iOS app. It is fully bilingual (English / French) and deployed automatically to GitHub Pages.

| | |
|---|---|
| **Framework** | Angular 21 (standalone components, signals) |
| **i18n** | `@angular/localize` — English & French, built as separate locales |
| **Styling** | Hand-written CSS, self-hosted fonts (`@fontsource`) |
| **Hosting** | GitHub Pages |
| **CI/CD** | GitHub Actions — build & deploy on every push to `main` |

## Pages

- **Home** — hero, feature highlights, App Store call-to-action
- **Support** — contact
- **Privacy** — GDPR-compliant privacy policy

## Local development

```bash
npm install
npm start
```

Then open `http://localhost:4200/`.

## Build

```bash
# Production build with both locales, ready for GitHub Pages
npx ng build --base-href=/intuifit-web/ --localize
```

Artifacts are emitted to `dist/intuifit-web/browser`.

## Tests

```bash
npm test
```

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the localized app and publishes it to the `gh-pages` branch.

---

Made by [Gaétan La Selve](https://github.com/CodeByGaetan).
