
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  icon: string;
  level: number;
}

const PixelProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      title: 'Signed & Trapped – AI Legal Assistant',
      description: 'AI-powered legal contract analysis tool',
      fullDescription: 'An advanced legal contract analysis system that leverages AI to identify key clauses, potential risks, and legal compliance issues. The system provides automated summaries and recommendations for contract review, making legal document processing more efficient and accurate.',
      technologies: ['Cohere API', 'Pinecone', 'Flask', 'React'],
      icon: '🧾',
      level: 4
    },
    {
      title: '1DayIntern – Career Simulator',
      description: 'Interactive career simulation platform',
      fullDescription: 'A career simulation platform that allows users to experience different professional roles through interactive scenarios. Users can make decisions, solve industry-specific challenges, and receive feedback on their performance, helping them understand various career paths.',
      technologies: ['React', 'Python FAST', 'Supabase', 'ngrok'],
      icon: '🕹️',
      level: 3
    },
    {
      title: 'NLP Sentiment Analysis',
      description: 'Restaurant review sentiment analyzer',
      fullDescription: 'A sophisticated sentiment analysis system specifically designed for restaurant reviews. The system categorizes customer feedback, identifies key sentiment drivers, and provides actionable insights for restaurant owners to improve their service quality.',
      technologies: ['NLP', 'Scikit-learn', 'CountVectorizer', 'Flask'],
      icon: '💬',
      level: 2
    },
    {
      title: 'Astronomy FAQ App',
      description: 'Interactive astronomy learning platform',
      fullDescription: 'A comprehensive astronomy education platform that provides interactive learning experiences about celestial bodies, space phenomena, and astronomical concepts. Features include real-time sky maps, quiz systems, and user-contributed content management.',
      technologies: ['Ionic', 'Angular', 'Node.js', 'Express', 'MongoDB'],
      icon: '🌌',
      level: 1
    }
  ];

  return (
    <section id="projects" className="py-8 bg-blue-900 text-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl mb-1">Projects</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid gap-3">
          {projects.map((project, index) => (
            <div key={project.title} className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-400 flex items-center justify-center">
                {project.level}
              </div>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div 
                    className="ml-6 bg-blue-800/50 p-4 cursor-pointer hover:bg-blue-700/50 transition-colors group"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{project.icon}</span>
                      <h3 className="text-lg text-blue-300 flex items-center gap-2">
                        {project.title}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                    </div>
                    
                    <p className="text-sm text-gray-300 line-clamp-1">{project.description}</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="bg-blue-950 border-blue-700 text-white w-80 p-4">
                  <p className="text-sm">{project.fullDescription}</p>
                </HoverCardContent>
              </HoverCard>
              
              {index < projects.length - 1 && (
                <div className="absolute left-4 top-full h-3 w-0.5 bg-blue-400"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="bg-blue-900 border-blue-700 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-4">
                <span className="text-3xl">{selectedProject.icon}</span>
                <span className="text-blue-300">{selectedProject.title}</span>
              </DialogTitle>
            </DialogHeader>
            
            <div className="mt-4">
              <p className="text-lg mb-6">{selectedProject.fullDescription}</p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default PixelProjects;
