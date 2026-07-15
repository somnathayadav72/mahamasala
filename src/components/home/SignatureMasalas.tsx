import Link from "next/link";

export default function SignatureMasalas() {
  return (
    <section className="signature-section">
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

      <svg
        className="signature-leaf signature-leaf-1"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 4 Q30 10 28 24 Q20 36 12 24 Q10 10 20 4Z"
          fill="#e8734a"
          opacity="0.25"
        />
      </svg>
      <svg
        className="signature-leaf signature-leaf-2"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 4 Q30 10 28 24 Q20 36 12 24 Q10 10 20 4Z"
          fill="#f4a574"
          opacity="0.2"
        />
      </svg>

      <div className="container">
        <header className="signature-header">
          <p className="signature-subtitle">✦ PURE SPICES, PERFECTLY CRAFTED ✦</p>
          <h2 className="signature-title">Our Signature Masalas</h2>
          <p className="signature-desc">
            Handpicked spices, freshly ground in small batches to deliver
            unmatched flavour, aroma, and purity in every meal.
          </p>
        </header>

        <div className="signature-image-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/signature.png"
            alt="Satyasee signature masala range — turmeric, red chilli, coriander, garam masala, kitchen king and biryani masala pouches"
            className="signature-img"
            width={1200}
            height={500}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="signature-features">
          <div className="signature-feature">
            <div className="signature-feature-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="#c46840"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M24 6 Q20 10 18 16" />
                <path d="M24 6 Q28 10 30 16" />
                <path d="M21 14 Q18 14 17 11" />
                <path d="M27 14 Q30 14 31 11" />
                <ellipse cx="24" cy="22" rx="14" ry="3" />
                <path d="M10 22 Q10 38 24 38 Q38 38 38 22" />
                <path d="M34 10 L30 16" />
                <circle cx="36" cy="8" r="2" />
              </svg>
            </div>
            <div className="signature-feature-text">
              <h4>Freshly Ground</h4>
              <p>
                Ground in small batches to lock in natural oils and intense
                flavour.
              </p>
            </div>
          </div>
          <div className="signature-feature">
            <div className="signature-feature-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="#c46840"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M24 4 L24 8" />
                <path d="M24 8 Q16 12 16 22 Q16 34 24 38 Q32 34 32 22 Q32 12 24 8Z" />
                <path d="M20 20 L22 24 L28 18" />
                <path d="M16 38 Q24 44 32 38" />
              </svg>
            </div>
            <div className="signature-feature-text">
              <h4>No Added Preservatives</h4>
              <p>
                Pure spices, no fillers, no artificial colours, just clean
                goodness.
              </p>
            </div>
          </div>
          <div className="signature-feature">
            <div className="signature-feature-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="#c46840"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 20 Q14 14 18 10" />
                <path d="M24 18 Q22 12 26 8" />
                <path d="M32 20 Q34 14 30 10" />
                <path d="M10 24 Q10 40 24 40 Q38 40 38 24" />
                <ellipse cx="24" cy="24" rx="14" ry="3" />
                <path d="M14 30 Q20 28 26 30 Q32 28 38 30" />
              </svg>
            </div>
            <div className="signature-feature-text">
              <h4>Rich Aroma</h4>
              <p>
                Carefully sourced spices that bring warmth, depth and
                irresistible aroma.
              </p>
            </div>
          </div>
        </div>

        <div className="signature-cta">
          <Link href="/shop" className="btn-primary">
            Shop All Masalas
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
      </div>
    </section>
  );
}
