"use client";

import Navbar from "@/components/layout/Navbar";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function ResumePage() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
      <Navbar />
      <div style={{ paddingTop: "56px" }}>
        <div className="section" style={{ paddingBottom: "2rem" }}>

          {/* Back + Download row */}
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.75rem",
          }}>
            <Link href="/"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                fontSize: "0.8rem", color: "var(--text-muted)", textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <ArrowLeft size={13} /> Back
            </Link>

            <a
              href="/resume.pdf"
              download={`${siteConfig.name.replace(" ", "_")}_Resume.pdf`}
              className="btn-accent"
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "1.4rem",
            fontWeight: 400, fontStyle: "italic", color: "var(--text-muted)",
            margin: "0 0 1.5rem 0",
          }}>
            Resume
          </h1>

          {/* PDF viewer */}
          <div style={{
            width: "100%", borderRadius: "1rem", overflow: "hidden",
            border: "1px solid var(--border)", background: "var(--bg-card)",
          }}>
            <iframe
              src="/resume.pdf"
              style={{
                width: "100%",
                height: "80vh",
                border: "none",
                display: "block",
              }}
              title="Resume"
            />
          </div>

          {/* Fallback message if iframe doesn't load */}
          <p style={{
            textAlign: "center", color: "var(--text-muted)",
            fontSize: "0.8rem", marginTop: "1rem",
          }}>
            Can't see the PDF?{" "}
            <a href="/resume.pdf" target="_blank" style={{ color: "var(--accent)", textDecoration: "none" }}>
              Open it in a new tab →
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}