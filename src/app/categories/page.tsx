import type { Metadata } from "next";
import ShopByCategory from "@/components/home/ShopByCategory";

export const metadata: Metadata = {
  title: "Categories",
};

export default function CategoriesPage() {
  return <ShopByCategory variant="page" />;
}
