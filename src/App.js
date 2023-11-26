import "./styles/main.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectItem from "./pages/ProjectItem";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectItem />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
