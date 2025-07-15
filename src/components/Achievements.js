// components/Achievements.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

function Achievements() {
  const items = [
    { text: "Ranked 2nd in AI Hackathon (ABINITO)", color: "bg-blue-100" },
    { text: "Ranked 2nd in EDA in CODE BATTLE", color: "bg-green-100" },
    { text: "Won IIITD Hackathon organized on Kaggle", color: "bg-yellow-100" },
    { text: "Ranked 13th worldwide in ML OLYMPIAD", color: "bg-purple-100" },
    { text: "Contributor to GDSC website of SRM Ramapuram", color: "bg-red-100" },
  ];

  return (
    <section id="achievements" className="py-16 bg-gradient-to-br from-purple-50 to-blue-100 relative overflow-hidden">
      {/* Soft background shape */}
      <motion.div
        className="absolute left-[-60px] top-[-60px] w-[220px] h-[220px] rounded-full bg-purple-200 opacity-30 blur-2xl z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute right-[-80px] bottom-[-80px] w-[260px] h-[260px] rounded-full bg-blue-200 opacity-30 blur-2xl z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <div className="container relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-purple-800 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <FaTrophy className="inline-block text-yellow-500 text-4xl mb-2 mr-2" />
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-3xl shadow-xl border border-purple-100/40 p-8 flex flex-col items-center gap-4 relative overflow-hidden bg-white/90 ${item.color} hover:scale-105 transition-transform duration-300 animate-fade-in`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <FaTrophy className="text-yellow-400 text-3xl mb-2" />
              <p className="text-lg font-semibold text-purple-900 text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
