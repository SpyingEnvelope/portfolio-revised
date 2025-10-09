import { motion } from "motion/react";

import profile from "/profile.jpg";

const trapScaleStart = 1;
const trapScaleEnd = 1.1;
const delayStart = 0.3;

function NewBanner() {
  return (
    <>
      {/* These comments are here to experiment with a spotlight effect. They currently do not work and are WIP. */}
      {/* <div className="z-0 absolute m-0 p-0 top-0 left-0 rotate-60 sm:rotate-50 md:rotate-40 lg:rotate-28 xl:rotate-30 trapezoid bg-linear-to-r from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-50% opacity-20 h-90 w-120 sm:w-200 md:w-250 lg:w-350 xl:w-450 xl:h-120 " /> */}
      {/* <div className="z-0 absolute m-0 p-0 top-0 right-0 rotate-50 sm:rotate-50 md:rotate-40 lg:rotate-28 xl:rotate-30 trapezoid bg-linear-to-bl from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-50% opacity-100 h-90 w-120 sm:w-200 md:w-250 lg:w-350 xl:w-450 xl:h-120 " /> */}
      {/* <div className="absolute left-3/6 rotate-40 top-0 trapezoid bg-linear-to-r from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-90% opacity-20 h-50 w-50" /> */}
      {/* <div className="absolute left-3/8 rotate-310 top-0 trapezoid bg-linear-to-r from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-90% opacity-20 h-50 w-50"/> */}
      {/* <div className="absolute left-4/9 rotate-359 top-0 trapezoid bg-linear-to-r from-slate-950 from-10% via-stone-600 via-30% to-slate-950 to-90% opacity-20 h-50 w-50"/> */}
      <div className="relative w-full h-80 overflow-visible flex items-center justify-center z-20 mb-10">
        <motion.div className="absolute md:top-7 w-full md:w-[85%] h-[70%] md:h-full flex flex-col opacity-50 blur-xs">
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delayStart }}
            className="rounded-full left-20 top-15 w-20 h-2 bg-cyan-700 mb-5"
          />
          <motion.div className="mb-5 flex flex-row">
            <motion.div className="rounded-full left-43 top-15 w-20 h-2 bg-slate-950 mr-3" />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 0.05 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-blue-800 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 0.15 }}
              className="rounded-full left-43 top-15 w-50 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 0.25 }}
              className="rounded-full left-43 top-15 w-25 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 0.35 }}
              className="rounded-full left-43 top-15 w-15 h-2 bg-amber-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 0.45 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 0.55 }}
              className="rounded-full left-43 top-15 w-15 h-2 bg-amber-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 0.65 }}
              className="rounded-full left-43 top-15 w-30 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 0.75 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-blue-800 mr-3"
            />
          </motion.div>
          <motion.div className="mb-5 flex flex-row">
            <motion.div className="rounded-full left-43 top-15 w-20 h-2 bg-slate-950 mr-3" />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 0.95 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-blue-800 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 1.05 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-green-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 1.15 }}
              className="rounded-full left-43 top-15 w-25 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 1.25 }}
              className="rounded-full left-43 top-15 w-15 h-2 bg-red-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 1.35 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 1.45 }}
              className="rounded-full left-43 top-15 w-15 h-2 bg-red-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 1.55 }}
              className="rounded-full left-43 top-15 w-30 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 1.65 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-blue-800 mr-3"
            />
          </motion.div>
          <motion.div className="mb-5 flex flex-row">
            <motion.div className="rounded-full left-43 top-15 w-20 h-2 bg-slate-950 mr-3" />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 1.85 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-blue-800 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 1.95 }}
              className="rounded-full left-43 top-15 w-15 h-2 bg-red-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 2.05 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 2.15 }}
              className="rounded-full left-43 top-15 w-15 h-2 bg-red-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 2.25 }}
              className="rounded-full left-43 top-15 w-5 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 2.35 }}
              className="rounded-full left-43 top-15 w-15 h-2 bg-green-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 2.45 }}
              className="rounded-full left-43 top-15 w-30 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 2.55 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-blue-800 mr-3"
            />
          </motion.div>
          <motion.div className="mb-5 flex flex-row">
            <motion.div className="rounded-full left-43 top-15 w-20 h-2 bg-slate-950 mr-3" />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 2.75 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-blue-800 mr-3"
            />
          </motion.div>
          <motion.div className="mb-5 flex flex-row">
            <motion.div className="rounded-full left-43 top-15 w-20 h-2 bg-slate-950 mr-3" />
            <motion.div className="rounded-full left-43 top-15 w-20 h-2 bg-slate-950 mr-3" />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 3.05 }}
              className="rounded-full left-43 top-15 w-15 h-2 bg-green-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 3.15 }}
              className="rounded-full left-43 top-15 w-25 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 3.25 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 3.35 }}
              className="rounded-full left-43 top-15 w-30 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 3.45 }}
              className="rounded-full left-43 top-15 w-15 h-2 bg-red-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 3.55 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 3.65 }}
              className="rounded-full left-43 top-15 w-15 h-2 bg-red-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 3.75 }}
              className="rounded-full left-43 top-15 w-17 h-2 bg-green-400 mr-3"
            />
          </motion.div>
          <motion.div className="mb-5 flex flex-row">
            <motion.div className="rounded-full left-43 top-15 w-20 h-2 bg-slate-950 mr-3" />
            <motion.div className="rounded-full left-43 top-15 w-20 h-2 bg-slate-950 mr-3" />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 4.05 }}
              className="rounded-full left-43 top-15 w-15 h-2 bg-green-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 4.15 }}
              className="rounded-full left-43 top-15 w-30 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 4.25 }}
              className="rounded-full left-43 top-15 w-18 h-2 bg-amber-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 4.35 }}
              className="rounded-full left-43 top-15 w-40 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 4.45 }}
              className="rounded-full left-43 top-15 w-19 h-2 bg-amber-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 4.55 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 4.65 }}
              className="rounded-full left-43 top-15 w-15 h-2 bg-red-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 4.75 }}
              className="rounded-full left-43 top-15 w-17 h-2 bg-green-400 mr-3"
            />
          </motion.div>
          <motion.div className="mb-5 flex flex-row">
            <motion.div className="rounded-full left-43 top-15 w-20 h-2 bg-slate-950 mr-3" />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 4.95 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-blue-800 mr-3"
            />
          </motion.div>
          <motion.div className="mb-5 flex flex-row">
            <motion.div className="rounded-full left-43 top-15 w-20 h-2 bg-slate-950 mr-3" />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 5.15 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-blue-800 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 5.25 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-amber-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 5.35 }}
              className="rounded-full left-43 top-15 w-30 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 5.45 }}
              className="rounded-full left-43 top-15 w-15 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 5.55 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-amber-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 5.65 }}
              className="rounded-full left-43 top-15 w-5 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 5.75 }}
              className="rounded-full left-43 top-15 w-15 h-2 bg-green-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 5.85 }}
              className="rounded-full left-43 top-15 w-30 h-2 bg-stone-400 mr-3"
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayStart + 5.95 }}
              className="rounded-full left-43 top-15 w-20 h-2 bg-blue-800 mr-3"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delayStart + 6.15 }}
            className="rounded-full left-20 top-15 w-20 h-2 bg-cyan-700 mb-5"
          />
        </motion.div>
        {/* outer white circle div. The glow class creates the glowing effect */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center absolute rounded-full"
        >
          {/* This div is used to contain all of the lines going around the middle circle. It was created as I needed 
          two different durations, one for how fast the lines spin and one for how quickly the go up and down in scale*/}
          <div className="w-40 h-40 rounded-full bg-gray-800 shadow-lg shadow-black/40 flex items-center justify-center">
            {/* This div showcases the middle circle*/}
            <motion.div
              className="w-35 h-35 rounded-full z-20"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 12%, rgba(255,255,255,0.02) 25%, rgba(0,0,0,0.06) 70%)",
              }}
            >
              <img
                src={profile}
                className="w-35 h-35 rounded-full aspect-square"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default NewBanner;
