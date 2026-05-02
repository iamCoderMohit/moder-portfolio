"use client";

import { useState, useEffect } from "react";
import { quotes } from "@/data/quotes";
import { RefreshCw } from "lucide-react";

export default function QuoteBlock() {
  const [quote, setQuote] = useState(quotes[0]);
  const [fading, setFading] = useState(false);

  const randomQuote = () => {
    setFading(true);
    setTimeout(() => {
      const remaining = quotes.filter((q) => q.text !== quote.text);
      const next = remaining[Math.floor(Math.random() * remaining.length)];
      setQuote(next);
      setFading(false);
    }, 200);
  };

  useEffect(() => {
    // Pick a random quote on mount
    const idx = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[idx]);
  }, []);

  return (
    <div className="section" style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
      <div
        className="card"
        style={{
          padding: "2rem",
          textAlign: "center",
          position: "relative",
          transition: "opacity 0.2s ease",
          opacity: fading ? 0 : 1,
        }}
      >
        {/* Big quote mark */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1.25rem",
            fontFamily: "'Playfair Display', serif",
            fontSize: "3rem",
            lineHeight: 1,
            color: "var(--text-muted)",
            opacity: 0.4,
            userSelect: "none",
          }}
        >
          "
        </div>

        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            margin: "0 0 0.75rem 0",
            padding: "0 1rem",
          }}
        >
          "{quote.text}"
        </p>
        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            margin: 0,
            fontWeight: 500,
          }}
        >
          — {quote.author}
        </p>

        {/* Refresh button */}
        <button
          onClick={randomQuote}
          aria-label="New quote"
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-muted)",
            padding: "0.25rem",
            transition: "color 0.2s ease, transform 0.3s ease",
            display: "flex",
            alignItems: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.transform = "rotate(180deg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-muted)";
            e.currentTarget.style.transform = "rotate(0deg)";
          }}
        >
          <RefreshCw size={13} />
        </button>
      </div>
    </div>
  );
}
