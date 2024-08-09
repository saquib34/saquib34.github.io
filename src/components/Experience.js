// components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function Experience() {
  const experiences = [
    {
      title: "Research Intern",
      company: "IISER Bhopal",
      duration: "May 2024 - July 2024",
      location: "Bhopal",
      description: [
        "Working on detecting human emotions using GSR (Galvanic Skin Response) signals.",
        "Conducting Time Series Data Analysis on temporal datasets.",
        "Utilizing advanced models like ARIMA, GARCH, and LSTM networks for forecasting.",
        "Applying statistical tests and hypothesis testing for time series properties."
      ]
    },
    {
      title: "Front-End Developer Intern",
      company: "Ministry of Education, India",
      duration: "June 2024",
      location: "Delhi",
      description: [
        "Developed the Ministry of Education's website SIC - MIC using React.",
        "Improved user experience and interface design."
      ]
    },
    {
      title: "Research Intern",
      company: "IIT Kanpur",
      duration: "June 2023 - July 2023",
      location: "Kanpur",
      description: [
        "Worked on retina image classification using advanced AI techniques.",
        "Applied deep learning algorithms for medical diagnosis.",
        "Collaborated with domain experts on medical image analysis challenges."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section id="experience" className="py-16 bg-gray-100">

    <motion.section
      className="py-16 bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Experience</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              variants={itemVariants}
            >
              <div className="w-full md:w-1/2 p-6">
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-indigo-600">{exp.title}</h3>
                  <h4 className="text-lg md:text-xl mb-2 text-gray-700">{exp.company}</h4>
                  <div className="flex items-center mb-2 text-gray-600">
                    <FaCalendarAlt className="mr-2 text-lg" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-lg" />
                    <span>{exp.location}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700">
                    {exp.description.map((item, i) => (
                      <li key={i} className="mb-1">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold z-10">
                <FaBriefcase />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
    </section>
  );
}

export default Experience;
