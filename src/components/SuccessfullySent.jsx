import { motion } from "motion/react";

function SuccessfullySent({ width, height }) {
  return (
    <motion.div
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: -28, opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="relative flex justify-center items-center w-full"
    >
      <motion.div
        transition={{
          repeat: Infinity,
          duration: 2,
          repeatType: "reverse",
          ease: "easeOut",
        }}
        className={`flex flex-col justify-center items-center w-full h-[664px] reg-instrument-sans z-15`}
      >
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1}}
          transition={{delay: 2, duration: 1}}
          className="mb-5 text-2xl"
        >
          Message sent!
        </motion.p>
        <motion.div
          initial={{ boxShadow: "0 0 20px 1px #f0f0f0", opacity: 0.8, y: 0 }}
          animate={{ boxShadow: "0 0 10px 1px #f0f0f0", opacity: 0.8, y: 10 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="relative w-40 h-40 bg-[#f0f0f0] rounded-full border-2 border-[#a1a5aa] overflow-hidden"
        >
          <div className="relative left-10 rotate-45 w-full h-full bg-white rounded-full opacity-100" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SuccessfullySent;
