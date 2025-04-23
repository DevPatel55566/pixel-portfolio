
import React from 'react';

const PixelFooter: React.FC = () => {
  return (
    <footer className="bg-[#1e2b7a] text-white py-8 border-t border-blue-400/20">
      <div className="container px-4 text-center">
        <p className="text-sm mb-2">
          <span className="text-blue-400">DEV PATEL</span> • 
          <span className="text-blue-200">PORTFOLIO</span>
        </p>
        <p className="text-blue-200/80 text-sm">
          Built with React, TypeScript, and Tailwind CSS
        </p>
        
        <div className="mt-6 flex justify-center items-center">
          <div className="bg-[#2a367d] border border-blue-400/20 text-blue-200 py-1 px-3 text-xs rounded">
            © 2024 • All Rights Reserved
          </div>
        </div>
        
        <div className="mt-4 text-xs">
          <a href="#home" className="text-blue-200 hover:text-blue-400 transition-colors">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PixelFooter;
