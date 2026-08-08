// =============================================
// EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS
// =============================================
// Almost everything on the site is driven from the constants below.
// Replace the placeholder values with your own details.

const DOMAIN = "bejanvi.tech";
export const BASE_URL = `https://${DOMAIN}`;

export const ABOUT_ME = {
  name: "Janvi",
  title: "Full Stack / Blockchain Engineer",
  location: "Delhi, India",
  email: "janvisinghal10@gmail.com",
  
description: [
  "I'm Janvi — a full stack engineer and Web3 builder who turns ambitious ideas into things that actually work.",
  "I enjoy building where software, blockchain, and design meet, especially when there's a problem worth solving.",
  "Currently building, experimenting, and figuring out what's next — one idea at a time.",
]
,
  profileImage: "/janvi.jpg.jpeg",
  profileGif: "/janvi.jpg.jpeg",
};

export const USER_NAMES = {
  githubUsername: "janvibuilds",
  linkedinUsername: "janvibuilds",
  twitterUsername: "janvibuilds",
  devtoUsername: "janvibuilds",
  instagramUsername: "buildwithjanvi",
  // cal.com username + event slug used by the "schedule a meeting" button
  calUsername: "janvibuilds/15min",
};

export const SOCIAL_LINKS = {
  github: `https://github.com/${USER_NAMES.githubUsername}`,
  linkedin: `https://linkedin.com/in/${USER_NAMES.linkedinUsername}`,
  devto: `https://dev.to/${USER_NAMES.devtoUsername}`,
  twitter: `https://x.com/${USER_NAMES.twitterUsername}`,
  instagram: `https://instagram.com/${USER_NAMES.instagramUsername}`,
  resume: "/resume",
  email: `https://mail.google.com/mail/?view=cm&fs=1&to=${ABOUT_ME.email}&su=Message%20from%20Website&body=Hi!%20I%27m...`,
};

// Contact form submission endpoint (used by the "send a message" form).
// Web3Forms - free form submission service
export const CONTACT_FORM_ENDPOINT = "https://api.web3forms.com/submit";
export const WEB3FORMS_ACCESS_KEY = "a56a4c50-4084-434d-977a-908dda781b36";

export { PROJECTS } from "./projects";

// Skill icons shown in the "technical skills" section.
// Make this YOUR tech stack: add the ones you use, remove the ones you don't.
// Each entry is a https://skillicons.dev slug — browse that site for all
// available icons (e.g. "docker", "aws", "go", "rust", "kubernetes", ...).
export const SKILLS = [
  // Languages
  "typescript",
  "javascript",
  "rust",
  "java",
  "python",
  // Frontend
  "react",
  "nextjs",
  "tailwind",
  // Backend
  "nodejs",
  "express",
  "graphql",
  "prisma",
  "nestjs",
  
  // Databases
  "postgresql",
  "mongodb",
  "redis",
  "supabase",

  // DevOps & Cloud
  "aws",
  "docker",
  "githubactions",
  "linux",
  // Tools
  "vscode",
  "postman",
  "figma", 
];

export const EXPERIENCE = [
  {
    company: "RiseIn",
    companyLink: "https://www.risein.com/",
    logo: "https://www.risein.com/risein-favicon/favicon.svg",
    role: "Stellar Journey to Mastery & Midnight Program",
    period: "Feb 2026 - Present",
    location: "Remote, Global",
    description:
      "Built LumenShake, a full-stack cross-border payroll platform using Next.js, Node.js, PostgreSQL, Stellar, Soroban, and MoneyGram APIs, enabling employers to send USDC payroll globally with seamless local fiat cash-out through MoneyGram. Developed end-to-end payment infrastructure by integrating Stellar wallet authentication, Soroban smart contracts, backend APIs, and secure transaction workflows.",
    skills: ["Next.js", "Node.js", "PostgreSQL", "Stellar", "Soroban", "TypeScript"],
  },
  {
    company: "Sen4a Recruiters",
    companyLink: "https://www.sen4a-recruiters.com/",
    logo: "/Screenshot 2026-08-08 195416.png",
    role: "Backend Engineer Intern",
    period: "Mar 2025 - Sep 2025",
    location: "Remote / Tokyo, Japan",
    description:
      "Engineered scalable backend services for a recruitment platform using TypeScript, NestJS, PostgreSQL, GraphQL, Knex.js, and microservices, optimizing database performance, API efficiency, and caching strategies.",
    skills: ["TypeScript", "NestJS", "PostgreSQL", "GraphQL", "Knex.js", "Microservices"],
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science and Engineering (Data Science)",
    institution: "Abdul Kalam Technical University",
    institutionLink: "https://aktu.ac.in/",
    period: "Nov 2022 - Jun 2026",
    score: "Ghaziabad, Uttar Pradesh",
  },
];

export const TESTIMONIALS = [
  {
    name: "Founder",
    role: "Asterics Compute",
    content:
      "Janvi has a great ability to take an idea that's still rough and turn it into something structured, functional, and polished. She thinks beyond just writing code — she understands the product, the user, and how everything needs to come together.",
  },
  {
    name: "Program Mentor",
    role: "Stellar Organization",
    content:
      "What stood out to me about Janvi was how quickly she turned curiosity into execution. She's comfortable learning new technologies and putting them to work, especially across Stellar, Midnight, and privacy-focused applications.",
  },
  {
    name: "Product Lead",
    role: "Sen4a Recruiters",
    content:
      "Janvi brings a genuine builder's mindset to her work. She takes ownership, experiments fearlessly, and cares about the experience as much as the technology behind it. That combination is what makes her stand out.",
  },
];
