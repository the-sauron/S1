import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail, FiHeart } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-rose-500 p-0.5 mr-3">
                <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TS</span>
                </div>
              </div>
              <span className="text-white font-bold text-2xl bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                the Sauron
              </span>
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Creating digital excellence through innovative solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/the_sauron__/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-500/20 transition-all duration-300 group border border-white/10"
              >
                <FaInstagram className="text-xl text-neutral-400 group-hover:text-red-400 transition-colors" />
              </a>
              <a 
                href="mailto:thesauron.tech@gmail.com" 
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-500/20 transition-all duration-300 group border border-white/10"
              >
                <FiMail className="text-xl text-neutral-400 group-hover:text-red-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-500/20 transition-all duration-300 group border border-white/10"
              >
                <FaYoutube className="text-xl text-neutral-400 group-hover:text-red-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { href: "https://topmate.io/the_sauron/1706299", label: "Video Editing" },
                { href: "https://topmate.io/the_sauron/1681422", label: "Smartphone Buying Guide" },
                { href: "https://topmate.io/the_sauron/1681422", label: "Laptop & Gadget Suggestions" },
                { href: "https://topmate.io/the_sauron/1693712", label: "Coding Tuition & Guidance" }
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-neutral-600 rounded-full mr-3 group-hover:bg-red-500 transition-colors"></span>
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#about-section", label: "About Me" },
                { href: "#services-section", label: "Services" },
                { href: "#hero-section", label: "Portfolio" },
                { href: "#contact", label: "Contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-neutral-600 rounded-full mr-3 group-hover:bg-red-500 transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mr-3 group-hover:bg-red-500/20 transition-colors">
                  <FiMail className="text-red-400" />
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Email</p>
                  <a 
                    href="mailto:thesauron.tech@gmail.com" 
                    className="text-white hover:text-red-400 transition-colors"
                  >
                    thesauron.tech@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mr-3 group-hover:bg-red-500/20 transition-colors">
                  <FaInstagram className="text-red-400" />
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Instagram</p>
                  <a 
                    href="https://www.instagram.com/the_sauron__/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-400 transition-colors"
                  >
                    @the_sauron__
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 flex items-center">
              © {new Date().getFullYear()} The Sauron. Made with 
              <FiHeart className="text-red-500 mx-1" /> 
              
            </p>
            
            
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </footer>
  );
};