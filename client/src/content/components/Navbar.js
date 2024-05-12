import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
        <span className='hospitalName'>Hospital</span>
        <a className="anchor" href="#"> Home</a>
        <a className="anchor" href="/CONTENT"> Content</a>
        <a className="anchor" href="/content-archive"> Content Management</a>
    </div>
  )
}

export default Navbar