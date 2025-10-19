import AboutInfoCard from "./AboutInfoCard";
import AboutLogoCard from "./AboutLogoCard";

function AboutRow({ right, delay }) {
  return (
    <div className={`flex ${right? "flex-row-reverse" : "flex-row"} justify-center mt-15 mb-40 sm:mb-20 sm:space-x-8 items-center flex-wrap sm:flex-nowrap`}>
      <AboutLogoCard right={right} />
      <AboutInfoCard delay={delay} right={right} />
    </div>
  );
}

export default AboutRow;
