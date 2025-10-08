import Marquee from "react-fast-marquee";
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import { JavascriptOriginal } from "devicons-react";
import { TypescriptOriginal } from "devicons-react";
import { JavaOriginal } from "devicons-react";
import { Html5Original } from "devicons-react";
import { Css3Original } from "devicons-react";
import { RstudioOriginal } from "devicons-react";
import { MysqlOriginal } from "devicons-react";
import { AzuresqldatabaseOriginal } from "devicons-react";
import { MongodbOriginal } from "devicons-react";
import { SqliteOriginal } from "devicons-react";
import { ReactOriginal } from "devicons-react";
import { GitOriginal } from "devicons-react";
import { BootstrapOriginal } from "devicons-react";
import { ExpressOriginal } from "devicons-react";
import { PandasOriginal } from "devicons-react";
import { NumpyOriginal } from "devicons-react";
import { TailwindcssOriginal } from "devicons-react";
import { TensorflowOriginal } from "devicons-react";
import { NodejsOriginal } from "devicons-react";


const iconSize = "2.5em";

const devArr = [
    {name: "JavaScript", icon: <JavascriptOriginal size={iconSize}/>},
    {name: "Java", icon: <JavaOriginal size={iconSize} />},
    {name: "Python", icon: <PythonOriginal size={iconSize} />},
    {name: "TypeScript", icon: <TypescriptOriginal size={iconSize} />},
    {name: "HTML", icon: <Html5Original size={iconSize} />},
    {name: "CSS", icon: <Css3Original size={iconSize} />},
    {name: "R", icon: <RstudioOriginal size={iconSize} />},
    {name: "SQL", icon: <AzuresqldatabaseOriginal size={iconSize} />},
    {name: "MySQL", icon: <MysqlOriginal size={iconSize} />},
    {name: "MongoDB", icon: <MongodbOriginal size={iconSize} />},
    {name: "SQLite", icon: <SqliteOriginal size={iconSize} />},
    {name: "React", icon: <ReactOriginal size={iconSize} />},
    {name: "Git", icon: <GitOriginal size={iconSize} />},
    {name: "Tailwind", icon: <TailwindcssOriginal size={iconSize} />},
    {name: "Bootstrap", icon: <BootstrapOriginal size={iconSize} />},
    {name: "Express", icon: <ExpressOriginal size={iconSize} />},
    {name: "Node.js", icon: <NodejsOriginal size={iconSize} />},
    {name: "TensorFlow", icon: <TensorflowOriginal size={iconSize} />},
    {name: "Pandas", icon: <PandasOriginal size={iconSize} />},
    {name: "NumPy", icon: <NumpyOriginal size={iconSize} />},
]

function SlidingInfo() {
  return (
    <Marquee>
      <ul className="flex flex-row text-xl">
          {devArr.map((devObj) => <li className="m-4 flex flex-col justify-center items-center">{devObj.icon}{devObj.name}</li>)}
      </ul>
    </Marquee>
  );
}

export default SlidingInfo;
