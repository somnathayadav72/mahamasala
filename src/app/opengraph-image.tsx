import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}. Authentic Indian spices.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share preview (WhatsApp, iMessage, Slack, LinkedIn, Facebook, etc.) */
export default function OpenGraphImage() {
  const { colors, name, tagline, description } = siteConfig;

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
          fontFamily: "serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Soft decorative blobs */}
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

        {/* Top row: logo leaves + brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            zIndex: 1,
          }}
        >
          <svg
            width="88"
            height="48"
            viewBox="0 0 60 20"
            fill="none"
            style={{ display: "flex" }}
          >
            <path d="M22 14 Q24 6 28 8 Q26 14 22 14Z" fill="#e8734a" />
            <path d="M28 12 Q32 4 36 8 Q34 14 28 12Z" fill="#f4a574" />
            <path d="M36 12 Q38 4 42 8 Q40 14 36 12Z" fill="#7a9e6b" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: colors.primary,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontSize: 18,
                color: colors.accent,
                letterSpacing: "0.18em",
                fontFamily: "sans-serif",
                fontWeight: 600,
              }}
            >
              ✦ {tagline.toUpperCase()} ✦
            </div>
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            zIndex: 1,
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: colors.primary,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Everyday masalas,{" "}
            <span style={{ color: colors.accent, fontStyle: "italic" }}>
              reimagined.
            </span>
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#555",
              fontFamily: "sans-serif",
              fontWeight: 400,
              lineHeight: 1.45,
              maxWidth: 820,
            }}
          >
            {description}
          </div>
        </div>

        {/* Bottom pills */}
        <div
          style={{
            display: "flex",
            gap: 14,
            zIndex: 1,
            flexWrap: "wrap",
          }}
        >
          {["100% Natural", "Freshly Ground", "No Preservatives", "Sourced from India"].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.85)",
                  border: "1.5px solid rgba(45, 53, 97, 0.08)",
                  borderRadius: 999,
                  padding: "12px 22px",
                  fontSize: 18,
                  fontFamily: "sans-serif",
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
