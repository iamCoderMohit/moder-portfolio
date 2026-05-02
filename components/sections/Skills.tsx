"use client";

import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ paddingTop: "1rem" }}>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.1rem",
          fontWeight: 400,
          color: "var(--text-muted)",
          marginBottom: "1.5rem",
          fontStyle: "italic",
        }}
      >
        Skills / Stack
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {skillCategories.map((cat) => (
          <div key={cat.category}>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.6rem",
                fontWeight: 500,
              }}
            >
              {cat.category}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
