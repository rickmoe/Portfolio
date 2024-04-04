import Home from "./home/Home";
import Education from "./education/Education";
import Robotics from "./robotics/Robotics";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

const pages = [
  {
    route: "/",
    label: "Home",
    component: Home,
  },
  {
    route: "/education",
    label: "Education",
    component: Education,
  },
  {
    route: "/skills",
    label: "Skills",
    component: Skills,
  },
  {
    route: "/projects",
    "optional-params": "/:tool?",
    label: "Projects",
    component: Projects,
  },
  {
    route: "/robotics",
    label: "Robotics",
    component: Robotics,
  },
  {
    route: "/contact",
    label: "Contact Me",
    component: Contact,
  },
];

export default pages;
