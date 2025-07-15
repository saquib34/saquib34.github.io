// components/Projects.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaTimes, FaBrain, FaTshirt, FaMouse, FaMobileAlt, FaComments, FaCar, FaChartLine, FaExclamationTriangle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showExtra, setShowExtra] = useState(false);

  // Major projects from CV/resume (main grid, always visible)
  const majorProjects = [
    {
      title: "AI-Powered Smart Hospital Management System",
      year: "2024",
      tags: ["Healthcare", "Machine Learning", "Web Development"],
      description: [
        "Developed comprehensive hospital management platform integrating AI for patient care",
        "Implemented medical AI chat system with symptom analysis and clinical decision support",
        "Created medical report analysis for blood tests and X-ray images with abnormality detection",
        "Designed responsive dashboard with vital signs monitoring and health assessment tools"
      ],
      demo: "https://health.saquib.in"
    },
    {
      title: "WebLLM",
      year: "2025",
      tags: ["ML", "AI", "Gen AI"],
      description: [
        "Developed WebLLM solution for client-side AI inference, ensuring data privacy",
        "Optimized large language models for browser-based execution with minimal latency",
        "Implemented memory-efficient techniques for running AI models on resource-constrained devices",
        "Created framework allowing users to utilize AI capabilities without data leaving their device"
      ],
      demo: "https://llm.saquib.in/"
    },
    {
      title: "Live Stream Emotion Detection",
      year: "2024",
      tags: ["Computer Vision", "Frontend Development"],
      description: [
        "Built real-time emotion detection system for video streams using face-api.js and hls.js",
        "Implemented detection for seven emotions (neutral, happy, sad, angry, fearful, disgusted, surprised)",
        "Created visual feedback with colored bounding boxes and detailed emotion probability statistics",
        "Optimized for performance with configurable detection frequency and input resolution"
      ],
      demo: "https://livestramemotionanalysis.saquib.in"
    },
    {
      title: "Voice and Text Emotion Analysis",
      year: "2024",
      tags: ["NLP", "Speech Processing"],
      description: [
        "Developed multimodal emotion detection system analyzing both text content and voice patterns",
        "Implemented speech processing pipeline for tone, pitch, and vocal feature extraction",
        "Created NLP models for sentiment and emotion classification from textual content",
        "Integrated system with communication platforms for real-time emotional intelligence"
      ],
      demo: "https://emotion.saquib.in"
    },
    {
      title: "Tamil Language Model (LLM)",
      year: "2023",
      tags: ["Natural Language Processing", "Deep Learning"],
      description: [
        "Building a large language model for Tamil from scratch without fine-tuning existing models",
        "Implementing custom tokenization for Tamil script and handling complex sandhi rules",
        "Developing specialized evaluation metrics for grammatical correctness",
        "Using distributed computing on GPU clusters for efficient training"
      ]
    },
    {
      title: "Home Cloud Platform",
      year: "2023",
      tags: ["Cloud Computing", "Security"],
      description: [
        "Developed private cloud solution using Raspberry Pi for data sovereignty",
        "Implemented security measures to prevent unauthorized AI model training",
        "Created secure remote access system with robust authentication",
        "Ensuring complete data privacy and control for users"
      ]
    },
    {
      title: "NeuroKit-Eda-Analysis Library",
      year: "2024",
      tags: ["Signal Processing", "Python Development"],
      description: [
        "Published open-source library for EDA signal analysis on PyPI",
        "Implemented advanced signal processing techniques for psychophysiological data",
        "Created comprehensive documentation and usage examples",
        "Facilitating research in affective computing and biosignal analysis"
      ]
    },
    {
      title: "Healthcare Projects",
      year: "2023-2024",
      tags: ["Computer Vision", "Deep Learning"],
      description: [
        "Developed U-Net based image segmentation model achieving 85% mean IoU",
        "Implemented YOLO-based object detection for medical imaging",
        "Created virtual mouse system with 95% gesture recognition accuracy using MediaPipe",
        "Developed Flutter app for café order management with AWS deployment"
      ]
    }
  ];

  // Additional/side projects (dropdown/expandable)
  const extraProjects = [
    {
      title: "TamilLLM",
      description: "Currently working on a Large Language Model for Tamil language processing.",
      tags: ["NLP", "Machine Learning", "Tamil"],
      icon: <FaBrain className="text-4xl mb-4 text-blue-500" />,
      demo: "https://llm.saquib.in/"
    },
    {
      title: "Virtual Try-On",
      description: "Developing an AI-powered virtual try-on system for clothing items.",
      tags: ["Computer Vision", "Deep Learning", "E-commerce"],
      icon: <FaTshirt className="text-4xl mb-4 text-purple-500" />,
      demo: null
    },
    {
      title: "AI Virtual Mouse",
      description: "Implemented an AI-based virtual mouse system using computer vision techniques, achieving 95% accuracy in real-time hand gesture recognition.",
      tags: ["Computer Vision", "AI", "Human-Computer Interaction"],
      icon: <FaMouse className="text-4xl mb-4 text-green-500" />,
      demo: null
    },
    {
      title: "Flutter Café App",
      description: "Developed a Flutter app for a university café, enabling online ordering with AWS deployment and Firebase authentication.",
      tags: ["Flutter", "AWS", "Firebase"],
      icon: <FaMobileAlt className="text-4xl mb-4 text-orange-500" />,
      demo: null
    },
    {
      title: "Sentiment Analysis NLP",
      description: "Implemented advanced natural language processing techniques to classify textual data into positive, negative, or neutral sentiments for diverse applications.",
      tags: ["NLP", "Machine Learning", "Python"],
      icon: <FaComments className="text-4xl mb-4 text-yellow-500" />,
      demo: null
    },
    {
      title: "Car Classification",
      description: "Developed a deep learning model to classify 100,000 car images, utilizing EDA, ML models (SVM, MLP), and fine-tuning ResNet for improved accuracy.",
      tags: ["Deep Learning", "Computer Vision", "ResNet"],
      icon: <FaCar className="text-4xl mb-4 text-red-500" />,
      demo: null
    },
    {
      title: "E-commerce Dashboard",
      description: "Designed and developed an interactive dashboard for an e-commerce platform, enabling real-time monitoring and analysis of sales data.",
      tags: ["Data Visualization", "Power BI", "SQL"],
      icon: <FaChartLine className="text-4xl mb-4 text-indigo-500" />,
      demo: null
    },
    {
      title: "Disaster Management System",
      description: "Building a web-based disaster management system to predict and manage natural calamities using machine learning models and real-time data.",
      tags: ["Web Development", "Machine Learning", "Disaster Management"],
      icon: <FaExclamationTriangle className="text-4xl mb-4 text-amber-500" />,
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-8 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Soft background shape */}
      <motion.div
        className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-purple-100 opacity-30 z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <div className="container relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-blue-800 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Projects
        </motion.h2>
        {/* Main grid: major projects from CV/resume */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {majorProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 + idx * 0.07 }}
            >
              <div className="p-8 flex flex-col items-center">
                <h3 className="text-xl font-bold mb-2 text-blue-800 text-center drop-shadow-lg">{proj.title}</h3>
                <span className="text-xs text-blue-400 font-semibold mb-2">{proj.year}</span>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  {proj.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="bg-blue-50 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-2">
                  {proj.description.map((desc, dIdx) => (
                    <li key={dIdx}>{desc}</li>
                  ))}
                </ul>
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-5 py-2 rounded-full shadow hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                  >
                    Preview Link <FaArrowRight className="inline ml-2" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Dropdown/expand button for extra projects */}
        <div className="mb-10 flex flex-col items-center">
          <button
            className="flex items-center gap-2 bg-blue-100 text-blue-800 font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-200 transition-all duration-300 text-base"
            onClick={() => setShowExtra(!showExtra)}
            aria-expanded={showExtra}
          >
            {showExtra ? <FaChevronUp /> : <FaChevronDown />}
            {showExtra ? 'Hide More Projects' : 'Show More Projects'}
          </button>
          <AnimatePresence>
            {showExtra && (
              <motion.div
                className="mt-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {extraProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer flex flex-col items-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + index * 0.07 }}
                    whileHover={{ y: -8, scale: 1.04, boxShadow: '0 12px 32px rgba(59,130,246,0.10)' }}
                    onClick={() => setSelectedProject(project)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="p-8 flex flex-col items-center">
                      {project.icon && (
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', delay: index * 0.1 }}
                        >
                          {project.icon}
                        </motion.div>
                      )}
                      <h3 className="text-xl font-bold mb-2 text-blue-800 text-center drop-shadow-lg">{project.title}</h3>
                      {project.year && <span className="text-xs text-blue-400 font-semibold mb-2">{project.year}</span>}
                      <div className="flex flex-wrap justify-center gap-2 mb-2">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            className="bg-blue-50 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full shadow hover:bg-blue-100 transition-all duration-200"
                            whileHover={{ scale: 1.13 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      {project.description && Array.isArray(project.description) ? (
                        <ul className="list-disc list-inside text-gray-700 mb-2">
                          {project.description.map((desc, dIdx) => (
                            <li key={dIdx}>{desc}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 mb-4 text-center">{project.description}</p>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-5 py-2 rounded-full shadow hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                        >
                          Preview Link <FaArrowRight className="inline ml-2" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Modal for extra/main projects (unchanged) */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-10 max-w-3xl w-full shadow-2xl relative"
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    {selectedProject.icon}
                    <h3 className="text-3xl font-bold text-blue-800 ml-4">{selectedProject.title}</h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="ml-4"
                  >
                    <FaTimes className="text-gray-600 text-2xl" />
                  </motion.button>
                </div>
                {selectedProject.description && Array.isArray(selectedProject.description) ? (
                  <ul className="list-disc list-inside text-gray-700 mb-6 text-lg">
                    {selectedProject.description.map((desc, dIdx) => (
                      <li key={dIdx}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 mb-6 text-lg">{selectedProject.description}</p>
                )}
                <div className="flex flex-wrap mb-6 gap-2">
                  {selectedProject.tags && selectedProject.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="bg-blue-50 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full shadow"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                {selectedProject.demo && (
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:from-purple-500 hover:to-blue-500 transition-all duration-300 mt-2"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Live Demo <FaArrowRight className="inline ml-2" />
                  </motion.a>
                )}
                <motion.button
                  className="mt-8 bg-gray-200 text-gray-700 py-2 px-6 rounded-full font-semibold hover:bg-gray-300 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;