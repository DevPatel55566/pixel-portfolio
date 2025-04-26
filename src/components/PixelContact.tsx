
import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const PixelContact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-[#1e2b7a]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
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
                  className="bg-[#2a367d] p-4 rounded-full hover:bg-[#2e3d8d] transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-blue-200" />
                </a>
                <a 
                  href="https://www.instagram.com/dv_patel555/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2a367d] p-4 rounded-full hover:bg-[#2e3d8d] transition-colors"
                >
                  <Instagram className="w-6 h-6 text-blue-200" />
                </a>
                <a 
                  href="mailto:your@email.com"
                  className="bg-[#2a367d] p-4 rounded-full hover:bg-[#2e3d8d] transition-colors"
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
                  className="w-full p-4 bg-[#2a367d] border border-blue-400/20 rounded-lg focus:border-blue-400 focus:outline-none text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-[#2a367d] border border-blue-400/20 rounded-lg focus:border-blue-400 focus:outline-none text-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-4 bg-[#2a367d] border border-blue-400/20 rounded-lg focus:border-blue-400 focus:outline-none text-white"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-400 hover:bg-blue-500 text-white py-4 px-8 rounded-lg transition-colors"
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
