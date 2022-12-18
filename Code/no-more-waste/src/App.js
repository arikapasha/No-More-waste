/* import './App.css';
 */

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

import React, { Component }  from 'react';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import SinglePost from './pages/SinglePost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Track from './pages/Track';
import Support from './pages/Support';
import "./styles.css";
import "./normalize.css";
import CreatePost from './pages/CreatePost';

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
        path:"/support",
        element:<Support/>
      },
      {
        path:"/createpost",
        element:<CreatePost/>
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
