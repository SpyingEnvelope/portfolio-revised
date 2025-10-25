/* This is the footer component to be displayed at the bottom of the page. It should include a copyright
and potentially some other links.*/
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SocialMedia from "./SocialMedia";

function Footer() {
  const footerRef = useRef();
  const footerInView = useInView(footerRef);

  return (
    <motion.footer id="footer" className="mt-30" ref={footerRef}>
      <motion.div className="w-[100%] h-40 absolute overflow-hidden left-0">
        {footerInView && (
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            whileInView={{}}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className={`absolute -left-[75%] top-5 w-[250%] 
        aspect-square bg-gradient-to-t from-[#396dbf] lg:from-98% sm:from-99% 
        from-98% to-[#b6b8ba] lg:to-100% sm:to-100% to-100% rounded-t-full
        opacity-85`}
            style={{ boxShadow: "0 0 10px 10px rgba(255, 255, 255, 0.5)" }}
          >
          </motion.div>
        )}
        {footerInView && (
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="w-screen flex justify-center relative top-25"
          >
            <div className="relative xl:w-[1280px] w-full h-10 ml-10 flex justify-center right-6 bottom-8">
              <SocialMedia />
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
