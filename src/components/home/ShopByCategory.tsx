import Link from "next/link";
import CategoryCard from "@/components/ui/CategoryCard";
import Squiggle from "@/components/ui/Squiggle";
import { categories } from "@/lib/categories";

type ShopByCategoryProps = {
  /** categories page shows descriptions + pride bar + different trust copy */
  variant?: "home" | "page";
};

export default function ShopByCategory({ variant = "home" }: ShopByCategoryProps) {
  const isPage = variant === "page";

  return (
    <section className="home-categories-section" id="shop-by-category">
      <div className="cat-blob cat-blob-1" aria-hidden="true" />
      <div className="cat-blob cat-blob-2" aria-hidden="true" />
      <div className="cat-blob cat-blob-3" aria-hidden="true" />
      <div className="cat-blob cat-blob-4" aria-hidden="true" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/branches.png"
        alt=""
        className="branch-decor branch-decor-tr"
        aria-hidden="true"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/branches.png"
        alt=""
        className="branch-decor branch-decor-bl"
        aria-hidden="true"
      />

      <div className="container">
        <header className="home-categories-header">
          <p className="cat-range-label">
            <svg
              className="cat-range-leaf"
              viewBox="0 0 24 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 12 Q6 4 12 8 Q16 12 22 6"
                stroke="#7a9e6b"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            EXPLORE OUR RANGE
            <svg
              className="cat-range-leaf cat-range-leaf-r"
              viewBox="0 0 24 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 12 Q6 4 12 8 Q16 12 22 6"
                stroke="#7a9e6b"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </p>
          <h2 className="home-cat-title">Shop by Category</h2>
          <Squiggle className="home-cat-squiggle" />
          <p className="home-cat-subtitle">
            Find the perfect masala for every meal and mood.
          </p>
        </header>

        <div className="category-layout">
          <article className="category-featured-banner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/branches.png"
              alt=""
              className="branch-decor branch-decor-banner"
              aria-hidden="true"
            />
            <div className="category-featured-copy">
              <p className="category-featured-label">
                <span className="spark">✦</span> Best for
              </p>
              <h3 className="category-featured-title">
                <em>
                  everyday
                  <br />
                  cooking
                </em>
              </h3>
              <Squiggle className="category-featured-squiggle" />
              <p className="category-featured-desc">
                Handpicked spices,
                <br />
                flavour in every pinch.
              </p>
              <Link
                href={isPage ? "/shop" : "/categories"}
                className="btn-primary category-featured-btn"
              >
                Browse Categories
                <span className="arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="category-featured-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/satyasee-spice-pouches-turmeric-chilli-coriander.png"
                alt="Satyasee turmeric, red chilli and coriander spice pouches"
                className="category-featured-img"
                width={520}
                height={390}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              showDescription={isPage}
            />
          ))}
        </div>
      </div>

      <div className="trust-bar trust-bar-categories">
        <div className="container">
          {isPage ? (
            <>
              <div className="trust-item">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#7a9e6b" strokeWidth="1.8">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c1 6.13.43 11.42-3.13 14.83A7 7 0 0 1 11 20z" />
                  </svg>
                </div>
                <div>
                  <h4>100% Natural</h4>
                  <p>No artificial colors or preservatives</p>
                </div>
              </div>
              <div className="trust-item">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>Sourced from Trusted Farms</h4>
                  <p>Across India</p>
                </div>
              </div>
              <div className="trust-item">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#e8734a" strokeWidth="1.8">
                    <path d="M3 11h18l-2 8H5l-2-8z" />
                    <path d="M12 11V4" />
                    <path d="M9 4h6" />
                  </svg>
                </div>
                <div>
                  <h4>Freshly Ground</h4>
                  <p>In small batches for maximum flavour</p>
                </div>
              </div>
              <div className="trust-item">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#9b7ec8" strokeWidth="1.8">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4>Lab Tested</h4>
                  <p>For purity and safety</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="trust-item">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#7a9e6b" strokeWidth="1.8">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c1 6.13.43 11.42-3.13 14.83A7 7 0 0 1 11 20z" />
                  </svg>
                </div>
                <div>
                  <h4>100% Natural</h4>
                  <p>No Preservatives</p>
                </div>
              </div>
              <div className="trust-item">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#e8734a" strokeWidth="1.8">
                    <path d="M3 11h18l-2 8H5l-2-8z" />
                    <path d="M12 11V4" />
                  </svg>
                </div>
                <div>
                  <h4>Finest Quality</h4>
                  <p>Handpicked</p>
                </div>
              </div>
              <div className="trust-item">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>Sourced from India</h4>
                  <p>Trusted Farmers</p>
                </div>
              </div>
              <div className="trust-item">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#9b7ec8" strokeWidth="1.8">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <h4>Freshly Packed</h4>
                  <p>With Care</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {isPage ? (
        <div className="pride-bar">
          <div className="container">
            <div className="pride-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e8734a"
                strokeWidth="1.8"
                style={{ width: 24, height: 24 }}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <p>
                <strong>Made with love,</strong>
                <br />
                packed with purity.
              </p>
            </div>
            <div className="pride-item">
              <span style={{ fontSize: 20 }}>🇮🇳</span>
              <p>
                <strong>Proudly Made in India</strong>
                <br />
                With tradition, quality & care.
              </p>
            </div>
            <div className="pride-item">
              <p>
                <strong>Loved by</strong>
              </p>
              <p className="pride-stat">20,000+ Home Cooks</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
