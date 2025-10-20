import AboutInfoCard from "./AboutInfoCard";
import AboutLogoCard from "./AboutLogoCard";

function AboutRow({ right, delay, image, mobileSizing, children}) {
  const mobileSize = mobileSizing ? "w-full" : "w-[392px]";

  return (
    <>
      <div
        className={`flex ${right ? "flex-row-reverse" : "flex-row"} justify-center mt-15 mb-20 md:space-x-8 items-center flex-wrap md:flex-nowrap shrink-0 md:shrink`}
      >
        <AboutLogoCard right={right} image={image} mobileSize={mobileSize} />
        <AboutInfoCard delay={delay} right={right} mobileSize={mobileSize} >{children}</AboutInfoCard>
      </div>
    </>
  );
}

export default AboutRow;
