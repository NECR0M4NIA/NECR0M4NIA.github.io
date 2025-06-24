import { useState } from "react";
import "./app.css";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hr from "./Components/Hr";

function bodyStyle() {
  document.body.style.background =
    "linear-gradient(180deg, rgb(26, 0, 54), rgb(68, 24, 150))";
  document.body.style.fontFamily = "Space Grotesk";
}

function App() {
  return (
    <>
      <div>
        <Header />
        <Hr />
        <Hero />
        <Hr />
        <Skills />
        <Hr />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

bodyStyle();
export default App;
