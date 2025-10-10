/* The prop used to fade in the text that is in the Header component*/
import { motion } from "motion/react";


/* PROPS: None */
function FadeInHeaderText() {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "linear", delay: 0.8 }}
      className="text-xl md:text-3xl lg:text-4xl relative -top-10 md:-top-8"
    >
      Hey, I'm <span className="text-amber-500">Gad Cooper</span> and{" "}
      <strong className="text-lime-600">These</strong> are the techs I have
      worked with
    </motion.h2>
  );
}

export default FadeInHeaderText;
