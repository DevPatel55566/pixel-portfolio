
import React from 'react';

const PixelContact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="game-container">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-3xl mb-2 text-pixel-primary">CONTACT ME</h2>
          <div className="w-20 h-1 bg-pixel-accent mx-auto"></div>
          <p className="font-game text-lg mt-4 text-gray-600">Ready to start a new quest?</p>
        </div>
        
        <div className="max-w-md mx-auto pixel-card bg-pixel-primary text-white p-6">
          <h3 className="font-pixel text-xl mb-6 text-center text-pixel-highlight">SEND A MESSAGE</h3>
          
          <form className="space-y-4">
            <div>
              <label className="block font-game mb-1 text-gray-300">Your Name</label>
              <input
                type="text"
                className="w-full p-2 bg-pixel-secondary border-2 border-black font-game"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block font-game mb-1 text-gray-300">Your Email</label>
              <input
                type="email"
                className="w-full p-2 bg-pixel-secondary border-2 border-black font-game"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block font-game mb-1 text-gray-300">Message</label>
              <textarea
                className="w-full p-2 bg-pixel-secondary border-2 border-black font-game h-32"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full pixel-button py-3"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        
        <div className="text-center mt-12">
          <h3 className="font-pixel text-xl mb-4 text-pixel-primary">CONNECT WITH ME</h3>
          <div className="flex justify-center gap-4">
            <a 
              href="https://linkedin.com/in/devpatel55566" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pixel-button bg-[#0A66C2] px-3 py-2"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/dv_patel555/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pixel-button bg-[#E4405F] px-3 py-2"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelContact;
