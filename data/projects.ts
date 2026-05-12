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
    title: "Watchr",
    description: "A real-time social watch party platform with synchronized YouTube playback, voice/video chat, and live emoji reactions.",
    image: "/projects/watchr.png",
    bgColor: "#0f172a",
    bgGradient: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
    tags: ["Next.js", "TypeScript", "Redis", "Ably"],
    link: "https://watchr-rust.vercel.app",
    github: "https://github.com/iamCoderMohit/watchr",
    featured: true,
  },
  {
    title: "BroJob",
    description: "An AI-powered job analysis platform that summarizes job descriptions, evaluates resume-job fit, and provides instant skill-gap insights through a web app and Chrome extension.",
    image: "/projects/brojob.png",
    bgColor: "#1a0533",
    bgGradient: "linear-gradient(135deg, #1a0533 0%, #4a1572 100%)",
    tags: ["Next.js", "TypeScript", "Gemini AI", "Chrome Extension", "Tailwind CSS"],
    link: "https://bro-job.vercel.app",
    github: "https://github.com/iamCoderMohit/bro-job",
    featured: true,
  },
  {
    title: "HireMe",
    description: "Upload your resume and let our AI match you with the best internships and early-career roles based on semantic similarity.",
    image: "/projects/hireme.png",
    bgColor: "#0a1f0a",
    bgGradient: "linear-gradient(135deg, #0a1f0a 0%, #1a4a1a 100%)",
    tags: ["Express.js", "Postgres", "AI Embeddings", "React"],
    link: "https://hire-me-sigma.vercel.app",
    github: "https://github.com/iamCoderMohit/hire-me",
    featured: true,
  },
  {
    title: "CodeDate",
    description: "Helping Developers Find Their First Date",
    image: "/projects/codedate.png",
    bgColor: "#1f1200",
    bgGradient: "linear-gradient(135deg, #1f1200 0%, #4a2d00 100%)",
    tags: ["React", "Node.js", "Express.js", "Prisma"],
    link: "https://code-date-six.vercel.app/",
    github: "https://github.com/iamCoderMohit/CodeDate",
    featured: false,
  },
  {
    title: "LevelUp",
    description: "Turn your commits into quests. Master new languages through RPG-style progression. Compete with your guild and prove your skills.",
    image: "/projects/levelup.png",
    bgColor: "#001a2c",
    bgGradient: "linear-gradient(135deg, #001a2c 0%, #003d66 100%)",
    tags: ["Node.js", "Express.js", "Prisma", "Next.js"],
    link: "https://level-up-three-gamma.vercel.app/",
    github: "https://github.com/iamCoderMohit/level-up",
    featured: false,
  },
  {
    title: "FirstCommit",
    description: "You will find starter commands of different tech stacks here",
    image: "/projects/firstcommit.png",
    bgColor: "#1a1a1a",
    bgGradient: "linear-gradient(135deg, #1a1a1a 0%, #333333 100%)",
    tags: ["Next.js", "TypeScript"],
    link: "https://first-commit-pied.vercel.app/",
    github: "https://github.com/iamCoderMohit/first-commit",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
