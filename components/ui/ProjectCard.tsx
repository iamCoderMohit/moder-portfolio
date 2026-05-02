"use client";

import { Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        className="card"
        style={{
          overflow: "hidden",
          cursor: "pointer",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Preview area */}
        <div
          style={{
            height: "200px",
            background: project.bgGradient || project.bgColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Project screenshot or placeholder */}
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "75%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                objectFit: "cover",
              }}
              onError={(e) => {
                // Hide broken image, show title instead
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          ) : null}

          {/* Placeholder text shown if no image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.15)",
              pointerEvents: "none",
            }}
          >
            {project.title}
          </div>

          {/* External link icon on hover */}
          <div
            style={{
              position: "absolute",
              top: "0.75rem",
              right: "0.75rem",
              width: "28px",
              height: "28px",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(4px)",
            }}
          >
            <ExternalLink size={13} color="white" />
          </div>
        </div>

        {/* Card footer */}
        <div style={{ padding: "0.9rem 1rem" }}>
          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "var(--text-primary)",
              margin: "0 0 0.4rem 0",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              margin: "0 0 0.6rem 0",
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.68rem",
                  color: "var(--accent)",
                  background: "rgba(249,115,22,0.1)",
                  border: "1px solid rgba(249,115,22,0.2)",
                  borderRadius: "9999px",
                  padding: "0.1rem 0.5rem",
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
