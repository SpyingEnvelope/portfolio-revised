/* This component displays all of the components that are meant to be of the header part of the website.
It displays the Banner and SlidingInfo components at the moment. */
import Banner from "./Banner";
import NewBanner from "./NewBanner";
import SlidingInfo from "./SlidingInfo";
import FadeInHeaderText from "./FadeInHeaderText";

/* PROPS: None */
function Header() {
  return (
    <>
      <NewBanner />
      <FadeInHeaderText />
      <SlidingInfo />
    </>
  );
}

export default Header;
