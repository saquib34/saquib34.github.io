import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaProjectDiagram, FaUserGraduate } from 'react-icons/fa';

function ExtraCurricular() {
  const activities = [
    {
      title: "AI Vocal Changer for YouTuber",
      description: "Worked on AI-powered vocal changing technology for a YouTube content creator.",
      icon: <FaBrain className="text-primary text-4xl" />,
    },
    {
      title: "Technical Lead of TechVayuna",
      description: "Serving as the Technical Lead for TechVayuna, the Technical Club of SRM Ramapuram.",
      icon: <FaProjectDiagram className="text-primary text-4xl" />,
    },
    {
      title: "ML Instructor for GDSC",
      description: "Running a series on the GDSC club Discord where I teach Machine Learning to students.",
      icon: <FaUserGraduate className="text-primary text-4xl" />,
    },
  ];

  return (
    <section id="extra-curricular" className="bg-dark relative overflow-hidden grid-background border-t border-border">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Extra-<span className="text-primary">Curricular</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">Passion projects and leadership roles beyond academics.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:border-primary/50 transition-all flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/5 border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {activity.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-4 group-hover:text-primary transition-colors">{activity.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExtraCurricular;
