
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  details: string;
  icon: string;
  level: number;
}

const PixelProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      title: 'Signed & Trapped – AI Legal Assistant',
      description: 'AI-powered legal contract analysis tool',
      details: 'An advanced legal system that streamlines contract review by automatically identifying key clauses, terms, and potential legal issues. It provides comprehensive analysis reports and risk assessments, making legal document processing more efficient for law firms and legal departments.',
      icon: '🧾',
      level: 4
    },
    {
      title: '1DayIntern – Career Simulator',
      description: 'Interactive career simulation platform',
      details: 'A dynamic platform that lets users experience different career paths through realistic day-in-the-life scenarios. Users tackle real-world challenges, make critical decisions, and receive immediate feedback on their performance, helping them understand various professional roles before making career choices.',
      icon: '🕹️',
      level: 3
    },
    {
      title: 'NLP Sentiment Analysis',
      description: 'Restaurant review sentiment analyzer',
      details: 'A sophisticated NLP system that analyzes customer feedback to help restaurants improve their service. It processes reviews to identify specific aspects of customer satisfaction, tracks sentiment trends over time, and generates actionable insights for restaurant owners.',
      icon: '💬',
      level: 2
    },
    {
      title: 'Astronomy FAQ App',
      description: 'Interactive astronomy learning platform',
      details: 'An educational platform that makes astronomy accessible through interactive learning experiences. Features include real-time sky mapping, a comprehensive Q&A system, and engaging visualizations of celestial phenomena, designed to spark interest in space science.',
      icon: '🌌',
      level: 1
    }
  ];

  return (
    <section id="projects" className="py-12 bg-[#1e2b7a] text-white min-h-screen">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Projects</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div key={project.title} className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-400 flex items-center justify-center font-bold">
                {project.level}
              </div>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div 
                    className="ml-6 bg-[#2a367d] p-4 cursor-pointer hover:bg-[#2e3d8d] transition-all duration-300 group border-l-2 border-blue-400"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{project.icon}</span>
                      <h3 className="text-xl text-blue-200 flex items-center gap-2 group-hover:text-white transition-colors">
                        {project.title}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                      </h3>
                    </div>
                    
                    <p className="text-blue-100/80 group-hover:text-blue-100 transition-colors">
                      {project.description}
                    </p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="bg-[#1e2b7a] border-blue-400 text-white w-80 p-4">
                  <p className="text-sm text-blue-100">{project.details}</p>
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
          <DialogContent className="bg-[#1e2b7a] border-blue-400 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-4">
                <span className="text-3xl">{selectedProject.icon}</span>
                <span className="text-blue-200">{selectedProject.title}</span>
              </DialogTitle>
            </DialogHeader>
            
            <div className="mt-4">
              <p className="text-lg text-blue-100 leading-relaxed">{selectedProject.details}</p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default PixelProjects;
