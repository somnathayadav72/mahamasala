"use client";

import { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import Squiggle from "@/components/ui/Squiggle";
import { products } from "@/lib/products";

type BestsellersProps = {
  title?: string;
  description?: string;
  useShortTags?: boolean;
};

export default function Bestsellers({
  title = "Bestsellers",
  description = "Handpicked favourites loved by our customers for everyday cooking.",
  useShortTags = true,
}: BestsellersProps) {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <section className="bestsellers-section">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/branches.png"
        alt=""
        className="branch-decor branch-decor-tr"
        aria-hidden="true"
      />

      <div className="container">
        <div className="bestsellers-top">
          <div className="bestsellers-intro">
            <h2 className="bestsellers-title">{title}</h2>
            <Squiggle className="bestsellers-squiggle" />
            <p className="bestsellers-desc">{description}</p>
          </div>
          <div className="bestsellers-controls">
            <button
              type="button"
              className={`filter-btn${filterActive ? " active" : ""}`}
              onClick={() => setFilterActive((v) => !v)}
              style={
                filterActive
                  ? { borderColor: "#2d3561", background: "#f3eefa" }
                  : undefined
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="11" y1="18" x2="13" y2="18" />
              </svg>
              Filter
            </button>
            <button type="button" className="sort-btn">
              Sort: Popular
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              useShortTags={useShortTags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
