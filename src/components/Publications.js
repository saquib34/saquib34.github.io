import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaPython, FaGithub, FaAward } from 'react-icons/fa';

const publications = [
  {
    title: 'Real-Time Smart Meeting Assistant using Edge AI',
    venue: 'IEEE (to be published July 2025)',
    description: 'Co-authored with Dr. A. Senthilselvi, SRMIST. Edge AI for audio capture, speech-to-text, and meeting scheduling.',
    badge: <FaAward className="text-yellow-500 text-2xl mr-2" />, 
    link: 'https://ieeexplore.ieee.org/' // Placeholder
  },
  {
    title: 'NeuroKit-Eda-Analysis Library',
    venue: 'PyPI, Open Source',
    description: 'Published Python library for EDA signal analysis. Advanced signal processing for psychophysiological data.',
    badge: <FaPython className="text-green-500 text-2xl mr-2" />, 
    link: 'https://pypi.org/project/neurokit-eda-analysis/'
  },
  {
    title: 'Open Source Contributions',
    venue: 'GitHub',
    description: 'Contributions to browser-based virtualization, healthcare AI, and regional language models.',
    badge: <FaGithub className="text-gray-800 text-2xl mr-2" />, 
    link: 'https://github.com/saquib34'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120 }
  }
};

function Publications() {
  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-purple-100 to-blue-100 relative overflow-hidden">
      <motion.div
        className="absolute left-0 bottom-0 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-2xl animate-pulse"
        style={{ zIndex: 0 }}
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container mx-auto px-4 md:px-0 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold mb-12 text-center text-gray-800 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Publications & Open Source
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {publications.map((pub, idx) => (
            <motion.a
              key={idx}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer group"
              variants={itemVariants}
              whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(168,85,247,0.15)' }}
            >
              <div className="flex items-center mb-4">
                {pub.badge}
                <span className="text-xl font-bold text-purple-700 group-hover:text-blue-700 transition-colors duration-200">{pub.title}</span>
              </div>
              <div className="text-gray-600 mb-2 text-center font-semibold">{pub.venue}</div>
              <div className="text-gray-700 text-center mb-4">{pub.description}</div>
              <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">View</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Publications; 