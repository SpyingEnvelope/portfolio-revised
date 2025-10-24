/* This is the footer component to be displayed at the bottom of the page. It should include a copyright
and potentially some other links.*/
import { useRef } from "react";
import { motion, useInView } from "motion/react";

function Footer() {
    const footerRef = useRef();
    const footerInView = useInView(footerRef);

  return (
    <motion.footer
      variants={{ inView: { opacity: 1 }, notInView: { opacity: 1 } }}
      initial="notInView"
      whileInView="inView"
      id="footer"
      className="mt-30"
      ref={footerRef}
    >
      <motion.div
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-[500%] h-25 absolute overflow-hidden left-0 h-20"
      >
        {footerInView && <motion.div
          initial={{ boxShadow: "0 0 10px 10px rgba(235, 172, 96, 0.5)" }}
          animate={{ boxShadow: "0 0 10px 10px rgba(235, 172, 96, 0.3)" }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: "reverse",
            ease: "easeOut",
          }}
          className={`absolute -left-[40%] top-5 w-full 
        aspect-square bg-gradient-to-t from-[#1F39B8] lg:from-99% sm:from-99% 
        from-98% to-[#8F96C4] lg:to-100% sm:to-100% to-100% rounded-t-full
        opacity-85`}
          style={{ boxShadow: "0 0 10px 10px rgba(235, 172, 96, 0.5)" }}
        >
          {/* <p>&#169; 2025 Gad Cooper. All Rights Reserved.</p> */}
        </motion.div>}
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
