import ProjectCard from "@/components/ProjectCard";
import reactiveLogo from "/reactive-logo.png";
import profile from "/vite.svg";
import { GiTalk } from "react-icons/gi";

const projects = [
  {
    title: "Reactive Chat",
    para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.`,
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
    para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.`,
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
    title: "Portfolio",
    para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.`,
    image: profile,
    icon: false,
    links: [
      {
        href: "https://github.com/SpyingEnvelope/portfolio-revised",
        text: "GitHub",
      },
    ],
  },
];

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center mt-30"
    >
      <h2 className="text-lg lg:text-xl bold-instrument-sans text-[#3698D5] tracking-widest">
        PROJECTS
      </h2>
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
        to keep sharpening my skill. Every project showcased here is a
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
