import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "@fontsource/raleway";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
