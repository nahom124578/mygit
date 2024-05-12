import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar py-4 px-6 fixed top-0 w-full z-10">
      <div className="navbar-container">
        <Link to='/' className="navbar-item">
          Home
        </Link>
        <Link to="/announcement" className="navbar-item">
          Announcement
        </Link>
        <Link to="/login" className="navbar-item login-link">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
