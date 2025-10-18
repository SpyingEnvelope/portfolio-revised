/* This is the about me section of the website. It will be displayed under the
home page section. It will include a more in-depth level of detail about who I am,
the languages I worked with, and the technologies I am familiar with.*/
import AboutRow from "@/components/AboutRow";
import SectionHeader from "@/components/SectionHeader";

function About() {
  return (
    <div id="about" className="mt-30">
      <SectionHeader>ABOUT ME</SectionHeader>
      <h3 className="bold-instrument-sans text-3xl lg:text-4xl tracking-widest">
        CRAFTING SUCCESS THROUGH <br /> HARD WORK AND KNOWLEDGE
      </h3>
      <div className="flex flex-col">
        <AboutRow />
        <AboutRow right={true} delay={1} />
      </div>
    </div>
  );
}

export default About;
