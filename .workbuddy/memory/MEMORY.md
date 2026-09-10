# Project Memory — aseek.org

## Conventions

- **Write memory notes in English.** All workspace memory files (daily logs and this file) are kept
  in English, regardless of the language used in conversation. (Requested by the user on 2026-09-10.)
- Docs are written in English too (README rewritten to English on 2026-09-10).
- README comes in two files: `README.md` (English, default) and `README.zh-CN.md` (Chinese), each
  linking to the other at the top. Keep both in sync when content changes.
- Code comments in this project are in English.
- Site copy lives in the `I18N` dictionary in `assets/js/main.js`; the static content in
  `index.html` mirrors `I18N.en`. Any change to one must be mirrored in the other.
- Adding a language: append to `LANGS` (with `rtl: true` for RTL languages), add an `I18N` entry,
  and the modal list generates itself — no HTML edit needed.

## Project

- Static organization site for A·SEEK (Always Seeking), at `C:\Users\xbdki\Documents\our-web3\aseek`.
- No build step: `index.html` + `assets/css/style.css` + `assets/js/main.js`.
- 12 languages: en, zh, es, fr, de, pt, ru, ar, hi, bn, ur, ja (ar and ur are RTL).
