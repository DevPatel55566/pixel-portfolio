
import React from 'react';

const PixelFooter: React.FC = () => {
  return (
    <footer className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] border-t border-blue-400/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-2xl">
              <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Dev</span>
              <span className="text-white"> Patel</span>
            </span>
          </div>
          
          <p className="text-blue-200/80 mb-8">
            Software Developer & Data Analyst
          </p>
          
          <div className="text-sm text-blue-200/60">
            © {new Date().getFullYear()} Dev Patel. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PixelFooter;
