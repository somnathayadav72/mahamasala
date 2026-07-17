import { existsSync, statSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const assets = [
  "public/images/hero_image.png",
  "public/images/signature.png",
  "public/images/root.png",
  "public/images/branches.png",
  "public/images/satyasee-spice-pouches-turmeric-chilli-coriander.png",
  ...Array.from({ length: 6 }, (_, index) => `public/images/${index + 1}.png`),
  "public/favicon.ico",
  "public/apple-icon.png",
];

const missing = assets.filter((asset) => {
  const path = resolve(root, asset);
  return !existsSync(path) || statSync(path).size === 0;
});

if (missing.length) {
  console.error("Missing or empty assets:\n" + missing.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log(`Validated ${assets.length} local brand assets.`);
