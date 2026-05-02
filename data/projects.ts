export interface Project {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  bgGradient?: string;
  tags: string[];
  link: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "DevFlow",
    description: "A full-stack project management tool built for developers. Real-time updates, kanban boards, and GitHub integration.",
    image: "/projects/devflow.png",
    bgColor: "#0f172a",
    bgGradient: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    link: "https://devflow.example.com",
    github: "https://github.com/mohitjoshi/devflow",
    featured: true,
  },
  {
    title: "AuraUI",
    description: "An open-source React component library with a focus on accessibility, dark mode, and beautiful defaults.",
    image: "/projects/auraui.png",
    bgColor: "#1a0533",
    bgGradient: "linear-gradient(135deg, #1a0533 0%, #4a1572 100%)",
    tags: ["React", "TypeScript", "Storybook", "Tailwind"],
    link: "https://auraui.example.com",
    github: "https://github.com/mohitjoshi/auraui",
    featured: true,
  },
  {
    title: "Synthos",
    description: "AI-powered code review tool that integrates with GitHub PRs and gives context-aware feedback instantly.",
    image: "/projects/synthos.png",
    bgColor: "#0a1f0a",
    bgGradient: "linear-gradient(135deg, #0a1f0a 0%, #1a4a1a 100%)",
    tags: ["Python", "FastAPI", "OpenAI", "GitHub API"],
    link: "https://synthos.example.com",
    github: "https://github.com/mohitjoshi/synthos",
    featured: true,
  },
  {
    title: "PocketLedger",
    description: "A personal finance tracker with smart categorization, monthly reports, and expense predictions.",
    image: "/projects/pocketledger.png",
    bgColor: "#1f1200",
    bgGradient: "linear-gradient(135deg, #1f1200 0%, #4a2d00 100%)",
    tags: ["React Native", "Node.js", "MongoDB"],
    link: "https://pocketledger.example.com",
    featured: false,
  },
  {
    title: "Uptime Owl",
    description: "Lightweight uptime monitoring service with instant alerts, status pages, and response time graphs.",
    image: "/projects/uptimeowl.png",
    bgColor: "#001a2c",
    bgGradient: "linear-gradient(135deg, #001a2c 0%, #003d66 100%)",
    tags: ["Node.js", "Redis", "Docker", "Telegram Bot"],
    link: "https://uptimeowl.example.com",
    featured: false,
  },
  {
    title: "MarkFlow",
    description: "A distraction-free markdown editor with live preview, cloud sync, and export to PDF/HTML.",
    image: "/projects/markflow.png",
    bgColor: "#1a1a1a",
    bgGradient: "linear-gradient(135deg, #1a1a1a 0%, #333333 100%)",
    tags: ["Electron", "React", "TypeScript"],
    link: "https://markflow.example.com",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
