import Link from "next/link";
import Squiggle from "@/components/ui/Squiggle";

export default function Hero() {
  return (
    <section className="hero">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />

      <div className="container">
        <div className="hero-content">
          <h1>
            Everyday <br />
            masalas, <br />
            <em>reimagined.</em>
          </h1>
          <Squiggle className="squiggle" />
          <p>
            Authentic Indian spices, freshly ground <br />
            for vibrant flavours in every meal.
          </p>
          <Link href="/shop" className="btn-primary">
            Shop Spices
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
          <div className="usp-badges">
            <div className="usp-badge">
              <div className="icon" style={{ background: "#e8f0e3" }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7a9e6b"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c1 6.13.43 11.42-3.13 14.83A7 7 0 0 1 11 20z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6" />
                </svg>
              </div>
              <h4>
                100%
                <br />
                Natural
              </h4>
            </div>
            <div className="usp-badge">
              <div className="icon" style={{ background: "#fde8d8" }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e8734a"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 11h18l-2 8H5l-2-8z" />
                  <path d="M12 11V4" />
                  <path d="M9 4h6" />
                  <path d="M14 7l2-3" />
                </svg>
              </div>
              <h4>
                Freshly
                <br />
                Ground
              </h4>
            </div>
            <div className="usp-badge">
              <div className="icon" style={{ background: "#f3eefa" }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9b7ec8"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 20h10" />
                  <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                  <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                  <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
                </svg>
              </div>
              <h4>
                No Added
                <br />
                Preservatives
              </h4>
            </div>
            <div className="usp-badge">
              <div className="icon" style={{ background: "#fef3d7" }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c9a96e"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h4>
                Sourced
                <br />
                from India
              </h4>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-visual-glow" aria-hidden="true" />
          <div className="hero-visual-ring" aria-hidden="true" />
          <div className="hero-visual-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero_image.png"
              alt="Satyasee spices — turmeric, chilli, coriander and garam masala"
              className="hero-img"
              width={620}
              height={465}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
