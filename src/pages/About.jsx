/* This is the about me section of the website. It will be displayed under the
home page section. It will include a more in-depth level of detail about who I am,
the languages I worked with, and the technologies I am familiar with.*/
import { useEffect, useState } from "react";
import AboutRow from "@/components/AboutRow";
import SectionHeader from "@/components/SectionHeader";

import aboutPic from "/about-pic.jpeg";
import codeSvg from "/b5.svg";
import gradPic from "/grad.jpg";

function About() {
  const [mobileSizing, setMobileSizing] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 451) {
      setMobileSizing(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 451) {
        setMobileSizing(true);
      } else {
        setMobileSizing(false);
      }

    });
  }, []);

  return (
    <div id="about" className="mt-30">
      <SectionHeader>ABOUT ME</SectionHeader>
      <h3 className="bold-instrument-sans text-3xl lg:text-4xl tracking-widest">
        CRAFTING SUCCESS THROUGH <br /> HARD WORK AND KNOWLEDGE
      </h3>
      <div className="flex flex-col">
        <AboutRow
          image={aboutPic}
          mobileSizing={mobileSizing}
        />
        <AboutRow
          right={true}
          delay={1}
          image={codeSvg}
          mobileSizing={mobileSizing}
        />
        <AboutRow
          image={gradPic}
          mobileSizing={mobileSizing}
        />
      </div>
    </div>
  );
}

export default About;
