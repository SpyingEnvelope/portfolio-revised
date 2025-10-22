/* This component displays the large card with information in it and the orbiting planets.*/

// Motion is used to animate stars, planets, and entry animations
import { motion } from "motion/react";

/* The fullStar import is an array filled with Star components to display in the background */
import { fullStar } from "@/utils/starUtils";

/* The function exported as a component
PROPS:
delay: NUMBER used to state how many seconds of delay should exist before the planet animation starts.
right: BOOLEAN used to decide what type of animation to play when the card enters the viewport.
mobileSize: STRING used to size the card dynamically on mobile screens
children: What to display in the infor card itself */
function AboutInfoCard({ delay, right, mobileSize, children }) {
  return (
    <motion.div
      initial={right ? { x: -40, opacity: 0 } : { x: 40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`relative ${mobileSize} md:mr-8 md:h-[300px] md:w-196
       rounded-2xl bg-black border-2 border-stone-500 reg-instrument-sans flex ${
         right ? "justify-start" : "justify-end"
       } items-center overflow-hidden `}
    >
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 overflow-hidden flex items-center justify-center ${
          right ? `md:rotate-180 md:rotate-x-180` : ""
        }`}
      >
        {/* The array used to display stars in the background */}
        {fullStar}
        {/* This div contains one of the planets that are orbiting the sun. The first div, shown here below,
        is also used to draw a line showing the trajectory of the orbiting planet. */}
        <div
          className={`w-[300px] h-[300px] rounded-full border-1 border-white/75 absolute md:-left-30`}
        >
          {/* This div is the parent of the planet div. It copies its parent div; however, it does not
          draw a line. Instead, it is used to rotate the planet without causing the trajectory
          line itself to rotate, as the animation was visible without it. */}
          <motion.div
            initial={{ rotate: "90deg" }}
            animate={{ rotate: "450deg" }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "linear",
              delay: delay,
            }}
            className="absolute top-0 left-0 right-0 bottom-0 rounded-full rotate-100"
          >
            {/* This div displays the largest planet, shown as orange in the orbiting animation. */}
            <div className="w-[40px] h-[40px] bg-amber-600 rounded-full absolute right-0 top-15" />
          </motion.div>
        </div>
        {/* See documentation above for explanation about this outer div. This div is used to display
        the second largest plnet orbitting, shown as blue in the animation. */}
        <div
          className={`w-[200px] h-[200px] rounded-full border-1 border-white/75 absolute md:-left-20`}
        >
          <motion.div
            initial={{ rotate: "0deg" }}
            animate={{ rotate: "360deg" }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "linear",
              delay: delay,
            }}
            className="absolute top-0 left-0 right-0 bottom-0 rounded-full"
          >
            {/* This div displays the blue planet itself. */}
            <div className="w-[20px] h-[20px] bg-blue-600 rounded-full absolute top-11" />
          </motion.div>
        </div>
        {/* See documentation above for explanation about this outer div. This div is used to display
        the smallest orbitting planet, shown as red in the animation. */}
        <div
          className={`w-[110px] h-[110px] rounded-full border-1 border-white/75 absolute md:-left-12`}
        >
          <motion.div
            initial={{ rotate: "0deg" }}
            animate={{ rotate: "360deg" }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
              delay: delay,
            }}
            className="absolute top-0 left-0 right-0 bottom-0 rounded-full rotate-160"
          >
            {/* This div displays the red planet itself. */}
            <div className="w-[20px] h-[20px] bg-red-600 rounded-full absolute top-3 right-0" />
          </motion.div>
          {/* This div displays the sun that is being orbitted. It use Motion to show a 
          glowing animation. */}
          <motion.div
            initial={{ boxShadow: "0 0 10px 1px #fef997" }}
            animate={{ boxShadow: "0 0 15px 1px #fef997" }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
              repeatType: "reverse",
            }}
            className={`w-[60px] h-[60px] rounded-full bg-yellow-200 absolute top-6 left-6 md:left-3 md:top-6`}
          ></motion.div>
        </div>
      </div>
      {/* This div displays all of the children elements. */}
      <div
        className={`w-[100%] md:w-[52%] lg:w-[65%] xl:w-[70%] text-center md:text-left
        } text-md block p-5 md:p-0 md:m-5
        } backdrop-blur-sm md:backdrop-blur-none z-20 text-base md:text-sm lg:text-base`}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default AboutInfoCard;
