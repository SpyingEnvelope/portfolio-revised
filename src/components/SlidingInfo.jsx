/*This is the component that displays the sliding marquee. It uses devicons to display icons. */
import Marquee from "react-fast-marquee";
import devArr from "@/utils/devArr";

/*The component uses the Marquee component provided by Fast React Marquee. Into the marquee,
a list is passed for easy management of icons displayed. */

/* PROPS: None */
function SlidingInfo() {
  return (
<Marquee pauseOnClick={true} pauseOnHover={true}>
      <ul className="flex flex-row text-sm md:text-lg">
          {devArr.map((devObj) => <li key={devObj.name} className="m-4 flex flex-col justify-center items-center">{devObj.icon}{devObj.name}</li>)}
      </ul>
    </Marquee>
  );
}

export default SlidingInfo;
