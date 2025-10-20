/* This is the about me section of the website. It will be displayed under the
home page section. It will include a more in-depth level of detail about who I am,
the languages I worked with, and the technologies I am familiar with.*/
import { useEffect, useState } from "react";
import AboutRow from "@/components/AboutRow";
import SectionHeader from "@/components/SectionHeader";

import aboutPic from "/about-pic.jpeg";
import codeSvg from "/b5.svg";
import gradPic from "/grad.jpg";

import PythonOriginal from "devicons-react/icons/PythonOriginal";
import { ExpressOriginal, JavascriptOriginal } from "devicons-react";
import { TypescriptOriginal } from "devicons-react";
import { JavaOriginal } from "devicons-react";
import { Html5Original } from "devicons-react";
import { Css3Original } from "devicons-react";
import { RstudioOriginal } from "devicons-react";
import { MysqlOriginal } from "devicons-react";
import { AzuresqldatabaseOriginal } from "devicons-react";
import { MongodbOriginal } from "devicons-react";
import { SqliteOriginal } from "devicons-react";
import { ReactOriginal } from "devicons-react";
import { GitOriginal } from "devicons-react";
import { BootstrapOriginal } from "devicons-react";
import { SiExpress } from "react-icons/si";
import { PandasOriginal } from "devicons-react";
import { NumpyOriginal } from "devicons-react";
import { TailwindcssOriginal } from "devicons-react";
import { TensorflowOriginal } from "devicons-react";
import { NodejsOriginal } from "devicons-react";

// A constant to set the size of the icons
const iconSize = "2em";

// An object array that stores the text and icons to be displayed by the marquee
const devArr = [
  { name: "Java", icon: <JavaOriginal size={iconSize} /> },
  { name: "JavaScript", icon: <JavascriptOriginal size={iconSize} /> },
  { name: "Python", icon: <PythonOriginal size={iconSize} /> },
  { name: "TypeScript", icon: <TypescriptOriginal size={iconSize} /> },
  { name: "HTML", icon: <Html5Original size={iconSize} /> },
  { name: "CSS", icon: <Css3Original size={iconSize} /> },
  { name: "R", icon: <RstudioOriginal size={iconSize} /> },
  { name: "SQL", icon: <AzuresqldatabaseOriginal size={iconSize} /> },
  { name: "MySQL", icon: <MysqlOriginal size={iconSize} /> },
  { name: "MongoDB", icon: <MongodbOriginal size={iconSize} /> },
  { name: "SQLite", icon: <SqliteOriginal size={iconSize} /> },
  { name: "React", icon: <ReactOriginal size={iconSize} /> },
  { name: "Git", icon: <GitOriginal size={iconSize} /> },
  { name: "Tailwind", icon: <TailwindcssOriginal size={iconSize} /> },
  { name: "Bootstrap", icon: <BootstrapOriginal size={iconSize} /> },
  { name: "Express", icon: <SiExpress size={iconSize} /> },
  { name: "Node.js", icon: <NodejsOriginal size={iconSize} /> },
  { name: "TensorFlow", icon: <TensorflowOriginal size={iconSize} /> },
  { name: "Pandas", icon: <PandasOriginal size={iconSize} /> },
  { name: "NumPy", icon: <NumpyOriginal size={iconSize} /> },
];

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
        <AboutRow image={aboutPic} mobileSizing={mobileSizing}>
          <p>
            Hi, I’m Gad Cooper, a full-stack developer passionate about building
            software that empowers people and organizations. My passion led me
            to pursue a Bachelor Degree in Computer Science, and I completed my
            studies in 2025, graduating with highest academic honors.{" "}
            <span className="inline md:hidden xl:inline">
              I believe in continuous growth. I am always looking to learn more
              and improve my skills.
            </span>
            <br />
            <br /> I try to create every software with love and care. In my off
            time, I enjoy spending time with my two amazing kids, hike, and play
            video games, often kid-friendly ones.
          </p>
        </AboutRow>
        <AboutRow
          right={true}
          delay={1}
          image={codeSvg}
          mobileSizing={mobileSizing}
        >
          <p className="mb-5 md:mb-3 lg:mb-5">
            My current web development stack uses{" "}
            <ReactOriginal className="inline relative bottom-0.5" /> React,{" "}
            <JavascriptOriginal className="inline relative bottom-0.5 rounded-xs" />{" "}
            JavaScript/
            <TypescriptOriginal className="inline relative bottom-0.5 rounded-xs" />{" "}
            TypeScript,{" "}
            <MongodbOriginal className="inline relative bottom-0.5" /> MongoDB,{" "}
            and <NodejsOriginal className="inline relative bottom-0.5" />{" "}
            Node.js.
          </p>
          <div className="relative w-full h-[100px] bg-stone-700/50 rounded-lg flex flex-col items-center justify-center overflow-hidden">
            <div className="relative bottom-2 mb-2">
              <h3 className="reg-instrument-sans tracking-widest text-sm">
                Languages
              </h3>
            </div>
            <Carousel
              className={`relative xl:w-100 lg:w-70 md:w-31 ${
                mobileSizing ? "w-30" : "w-50"
              }`}
            >
              <CarouselContent>
                {devArr.map((obj, index) => {
                  if (index < 8) {
                    return (
                      <CarouselItem
                        className={`flex justify-center items-center flex-col ${
                          mobileSizing ? "basis-1/2" : "basis-1/3"
                        } md:basis-1/2 lg:basis-1/3 text-base text-white/70`}
                        key={index + "carousel"}
                      >
                        {obj.icon}
                        <span className="hidden lg:block">{obj.name}</span>
                      </CarouselItem>
                    );
                  }
                })}
              </CarouselContent>
              <CarouselPrevious className="w-5 h-5 bg-black border-white/50" />
              <CarouselNext className="w-5 h-5 bg-black border-white/50" />
            </Carousel>
          </div>
          <div className="relative w-full h-[100px] bg-stone-700/50 rounded-lg flex flex-col items-center justify-center mt-4 md:mt-1 lg:mt-4">
            <div className="relative bottom-2 mb-2">
              <h3 className="reg-instrument-sans tracking-widest text-sm">
                Frameworks and Tech
              </h3>
            </div>
            <Carousel
              className={`relative xl:w-100 lg:w-70 md:w-31 ${
                mobileSizing ? "w-30" : "w-50"
              }`}
            >
              <CarouselContent>
                {devArr.map((obj, index) => {
                  if (index > 7) {
                    return (
                      <CarouselItem
                        className={`flex justify-center items-center flex-col ${
                          mobileSizing ? "basis-1/2" : "basis-1/3"
                        } md:basis-1/2 lg:basis-1/3 text-base text-white/70`}
                        key={index + "carousel"}
                      >
                        {obj.icon}
                        <span className="hidden lg:block">{obj.name}</span>
                      </CarouselItem>
                    );
                  }
                })}
              </CarouselContent>
              <CarouselPrevious className="w-5 h-5 bg-black border-white/50" />
              <CarouselNext className="w-5 h-5 bg-black border-white/50" />
            </Carousel>
          </div>
        </AboutRow>
        <AboutRow image={gradPic} mobileSizing={mobileSizing} />
      </div>
    </div>
  );
}

export default About;
