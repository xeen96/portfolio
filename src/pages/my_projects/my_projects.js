import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./my_projects.module.scss";

import portfolioImg from "../../assets/projects/portfolio.png";
import formImg from "../../assets/projects/form.png";
import gameOfLifeImg from "../../assets/projects/game_of_life.png";

const MyProjects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (imageSrc, e) => {
    e.stopPropagation();
    setFullscreenImage(imageSrc);
  };

  const projects = [
    {
      title: "Game of Life Simulator",
      shortDescription: "Interactive cellular automaton simulation",
      fullDescription:
        "An engaging implementation of Conway's Game of Life featuring a retro-futuristic interface with neon green accents and dynamic scanline effects. The interactive grid demonstrates cellular evolution through customizable rules and patterns.",
      stack: ["React", "TypeScript", "SCSS"],
      image: gameOfLifeImg,
      link: "https://github.com/xeen96/game-of-life/",
    },
    {
      title: "Portfolio Showcase",
      shortDescription: "Personal portfolio website",
      fullDescription:
        "A sleek, responsive portfolio website showcasing my development projects and skills. Built with modern web technologies, it features smooth animations and an intuitive user interface.",
      stack: ["React", "JavaScript", "SCSS"],
      image: portfolioImg,
      link: "https://github.com/xeen96/portfolio",
    },
    {
      title: "Multi-Step Form",
      shortDescription: "Dynamic form with step navigation",
      fullDescription:
        "A user-friendly, multi-step form application with persistent input storage and seamless navigation between steps. Designed for optimal user experience with clean validation and styling.",
      stack: ["React", "TypeScript", "Tailwind CSS"],
      image: formImg,
      link: "https://github.com/xeen96/multi-step-form",
    },
  ];

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.content}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.projects}>
        <h1>Featured Projects</h1>
        <motion.div className={styles.projectsGrid} variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`${styles.project} ${
                expandedProject === index ? styles.expanded : ""
              }`}
              variants={projectVariants}
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
                      loading="lazy"
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
                      Explore Project
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
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
    </motion.div>
  );
};

export default MyProjects;