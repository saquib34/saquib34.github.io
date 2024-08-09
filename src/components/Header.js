// src/components/Header.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi'; // Import icons for mobile menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">My Portfolio</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-800 hover:text-blue-500 transition duration-300">About</a>
          <a href="#skills" className="text-gray-800 hover:text-blue-500 transition duration-300">Skills</a>
          <a href="#projects" className="text-gray-800 hover:text-blue-500 transition duration-300">Projects</a>
          <a href="#experience" className="text-gray-800 hover:text-blue-500 transition duration-300">Experience</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-500 transition duration-300">Contact</a>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 w-4/5 md:w-1/2 bg-white shadow-lg h-full z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        exit={{ x: '100%' }}
      >
        <div className="flex flex-col items-center mt-20 space-y-6">
          <a href="#about" className="text-gray-800 hover:text-blue-500 transition duration-300 text-lg" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="text-gray-800 hover:text-blue-500 transition duration-300 text-lg" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="text-gray-800 hover:text-blue-500 transition duration-300 text-lg" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" className="text-gray-800 hover:text-blue-500 transition duration-300 text-lg" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-500 transition duration-300 text-lg" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
