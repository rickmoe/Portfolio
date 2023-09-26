import "./index.css";

const Skills = () => {
  return (
    <section className="skills">
      <h1>Skills</h1>
      <section className="languages">
        <h4>Programming & Markup Languages</h4>
        <ul>
          <li>Python</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>C#</li>
          <li>C++</li>
          <li>C</li>
          <li>SQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Rust</li>
          <li>R</li>
        </ul>
      </section>
      <section className="databases">
        <h4>Databases</h4>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Firebase</li>
        </ul>
      </section>
      <section className="web">
        <h4>Web Frameworks & Libraries</h4>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Flask</li>
        </ul>
      </section>
      <section className="libraries">
        <h4>Popular Libraries</h4>
        <ul>
          <li>Numpy</li>
          <li>Pandas</li>
          <li>OpenCV</li>
        </ul>
      </section>
      <section className="misc">
        <h4>Other Tools & Technology</h4>
        <ul>
          <li>Linux</li>
          <li>Git</li>
          <li>MS Office & G Suite</li>
          <li>Docker</li>
          <li>npm</li>
          <li>Make</li>
        </ul>
      </section>
    </section>
  );
};

export default Skills;
