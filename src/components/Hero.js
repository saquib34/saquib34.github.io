import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown } from 'react-icons/fa';

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 text-gray-900 overflow-hidden">
      {/* Animated SVG wave at the very top */}
      <div className="absolute top-0 left-0 w-full z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <motion.path
            d="M0,40 Q360,80 720,40 T1440,40 V80 H0 Z"
            fill="url(#wave-gradient)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5b4fc" />
              <stop offset="1" stopColor="#c4b5fd" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Soft abstract background shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-blue-100 opacity-40 z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-100 opacity-30 z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      {/* Extra abstract shape for depth */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 blur-2xl z-0"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.5 }}
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div className="container text-center z-10 px-4">
        {/* Friendly intro */}
        <motion.p
          className="text-lg md:text-xl text-blue-600 font-semibold mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Hello <span className="inline-block animate-wave">👋</span>, I’m
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Mohammad Saquib Daiyan
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-4 text-gray-700 font-medium"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Machine Learning Engineer & Web Developer
        </motion.p>
        {/* Tagline / Mission statement */}
        <motion.p
          className="text-base md:text-lg mb-10 text-gray-500 font-normal max-w-xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          Passionate about building intelligent systems that bridge the gap between people and technology. Dedicated to impactful research, open source, and creating seamless digital experiences.
        </motion.p>
        <motion.div
          className="flex justify-center gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a href="https://www.linkedin.com/in/saquib34" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-700 text-3xl hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/saquib34" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-800 text-3xl hover:text-blue-500 transition">
            <FaGithub />
          </a>
          <a href="mailto:shadmanshahin6@gmail.com" aria-label="Email" className="text-purple-700 text-3xl hover:text-blue-500 transition">
            <FaEnvelope />
          </a>
        </motion.div>
        <motion.a
          href="#contact"
          className="inline-block bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-800 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Get in Touch
        </motion.a>
      </div>
      {/* Animated scroll-down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <FaChevronDown className="text-blue-400 text-2xl animate-bounce" />
        <span className="text-xs text-blue-400 mt-1">Scroll</span>
      </motion.div>
    </section>
  );
}

export default Hero;
