import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExtraCurricular from './components/ExtraCurricular';
import Achievements from './components/Achievements';
import ResumeView from './components/ResumeView';

function MainContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Research />
      <ExtraCurricular />
      <Achievements />
      <Contact />
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-800">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/resume" element={<ResumeView />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;