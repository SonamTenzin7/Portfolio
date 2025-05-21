'use client';

import { motion } from 'framer-motion';
import styles from './Experience.module.css';

export default function Experience() {
  const experienceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionHeading}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
          <span className={styles.headingHighlight}></span>
        </motion.h2>
        
        <motion.div 
          className={styles.experienceContainer}
          variants={experienceVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.div className={styles.experienceItem} variants={itemVariants}>
            <div className={styles.experienceIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                <path d="M18.9 2H5.1C3.4 2 2 3.4 2 5.1v13.8C2 20.6 3.4 22 5.1 22h13.8c1.7 0 3.1-1.4 3.1-3.1V5.1C22 3.4 20.6 2 18.9 2zm-6.9 15c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm6.9-8.2c0 .6-.5 1.1-1.1 1.1H6.2c-.6 0-1.1-.5-1.1-1.1V6.2c0-.6.5-1.1 1.1-1.1h11.7c.6 0 1.1.5 1.1 1.1v2.6z" />
              </svg>
            </div>
            <div className={styles.experienceContent}>
              <h3>Data Analysis</h3>
              <ul>
                <li>Applied advanced data analysis techniques using Python, R and SQL to extract insights and drive data-informed decision-making across various domains, including healthcare, energy, retail and social media.</li>
                <li>Utilized Python and data visualization tools like R, Tableau, Google Colab, Jupyter Notebook, Big Data, Power BI, and Excel to analyze data.</li>
                <li>Created comprehensive documentation of data analysis methodologies and findings to guide future development.</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div className={styles.experienceItem} variants={itemVariants}>
            <div className={styles.experienceIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </div>
            <div className={styles.experienceContent}>
              <h3>Artificial Intelligence & Machine Learning</h3>
              <ul>
                <li>Designed and deployed end-to-end machine learning and deep learning models using scikit-learn, TensorFlow, and PyTorch for both structured and unstructured datasets.</li>
                <li>Built classification and regression models for real-world use cases, including diabetes prediction, stroke prediction and water quality estimation, performing feature engineering, hyperparameter tuning, and model validation.</li>
                <li>Used libraries such as Scikit-learn to build models for classification, regression, and clustering tasks.</li>
                <li>Documented analysis processes, model development, and deployment workflows to ensure transparency, reproducibility and scalability.</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div className={styles.experienceItem} variants={itemVariants}>
            <div className={styles.experienceIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2c0-2.21-1.79-4-4-4h-2V3h-2v4H9V3H7v4H5c-2.21 0-4 1.79-4 4v2H3v2H1v2h2v2c0 2.21 1.79 4 4 4h2v-2h2v2h2v-2h2v2h2c2.21 0 4-1.79 4-4v-2h2v-2h-2v-2h2z" />
              </svg>
            </div>
            <div className={styles.experienceContent}>
              <h3>Deep Learning & Neural Networks</h3>
              <ul>
                <li>Implemented neural networks architectures such as CNNs for image recognition tasks (like facial recognition attendance system, intelligent number plate detection) and RNNs for time series forecasting (like bikeshare demand and power load prediction).</li>
                <li>Applied deep learning enhancements including transfer learning, data augmentation, and model optimization to improve predictive accuracy and model generalization.</li>
                <li>Designed and implemented neural networks, including Convolutional (CNN) and Recurrent Neural Networks (RNN), for AI tasks such as image recognition.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div className={styles.experienceItem} variants={itemVariants}>
            <div className={styles.experienceIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
              </svg>
            </div>
            <div className={styles.experienceContent}>
              <h3>Mobile App Development</h3>
              <ul>
                <li>Developed a Hostel Management System mobile application using Flutter as a mini project, implementing features for room allocation, student management, and fee tracking.</li>
                <li>Created a Facial Recognition Attendance Management System mobile app using Expo React Native as a final year project, integrating camera functionality with AI-based facial recognition algorithms.</li>
                <li>Designed responsive and intuitive user interfaces for cross-platform mobile applications with focus on user experience and performance optimization.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}