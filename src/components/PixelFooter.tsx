
import React from 'react';
import { Github, Instagram, Mail } from 'lucide-react';

const PixelFooter: React.FC = () => {
  return (
    <footer className="bg-pixel-secondary text-pixel-white py-8 border-t-4 border-pixel-primary">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-pixel text-xs mb-2 text-pixel-accent">
          &copy; 2025 Dev Patel. All Rights Reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com" className="text-pixel-white hover:text-pixel-primary transition-colors" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href="https://instagram.com/dv_patel555" className="text-pixel-white hover:text-pixel-highlight transition-colors" aria-label="Instagram">
            <Instagram size={22} />
          </a>
          <a href="mailto:contact@example.com" className="text-pixel-white hover:text-pixel-accent transition-colors" aria-label="Mail">
            <Mail size={22} />
          </a>
        </div>
        <div className="font-pixel text-xs">
          <a href="#home" className="text-gray-300 hover:text-pixel-highlight">Back to top</a>
        </div>
      </div>
    </footer>
  );
};

export default PixelFooter;
