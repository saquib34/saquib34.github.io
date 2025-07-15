import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaLaptopCode, FaChartBar, FaCloud, FaTools, FaCode, FaDatabase } from 'react-icons/fa';
import { useState } from 'react';

const skillDetails = {
  'Machine Learning': 'Supervised, unsupervised, and reinforcement learning.',
  'Deep Learning': 'CNNs, RNNs, LSTMs, GANs, Transformers.',
  'Computer Vision': 'Image classification, object detection, segmentation.',
  'NLP': 'Text classification, sentiment analysis, LLMs.',
  'Time Series Analysis': 'Forecasting, ARIMA, GARCH, LSTM.',
  'Statistical Analysis': 'EDA, hypothesis testing, data visualization.',
  'React': 'Modern web apps, hooks, state management.',
  'Flutter': 'Cross-platform mobile apps.',
  'HTML': 'Semantic, accessible markup.',
  'CSS': 'Responsive, modern layouts.',
  'JavaScript': 'ES6+, async/await, web APIs.',
  'Firebase': 'Realtime DB, auth, hosting.',
  'Python': 'Data science, scripting, automation.',
  'SQL': 'Relational DBs, queries, joins.',
  'Excel': 'Data analysis, pivot tables.',
  'Power BI': 'Dashboards, data viz.',
  'Tableau': 'Interactive data visualization.',
  'EDA': 'Exploratory data analysis.',
  'AWS': 'EC2, S3, Lambda, deployment.',
  'Docker': 'Containerization, DevOps.',
  'TensorFlow': 'Deep learning, model training.',
  'Keras': 'High-level neural networks.',
  'PyTorch': 'Flexible deep learning.',
  'YOLO': 'Real-time object detection.',
  'Scikit-learn': 'ML algorithms, pipelines.',
  'Pandas': 'Dataframes, wrangling.',
  'NumPy': 'Numerical computing.',
  'Java': 'OOP, backend, Android.',
  'MongoDB': 'NoSQL, document DB.',
};

const proficiency = {
  'Machine Learning': 95,
  'Deep Learning': 90,
  'Computer Vision': 90,
  'NLP': 85,
  'Time Series Analysis': 80,
  'Statistical Analysis': 85,
  'React': 95,
  'Flutter': 80,
  'HTML': 98,
  'CSS': 95,
  'JavaScript': 97,
  'Firebase': 85,
  'Python': 99,
  'SQL': 90,
  'Excel': 80,
  'Power BI': 75,
  'Tableau': 70,
  'EDA': 90,
  'AWS': 80,
  'Docker': 75,
  'TensorFlow': 90,
  'Keras': 85,
  'PyTorch': 85,
  'YOLO': 80,
  'Scikit-learn': 90,
  'Pandas': 95,
  'NumPy': 95,
  'Java': 80,
  'MongoDB': 75,
};

function AnimatedBar({ percent }) {
  return (
    <motion.div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
      <motion.div
        className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
        initial={{ width: 0 }}
        animate={{ width: percent + '%' }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
}

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const skillCategories = [
    {
      category: "AI/ML",
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Time Series Analysis", "Statistical Analysis"],
      icon: <FaBrain className="text-4xl mb-4 text-blue-600" />
    },
    {
      category: "Web Development",
      skills: ["React", "Flutter", "HTML", "CSS", "JavaScript", "Firebase"],
      icon: <FaLaptopCode className="text-4xl mb-4 text-purple-600" />
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

  return (
    <section id="skills" className="py-8 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Soft background shape */}
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-100 opacity-30 z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <div className="container relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-blue-800 tracking-tight"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.04, boxShadow: "0px 0px 16px rgb(59,130,246,0.15)" }}
            >
              <div className="flex flex-col items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-center text-blue-700 mt-2 mb-2 drop-shadow-lg">{category.category}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="relative group"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <span
                      className="bg-blue-50 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full cursor-pointer shadow hover:bg-blue-100 transition-all duration-200"
                    >
                      {skill}
                    </span>
                    <AnimatedBar percent={proficiency[skill] || 70} />
                    {/* Tooltip */}
                    {hoveredSkill === skill && skillDetails[skill] && (
                      <motion.div
                        className="absolute left-1/2 -translate-x-1/2 top-10 z-20 bg-white text-blue-800 text-xs rounded-lg px-4 py-2 shadow-xl whitespace-nowrap border border-blue-100"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skillDetails[skill]}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;