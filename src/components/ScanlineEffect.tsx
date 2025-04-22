
import React from 'react';

const ScanlineEffect: React.FC = () => {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-10"
        style={{
          background: 'linear-gradient(transparent 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
          backgroundSize: '100% 3px',
        }}
      ></div>
    </>
  );
};

export default ScanlineEffect;
