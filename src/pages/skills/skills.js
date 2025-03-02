// Skills.jsx
import React from "react";
import styles from "./skills.module.scss";

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      subSkills: ["JavaScript", "Python", "C++"],
    },

    {
      category: "Web Development",
      subSkills: ["React.js", "JavaScript", "CSS", "SCSS"],
    },

    {
      category: "Tools",
      subSkills: ["Git / GitLab", "Photoshop", "Redux (Basic)"],
    },

    {
      category: "Interfaces",
      subSkills: ["Relational DB", "API"]
    },

    {
      category: "Programming Methodologies",
      subSkills: ["OOP", "Functional Programming", "Component-Based", "Procedural Programming"]
    },

    {
      category: "Personal Qualities",
      subSkills: ["Attentive", "Fast Learner", "Responsible", "Stressproof"]
    }
  ];

  return (
    <div className={styles.content}>
    <div className={styles.skillsTree}>
      <h1>My Skills</h1>
      <ul className={styles.treeList}>
        {skills.map(({ category, subSkills }) => (
          <li key={category} className={styles.treeNode}>
            <div className={styles.category}>
              <span className={styles.categoryMarker}>▼</span>
              {category}
            </div>
            <ul className={styles.branchList}>
              {subSkills.map((skill) => (
                <li key={skill} className={styles.branch}>
                  <span className={styles.branchMarker}>─</span>
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Skills;