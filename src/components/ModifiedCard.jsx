/* This component displays the cards shown around the profile picture in the banner. It uses
React Icons to display a profile image, similar to those found in tweets. Alternatively,
it can also take an image instead, which would be displayed with ShadCN's Avatar component. */

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdVerified } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { motion } from "motion/react";

// The array used to store stars
const ratingStarArray = [];

// The for loop used to generate the stars
for (let i = 0; i < 5; i++) {
  ratingStarArray.push(<IoMdStar className="text-blue-400" key={i + "star"} />);
}

/* The render section of the component.
PROPS: 
image: STR The image file path for the image to be used as an avatar if a child was not passed into the component
fallback: STR a fallback description for the image used
para: STR the text that appears in the body of the card
head: INT the text that appears next to the image/icon 
left: INT the left offset when the component initially renders
top: INT the top offset when the component initially renders
motionLeft: INT the left offset when the component is hovered over 
motionTop: INT the top offset when the component is hovered over 
tap: OBJECT the framer motion object used to animate when the card is tapped
shadow: STR a box shadow string used to set the boxShadow property when the hovering state is triggered
        default value is "0px 4px 5px -2px #FE9A00"
topEntry: INT the top offset to be used when the component first appears in the DOM
leftEntry: INT the left offset to be used when the component first appears in the DOM
animateDelay: INT how much to delay the animation. Default value is 0.8
children: REACTNODE ICON COMPONENT The child passed into the component */
function ModifiedCard({
  image,
  fallback,
  para,
  head,
  left,
  top,
  motionLeft,
  motionTop,
  tap,
  shadow,
  topEntry,
  leftEntry,
  animateDelay,
  children,
}) {
  return (
    <motion.div
      className="relative flex flex-col w-90 h-45 bg-[#171B3B] rounded-xl"
      variants={{
        idle: { x: left, y: top, opacity: 1 },
        hovering: {
          x: motionLeft,
          y: motionTop,
          boxShadow: shadow ?? "0px 4px 5px -2px #3698D5",
        },
      }}
      initial={{
        x: leftEntry ?? left,
        y: topEntry ?? top,
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        x: leftEntry ? left : undefined,
        y: topEntry ? top : undefined,
        transition: { delay: animateDelay ?? 0.8, duration: 0.5 },
      }}
      whileTap={tap}
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
