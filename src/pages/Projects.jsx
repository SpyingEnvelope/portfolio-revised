import ProjectCard from "@/components/ProjectCard";

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center mt-30"
    >
      <h2 className="text-xl bold-instrument-sans text-[#3698D5] tracking-widest">
        PROJECTS
      </h2>
      <h3 className="bold-instrument-sans text-4xl tracking-widest">
        CREATING SOFTWARE <br /> THAT BRINGS VISIONS TO LIFE
      </h3>
      <p className="reg-instrument-sans xl:w-[900px] mt-5 mb-15">
        {" "}
        As an individual passionate about software engineering, I pride myself
        on my dedication to turning concepts into real, efficient, and
        well-designed applications. My projects reflect that passion. Each one
        is built with care to help companies, individuals, and teams solve real
        problems. I completed my undergraduate computer science studies in 2025,
        and I graduated Summa Cum Laude (Highest Honors). I write all my code by
        hand to ensure strong performance and to keep sharpening my skill. Every
        project showcased here is a representation of the passion I have for
        program development, and my commitment to learning, creating, and making
        technology that helps others.
      </p>
      <div className="w-full flex flex-row justify-between">
        <ProjectCard title={"Reactive Chat"}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.
          </p>
        </ProjectCard>
        <ProjectCard title={"The Speech Games"}>
          {" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.
          </p>
        </ProjectCard>
        <ProjectCard title={"Portfolio"}>
          {" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.
          </p>{" "}
        </ProjectCard>
      </div>
    </div>
  );
}

export default Projects;
