import { motion } from "motion/react";

function Star({ x, y, delay }) {
  return (
    <motion.div
      className={`absolute text-white w-1 h-1 aspect-square rounded-full scale-10`}
      style={{ top: y, left: x }}
      initial={{ opacity: 0.5, scale: 1 }}
      animate={{ opacity: 1, scale: 1.25 }}
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
