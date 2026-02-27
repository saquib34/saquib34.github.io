// components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = (isLeft) => ({
  hidden: { opacity: 0, x: isLeft ? -50 : 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
});

function Experience() {
  const experiences = [
    {
      title: "ML and Web Dev Engineer",
      company: "Aptli AI",
      duration: "February 2026 - Present",
      location: "Remote",
      description: [
        "Architecting and implementing advanced ML-driven features for core platforms",
        "Developing high-performance web applications using modern React and Node.js ecosystems",
        "Optimizing machine learning integration for real-time processing"
      ],
      current: true
    },
    {
      title: "Software Development Engineer (SDE)",
      company: "Kalvium",
      duration: "May 2025 - February 2026",
      location: "Bengaluru",
      description: [
        "Working on V86 virtualization technology for running Linux in browsers",
        "Developing browser-based OS solutions using JavaScript and WebAssembly",
        "Implementing system-level programming for virtual machine architecture",
        "Contributing to open-source virtualization projects for performance"
      ],
      current: false
    },
    {
      title: "ML and Backend Engineer",
      company: "Zensible",
      duration: "November 2024 - February 2025",
      location: "Remote",
      description: [
        "Developed healthcare AI system for mental health professionals in India",
        "Built voice transcription system using OpenAI’s Whisper for analysis",
        "Implemented custom diarization for therapist-patient differentiation",
        "Created SOAP notes generation system optimized for Indian accents",
        "Architected specialized ML models for mental health assessment"
      ],
      current: false
    },
    {
      title: "Mobile App Development Intern",
      company: "Dhobi G",
      duration: "September 2024 - November 2024",
      location: "Remote",
      description: [
        "Contributed to the development of a mobile application for Dhobi G",
        "Implemented key features and functionality using Flutter and Firebase",
        "Gained hands-on experience in app development and project management"
      ],
      current: false
    },
    {
      title: "Signal Analysis and ML Research Intern",
      company: "IISER Bhopal - SIRL Lab",
      duration: "May 2024 - July 2024",
      location: "Bhopal",
      description: [
        "Worked on emotion detection using multimodal signals (GSR)",
        "Implemented CNN 1D, LSTM networks, and Fourier Transform for analysis",
        "Created comprehensive signal processing pipelines for accuracy"
      ],
      current: false
    },
    {
      title: "Frontend Intern",
      company: "Ministry of Education, India",
      duration: "June 2024 - July 2024",
      location: "Delhi",
      description: [
        "Developed responsive interfaces for government education platforms",
        "Improved user experience satisfaction scores by 25% during internship",
        "Featured on ministry’s implementation team page for contributions",
        "Implemented secure data handling practices for sensitive information"
      ],
      current: false
    },
    {
      title: "CNN Architecture Intern",
      company: "IIT Kanpur",
      duration: "June 2023 - July 2023",
      location: "IIT Kanpur",
      description: [
        "Developed CNN architectures for retinal image classification",
        "Collaborated with healthcare experts for diagnostic accuracy",
        "Implemented advanced deep learning techniques for image analysis"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="bg-dark relative overflow-hidden grid-background border-t border-border">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Career <span className="text-primary">Journey</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">My professional experience in software engineering and machine learning research.</p>
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-border -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants(isLeft)}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-dark border-2 border-primary z-20">
                    {exp.current && <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                  </div>

                  <div className="w-full md:w-[45%]">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`card ${exp.current ? 'border-primary/50 bg-primary/5 shadow-[0_0_30px_rgba(255,221,68,0.05)]' : ''}`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-primary text-xl"><FaBriefcase /></span>
                        {exp.current && (
                          <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-primary text-dark">Current</span>
                        )}
                      </div>
                      <h3 className="text-xl font-black text-white mb-1 leading-tight">{exp.title}</h3>
                      <p className="text-gray-400 font-bold mb-4">@ {exp.company}</p>

                      <div className="flex flex-col gap-1 text-xs text-gray-500 font-bold mb-6 italic uppercase tracking-wider">
                        <span className="flex items-center gap-2"><FaCalendarAlt /> {exp.duration}</span>
                        <span className="flex items-center gap-2"><FaMapMarkerAlt /> {exp.location}</span>
                      </div>

                      <ul className="text-sm text-gray-400 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary">▸</span> {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;

