import Marquee from "react-fast-marquee";
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import PythonOriginalWordmark from 'devicons-react/icons/PythonOriginalWordmark';

function SlidingInfo() {
  return (
    <Marquee pauseOnHover={true}>
      <ul className="flex flex-row space-x-10 text-xl opacity-60">
        <li>JavaScript</li>
        <li>Java</li>
        <li className="flex flex-row">
          <PythonOriginalWordmark /> Python
        </li>
        <li>HTML</li>
        <li>CSS</li>
        <li>R</li>
        <li>SQL</li>
        <li>Tailwind</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>MySQL</li>
        <li>SQLite3</li>
      </ul>
    </Marquee>
  );
}

export default SlidingInfo;
