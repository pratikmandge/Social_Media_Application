import React, { useState } from 'react'
import MainFeeds from './components/Feeds/MainFeeds';
import MainPage from './Settings/SideBar/MainPage';
import Login from './components/Auth/Login';
//import ChatBody from './Components/Message/chatBody/chatBody/ChatBody';
import NavBar from './components/NavBar/NavBar';
// import ProfilePage from './Components/Profile/ProfilePage';

import "./App.css";
// import "./Scroll.css";

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";




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
  // {
  //   path:"/message",
  //   element:<ChatBody/>
  // }
  
  // {
  //   path: "/Profile",
  //   element: <ProfilePage />,

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