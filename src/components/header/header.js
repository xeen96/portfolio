import React from "react";
import styles from "./header.module.scss"

const Header = () => {
  return (
    <div  
      className={styles.head}
      id={styles.header}>
      <div className="circle-red"></div>
      <div className="circle-yellow"></div>
      <div className="circle-green"></div>
    </div>
  )
}
export default Header;