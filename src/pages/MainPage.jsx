import { useState, useEffect } from "react";

import Navigation from "../components/Navigation";
import About from "./About";
import Footer from "../components/Footer";
import Projects from "./Projects";
import Header from "@/components/Header";
import Contact from "./Contact";

/* This is the main page that will always be displayed on the screen. As such, all crucial components
and pages will be displayed here.*/

function MainPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <div className="h-10" id="home" />
      <Navigation />
      <main>
        <Header />
        <Projects />
        <About screenWidth={screenWidth} />
        <Contact />
      </main>
      <Footer screenWidth={screenWidth} />
    </>
  );
}

export default MainPage;
