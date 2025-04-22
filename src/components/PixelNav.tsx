
import React, { useState } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const PixelNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-pixel-secondary text-pixel-white border-b-4 border-pixel-primary p-4 sticky top-0 z-50 font-pixel">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl tracking-wide text-pixel-primary">
          Dev Patel
        </div>
        <button 
          className="md:hidden bg-pixel-primary text-white px-3 py-1 rounded pixel-border font-pixel"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="font-pixel text-base hover:text-pixel-highlight transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-pixel-secondary border-t-2 border-black md:hidden">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="block py-3 px-5 font-pixel hover:text-pixel-highlight hover:bg-pixel-primary border-b border-black"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default PixelNav;
