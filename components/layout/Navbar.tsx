"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <style>{`
        .nav-links { display: flex; align-items: center; gap: 1.5rem; }
        .hamburger { display: none; }
        .mobile-menu { display: none; }

        @media (max-width: 540px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu-open { display: flex; }
        }
      `}</style>

      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled || menuOpen ? "var(--bg)" : "transparent",
        borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
      }}>
        <div style={{
          maxWidth: "720px", margin: "0 auto", padding: "0 1.5rem",
          height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link href="/" style={{
            fontFamily: "'Playfair Display', serif", fontSize: "1.1rem",
            fontWeight: 600, color: "var(--text-primary)", textDecoration: "none",
            letterSpacing: "-0.01em",
          }}>
            {siteConfig.name.split(" ")[0]}
            <span style={{ color: "var(--accent)" }}>.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-links">
            {navLinks.map(({ label, href }) => (
              <Link key={label} href={href} style={{
                fontSize: "0.85rem", color: "var(--text-muted)", textDecoration: "none",
                fontWeight: 500, transition: "color 0.2s ease",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {label}
              </Link>
            ))}
            {mounted && (
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                style={{
                  background: "var(--pill-bg)", border: "1px solid var(--pill-border)",
                  borderRadius: "9999px", padding: "0.35rem 0.6rem", cursor: "pointer",
                  display: "flex", alignItems: "center", color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            )}
          </nav>

          {/* Mobile: theme + hamburger */}
          <div className="hamburger" style={{ alignItems: "center", gap: "0.6rem" }}>
            {mounted && (
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                style={{
                  background: "var(--pill-bg)", border: "1px solid var(--pill-border)",
                  borderRadius: "9999px", padding: "0.35rem 0.6rem", cursor: "pointer",
                  display: "flex", alignItems: "center", color: "var(--text-secondary)",
                }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            )}
            <button onClick={() => setMenuOpen((o) => !o)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--text-primary)", display: "flex", alignItems: "center", padding: "0.25rem",
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
          style={{
            flexDirection: "column", gap: "0", borderTop: "1px solid var(--border)",
            background: "var(--bg)",
          }}
        >
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "0.85rem 1.5rem", fontSize: "0.9rem", color: "var(--text-secondary)",
                textDecoration: "none", borderBottom: "1px solid var(--border)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {label}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}