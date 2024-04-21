import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/profile">Profile</a>
      <a href="/about">About</a>
      <a href="/logout">Logout</a>
      <a href="/help">Help</a>
    </nav>
  );
}

export default Navbar;
