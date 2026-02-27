import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaArrowRight, FaTimes, FaBrain, FaMouse, FaMobileAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative h-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showExtra, setShowExtra] = useState(false);

  const majorProjects = [
    {
      title: "AI-Powered Smart Hospital System",
      year: "2024",
      tags: ["Full Stack AI", "Cloud", "Healthcare"],
      description: [
        "Built a centralized dashboard for hospital operations with predictive analytics for patient load.",
        "Implemented medical AI chat system for symptom analysis and clinical decision support.",
        "Integrated secure EHR management with encryption and deployed on AWS with high availability."
      ],
      demo: "https://health.saquib.in"
    },
    {
      title: "WebLLM Inference Solution",
      year: "2025",
      tags: ["Browser AI", "WebGPU", "WebAssembly"],
      description: [
        "Developed a system to run large language models directly in the browser using WebGPU and WASM.",
        "Optimized model inference for local devices with significantly reduced latency and memory footprint.",
        "Implemented secure local data processing for privacy-focused AI applications without server-side compute."
      ],
      demo: "https://llm.saquib.in/"
    },
    {
      title: "Live Emotion Detection",
      year: "2024",
      tags: ["Computer Vision", "Real-time", "Live Streaming"],
      description: [
        "Developed real-time emotion detection for YouTube/Twitch live streams using face-api.js and hls.js.",
        "Implemented facial expression analysis and sentiment classification for audience engagement.",
        "Optimized inference for low-latency streaming environments and integrated with OBS software."
      ],
      demo: "https://livestramemotionanalysis.saquib.in"
    }
  ];

  const extraProjects = [
    {
      title: "Voice & Text Emotion Detection",
      description: "Multimodal emotion detection system analyzing both text content and voice patterns (tone, pitch).",
      tags: ["Speech AI", "NLP", "Python"],
      icon: <FaBrain className="text-4xl mb-4 text-primary" />,
      demo: "https://emotion.saquib.in"
    },
    {
      title: "TamilLLM",
      description: "Developing a Tamil LLM from scratch with custom tokenization and handling complex sandhi rules.",
      tags: ["LLM", "NLP", "Tamil"],
      icon: <FaBrain className="text-4xl mb-4 text-primary" />,
      demo: "https://llm.saquib.in/"
    },
    {
      title: "AI Guard",
      description: "Security measures to prevent unauthorized AI model training and secure remote access system.",
      tags: ["Security", "AI", "Privacy"],
      icon: <FaBrain className="text-4xl mb-4 text-primary" />,
      demo: null
    },
    {
      title: "NeuroKit-Eda-Analysis",
      description: "Published open-source library for EDA signal analysis on PyPI for affective computing research.",
      tags: ["Library", "Signal Processing"],
      icon: <FaBrain className="text-4xl mb-4 text-primary" />,
      demo: "https://pypi.org/project/neurokit-eda-analysis/"
    },
    {
      title: "AI Virtual Mouse",
      description: "95% accuracy in real-time hand gesture recognition using MediaPipe and OpenCV.",
      tags: ["CV", "AI", "HCI"],
      icon: <FaMouse className="text-4xl mb-4 text-primary" />,
      demo: null
    },
    {
      title: "Flutter Café App",
      description: "Order management system for university cafe with AWS deployment and online payment integration.",
      tags: ["Flutter", "AWS", "Mobile"],
      icon: <FaMobileAlt className="text-4xl mb-4 text-primary" />,
      demo: null
    }
  ];

  return (
    <section id="projects" className="bg-dark relative overflow-hidden grid-background border-t border-border">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">A selection of my recent works in AI, Machine Learning, and Full Stack Development.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {majorProjects.map((proj, idx) => (
            <TiltCard
              key={idx}
              className="card group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="mb-4 flex justify-between items-start">
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">{proj.year}</span>
                  <div className="flex gap-2">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold text-gray-500 uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-primary transition-colors">{proj.title}</h3>
                <ul className="text-sm text-gray-400 space-y-2 mb-6">
                  {proj.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex gap-2 italic">
                      <span className="text-primary font-bold">/</span> {desc}
                    </li>
                  ))}
                </ul>
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View Live Demo of ${proj.title} project`}
                    title={`Live Demo - ${proj.title}`}
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Live Demo <FaArrowRight aria-hidden="true" />
                  </a>
                )}
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowExtra(!showExtra)}
            className="inline-flex items-center gap-2 text-gray-500 font-bold text-sm uppercase tracking-widest hover:text-white transition-all pb-2 border-b border-transparent hover:border-primary"
          >
            {showExtra ? <FaChevronUp /> : <FaChevronDown />}
            {showExtra ? 'Less Projects' : 'More Projects'}
          </button>
        </div>

        <AnimatePresence>
          {showExtra && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 overflow-hidden"
            >
              {extraProjects.map((proj, idx) => (
                <div key={idx} className="card bg-dark/50" onClick={() => setSelectedProject(proj)}>
                  {proj.icon}
                  <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{proj.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((t, i) => (
                      <span key={i} className="text-[10px] font-bold text-gray-600 uppercase border border-border px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/95 backdrop-blur-xl z-[100] flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="card max-w-2xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-2xl text-gray-500 hover:text-white"><FaTimes /></button>
              <div className="mb-4">{selectedProject.icon}</div>
              <h2 className="text-4xl font-black text-white mb-4">{selectedProject.title}</h2>
              <p className="text-lg text-gray-400 mb-8 font-medium">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.tags.map((t, i) => (
                  <span key={i} className="bg-primary text-dark font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-tighter">{t}</span>
                ))}
              </div>
              {selectedProject.demo && (
                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="bg-primary text-dark font-bold px-8 py-3 rounded-xl hover:scale-105 transition-all inline-block">Visit Project</a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;