import { useState } from "react";
import { Course } from "../types/types";
import { useProlong } from "../hooks/useProlong";
import "./CourseDropdown.css";

interface CourseDrowdownProps {
  label: string;
  courses: Course[];
}

const CourseDropdown = ({ label, courses }: CourseDrowdownProps) => {
  const [dropdownVisible, setDrowndownVisible] = useState(false);
  const toggleDropdown = () => setDrowndownVisible((prev) => !prev);
  const prolongedDropdown = useProlong(dropdownVisible, 600);

  const [indexSelected, setIndexSelected] = useState(-1);
  const targetIndex = (index: number) =>
    setIndexSelected((prev) => (index == prev ? -1 : index));

  const dropdownClass = dropdownVisible ? "" : "hidden";

  return (
    <section className="course-dropdown">
      <button onClick={toggleDropdown}>
        {label} <span className={dropdownVisible ? "arrow up" : "arrow down"} />
      </button>
      {prolongedDropdown && (
        <ul className={dropdownClass}>
          {courses.map(({ name, code, description }, index) => (
            <li onClick={() => targetIndex(index)} key={code}>
              <h6>
                {name}{" "}
                <span
                  className={indexSelected == index ? "arrow up" : "arrow down"}
                />
              </h6>
              {indexSelected == index && (
                <>
                  <p className="code">{code}</p>
                  <p className="description">{description}</p>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CourseDropdown;
