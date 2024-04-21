import React from 'react';
import Medicine from './Medicine';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import HomeToDo from './HomeToDo'; 
import './navBar.css';
const Navbar = () => (
  <div className="navbarDiv" >
    <Link  className ="linkElement" to='/' element={<HomeToDo />}>Home</Link>
    <Link  className ="linkElement" to='/medicine' element={<Medicine />}>Medicine</Link>
    <Link className ="linkElement" to='/profile' element={<Profile />}>Profile</Link>

  </div>
)

export default Navbar;