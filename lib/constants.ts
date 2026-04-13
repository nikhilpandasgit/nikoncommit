export const SITE_TITLE = "nikoncommit";
export const SITE_DESCRIPTION = "Personal blog about code, thoughts & a bit of mild rebellion";
export const FAVICON_PATH = "/favicon.ico";
export const NAME = "Nikhil Panda";

export const LINKS = {
  HOME: "/",
  BLOG: "/blog",
  ABOUT: "/about",
};

export const SOCIAL_LINKS = {
  LINKEDIN: "https://www.linkedin.com/in/nikhilpanda0408",
  X: "https://x.com/nikoncommit",
  GITHUB: "https://github.com/nikhilpandasgit",
};

export const statusConstants = {
  'completed': {
    bg: 'bg-green-600',
    text: 'text-white',
    label: 'Completed',
  },
  'in-progress': {
    bg: 'bg-blue-600',
    text: 'text-white',
    label: 'In Progress',
  },
  'planned': {
    bg: 'bg-yellow-600',
    text: 'text-black',
    label: 'Planned',
  },
  'paused': {
    bg: 'bg-gray-500',
    text: 'text-white',
    label: 'Paused',
  },
  'abandoned': {
    bg: 'bg-red-600',
    text: 'text-white',
    label: 'Abandoned',
  },
};


export const currentProjects = [
  {
    title: 'News Aggregator',
    description: "A lightweight, self-hosted news aggregator built for myself. Just the topics I care about, delivered to my inbox twice a day.",
    status: 'in-progress' as const,
    technologies: ["Python", "Github Actions"]
  }, 
  {
    title: "nikoncommit",
    description: "A chaotic but clean dev blog that reflects my projects, thoughts, and technical growth. (What you're reading this on XD)",
    status: "completed" as const,
    technologies: ["Next.js", "Tailwind", "MDX", "TypeScript"]
  }
  // {
  //   title: "Threadbrain",
  //   description: "A structured knowledge graph system that stores conversation data and builds evolving context. Keeps evolving NGL 😆",
  //   status: "in-progress" as const,
  //   technologies: ["Neo4j", "Flutter", "FastAPI", "NLP"]
  // }
];


export const toolsLove = [
  "TypeScript",
  "React",
  "Flutter",
  "Dart",
  "Node.js",
  "Express.js",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "Minikube",
  "AWS (Lambda, SNS)",
  "Nginx",
  "Git & GitHub",
  "spaCy"
]

export const thingsWorking = [
  "Kubernetes & container orchestration (Minikube, debugging, networking)",
  "Backend system design with Node.js & FastAPI",
  "Distributed systems design (job scheduling, workers, fault tolerance)",
  "Real-time systems & messaging (AWS SNS, event-driven flows)",
  "Deployment & infra debugging (Nginx, service workers, networking)"
]