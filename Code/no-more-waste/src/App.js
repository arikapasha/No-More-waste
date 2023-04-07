/* import './App.css';
 */

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import React from "react";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Track from "./pages/Track";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import "./styles.css";
import "./normalize.css";
import CreatePost from "./pages/CreatePost";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/track",
        element: <Track />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/createpost",
        element: <CreatePost />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
