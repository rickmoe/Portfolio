import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages";
import { useState } from "react";
import About from "./pages/about";
import Contact from "./pages/contact";

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<About />} />
          <Route path="/projects" element={<About />} />
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
