import React from "react";
import styles from "./header.module.scss"
import logo from "../../assets/header/logo.png"
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div  
      id={styles.header}>
      <div className={styles["img-container"]}>

      <NavLink 
            to="/about"
          >
            <img src={logo} alt="logo"></img>
          </NavLink>
      </div>
      <div className={styles["circle-red"]}></div>
      <div className={styles["circle-yellow"]}></div>
      <div className={styles["circle-green"]}></div>
    </div>
  )
}
export default Header;