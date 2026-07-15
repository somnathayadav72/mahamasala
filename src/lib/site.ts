/**
 * Site-wide metadata & social share config.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://your-domain.com)
 * so Open Graph / Twitter previews resolve absolute image URLs correctly.
 */
export const siteConfig = {
  name: "Satyasee",
  shortName: "Satyasee",
  tagline: "Rooted in India",
  title: "Satyasee - Rooted in India",
  description:
    "Authentic Indian spices, freshly ground for vibrant flavours in every meal. Pure masalas — turmeric, chilli, coriander, garam masala and more.",
  locale: "en_IN",
  language: "en",
  /** Brand colors */
  colors: {
    primary: "#2d3561",
    accent: "#e8734a",
    cream: "#fdf8f3",
    peach: "#fde8d8",
    leaf: "#7a9e6b",
    leafMid: "#f4a574",
  },
  /** Keywords for SEO */
  keywords: [
    "Satyasee",
    "Indian spices",
    "masala",
    "turmeric powder",
    "red chilli powder",
    "coriander powder",
    "garam masala",
    "biryani masala",
    "kitchen king masala",
    "organic spices India",
    "freshly ground spices",
  ],
  /** Social / contact (showcase) */
  email: "hello@satyasee.com",
  phone: "+91 98765 43210",
  address: "Mahalaxmi masale, Vita, Maharashtra, India",
  /** Open Graph type */
  type: "website" as const,
};

/** Absolute site origin used for OG/Twitter absolute URLs */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  // Vercel provides this automatically
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }

  // Local / fallback — replace with your real domain in production via env
  return "http://localhost:3000";
}
