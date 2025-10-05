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
  div is used to display the logo while every other menu items is using justify-start.*/
  return (
    <header>
      <nav
        className={`fixed top-0 left-0  ${bgColor} w-full flex justify-start h-15 items-center`}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <div className="flex flex-row w-screen justify-start space-x-5 px-5">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#home"
                >
                  Home
                </NavigationMenuLink>
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
              <div className="w-screen flex justify-end px-2">
                <NavigationMenuItem>
                  <a href="#top">
                    <img src={logo} />
                  </a>
                </NavigationMenuItem>
              </div>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}

export default Navigation;
