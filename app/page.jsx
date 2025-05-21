'use client';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/Experience/Experience';
import { motion } from 'framer-motion';

export default function Home() {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <main>
      <Navbar />
      
      {/* Hero section doesn't need the same animation as it's the first view */}
      <Hero />
      
      {/* About section with scroll animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <About />
      </motion.div>
      
      {/* Education section with scroll animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Education />
      </motion.div>
      
      {/* Projects section with scroll animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Projects />
      </motion.div>
      
      {/* Experience section with scroll animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Experience />
      </motion.div>
      
      {/* Skills section with scroll animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Skills />
      </motion.div>
      
      {/* Contact section with scroll animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.div>
    </main>
  );
}
