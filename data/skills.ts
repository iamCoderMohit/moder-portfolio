export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Realtime & AI",
    skills: ["LiveKit", "Ably", "Gemini AI", "WebRTC", "Chrome Extensions"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub Actions", "AWS", "Linux"],
  },
  {
    category: "Currently Learning",
    skills: ["Rust", "Web3", "Advanced Backend"],
  },
];
