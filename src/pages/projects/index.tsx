import "./index.css";

const projects = [
  {
    name: "QuickURL",
    description:
      "A browser-based URL shortener that allows for up to 68.7 billion shortened URLs with only six character added to each link.",
    tools: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "npm",
      "Git",
    ],
    github: "https://github.com/rickmoe/QuickURL",
    link: "https://quick-url.netlify.app/",
    featured: true,
  },
  {
    name: "Wordle+",
    description:
      "A Wordle-lover's delight. This extends the classic Wordle game to allow for the entire English language and words of different lengths. An endless mode allows users to play back-to-back games with target words being selected based on their frequency of use in the English language.",
    tools: [
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Flask",
      "SQL",
      "MySQL",
      "npm",
      "Git",
    ],
    github: "https://github.com/rickmoe/WordlePlus",
    featured: true,
  },
  {
    name: "Smart Assistant",
    description:
      "A modular smart assistant framework to make smart home tech more modular for the technical mind and more accessible for the average consumer.",
    tools: ["Python"],
    github: "https://github.com/rickmoe/SmartAssistant",
  },
  {
    name: "ID Scanning App",
    description:
      "Designed for a High School Engineering project, this mobile app gives librarians lets librarians look up student schedule from a database and determine if the student is skipping class with a single scan of their student ID.",
    tools: ["Java", "Firebase"],
  },
  {
    name: "Autonomous Drone",
    description:
      "Designed for a different High School Engineering project, this drone is built from scratch using an Arduino, simple electronics, and polycarbonate and is capable of flying a given path.",
    tools: ["C", "Arduino"],
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <section className="card-box">
        {projects.map((project) => (
          <article
            key={project.name}
            className={project.featured ? "card featured" : "card"}
          >
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
              {project.github && (
                <a href={project.github} className="link" target="_blank">
                  {/* Image credit to https://icons8.com/icon/12598/github */}
                  <img src="/icons8-github.webp" />
                </a>
              )}
            </section>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Projects;
