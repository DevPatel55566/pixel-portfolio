
import React from 'react';

const PixelAbout: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#2b5876] to-[#4e4376] p-8 rounded-2xl hover:translate-y-[-4px] transition-all duration-300 border border-white/10 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl text-blue-200 mb-4">Software Developer</h3>
              <p className="text-blue-100/80">
                Passionate about creating elegant solutions through clean, efficient code and modern technologies.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-8 rounded-2xl hover:translate-y-[-4px] transition-all duration-300 border border-white/10 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl text-blue-200 mb-4">Data Analyst</h3>
              <p className="text-blue-100/80">
                Transforming complex data into actionable insights through advanced analytics and visualization.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] p-8 rounded-2xl hover:translate-y-[-4px] transition-all duration-300 border border-white/10 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-xl text-blue-200 mb-4">Continuous Learner</h3>
              <p className="text-blue-100/80">
                Always exploring new technologies and methodologies to stay at the forefront of innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelAbout;
