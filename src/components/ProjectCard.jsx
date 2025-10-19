/* This component displays a card for different projects */
import { useEffect, useState} from "react";
import { motion } from "motion/react";

import starArray from "../utils/starUtils";
import ProjectLogo from "./ProjectLogo";

/* The function returned to render the card
PROPS:
  children: The children to be displayed inside of the card
  title: STRING the title on top of the card
  links: ARRAY OF OBJECTS an array of objects containing links information.
         See Project.jsx documentation for more details
  icon: REACTNODE the icon to display inside of the logo
  image: REACT IMAGE IMPORT the image to display inside the logo
  url: STRING the url to open when the card is clicked
*/
function ProjectCard({ children, title, links, icon, image }) {

  // Used to deal with sizing the card on mobile devices
  const [mobileSize, setMobileSize] = useState("w-[392px] h-[372px]");
  const [singleView, setSingleView] = useState(false);

  /* This useEffect executes once. First, it sets the mobile size to auto if
  a mobile screen size is detected. It also adds a listener event to the window
  to make size adjustments for mobile devices if a window is resized. */
  useEffect(() => {
    if (window.innerWidth < 451) {
      setMobileSize("w-full h-auto");
    }

    if (window.innerWidth < 872) {
      setSingleView(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 451) {
        setMobileSize("w-full h-auto");
      } else {
        setMobileSize("w-[392px] h-[372px]");
      }

      if (window.innerWidth < 872) {
        setSingleView(true);
      } else {
        setSingleView(false);
      }
    });
  }, []);

  // An array of <li> elements to display in the links section of the card
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
    <motion.div
      className={`relative ${mobileSize} sm:w-[392px] sm:h-[372px] rounded-xl text-left sm:shrink-0 ml-3 mb-15`}
      variants={{
        entry: {
          background: "linear-gradient(#171B3B 63%, #171B3B 100%)",
          boxShadow: "0px 0px 0px #020618",
        },
        hover: {
          background: "linear-gradient(#000000 63%, #171B3B 100%)",
          boxShadow: "0px 0px 8px #3698D5",
        },
      }}
      initial="entry"
      whileHover="hover"
      whileInView={singleView ? "hover" : null}
      viewport={{amount: 0.9}}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute w-full h-full overflow-hidden">
        <motion.div
          variants={{ entry: { y: -400 }, hover: {y: 0} }}
          transition={{type: "tween", duration: 0.4}}
          className={`absolute w-full h-full`}
        >
          {starArray}
        </motion.div>
      </div>
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
    </motion.div>
  );
}

export default ProjectCard;
