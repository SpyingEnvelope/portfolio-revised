/* Import statement for motion, used to animate the red light and the signals */
import { motion } from "motion/react";

/* This component draws the small satellite that orbits the planet at the bottom of the web application.

PROPS: None */
function Satellite() {
  return (
    <div className="w-20 h-10 relative left-20 rotate-45 scale-80">
      {/* This div draws the middle line */}
      <div className="relative right-7 top-14 flex flex-row">
        {/* These divs draws the two smaller lines left of the middle line */}
        <div className="relative bottom-4 flex flex-col space-y-2 bg-stone-500">
          <div className="w-5 h-2 bg-blue-500" />
          <div className="w-5 h-2 bg-blue-500" />
        </div>
        {/* This div draws the middle line itself */}
        <div className="relative bottom-2 bg-stone-500 w-10 h-2 -z-1" />
        <div className="relative bottom-4 flex flex-col space-y-2 bg-stone-500">
          {/* These divs draws the two smaller lines right of the middle line */}
          <div className="w-5 h-2 bg-blue-500" />
          <div className="w-5 h-2 bg-blue-500" />
        </div>
      </div>
      {/* This div draws the middle rectangle with the two windows */}
      <div className="border-1 border-stone-500 h-10 w-6 bg-stone-500 flex flex-col items-center justify-evenly z-6">
        <div className="w-2 h-2 bg-black" />
        <div className="w-2 h-2 bg-black z-6" />
      </div>
      {/* This div draws the rounded dish at the top of the satellite */}
      <div className="relative left-0.5 w-5 h-3 bg-stone-800 rounded-t-full" />
      {/* This div draws the line coming out of the rounded dish */}
      <motion.div
        initial={{ backgroundColor: "#ef4444" }}
        animate={{ backgroundColor: "#ffffff" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.3 }}
        className="relative left-2.5 h-2 w-1"
      />
      {/* These two divs draw the signal lines coming out of the satellite */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{opacity: 0}}
        transition={{repeat: Infinity, duration: 0.2, repeatDelay: 0.4}}
        className="relative left-1.5 -top-0.5 border-b-3 border-white h-3 w-3 rounded-full"
      />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{opacity: 0}}
        transition={{repeat: Infinity, duration: 0.2, repeatDelay: 0.4}}
        className="relative left-0.5 -top-3 border-b-3 border-white h-5 w-5 rounded-full"
      />
    </div>
  );
}

export default Satellite;
