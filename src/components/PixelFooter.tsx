
import React from 'react';

const PixelFooter: React.FC = () => {
  return (
    <footer className="bg-pixel-primary text-white py-8 border-t-4 border-pixel-accent">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-pixel text-sm mb-2">
          <span className="text-pixel-highlight">DEV PATEL</span> • 
          <span className="text-pixel-accent"> PORTFOLIO</span>
        </p>
        <p className="font-game text-gray-400 text-sm">
          Built with React, TypeScript, Tailwind CSS and pixel art love
        </p>
        
        <div className="mt-6 flex justify-center items-center">
          <div className="pixel-button bg-transparent border-pixel-accent text-pixel-accent py-1 px-3 text-xs">
            © 2023 • All Rights Reserved
          </div>
        </div>
        
        <div className="mt-4 font-pixel text-xs">
          <a href="#home" className="text-gray-400 hover:text-pixel-highlight">
            [BACK TO TOP]
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PixelFooter;
