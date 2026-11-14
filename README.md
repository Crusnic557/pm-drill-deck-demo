# PM Drill Deck · public demo

A spaced-repetition study deck for project management: multiple-choice questions, flip cards, judgement calls with what actually happened, and a searchable glossary across nine courses (Agile, blended PM, supply chain, procurement, critical thinking with GenAI, PMP-style scenarios, grey-area management calls, PMI standards, NZS 3910 contracts, and Gen Z workplace topics).

**Live demo:** https://crusnic557.github.io/pm-drill-deck-demo/

## What this version is

The public GitHub Pages build of the deck:

- Static HTML, CSS and JavaScript. No build step, no backend, no accounts.
- Progress (Leitner boxes, streaks, daily counts) is saved in the browser's local storage on the visitor's device only.
- The private version also syncs progress to the owner's account; that layer is inactive here and the page falls back to local storage automatically.

## Layout

- `index.html` – the app shell, styles and all logic.
- `data/*.js` – one or more files per course. Each calls `PMQ.course({...})` to register its topics, terms, cards, flips and calls, and `PMQ.fig(id, svg)` for diagrams.

## Running locally

```bash
python -m http.server 8732
```

Then open http://localhost:8732/.

## Publishing on GitHub Pages

Push this folder to a repository and enable Pages from **Settings → Pages**, source **Deploy from a branch**, branch `main`, folder `/ (root)`.
