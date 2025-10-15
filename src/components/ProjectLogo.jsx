
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
          background: "#002A56",
          boxShadow: "0px 0px 0px #020618",
        },
        hover: { background: "#FFFFFF", boxShadow: "0px 0px 8px #FFFFFF" },
      }}
      transition={{ duration: 0.4 }}
      className="w-[97px] h-[97px] rounded-xl flex justify-center items-center"
    >
      {icon ? (
        <motion.div
          variants={{
            entry: { color: "#FFFFFF" },
            hover: { color: "#000000" },
          }}
          className="text-5xl"
        >
          {icon}
        </motion.div>
      ) : (
        <img src={image} />
      )}
    </motion.div>
  );
}

export default ProjectLogo;
