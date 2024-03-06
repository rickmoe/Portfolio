import { useSearchParams } from "react-router-dom";
import projects from "./projects.json";
import "./index.css";

const Projects = () => {
  const [searchParams, _] = useSearchParams();
  const toolFilter = searchParams.get("tool-filter");
  const filteredProjects = toolFilter
    ? projects.filter((project) => project.tools.includes(toolFilter))
    : projects;

  if (filteredProjects.length < 1) {
    return (
      <section className="projects">
        <h1>Projects</h1>
        <h2>
          No public projects yet. Check back later and contact me if you'd like
          to see a public project using {toolFilter}.
        </h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <h1>Projects</h1>
      <section className="card-box">
        {filteredProjects.map((project) => (
          <article key={project.name} className="card">
            <img src={`/${project.name}.webp`} />
            <section className="card-bottom">
              <h4>{project.name}</h4>
              <p className="description">{project.description}</p>
              <section className="tools">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </section>
              {project.link && (
                <a href={project.link} className="link" target="_blank">
                  {/* Image credit to https://icons8.com/icon/7867/link */}
                  <img src="/icons8-link-50.webp" />
                </a>
              )}
              {/* {project.github && (
                <a href={project.github} className="link" target="_blank">
                  {/* Image credit to https://icons8.com/icon/12598/github *}
                  <img src="/icons8-github.webp" />
                </a>
              )} */}
            </section>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Projects;
