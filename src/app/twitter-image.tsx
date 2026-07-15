import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} - ${siteConfig.tagline}. Authentic Indian spices.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Twitter / X large image card (same brand artwork as Open Graph) */
export default function TwitterImage() {
  const { colors, name, tagline } = siteConfig;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `linear-gradient(145deg, ${colors.cream} 0%, #fff5ee 45%, ${colors.peach} 100%)`,
          padding: "56px 64px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -40,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(232, 115, 74, 0.12)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(122, 158, 107, 0.12)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <svg width="88" height="48" viewBox="0 0 60 20" fill="none">
            <path d="M22 14 Q24 6 28 8 Q26 14 22 14Z" fill="#e8734a" />
            <path d="M28 12 Q32 4 36 8 Q34 14 28 12Z" fill="#f4a574" />
            <path d="M36 12 Q38 4 42 8 Q40 14 36 12Z" fill="#7a9e6b" />
          </svg>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 52,
                fontWeight: 700,
                color: colors.primary,
                lineHeight: 1,
              }}
            >
              {name}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 18,
                color: colors.accent,
                letterSpacing: "0.14em",
                fontWeight: 600,
              }}
            >
              {tagline.toUpperCase()}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              fontSize: 58,
              fontWeight: 700,
              color: colors.primary,
              lineHeight: 1.15,
            }}
          >
            Everyday masalas, reimagined.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#555555",
              lineHeight: 1.4,
              maxWidth: 820,
            }}
          >
            Authentic Indian spices, freshly ground for vibrant flavours in
            every meal.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 12,
          }}
        >
          {["100% Natural", "Freshly Ground", "No Preservatives", "Sourced from India"].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.9)",
                  border: "1.5px solid rgba(45, 53, 97, 0.08)",
                  borderRadius: 999,
                  padding: "12px 20px",
                  fontSize: 18,
                  fontWeight: 600,
                  color: colors.primary,
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
