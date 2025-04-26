import React from 'react';

const PixelFooter: React.FC = () => {
  return (
    <footer className="py-20 bg-gradient-to-br from-[#0a1128] to-[#1e3a8a] relative border-t border-white/10">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-300 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
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
