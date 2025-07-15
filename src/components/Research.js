import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaWaveSquare } from 'react-icons/fa';

const publications = [
  {
    title: 'Real-Time Smart Meeting Assistant using Edge AI for Audio Capture, Speech-to-Text Conversion, and Meeting Scheduling',
    authors: 'Co-authored with Dr. A. Senthilselvi',
    affiliation: 'Department of Computer Science and Engineering, SRM Institute of Science and Technology, Chennai',
    status: 'To be published in IEEE',
    date: '25th July 2025',
    badge: 'IEEE',
  },
  {
    title: 'Detecting Human Emotions using GSR Signals',
    authors: 'Under the guidance of Dr. Haroon',
    affiliation: 'SIRL LAB, IISER Bhopal',
    status: 'In Progress',
    date: '2024',
    badge: 'Research',
    description: 'Research on detecting human emotions using Galvanic Skin Response (GSR) signals. Leveraging advanced signal processing and deep learning (CNN, LSTM) for emotion recognition. Potential applications in psychology and HCI.'
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 bg-gradient-to-br from-purple-50 to-blue-100 relative overflow-hidden">
      {/* Modern blurred background shapes */}
      <motion.div
        className="absolute left-[-80px] top-[-80px] w-[250px] h-[250px] rounded-full bg-purple-200 opacity-30 blur-2xl z-0"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute right-[-100px] bottom-[-100px] w-[300px] h-[300px] rounded-full bg-blue-200 opacity-30 blur-2xl z-0"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <div className="container relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-purple-800 tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Publications & Research
        </motion.h2>
        <div className="flex flex-col items-center gap-10">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-xl border border-purple-100/40 p-8 flex flex-col gap-4 relative overflow-hidden animate-fade-in"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border shadow-sm ${pub.badge === 'IEEE' ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-purple-100 text-purple-700 border-purple-200'}`}>
                  {pub.badge === 'Research' ? <FaWaveSquare className="inline mr-1" /> : null}{pub.badge}
                </span>
                <span className="text-xs text-gray-500 font-medium">{pub.status} &middot; {pub.date}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-purple-900 leading-snug mb-2">{pub.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                <FaUniversity className="text-purple-400" />
                <span>{pub.authors}</span>
              </div>
              <div className="text-sm text-gray-500 mb-2">{pub.affiliation}</div>
              {pub.description && (
                <div className="text-sm text-gray-700 mt-2">{pub.description}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
