import React from "react";
import styles from "./footer.module.scss"

const Footer = () => {

  return (
    <footer className={styles.footer}><small>© {process.env.REACT_APP_FULLNAME}</small></footer>
  )
}

export default Footer;