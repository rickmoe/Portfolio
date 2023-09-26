import { Link } from "react-router-dom";
import "./index.css";

const makeList = (list: string[]) => (
  <ul>
    {list.map((tool) => (
      <li key={tool}>
        <Link to={`/projects?tool-filter=${tool}`}>{tool}</Link>
      </li>
    ))}
  </ul>
);

const languageList = makeList([
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "C#",
  "C++",
  "C",
  "SQL",
  "HTML",
  "CSS",
  "Rust",
  "R",
]);
const databaseList = makeList(["MySQL", "MongoDB", "PostgreSQL", "Firebase"]);
const webList = makeList(["React", "Node.js", "Express", "Flask"]);
const libraryList = makeList(["Numpy", "Pandas", "OpenCV"]);
const miscList = makeList([
  "Linux",
  "Git",
  "MS Office & G Suite",
  "Docker",
  "npm",
  "Make",
]);

const Skills = () => {
  return (
    <section className="skills">
      <h1>Skills</h1>
      <section className="languages">
        <h4>Programming & Markup Languages</h4>
        {languageList}
      </section>
      <section className="databases">
        <h4>Databases</h4>
        {databaseList}
      </section>
      <section className="web">
        <h4>Web Frameworks & Libraries</h4>
        {webList}
      </section>
      <section className="libraries">
        <h4>Popular Libraries</h4>
        {libraryList}
      </section>
      <section className="misc">
        <h4>Other Tools & Technology</h4>
        {miscList}
      </section>
    </section>
  );
};

export default Skills;
