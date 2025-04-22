
import React from 'react';

const PixelAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="game-container">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-3xl mb-2 text-pixel-primary">ABOUT ME</h2>
          <div className="w-20 h-1 bg-pixel-accent mx-auto"></div>
        </div>
        
        <div className="pixel-card bg-pixel-primary text-white p-6 mb-8 max-w-3xl mx-auto">
          <div className="font-game text-xl leading-relaxed space-y-4">
            <p className="flex items-start">
              <span className="text-pixel-highlight mr-2">🔧</span>
              I'm a passionate <span className="text-pixel-accent">Software Developer</span> and <span className="text-pixel-accent">Data Analyst</span> who thrives at the intersection of code, creativity, and data.
            </p>
            
            <p className="flex items-start">
              <span className="text-pixel-highlight mr-2">📚</span>
              With experience in <span className="text-pixel-accent">full-stack development</span>, <span className="text-pixel-accent">NLP</span>, and <span className="text-pixel-accent">cloud platforms</span>, I love turning real-world problems into impactful solutions.
            </p>
            
            <p className="flex items-start">
              <span className="text-pixel-highlight mr-2">🌱</span>
              Currently expanding my skills in <span className="text-pixel-accent">cloud engineering</span>, <span className="text-pixel-accent">data pipelines</span>, and <span className="text-pixel-accent">advanced machine learning</span>.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="#skills" className="inline-block pixel-button">
            NEXT LEVEL: SKILLS
          </a>
        </div>
      </div>
    </section>
  );
};

export default PixelAbout;
