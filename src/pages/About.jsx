/* This is the about me section of the website. It will be displayed under the
home page section. It will include a more in-depth level of detail about who I am,
the languages I worked with, and the technologies I am familiar with.*/
import { useEffect, useState } from "react";
import AboutRow from "@/components/AboutRow";
import SectionHeader from "@/components/SectionHeader";
import EducationCard from "@/components/EducationCard";
import AboutTechnology from "@/components/AboutTechnology";
import devArr from "@/utils/devArr";

import aboutPic from "/about-pic.jpeg";
import codeSvg from "/b5.svg";
import gradPic from "/grad.jpg";
import uniPic from "/University_of_the_People_seal.png";
import bvcPic from "/Bow_Valley_College.png";

import { JavascriptOriginal } from "devicons-react";
import { TypescriptOriginal } from "devicons-react";
import { MongodbOriginal } from "devicons-react";
import { ReactOriginal } from "devicons-react";
import { NodejsOriginal } from "devicons-react";
import { JavaOriginal } from "devicons-react";
import { PythonOriginal } from "devicons-react";





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
        <AboutRow image={aboutPic} mobileSizing={mobileSizing} title={"BIO"}>
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
          title={"STACK"}
        >
          <p className="mb-5 mt-3 md:mb-3 lg:mb-5">
            My current web development stack uses{" "}
            <ReactOriginal className="inline relative bottom-0.5" /> React,{" "}
            <JavascriptOriginal className="inline relative bottom-0.5 rounded-xs" />{" "}
            JavaScript/
            <TypescriptOriginal className="inline relative bottom-0.5 rounded-xs" />{" "}
            TypeScript,{" "}
            <MongodbOriginal className="inline relative bottom-0.5" /> MongoDB,{" "}
            and <NodejsOriginal className="inline relative bottom-0.5" />{" "}
            Node.js. I enjoy the flow and flexibiliy this stack offers me.
            <br />
            <br />
            When it comes to programming local software,{" "}
            <JavaOriginal className="inline relative bottom-0.5" /> Java and
            <PythonOriginal className="inline relative bottom-0.5" /> Python remain my two favourite languages.{" "}
            <span className="inline md:hidden xl:inline">
              The Java language's portability and object-oriented design makes
              the process of building scalable software easy. Python's strengths
              lie in its simplicity and large community.
            </span>{" "}
            Check out the full list of tech I have experience with below!
          </p>
          {/* <div className="relative w-full h-[100px] bg-stone-700/50 rounded-lg flex flex-col items-center justify-center overflow-hidden"> */}
          {/* <div className="relative bottom-2 mb-2">
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
          <div className="relative w-full h-[100px] bg-stone-700/50 rounded-lg flex flex-col items-center justify-center mt-4 md:mt-1 xl:mt-2">
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
            </Carousel> */}
          {/* </div> */}
        </AboutRow>
        <AboutRow
          image={gradPic}
          mobileSizing={mobileSizing}
          title={"EDUCATION"}
        >
          <p>
            I pursued two different post-secondary education paths. In 2016, I
            received a Justice Studies Diploma. I later returned to university
            to pursue my passion: software engineering and computer science.{" "}
            <span className="inline md:hidden xl:inline">
              I have two different graduation dates in two different fields!
            </span>
          </p>
          <div className="flex justify-evenly space-x-5 mt-5">
            <EducationCard
              pic={bvcPic}
              grad={"04/2016"}
              gpa={"3.96"}
              lgWid={"40px"}
              mdWid={"40px"}
            >
              Diploma in <br /> Justice Studies
            </EducationCard>
            <EducationCard pic={uniPic} grad={"04/2025"} gpa={"3.95"}>
              <span className="inline md:hidden lg:inline">
                Bachelor of Science
                <br />
              </span>
              <span className="hidden md:inline lg:hidden">BSc</span> in
              Computer Science
            </EducationCard>
          </div>
        </AboutRow>
        <AboutTechnology />
      </div>
    </div>
  );
}

export default About;
