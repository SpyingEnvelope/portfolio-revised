/* This component is where the main navigation will be stored. It should be easily accessible, and it
should include links to the home section, about me section, projects, and the contact me page.*/

// State will be used to deal with the visibility of the navigation bar
import { useState } from "react";

// shadcn navigation menu imports
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

// This is a logo placeholder
import logo from "/vite.svg";

function Navigation() {
  // Visibility state for dealing for the background color of the menu
  const [navBarVisibility, setNavBarVisibility] = useState(true);
  const [logoVisibility, setLogoVisibility] = useState("visible");

  /* The bgColor variable only has a background color if
  navBarVisibility is false*/
  let bgColor = !navBarVisibility
    ? "bg-slate-900/[var(--bg-opacity)] [--bg-opacity:50%] backdrop-blur-md"
    : null;

  /* window.onscroll runs a function that changes the state of the navigation bar's visibility
  depending on what is the position of y. */
  window.onscroll = function () {
    if (window.scrollY == 0) {
      setNavBarVisibility(true);
    } else {
      setNavBarVisibility(false);
    }
  };

  /* This is used to fix an issue where the logo would portrude onto the menu items at screens with
  a width lower than 361 pixels. The logo's visibility is now set to invisible if the width of the screen
  is equal to or lower than 360. */
  window.onresize = function () {
    if (window.innerWidth <= 360) {
      setLogoVisibility("invisible");
    } else {
      setLogoVisibility("visible");
    }
  }

  /* The JSX component returned needed to use CSS flex to adjust to screen sizes easily. The justify-end
  div is used to display the logo while every other menu items is using justify-start. REMOVE MAX-WIDTH, xl:left-auto for the nav tag
  and set w-screen for the logo div to return to the previous settings */
  return (
    <header>
      <nav
        className={`fixed top-0 left-0 xl:left-auto ${bgColor} w-full flex justify-start h-15 items-center z-30 max-w-[1220px]`}
      >
        <div className={`flex justify-end flex-row w-full absolute right-5 ${logoVisibility}`}>
          <a href="#top">
            <img src={logo} />
          </a>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <div className="flex flex-row w-full justify-start space-x-5 px-3">
              <NavigationMenuItem>
                <NavigationMenuLink href="#home">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about">About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#projects">
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#footer">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}

export default Navigation;
