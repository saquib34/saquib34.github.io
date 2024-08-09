// components/Projects.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaTimes, FaBrain, FaTshirt, FaMouse, FaMobileAlt, FaComments, FaCar, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "TamilLLM",
      description: "Currently working on a Large Language Model for Tamil language processing.",
      tags: ["NLP", "Machine Learning", "Tamil"],
      icon: <FaBrain className="text-4xl mb-4 text-blue-500" />
    },
    {
      title: "Virtual Try-On",
      description: "Developing an AI-powered virtual try-on system for clothing items.",
      tags: ["Computer Vision", "Deep Learning", "E-commerce"],
      icon: <FaTshirt className="text-4xl mb-4 text-purple-500" />
    },
    {
      title: "AI Virtual Mouse",
      description: "Implemented an AI-based virtual mouse system using computer vision techniques, achieving 95% accuracy in real-time hand gesture recognition.",
      tags: ["Computer Vision", "AI", "Human-Computer Interaction"],
      icon: <FaMouse className="text-4xl mb-4 text-green-500" />
    },
    {
      title: "Flutter Café App",
      description: "Developed a Flutter app for a university café, enabling online ordering with AWS deployment and Firebase authentication.",
      tags: ["Flutter", "AWS", "Firebase"],
      icon: <FaMobileAlt className="text-4xl mb-4 text-orange-500" />
    },
    {
      title: "Sentiment Analysis NLP",
      description: "Implemented advanced natural language processing techniques to classify textual data into positive, negative, or neutral sentiments for diverse applications.",
      tags: ["NLP", "Machine Learning", "Python"],
      icon: <FaComments className="text-4xl mb-4 text-yellow-500" />
    },
    {
      title: "Car Classification",
      description: "Developed a deep learning model to classify 100,000 car images, utilizing EDA, ML models (SVM, MLP), and fine-tuning ResNet for improved accuracy.",
      tags: ["Deep Learning", "Computer Vision", "ResNet"],
      icon: <FaCar className="text-4xl mb-4 text-red-500" />
    },
    {
      title: "E-commerce Dashboard",
      description: "Designed and developed an interactive dashboard for an e-commerce platform, enabling real-time monitoring and analysis of sales data.",
      tags: ["Data Visualization", "Power BI", "SQL"],
      icon: <FaChartLine className="text-4xl mb-4 text-indigo-500" />
    },
    {
      title: "Disaster Management System",
      description: "Building a web-based disaster management system to predict and manage natural calamities using machine learning models and real-time data.",
      tags: ["Web Development", "Machine Learning", "Disaster Management"],
      icon: <FaExclamationTriangle className="text-4xl mb-4 text-amber-500" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="container mx-auto px-4 md:px-0">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer relative"
              variants={projectVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-6">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description.substring(0, 100)}...</p>
                <div className="flex flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span 
                      className="text-white flex items-center"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      View Details <FaArrowRight className="ml-2" />
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-3xl w-full"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  {selectedProject.icon}
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">{selectedProject.title}</h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes className="text-gray-600 text-xl" />
                </motion.button>
              </div>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap mb-6">
                {selectedProject.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <motion.button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
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
    </section>
  );
}

export default Projects;