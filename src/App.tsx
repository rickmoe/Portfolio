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
import pages from "./pages";

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          {pages.map(({ route, element }) => (
            <Route path={route} element={element} key={route} />
          ))}
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
