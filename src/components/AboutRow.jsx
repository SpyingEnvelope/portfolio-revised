/* This component creates the individualized rows that display in the about me section. These include the photo card
 and the info card. */

// Motion for React is used to animate different parts as they enter the viewport
import { motion } from "motion/react";

import AboutInfoCard from "./AboutInfoCard";
import AboutLogoCard from "./AboutLogoCard";

/* The function exported by the component
PROPS:
right: BOOLEAN used to decide if the image card should be on the right or not
title: STRING the title to use in each row displayed
delay: NUMBER the delay amount for animating the moving planets. Used to stagger animations
image: REACT IMAGE IMPORT the image to display in the image card
mobileSizing: BOOLEAN sizing is rigid by default on certain screen sizes. Used to decide if sizing should be dynamic.
children: The elements to show inside the info card. */
function AboutRow({ right, title, delay, image, mobileSizing, children }) {
  // Used to size the card appropriately
  const mobileSize = mobileSizing ? "w-full" : "w-[392px]";

  return (
    <>
      {/* This div displays the tile for each row. It uses the right boolean
      to decide where to place the title, since the title needs to align with the info cards. */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 1 }}
        className={`relative top-10 flex justify-center items-center`}
      >
        <h3
          className={`bold-instrument-sans tracking-widest flex justify-center w-full ${
            right ? "md:justify-start" : "md:justify-end"
          } text-white/75 block ${right ? "md:w-[50%]" : "md:w-[40%]"}`}
        >
          {title}
        </h3>
      </motion.div>
      {/* This div is used to display the image card and the info card. It relies on the right boolean
      to decide on whether to use flex-row-reverse or flex-row */}
      <div
        className={`flex ${
          right ? "flex-row-reverse" : "flex-row"
        } justify-center mt-15 mb-20 md:space-x-8 items-center flex-wrap md:flex-nowrap shrink-0 md:shrink`}
      >
        <AboutLogoCard right={right} image={image} mobileSize={mobileSize} />
        <AboutInfoCard delay={delay} right={right} mobileSize={mobileSize}>
          {children}
        </AboutInfoCard>
      </div>
    </>
  );
}

export default AboutRow;
