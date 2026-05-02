export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "GitHub Actions", "Vercel", "AWS", "Linux"],
  },
  {
    category: "Currently Learning",
    skills: ["Rust", "Web3", "LLM Fine-tuning"],
  },
];
