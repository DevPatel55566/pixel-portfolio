
import React from 'react';

const PixelHero: React.FC = () => {
  return (
    <section id="home" className="bg-pixel-primary py-20 text-white relative overflow-hidden">
      {/* Pixel art decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-8 h-8 bg-pixel-accent"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-pixel-highlight"></div>
        <div className="absolute bottom-20 left-1/4 w-6 h-6 bg-pixel-info"></div>
        <div className="absolute bottom-40 right-1/3 w-10 h-10 bg-pixel-success"></div>
      </div>
      
      <div className="game-container grid md:grid-cols-2 gap-8 items-center">
        {/* Text content */}
        <div className="order-2 md:order-1">
          <div className="typing-container mb-4">
            <h2 className="font-game text-3xl mb-2 text-pixel-highlight">WELCOME PLAYER 1</h2>
            <h1 className="font-pixel text-2xl md:text-4xl mb-6 leading-relaxed">
              I'm <span className="text-pixel-accent">Dev Patel</span>
            </h1>
            <p className="font-game text-xl text-gray-300 mb-8">
              <span className="inline-block bg-pixel-secondary p-1 mr-1">SOFTWARE DEVELOPER</span>
              <span className="inline-block bg-pixel-secondary p-1 mr-1">DATA ANALYST</span>
              <span className="inline-block bg-pixel-secondary p-1">FULL-STACK ENTHUSIAST</span>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="pixel-button">PRESS START</a>
            <a href="#contact" className="pixel-button bg-pixel-highlight">CONTACT</a>
          </div>
        </div>
        
        {/* Pixel art avatar */}
        <div className="order-1 md:order-2 pixel-float flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 relative pixelated">
            <div className="pixel-card overflow-hidden">
              {/* Simple pixel art character - this is a placeholder */}
              <div className="w-full h-full bg-pixel-secondary flex items-center justify-center">
                <div className="text-6xl font-pixel">👨‍💻</div>
              </div>
            </div>
            {/* Game console frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-black rounded-lg z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>
      
      {/* Pixelated bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-pixel-accent"></div>
    </section>
  );
};

export default PixelHero;
