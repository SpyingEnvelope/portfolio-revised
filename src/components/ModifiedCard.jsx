import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdVerified } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { motion } from "motion/react";
import { FcAutomotive } from "react-icons/fc";

const ratingStarArray = [];

for (let i = 0; i < 5; i++) {
  ratingStarArray.push(<IoMdStar className="text-blue-400" />);
}

function ModifiedCard({
  image,
  fallback,
  para,
  head,
  left,
  top,
  motionLeft,
  motionTop,
  children,
}) {
  return (
    <motion.div
      className="relative flex flex-col w-90 h-45 bg-[#171B3B] rounded-xl"
      variants={{
        idle: { x: left, y: top, opacity: 0 },
        hovering: { x: motionLeft, y: motionTop, boxShadow: "0px 4px 5px -2px #FE9A00" },
      }}
      animate={{opacity: 1, transition: {delay: 0.8, duration: 0.5}}}
      transition={{ duration: 0.3, ease: "linear" }}
    >
      <div className="flex flex-row space-x-3 ml-3 mt-5 mb-3">
        {children ? (
          children
        ) : (
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        )}

        <h3>{head}</h3>
        <MdVerified className="text-blue-400 text-sm relative right-2 top-1" />
      </div>
      <div className="flex flex-rowtext-left ml-3 text-left leading-6">
        <p className="h-20 block">{para}</p>
      </div>
      <div className="flex flex-row ml-3">{ratingStarArray}</div>
    </motion.div>
  );
}

export default ModifiedCard;
