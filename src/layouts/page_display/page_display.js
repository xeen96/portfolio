import React from "react";
import styles from "./page_display.module.scss";

const PageDisplay = ({ page }) => {
  return (
    <div className={styles.display}>
      {page}
    </div>
    );
};

export default PageDisplay;