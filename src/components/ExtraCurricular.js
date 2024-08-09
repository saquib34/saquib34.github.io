// components/ExtraCurricular.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaProjectDiagram, FaUserGraduate } from 'react-icons/fa'; // Icons for visual interest

function ExtraCurricular() {
  const activities = [
    {
      title: "AI Vocal Changer for YouTuber",
      description: "Worked on AI-powered vocal changing technology for a YouTube content creator.",
      icon: <FaBrain className="text-blue-500 text-3xl" />,
    },
    {
      title: "Technical Lead of TechVayuna",
      description: "Serving as the Technical Lead for TechVayuna, the Technical Club of SRM Ramapuram.",
      icon: <FaProjectDiagram className="text-green-500 text-3xl" />,
    },
    {
      title: "ML Instructor for GDSC",
      description: "Running a series on the GDSC club Discord where I teach Machine Learning to students.",
      icon: <FaUserGraduate className="text-yellow-500 text-3xl" />,
    },
  ];

  return (
    <section id="extra-curricular" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Extra-Curricular Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {activity.icon}
                <h3 className="text-2xl font-semibold ml-4 text-gray-900">{activity.title}</h3>
              </div>
              <p className="text-gray-700">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExtraCurricular;
