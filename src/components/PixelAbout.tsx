
import React from 'react';

const PixelAbout: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#1e2b7a]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2a367d] p-8 rounded-2xl hover:translate-y-[-4px] transition-all duration-300">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl text-blue-200 mb-4">Software Developer</h3>
              <p className="text-blue-100/80">
                Passionate about creating elegant solutions through clean, efficient code and modern technologies.
              </p>
            </div>
            
            <div className="bg-[#2a367d] p-8 rounded-2xl hover:translate-y-[-4px] transition-all duration-300">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl text-blue-200 mb-4">Data Analyst</h3>
              <p className="text-blue-100/80">
                Transforming complex data into actionable insights through advanced analytics and visualization.
              </p>
            </div>
            
            <div className="bg-[#2a367d] p-8 rounded-2xl hover:translate-y-[-4px] transition-all duration-300">
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
