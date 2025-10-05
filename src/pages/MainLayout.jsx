/* I am currently experimenting with either using React Router to switch pages or with
animated navigation to different sections of the website using the id attribute. This is a component
that was used to test the process of using React Router for page switches.*/

import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function MainLayout() {
  return <>
    <Navigation />
    <main>
      <Outlet />
    </main>
  </>;
}

export default MainLayout;
