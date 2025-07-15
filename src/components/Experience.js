// components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function Experience() {
  const experiences = [
    {
      title: "Software Development Engineer (SDE)",
      company: "Kalvium",
      duration: "May 2025 - Present",
      location: "Bengaluru",
      description: [
        "Working on V86 virtualization technology for running Linux environments in web browsers",
        "Developing browser-based operating system solutions using advanced JavaScript and WebAssembly",
        "Implementing system-level programming for virtual machine architecture in browser environment",
        "Creating innovative solutions for cloud computing and virtualization accessibility",
        "Contributing to open-source virtualization projects with focus on performance optimization"
      ],
      current: true
    },
    {
      title: "ML and Backend Engineer",
      company: "Zensible",
      duration: "November 2024 - February 2025",
      location: "Remote",
      description: [
        "Developed healthcare AI system for mental health professionals in India",
        "Built voice transcription system using OpenAI’s Whisper for therapy session analysis",
        "Implemented custom diarization for therapist-patient conversation differentiation",
        "Created SOAP notes generation system optimized for Indian languages and accents",
        "Architected specialized ML models for mental health assessment tailored for Indian context"
      ]
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
      ]
    },
    {
      title: "Signal Analysis and ML Research Intern",
      company: "IISER Bhopal - SIRL Lab",
      duration: "May 2024 - July 2024",
      location: "Bhopal",
      description: [
        "Worked on emotion detection using multimodal signals (GSR) under DR. Haroon’s guidance",
        "Implemented CNN 1D, LSTM networks, and Fourier Transform for advanced signal analysis",
        "Created comprehensive signal processing pipelines achieving significant accuracy improvements"
      ]
    },
    {
      title: "Frontend Intern",
      company: "Ministry of Education, India",
      duration: "June 2024 - July 2024",
      location: "Delhi",
      description: [
        "Developed responsive interfaces for government education platforms using React",
        "Improved user experience satisfaction scores by 25% during internship period",
        "Featured on ministry’s implementation team page for significant contributions",
        "Implemented secure data handling practices for sensitive educational information"
      ]
    },
    {
      title: "CNN Architecture Intern",
      company: "IIT Kanpur",
      duration: "June 2023 - July 2023",
      location: "IIT Kanpur",
      description: [
        "Developed CNN architectures for retinal image classification in medical diagnostics",
        "Collaborated with healthcare experts to improve diagnostic accuracy",
        "Implemented advanced deep learning techniques for medical image analysis"
      ]
    }
  ];

  return (
    <section id="experience" className="py-8 bg-gradient-to-br from-blue-50 to-purple-100 relative overflow-hidden">
      {/* Modern blurred background shapes */}
      <motion.div
        className="absolute left-[-100px] top-[-100px] w-[350px] h-[350px] rounded-full bg-blue-200 opacity-30 blur-2xl z-0"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute right-[-120px] bottom-[-120px] w-[400px] h-[400px] rounded-full bg-purple-200 opacity-30 blur-2xl z-0"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <div className="container relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-blue-800 tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Experience
        </motion.h2>
        {/* Zig-zag timeline with left/right alternation */}
        <div className="relative mx-auto max-w-4xl">
          {/* Central vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-purple-300 rounded-full -translate-x-1/2 z-0" />
          <div className="flex flex-col gap-16">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <>
                  {/* Desktop: Zig-zag grid */}
                  <div key={idx} className="hidden md:grid w-full grid-cols-9 items-center min-h-[180px]">
                    {/* Left card */}
                    <div className={`col-span-4 ${isLeft ? 'flex justify-end' : 'hidden md:block'}`}>
                      {isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: idx * 0.1 }}
                          className="bg-white/90 rounded-2xl shadow-xl border border-blue-100/40 p-6 max-w-md w-full animate-fade-in"
                          style={{
                            boxShadow: exp.current ? '0 0 0 4px #a5b4fc55' : undefined,
                            borderColor: exp.current ? '#4ade80' : undefined
                          }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl text-blue-700"><FaBriefcase /></span>
                            <h3 className="text-lg font-bold text-blue-800">{exp.title}</h3>
                            <span className="text-base text-gray-600">@ {exp.company}</span>
                            {exp.current && (
                              <span className="ml-2 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold border border-green-200 animate-pulse">Current</span>
                            )}
                          </div>
                          <div className="flex items-center text-gray-500 gap-4 mb-2">
                            <span className="flex items-center"><FaCalendarAlt className="mr-2" />{exp.duration}</span>
                            <span className="flex items-center"><FaMapMarkerAlt className="mr-2" />{exp.location}</span>
                          </div>
                          <ul className="list-disc list-inside text-gray-700 mt-2 text-sm md:text-base">
                            {exp.description.map((item, i) => (
                              <li key={i} className="mb-1">{item}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                    {/* Timeline dot */}
                    <div className="col-span-1 flex flex-col items-center z-20">
                      <motion.div
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-4 border-white flex items-center justify-center shadow-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                      >
                        <span className="block w-3 h-3 rounded-full bg-white/80" />
                      </motion.div>
                    </div>
                    {/* Right card */}
                    <div className={`col-span-4 ${!isLeft ? 'flex justify-start' : 'hidden md:block'}`}>
                      {!isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: idx * 0.1 }}
                          className="bg-white/90 rounded-2xl shadow-xl border border-blue-100/40 p-6 max-w-md w-full animate-fade-in"
                          style={{
                            boxShadow: exp.current ? '0 0 0 4px #a5b4fc55' : undefined,
                            borderColor: exp.current ? '#4ade80' : undefined
                          }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl text-blue-700"><FaBriefcase /></span>
                            <h3 className="text-lg font-bold text-blue-800">{exp.title}</h3>
                            <span className="text-base text-gray-600">@ {exp.company}</span>
                            {exp.current && (
                              <span className="ml-2 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold border border-green-200 animate-pulse">Current</span>
                            )}
                          </div>
                          <div className="flex items-center text-gray-500 gap-4 mb-2">
                            <span className="flex items-center"><FaCalendarAlt className="mr-2" />{exp.duration}</span>
                            <span className="flex items-center"><FaMapMarkerAlt className="mr-2" />{exp.location}</span>
                          </div>
                          <ul className="list-disc list-inside text-gray-700 mt-2 text-sm md:text-base">
                            {exp.description.map((item, i) => (
                              <li key={i} className="mb-1">{item}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  </div>
                  {/* Mobile: timeline dot and full-width card below */}
                  <div key={"mobile-"+idx} className="md:hidden flex flex-col items-center w-full">
                    <motion.div
                      className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-4 border-white flex items-center justify-center shadow-lg mb-4"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                    >
                      <span className="block w-3 h-3 rounded-full bg-white/80" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: idx * 0.1 }}
                      className="bg-white/90 rounded-2xl shadow-xl border border-blue-100/40 p-6 w-full max-w-sm animate-fade-in"
                      style={{
                        boxShadow: exp.current ? '0 0 0 4px #a5b4fc55' : undefined,
                        borderColor: exp.current ? '#4ade80' : undefined
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl text-blue-700"><FaBriefcase /></span>
                        <h3 className="text-lg font-bold text-blue-800">{exp.title}</h3>
                        <span className="text-base text-gray-600">@ {exp.company}</span>
                        {exp.current && (
                          <span className="ml-2 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold border border-green-200 animate-pulse">Current</span>
                        )}
                      </div>
                      <div className="flex items-center text-gray-500 gap-4 mb-2">
                        <span className="flex items-center"><FaCalendarAlt className="mr-2" />{exp.duration}</span>
                        <span className="flex items-center"><FaMapMarkerAlt className="mr-2" />{exp.location}</span>
                      </div>
                      <ul className="list-disc list-inside text-gray-700 mt-2 text-sm">
                        {exp.description.map((item, i) => (
                          <li key={i} className="mb-1">{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
