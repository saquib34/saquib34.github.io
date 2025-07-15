import React from 'react';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-12">
      <div className="container text-center flex flex-col items-center gap-4">
        <div className="flex gap-6 justify-center mb-2">
          <a href="https://www.linkedin.com/in/saquib34" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-700 text-2xl hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/saquib34" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-800 text-2xl hover:text-blue-500 transition">
            <FaGithub />
          </a>
          <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="CV" className="text-red-600 text-2xl hover:text-blue-500 transition">
            <FaFilePdf />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mohammad Saquib Daiyan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;