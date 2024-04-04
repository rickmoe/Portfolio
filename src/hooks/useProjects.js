import { createEffect, createSignal } from "solid-js";
import projectJSON from "../assets/projects.json";

export default function useProjects(params) {
  const [toolFilter, setToolFilter] = createSignal("");
  const [projects, setProjects] = createSignal([]);

  createEffect(() => {
    setToolFilter(decodeURIComponent(params.tool ?? ""));
  });

  createEffect(() => {
    if (toolFilter()) {
      setProjects(
        projectJSON.filter((project) => project.tools.includes(toolFilter()))
      );
    } else {
      setProjects(projectJSON);
    }
  });

  return [projects, toolFilter];
}
