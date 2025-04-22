
import React from 'react';

const ScanlineEffect: React.FC = () => {
  return (
    <>
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-15"
        style={{
          background: 'linear-gradient(transparent 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)',
          backgroundSize: '100% 4px',
        }}
      ></div>
      <div
        className="pointer-events-none fixed inset-0 z-40 opacity-5"
        style={{
          background: 'radial-gradient(circle, transparent 30%, black 150%)',
        }}
      ></div>
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-5"
        style={{
          backgroundColor: 'rgb(30, 140, 255)',
          mixBlendMode: 'lighten',
        }}
      ></div>
    </>
  );
};

export default ScanlineEffect;
