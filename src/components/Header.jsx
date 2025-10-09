/* This component displays all of the components that are meant to be of the header part of the website.
It displays the Banner and SlidingInfo components at the moment. */
import Banner from "./Banner";
import TypingBanner from "./TypingBanner";
import SlidingInfo from "./SlidingInfo";
import FadeInHeaderText from "./FadeInHeaderText";
import SpaceBanner from "./SpaceBanner";

/* PROPS: None */
function Header() {
  return (
    <>
      <SpaceBanner />
      <FadeInHeaderText />
      <SlidingInfo />
    </>
  );
}

export default Header;
