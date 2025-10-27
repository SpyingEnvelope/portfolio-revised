/* This component is where the main navigation will be stored. It should be easily accessible, and it
should include links to the home section, about me section, projects, and the contact me page.*/

// State will be used to deal with the visibility of the navigation bar and logo
import { useState } from "react";

// shadcn navigation menu imports
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

// Logo import
import logo from "/logo.png"

function Navigation({ screenWidth }) {
  // Visibility state for dealing for the background color of the menu
  const [navBarVisibility, setNavBarVisibility] = useState(true);

  // This variable is used to make the logo invisible on smaller screens
  let logoVisibility = "visible";

  // Make logo invisible if the screen width is under 430
  if (screenWidth < 430) {
    logoVisibility = "invisible";
  }

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

  /* The JSX component returned needed to use CSS flex to adjust to screen sizes easily. The justify-end
  div is used to display the logo while every other menu items is using justify-start. REMOVE MAX-WIDTH, xl:left-auto for the nav tag
  and set w-screen for the logo div to return to the previous settings */
  return (
    <header>
      {/*The div below is just for creating the blurry background to the navigation bar */}
      <div className={`fixed top-0 left-0 w-screen z-30 h-15 ${bgColor}`} />
      <nav
        className={`fixed top-0 left-0 xl:left-auto w-full flex ${logoVisibility == "invisible" ? "justify-center" : "justify-start"} h-15 items-center z-31 max-w-[1220px]`}
      >
        <div className={`flex justify-end flex-row w-full absolute right-5 ${logoVisibility}`}>
          <a href="#top">
            <img src={logo} width={70} />
          </a>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <div className="flex flex-row w-full justify-start space-x-5 px-3">
              <NavigationMenuItem>
                <NavigationMenuLink href="#home">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#projects">Projects</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}

export default Navigation;
