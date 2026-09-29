/**
 * Single source of truth for all portfolio content.
 * Copy is taken from shazadarshad.com — edit here, not in components.
 */

export const profile = {
  name: "Shazad Arshad",
  firstName: "Shazad",
  role: "Aspiring Software Developer",
  headline: "I build things for the web",
  greeting: "Hi, my name is",
  location: "Colombo, Sri Lanka",
  languages: ["English", "Sinhala", "Tamil"],
  photo: "/profile.png",
  intro: {
    before:
      "A motivated, self-taught developer from Colombo, Sri Lanka with a passion for technology and software development. I recently built ",
    highlight: "Neurativo",
    after:
      ", an AI-powered learning platform, and I love turning ideas into real, working projects.",
  },
  about: [
    "I'm Shazad, an aspiring software developer currently studying and building my skills through self-learning and online courses. My journey started with Python and web development, and I've been hooked ever since.",
    "I enjoy turning ideas into real, working projects and I'm always eager to learn something new. Right now I'm looking for an opportunity to gain professional experience, sharpen my skills, and contribute to a team.",
  ],
  openToWork: true,
  site: "https://www.shazadarshad.com",
};

export const contact = {
  blurb:
    "I'm currently looking for opportunities to learn and grow. Whether you have a question or just want to say hi, my inbox is always open!",
  email: "hello@shazadarshad.com",
  phone: "+94 77 651 2486",
  phoneHref: "tel:+94776512486",
  linkedin: "https://linkedin.com/in/shazadarshad",
  github: "https://github.com/shazadarshad",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export type Skill = { name: string; icon?: string; description?: string };

export const skills: Skill[] = [
  { name: "Python", icon: "/icons/python.svg", description: "Writing scripts, solving problems, and building small applications." },
  { name: "HTML5", icon: "/icons/html5.svg", description: "Building clean, well-structured web pages." },
  { name: "CSS3", icon: "/icons/css3.svg", description: "Styling responsive, modern layouts that look great everywhere." },
  { name: "JavaScript", icon: "/icons/javascript.svg", description: "Adding interactivity and bringing web pages to life." },
  { name: "Databases", icon: "/icons/mysql.svg", description: "Basic knowledge of storing and managing data with SQL." },
  { name: "Git & GitHub", icon: "/icons/git.svg", description: "Tracking my code and sharing projects with the world." },
];

export const softSkills = [
  "Creative Thinking",
  "Communication",
  "Teamwork",
  "Quick Learning",
  "Adaptability",
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  featured?: boolean;
  live?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    slug: "neurativo",
    name: "Neurativo",
    tagline: "AI-Powered Learning Platform",
    description:
      "A platform that records lectures in real time and generates structured notes live, with an intelligent Q&A feature based on the lecture content. Built using AI-assisted coding, testing, and feature refinement.",
    tags: ["AI", "Web", "Real-time"],
    featured: true,
    live: "https://www.neurativo.site",
    code: "https://github.com/shazadarshad/neurativo",
  },
  {
    slug: "openhand",
    name: "Openhand",
    tagline: "Transparent Donations Platform",
    description:
      "A donations platform where every cause and its payout details are manually verified before going public. Fundraisers create causes, admins verify them from a dedicated console, and donors give directly — with encrypted payout details, row-level security, and a full audit trail.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    featured: true,
    live: "https://anopenhand.vercel.app",
  },
  {
    slug: "talenthub",
    name: "TalentHub",
    tagline: "Reverse Job Platform",
    description:
      "A Flask web app where candidates create one profile and employers browse, filter, and shortlist them. Includes accounts and roles, secure CV uploads, password hashing, CSRF protection, rate limiting, and a pytest suite.",
    tags: ["Python", "Flask", "SQLAlchemy", "PostgreSQL"],
    featured: true,
    code: "https://github.com/shazadarshad/talenthub",
  },
  {
    slug: "shoply",
    name: "Shoply",
    tagline: "Full-Stack E-Commerce App",
    description:
      "A functional e-commerce store with product browsing, search, filtering, a shopping cart, and a wishlist. Built with Next.js and React Server Components, backed by AWS DynamoDB through a clean server-side data layer, with unit tests throughout.",
    tags: ["Next.js", "TypeScript", "DynamoDB", "Tailwind"],
    code: "https://github.com/shazadarshad/shoply",
  },
  {
    slug: "sniplink",
    name: "Sniplink",
    tagline: "URL Shortener",
    description:
      "A URL shortener with click analytics: shorten links, redirect visitors, and track how many times each link is opened from a clean dashboard. Built with Next.js Server Components and a tested SQLite data layer.",
    tags: ["Next.js", "TypeScript", "SQLite", "Tailwind"],
    code: "https://github.com/shazadarshad/sniplink",
  },
  {
    slug: "portfolio",
    name: "Personal Portfolio",
    tagline: "This very website",
    description:
      "Built from scratch with HTML, CSS, and JavaScript, featuring a dark/light theme and responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://www.shazadarshad.com",
    code: "https://github.com/shazadarshad/portfolio",
  },
];

export const projectsFootnote = "More projects coming soon as I keep learning.";

/** Technologies used across the projects above, with where they were used. */
export const stack = [
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Tailwind", icon: "/icons/tailwindcss.svg" },
  { name: "Supabase", icon: "/icons/supabase.svg" },
  { name: "Flask", icon: "/icons/flask.svg" },
  { name: "SQLAlchemy", icon: "/icons/sqlalchemy.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "DynamoDB", icon: "/icons/dynamodb.svg" },
  { name: "SQLite", icon: "/icons/sqlite.svg" },
].map((t) => ({
  ...t,
  usedIn: projects.filter((p) => p.tags.includes(t.name)).map((p) => p.name),
}));

export const education = [
  {
    title: "G.C.E. Ordinary Level (O/L)",
    place: "Lyceum International School",
    period: "2012 – 2024",
    description:
      "Completed my secondary education with a strong interest in ICT and technology, which sparked my passion for programming and web development.",
  },
  {
    title: "G.C.E. Advanced Level (A/L)",
    place: "Private Candidate · Awaiting Results",
    period: "2024 – 2026",
    description:
      "Completed my Advanced Level examinations as a private candidate while continuing to build my programming and web development skills.",
  },
  {
    title: "Self-Taught Developer",
    place: "Online Courses & Certifications",
    period: "Ongoing",
    description:
      "Continuously building my skills in Python and web development through online learning platforms and hands-on projects.",
  },
];

export const certifications = [
  {
    title: "Introduction to HTML, CSS, & JavaScript",
    issuer: "IBM",
    platform: "Coursera",
    issued: "Jul 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/AY0D9033OEAF",
  },
  {
    title: "Introduction to Databases",
    issuer: "Meta",
    platform: "Coursera",
    issued: "Jul 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/YAM9SJYA2ZEI",
  },
  {
    title: "Getting Started with Git and GitHub",
    issuer: "IBM",
    platform: "Coursera",
    issued: "Jul 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/OO3KI0IE7DK9",
  },
  {
    title: "Python - Beginner to Advanced",
    issuer: "BrightCHAMPS",
    issued: "Apr 2022",
    url: "https://link.brightchamps.com/62C8k8uP08HXB",
  },
  {
    title: "Web Development - Advanced",
    issuer: "BrightCHAMPS",
    issued: "Jun 2022",
    url: "https://link.brightchamps.com/ipJZRgqQ2yYhz",
  },
];
