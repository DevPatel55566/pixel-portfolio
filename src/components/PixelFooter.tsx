
import React from 'react';

const PixelFooter: React.FC = () => {
  return (
    <footer className="py-20 bg-[#1e2b7a] border-t border-blue-400/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-2xl text-white">
              <span className="text-blue-400">Dev</span> Patel
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
