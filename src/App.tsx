import "./App.css";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import Projects from "./pages/projects";

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

const Root = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <>
      {/* Image credit to https://unsplash.com/photos/B3l0g6HLxr8  */}
      <img
        className={"background-img" + (navMenuOpen ? " faded" : "")}
        src="/background.webp"
      />
      <Navbar menuOpen={navMenuOpen} setMenuOpen={setNavMenuOpen} />
      <main className={navMenuOpen ? "faded" : ""}>
        <Outlet />
      </main>
    </>
  );
};

export default App;
