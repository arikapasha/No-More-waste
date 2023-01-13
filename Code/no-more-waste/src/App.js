/* import './App.css';
 */

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import React from 'react';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import SinglePost from './pages/SinglePost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Track from './pages/Track';
import ContactUs from "./pages/ContactUs";
import About from './pages/About';
import "./styles.css";
import "./normalize.css";
import CreatePost from './pages/CreatePost';
import Static from "./pages/Static";


const Layout = ()=>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<SinglePost/>
      },
      {
        path:"/profile/:id",
        element:<Profile/>
      },
      {
        path:"/track/:id",
        element:<Track/>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:"/createpost",
        element:<CreatePost/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/static",
        element:<Static/>
      },
    ]
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h2>
          No more waste
        </h2>
        
      </header> */}

      <RouterProvider router={router}/>
    </div>
  );
}



export default App;
