/* This component generates individual stars with their own twinkling animation using Motion for React */

import { motion } from "motion/react";

/* Returns a star with a twinkling animation.
PROPS: 
x: the percentage left offset used for each star
y: the percentage top offset used for each star 
delay: how long to wait before starting the twinkling animation for a star */
function Star({ x, y, delay }) {
  return (
    <motion.div
      className={`absolute text-white w-1 h-1 aspect-square rounded-full scale-10`}
      style={{ top: y, left: x }}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{
        repeat: Infinity,
        duration: 0.5,
        repeatType: "reverse",
        delay: delay,
        repeatDelay: 2,
        ease: "linear"
      }}
    >&#9733;</motion.div>
  );
}

export default Star;
