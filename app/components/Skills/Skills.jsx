'use client';

import styles from './Skills.module.css';

export default function Skills() {
  const skills = {
    languages: ["Python", "R", "JavaScript", "TypeScript", "HTML", "Java", "C"],
    frameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "React Native"],
    tools: ["Tableau", "Power BI", "Jupyter Notebook", "Google Colab", "Excel", "Git"]
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeading}>Skills & Expertise</h2>
        <p className={styles.sectionSubtitle}>Technologies I work with</p>
      </div>
      <div className={styles.skillsContainer}>
        <div className={styles.skillCategory}>
          <div className={styles.categoryHeader}>
            <div className={styles.categoryIcon}>💻</div>
            <h3>Programming Languages</h3>
          </div>
          <ul>
            {skills.languages.map((skill, i) => (
              <li key={i}>
                <span className={styles.skillDot}></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.skillCategory}>
          <div className={styles.categoryHeader}>
            <div className={styles.categoryIcon}>🧩</div>
            <h3>Frameworks & Libraries</h3>
          </div>
          <ul>
            {skills.frameworks.map((skill, i) => (
              <li key={i}>
                <span className={styles.skillDot}></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.skillCategory}>
          <div className={styles.categoryHeader}>
            <div className={styles.categoryIcon}>🛠️</div>
            <h3>Tools & Technologies</h3>
          </div>
          <ul>
            {skills.tools.map((skill, i) => (
              <li key={i}>
                <span className={styles.skillDot}></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}