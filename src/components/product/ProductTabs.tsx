"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

type ProductTabsProps = {
  product: Product;
};

export default function ProductTabs({ product }: ProductTabsProps) {
  const [tab, setTab] = useState<"about" | "reviews">("about");

  return (
    <section className="product-tabs-section">
      <div className="container">
        <div className="tabs-nav">
          <button
            type="button"
            className={`tab-btn${tab === "about" ? " active" : ""}`}
            onClick={() => setTab("about")}
          >
            About Product
          </button>
          <button
            type="button"
            className={`tab-btn${tab === "reviews" ? " active" : ""}`}
            onClick={() => setTab("reviews")}
          >
            Reviews
          </button>
        </div>
        <div className={`tab-content${tab === "about" ? " active" : ""}`}>
          <div className="tab-description">
            <h3>Product Description</h3>
            <p>{product.description}</p>
          </div>
          <div className="tab-specs">
            <h3>Specifications</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Botanical Name</span>
                <span className="spec-value">{product.botanicalName}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Origin</span>
                <span className="spec-value">{product.origin}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Processing</span>
                <span className="spec-value">{product.processing}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Shelf Life</span>
                <span className="spec-value">{product.shelfLife}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`tab-content${tab === "reviews" ? " active" : ""}`}>
          <p>Customer reviews coming soon.</p>
        </div>
      </div>
    </section>
  );
}
