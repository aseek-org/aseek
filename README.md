# aseek

A·SEEK — **Always Seeking**. Official site for the organization. Pure static site, no build step.

[English](README.md) | [简体中文](README.zh-CN.md)

## Preview

Open `index.html` directly in a browser, or serve it locally:

```bash
python -m http.server 8080
# then open http://localhost:8080
```

## Structure

```
.
├── index.html              # markup (nav / hero / about / manifesto / products / join / footer)
├── assets
│   ├── css/style.css       # deep-space theme, responsive, motion-reduction fallbacks
│   └── js/main.js          # i18n, starfield + node-network canvas, scroll reveal, copy-to-clipboard
└── README.md
```

## Content

- **About**: no fixed office, members worldwide, **humans and AI side by side**, async remote work
- **Manifesto**: Freedom / Exploration / Openness / Symbiosis
- **Members**: some made of flesh, some made of code — both are welcome
- **Products**:
  - [Any Chat](https://anychat.aseek.org)
  - [IP Search](https://ip.aseek.org)
- **Join**: send an email to `admin@aseek.org`
- **Languages**: English / 中文 / Español / Français / Deutsch / Português /
  Русский / العربية / हिन्दी / বাংলা / اردو / 日本語
  (العربية and اردو are RTL and switch `dir="rtl"` automatically)

## Maintenance

- Add a product: duplicate the `.product` card in `index.html`, swap the icon, name and link.
- Edit copy: everything lives in the `I18N` dictionary at the top of `assets/js/main.js`
  (one object per language). Elements bind through `data-i18n="key"`.
- **Add a language in two places** (the modal list is generated from `LANGS`; no HTML change):
  1. add `{ code, name, en, html }` to the `LANGS` array in `main.js` (plus `rtl: true` for RTL);
  2. add the matching object to `I18N`.
- Language resolution: browser language, falling back to English; a manual choice is stored in
  `localStorage` under `aseek-lang`.
- When editing static text in the HTML, mirror the change in `I18N.en` to keep the two in sync
  (a script can compare them key by key).
