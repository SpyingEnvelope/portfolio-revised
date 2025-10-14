import { useEffect, useState } from "react";

import ProjectLogo from "./ProjectLogo";

function ProjectCard({ children, title, links, icon, image }) {
  const [mobileSize, setMobileSize] = useState("w-[392px] h-[372px]");

  useEffect(() => {
    if (window.innerWidth < 451) {
      setMobileSize("w-full h-auto");
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 451) {
        setMobileSize("w-full h-auto");
      } else {
        setMobileSize("w-[392px] h-[372px]");
      }
    });
  }, []);

  let linksDisplay = [];

  if (links) {
    linksDisplay = links.map((link, i) => {
      return (
        <li key={i + " project"}>
          <a target="_blank" href={link.href}>
            {link.text}
          </a>
        </li>
      );
    });
  }

  return (
    <div
      className={`${mobileSize} sm:w-[392px] sm:h-[372px] bg-[#171B3B] rounded-xl text-left sm:shrink-0 ml-3 mb-15`}
    >
      <div className="relative left-5 bottom-10">
        <ProjectLogo icon={icon} image={image} />
      </div>
      <h3 className="relative bottom-5 bold-instrument-sans text-3xl font-bold ml-5">
        {title}
      </h3>
      <div className="ml-5 mr-2 sm:h-[50px] reg-instrument-sans text-[15px] relative bottom-1">
        {children}
      </div>
      <ul className="relative flex flex-row pb-5 pt-2 sm:bottom-auto sm:top-30 left-5 space-x-3 reg-instrument-sans underline">
        {links && linksDisplay}
      </ul>
    </div>
  );
}

export default ProjectCard;
