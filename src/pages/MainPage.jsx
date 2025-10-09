import Navigation from "../components/Navigation";
import IndexPage from "./IndexPage";
import About from "./About";
import Footer from "../components/Footer";
import Projects from "./Projects";
import Banner from "@/components/Banner";
import Header from "@/components/Header";

/* This is the main page that will always be displayed on the screen. As such, all crucial components
and pages will be displayed here.*/

function MainPage() {
  return (
    <>
      <div className="h-10" id="home" />
      <Navigation />
      <main>
        <Header />
        <IndexPage />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default MainPage;
