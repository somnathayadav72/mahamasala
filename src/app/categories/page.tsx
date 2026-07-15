import type { Metadata } from "next";
import ShopByCategory from "@/components/home/ShopByCategory";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Explore Satyasee spice categories — turmeric, red chilli, coriander, garam masala, biryani, kitchen king, chaat, sambhar and more.",
  alternates: { canonical: "/categories" },
  openGraph: {
    title: `Categories - ${siteConfig.name}`,
    description: "Find the perfect masala for every meal and mood.",
    url: "/categories",
  },
};

export default function CategoriesPage() {
  return <ShopByCategory variant="page" />;
}
