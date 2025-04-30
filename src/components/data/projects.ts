export interface Project {
    id: number;
    name: string;
    description: string;
    problem: string;
    approach: string;
    achievements: string[];
    technologiesUsed: string[];
  }
  
  export const projects: Project[] = [
    { 
      id: 1, 
      name: "1DayIntern", 
      description: "Career Simulator Platform",
      problem: "Students struggle to understand real-world job dynamics and career paths.",
      approach: "Develop an interactive platform that simulates one-day work experiences across multiple industries.",
      achievements: ["Top 10 EdTech Startup", "500+ User Signups", "Featured in TechCrunch"],
      technologiesUsed: ["React", "TypeScript", "Tailwind CSS", "Supabase"]
    },
    { 
      id: 2, 
      name: "Signed & Trapped", 
      description: "AI Legal Assistant",
      problem: "Complex legal documents are difficult for individuals to understand.",
      approach: "Create an AI-powered platform that breaks down legal jargon and provides clear explanations.",
      achievements: ["Legal Tech Innovation Award", "1000+ Legal Documents Analyzed"],
      technologiesUsed: ["OpenAI", "Next.js", "GPT-4", "Vercel"]
    },
    { 
      id: 3, 
      name: "NLP Sentiment Analysis", 
      description: "Natural Language Processing Tool",
      problem: "Businesses need to understand customer sentiment at scale.",
      approach: "Develop a machine learning model that can analyze text and determine emotional tone.",
      achievements: ["Academic Research Publication", "99% Accuracy Rate"],
      technologiesUsed: ["Python", "TensorFlow", "NLTK", "Scikit-learn"]
    },
    { 
      id: 4, 
      name: "Astronomy FAQ App", 
      description: "Space Knowledge Base",
      problem: "Lack of accessible, comprehensive astronomical information.",
      approach: "Create an interactive app that answers complex astronomical queries.",
      achievements: ["NASA Space Apps Challenge Finalist", "10,000+ Questions Answered"],
      technologiesUsed: ["React Native", "Astronomy APIs", "Machine Learning"]
    }
  ];
  