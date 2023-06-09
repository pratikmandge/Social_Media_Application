import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Navbar.css';

import Logo from '../../assets/images/Logo.jpg';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-logo">
            <img src={Logo} alt="Logo" className='logo'/>
            <span>Social Media App</span>
          </Link>
  
          <ul className="navbar-links">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/explore" className="navbar-link">Explore</Link>
            </li>
            <li className="navbar-item">
              <Link to="/notifications" className="navbar-link">Notifications</Link>
            </li>
            <li className="navbar-item">
              <Link to="/search" className="navbar-link">Search</Link>
            </li>
          </ul>
  
          <ul className="navbar-links">
            <li className="navbar-item">
              <Link to="/profile" className="navbar-link">Profile</Link>
            </li>
            <li className="navbar-item">
              <Link to="/settings" className="navbar-link">Settings</Link>
            </li>
            <li className="navbar-item">
              <Link to="/friends" className="navbar-link">Friends</Link>
            </li>
            <li className="navbar-item">
              <Link to="/groups" className="navbar-link">Groups</Link>
            </li>
          </ul>
  
          <div className="navbar-buttons">
            <button className="btn btn-primary">Create Post</button>
            <button className="btn btn-secondary">Create Message</button>
          </div>
        </div>
      </nav>
    );
  };
  
export default Navbar;