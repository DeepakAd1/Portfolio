import "./App.css";
import React from "react";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import AboutMe from "./component/AboutMe";
import Technologies from "./component/Technologies";
import Experience from "./component/Experience"
import Projects from "./component/Projects";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="selection:bg-cyan-400 selection:text-black ml-8 ">
        <NavBar />
        <Hero />
        <AboutMe />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;

// https://deepakad.netlify.app/
