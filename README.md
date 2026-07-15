# Satyasee (Mahamasala)

Modern **Next.js (App Router)** frontend for the Satyasee spice brand website. Converted from the original static HTML/CSS/JS site with design and interactions preserved.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Original CSS (no redesign)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve production build
```

## Demo login

Client-side session only (sessionStorage) — no backend.

- **Email:** `admin@satyasee.com`
- **Password:** `12345`

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/shop` | All spices |
| `/categories` | Categories |
| `/contact` | Contact form |
| `/login` | Login |
| `/product/[id]` | Product detail (`1`–`6`) |

## Project structure

```
src/
  app/                 # App Router pages
  components/
    layout/            # TopBar, Navbar, Footer, AuthGuard, SiteShell
    home/              # Hero, categories, bestsellers, etc.
    product/           # Product detail + tabs
    forms/             # Login + contact
    ui/                # Shared UI (cards, logo, icons)
  lib/                 # Product data, categories, client auth
  styles/              # Original stylesheets
public/images/         # Static assets
```

## Notes

- Frontend only — no APIs, database, or server auth.
- Protected pages redirect to `/login` when no session exists (same behaviour as the original site).
- Brand favicon lives in `src/app/` (`favicon.ico`, `icon.svg`, `apple-icon.png`).
