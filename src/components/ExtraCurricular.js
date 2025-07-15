// components/ExtraCurricular.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaProjectDiagram, FaUserGraduate } from 'react-icons/fa';

function ExtraCurricular() {
  const activities = [
    {
      title: "AI Vocal Changer for YouTuber",
      description: "Worked on AI-powered vocal changing technology for a YouTube content creator.",
      icon: <FaBrain className="text-blue-500 text-4xl" />,
    },
    {
      title: "Technical Lead of TechVayuna",
      description: "Serving as the Technical Lead for TechVayuna, the Technical Club of SRM Ramapuram.",
      icon: <FaProjectDiagram className="text-green-500 text-4xl" />,
    },
    {
      title: "ML Instructor for GDSC",
      description: "Running a series on the GDSC club Discord where I teach Machine Learning to students.",
      icon: <FaUserGraduate className="text-yellow-500 text-4xl" />,
    },
  ];

  return (
    <section id="extra-curricular" className="py-16 bg-gradient-to-br from-blue-50 to-purple-100 relative overflow-hidden">
      {/* Soft background shape */}
      <motion.div
        className="absolute left-[-60px] top-[-60px] w-[220px] h-[220px] rounded-full bg-blue-100 opacity-30 blur-2xl z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute right-[-80px] bottom-[-80px] w-[260px] h-[260px] rounded-full bg-purple-100 opacity-30 blur-2xl z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <div className="container relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-blue-800 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Extra-Curricular Activities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-white/90 rounded-3xl shadow-xl border border-blue-100/40 p-8 flex flex-col items-center gap-4 relative overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center mb-2">{activity.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 text-center mb-2">{activity.title}</h3>
              <p className="text-gray-700 text-center">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExtraCurricular;
