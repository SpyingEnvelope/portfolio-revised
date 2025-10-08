/* This component displays all of the components that are meant to be of the header part of the website.
It displays the Banner and SlidingInfo components at the moment. */

import Banner from "./Banner";
import SlidingInfo from "./SlidingInfo";

/* PROPS: None */
function Header() {
 return <>
    <Banner />
    <SlidingInfo />
 </>
}

export default Header;