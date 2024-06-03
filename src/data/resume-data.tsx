import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Emmanuel Sugutt",
  initials: "sugutt",
  location: "Nairobi",
  locationLink: "https://www.google.com/maps/place/Nairobi",
  about:
    "Juggling between artist and tinkerer, I'm captivated by unraveling abstractions and patterns. Channeling my energy into large language models and machine learning, I'm on a quest to create impactful use cases for Africa. 🌍✨",
  summary:
    "Passionate about turning lines of code into solutions at Riara University, specializing in machine learning and deep learning.I thrive on building predictive models, training neural networks, and crafting natural language processing tools. Eager to tackle technical challenges and collaborate on impactful solutions that make a positive difference in the world.Let's connect for creative and dedicated contributions to your team or project!",
  avatarUrl: "https://avatars.githubusercontent.com/u/97742262?v=4",
  personalWebsiteUrl: "https://jxnl.notion.site/jxnl/whats-up-95708748a05d40c398a4abc66a978a8e",
  contact: {
    email: "sugutmanu@gmail.com",
    tel: "+254110845660",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sugutt",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/emmanuelsugut/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/sugutt_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Riara University",
      degree: "BSC Computer Science",
      start: "2021",
      end: "Present",
    },
  ],
  work: [
    {
      company: "789",
      link:"https://sugutt.com",
      badges: ["Coming Soon"],
      title: "Owner / Consultant",
      logo: "", // Add logo if available
      start: "2023",
      end: "Present",
      description:
        "Working with seed stage companies, helping founders with tech strategy, research, and infrastructure.",
    },
    {
      company: "Student Representative Computing",
      link: "www.riarauniversity.co.ke",
      badges: ["Leadership"],
      title: "School Representative",
      logo: "", // Add logo if available
      start: "2023",
      end: "Present",
      description:
        "As The School Representative, i take on leadership, representative roles that enable me to act as a bridge between students and the faculty.",
    },
    {
      company: "HashNode",
      link: "https://sugutt.hashnode.dev/",
      badges: ["Writer"],
      title: "Technical Writing",
      logo: "", // Add logo if available
      start: "2022",
      end: "2023",
      description: (
        <>
          <li>
            Wrote articles on machine learning to improve how to better 
            present and communicate my projects.
           </li>
        </>
      ),
    },
   
  ],
  skills: [
    "Python",
    "Pytorch",
    "LLMs",
    "Prompt Engineering",
    "Computer Vision",
    "Observability",
    "Developer Tools",
    "Machine Learning",
    "Data Science",
  ],
  projects: [
    {
      title: "Llama - Financials",
      techStack: ["AI","llm", "prompt engineering"],
      description:
        "Using AI-powered OpenAI and llama index to read financial news and give future predictions and stock outlook.",
      link: {
        label: "Finance",
        href: "https://github.com/sugutt/llama-financials",
      },
    },
    {
      title: "AI Library",
      techStack: ["AI","llm", "prompt engineering"],
      description:
        "I feed my AI with books I'd like to read using RAG and a vector database. I get a snippet of a chapter each and everyday.",
      link: {
        label: "IN- PROGRESS",
        href: "https://gist.github.com/sugutt/0ac03ea81aa3cf13a8adbbbda4dd2d4b",
      },
    },
  ],
  clients: [
    {
      title: "Rewind AI",
      techStack: ["memory", "personal computing"],
      description: "Rewind AI is a personal memory assistant that helps you remember, organize, and navigate your life.",
      link: {
        label: "rewind.ai",
        href: "http://rewind.ai",
      },
    },
    ],
} as const;
