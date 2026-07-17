# Satyasee — Rooted in India

Satyasee is a premium, frontend-only Next.js marketing site for an Indian spice brand. The experience is intentionally editorial: it introduces the brand, tells a story through real local product imagery, presents the range, and supports brand enquiries without ecommerce behavior.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run validate:assets
npm run lint
npm run build
```

## Structure

- `src/app/page.js` assembles the single-page marketing journey.
- `src/app/globals.css` contains the normalized visual system, responsive layout, and motion styles.
- `src/components/site/` contains the small client components for navigation, reveal motion, scroll progress, the product story, and local form state.
- `src/data/` contains the local product, asset, and navigation data.
- `docs/current-site-audit.md` records the original app and the commerce removal decisions.

The site has no API, database, authentication, cart, checkout, quantity controls, prices, or purchase actions.
