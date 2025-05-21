'use client';

import styles from './Hero.module.css';
import Button from '../../Button/Button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.title}
        >
          Sonam Tenzin
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.subtitle}
        >
          Artificial Intelligence | Data Analyst | ML Enthusiast
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.description}
        >
          A motivated candidate with strong analytical skills and passion for extracting insights from data. 
          Seeking an opportunity to apply knowledge of analytics and contribute to AI by leveraging 
          data-driven decision-making, machine learning, and predictive analysis.
        </motion.p>
        
        <motion.div 
          className={styles.buttonContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            text="Download Resume" 
            onClick={() => window.open('/resume/your-resume.pdf')}
            variant="gradient"
          />
          <Button 
            text="View Projects" 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
          />
        </motion.div>
        
        <motion.div 
          className={styles.scrollIndicator}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })}
        >
          <span>Scroll down</span>
          <div className={styles.arrow}></div>
        </motion.div>
      </div>
    </section>
  );
}