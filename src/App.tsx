import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

const Root = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const toggleNavMenuOpen = () => setNavMenuOpen((prev) => !prev);

  return (
    <>
      {/* Image credit to https://unsplash.com/photos/B3l0g6HLxr8  */}
      <img
        className={"background-img" + (navMenuOpen ? " faded" : "")}
        src="/background.jpg"
      />
      <Navbar menuOpen={navMenuOpen} toggleMenuOpen={toggleNavMenuOpen} />
      <main className={navMenuOpen ? "faded" : ""}>
        <Outlet />
      </main>
    </>
  );
};

export default App;
