// App.js
import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience'; // Import the Experience component
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExtraCurricular from './components/ExtraCurricular';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience /> {/* Add the Experience component here */}
        <Research />
        <ExtraCurricular />
        <Achievements />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;