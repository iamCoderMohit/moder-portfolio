"use client";

import { siteConfig } from "@/data/config";
import { GithubIcon, TwitterXIcon, LinkedinIcon, MailIcon } from "@/components/ui/SocialIcons";

const socials = [
  { icon: GithubIcon, label: "GitHub", href: siteConfig.socials.github },
  { icon: TwitterXIcon, label: "Twitter", href: siteConfig.socials.twitter },
  { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.socials.linkedin },
  { icon: MailIcon, label: "Email", href: `mailto:${siteConfig.socials.email}` },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ paddingTop: "0" }}>
      <div style={{ marginTop: "-48px", marginBottom: "1rem" }}>
        <div style={{
          width: "96px", height: "96px", borderRadius: "9999px", overflow: "hidden",
          border: "3px solid var(--bg)", background: "var(--bg-card)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          position: "relative",
        }}>
          {/* Fallback initials — shown if image fails */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, #F97316, #ea580c)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Playfair Display', serif", fontSize: "2rem",
            color: "white", fontWeight: 600,
          }}>
            MJ
          </div>
          {/* Actual photo — place your image at /public/avatar.jpg */}
          <img
            src={siteConfig.avatar}
            alt="Mohit Joshi"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", borderRadius: "9999px",
              zIndex: 10
            }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        </div>
      </div>

      <div style={{
        display: "flex", alignItems: "flex-start", justifyContent: "space-between",
        gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem",
      }}>
        <div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontStyle: "italic",
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 600,
            color: "var(--text-primary)", margin: 0, lineHeight: 1.2,
          }}>
            {siteConfig.name}
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.35rem", fontWeight: 400 }}>
            {siteConfig.tagline}
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{
                width: "36px", height: "36px", borderRadius: "9999px",
                border: "1px solid var(--pill-border)", background: "var(--pill-bg)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--text-muted)", transition: "all 0.2s ease", textDecoration: "none",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--pill-border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.8, margin: 0 }}>
        <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>I build from zero.</strong>{" "}
        {siteConfig.bio}
      </p>
    </section>
  );
}