# Bemade Crotchets

A landing page for a handmade crochet business, built with React + Vite + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

The site is a single page app with instant, client-side tabs (no page reloads, no URL routing) — `src/App.jsx` holds the active tab in state and swaps sections in and out:

- **Home** — `Hero.jsx`
- **Shop** — `Gallery.jsx` (six work cards; each links through to the Contact tab to enquire)
- **About** — `Story.jsx` + `Process.jsx` (the maker's story and the four-step "how it's made")
- **Contact** — `Testimonials.jsx` + `Contact.jsx` (reviews, then the commission enquiry form)

`Nav.jsx` renders the tab bar with icons (from `lucide-react`) and calls back up to `App.jsx` to switch tabs.

## Placeholders to replace

All photography is currently real, free-to-use Unsplash photos standing in for actual photos of Beth's work, and the two customer reviews are placeholder text. Before shipping:

- `src/components/Story.jsx` — one portrait/studio or workspace photo
- `src/components/Gallery.jsx` — six work photos (the `img` field on each item in the `works` array)
- `src/components/Testimonials.jsx` — real customer quotes, once Beth starts collecting them

The contact form in `Contact.jsx` is front-end only — wire it up to a form service of your choice (e.g. Formspree, Resend) or a backend endpoint.

## Colour palette

Warm cream base, ink-charcoal text, and a rotating set of yarn accents (mustard, clay/terracotta, sage, dusty rose). Defined as CSS variables in `src/index.css` under `@theme`, and available as Tailwind utilities (`bg-clay`, `text-sage`, etc.).

## Fonts

- **Fraunces** (serif) for display/headline text
- **Work Sans** (sans) for body text

Both are loaded from Google Fonts in `src/index.css`.
