/* This component generates the backgroudn stars seen in the banner .*/

import { motion } from "motion/react";
import Star from "./Star";

/* This function generates a specific number of star coordinates, stores them in a 2D array, and returns the array. It also generates a delay to be used for staggering when
the stars twinkle and the index to be used for the key prop.*/
function starCoordinates() {
  const coordArr = [];
  const delayStart = 0.5;

  for (let i = 0; i < 300; i++) {
    coordArr.push([
      Math.floor(Math.random() * 100) + "%",
      Math.floor(Math.random() * 100) + "%",
      i,
      delayStart + i * 0.5,
    ]);
  }

  return coordArr;
}


/* Returns the stary bacgkround JSX code 
PROPS: None*/ 
function StarryBackground() {
  const coordArr = starCoordinates();

  return (
    <motion.div className="w-screen h-full flex flex-col absolute">
      {coordArr.map((coords) => (
        <Star x={coords[0]} y={coords[1]} key={coords[2]} delay={coords[3]} />
      ))}
    </motion.div>
  );
}

export default StarryBackground;
