import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark border-t border-border py-12 relative overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center gap-8">
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/saquib34" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/5 border border-border text-gray-400 hover:border-primary hover:text-primary transition-all">
            <FaLinkedin />
          </a>
          <a href="https://github.com/saquib34" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/5 border border-border text-gray-400 hover:border-primary hover:text-primary transition-all">
            <FaGithub />
          </a>
          <a href="mailto:shadmanshahin6@gmail.com" className="p-3 rounded-lg bg-white/5 border border-border text-gray-400 hover:border-primary hover:text-primary transition-all">
            <FaEnvelope />
          </a>
        </div>
        <div className="text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
            &copy; {new Date().getFullYear()} Saquib Daiyan <span className="mx-2 text-border">/</span> Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;