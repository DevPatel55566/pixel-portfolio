
import React from 'react';

const PixelFooter: React.FC = () => {
  return (
    <footer className="bg-pixel-primary text-white py-8 border-t border-pixel-accent">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          <span className="text-pixel-highlight">DEV PATEL</span> • 
          <span className="text-pixel-accent">PORTFOLIO</span>
        </p>
        <p className="text-gray-400 text-sm">
          Built with React, TypeScript, and Tailwind CSS
        </p>
        
        <div className="mt-6 flex justify-center items-center">
          <div className="bg-transparent border-pixel-accent text-pixel-accent py-1 px-3 text-xs border rounded">
            © 2024 • All Rights Reserved
          </div>
        </div>
        
        <div className="mt-4 text-xs">
          <a href="#home" className="text-gray-400 hover:text-pixel-accent">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PixelFooter;
