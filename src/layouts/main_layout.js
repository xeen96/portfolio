import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./main_layout.module.scss";

// Компоненты
import Header from "./header/header";
import NavBar from "./nav_bar/nav_bar";
import Footer from "./footer/footer";

// Страницы
import AboutPage from "../pages/about/about";
import SkillsPage from "../pages/skills/skills";
import HirePage from "../pages/hire/hire";
import MyProjects from "../pages/my_projects/my_projects";

const Layout = () => {
  const routes = [
    { path: "/", element: <AboutPage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/skills", element: <SkillsPage /> },
    { path: "/hire", element: <HirePage /> },
    { path: "/projects", element: <MyProjects /> },
  ];

  return (
    <div className={styles.layout}>
      <Header />
      <NavBar />
      <main>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;