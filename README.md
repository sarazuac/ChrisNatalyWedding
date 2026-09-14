# Nataly & Christian's Wedding Website

Built with Next.js (App Router), React, TypeScript, and Tailwind CSS. A cruise
wedding site aboard MSC Seashore, bilingual in English and Spanish.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize your details

Almost everything (names, dates, ship, embarkation port, itinerary, RSVP
link, Facebook group, registries, hotels) lives in one file:
[`lib/site-config.ts`](lib/site-config.ts). Edit it and the whole site
updates.

All on-page copy (in both languages) lives in
[`lib/dictionary.ts`](lib/dictionary.ts) — update the `en` and `es` objects
together to keep both languages in sync.

## English / Spanish

The language toggle (top nav, and in the mobile menu) switches all copy and
saves the visitor's choice to their browser (`localStorage`), so it's
remembered on their next visit. It defaults to Spanish automatically if the
visitor's browser is set to Spanish, otherwise English.

## Add your videos

- `public/videos/ocean.mp4` — homepage hero background
- `public/videos/seashore.mp4` — Ship page banner

See [`public/videos/README.md`](public/videos/README.md) for tips. If a file
is missing, that page gracefully falls back to an ocean-toned gradient.

## Add real photos

Replace the placeholder tiles in `public/gallery/` with your own photos
(update the file list in
[`components/content/GalleryContent.tsx`](components/content/GalleryContent.tsx)
if filenames change).

## Itinerary

`public/images/itinerary.jpg` is shown on the Travel page alongside a text
table built from the `itinerary` array in `site-config.ts` (so it stays
readable and translated even though the image itself is English-only).

## Pages

- `/` — Home, with the video hero and countdown
- `/our-story`
- `/gallery`
- `/ship` — the ship, with its own video banner
- `/travel` — embarkation, full itinerary, hotels
- `/registry`
- `/faq`
- `/rsvp` — links out to the Google Form (RSVP + cabin reservation; set
  `rsvpFormUrl` in `site-config.ts`)

## Deploy

Deploy easily on [Vercel](https://vercel.com/new), or anywhere that supports
Next.js.
