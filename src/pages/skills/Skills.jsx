import { A } from "@solidjs/router";
import skills from "../../assets/skills.json";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <h1>Skills</h1>
      <For each={skills}>
        {(skill) => (
          <section>
            <h4>{skill.label}</h4>
            <ul>
              <For each={skill.list}>
                {(item) => (
                  <li>
                    <A href={`/projects/${item.replace("#", "%23")}`}>{item}</A>
                  </li>
                )}
              </For>
            </ul>
          </section>
        )}
      </For>
      <p className="note">
        Note: This list is not exhaustive. Please feel free to contact me with
        questions regarding my experience with a particular language, tool, or
        framework.
      </p>
    </section>
  );
};

export default Skills;
