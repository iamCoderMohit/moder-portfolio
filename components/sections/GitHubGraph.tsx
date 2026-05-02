"use client";

import { useEffect, useState } from "react";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface GitHubData {
  totalContributions: number;
  weeks: Week[];
}

function getColor(count: number, isDark: boolean): string {
  if (count === 0) return isDark ? "#1e1e1e" : "#eaeae5";
  if (count <= 2) return "#fdba74";
  if (count <= 5) return "#fb923c";
  if (count <= 9) return "#F97316";
  return "#ea580c";
}

export default function GitHubGraph() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));

    const checkTheme = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  if (!data || data.weeks.length === 0) {
    return (
      <div className="section" style={{ paddingTop: "0.5rem" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            fontWeight: 400,
            color: "var(--text-muted)",
            marginBottom: "1rem",
            fontStyle: "italic",
          }}
        >
          GitHub Activity
        </h2>
        <div className="card" style={{ padding: "1.5rem", textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            Set your GITHUB_TOKEN to show activity
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="section" style={{ paddingTop: "0.5rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            fontWeight: 400,
            color: "var(--text-muted)",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          GitHub Activity
        </h2>
        <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
          {data.totalContributions.toLocaleString()} contributions this year
        </span>
      </div>

      <div className="card" style={{ padding: "1.25rem", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: "3px", minWidth: "fit-content" }}>
          {data.weeks.map((week, wi) => (
            <div key={wi} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              {week.contributionDays.map((day, di) => (
                <div
                  key={di}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "2px",
                    backgroundColor: getColor(day.contributionCount, isDark),
                    transition: "background-color 0.3s ease",
                    cursor: "default",
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
