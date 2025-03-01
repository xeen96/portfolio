import React, { useState } from "react";
import styles from "./skills.module.scss";


const Skills = () => {
  const [activeNode, setActiveNode] = useState(null);

  const skillTree = {
    name: "Web Development",
    children: [
      {
        name: "React",
        children: [
          { name: "Hooks", desc: "State & Effects" },
          { name: "Components", desc: "Reusable UI" },
        ],
      },
      {
        name: "JavaScript",
        children: [
          { name: "ES6+", desc: "Modern Syntax" },
          { name: "Async", desc: "Promises & Fetch" },
        ],
      },
      { name: "CSS", children: [{ name: "SCSS", desc: "Nested Styles" }] },
    ],
  };

  const renderTree = (node, depth = 0) => (
    <li key={node.name} className={styles.node}>
      <div
        className={`${styles.skill} ${activeNode === node.name ? styles.active : ""}`}
        onClick={() => setActiveNode(activeNode === node.name ? null : node.name)}
        style={{ marginLeft: `${depth * 2}rem` }}
      >
        {node.name}
        {node.desc && activeNode === node.name && (
          <span className={styles.desc}>{node.desc}</span>
        )}
      </div>
      {node.children && (
        <ul className={styles.branch}>
          {node.children.map((child) => renderTree(child, depth + 1))}
        </ul>
      )}
    </li>
  );

  return (
    <div className={styles.skills}>
      <h1>Skills Tree</h1>
      <ul className={styles.tree}>{renderTree(skillTree)}</ul>
    </div>
  );
};

export default Skills;