import "./styles/main.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
