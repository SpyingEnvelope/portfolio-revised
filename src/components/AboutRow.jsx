import { motion } from "motion/react";

import AboutInfoCard from "./AboutInfoCard";
import AboutLogoCard from "./AboutLogoCard";

function AboutRow({ right, title, delay, image, mobileSizing, children }) {
  const mobileSize = mobileSizing ? "w-full" : "w-[392px]";

  return (
    <>
      <motion.div
        initial={right ? { y: -40, opacity: 0 } : { y: -40, opacity: 0 }}
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
