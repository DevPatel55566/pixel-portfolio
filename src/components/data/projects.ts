export interface Project {
  id: number;
  name: string;
  description: string;
  problem: string;
  approach: string;
  achievements: string[];
  technologiesUsed: string[];
  date?: string;
  badges?: string[];
  fullDescription?: string[];
}

export const projects: Project[] = [
  { 
    id: 1, 
    name: "Signed & Trapped?", 
    description: "AI Legal Assistant",
    problem: "Complex legal documents are difficult for individuals to understand.",
    approach: "Create an AI-powered platform that breaks down legal jargon and provides clear explanations.",
    achievements: ["Legal Tech Innovation Award", "1000+ Legal Documents Analyzed"],
    technologiesUsed: ["Cohere API", "Pinecone", "Flask", "React", "Tailwind CSS", "Vercel"],
    date: "21/03/2025 – 23/03/2025",
    badges: ["Hackathon", "AI", "Gamification"],
    fullDescription: [
      "Built an AI-powered tool to translate complex legal contracts into plain English and assess risk based on fairness and transparency.",
      "Integrated Cohere API, Pinecone, and Flask to enable semantic search and real-time contract analysis.",
      "Designed a gamified learning module to help users identify red flags in legal documents.",
      "Deployed a responsive frontend using React.js, Tailwind CSS, and Vercel within a 36-hour sprint."
    ]
  },
  { 
    id: 2, 
    name: "Astronomy FAQ", 
    description: "Space Knowledge Base",
    problem: "Lack of accessible, comprehensive astronomical information.",
    approach: "Create an interactive app that answers complex astronomical queries.",
    achievements: ["NASA Space Apps Challenge Finalist", "10,000+ Questions Answered"],
    technologiesUsed: ["Ionic (Angular)", "Node.js/Express", "MongoDB"],
    date: "1/04/2025 – 9/4/2025",
    badges: ["Full-Stack", "FAQ System"],
    fullDescription: [
      "Built a full-stack FAQ app using Ionic (Angular) for frontend, Node.js/Express for backend, and MongoDB for data storage.",
      "Designed a 3-page sidemenu interface (Main, Listing, Update) with CRUD operations using Ionic services and Mongoose.",
      "Enabled dynamic database/collection creation, batch loading from file, and in-app item updates/deletion with confirmation dialogs.",
      "Implemented clean UI/UX using Ionic components, Action Sheets, and Alert dialogs for interactive user experience."
    ]
  },
  { 
    id: 3, 
    name: "1DayIntern", 
    description: "Career Simulator Platform",
    problem: "Students struggle to understand real-world job dynamics and career paths.",
    approach: "Develop an interactive platform that simulates one-day work experiences across multiple industries.",
    achievements: ["Top 10 EdTech Startup", "500+ User Signups", "Featured in TechCrunch"],
    technologiesUsed: ["Tempo Labs", "Okta", "Supabase", "Python (FAST, ngrok)", "Vite", "React"],
    date: "17/01/2025 – 19/01/2025",
    badges: ["Hackathon", "Gamification", "Auth"],
    fullDescription: [
      "Created a gamified platform offering 1-day job simulations, Co-curricular records, with a Minecraft-like interface for enhanced engagement.",
      "Integrated Okta for secure authentication and Supabase for backend management.",
      "Utilized Python and FAST framework for task simulation and ngrok for real-time connectivity."
    ]
  },
  { 
    id: 4, 
    name: "NLP Sentiment Analysis", 
    description: "Natural Language Processing Tool",
    problem: "Businesses need to understand customer sentiment at scale.",
    approach: "Develop a machine learning model that can analyze text and determine emotional tone.",
    achievements: ["Academic Research Publication", "99% Accuracy Rate"],
    technologiesUsed: ["Pandas", "Scikit-learn", "Flask"],
    date: "5/12/2024 – 9/12/2024",
    badges: ["Machine Learning", "Web App"],
    fullDescription: [
      "Built a sentiment analysis model using Yelp review data, classifying reviews as positive or negative based on star ratings.",
      "Employed CountVectorizer and TfidfTransformer to process and transform text data into features.",
      "Applied Multinomial Naive Bayes for text classification and used GridSearchCV to optimize hyperparameters.",
      "Achieved an optimized model and evaluated performance using an accuracy score, predicting sentiment with high precision.",
      "Used libraries such as Pandas, Scikit-learn, and Flask for data processing, modeling, and web deployment."
    ]
  }
];
