import { For } from "solid-js";
import CourseDropdown from "../../components/CourseDropdown";
import "./Education.css";
import useCourseTags from "../../hooks/useCorseTags";

const Education = () => {
  const courseTags = useCourseTags();

  return (
    <section className="education">
      <h1>Education</h1>
      <section className="uw">
        <h2>University of Wisconsin-Madison</h2>
        <p>4.0 GPA</p>
        <p>Degrees:</p>
        <ul>
          <li>Computer Science, B.S.</li>
          <li>Data Science, B.S.</li>
          <li>Mathematics for Programming and Computing, B.S.</li>
          <li>Psychology, B.S.</li>
        </ul>
        <section className="courses">
          <h3>Courses:</h3>
          <For each={courseTags}>
            {([tag, courses]) => (
              <CourseDropdown label={tag} courses={courses} />
            )}
          </For>
        </section>
      </section>
    </section>
  );
};

export default Education;
