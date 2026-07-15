import type { Metadata } from "next";
import Bestsellers from "@/components/home/Bestsellers";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Spices",
  description:
    "Shop Satyasee's complete range of pure, freshly ground Indian spices — turmeric, chilli, coriander, garam masala, kitchen king, biryani masala and more.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: `All Spices - ${siteConfig.name}`,
    description:
      "Our complete range of pure, freshly ground spices for every kitchen.",
    url: "/shop",
  },
  twitter: {
    title: `All Spices - ${siteConfig.name}`,
    description:
      "Our complete range of pure, freshly ground spices for every kitchen.",
  },
};

export default function ShopPage() {
  return (
    <Bestsellers
      title="All Spices"
      description="Our complete range of pure, freshly ground spices for every kitchen."
      useShortTags={false}
    />
  );
}
