"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";
import ProductTabs from "@/components/product/ProductTabs";

const WEIGHTS = ["100g", "200g", "500g", "1kg"];

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const [weight, setWeight] = useState("100g");
  const [qty, setQty] = useState(1);

  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <Link href="/">Home</Link>
          <span className="separator">/</span>
          <Link href="/shop">Shop</Link>
          <span className="separator">/</span>
          <Link href="/shop">Spices</Link>
          <span className="separator">/</span>
          <span className="current">{product.breadcrumb}</span>
        </div>
      </div>

      <section className="product-detail">
        <div className="container">
          <div className="product-layout">
            <div className="product-gallery">
              <div className="gallery-main">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={`Satyasee ${product.breadcrumb}`}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            <div className="product-info">
              <span className="product-badge">{product.badge}</span>
              <h1 className="product-title">{product.title}</h1>
              <p className="product-subtitle">{product.subtitle}</p>

              <div className="product-usps">
                <div className="usp-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c1 6.13.43 11.42-3.13 14.83A7 7 0 0 1 11 20z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
                  </svg>
                  <span>100% Natural</span>
                </div>
                <div className="usp-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L8 6h8l-4-4z" />
                    <path d="M8 6v4c0 4 2 8 4 10 2-2 4-6 4-10V6" />
                  </svg>
                  <span>No Additives</span>
                </div>
                <div className="usp-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
                  </svg>
                  <span>Lab Tested</span>
                </div>
                <div className="usp-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>Premium Quality</span>
                </div>
              </div>

              <div className="product-rating">
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      fill="#f4a574"
                      stroke="#f4a574"
                      strokeWidth="1"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="rating-value">{product.rating}</span>
                <span className="rating-count">({product.reviewCount})</span>
              </div>

              <div className="product-weight-options">
                <label>Weight:</label>
                <div className="weight-buttons">
                  {WEIGHTS.map((w) => (
                    <button
                      key={w}
                      type="button"
                      className={`weight-btn${weight === w ? " active" : ""}`}
                      onClick={() => setWeight(w)}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              <div className="product-price-row">
                <span className="price-current">{product.price}</span>
                <span className="price-original">{product.originalPrice}</span>
                <span className="price-discount">{product.discount}</span>
              </div>

              <div className="product-tags">
                {product.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="product-sidebar">
              <div className="delivery-card">
                <div className="delivery-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div>
                  <h4>Free Delivery</h4>
                  <p>On orders above ₹499</p>
                </div>
              </div>

              <div className="why-love-it">
                <h4>Why you&apos;ll love it</h4>
                <ul>
                  {product.lovePoints.map((point) => (
                    <li key={point}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="quantity-control">
                <label>Quantity:</label>
                <div className="qty-wrapper">
                  <button
                    type="button"
                    className="qty-btn minus"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    value={qty}
                    min={1}
                    max={10}
                    className="qty-input"
                    aria-label="Quantity"
                    onChange={(e) => {
                      const v = parseInt(e.target.value, 10) || 1;
                      setQty(Math.min(10, Math.max(1, v)));
                    }}
                  />
                  <button
                    type="button"
                    className="qty-btn plus"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => Math.min(10, q + 1))}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </div>

              <button type="button" className="btn-add-to-cart">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                Add to Cart
              </button>
              <button type="button" className="btn-buy-now">
                Buy Now
              </button>
              <a href="#" className="btn-wishlist" onClick={(e) => e.preventDefault()}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Add to Wishlist
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container">
          <div className="trust-strip-grid">
            <div className="trust-strip-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Sourced from Trusted Farms</span>
            </div>
            <div className="trust-strip-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 11h18l-2 8H5l-2-8z" />
                <path d="M12 11V4" />
                <path d="M9 4h6" />
              </svg>
              <span>Freshly Ground in Small Batches</span>
            </div>
            <div className="trust-strip-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L8 6h8l-4-4z" />
                <path d="M8 6v4c0 4 2 8 4 10 2-2 4-6 4-10V6" />
              </svg>
              <span>No Artificial Colors or Preservatives</span>
            </div>
            <div className="trust-strip-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>Packed Hygienically for Freshness</span>
            </div>
          </div>
        </div>
      </section>

      <ProductTabs product={product} />
    </>
  );
}
