/* This banner generates a space-like banner.*/

import { motion } from "motion/react";
import StarryBackground from "./StarryBackground";

import profile from "/profile.jpg";
import ModifiedCard from "./ModifiedCard";
import { PiDevToLogoDuotone } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";

/* This objects stores information to be displayed in the ModifiedCard component */
const cardInfoObj = {
  edu: {
    head: "Education",
    para: "Bachelor of Science in Computer Science program graduate with highest honours.",
    icon: <PiStudentFill className="text-3xl" />,
  },
  fullstack: {
    head: "Full-stack",
    para: "Experience working with JavaScript, TypeScript, Java, and Python. Also experienced with popular frameworks such as React and Express.",
    icon: <PiDevToLogoDuotone className="text-3xl" />,
  },
  dedication: {
    head: "Dedication",
    para: "Passionate about computer science and programming. Created multiple applications to assist company operations.",
    icon: <MdWork className="text-3xl" />,
  },
  front: {
    head: "Frontend",
    para: "Experience working with JavaScript, TypeScript, Java, and Python. Also worked with popular frameworks such as React and Tailwind.",
    icon: <PiDevToLogoDuotone className="text-3xl" />,
  },
  back: {
    head: "Backend",
    para: "Backend expertise in various technologies, with experience developing applications utilizing Node.js, Express, SQL, and MongoDB.",
    icon: <FaLaptopCode className="text-3xl" />,
  },
};

/* PROPS: None */
function SpaceBanner() {
  return (
    <>
      {/* The StarryBackground component generates the background stars. */}
      <StarryBackground />
      <motion.div
        variants={{ hovering: { opacity: 1 }, idle: { opacity: 1 } }}
        initial="idle"
        whileHover={"hovering"}
        className="relative w-full h-180 md:h-115 overflow-visible flex md:items-center justify-center z-20 mb-10"
      >
        {/* This div displays on medium screens */}
        <motion.div className=" md:flex lg:hidden flex-row justify-between w-full hidden">
          <ModifiedCard
            top={140}
            left={0}
            head={cardInfoObj.fullstack.head}
            para={cardInfoObj.fullstack.para}
            motionLeft={-25}
            motionTop={140}
          >
            {cardInfoObj.fullstack.icon}
          </ModifiedCard>
          <ModifiedCard
            top={-140}
            left={0}
            head={cardInfoObj.edu.head}
            para={cardInfoObj.edu.para}
            motionLeft={20}
            motionTop={-140}
          >
            {cardInfoObj.edu.icon}
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
            head={cardInfoObj.fullstack.head}
            para={cardInfoObj.fullstack.para}
            motionLeft={-25}
            motionTop={0}
          >
            {cardInfoObj.fullstack.icon}
          </ModifiedCard>
          <ModifiedCard
            top={-120}
            left={0}
            head={cardInfoObj.edu.head}
            para={cardInfoObj.edu.para}
            motionLeft={25}
            motionTop={0}
          >
            {cardInfoObj.edu.icon}
          </ModifiedCard>
        </motion.div>
        {/* This div only shows up on extra large screens, like desktops or laptops*/}
        <motion.div className="xl:flex flex-row justify-between w-full hidden z-25">
          <ModifiedCard
            top={100}
            left={200}
            head={cardInfoObj.front.head}
            para={cardInfoObj.front.para}
            motionLeft={270}
            motionTop={80}
          >
            {cardInfoObj.front.icon}
          </ModifiedCard>
          <ModifiedCard
            top={-120}
            left={-200}
            head={cardInfoObj.edu.head}
            para={cardInfoObj.edu.para}
            motionLeft={-120}
          >
            {cardInfoObj.edu.icon}
          </ModifiedCard>
        </motion.div>
        {/* This div also only shows up on extra large screens */}
        <div className="xl:flex flex-row justify-between w-full hidden z-25">
          <ModifiedCard
            top={80}
            left={150}
            head={cardInfoObj.back.head}
            para={cardInfoObj.back.para}
            motionLeft={90}
          >
            {cardInfoObj.back.icon}
          </ModifiedCard>
          <ModifiedCard
            top={-140}
            left={-120}
            para={cardInfoObj.dedication.para}
            head={cardInfoObj.dedication.head}
            motionLeft={-250}
            motionTop={-120}
          >
            {cardInfoObj.dedication.icon}
          </ModifiedCard>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="flex items-center justify-center absolute rounded-full top-20 md:top-auto"
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
        {/* This div displays the cards on small screens */}
        <div className="flex flex-col justify-center items-center md:hidden space-y-5 relative top-30">
          {" "}
          <ModifiedCard
            top={0}
            left={0}
            head={cardInfoObj.edu.head}
            para={cardInfoObj.edu.para}
            motionLeft={0}
            motionTop={0}
            shadow={"0px"}
            topEntry={-20}
            animateDelay={0.5}
            tap={{
              boxShadow: "0px 4px 5px -2px #3698D5",
              transition: { duration: 0.2 },
            }}
          >
            {cardInfoObj.edu.icon}
          </ModifiedCard>
          <ModifiedCard
            top={0}
            left={0}
            head={cardInfoObj.fullstack.head}
            para={cardInfoObj.fullstack.para}
            motionLeft={0}
            motionTop={0}
            topEntry={-20}
            animateDelay={0.65}
            shadow={"0px"}
            tap={{
              boxShadow: "0px 4px 5px -2px #3698D5",
              transition: { duration: 0.2 },
            }}
          >
            {cardInfoObj.fullstack.icon}
          </ModifiedCard>
        </div>
      </motion.div>
    </>
  );
}

export default SpaceBanner;
