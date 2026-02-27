import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaLaptopCode, FaCloud, FaCode } from 'react-icons/fa';

const skillDetails = {
  // AI/ML
  'Machine Learning': 'Supervised, unsupervised, and reinforcement learning using Scikit-learn and XGBoost.',
  'Deep Learning': 'Neural networks, CNNs, RNNs, and Transformers using PyTorch and TensorFlow.',
  'Computer Vision': 'Object detection, segmentation, and image classification with OpenCV and YOLO.',
  'NLP': 'Text processing, sentiment analysis, and LLM fine-tuning with HuggingFace.',
  'Time Series Analysis': 'Forecasting and anomaly detection in sequential data.',

  // Web Dev (Expanded)
  'React.js': 'Building complex SPAs with Hooks, Context API, and high-performance components.',
  'Next.js': 'Server-side rendering, static site generation, and optimized web applications.',
  'Tailwind CSS': 'Rapid UI development with utility-first CSS and custom design systems.',
  'Node.js/Express': 'Scalable backend services, RESTful APIs, and middleware architecture.',
  'State Management': 'Global state handling using Redux Toolkit and React Context.',
  'Three.js': 'Implementing 3D graphics and immersive experiences in the browser.',

  // Cloud & DevOps (New)
  'AWS': 'Cloud infrastructure management (EC2, S3, Lambda, RDS).',
  'Docker': 'Containerization of applications for consistent environments.',
  'Kubernetes': 'Orchestrating containerized workloads and service scaling.',
  'CI/CD': 'Automating build and deployment pipelines with GitHub Actions.',
  'Terraform': 'Infrastructure as Code (IaC) for automated cloud provisioning.',

  // Others
  'Databases': 'MySQL, PostgreSQL, MongoDB, and Vector DBs like Pinecone.',
  'Python': 'Primary language for ML, scripting, and backend automation.',
  'WebAssembly': 'Running high-performance C++/Rust code in the browser (used in V86).',
};

const skillCategories = [
  {
    name: 'AI & Research',
    icon: <FaBrain />,
    skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Time Series Analysis'],
  },
  {
    name: 'Full-Stack Web',
    icon: <FaLaptopCode />,
    skills: ['React.js', 'Next.js', 'Node.js/Express', 'Tailwind CSS', 'State Management', 'Three.js'],
  },
  {
    name: 'Cloud & DevOps',
    icon: <FaCloud />,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  },
  {
    name: 'Core Tech',
    icon: <FaCode />,
    skills: ['Python', 'WebAssembly', 'Databases'],
  },
];

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="bg-dark relative overflow-hidden grid-background border-t border-border">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Technical <span className="text-primary">Expertise</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">My toolkit for building intelligent, scalable, and high-performance systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="card h-full flex flex-col"
            >
              <div className="flex items-center gap-4 text-2xl text-primary mb-6">
                <span className="p-3 rounded-xl bg-primary/5 border border-border group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                  {category.icon}
                </span>
                <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <motion.button
                    key={sIdx}
                    onClick={() => setSelectedSkill(skill)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1.5 rounded-lg bg-dark border border-border text-[11px] font-black uppercase tracking-widest text-gray-500 hover:border-primary hover:text-white transition-all shadow-sm"
                  >
                    {skill}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-12 p-10 rounded-3xl bg-primary/5 border border-primary/20 backdrop-blur-xl max-w-2xl mx-auto text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <button onClick={() => setSelectedSkill(null)} className="text-gray-500 hover:text-white transition-colors">✕</button>
              </div>
              <h4 className="text-primary font-black text-3xl mb-4 tracking-tighter uppercase">{selectedSkill}</h4>
              <p className="text-gray-300 text-lg font-medium leading-relaxed italic">"{skillDetails[selectedSkill]}"</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Skills;