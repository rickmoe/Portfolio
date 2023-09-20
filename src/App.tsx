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
  return (
    <>
      {/* Image credit to https://unsplash.com/photos/B3l0g6HLxr8  */}
      <img className="background-img" src="/background.jpg" />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
