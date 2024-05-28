import { createSignal } from "solid-js";
import MenuIcon from "./components/MenuIcon";
import NavMenu from "./components/NavMenu";
import background from "./assets/background.webp";
import "./App.css";
import { Portal } from "solid-js/web";

const App = (props) => {
  const [navOpen, setNavOpen] = createSignal(false);
  const toggleNav = () => setNavOpen(!navOpen());
  const closeNav = () => setNavOpen(false);

  return (
    <>
      <img
        src={background}
        classList={{ background: true, faded: navOpen() }}
        alt="background"
      />

      <div classList={{ main: true, faded: navOpen() }}>{props.children}</div>

      <Portal>
        <MenuIcon open={navOpen} onClick={toggleNav} />
        <NavMenu open={navOpen} closeNav={closeNav} />
      </Portal>
    </>
  );
};

export default App;
