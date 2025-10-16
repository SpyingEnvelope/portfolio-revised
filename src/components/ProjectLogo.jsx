
/* This component displays the logo shown above the project card. */
import { motion } from "motion/react";

/* The component itself that is exported. Used in ProjectCard.jsx
PROPS:
    icon: REACTNODE the icon to display as the logo
    image: REACT IMAGE IMPORT the image to display if an icon is not provided. */
function ProjectLogo({ icon, image }) {
  return (
    <motion.div
      variants={{
        entry: {
          boxShadow: "0px 0px 0px #020618",
        },
        hover: {boxShadow: "0px 0px 8px #FFFFFF" },
      }}
      transition={{ duration: 0.4 }}
      className="w-[97px] h-[97px] bg-[#002A56] rounded-xl flex justify-center items-center"
    >
      {icon ? (
        <motion.div
          className="text-5xl"
        >
          {icon}
        </motion.div>
      ) : (
        <img src={image} className="h-[50px] w-[50px]" />
      )}
    </motion.div>
  );
}

export default ProjectLogo;
