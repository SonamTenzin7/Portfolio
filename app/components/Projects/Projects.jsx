'use client';

import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Facial Recognition Attendance System App",
    description: "Developed a mobile application using Expo React Native that automates attendance tracking through facial recognition. Integrated with a backend system for data management and reporting.",
    tech: ["React Native", "Expo", "TensorFlow.js", "FaceNet", "Postgresql"],
    github: "#",
    demo: "#"
  },

  {
    title: "AI-Powered Short Term Load Forecasting",
    description: "Built an AI-Powered model for power grids to predict power demand and supply to keep imbalance costs at a minimum. Utilized time series analysis and machine learning algorithms.",
    tech: ["Python", "TensorFlow", "Time Series Analysis", "Machine Learning","GoogleColab"],
    github: "#",
    demo: "#"
  },
  {
    title: "Water Quality Prediction Model",
    description: "Developed a predictive model using Jupyter Notebook to estimate key water quality parameters based on turbidity levels for environmental monitoring applications.",
    tech: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis"],
    github: "#",
    demo: "#"
  },
  {
    title: "Intelligent Number Plate Detection",
    description: "Developed a system for license plate detection and parking slot management during on-job training at GovTech Agency. Implemented computer vision techniques.",
    tech: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
    github: "#",
    demo: "#"
  },
  {
    title: "Stroke Prediction Model",
    description: "Built and deployed a stroke prediction model using R, applying statistical methods and machine learning algorithms to identify risk factors.",
    tech: ["R", "Statistical Analysis", "Machine Learning", "Healthcare"],
    github: "#",
    demo: "#"
  },
  {
    title: "Diabetes Prediction Model",
    description: "Created a binary classification model to predict diabetes in patients as part of a mini project at College of Science and Technology.",
    tech: ["Python", "Scikit-learn", "Classification", "Healthcare"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionHeading}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}