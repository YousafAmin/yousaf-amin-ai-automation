import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Yousaf Amin — AI Automation & Business Systems Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #05060a 0%, #0b0e16 55%, #12101f 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #6d5cf6, #a855f7)",
              color: "white",
              fontSize: 26,
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            YA
          </div>
          <div style={{ display: "flex", color: "#9aa1b2", fontSize: 24 }}>Yousaf Amin</div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 58,
            fontWeight: 700,
            color: "#f4f5f7",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          AI-Powered Systems That Help Businesses Work Smarter
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 26, color: "#22d3ee" }}>
          AI Automation &amp; Business Systems Specialist
        </div>
      </div>
    ),
    { ...size },
  );
}
