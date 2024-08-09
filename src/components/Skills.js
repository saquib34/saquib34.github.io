import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaLaptopCode, FaChartBar, FaCloud, FaTools, FaCode, FaDatabase } from 'react-icons/fa';

function Skills() {
  const skillCategories = [
    {
      category: "AI/ML",
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Time Series Analysis", "Statistical Analysis"],
      icon: <FaBrain className="text-4xl mb-4 text-purple-600" />
    },
    {
      category: "Web Development",
      skills: ["React", "Flutter", "HTML", "CSS", "JavaScript", "Firebase"],
      icon: <FaLaptopCode className="text-4xl mb-4 text-blue-600" />
    },
    {
      category: "Data Analysis",
      skills: ["Python", "SQL", "Excel", "Power BI", "Tableau", "EDA"],
      icon: <FaChartBar className="text-4xl mb-4 text-green-600" />
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker"],
      icon: <FaCloud className="text-4xl mb-4 text-cyan-600" />
    },
    {
      category: "Tools & Frameworks",
      skills: ["TensorFlow", "Keras", "PyTorch", "YOLO", "Scikit-learn", "Pandas", "NumPy"],
      icon: <FaTools className="text-4xl mb-4 text-orange-600" />
    },
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "Java"],
      icon: <FaCode className="text-4xl mb-4 text-red-600" />
    },
    {
      category: "Databases",
      skills: ["SQL", "MongoDB"],
      icon: <FaDatabase className="text-4xl mb-4 text-yellow-600" />
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 md:px-0">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
            >
              <motion.div 
                className="flex flex-col items-center mb-4"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{ duration: 2, delay: index * 0.2, repeat: Infinity, repeatType: "loop" }}
              >
                {category.icon}
                <h3 className="text-xl font-semibold text-center text-white mt-2">{category.category}</h3>
              </motion.div>
              <div className="flex flex-wrap justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="bg-white bg-opacity-20 text-white text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;