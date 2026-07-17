# Current-site audit

## Existing routes

- `/` — storefront home assembled from hero, category, signature, bestseller, rooted, and social-proof sections.
- `/shop` — product listing route with product cards, filter/sort controls, prices, and purchase actions.
- `/categories` — category listing route.
- `/product/[id]` — transactional product detail route with price, quantity, delivery, cart, buy-now, and wishlist controls.
- `/contact` — contact page.
- `/login` — authentication-gated login page.

## Existing marketing sections

- Hero composition using `hero_image.png`.
- Category banner using `satyasee-spice-pouches-turmeric-chilli-coriander.png`.
- Signature range using `signature.png`.
- Brand story using `root.png`.
- Ingredient branch decoration using `branches.png`.

## Existing ecommerce sections and code

- Product cards with prices, wishlist controls, badges, and plus/add actions.
- Product detail purchase UI with prices, quantity state, delivery messaging, add-to-cart, buy-now, and wishlist actions.
- `/shop`, `/categories`, and `/product/[id]` routes.
- `src/lib/auth.ts`, `AuthGuard`, login flow, cart icon/badge, shop wording, and legacy commerce styles.

## Existing product assets

- `/images/1.png` Turmeric Powder
- `/images/2.png` Red Chilli Powder
- `/images/3.png` Coriander Powder
- `/images/4.png` Garam Masala
- `/images/5.png` Kitchen King Masala
- `/images/6.png` Biryani Masala

All six product scenes are 1536×1024 PNGs. They are presentation compositions rather than transparent pack cutouts, so the redesign uses them as art-directed visual panels.

## Existing food, ingredient, and brand assets

- `/images/hero_image.png` — four-product hero grouping with whole spices and bowls.
- `/images/signature.png` — six-product range grouping with whole spices.
- `/images/root.png` — three-product grouping with spice bowls and ingredients.
- `/images/branches.png` — green branch composition on a light background.
- `/images/satyasee-spice-pouches-turmeric-chilli-coriander.png` — three-product grouping.
- `/images/login.png` — single product scene used by the removed login route.

## Existing logo and icon assets

- `src/app/icon.svg`, `public/icon.svg`, `public/favicon.ico`, and `public/apple-icon.png`.
- The visible logo is currently recreated with text and a small inline leaf mark.

## Current colors and fonts

- Primary indigo: `#2d3561`
- Coral accent: `#e8734a`
- Lavender: `#e8dff5`
- Cream: `#fdf8f3`
- Peach: `#fde8d8`
- Leaf green: `#7a9e6b`
- Existing fonts: Inter and Playfair Display.

The redesign keeps the palette family and moves to Fraunces + Manrope for a more editorial system.

## Components to retain or reuse

- Local image inventory and product names.
- Existing logo mark colors and metadata facts from `src/lib/site.ts`.
- Existing favicon and apple icon assets.

## Components to rebuild

- Navigation and mobile menu.
- Hero, brand introduction, product story, product range, ingredient story, process, kitchen editorial, origin reveal, contact, and footer.
- Product cards as informational marketing cards.
- Global typography, spacing, motion, and responsive layout.

## Components and code to remove

- Cart, checkout, quantity, price-action, wishlist, and shopping UI.
- Login/auth guard and auth persistence.
- Legacy category, product detail, shop, and commerce styles.
- Old page-specific routes that conflict with the single-page marketing journey.
