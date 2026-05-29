# Marketing Agents — Investor Pitch

Two faithful implementations of the Claude Design handoff for BrandTrellis's
**Marketing Agents** pre-seed raise, rebuilt as self-contained static pages in the
BrandTrellis design system:

1. **Founder Intake** (`index.html`) — a branded, print-ready discovery form. The
   founder's answers feed directly into the pitch deck.
2. **Pitch Deck** (`pitch-deck.html`) — a 14-slide pre-seed investor deck.

## Contents

- `index.html` — the founder intake form (22 questions across 5 sections).
- `pitch-deck.html` — the 14-slide pitch deck (1920×1080).
- `deck-stage.js` — `<deck-stage>` web component: auto-scaling, keyboard/touch
  navigation, thumbnail rail, speaker notes, and print-to-PDF (one page per slide).
- `image-slot.js` — `<image-slot>` web component: drag-to-fill image placeholders
  (product screenshot + team photos).
- `tweaks-panel.jsx`, `deck-tweaks.jsx` — the Tweaks panel for exploring visual
  directions (**Bold / Editorial / Data-forward**), accent shade, type scale, and
  page numbers. Writes CSS variables + `data-*` attributes onto `<body>`.
- `assets/colors_and_type.css` — BrandTrellis color & type tokens (single source of truth).
- `assets/logo-horizontal.png`, `assets/logo-icon.png` — brand logos.
- `assets/fonts/` — local Montserrat (display) font files.

## Notes

- **Founder intake — fillable & print-ready.** Each question has a write-in answer
  field that auto-grows as you type. Use the browser's Print dialog (Cmd/Ctrl+P) to
  export a clean PDF to send to a founder, or fill it in digitally first.
- **Pitch deck — live or print.** Navigate with ←/→, Space, or Home/End; tap
  left/right halves on touch. Print → Save as PDF yields one page per slide.
- **Placeholders.** Narrative copy is drafted real; hard data the founder must supply
  (raise, TAM/SAM/SOM, traction, ACV, team, $) is marked with a **dotted-green
  underline** (`.ph`) so it's obvious what to swap once intake answers land.
- **Fonts.** Montserrat (display) loads locally from `assets/fonts/`. Lato (body) and
  JetBrains Mono load from Google Fonts. The deck additionally loads React, Babel,
  and Lucide from CDNs.

## Run

These are static pages — open `index.html` / `pitch-deck.html` directly, or serve the
folder (recommended for the deck, so the web components and assets load cleanly):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/ or http://localhost:8000/pitch-deck.html
```
