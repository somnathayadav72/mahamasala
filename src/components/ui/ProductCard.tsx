"use client";

import { useRouter } from "next/navigation";
import { useState, type MouseEvent } from "react";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  useShortTags?: boolean;
};

export default function ProductCard({
  product,
  useShortTags = false,
}: ProductCardProps) {
  const router = useRouter();
  const [wishlistActive, setWishlistActive] = useState(false);
  const [addState, setAddState] = useState<"idle" | "added">("idle");

  const tags = useShortTags ? product.shortTags : product.tags;

  function handleCardClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.closest(".wishlist-btn") || target.closest(".add-btn")) return;
    router.push(`/product/${product.id}`);
  }

  function handleWishlist(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setWishlistActive((v) => !v);
  }

  function handleAdd(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    setAddState("added");
    window.setTimeout(() => setAddState("idle"), 1500);
  }

  return (
    <article
      className="product-card"
      style={{ cursor: "pointer" }}
      onClick={handleCardClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          router.push(`/product/${product.id}`);
        }
      }}
    >
      <div className="product-card-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={`Satyasee ${product.title}`}
          loading="lazy"
          decoding="async"
        />
        <button
          type="button"
          className={`wishlist-btn${wishlistActive ? " active" : ""}`}
          aria-label="Add to wishlist"
          onClick={handleWishlist}
        >
          <svg
            viewBox="0 0 24 24"
            fill={wishlistActive ? "#e8734a" : "none"}
            stroke={wishlistActive ? "#e8734a" : "currentColor"}
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      <div className="product-card-body">
        <div className="product-card-info">
          <h4 className="product-card-name">{product.title}</h4>
          <p className="product-card-price">{product.price}</p>
          <div className="product-card-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="add-btn"
          aria-label="Add to cart"
          onClick={handleAdd}
          style={
            addState === "added"
              ? {
                  transform: "scale(1.3)",
                  background: "#4caf50",
                  color: "#fff",
                }
              : undefined
          }
        >
          {addState === "added" ? (
            "✓"
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          )}
        </button>
      </div>
    </article>
  );
}
