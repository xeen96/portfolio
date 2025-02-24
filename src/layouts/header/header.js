import React from "react";
import styles from "./header.module.scss"

const Header = () => {
  return (
    <div  
      id={styles.header}>
      <div className={styles["circle-red"]}></div>
      <div className={styles["circle-yellow"]}></div>
      <div className={styles["circle-green"]}></div>
    </div>
  )
}
export default Header;