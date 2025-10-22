/* This component displays the image card next to the info card in the about me section */
import { motion } from "motion/react";

/* The return statement of the component
PROPS:
right: BOOLEAN used to decide whether this component should be placed to the right of the info card.
image: REACT IMAGE IMPORT the image to display in the card.
mobileSize: STRING used to size the component dynamically on mobile screens */
function AboutLogoCard({ right, image, mobileSize}) {
  return (
    <motion.div
      initial={right ? { x: 40, opacity: 0 } : { x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`${mobileSize} h-[300px] rounded-2xl border-2 border-stone-500 overflow-hidden mb-5 md:mb-auto`}
    >
      <img src={image} className="rounded-2xl h-full w-full shrink-0 object-cover" />
    </motion.div>
  );
}

export default AboutLogoCard;
