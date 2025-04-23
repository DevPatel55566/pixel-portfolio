
import React from 'react';

const PixelContact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#1e2b7a] text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-md mx-auto bg-[#2a367d] rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-blue-200 mb-2">Your Name</label>
              <input
                type="text"
                className="w-full p-3 bg-[#1e2b7a] border border-blue-400/30 rounded-lg focus:border-blue-400 focus:outline-none text-white"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block text-blue-200 mb-2">Your Email</label>
              <input
                type="email"
                className="w-full p-3 bg-[#1e2b7a] border border-blue-400/30 rounded-lg focus:border-blue-400 focus:outline-none text-white"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-blue-200 mb-2">Message</label>
              <textarea
                className="w-full p-3 bg-[#1e2b7a] border border-blue-400/30 rounded-lg focus:border-blue-400 focus:outline-none text-white h-32"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="text-center mt-12">
          <div className="flex justify-center gap-4">
            <a 
              href="https://linkedin.com/in/devpatel55566" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#2a367d] hover:bg-[#2e3d8d] text-blue-200 hover:text-white px-6 py-3 rounded-lg transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/dv_patel555/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#2a367d] hover:bg-[#2e3d8d] text-blue-200 hover:text-white px-6 py-3 rounded-lg transition-colors"
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
