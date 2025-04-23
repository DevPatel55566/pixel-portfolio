
import React from 'react';

const PixelHero: React.FC = () => {
  return (
    <section id="home" className="bg-[#1e2b7a] py-20 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-8 h-8 bg-blue-400"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-blue-300"></div>
        <div className="absolute bottom-20 left-1/4 w-6 h-6 bg-blue-400"></div>
        <div className="absolute bottom-40 right-1/3 w-10 h-10 bg-blue-300"></div>
      </div>
      
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="mb-8">
            <h2 className="text-3xl mb-2 text-blue-200">WELCOME PLAYER 1</h2>
            <h1 className="text-2xl md:text-4xl mb-6 leading-relaxed">
              I'm <span className="text-blue-400">Dev Patel</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              <span className="inline-block bg-[#2a367d] p-2 mr-2 rounded">SOFTWARE DEVELOPER</span>
              <span className="inline-block bg-[#2a367d] p-2 mr-2 rounded">DATA ANALYST</span>
              <span className="inline-block bg-[#2a367d] p-2 rounded">FULL-STACK ENTHUSIAST</span>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#about" 
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors"
            >
              PRESS START
            </a>
            <a 
              href="#contact" 
              className="bg-[#2a367d] hover:bg-[#2e3d8d] text-blue-200 hover:text-white px-6 py-3 rounded-lg transition-colors"
            >
              CONTACT
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="bg-[#2a367d] p-8 rounded-lg">
              <div className="text-6xl">👨‍💻</div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-blue-400/30 rounded-lg"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-4 bg-blue-400/20"></div>
    </section>
  );
};

export default PixelHero;
