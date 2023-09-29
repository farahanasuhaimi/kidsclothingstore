// src/Navbar.js

import React from 'react';
import './Navbar.css'; // Import the CSS file for the Navbar
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar">
      <h1><Link to="/">Home</Link></h1>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
