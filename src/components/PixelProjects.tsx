
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  details: string;
  bgClass: string;
  buttonText: string;
  buttonClass: string;
}

const PixelProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      title: 'Signed & Trapped – AI Legal Assistant',
      description: 'Accelerate your contract analysis through AI-powered legal assistance, blending advanced algorithms with expert legal knowledge for comprehensive document review.',
      details: 'An advanced legal system that streamlines contract review by automatically identifying key clauses, terms, and potential legal issues. It provides comprehensive analysis reports and risk assessments, making legal document processing more efficient for law firms and legal departments.',
      bgClass: 'from-purple-500/20 to-blue-500/20',
      buttonText: 'View Project',
      buttonClass: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      title: '1DayIntern – Career Simulator',
      description: 'Using information gathered from real workplace scenarios, we help uncover career insights to unlock your potential with our interactive simulations.',
      details: 'A dynamic platform that lets users experience different career paths through realistic day-in-the-life scenarios. Users tackle real-world challenges, make critical decisions, and receive immediate feedback on their performance.',
      bgClass: 'from-blue-500/20 to-cyan-500/20',
      buttonText: 'Explore Demo',
      buttonClass: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'NLP Sentiment Analysis',
      description: 'Covering sentiment analysis, expansion and investment opportunities, our network has the experience you need for data-driven decisions.',
      details: 'A sophisticated NLP system that analyzes customer feedback to help restaurants improve their service. It processes reviews to identify specific aspects of customer satisfaction, tracks sentiment trends over time.',
      bgClass: 'from-emerald-500/20 to-green-500/20',
      buttonText: 'See Analysis',
      buttonClass: 'bg-emerald-500 hover:bg-emerald-600'
    },
    {
      title: 'Astronomy FAQ App',
      description: 'We remove the complexity from astronomy education, reduce the learning curve and increase the quality of your learning experience.',
      details: 'An educational platform that makes astronomy accessible through interactive learning experiences. Features include real-time sky mapping, a comprehensive Q&A system, and engaging visualizations of celestial phenomena.',
      bgClass: 'from-yellow-500/20 to-amber-500/20',
      buttonText: 'Launch App',
      buttonClass: 'bg-yellow-500 hover:bg-yellow-600'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a0118] text-white min-h-screen">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring innovation through code and creativity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.bgClass} backdrop-blur-xl border border-white/10 p-8 group transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-8 line-clamp-3">
                  {project.description}
                </p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`${project.buttonClass} text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm transition-all group-hover:gap-3`}
                >
                  {project.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 blur-3xl rounded-full bg-gradient-to-br from-white/5 to-white/10 z-0"></div>
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 blur-3xl rounded-full bg-gradient-to-tr from-white/5 to-white/10 z-0"></div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="bg-[#0a0118] border-white/10 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4">{selectedProject.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-gray-300 leading-relaxed">{selectedProject.details}</p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default PixelProjects;
