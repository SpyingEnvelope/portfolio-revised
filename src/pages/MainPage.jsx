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
  /* useState it utilized here to re-render the application to fit different screen sizes.
  As the most heavy components of the app require a re-size when the screen width changes,
  this is more efficient than using useContext. */
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  /* useEffect executes once when this component renders to attach a listener to the window.
  If a window is resized, the screenWidth state gets updated, resulting a re-render of the application. */
    useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  /* The return statement that displays the entire application */
  return (
    <>
      <div className="h-10" id="home" />
      <Navigation screenWidth={screenWidth} />
      <main>
        <Header />
        <Projects screenWidth={screenWidth} />
        <About screenWidth={screenWidth} />
        <Contact />
      </main>
      <Footer screenWidth={screenWidth} />
    </>
  );
}

export default MainPage;
