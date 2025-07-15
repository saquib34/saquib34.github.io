// src/components/Header.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur shadow-sm fixed w-full top-0 left-0 z-50 border-b border-gray-100">
      <nav className="container flex justify-between items-center py-4">
        <div className="text-2xl font-extrabold tracking-tight text-blue-700">
          <a href="/">Saquib</a>
        </div>
        <div className="hidden md:flex gap-8 text-base font-medium">
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-700 text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 w-4/5 max-w-xs bg-white/95 shadow-xl h-full z-40 flex flex-col px-0 pt-0"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Close button inside mobile menu */}
            <div className="relative w-full h-20 flex items-center justify-end px-6 border-b border-blue-100 bg-white/95">
              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl text-blue-700 focus:outline-none"
                aria-label="Close menu"
              >
                <HiX />
              </button>
            </div>
            <nav className="flex flex-col gap-8 px-8 pt-8">
              <a href="#about" className="text-blue-700 text-lg font-semibold hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>About</a>
              <a href="#skills" className="text-blue-700 text-lg font-semibold hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#projects" className="text-blue-700 text-lg font-semibold hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#experience" className="text-blue-700 text-lg font-semibold hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Experience</a>
              <a href="#contact" className="text-blue-700 text-lg font-semibold hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
