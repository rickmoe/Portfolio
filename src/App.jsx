import { createSignal } from "solid-js";
import Navbar from "./components/Navbar";
import background from "./assets/background.webp";
import "./App.css";

const App = (props) => {
  const [navOpen, setNavOpen] = createSignal(false);

  return (
    <>
      <img
        src={background}
        classList={{ background: true, faded: navOpen() }}
      />
      <div classList={{ main: true, faded: navOpen() }}>
        {props.children}
        <Navbar open={navOpen} setOpen={setNavOpen} />
      </div>
    </>
  );
};

export default App;
