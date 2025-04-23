
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PixelNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-pixel-primary text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="font-pixel text-lg tracking-wider">
          <span className="text-pixel-accent">&lt;</span>
          Dev
          <span className="text-pixel-highlight">Patel</span>
          <span className="text-pixel-accent">/&gt;</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden px-2 py-1 border border-pixel-accent text-pixel-accent" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-lg hover:text-pixel-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-pixel-primary border-t border-pixel-accent md:hidden">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="block py-3 px-4 text-lg hover:bg-pixel-secondary border-b border-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default PixelNav;
