/* This component displays the Technology section of the about me section */

// Motion is used to display animations when the element enters the viewport
import { motion } from "motion/react";

// This displays every tech columns, e.g., Languages, Databases, etc...
import AboutTechSubsection from "./AboutTechSubsection";

// Language imports
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import AzuresqldatabasePlain from "devicons-react/icons/AzuresqldatabasePlain";
import { SiRstudioide } from "react-icons/si";

// Framework and libraries imports
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";
import { SiTensorflow } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { SiPandas } from "react-icons/si";
import { SiMongoose } from "react-icons/si";

// Database imports
import { DiMongodb } from "react-icons/di";
import { TbBrandMysql } from "react-icons/tb";
import { SiSqlite } from "react-icons/si";

// Tools imports
import { FcLinux } from "react-icons/fc";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5";
import NodejsPlain from "devicons-react/icons/NodejsPlain";
import { VscVscode } from "react-icons/vsc";
import { SiVim } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";

// Frameworks and libraries array
const frameIcons = [
  { icon: <SiExpress />, name: "Express", color: "text-stone-300" },
  { icon: <FaReact />, name: "React", color: "text-[#65dbfb]" },
  { icon: <BiLogoTailwindCss />, name: "Tailwind", color: "text-[#48aab5]" },
  { icon: <SiTensorflow />, name: "TensorFlow", color: "text-[#ff7908]" },
  { icon: <FaBootstrap />, name: "Bootstrap", color: "text-[#d3b3fc]" },
  { icon: <DiJqueryLogo />, name: "jQuery", color: "text-stone-300" },
  { icon: <SiPandas />, name: "Pandas", color: "text-[#1a0e59]" },
  { icon: <SiMongoose />, name: "Mongoose", color: "text-[#b21d23]" },
];

// Databases array
const dbIcons = [
  { icon: <DiMongodb />, name: "MongoDB", color: "text-[#199554]" },
  { icon: <TbBrandMysql />, name: "MySQL", color: "text-[#08658d]" },
  { icon: <SiSqlite />, name: "SQLite", color: "text-[#08425d]" },
];

// Languages array
const langIcons = [
  { icon: <FaJava />, name: "Java", color: "text-[#ed272b]" },
  { icon: <RiJavascriptFill />, name: "Javascript", color: "text-[#f0dc54]" },
  { icon: <FaPython />, name: "Python", color: "text-[#082c54]" },
  { icon: <BiLogoTypescript />, name: "TypeScript", color: "text-stone-300" },
  { icon: <FaHtml5 />, name: "HTML5", color: "text-[#f1692f]" },
  { icon: <IoLogoCss3 />, name: "CSS3", color: "text-[#3aabdf]" },
  { icon: <SiRstudioide />, name: "R", color: "text-[#33485c]" },
  {
    icon: <AzuresqldatabasePlain size={50} />,
    name: "SQL",
    color: "text-blue",
  },
];

// Tools array
const toolsIcons = [
  { icon: <FcLinux />, name: "Linux", color: "text-[#ed272b]" },
  { icon: <FaGitAlt />, name: "Git", color: "text-[#df513c]" },
  { icon: <IoLogoDocker />, name: "Docker", color: "text-[#109fec]" },
  { icon: <VscVscode />, name: "VS Code", color: "text-[#087ecd]" },
  { icon: <SiVim />, name: "Vim", color: "text-[#199554]" },
  { icon: <SiIntellijidea />, name: "IDEA", color: "text-stone-300" },
  {
    icon: <NodejsPlain size={50} />,
    name: "Node.js",
    color: "text-white",
  },
];

/* The function exported as a component.
PROPS: None */
function AboutTechnology() {
  return (
    <motion.div
      variants={{invisible: {y: -40, opacity: 0}, visible: {y: 0, opacity: 1}}}
      initial="invisible"
      whileInView="visible"
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center"
    >
      <h2 className="text-2xl text-white/75 tracking-widest reg-instrument-sans">
        TECHNOLOGY
      </h2>
      <div className="flex flex-row w-full justify-evenly flex-wrap shrink-0">
        <AboutTechSubsection title={"Languages"} tech={langIcons} delay={0.5} />
        <AboutTechSubsection
          title={"Frameworks & Libraries"}
          tech={frameIcons}
          delay={0.6}
        />
        <AboutTechSubsection title={"Databases"} tech={dbIcons} delay={0.7} />
        <AboutTechSubsection title={"Tools"} tech={toolsIcons} delay={0.8} />
      </div>
    </motion.div>
  );
}

export default AboutTechnology;
