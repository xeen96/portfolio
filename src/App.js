import styles from "./App.module.scss";
import NavBar from "./components/nav_bar/nav_bar";
import Header from "./components/header/header";
import PageDisplay from "./components/page_display/page_display";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.content}>
        <NavBar />
        <PageDisplay />
      </div>
    </div>
  );
}

export default App;
