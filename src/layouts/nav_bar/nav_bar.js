import React from "react";
import styles from "./nav_bar.module.scss";

const NavBar  = () => {
  return (
      <nav className={styles.navbar}>
        <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact/Hire</a></li>
        </ul>
      </nav>
  )
}

export default NavBar;