# Marketing Agents — Founder Intake

A branded, print-ready founder intake form for BrandTrellis's **Marketing Agents**
investor pitch. The founder's answers feed directly into the pre-seed pitch deck.

This is a faithful implementation of the Claude Design handoff
(`Marketing Agents - Founder Intake.html`), rebuilt as a self-contained static page
in the BrandTrellis design system.

## Contents

- `index.html` — the intake form (22 questions across 5 sections).
- `assets/colors_and_type.css` — BrandTrellis color & type tokens (single source of truth).
- `assets/logo-horizontal.png`, `assets/logo-icon.png` — brand logos.
- `assets/fonts/` — local Montserrat (display) font files.

## Notes

- **Fillable & print-ready.** Each question has a write-in answer field that
  auto-grows as you type. Use the browser's Print dialog (Cmd/Ctrl+P) to export a
  clean PDF to send to a founder, or fill it in digitally first.
- **Fonts.** Montserrat (display) loads locally from `assets/fonts/`. Lato (body)
  and JetBrains Mono load from Google Fonts.

## Run

It's a static page — open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
