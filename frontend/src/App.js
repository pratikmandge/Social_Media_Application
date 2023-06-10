import React, { useState } from 'react'
import NavBar from './Components/Navbar/NavBar'
import MainPage from './Settings/SideBar/MainPage';
import MainFeeds from './Components/Feeds/MainFeeds';
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