// components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import saquib from '../images/saquib.png';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';

const stats = [
  { label: 'Major Projects', value: '15+' },
  { label: 'Mentored', value: '100+' },
  { label: 'Workshops', value: '12+' },
  { label: 'Research', value: '2+' },
];

const education = [
  { degree: 'B.Tech in Computer Science (IoT & AI/ML)', place: 'SRMIST, Chennai', year: '2022-2026', score: 'CGPA: 9.15' },
  { degree: 'Class XII (CBSE)', place: 'Patna', year: '2021', score: '85.6%' },
];

function About() {
  return (
    <section id="about" className="bg-dark relative overflow-hidden grid-background border-t border-border">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">About <span className="text-primary">Me</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">Engineer, Researcher, and Tech Enthusiast.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Profile Card */}
          <motion.div
            className="card p-10 flex flex-col items-center w-full md:w-1/3 border-primary/20 bg-primary/5"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-6">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"
              />
              <motion.img
                src={saquib}
                alt="Mohammad Saquib Daiyan - Software Development Engineer at Aptli AI"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-40 h-40 object-cover rounded-full border-2 border-primary relative z-10 shadow-[0_0_30px_rgba(255,221,68,0.2)]"
              />
            </div>
            <h3 className="text-2xl font-black text-white mb-2 tracking-tighter">Saquib Daiyan</h3>
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-6 px-4 py-1 bg-primary/10 rounded-full">SDE @ Aptli AI</p>

            <div className="flex flex-col gap-3 w-full text-sm text-gray-400 font-medium">
              <span className="flex items-center gap-3"><FaMapMarkerAlt className="text-primary" aria-hidden="true" /> Patna, Bihar, India</span>
              <span className="flex items-center gap-3"><FaUniversity className="text-primary" aria-hidden="true" /> SRMIST, Chennai</span>
            </div>

            <div className="flex gap-4 mt-8">
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://github.com/saquib34"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Saquib's GitHub Profile"
                title="GitHub"
                className="p-3 rounded-lg bg-dark border border-border text-white hover:border-primary hover:text-primary transition-all"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://www.linkedin.com/in/saquib34"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Saquib's LinkedIn Profile"
                title="LinkedIn"
                className="p-3 rounded-lg bg-dark border border-border text-white hover:border-primary hover:text-primary transition-all"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="mailto:shadmanshahin6@gmail.com"
                aria-label="Email Saquib"
                title="Email"
                className="p-3 rounded-lg bg-dark border border-border text-white hover:border-primary hover:text-primary transition-all"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>

          {/* Bio and Education */}
          <div className="w-full md:w-2/3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-300 leading-tight mb-12 italic"
            >
              "I build browser-based virtualization, healthcare AI, and regional language models. Passionate about making technology high-performance and accessible."
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, borderColor: 'rgba(255, 221, 68, 0.5)' }}
                  className="card p-6 text-center"
                >
                  <span className="block text-2xl font-black text-primary mb-1">{stat.value}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-4">Education Background</h4>
              {education.map((edu, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-1 h-12 bg-border relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-dark" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">{edu.degree}</h5>
                    <p className="text-sm text-gray-500 font-medium">{edu.place} <span className="mx-2 text-border">/</span> {edu.year} <span className="mx-2 text-border">/</span> <span className="text-primary">{edu.score}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;