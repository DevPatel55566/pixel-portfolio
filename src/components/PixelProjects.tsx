
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  level: number;
}

const PixelProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
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
    <section id="projects" className="py-10 bg-pixel-primary text-white">
      <div className="game-container">
        <div className="text-center mb-6">
          <h2 className="font-pixel text-3xl mb-1">LEVELS COMPLETED</h2>
          <div className="w-20 h-1 bg-pixel-highlight mx-auto"></div>
          <p className="font-game text-lg mt-2 text-gray-300">Select a project to view details</p>
        </div>
        
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <div key={project.title} className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 w-10 h-10 bg-pixel-accent font-pixel flex items-center justify-center border-2 border-black">
                {project.level}
              </div>
              
              <div 
                className="ml-6 md:ml-8 pixel-card bg-pixel-secondary p-4 cursor-pointer hover:bg-pixel-secondary/80 transition-colors"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <div className="text-4xl">{project.icon}</div>
                  <h3 className="font-pixel text-lg text-pixel-highlight">{project.title}</h3>
                </div>
                
                <p className="font-game text-base mb-2 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="inline-block px-2 py-0.5 bg-black/30 border border-pixel-highlight text-pixel-highlight text-sm font-game"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {index < projects.length - 1 && (
                <div className="absolute left-4 md:left-6 top-full h-4 w-0.5 bg-pixel-highlight dashed-line"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="#contact" className="inline-block pixel-button">
            FINAL LEVEL: CONTACT
          </a>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="bg-pixel-primary border-pixel-accent text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-pixel text-2xl flex items-center gap-4">
                <span className="text-4xl">{selectedProject.icon}</span>
                <span className="text-pixel-highlight">{selectedProject.title}</span>
              </DialogTitle>
            </DialogHeader>
            
            <div className="mt-4">
              <p className="font-game text-lg mb-6">{selectedProject.description}</p>
              
              <div className="space-y-4">
                <h4 className="font-pixel text-sm text-pixel-accent">TECHNOLOGIES USED:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-black/30 border border-pixel-highlight text-pixel-highlight font-game"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default PixelProjects;
