import CourseDropdown from "../../components/CourseDropdown";
import { CourseTags } from "../../types/types";
import courses from "./courses.json";
import "./index.css";

// Reorder courses to be sorted by Tags
const courseTags: CourseTags = {};
Object.entries(courses).forEach(([name, { code, description, tags }]) => {
  tags.forEach((tag) => {
    if (!courseTags[tag]) {
      courseTags[tag] = [];
    }
    courseTags[tag].push({ name, code, description });
  });
});

const Education = () => {
  return (
    <section className="academics">
      <h1>Education</h1>
      <section className="uw">
        <h4>University of Wisconsin-Madison</h4>
        <p>4.0 GPA</p>
        <p>Degrees:</p>
        <ul>
          <li>Computer Sciences, B.S.</li>
          <li>Data Science, B.S.</li>
          <li>Mathematics for Programming and Computing, B.S.</li>
          <li>Psychology, B.S.</li>
        </ul>
        <section className="courses">
          <h5>Courses:</h5>
          {Object.entries(courseTags).map(([tag, courses]) => (
            <CourseDropdown label={tag} courses={courses} key={tag} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default Education;
