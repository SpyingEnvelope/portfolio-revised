/* This component displays all of the components that are meant to be of the header part of the website.
It displays the Banner and SlidingInfo components at the moment. */
import SlidingInfo from "./SlidingInfo";
import FadeInHeaderText from "./FadeInHeaderText";
import SpaceBanner from "./SpaceBanner";

/* PROPS: None */
function Header() {
  // animateDelay will be used to delay the animation on smaller screens
  let animateDelay;

  /*If a screen is small, the animation delay for the fadeInHeaderText component
   is increased from 0.8 to 0.9 */
  if (screen.width < 768) {
    animateDelay=0.9;
  }

  return (
    <>
      <SpaceBanner />
      <FadeInHeaderText animDelay={animateDelay} />
      <SlidingInfo />
    </>
  );
}

export default Header;
