import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import Layout from "./layouts/main_layout";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
