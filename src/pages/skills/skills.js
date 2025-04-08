import React, { useState } from "react";
import styles from "./skills.module.scss";

const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category]
    });
  };

  const skills = [
    {
      category: "Programming Languages",
      subCategories: [
        {
          name: "Scripting",
          skills: ["JavaScript", "TypeScript", "Python"]
        },
        {
          name: "System",
          skills: ["C++"]
        }
      ]
    },
    {
      category: "Web Development",
      subCategories: [
        {
          name: "Frontend Libraries",
          skills: ["React.js"]
        },
        {
          name: "State Management",
          skills: ["Redux (Basic)", "Context API"]
        },
        {
          name: "Styling",
          skills: ["CSS", "SCSS", "Tailwind CSS", "Styled Components"]
        },
        {
          name: "Frameworks",
          skills: ["Next.js"]
        }
      ]
    },
    {
      category: "Tools",
      subCategories: [
        {
          name: "Version Control",
          skills: ["Git", "GitLab", "GitHub"]
        },
        {
          name: "Build Tools",
          skills: ["Webpack", "Vite"]
        },
        {
          name: "Design",
          skills: ["Photoshop", "Figma"]
        }
      ]
    },
    {
      category: "Interfaces",
      subCategories: [
        {
          name: "API",
          skills: ["REST API"]
        },
      ]
    },
    {
      category: "Databases",
      subCategories: [
        {
          name: "SQL",
          skills: ["PostgreSQL"]
        },
        {
          name: "NoSQL",
          skills: ["MongoDB"]
        }
      ]
    },
    {
      category: "Personal Qualities",
      subCategories: [
        {
          name: "Work Ethics",
          skills: ["Attentive", "Responsible", "Detail-oriented"]
        },
        {
          name: "Adaptability",
          skills: ["Fast Learner", "Stressproof", "Problem Solver"]
        },
        {
          name: "Teamwork",
          skills: ["Collaborative", "Communication"]
        }
      ]
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.skillsTree}>
        <h1>My Skills</h1>
        <ul className={styles.treeList}>
          {skills.map(({ category, subCategories }) => (
            <li key={category} className={styles.treeNode}>
              <div 
                className={styles.category}
                onClick={() => toggleCategory(category)}
              >
                <span className={`${styles.categoryMarker} ${expandedCategories[category] ? styles.expanded : ''}`}>
                  {expandedCategories[category] ? '▼' : '►'}
                </span>
                {category}
              </div>
              {expandedCategories[category] && (
                <ul className={styles.subCategoryList}>
                  {subCategories.map((subCategory) => (
                    <li key={`${category}-${subCategory.name}`} className={styles.subCategory}>
                      <div className={styles.subCategoryName}>
                        <span className={styles.subCategoryMarker}>◆</span>
                        {subCategory.name}
                      </div>
                      <ul className={styles.branchList}>
                        {subCategory.skills.map((skill) => (
                          <li key={skill} className={styles.branch}>
                            <span className={styles.branchMarker}>─</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;