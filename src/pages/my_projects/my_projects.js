import { useState } from "react";
import styles from "./my_projects.module.scss";

import portfolioImg from "../../assets/projects/portfolio.png";
import formImg from "../../assets/projects/form.png";
import memoryGameImg from "../../assets/projects/memory_game.png";
import randomQuoteImg from "../../assets/projects/random_quote.png";

const MyProjects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (imageSrc, e) => {
    e.stopPropagation(); 
    setFullscreenImage(imageSrc);
  };

  const projects = [
    {
      title: "Portfolio Website",
      shortDescription: "This website",
      fullDescription: "Personal Portfolio Website",
      stack: ["React", "JS", "SCSS"],
      image: portfolioImg,
      link: "https://github.com/xeen96/portfolio",
    },
    {
      title: "Form",
      shortDescription: "Three Step Form",
      fullDescription:
        "Form with input saving and navigation between its steps",
      stack: ["React", "TypeScript", "Tailwind CSS"],
      image: formImg,
      link: "https://github.com/xeen96/multi-step-form",
    },
    {
      title: "Memory Card",
      shortDescription: "Memory card game>",
      fullDescription:
        "A classic card game where you have to find the pair of the selected card",
      stack: ["React", "TypeScript", "CSS"],
      image: memoryGameImg,
      link: "https://github.com/xeen96/memory-card-game",
    },
    {
      title: "Random Quote",
      shortDescription: "Random Quote Machine>",
      fullDescription:
        "A small application that retrieves a random quote via API",
      stack: ["React", "JavaScript", "CSS"],
      image: randomQuoteImg,
      link: "https://github.com/xeen96/random-quote-machine",
    },
  ];

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className={styles.content}>
      <div className={styles.projects}>
        <h1>My Projects</h1>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.project} ${
                expandedProject === index ? styles.expanded : ""
              }`}
              onClick={() => toggleProject(index)}
            >
              <div className={styles.projectContent}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>
                  {expandedProject === index
                    ? project.fullDescription
                    : project.shortDescription}
                </p>
                <div className={styles.stackContainer}>
                  {project.stack.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.stackItem}>
                      {tech}
                    </span>
                  ))}
                </div>
                {expandedProject === index && (
                  <div className={styles.expandedContent}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.projectImage}
                      onClick={(e) => handleImageClick(project.image, e)}
                    />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {fullscreenImage && (
        <div
          className={styles.fullscreenOverlay}
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen view"
            className={styles.fullscreenImage}
          />
        </div>
      )}
    </div>
  );
};

export default MyProjects;
