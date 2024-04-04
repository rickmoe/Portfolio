import courseJSON from "../assets/courses.json";

let courseTags = {};
Object.entries(courseJSON).forEach(([name, { code, description, tags }]) => {
  tags.forEach((tag) => {
    if (!courseTags[tag]) {
      courseTags[tag] = [];
    }
    courseTags[tag].push({ name, code, description });
  });
});

courseTags = Object.entries(courseTags);

export default function useCourseTags() {
  return courseTags;
}
