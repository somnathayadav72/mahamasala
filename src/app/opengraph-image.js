import { ImageResponse } from "next/og";

export const alt = "Satyasee — Rooted in India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "58px 68px", background: "linear-gradient(135deg, #fdf8f3, #fde8d8 62%, #e8dff5)", color: "#2d3561" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", fontSize: 58, fontWeight: 700, letterSpacing: -3 }}>Satyasee</div>
        <div style={{ display: "flex", fontSize: 18, color: "#e8734a", letterSpacing: 4 }}>ROOTED IN INDIA</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 600, lineHeight: 1.04, letterSpacing: -4 }}>Flavour, grounded in origin.</div>
        <div style={{ display: "flex", fontSize: 24, color: "#575b70" }}>Thoughtfully selected spices and blends for Indian kitchens.</div>
      </div>
      <div style={{ display: "flex", gap: 16, fontSize: 19, color: "#2d3561" }}><span>PURE SPICES</span><span>·</span><span>DISTINCTIVE BLENDS</span><span>·</span><span>EVERYDAY FLAVOUR</span></div>
    </div>,
    { ...size },
  );
}
