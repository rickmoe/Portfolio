import { useParams } from "@solidjs/router";
import { For } from "solid-js";
import ImageWithModal from "../../components/ImageWithModal";
import filterProjects from "../../hooks/useProjects";
// import githubIcon from "../../assets/github-icon.webp";
import linkIcon from "../../assets/link-icon.webp";
import pdfIcon from "../../assets/pdf-icon.webp";
import "./Projects.css";

const Projects = () => {
  const params = useParams();
  const [projects, toolFilter] = filterProjects(params);

  return (
    <Switch
      fallback={
        <section className="projects">
          <h1>Projects</h1>
          <h2>
            No public projects yet. Check back later or contact me if you'd like
            to see a public project using {toolFilter()}.
          </h2>
        </section>
      }
    >
      <Match when={projects().length > 0}>
        <section className="projects">
          <h1>Projects</h1>
          <section className="card-box">
            <For each={projects()}>
              {(project) => (
                <article class="card">
                  <ImageWithModal
                    src={`/${project.name}.webp`}
                    alt={`${project.name}`}
                  />
                  <section class="card-bottom">
                    <section>
                      <h4>{project.name}</h4>
                      <p class="description">{project.description}</p>
                    </section>
                    <section class="tools">
                      <For each={project.tools}>
                        {(tool) => <span>{tool}</span>}
                      </For>
                    </section>
                    {/* <Show when={project.github}>
                      <a href={project.github} class="link" target="_blank">
                        {/* Image credit to https://icons8.com/icon/12598/github *}
                        <img src={githubIcon} alt="github link" />
                      </a>
                    </Show> */}
                    <Show when={project.link}>
                      <a href={project.link} class="link" target="_blank">
                        {/* Image credit to https://icons8.com/icon/7867/link */}
                        <img src={linkIcon} alt="link" />
                      </a>
                    </Show>
                    <Show when={project.pdf}>
                      <a href={project.pdf} class="link" target="_blank">
                        {/* Image credit to https://icons8.com/icon/7867/link */}
                        <img src={pdfIcon} alt="pdf" />
                      </a>
                    </Show>
                  </section>
                </article>
              )}
            </For>
          </section>
        </section>
      </Match>
    </Switch>
  );
};

export default Projects;
