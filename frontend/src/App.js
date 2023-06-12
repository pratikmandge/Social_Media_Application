import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import MainPage from './Settings/SideBar/MainPage';
import MainFeeds from './components/Feeds/MainFeeds';

import "./App.css";
// import "./Scroll.css";

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Login from './Components/Auth/Login';
import ChatBody from './Components/Message/chatBody/ChatBody';
import Register from './Components/Auth/Register';



const router = createBrowserRouter([
  {
    path: "/settings",
    element: <MainPage />,
  },
  {
    path: "/",
    element: <MainFeeds/>,
    
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/message",
    element:<ChatBody/>
  }
  
  // {
  //   path: "/Profile",
  //   element: <Profilepage />,

  // },
]);

const App = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div id='root'>
        <NavBar showNav={showNav} setShowNav={setShowNav}/>
      <div onClick = {() => setShowNav(!showNav)}>
        <RouterProvider router={router} />
        </div>
        {/* <MainPage /> */}  
    </div>
  )
}
export default App