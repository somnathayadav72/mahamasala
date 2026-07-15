export default function RootedSection() {
  return (
    <section className="rooted-section">
      <div className="container">
        <div className="rooted-layout">
          <div className="rooted-content">
            <p className="rooted-label">🌿 Why Choose Satyasee</p>
            <h2 className="rooted-title">
              Rooted in India.
              <br />
              <em>
                Crafted for
                <br />
                Real Kitchens.
              </em>
            </h2>
            <p className="rooted-desc">
              At Satyasee, we bring you the purest spices, handpicked from
              trusted farms across India and carefully ground to lock in their
              natural oils, aroma and flavour.
            </p>

            <div className="rooted-points">
              <div className="rooted-point">
                <div className="rooted-point-icon">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="#5a8f4e"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M24 8 Q16 12 16 22 Q16 34 24 38 Q32 34 32 22 Q32 12 24 8Z" />
                    <path d="M20 20 L22 24 L28 18" />
                    <path d="M24 38 V44" />
                    <path d="M20 44 H28" />
                  </svg>
                </div>
                <div>
                  <h4>100% Natural</h4>
                  <p>Pure spices, nothing artificial.</p>
                </div>
              </div>
              <div className="rooted-point">
                <div className="rooted-point-icon">
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
                <div>
                  <h4>Freshly Ground in Small Batches</h4>
                  <p>Maximum aroma, maximum flavour.</p>
                </div>
              </div>
              <div className="rooted-point">
                <div className="rooted-point-icon">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="#7a5cad"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M24 4 L24 8" />
                    <path d="M24 8 Q16 12 16 22 Q16 34 24 38 Q32 34 32 22 Q32 12 24 8Z" />
                    <path d="M18 22 H30" />
                    <path d="M18 28 H30" />
                    <path d="M16 38 Q24 44 32 38" />
                  </svg>
                </div>
                <div>
                  <h4>No Artificial Colors or Preservatives</h4>
                  <p>Clean, safe and wholesome.</p>
                </div>
              </div>
              <div className="rooted-point">
                <div className="rooted-point-icon">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="#c9a030"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M24 10 C24 10 14 16 14 26 C14 32 18 36 24 36 C30 36 34 32 34 26 C34 16 24 10 24 10Z" />
                    <circle cx="24" cy="26" r="3" />
                    <path d="M24 36 V42" />
                    <path d="M20 42 H28" />
                  </svg>
                </div>
                <div>
                  <h4>Sourced from Trusted Farms</h4>
                  <p>Ethical sourcing, better flavour.</p>
                </div>
              </div>
            </div>

            <a href="#" className="btn-primary">
              Our Story
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
            </a>
          </div>
          <div className="rooted-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/root.png"
              alt="Satyasee spices with mortar and pestle — turmeric, coriander and red chilli pouches"
              className="rooted-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
