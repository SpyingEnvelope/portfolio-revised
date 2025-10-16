/* This JSX file shows the project section of the website */

import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import reactiveLogo from "/reactive-logo.png";
import fsLogo from "/logo-fs-web.png"
import profile from "/vite.svg";
import { GiTalk } from "react-icons/gi";
import { PiCheckerboardDuotone } from "react-icons/pi";

/* The projects constant is an array of objects. It is used to populate the project cards
  url: STRING the link that will open upon clicking the card
  title: STRING the title that appears at the top of the card
  para: STRING what is written inside of the card
  image: REACT IMAGE IMPORT the image used to display. Displays if icon does not exist 
  icon: REACTNODE the icon to display if an image is not used
  links: ARRAY OF OBJECTS each object in the array has two properties: href and text.
         href: STRING the url to go to when clicking the link/anchor tag
         text: STRING the text to write inside the anchor tag
  */
const projects = [
  {
    title: "Reactive Chat",
    para: `An AAC software built with React, JavaScript, Express, and MongoDB to assist individuals with verbal challenges. Users can create personalized pages, while authentication and secure data handling are managed through the Express server for a safe, tailored communication experience.`,
    image: reactiveLogo,
    icon: false,
    links: [
      {
        href: "https://github.com/SpyingEnvelope/reactive-chat-js",
        text: "GitHub",
      },
      {
        href: "https://reactive-chat-frontend-ua6jl.ondigitalocean.app/",
        text: "Live Site",
      },
    ],
  },
  {
    title: "The Speech Games",
    para: `A Python game built with Pygame and SQLite3 to encourage children to speak. It streamlines data management for smooth modification and retrieval while handling multiple global and local states to dynamically determine and render the appropriate information on screen.`,
    image: false,
    icon: <GiTalk />,
    links: [
      {
        href: "https://github.com/SpyingEnvelope/speech-games",
        text: "GitHub",
      },
    ],
  },
  {
    title: "Revised Portfolio",
    para: `My current portfolio website, built with React and JavaScript. It features a modern, unique interface. Motion for React powers dynamic, nested animations, while React Router manages navigation and invalid URLs to ensure users can easily access the right sections.`,
    image: profile,
    icon: false,
    links: [
      {
        href: "https://github.com/SpyingEnvelope/portfolio-revised",
        text: "GitHub",
      },
    ],
  },
  {
    title: "Full-Stack Portfolio",
    para: `My old portfolio website, now offline, was designed to be CMS-like, allowing updates without coding. Built with React, MongoDB, and Express, it featured an admin section for CMS tools, authentication, and data handling. React Router and Motion for React enabled smooth, multi-page transitions.`,
    image: fsLogo,
    icon: false,
    links: [
      {
        href: "https://github.com/SpyingEnvelope/portfolio-frontend",
        text: "GitHub",
      },
    ],
  },
  {
    title: "Sudoku Solver",
    para: `A Sudoku Solver implemented in Java demonstrating Object-Oriented design. It employs a recursive backtracking algorithm for efficient puzzle resolution and improved readability. The program outputs each computational step to the console, providing transparent algorithmic tracing.`,
    image: false,
    icon: <PiCheckerboardDuotone />,
    links: [
      {
        href: "https://github.com/SpyingEnvelope/java-sudoku-solver",
        text: "GitHub",
      },
    ],
  },
];

/* The return statement for the JSX code

PROPS: None
*/

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center mt-30"
    >
      <SectionHeader>
        PROJECTS
      </SectionHeader>
      <h3 className="bold-instrument-sans text-3xl lg:text-4xl tracking-widest">
        CREATING SOFTWARE <br /> THAT BRINGS VISIONS TO LIFE
      </h3>
      <p className="reg-instrument-sans sm:w-[600px] lg:w-[900px] mt-5 mb-15">
        {" "}
        As an individual passionate about software engineering, I pride myself
        on my dedication to turning concepts into real, efficient, and
        well-designed applications. My projects reflect that passion. Each one
        is built with care to help companies, individuals, and teams solve real
        problems. I write all my code by hand to ensure strong performance and
        to keep sharpening my skills. Every project showcased here is a
        representation of my passion and commitment to learning, creating, and
        making technology that helps others.
      </p>
      <div className="w-full flex flex-row justify-evenly flex-wrap">
        {projects.map((project, i) => {
          return (
            <ProjectCard
              key={i + "projectCard"}
              title={project.title}
              image={project.image}
              icon={project.icon}
              links={project.links}
            >
              {project.para}
            </ProjectCard>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
