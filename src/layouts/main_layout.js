import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./nav_bar/nav_bar";
import Header from "./header/header";
import AboutPage from "../pages/about/about";
import SkillsPage from "../pages/skills/skills";
import ContactPage from "../pages/hire/hire"
import styles from "./main_layout.module.scss";
import PageDisplay from "./page_display/page_display";
import Footer from "./footer/footer";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
        <NavBar />
        <main>
        <Routes>
          <Route path="*" element={<AboutPage/>}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </main>
      <Footer/>
    </div>
  );
};

export default Layout;