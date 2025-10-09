/* This component handles the background typing process for the banner. */

import { motion } from "motion/react";

const delayStart = 0.3;

function BackgroundType() {
  return (
<motion.div className="absolute md:top-7 w-full md:w-[85%] h-full flex flex-col opacity-50 blur-xs">
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
  );
}

export default BackgroundType;
