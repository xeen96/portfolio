import React from "react";
import styles from "./header.module.scss"
import logo from "../../assets/header/logo.png"

const Header = () => {
  return (
    <div  
      id={styles.header}>
      <div className={styles["img-container"]}>
        <a href="/about"><img src={logo}></img>
        </a>
      </div>
      <div className={styles["circle-red"]}></div>
      <div className={styles["circle-yellow"]}></div>
      <div className={styles["circle-green"]}></div>
    </div>
  )
}
export default Header;