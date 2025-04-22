
import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  level: number;
}

const PixelProjects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Signed & Trapped – AI Legal Assistant',
      description: 'Semantic legal contract analyzer built using Cohere API, Pinecone, Flask, and React during GenAI Genesis Hackathon.',
      technologies: ['Cohere API', 'Pinecone', 'Flask', 'React'],
      icon: '🧾',
      level: 4
    },
    {
      title: '1DayIntern – Gamified Job Simulation',
      description: 'Minecraft-inspired career simulator built with React, Python FAST, Supabase, and ngrok.',
      technologies: ['React', 'Python FAST', 'Supabase', 'ngrok'],
      icon: '🕹️',
      level: 3
    },
    {
      title: 'NLP Sentiment Analysis',
      description: 'NLP-powered Yelp review classifier with Scikit-learn, CountVectorizer, and Flask backend deployment.',
      technologies: ['NLP', 'Scikit-learn', 'CountVectorizer', 'Flask'],
      icon: '💬',
      level: 2
    },
    {
      title: 'Astronomy FAQ App',
      description: 'Ionic full-stack app using Angular, Node.js, Express, and MongoDB with CRUD and batch operations.',
      technologies: ['Ionic', 'Angular', 'Node.js', 'Express', 'MongoDB'],
      icon: '🌌',
      level: 1
    }
  ];

  return (
    <section id="projects" className="py-20 bg-pixel-primary text-white">
      <div className="game-container">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-3xl mb-2">LEVELS COMPLETED</h2>
          <div className="w-20 h-1 bg-pixel-highlight mx-auto"></div>
          <p className="font-game text-lg mt-4 text-gray-300">Select a project to view details</p>
        </div>
        
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div key={project.title} className="relative">
              {/* Level number */}
              <div className="absolute -left-4 md:-left-8 top-0 w-12 h-12 bg-pixel-accent font-pixel flex items-center justify-center border-2 border-black">
                {project.level}
              </div>
              
              {/* Project card */}
              <div className="ml-8 md:ml-10 pixel-card bg-pixel-secondary p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="text-5xl">{project.icon}</div>
                  <h3 className="font-pixel text-xl text-pixel-highlight">{project.title}</h3>
                </div>
                
                <p className="font-game text-lg mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="inline-block px-3 py-1 bg-black/30 border border-pixel-highlight text-pixel-highlight font-game"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Connecting line to next project */}
              {index < projects.length - 1 && (
                <div className="absolute left-4 md:left-6 top-full h-12 w-0.5 bg-pixel-highlight dashed-line"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="inline-block pixel-button">
            FINAL LEVEL: CONTACT
          </a>
        </div>
      </div>
    </section>
  );
};

export default PixelProjects;
