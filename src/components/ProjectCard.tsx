import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from './data/projects';
import { X } from 'lucide-react';

interface ProjectCardProps {
  projectId: number;
  isExploding: boolean;
  closeProject: () => void;
}

const ProjectCard = ({ projectId, isExploding, closeProject }: ProjectCardProps) => {
  const [project, setProject] = useState(projects.find(p => p.id === projectId) || null);
  const [showSecretContent, setShowSecretContent] = useState(false);

  useEffect(() => {
    setProject(projects.find(p => p.id === projectId) || null);
  }, [projectId]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={isExploding ? { 
        scale: 1, 
        opacity: 1,
        transition: { 
          type: "spring", 
          damping: 15, 
          stiffness: 200,
          duration: 0.5
        }
      } : { scale: 0, opacity: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-[#1a1633]/90 z-50 p-4 overflow-hidden"
    >
      <motion.button
        className="absolute top-4 right-4 p-2 rounded-full bg-[#33C3F0]/20 text-[#33C3F0] hover:bg-[#33C3F0]/30 transition-colors"
        onClick={closeProject}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
      >
        <X size={20} />
      </motion.button>
      
      <motion.div
        className="w-full max-w-3xl relative"
        layoutId={`project-${projectId}`}
      >
        <AnimatedParticles isExploding={isExploding} />
        
        <Card className="border-[#33C3F0]/20 bg-[#1a1633] text-[#33C3F0] overflow-hidden">
          <CardHeader>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <CardTitle className="text-3xl font-bold text-[#33C3F0] flex items-center gap-2">
                🚀 {project.name}
              </CardTitle>
              <CardDescription className="text-[#33C3F0] text-lg">
                {project.description}
              </CardDescription>
            </motion.div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#33C3F0]/90">Problem</h3>
              <div className="bg-[#33C3F0]/10 p-4 rounded-lg text-[#33C3F0]/90">
                {project.problem}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#33C3F0]/90">My Approach</h3>
              <div className="bg-[#33C3F0]/10 p-4 rounded-lg text-[#33C3F0]/90">
                {project.approach}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-[#33C3F0]/90">Technologies Used</h3>
              <div className="flex gap-2 flex-wrap">
                {project.technologiesUsed.map((tech, idx) => (
                  <motion.div 
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <Badge className="px-3 py-1.5 bg-[#33C3F0]/20 hover:bg-[#33C3F0]/30 text-[#33C3F0] border-[#33C3F0]/30">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-[#33C3F0]/90">Achievements</h3>
              <div className="flex gap-2 flex-wrap">
                {project.achievements.map((achievement, idx) => (
                  <motion.div 
                    key={achievement}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                  >
                    <Badge className="px-3 py-1.5 bg-[#33C3F0]/20 hover:bg-[#33C3F0]/30 text-[#33C3F0] border-[#33C3F0]/30">
                      {achievement}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-8 py-4 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div 
                className="text-[#33C3F0]/30 text-xs cursor-help hover:text-[#33C3F0]/60 transition-colors relative"
                onClick={() => setShowSecretContent(true)}
              >
                <span className="select-none">click for secret content</span>
              </div>
            </motion.div>
            
            <AnimatePresence>
              {showSecretContent && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-[#33C3F0]/20 p-4 rounded-lg border border-[#33C3F0]/30 overflow-hidden"
                >
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-[#33C3F0] mb-2">🎉 You found a secret! 🎉</h4>
                    <p className="text-[#33C3F0]/90 mb-4">
                      {project.name === "1DayIntern" && "The 1DayIntern platform was actually inspired by a dream where I was teaching robots how to have job interviews!"}
                      {project.name === "Signed & Trapped" && "I built this after helping a friend who accidentally signed a 99-year lease. True story."}
                      {project.name === "NLP Sentiment Analysis" && "This project analyzed over 1 million tweets and found that people are happiest at 3:27pm on Fridays."}
                      {project.name === "Astronomy FAQ App" && "A question about black holes crashed the first version of this app because the answer was infinite."}
                    </p>
                    <Badge 
                      variant="outline" 
                      className="bg-[#33C3F0]/20 text-[#33C3F0] border-[#33C3F0]/30 cursor-default"
                    >
                      Secret Explorer Badge Earned
                    </Badge>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

const AnimatedParticles = ({ isExploding }: { isExploding: boolean }) => {
  const particleCount = 20;
  const particles = Array.from({ length: particleCount });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, index) => {
        const angle = (index / particleCount) * 360;
        const distance = Math.random() * 100 + 50;
        const delay = Math.random() * 0.2;
        const duration = Math.random() * 0.5 + 0.5;
        const size = Math.random() * 5 + 3;

        return (
          <motion.div
            key={index}
            className="absolute bg-[#33C3F0] rounded-full opacity-80"
            style={{
              width: size,
              height: size,
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%',
            }}
            initial={{ scale: 0 }}
            animate={isExploding ? {
              x: `calc(-50% + ${Math.cos(angle * (Math.PI / 180)) * distance}px)`,
              y: `calc(-50% + ${Math.sin(angle * (Math.PI / 180)) * distance}px)`,
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              transition: {
                duration: duration,
                delay: delay,
                ease: "easeOut",
              }
            } : {}}
          />
        );
      })}
    </div>
  );
};

export default ProjectCard;
