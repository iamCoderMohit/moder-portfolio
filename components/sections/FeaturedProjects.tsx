"use client";

import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section" style={{ paddingTop: "0.5rem" }}>
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

      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", marginBottom: "1.25rem",
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "1.1rem",
          fontWeight: 400, color: "var(--text-muted)", fontStyle: "italic", margin: 0,
        }}>
          Projects / Works
        </h2>
        <Link href="/projects" style={{
          fontSize: "0.8rem", color: "var(--accent)", textDecoration: "none",
          display: "flex", alignItems: "center", gap: "0.25rem", fontWeight: 500,
        }}>
          View all <ArrowRight size={13} />
        </Link>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}