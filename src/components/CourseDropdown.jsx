import { For, createSignal } from "solid-js";
// import useProlongBoolean from "../hooks/useProlong";
import "./CourseDropdown.css";

const CourseDropdown = (props) => {
  const [open, setOpen] = createSignal(false);
  const [selectedIndex, setSelectedIndex] = createSignal(-1);
  // const prolongedOpen = useProlongBoolean(open, 0);  // TODO: Revisit when CSS is improved

  const toggleOpen = () => {
    setOpen(!open());
    setSelectedIndex(-1);
  };

  const clickIndex = (index) => {
    setSelectedIndex(index == selectedIndex() ? -1 : index);
  };

  return (
    <section class="course-dropdown">
      <button onClick={toggleOpen}>
        {props.label}{" "}
        <span classList={{ arrow: true, up: open(), down: !open() }} />
      </button>
      <Show when={open()}>
        <ul classList={{ hidden: !open() }}>
          <For each={props.courses}>
            {(course, index) => (
              <li onClick={() => clickIndex(index())}>
                <h4>
                  {course.name}{" "}
                  <span
                    classList={{
                      arrow: true,
                      up: index() === selectedIndex(),
                      down: index() !== selectedIndex(),
                    }}
                  />
                </h4>
                <Show when={index() === selectedIndex()}>
                  <p class="code">{course.code}</p>
                  <p class="description">{course.description}</p>
                </Show>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </section>
  );
};

export default CourseDropdown;
