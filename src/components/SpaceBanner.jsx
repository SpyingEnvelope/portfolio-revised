/* This banner generates a space-like banner.*/

import { motion } from "motion/react";
import StarryBackground from "./StarryBackground";

import profile from "/profile.jpg";
import ModifiedCard from "./ModifiedCard";
import { PiDevToLogoDuotone } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";

const orangeBorder = `rgba(254 154 0 1)`;

/* PROPS: None */
function SpaceBanner() {
  return (
    <>
      <motion.div
        variants={{ hovering: { opacity: 1 }, idle: { opacity: 1 } }}
        initial="idle"
        whileHover={"hovering"}
        className="relative w-full h-80 md:h-115 overflow-visible flex items-center justify-center z-20 mb-10"
      >
        {/* The StarryBackground component generates the background stars. */}
        <StarryBackground />
        {/* This div displays on medium screens */}
        <motion.div
          className=" md:flex lg:hidden flex-row justify-between w-full hidden"
        >
          <ModifiedCard
            top={140}
            left={0}
            head={"Expertise"}
            para={
              "Experience working with JavaScript, TypeScript, Java, and Python. Also worked with popular frameworks such as React and Tailwind."
            }
            motionLeft={-25}
            motionTop={140}
          >
            <PiDevToLogoDuotone className="text-3xl" />
          </ModifiedCard>
          <ModifiedCard
            top={-140}
            left={0}
            head={"Education"}
            para={
              "Bachelor of Science in Computer Science program graduate with highest honours."
            }
            motionLeft={20}
            motionTop={-140}
          >
            <PiStudentFill className="text-3xl" />
          </ModifiedCard>
        </motion.div>
        {/* This div shows the modified cards for large screens */}
        <motion.div
          variants={{ idle: { zIndex: 1 }, hovering: { zIndex: 21 } }}
          className=" lg:flex xl:hidden flex-row justify-between w-full hidden"
        >
          <ModifiedCard
            top={130}
            left={0}
            head={"Expertise"}
            para={
              "Experience working with JavaScript, TypeScript, Java, and Python. Also worked with popular frameworks such as React and Tailwind."
            }
            motionLeft={-25}
            motionTop={0}
          >
            <PiDevToLogoDuotone className="text-3xl" />
          </ModifiedCard>
          <ModifiedCard
            top={-120}
            left={0}
            head={"Education"}
            para={
              "Bachelor of Science in Computer Science program graduate with highest honours."
            }
            motionLeft={25}
            motionTop={0}
          >
            <PiStudentFill className="text-3xl" />
          </ModifiedCard>
        </motion.div>
        {/* This div only shows up on extra large screens, like desktops or laptops*/}
        <motion.div className="xl:flex flex-row justify-between w-full hidden z-25">
          <ModifiedCard
            top={100}
            left={200}
            head={"Expertise"}
            para={
              "Experience working with JavaScript, TypeScript, Java, and Python. Also worked with popular frameworks such as React and Tailwind."
            }
            motionLeft={270}
            motionTop={80}
          >
            <PiDevToLogoDuotone className="text-3xl" />
          </ModifiedCard>
          <ModifiedCard
            top={-120}
            left={-200}
            head={"Education"}
            para={
              "Bachelor of Science in Computer Science program graduate with highest honours."
            }
            motionLeft={-120}
          >
            <PiStudentFill className="text-3xl" />
          </ModifiedCard>
        </motion.div>
        {/* This div also only shows up on extra large screens */}
        <div className="xl:flex flex-row justify-between w-full hidden z-25">
          <ModifiedCard
            top={80}
            left={150}
            head={"Full-stack"}
            para={
              "Full-stack developer with experience developing applications in Node.js, Express, SQL, and MongoDB."
            }
            motionLeft={90}
          >
            <FaLaptopCode className="text-3xl" />
          </ModifiedCard>
          <ModifiedCard
            top={-140}
            left={-120}
            para={
              "Passionate about computer science and programming. Created multiple applications to assist company operations."
            }
            head={"Dedication"}
            motionLeft={-250}
            motionTop={-120}
          >
            <MdWork className="text-3xl" />
          </ModifiedCard>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="flex items-center justify-center absolute rounded-full"
        >
          {/* This div displays the outer circle */}
          <div className="w-40 h-40 rounded-full bg-linear-to-tr from-[#020618] to-[#1C254D] md:shadow-[0_0_10px_1px] xl:shadow-lg shadow-black/40 flex items-center justify-center z-15">
            {/* This div showcases the middle circle*/}
            <motion.div className="w-35 h-35 rounded-full z-20">
              <img
                src={profile}
                className="w-35 h-35 rounded-full aspect-square"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default SpaceBanner;
