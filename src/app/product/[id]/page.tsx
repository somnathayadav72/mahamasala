import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/product/ProductDetail";
import { getAllProductIds, getProductById } from "@/lib/products";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getAllProductIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product" };
  return { title: product.breadcrumb };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
