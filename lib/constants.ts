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
    title: "Threadbrain",
    description: "A structured knowledge graph system that stores conversation data and builds evolving context. Keeps evolving NGL 😆",
    status: "in-progress" as const,
    technologies: ["Neo4j", "Flutter", "FastAPI", "NLP"]
  },
  {
    title: "nikoncommit",
    description: "A chaotic but clean dev blog that reflects my projects, thoughts, and technical growth.",
    status: "in-progress" as const,
    technologies: ["Next.js", "Tailwind", "MDX", "TypeScript"]
  }
];


export const toolsLove = [
  "TypeScript",
  "Angular",
  "React",
  "Dart",
  "Flutter",
  "Tailwind CSS",
  "Neo4j",
  "LangChain",
  "FastAPI",
  "Node.js",
  "PostgreSQL",
  "Git & GitHub",
  "Redis",
  "Docker",
  "Kubernetes",
  "Tilt"
]

export const thingsWorking = [
  "Frontend architecture with React & Next.js",
  "Graph-based data modeling with Neo4j",
  "Context-aware systems and intelligent nudging",
  "Vector embeddings & knowledge base design",
  "Personal productivity systems & UX for mental models"
]