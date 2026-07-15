import type { Metadata } from "next";
import Bestsellers from "@/components/home/Bestsellers";

export const metadata: Metadata = {
  title: "All Spices",
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
