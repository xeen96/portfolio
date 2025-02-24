import React from "react";
import styles from "./nav_bar.module.scss";

const NavBar  = () => {
  return (
    <div className={styles.navbar}>
      <nav className="menu">
        <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact/Hire</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;