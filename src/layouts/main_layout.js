import React from "react";
import NavBar from "./nav_bar/nav_bar";
import Header from "./header/header";
import PageDisplay from "./page_display/page_display";
import styles from "./main_layout.module.scss"

const Layout = () => {

  return (
    <>
      <Header />
      <div className={styles.content}>
        <NavBar />
        <PageDisplay />
      </div>
    </>
  )
}

export default Layout;