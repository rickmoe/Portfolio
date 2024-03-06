import { Link } from "react-router-dom";
import skills from "./skills.json";
import "./index.css";

const makeList = (list: string[]) => (
  <ul>
    {list.map((tool) => (
      <li key={tool}>
        <Link to={`/projects?tool-filter=${tool.replace("#", "%23")}`}>
          {tool}
        </Link>
        {/* {tool} */}
      </li>
    ))}
  </ul>
);

const Skills = () => {
  return (
    <section className="skills">
      <h1>Skills</h1>
      {skills.map(({ label, list }) => (
        <section key={label}>
          <h4>{label}</h4>
          {makeList(list)}
        </section>
      ))}
      <p className="note">
        Note: This list is not exhaustive. Please feel free to contact me with
        questions regarding my experience with a particular language, tool, or
        framework.
      </p>
    </section>
  );
};

export default Skills;
