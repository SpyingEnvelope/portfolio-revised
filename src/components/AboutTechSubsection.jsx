/* The component displays a single column in the Technology about me section */
import { motion } from "motion/react";

/* The return statement of the component
PROPS:
title: STRING the title to display in the subsection.
tech: ARRAY OF OBJECTS An array used to display all the different tech.
      Each object in the array has three key-value pairs.
      icon: REACTNODE the icon to display inside the card.
      name: The name of the tech, used to display the title under the icon.
      color: STRING the Tailwind colour class. This has to be a text color class.
delay: NUMBER the delay, in seconds, before displaying the entry animation. Used for staggering.*/
function AboutTechSubsection({ title, tech = [], delay }) {
  return (
    <motion.div
      variants={{
        invisible: { y: -40, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{delay: delay, ease: "easeOut", duration: 0.5}}
      className="flex flex-col items-center mt-10"
    >
      <h3 className="reg-instrument-sans text-2xl tracking-wide text-white/75">
        {title}
      </h3>
      <hr className="w-[20%] border-[#3698d5] mt-1" />
      <div className="flex flex-row flex-wrap justify-evenly w-60">
        {tech.map((obj, index) => {
          return (
            <motion.div
              whileHover={{ boxShadow: "0px 0px 5px #FFFFFF" }}
              className={`mt-4 text-5xl ${obj.color} flex flex-col bg-black/50 rounded-lg items-center w-22 h-22 justify-center`}
              key={index + "techIcon"}
              style={{ boxShadow: "0px 0px 5px #3698D5" }}
            >
              {obj.icon}
              <span className="text-base text-white/90 reg-instrument-sans">
                {obj.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default AboutTechSubsection;
