import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// TypewriterText Component
const TypewriterText = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

// Hero Component
function Hero() {
  const controls = useAnimation();
  const [hoverSkill, setHoverSkill] = useState(null);

  useEffect(() => {
    controls.start(i => ({
      y: ["0%", "50%", "0%"],
      transition: { 
        repeat: Infinity, 
        duration: 5,
        ease: "easeInOut",
        delay: i * 0.2 
      }
    }));
  }, [controls]);

  const skills = [
    { name: 'AI & ML', color: 'from-blue-400 to-blue-600' },
    { name: 'Web Dev', color: 'from-green-400 to-green-600' },
    { name: 'Cloud', color: 'from-yellow-400 to-yellow-600' }
  ];

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-700 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 6 + 1 + 'px',
                height: Math.random() * 6 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </div>
      <div className="container mx-auto text-center z-10 px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">
            Mohammad Saquib Daiyan
          </h1>
          <p className="text-3xl md:text-4xl mb-12 text-pink-100">
            <TypewriterText text="Machine Learning | Web Developer | Cloud Computing Expert" />
          </p>
          <div className="relative flex justify-center space-x-8 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`relative text-2xl font-semibold px-6 py-3 rounded-full bg-gradient-to-r ${skill.color} cursor-pointer`}
                custom={index}
                animate={controls}
                whileHover={{ scale: 1.1, y: -5 }}
                onHoverStart={() => setHoverSkill(skill.name)}
                onHoverEnd={() => setHoverSkill(null)}
              >
                {skill.name}
                {hoverSkill === skill.name && (
                  <motion.div
                    className="absolute top-full left-0 right-0 mt-2 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Click to learn more
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center space-x-8 mb-12">
            <motion.a
              href="https://www.linkedin.com/in/saquib34" 
              className="text-4xl text-white hover:text-pink-200 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/saquib34"
              className="text-4xl text-white hover:text-pink-200 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="mailto:shadmanshahin6@gmail.com" 
              className="text-4xl text-white hover:text-pink-200 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
          <motion.a
            href="#contact"
            className="bg-white text-indigo-800 py-4 px-10 rounded-full font-bold text-xl hover:bg-pink-100 transition duration-300 inline-block"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgb(255,255,255)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <motion.path 
            fill="#F3F4F6" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </section>
  );
}

export default Hero;
