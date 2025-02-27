import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav_bar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles["li-blue"]}>
          <div className={styles["img-container"]}></div>
          <NavLink 
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className={styles["li-red"]}>
          <NavLink 
            to="/skills" 
          >
            Skills
          </NavLink>
        </li>
        <li className={styles["li-green"]}>
          <NavLink 
            to="/contact"
          >
            Hire
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;