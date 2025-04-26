
import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const PixelContact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl text-blue-200 mb-6">Let's Connect</h3>
              <p className="text-blue-100/80 text-lg leading-relaxed mb-8">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/devpatel55566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-[#2b5876] to-[#4e4376] p-4 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-blue-200" />
                </a>
                <a 
                  href="https://www.instagram.com/dv_patel555/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-4 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <Instagram className="w-6 h-6 text-blue-200" />
                </a>
                <a 
                  href="mailto:your@email.com"
                  className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] p-4 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-blue-200" />
                </a>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-gradient-to-br from-[#0f172a]/80 to-[#1e3a8a]/80 border border-blue-400/20 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-blue-200/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-gradient-to-br from-[#0f172a]/80 to-[#1e3a8a]/80 border border-blue-400/20 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-blue-200/50"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-4 bg-gradient-to-br from-[#0f172a]/80 to-[#1e3a8a]/80 border border-blue-400/20 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-blue-200/50"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#3a7bd5] to-[#3a6073] text-white py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelContact;
