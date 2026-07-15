import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/product/ProductDetail";
import { getAllProductIds, getProductById } from "@/lib/products";
import { siteConfig } from "@/lib/site";

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

  const title = product.breadcrumb;
  const description = product.description;
  const path = `/product/${product.id}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: `${title} - ${siteConfig.name}`,
      description,
      url: path,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: `Satyasee ${product.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - ${siteConfig.name}`,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
