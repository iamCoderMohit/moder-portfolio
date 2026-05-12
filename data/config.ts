export const siteConfig = {
  name: "Mohit Joshi",
  tagline: "Building things for the web, one commit at a time.",
  bio: "I'm a software developer who loves turning ideas into fast, beautiful, and functional products. I work across the full stack — from pixel-perfect UIs to scalable backends. Always learning, always shipping.",
  avatar: "/avatar.jpeg", // Replace with your photo in /public/
  banner: "/banner.jpg", // Replace with your banner in /public/
  bannerQuote: "You make your own luck if you stay at it long enough.",

  // Social links — replace with your actual URLs
  socials: {
    github: "https://github.com/iamCoderMohit",
    twitter: "https://x.com/CoderMohitt",
    linkedin: "https://linkedin.com/in/mohittjoshi18",
    email: "mohitjoshiu@gmail.com",
  },

  // Book a call — set your Calendly/Cal.com link here
  // e.g. "https://cal.com/mohitjoshi" or "https://calendly.com/mohitjoshi"
  calLink: process.env.NEXT_PUBLIC_CAL_LINK || "https://cal.com/mohitjoshi",

  // GitHub username for activity graph
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "iamCoderMohit",

  // SEO
  url: "https://mohitjoshi.dev",
  description: "Software developer building fast, beautiful, full-stack products.",
};
