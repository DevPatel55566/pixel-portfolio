
import React from 'react';
import { Github, Instagram, Mail } from 'lucide-react';

const PixelFooter: React.FC = () => {
  return (
    <footer className="bg-pixel-primary text-white py-8 border-t-4 border-pixel-accent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-pixel text-sm mb-2">
              <span className="text-white">DEV</span> • 
              <span className="text-pixel-accent"> PATEL</span>
            </p>
            <p className="font-game text-gray-200 text-sm">
              SOFTWARE DEVELOPER | DATA ANALYST
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-4">
            <a href="https://github.com" className="text-white hover:text-pixel-highlight transition-colors">
              <Github size={24} />
            </a>
            <a href="https://instagram.com/dv_patel555" className="text-white hover:text-pixel-highlight transition-colors">
              <Instagram size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-white hover:text-pixel-highlight transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <div className="inline-block px-3 py-1 border border-white/30 rounded font-game text-xs">
            © 2025 • All Rights Reserved
          </div>
          
          <div className="mt-4 font-pixel text-xs">
            <a href="#home" className="text-gray-300 hover:text-pixel-highlight">
              [BACK TO TOP]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PixelFooter;
