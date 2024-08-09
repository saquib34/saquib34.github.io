// components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import saquib from '../images/saquib.png';
import { FaGithub, FaLinkedin, FaKaggle, FaMedal } from 'react-icons/fa';

function About() {
  const achievements = [
    { icon: <FaMedal />, text: "2nd place in AI Hackathon" },
    { icon: <FaMedal />, text: "Winner of IIITD Hackathon on Kaggle" },
    { icon: <FaMedal />, text: "RANKED 2ND  IN CODE BATTLE" },
    { icon: <FaMedal />, text: "13th globally in ML Olympiad" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-0">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="w-full md:w-1/3 mb-8 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 mx-auto md:mx-0">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <img
                src={saquib}
                alt="Mohammad Saquib Daiyan"
                className="absolute inset-0 object-cover w-full h-full rounded-full p-2"
              />
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-2/3 space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl leading-relaxed text-gray-700">
              Hello! I'm Mohammad Saquib Daiyan, an AI/ML Engineer and Full Stack Developer with a passion for innovation. Currently pursuing my degree at SRM University, Chennai, I've maintained a CGPA of 9.22 while actively contributing to the tech community.
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              As the Technical Lead of TechVayuna and an active GDSC contributor, I've honed my skills in computer vision, NLP, time series analysis, and full-stack development. My unique blend of technical expertise and creative problem-solving has led me to exciting projects, including serving as an AI Vocal Changer for a popular YouTuber.
            </p>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl text-purple-600">{achievement.icon}</span>
                  <span className="text-sm font-medium text-gray-800">{achievement.text}</span>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-8 flex space-x-6">
              <motion.a
                href="https://github.com/Saquib34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaGithub className="text-3xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/saquib34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLinkedin className="text-3xl" />
              </motion.a>
              <motion.a
                href="https://www.kaggle.com/saquib34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaKaggle className="text-3xl" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;