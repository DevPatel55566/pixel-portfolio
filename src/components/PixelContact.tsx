
import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const PixelContact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-[#0a1128] via-[#1e3a8a] to-[#283593] relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-300 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 bg-clip-text text-transparent">
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
                  className="w-full p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-white/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-white/50"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-white/50"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-xl"
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
