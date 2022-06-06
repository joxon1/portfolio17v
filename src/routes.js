import {
  ABOUT_ROUTE,
  SKILLS,
  PROJECTS,
  CONTACT,
  HOME_ROUTE
} from "./utils/const";

import About from "./pages/About";
import MySkills from "./pages/MySkills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

export const blogRoutes = [
  {
    path: ABOUT_ROUTE,
    Component: About
  },
  {
    path: SKILLS,
    Component: MySkills
  },
  {
    path: PROJECTS,
    Component: Work
  },
  {
    path: CONTACT,
    Component: Contact
  }
];
