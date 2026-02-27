import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaMedal, FaCrown, FaStar } from 'react-icons/fa';

function Achievements() {
  const items = [
    { text: "Ranked 2nd in AI Hackathon (ABINITO)", icon: <FaAward className="text-primary text-3xl" /> },
    { text: "Ranked 2nd in EDA in CODE BATTLE", icon: <FaMedal className="text-primary text-3xl" /> },
    { text: "Won IIITD Hackathon organized on Kaggle", icon: <FaTrophy className="text-primary text-3xl" /> },
    { text: "Ranked 13th worldwide in ML OLYMPIAD", icon: <FaCrown className="text-primary text-3xl" /> },
    { text: "Contributor to GDSC website of SRM Ramapuram", icon: <FaStar className="text-primary text-3xl" /> },
  ];

  return (
    <section id="achievements" className="bg-dark relative overflow-hidden grid-background border-t border-border">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">My <span className="text-primary">Achievements</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">Recognition and awards in global and national competitions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group hover:border-primary/50 transition-all flex items-center gap-6"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/5 border border-border flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                {item.icon}
              </div>
              <p className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
