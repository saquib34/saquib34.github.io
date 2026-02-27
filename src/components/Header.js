// src/components/Header.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-dark/80 backdrop-blur-md fixed w-full top-0 left-0 z-50 border-b border-border">
      <nav className="container flex justify-between items-center py-4">
        <div className="text-2xl font-black tracking-tighter text-white">
          <a href="/" className="hover:text-primary transition-colors">SAQUIB<span className="text-primary">.</span></a>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase text-gray-400">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 w-full h-screen bg-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-4xl text-white"
            >
              <HiX />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-3xl font-black text-white hover:text-primary transition-colors uppercase tracking-tighter"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;

