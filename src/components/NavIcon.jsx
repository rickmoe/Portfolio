import "./NavIcon.css";

const NavIcon = (props) => {
  return (
    <button
      classList={{ dropdown: true, open: props.open() }}
      onClick={props.onClick}
    >
      {/* <button class="dropdown"> */}
      <svg width="120" height="120" viewBox="0 0 100 100">
        <path
          class="line line1"
          d="M 20,29 H 80 C 80,29 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75,75 75,75 L 25,25"
        />
        <path class="line line2" d="M 20,50 H 80" />
        <path
          class="line line3"
          d="M 20,71 H 80 C 80,71 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75,25 75,25 L 25,75"
        />
      </svg>
    </button>
  );
};

export default NavIcon;
