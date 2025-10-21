/* The prop used to fade in the text that is in the Header component*/
import { motion } from "motion/react";


/* PROPS:
animDelay: INT the animation delay. Default value is 0.8 */
function FadeInHeaderText( { animDelay }) {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "linear", delay: animDelay ?? 0.8 }}
      className="text-2xl md:text-3xl relative -top-10 md:-top-8 reg-instrument-sans mt-30"
    >
      Hey, I'm <span className="text-[#3698D5]">Gad Cooper</span> and{" "}
      <strong className="text-lime-600">these</strong> are the techs I have
      experience with
    </motion.h2>
  );
}

export default FadeInHeaderText;
