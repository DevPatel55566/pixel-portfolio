
import React, { useEffect } from 'react';
import PixelNav from '@/components/PixelNav';
import PixelHero from '@/components/PixelHero';
import PixelAbout from '@/components/PixelAbout';
import PixelSkills from '@/components/PixelSkills';
import PixelProjects from '@/components/PixelProjects';
import PixelContact from '@/components/PixelContact';
import PixelFooter from '@/components/PixelFooter';
import ScanlineEffect from '@/components/ScanlineEffect';

const Index: React.FC = () => {
  // Optional: Add pixel cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.getElementById('custom-cursor');
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursor.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      const cursor = document.getElementById('custom-cursor');
      if (cursor) {
        cursor.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Custom pixel cursor */}
      <div 
        id="custom-cursor" 
        className="fixed w-4 h-4 bg-pixel-accent z-50 pointer-events-none opacity-0 pixelated"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        
      </div>
      
      <PixelNav />
      <PixelHero />
      <PixelAbout />
      <PixelSkills />
      <PixelProjects />
      <PixelContact />
      <PixelFooter />
      
      {/* Game-style background grid */}
      <div className="fixed inset-0 bg-grid opacity-5 pointer-events-none z-0"></div>
      
      {/* CRT scanline effect */}
      <ScanlineEffect />
    </div>
  );
};

export default Index;
