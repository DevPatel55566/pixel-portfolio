
import React from 'react';
import TerminalProjectConsole from './TerminalProjectConsole'

const PixelProjectsTerminal: React.FC = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#33C3F0] mb-4">Interactive Project Explorer</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Type commands in the terminal below to discover my projects and earn badges!
            Try typing <span className="text-[#33C3F0] font-mono">help</span> to get started.
          </p>
        </div>
        
        <TerminalProjectConsole />
      </div>
    </div>
  );
};

export default PixelProjectsTerminal;