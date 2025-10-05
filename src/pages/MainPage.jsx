import Navigation from "../components/Navigation";
import IndexPage from "./IndexPage";
import About from "./About";
import Footer from "../components/Footer";
import Projects from "./Projects";

/* This is the main page that will always be displayed on the screen. As such, all crucial components
and pages will be displayed here.*/

function MainPage() {

    return <>
    <div className="h-10" id="home"></div>
        <Navigation />
        <main>
            <IndexPage />
            <About />
            <Projects />
        </main>
        <Footer />
    </>
}

export default MainPage;