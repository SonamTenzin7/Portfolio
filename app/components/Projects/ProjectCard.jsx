'use client';

export default function ProjectCard({ project }) {
  // Map project titles to appropriate emoji icons
  const getProjectIcon = (title) => {
    if (title.includes("Facial Recognition")) return "👥";
    if (title.includes("Load Forecasting")) return "⚡";
    if (title.includes("Water Quality")) return "💧";
    if (title.includes("Number Plate")) return "🚗";
    if (title.includes("Stroke")) return "❤️‍🩹";
    if (title.includes("Diabetes")) return "🩸";
    return "🔬"; // Default icon
  };

  return (
    <div className="project-card">
      <div className="icon-wrapper" aria-hidden="true">
        {getProjectIcon(project.title)}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-stack">
        {project.tech.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="github-icon">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  );
}