export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="container">
        <div className="proof-stat">
          <div className="proof-stat-icon">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="#e8734a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M24 10 C24 10 14 16 14 24 C14 30 18 34 24 34 C30 34 34 30 34 24 C34 16 24 10 24 10Z" />
              <path d="M18 24 C18 24 14 20 14 14" />
              <path d="M30 24 C30 24 34 20 34 14" />
            </svg>
          </div>
          <div>
            <p className="proof-stat-label">Loved by</p>
            <h3 className="proof-stat-number">20,000+</h3>
            <p className="proof-stat-sub">Home Cooks</p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p className="rating-text">4.8/5 from 2,500+ reviews</p>
          <blockquote>
            &ldquo;The aroma is incredible! Satyasee spices make every dish
            taste like it&apos;s made with love and tradition.&rdquo;
          </blockquote>
          <p className="author">— Priya S., Bengaluru</p>
        </div>
        <div className="proof-badges">
          <div className="proof-badge">
            <div className="proof-badge-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="#5a8f4e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M24 6 Q18 10 18 18 V28 Q18 34 24 38 Q30 34 30 28 V18 Q30 10 24 6Z" />
                <path d="M20 22 L22 26 L28 20" />
              </svg>
            </div>
            <h4>
              Lab Tested
              <br />
              for Purity
            </h4>
          </div>
          <div className="proof-badge">
            <div className="proof-badge-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="#5a8f4e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 18 H34 V38 Q34 42 24 42 Q14 42 14 38 Z" />
                <path d="M14 24 H34" />
                <path d="M20 12 V18" />
                <path d="M28 12 V18" />
                <circle cx="24" cy="32" r="3" />
              </svg>
            </div>
            <h4>
              Hygienically
              <br />
              Packed
            </h4>
          </div>
          <div className="proof-badge">
            <div className="proof-badge-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="#5a8f4e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="24" cy="24" r="16" />
                <path d="M16 24 L20 28 L32 18" />
              </svg>
            </div>
            <h4>
              100% Safe
              <br />
              &amp; Trusted
            </h4>
          </div>
          <div className="proof-badge">
            <div className="proof-badge-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="#5a8f4e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M24 6 L24 10" />
                <path d="M24 10 Q14 14 14 24 Q14 36 24 42 Q34 36 34 24 Q34 14 24 10Z" />
                <path d="M18 28 Q24 32 30 28" />
                <path d="M20 22 Q22 18 24 22 Q26 18 28 22" />
              </svg>
            </div>
            <h4>
              Proudly
              <br />
              Made in India
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
