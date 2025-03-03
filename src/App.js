import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/main_layout";

function App() {
  return (
    <BrowserRouter basename="https://xeen96.github.io/portfolio/">
        <Layout />
    </BrowserRouter>
  );
}

export default App;
