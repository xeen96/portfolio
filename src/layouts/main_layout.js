import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./nav_bar/nav_bar";
import Header from "./header/header";
import AboutPage from "../pages/about/about";
import SkillsPage from "../pages/skills";
import ContactPage from "../pages/contact"
import styles from "./main_layout.module.scss";
import PageDisplay from "./page_display/page_display";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <NavBar />
        <Routes>
          <Route path="*" element={<AboutPage/>}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
};

export default Layout;