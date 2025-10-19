import aboutPic from "/about-pic.jpeg";
import { motion } from "motion/react";

function AboutLogoCard({ right }) {
  return (
    <motion.div
      initial={right ? { x: 40, opacity: 0 } : { x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="h-90 w-90 rounded-2xl border-2 border-stone-500 overflow-hidden mb-5"
    >
      <img src={aboutPic} className="rounded-2xl" />
    </motion.div>
  );
}

export default AboutLogoCard;
