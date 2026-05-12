"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QuoteBlock from "@/components/ui/QuoteBlock";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <main style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }
        @media (max-width: 540px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <Navbar />
      <div style={{ paddingTop: "56px" }}>
        <div className="section" style={{ paddingBottom: "0.5rem" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.3rem",
              fontSize: "0.8rem", color: "var(--text-muted)", textDecoration: "none",
              marginBottom: "1.5rem", transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <ArrowLeft size={13} /> Back
          </Link>

          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "1.4rem",
            fontWeight: 400, fontStyle: "italic", color: "var(--text-muted)",
            margin: "0 0 1.5rem 0",
          }}>
            Projects / Works
          </h1>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.75rem" }}>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                style={{
                  background: activeTag === tag ? "var(--accent)" : "var(--pill-bg)",
                  border: `1px solid ${activeTag === tag ? "var(--accent)" : "var(--pill-border)"}`,
                  color: activeTag === tag ? "white" : "var(--text-secondary)",
                  borderRadius: "9999px", padding: "0.25rem 0.75rem",
                  fontSize: "0.78rem", fontWeight: 500, cursor: "pointer",
                  transition: "all 0.2s ease", fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem", padding: "3rem 0" }}>
              No projects found for this tag.
            </p>
          )}
        </div>

        <QuoteBlock />
        <Footer />
      </div>
    </main>
  );
}