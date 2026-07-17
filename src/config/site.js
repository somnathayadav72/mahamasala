export const site = {
  name: "Satyasee",
  tagline: "Rooted in India",
  title: "Satyasee — Rooted in India",
  description:
    "Thoughtfully selected spices and blends that carry the depth, warmth, and character of Indian kitchens.",
  email: "hello@satyasee.com",
  phone: "+91 98765 43210",
  address: "Mahalaxmi masale, Vita, Maharashtra, India",
  colors: {
    primary: "#2d3561",
    accent: "#e8734a",
    cream: "#fdf8f3",
    lavender: "#e8dff5",
    peach: "#fde8d8",
    leaf: "#7a9e6b",
  },
};

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
