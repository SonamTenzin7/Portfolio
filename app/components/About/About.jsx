'use client';

import styles from './About.module.css';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <motion.h2 
        className={styles.sectionHeading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      
      <div className={styles.aboutContent}>
        <motion.div 
          className={styles.bio}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>I am excited about using data to solve real-world problems and contribute to AI and Machine Learning models. I have the ability to clean, analyze, and visualize data to support the training and optimization of AI and ML models.</p>
          <p>I am passionate about utilizing data analytics for predictive modeling and performance evaluation in AI systems. My goal is to create technology that makes a meaningful impact on organizations through innovative solutions.</p>
        </motion.div>
        
        <motion.div 
          className={styles.skills}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.skillsColumn}>
            <h3>Technical Skills</h3>
            <ul>
              {['Machine Learning', 'Data Analysis', 'Python', 'TensorFlow', 'PyTorch', 'R'].map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className={styles.skillsColumn}>
            <h3>Soft Skills</h3>
            <ul>
              {['Problem Solving', 'Communication', 'Team Collaboration', 'Management'].map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}