// components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import saquib from '../images/saquib.png';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaUniversity, FaCalendarAlt } from 'react-icons/fa';

const stats = [
  { label: 'Years Experience', value: 3 },
  { label: 'Major Projects', value: 10 },
  { label: 'Students Mentored', value: 100 },
  { label: 'Workshops Led', value: 12 },
];

const education = [
  { degree: 'B.Tech in Computer Science (IoT & AI/ML)', place: 'SRMIST, Chennai', year: '2022-2026', score: 'CGPA: 9.15' },
  { degree: 'Class XII (CBSE)', place: 'Patna', year: '2021', score: '85.6%' },
  { degree: 'Class X (ICSE)', place: 'Patna', year: '2019', score: '84.8%' },
];

function About() {
  return (
    <section id="about" className="py-8 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Soft background shape */}
      <motion.div
        className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full bg-blue-100 opacity-30 z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <div className="container relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-blue-800 tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Profile Card */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center w-full md:w-1/3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 120 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={saquib}
              alt="Mohammad Saquib Daiyan"
              className="w-40 h-40 object-cover rounded-full border-4 border-blue-200 shadow-lg mb-6"
            />
            <span className="text-xl font-bold text-blue-800 mb-1">Mohammad Saquib Daiyan</span>
            <span className="text-gray-500 flex items-center mb-1"><FaMapMarkerAlt className="mr-2" />Patna, Bihar, India</span>
            <span className="text-gray-500 flex items-center mb-1"><FaEnvelope className="mr-2" />shadmanshahin6@gmail.com</span>
            <span className="text-gray-500 flex items-center mb-1"><FaGithub className="mr-2" />saquib34</span>
            <span className="text-gray-500 flex items-center mb-1"><FaLinkedin className="mr-2" />saquib34</span>
            <span className="text-gray-500 flex items-center mb-1"><FaUniversity className="mr-2" />SRMIST, Chennai</span>
            <div className="flex gap-6 mt-4">
              <a href="https://github.com/saquib34" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 text-2xl transition">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/saquib34" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 text-2xl transition">
                <FaLinkedin />
              </a>
              <a href="mailto:shadmanshahin6@gmail.com" className="text-purple-700 hover:text-blue-500 text-2xl transition">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
          {/* Summary and Stats Card */}
          <motion.div
            className="w-full md:w-2/3 flex flex-col gap-10"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.p
              className="text-2xl leading-relaxed text-gray-700 font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Software Development Engineer, AI/ML enthusiast, and open-source contributor. I build browser-based virtualization, healthcare AI, and regional language models. IEEE-published, community mentor, and passionate about making tech accessible.
            </motion.p>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
                  whileHover={{ scale: 1.08, backgroundColor: '#e0e7ff' }}
                >
                  <span className="text-3xl font-bold text-blue-700">
                    {stat.value}
                  </span>
                  <span className="text-gray-700 mt-2 text-sm font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>
            {/* Education Timeline */}
            <div className="mt-6">
              <motion.h3
                className="text-lg font-bold text-blue-800 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Education
              </motion.h3>
              <div className="relative pl-6 border-l-4 border-blue-200">
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    className="mb-6 relative"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                  >
                    <div className="absolute -left-7 top-1.5 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                      <span className="font-semibold text-gray-900">{edu.degree}</span>
                      <span className="text-gray-600">{edu.place}</span>
                      <span className="text-gray-500 flex items-center"><FaCalendarAlt className="mr-1" />{edu.year}</span>
                      <span className="text-blue-700 font-bold">{edu.score}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;