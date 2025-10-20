import { motion } from "motion/react";

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
