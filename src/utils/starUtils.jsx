/* This utility file outputs a star array to be used in each card */
import Star from "@/components/Star";

const starArray = [];

for (let i = 0; i < 150; i++) {
  starArray.push(
    <Star
      x={Math.floor(Math.random() * 95) + "%"}
      y={Math.floor(Math.random() * 63) + "%"}
      key={i + "halfstar"}
      delay={i * 0.03}
    />
  );
}

export const fullStar = [];

for (let i = 0; i < 150; i++) {
  fullStar.push(
    <Star
      x={Math.floor(Math.random() * 100) + "%"}
      y={Math.floor(Math.random() * 100) + "%"}
      key={i + "fullstar"}
      delay={i * 0.03}
    />
  );
}

export default starArray;