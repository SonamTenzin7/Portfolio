'use client';

import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={styles.educationSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeading}>Education & Certifications</h2>
        <p className={styles.sectionSubtitle}>My academic journey and professional qualifications</p>
      </div>
      <div className={styles.educationContainer}>
        <div className={styles.educationItem}>
          <div className={styles.itemHeader}>
            <div className={styles.itemIcon}>🎓</div>
            <div>
              <h3>Bachelor of Engineering in Information Technology</h3>
              <div className={styles.itemMeta}>
                <span className={styles.institution}>Royal University of Bhutan, College of Science and Technology</span>
                <span className={styles.location}>Phuentsholing, Chukkha</span>
                <span className={styles.duration}>2020 - 2025</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.certifications}>
          <div className={styles.itemHeader}>
            <div className={styles.itemIcon}>📜</div>
            <h3>Certifications</h3>
          </div>
          <ul>
            <li>
              <span className={styles.certDot}></span>
              <div>
                <strong>Google Data Analytics Professional Certificate</strong>
                <span className={styles.certYear}>2024</span>
              </div>
            </li>
            <li>
              <span className={styles.certDot}></span>
              <div>
                <strong>Python for Data Science and Machine Learning Bootcamp</strong>
                <span className={styles.certYear}>2024</span>
              </div>
            </li>
            <li>
              <span className={styles.certDot}></span>
              <div>
                <strong>Google Advanced Data Analytics</strong>
                <span className={styles.certYear}>2025</span>
              </div>
            </li>
            <li>
              <span className={styles.certDot}></span>
              <div>
                <strong>The Data Science Course: Complete Data Science Bootcamp</strong>
                <span className={styles.certYear}>2024</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className={styles.ojt}>
          <div className={styles.itemHeader}>
            <div className={styles.itemIcon}>👨‍💻</div>
            <h3>On-the-Job Training</h3>
          </div>
          <ul>
            <li>
              <span className={styles.certDot}></span>
              <div>
                <strong>Intelligent number plate detection and parking slot</strong>
                <span className={styles.certYear}>GovTech Agency</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}