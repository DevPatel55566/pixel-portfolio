
import React from 'react';

const PixelAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="game-container">
        <div className="text-center mb-10">
          <h2 className="font-pixel text-3xl mb-2 text-pixel-primary">About Me</h2>
          <div className="w-20 h-1 bg-pixel-accent mx-auto"></div>
        </div>
        <div className="pixel-card bg-pixel-secondary text-pixel-white p-8 max-w-3xl mx-auto border-pixel-primary font-game text-lg leading-relaxed tracking-wide">
          <p className="mb-5">
            🔧 I'm a passionate <span className="text-pixel-accent">Software Developer</span> and <span className="text-pixel-accent">Data Analyst</span> who thrives at the intersection of code, creativity, and data.
          </p>
          <p className="mb-5">
            📚 With experience in <span className="text-pixel-accent">full-stack development</span>, <span className="text-pixel-accent">NLP</span>, and <span className="text-pixel-accent">cloud platforms</span>, I love turning real-world problems into impactful solutions.
          </p>
          <p>
            🌱 Currently expanding my skills in <span className="text-pixel-accent">cloud engineering</span>, <span className="text-pixel-accent">data pipelines</span>, and <span className="text-pixel-accent">machine learning</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PixelAbout;
