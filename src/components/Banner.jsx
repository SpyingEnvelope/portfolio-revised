/* This is the main banner component. It displays the glowing circle with the profile image.*/

/* PROPS: None */

import { motion } from "motion/react";

import profile from "/profile.jpg";

const trapScaleStart = 1;
const trapScaleEnd = 1.1;

function Banner() {
  return (
    <>
      {/* These comments are here to experiment with a spotlight effect. They currently do not work and are WIP. */}
      {/* <div className="z-0 absolute m-0 p-0 top-0 left-0 rotate-60 sm:rotate-50 md:rotate-40 lg:rotate-28 xl:rotate-30 trapezoid bg-linear-to-r from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-50% opacity-20 h-90 w-120 sm:w-200 md:w-250 lg:w-350 xl:w-450 xl:h-120 " /> */}
      {/* <div className="z-0 absolute m-0 p-0 top-0 right-0 rotate-50 sm:rotate-50 md:rotate-40 lg:rotate-28 xl:rotate-30 trapezoid bg-linear-to-bl from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-50% opacity-100 h-90 w-120 sm:w-200 md:w-250 lg:w-350 xl:w-450 xl:h-120 " /> */}
      {/* <div className="absolute left-3/6 rotate-40 top-0 trapezoid bg-linear-to-r from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-90% opacity-20 h-50 w-50" /> */}
      {/* <div className="absolute left-3/8 rotate-310 top-0 trapezoid bg-linear-to-r from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-90% opacity-20 h-50 w-50"/> */}
      {/* <div className="absolute left-4/9 rotate-359 top-0 trapezoid bg-linear-to-r from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-90% opacity-20 h-50 w-50"/> */}
      <div className="relative w-full h-80 overflow-visible flex items-center justify-center z-20 mb-10">
        {/* outer white circle div. The glow class creates the glowing effect */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{duration: 0.8}}
          className="flex items-center justify-center absolute shadow-2xl shadow-white rounded-full glow"
        >
          {/* This div is used to contain all of the lines going around the middle circle. It was created as I needed 
          two different durations, one for how fast the lines spin and one for how quickly the go up and down in scale*/}
          <div className="w-40 h-40 rounded-full bg-gray-400 shadow-lg shadow-black/40 flex items-center justify-center">
            <motion.div
              className="absolute w-10 h-70 z-[-1]"
              initial={{ scale: 1 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {/* The divs below each represent a line around the middle circle */}
              <motion.div
                className="absolute w-10 h-70"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [trapScaleStart, trapScaleEnd] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "linear",
                  }}
                  className="trapezoid bg-linear-to-tr from-slate-800 from-30% via-stone-600 via-50% to-slate-950 to-50% w-10 h-70 rotate-0 absolute z-[-1] opacity-20"
                />
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [trapScaleStart, trapScaleEnd] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "linear",
                  }}
                  className="trapezoid bg-linear-to-tr from-slate-800 from-30% via-stone-600 via-50% to-slate-950 to-50% w-10 h-70 rotate-45 absolute z-[-1] opacity-20 "
                />
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [trapScaleStart, trapScaleEnd] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "linear",
                  }}
                  className="trapezoid bg-linear-to-tr from-slate-800 from-30% via-stone-600 via-50% to-slate-950 to-50% w-10 h-70 rotate-90 absolute z-[-1] opacity-20"
                />
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [trapScaleStart, trapScaleEnd] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "linear",
                  }}
                  className="trapezoid bg-linear-to-tr from-slate-800 from-30% via-stone-600 via-50% to-slate-950 to-50% w-10 h-70 rotate-135 absolute z-[-1] opacity-20"
                />
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [trapScaleStart, trapScaleEnd] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "linear",
                  }}
                  className="trapezoid bg-linear-to-tr from-slate-800 from-30% via-stone-600 via-50% to-slate-950 to-50% w-10 h-70 rotate-180 absolute z-[-1] opacity-20"
                />
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [trapScaleStart, trapScaleEnd] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "linear",
                  }}
                  className="trapezoid bg-linear-to-tr from-slate-800 from-30% via-stone-600 via-50% to-slate-950 to-50% w-10 h-70 rotate-225 absolute z-[-1] opacity-20"
                />
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [trapScaleStart, trapScaleEnd] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "linear",
                  }}
                  className="trapezoid bg-linear-to-tr from-slate-800 from-30% via-stone-600 via-50% to-slate-950 to-50% w-10 h-70 rotate-270 absolute z-[-1] opacity-20"
                />
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [trapScaleStart, trapScaleEnd] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "linear",
                  }}
                  className="trapezoid bg-linear-to-tr from-slate-800 from-30% via-stone-600 via-50% to-slate-950 to-50% w-10 h-70 rotate-315 absolute z-[-1] opacity-20"
                />
              </motion.div>
            </motion.div>
            {/* This div showcases the middle circle*/}
            <motion.div
              className="w-35 h-35 rounded-full z-20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 12%, rgba(255,255,255,0.02) 25%, rgba(0,0,0,0.06) 70%)",
              }}
            ><img src={profile} className="w-35 h-35 rounded-full aspect-square" /></motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Banner;
