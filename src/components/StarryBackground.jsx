import { motion } from "motion/react";
import Star from "./Star";

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
