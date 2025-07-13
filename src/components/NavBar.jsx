import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Shahid-e-Khair Logo" className="logo-img" />
      </Link>
      <ul>
        <li><NavLink to="/search">Search</NavLink></li>
        <li><a href="#hadith">Hadith</a></li>
        <li><a href="#verses">Quranic Verses</a></li>
        <li><a href="#duas">Duas</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
