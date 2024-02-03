import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skill from "./containers/skills";
import Portfolio from "./containers/porfolio";
import Contact from "./containers/contact";
import NavBar from "./components/navBar";
import particles from "./utils/particles";
import Particles from "react-tsparticles";
function App() {
  const location = useLocation();
  console.log("location", location);
  const handleInit = async (main) => {
    await loadFull(main);
  };
  const renderParticlesJsInHomePage = location.pathname === "/";
  return (
    <div className="App">
      {renderParticlesJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}
      <NavBar />
      <div className="App__main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
