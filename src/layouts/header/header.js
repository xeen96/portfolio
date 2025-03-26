import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import logo from "../../assets/header/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imgContainer}>
        <NavLink to="/about">
          <img src={logo} alt="Website Logo" className={styles.logo} />
        </NavLink>
      </div>
      <div className={`${styles.circle} ${styles.circleRed}`} />
      <div className={`${styles.circle} ${styles.circleYellow}`} />
      <div className={`${styles.circle} ${styles.circleGreen}`} />
    </header>
  );
};

export default Header;