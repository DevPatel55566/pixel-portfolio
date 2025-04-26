import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  details: string;
  bgGradient: string;
  buttonGradient: string;
  buttonText: string;
}

const PixelProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      title: 'Signed & Trapped – AI Legal Assistant',
      description: 'Accelerate your contract analysis through AI-powered legal assistance, blending advanced algorithms with expert legal knowledge for comprehensive document review.',
      details: 'An advanced legal system that streamlines contract review by automatically identifying key clauses, terms, and potential legal issues. It provides comprehensive analysis reports and risk assessments, making legal document processing more efficient for law firms and legal departments.',
      bgGradient: 'from-[#2b5876] to-[#4e4376]',
      buttonGradient: 'from-[#3a7bd5] to-[#3a6073]',
      buttonText: 'View Project'
    },
    {
      title: '1DayIntern – Career Simulator',
      description: 'Using information gathered from real workplace scenarios, we help uncover career insights to unlock your potential with our interactive simulations.',
      details: 'A dynamic platform that lets users experience different career paths through realistic day-in-the-life scenarios. Users tackle real-world challenges, make critical decisions, and receive immediate feedback on their performance.',
      bgGradient: 'from-[#0f2027] via-[#203a43] to-[#2c5364]',
      buttonGradient: 'from-[#4facfe] to-[#00f2fe]',
      buttonText: 'Explore Demo'
    },
    {
      title: 'NLP Sentiment Analysis',
      description: 'Covering sentiment analysis, expansion and investment opportunities, our network has the experience you need for data-driven decisions.',
      details: 'A sophisticated NLP system that analyzes customer feedback to help restaurants improve their service. It processes reviews to identify specific aspects of customer satisfaction, tracks sentiment trends over time.',
      bgGradient: 'from-[#0b8793] via-[#360033] to-[#0b8793]',
      buttonGradient: 'from-[#0ba360] to-[#3cba92]',
      buttonText: 'See Analysis'
    },
    {
      title: 'Astronomy FAQ App',
      description: 'We remove the complexity from astronomy education, reduce the learning curve and increase the quality of your learning experience.',
      details: 'An educational platform that makes astronomy accessible through interactive learning experiences. Features include real-time sky mapping, a comprehensive Q&A system, and engaging visualizations of celestial phenomena.',
      bgGradient: 'from-[#1e3c72] to-[#2a5298]',
      buttonGradient: 'from-[#2193b0] to-[#6dd5ed]',
      buttonText: 'Launch App'
    }
  ];

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-[#283593] to-[#1e3a8a]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-300/10 via-transparent to-transparent"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-blue-200/80 max-w-2xl mx-auto">
            Exploring innovation through code and creativity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-blue-100/90 mb-8 line-clamp-3">
                  {project.description}
                </p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`bg-gradient-to-r ${project.buttonGradient} text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group-hover:gap-3`}
                >
                  {project.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 blur-[100px] rounded-full bg-blue-500/30 z-0"></div>
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 blur-[100px] rounded-full bg-cyan-500/30 z-0"></div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] border-white/10 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-blue-100/90 leading-relaxed">{selectedProject.details}</p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default PixelProjects;
