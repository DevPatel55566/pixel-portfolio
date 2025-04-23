
import React from 'react';

const PixelAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#1e2b7a] text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="bg-[#2a367d] p-8 rounded-lg max-w-3xl mx-auto">
          <div className="space-y-6 text-blue-100">
            <p className="flex items-start gap-3">
              <span className="text-2xl">🔧</span>
              I'm a passionate <span className="text-blue-200">Software Developer</span> and <span className="text-blue-200">Data Analyst</span> who thrives at the intersection of code, creativity, and data.
            </p>
            
            <p className="flex items-start gap-3">
              <span className="text-2xl">📚</span>
              With experience in <span className="text-blue-200">full-stack development</span>, <span className="text-blue-200">NLP</span>, and <span className="text-blue-200">cloud platforms</span>, I love turning real-world problems into impactful solutions.
            </p>
            
            <p className="flex items-start gap-3">
              <span className="text-2xl">🌱</span>
              Currently expanding my skills in <span className="text-blue-200">cloud engineering</span>, <span className="text-blue-200">data pipelines</span>, and <span className="text-blue-200">advanced machine learning</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelAbout;
