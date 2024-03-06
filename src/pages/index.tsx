import Home from "./home";
import Education from "./education";
import Robotics from "./robotics";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";

const pages = [
  {
    route: "/",
    label: "Home",
    element: <Home />,
  },
  {
    route: "/education",
    label: "Education",
    element: <Education />,
  },
  {
    route: "/robotics",
    label: "Robotics",
    element: <Robotics />,
  },
  {
    route: "/skills",
    label: "Skills",
    element: <Skills />,
  },
  {
    route: "/projects",
    label: "Projects",
    element: <Projects />,
  },
  {
    route: "/contact",
    label: "Contact Me",
    element: <Contact />,
  },
];

export default pages;
