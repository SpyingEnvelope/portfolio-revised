/* This is the footer component to be displayed at the bottom of the page. It should include a copyright
and potentially some other links.*/
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SocialMedia from "./SocialMedia";
import Satellite from "./Satellite";

function Footer({ screenWidth }) {
  const footerRef = useRef();
  const footerInView = useInView(footerRef);
  let spinDuration = 6;

  if (screenWidth < 440) {
    spinDuration = 6;
  } else if (screenWidth < 768) {
    spinDuration = 8;
  } else if (screenWidth < 1024) {
    spinDuration = 10;
  } else if (screenWidth < 1280) {
    spinDuration = 12;
  } else {
    spinDuration = 15;
  }

  return (
    <motion.footer id="footer" className="mt-30" ref={footerRef}>
      <motion.div className="w-[100%] h-70 overflow-hidden absolute left-0">
        <div className="relative h-20 flex items-center"></div>
        {footerInView && (
          <motion.div
            initial={{
              y: 80,
              boxShadow: "0 0 10px 10px rgba(255, 255, 255, 0.5)",
            }}
            animate={{ y: 0 }}
            whileInView={{
              boxShadow: "0 0 10px 10px rgba(255, 255, 255, 0.2)",
              transition: {
                repeat: Infinity,
                duration: 2,
                repeatType: "reverse",
              },
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className={`absolute -left-[75%] top-30 w-[250%] 
        aspect-square bg-gradient-to-t from-[#396dbf] lg:from-98% sm:from-99% 
        from-98% to-[#b6b8ba] lg:to-100% sm:to-100% to-100% rounded-t-full
        opacity-85`}
          ></motion.div>
        )}
        {footerInView && (
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="w-screen flex justify-center relative top-30"
          >
            <div className="relative xl:w-[1280px] w-full h-10 ml-10 flex justify-center right-6 bottom-5 z-6">
              <SocialMedia />
            </div>
          </motion.div>
        )}{" "}
        {footerInView && (
          <motion.div
            initial={{ rotate: "-30deg" }}
            animate={{ rotate: "30deg" }}
            transition={{
              repeat: Infinity,
              duration: spinDuration,
              ease: "linear",
            }}
            className={`relative -left-[75%] bottom-10 w-[250%] 
        aspect-square border-white rounded-full
        opacity-85 flex justify-center items-center z-5`}
          >
            <div className="absolute -top-15">
              <Satellite />
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
