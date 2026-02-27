import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaTerminal } from 'react-icons/fa';

const CommandTerminal = () => {
  const [currentCommand, setCurrentCommand] = React.useState(0);
  const commands = ["!pip install NeuroKit-Eda-Analysis", "npm i saquib"];
  const [displayText, setDisplayText] = React.useState("");

  React.useEffect(() => {
    let charIndex = 0;
    const command = commands[currentCommand];
    setDisplayText("");

    const typingInterval = setInterval(() => {
      if (charIndex < command.length) {
        setDisplayText(command.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentCommand((prev) => (prev + 1) % commands.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentCommand]);

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-black/40 border border-white/5 font-mono text-sm text-gray-300 mb-8 backdrop-blur-sm shadow-2xl">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
      </div>
      <div className="flex items-center gap-2 border-l border-white/10 pl-3">
        <span className="text-primary font-bold">$</span>
        <span className="overflow-hidden whitespace-nowrap">
          {displayText}
        </span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="w-2 h-4 bg-primary"
        />
      </div>
    </div>
  );
};

const TypingText = ({ text }) => {
  const characters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.015, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -2,
      y: 2,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span variants={child} key={index}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax on Scroll
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotateScroll = useTransform(scrollY, [0, 500], [0, 45]);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const contentTranslateX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const contentTranslateY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const techStack = ["Machine Learning", "Full Stack Dev", "Cloud & DevOps", "Generative AI"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center bg-dark text-white overflow-hidden grid-background"
    >
      {/* Dynamic Background Elements */}
      <motion.div
        style={{ y: y1, rotate: rotateScroll }}
        className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: y2, rotate: -rotateScroll }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Interactive Floater Beam */}
      <motion.div
        style={{
          x: useTransform(springX, [-0.5, 0.5], [-100, 100]),
          y: useTransform(springY, [-0.5, 0.5], [-100, 100]),
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full pointer-events-none z-0"
      />

      <motion.div
        style={{ x: contentTranslateX, y: contentTranslateY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 text-center px-4 pt-20"
      >
        {/* Version Badge */}
        <motion.div
          variants={lineVariants}
          className="flex flex-col items-center justify-center"
        >
          <CommandTerminal />
        </motion.div>

        <motion.div
          variants={lineVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#ffdd44]" />
          v2.1 is now live
        </motion.div>

        {/* Main Headline with Staggered Lines */}
        <div className="mb-8 block">
          <motion.h1 variants={lineVariants} className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-2 uppercase">
            Engineering
          </motion.h1>
          <motion.h1 variants={lineVariants} className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-2 uppercase">
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              className="hero-gradient bg-[length:200%_auto]"
            >
              Intelligent Systems
            </motion.span>
          </motion.h1>
          <motion.h1 variants={lineVariants} className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] uppercase">
            For the Modern Web.
          </motion.h1>
        </div>

        {/* Professional Summary with Typing Effect */}
        <motion.div
          variants={lineVariants}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed min-h-[4rem]"
        >
          <TypingText text="ML and Web Development Engineer at Aptli AI. Crafting scalable Cloud-native Deep Learning solutions with React, Python, and advanced DevOps." />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={lineVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 221, 68, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            aria-label="View Mohammad Saquib Daiyan's Projects"
            title="View Portfolio Projects"
            className="group flex items-center gap-2 bg-primary text-dark px-8 py-4 rounded-xl font-bold text-lg transition-all"
          >
            View Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.05)", borderColor: "rgba(255, 221, 68, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            aria-label="Contact Mohammad Saquib Daiyan"
            title="Get in Touch"
            className="flex items-center gap-2 bg-card border border-border px-8 py-4 rounded-xl font-bold text-lg transition-all"
          >
            <FaTerminal className="text-primary text-sm" />
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Staggered Tech Stack Tags */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold tracking-widest text-gray-500 uppercase">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + (i * 0.1), duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <span className="hover:text-primary cursor-default transition-colors">{tech}</span>
              {i < techStack.length - 1 && <span className="w-1 h-1 rounded-full bg-gray-700" />}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;

