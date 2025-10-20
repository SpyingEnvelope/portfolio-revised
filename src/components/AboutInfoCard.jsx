import { motion } from "motion/react";
import { fullStar } from "@/utils/starUtils";

function AboutInfoCard({ delay, right, mobileSize }) {
  return (
    <motion.div
      initial={right ? { x: -40, opacity: 0 } : { x: 40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`relative ${mobileSize} md:mr-8 md:h-[372px] md:w-196
       rounded-2xl bg-black border-2 border-stone-500 reg-instrument-sans flex ${
         right ? "justify-start" : "justify-end"
       } items-center overflow-hidden `}
    >
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 overflow-hidden flex items-center justify-center ${
          right ? `md:rotate-180 md:rotate-x-180` : ""
        }`}
      >
        {fullStar}
        <div
          className={`w-[300px] h-[300px] rounded-full border-1 border-white/75 absolute md:-left-30`}
        >
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
            <div className="w-[40px] h-[40px] bg-amber-600 rounded-full absolute right-0 top-15" />
          </motion.div>
        </div>
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
            <div className="w-[20px] h-[20px] bg-blue-600 rounded-full absolute top-11" />
          </motion.div>
        </div>
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
            <div className="w-[20px] h-[20px] bg-red-600 rounded-full absolute top-3 right-0" />
          </motion.div>
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

      <p
        className={`w-[100%] md:w-[52%] lg:w-[65%] xl:w-[70%] text-center md:text-left
        } text-md block p-5 md:p-0 md:m-5
        } backdrop-blur-sm md:backdrop-blur-none z-20`}
      >
        Hi, I’m Gad Cooper, a full-stack developer passionate about building
        software that empowers people and organizations. I value personal growth
        and continuous learning, which led me to reignite my passion for
        programming in 2019 . Shortly after, I began pursuing a Bachelor Degree
        in Computer Science. I completed my studies in 2025, graduating with
        highest academic honors.
        <br />
        <br /> I try to create every software with love and care. In my off
        time, I enjoy spending time with my two amazing kids, hike, and play
        video games, often kid-friendly ones.
      </p>
    </motion.div>
  );
}

export default AboutInfoCard;
