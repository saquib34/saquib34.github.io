import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';

const publications = [
  {
    title: 'Real-Time Smart Meeting Assistant using Edge AI for Audio Capture, Speech-to-Text Conversion, and Meeting Scheduling',
    authors: 'Mohammad Saquib Daiyan, Dr. A. Senthilselvi',
    affiliation: 'SRM Institute of Science and Technology, Chennai',
    status: 'Published in IEEE',
    date: 'February 2025',
    link: 'https://ieeexplore.ieee.org/document/10898595',
    badge: 'IEEE Explorer'
  },
  {
    title: 'Detecting Human Emotions using GSR Signals',
    authors: 'Mohammad Saquib Daiyan',
    affiliation: 'SIRL LAB, IISER Bhopal',
    status: 'In Progress',
    date: 'Ongoing Research',
    link: '#',
    badge: 'Research Project'
  }
];

function Research() {
  return (
    <section id="research" className="bg-dark relative overflow-hidden grid-background border-t border-border">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Academic <span className="text-primary">Research</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">Published papers and ongoing research in the field of Edge AI and Machine Learning.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              className="card relative overflow-hidden group mb-12 hover:border-primary/50 transition-all duration-300 shadow-xl"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary group-hover:w-3 transition-all" />
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="text-primary text-4xl pt-2">
                  <FaQuoteLeft />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded bg-primary text-dark">{pub.badge}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded border border-border text-gray-500">{pub.date}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-primary transition-colors">{pub.title}</h3>
                  <p className="text-gray-400 font-bold mb-2 italic">{pub.authors}</p>
                  <p className="text-gray-500 text-sm mb-8">{pub.affiliation}</p>
                  {pub.link !== '#' && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white/5 hover:bg-primary hover:text-dark px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest transition-all border border-border group-hover:border-primary"
                    >
                      View Publication <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl border border-dashed border-border text-center max-w-2xl mx-auto"
        >
          <FaGraduationCap className="text-4xl text-gray-600 mx-auto mb-4" />
          <p className="text-gray-500 font-medium italic">"Exploring the intersection of signal analysis and real-time AI inference at the edge."</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Research;

