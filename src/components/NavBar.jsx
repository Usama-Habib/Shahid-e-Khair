import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../utils/ThemeContext';
import { FaSun, FaMoon, FaDesktop, FaCog } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {

  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };


  return (
    <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Shahid-e-Khair Logo" className="logo-img" />
        </Link>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/search">Search</NavLink></li>
          <li><NavLink to="/hadith">Hadiths</NavLink></li>
          <li><NavLink to="/quranic-verses">Quranic Verses</NavLink></li>
          <li><NavLink to="/duas">Duas</NavLink></li>
          <li><NavLink to="/create-image">Create Image</NavLink></li>
        </ul>

      <div className="theme-settings">
        <button
          className={`theme-btn${theme === 'light' ? ' active' : ''}`}
          onClick={() => handleThemeChange('light')}
          aria-label="Light Mode"
        >
          <FaSun size={22} />
        </button>
        <button
          className={`theme-btn${theme === 'dark' ? ' active' : ''}`}
          onClick={() => handleThemeChange('dark')}
          aria-label="Dark Mode"
        >
          <FaMoon size={22} />
        </button>
      </div>

    </nav>
  );
}

export default Navbar;