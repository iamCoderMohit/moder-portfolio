"use client";

import { siteConfig } from "@/data/config";

export default function HeroBanner() {
  return (
    <div style={{ position: "relative", width: "100%", height: "280px", overflow: "hidden" }}>
      {/* Banner image — replace /banner.jpg with your own */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${siteConfig.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.75)",
        }}
      />

      {/* Fallback gradient if no image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
          zIndex: 0,
        }}
      />

      {/* Quote overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          padding: "0 2rem",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "rgba(255,255,255,0.9)",
            textAlign: "center",
            maxWidth: "600px",
            textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            lineHeight: 1.6,
          }}
        >
          "{siteConfig.bannerQuote}"
        </p>
      </div>
    </div>
  );
}
