
import React from 'react';

const PixelHero: React.FC = () => {
  return (
    <section id="home" className="bg-pixel-primary py-20 text-pixel-white relative overflow-hidden border-b-4 border-pixel-accent">
      <div className="game-container flex flex-col items-center justify-center">
        <h1 className="font-pixel text-2xl md:text-4xl text-center mb-4 text-white tracking-wider">
          Hi, I'm <span className="text-pixel-accent">Dev Patel</span>
        </h1>
        <h2 className="font-game text-xl md:text-2xl text-center text-pixel-highlight mb-7">
          Software Developer | Data Analyst | Full-Stack Enthusiast
        </h2>
        <div className="flex flex-wrap gap-5 mb-8 mt-2">
          <a href="#about" className="pixel-button">About Me</a>
          <a href="#skills" className="pixel-button bg-pixel-highlight">My Skills</a>
          <a href="#projects" className="pixel-button bg-pixel-accent text-pixel-black">Projects</a>
          <a href="#contact" className="pixel-button bg-pixel-primary border-pixel-accent text-pixel-accent">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default PixelHero;
