
import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

const projects: Project[] = [
  {
    title: 'Signed & Trapped – AI Legal Assistant',
    description: 'Semantic legal contract analyzer built using Cohere API, Pinecone, Flask, and React during GenAI Genesis Hackathon.',
    technologies: ['Cohere API', 'Pinecone', 'Flask', 'React'],
    icon: '🧾'
  },
  {
    title: '1DayIntern – Gamified Job Simulation',
    description: 'Minecraft-inspired career simulator built with React, Python FAST, Supabase, and ngrok.',
    technologies: ['React', 'Python FAST', 'Supabase', 'ngrok'],
    icon: '🕹️'
  },
  {
    title: 'NLP Sentiment Analysis',
    description: 'NLP-powered Yelp review classifier with Scikit-learn, CountVectorizer, and Flask backend deployment.',
    technologies: ['NLP', 'Scikit-learn', 'CountVectorizer', 'Flask'],
    icon: '💬'
  },
  {
    title: 'Astronomy FAQ App',
    description: 'Ionic full-stack app using Angular, Node.js, Express, and MongoDB with CRUD and batch operations.',
    technologies: ['Ionic', 'Angular', 'Node.js', 'Express', 'MongoDB'],
    icon: '🌌'
  }
];

const PixelProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-pixel-white text-black border-t-4 border-pixel-accent">
      <div className="game-container">
        <div className="text-center mb-10">
          <h2 className="font-pixel text-3xl mb-2 text-pixel-primary">Projects</h2>
          <div className="w-20 h-1 bg-pixel-highlight mx-auto"></div>
        </div>
        <div className="grid gap-10">
          {projects.map((project) => (
            <div key={project.title} className="pixel-card bg-pixel-secondary text-pixel-white border-pixel-primary">
              <div className="flex flex-row items-center gap-5 mb-3">
                <div className="text-3xl">{project.icon}</div>
                <h3 className="font-pixel text-xl text-pixel-accent">{project.title}</h3>
              </div>
              <p className="font-game mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1 bg-pixel-primary border border-pixel-highlight text-pixel-highlight font-game rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PixelProjects;
