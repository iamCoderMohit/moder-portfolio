"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/config";
import { GithubIcon, TwitterXIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

function getOrdinalSuffix(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitors").then(r => r.json()).then(d => setVisitorCount(d.count)).catch(() => setVisitorCount(null));
  }, []);

  const socials = [
    { icon: GithubIcon, label: "GitHub", href: siteConfig.socials.github },
    { icon: TwitterXIcon, label: "Twitter", href: siteConfig.socials.twitter },
    { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.socials.linkedin },
  ];

  return (
    <footer id="contact">
      <div className="section" style={{ paddingBottom: "1rem", textAlign: "center" }}>
        <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
          If you've read this far, you might be interested in what I do.
        </p>
        <a href={siteConfig.calLink} target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ margin: "0 auto" }}>
          <div style={{ width: "20px", height: "20px", borderRadius: "9999px", background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontWeight: 700, flexShrink: 0 }}>MJ</div>
          Book a Free Call
        </a>
      </div>

      <div className="section" style={{ paddingTop: "1rem", paddingBottom: "1.5rem" }}>
        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.35rem" }}>Let's connect</p>
        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>Find me on these platforms</p>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-pill">
              <Icon size={14} />{label}
            </a>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--border)", padding: "1rem 0" }}>
        <div className="section" style={{ paddingTop: "0", paddingBottom: "0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
          <div>
            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: 0 }}>
              Design & Developed by <strong style={{ color: "var(--text-secondary)" }}>{siteConfig.name.split(" ")[0]}</strong>
            </p>
            <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", margin: "0.15rem 0 0 0", opacity: 0.6 }}>
              © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            {visitorCount !== null && (
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "9999px", padding: "0.35rem 0.85rem", fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                <span style={{ fontSize: "0.85rem" }}>👁</span>
                You are the{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  {visitorCount.toLocaleString()}<sup style={{ fontSize: "0.6rem" }}>{getOrdinalSuffix(visitorCount)}</sup>
                </strong>{" "}visitor
              </div>
            )}
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top"
              style={{ width: "36px", height: "36px", borderRadius: "9999px", background: "var(--bg-card)", border: "1px solid var(--border)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", transition: "all 0.2s ease" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
