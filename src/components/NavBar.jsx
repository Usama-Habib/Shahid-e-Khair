import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../utils/ThemeContext';
import { FaSun, FaMoon, FaDesktop, FaCog } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  
  // const handleThemeChange = () => {
  //   if (theme === 'light') setTheme('dark');
  //   else if (theme === 'dark') setTheme('system');
  //   else setTheme('light');
  // };

  // const renderThemeIcon = () => {
  //   if (theme === 'light') return <FaSun title="Light Mode" />;
  //   if (theme === 'dark') return <FaMoon title="Dark Mode" />;
  //   return <FaDesktop title="System Mode" />;
  // };

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
        </ul>

      <div className="theme-settings">
        {/* <button className="theme-btn" onClick={handleThemeChange}>
          {renderThemeIcon()}
        </button> */}
        {/* <FaCog title="Settings" className="setting-icon" /> */}
        <div className="flex items-center gap-10 mt-2 md:mt-0">
        <button onClick={() => handleThemeChange('light')}>
          <FaSun className="text-yellow-400" title="Light Mode" />
        </button>
        <button onClick={() => handleThemeChange('dark')}>
          <FaMoon className="text-blue-400" title="Dark Mode" />
        </button>
        <button onClick={() => handleThemeChange('system')}>
          <FaDesktop className="text-gray-500" title="System Default" />
        </button>
      </div>
      </div>

    </nav>
  );
}

export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../assets/logo.png';
// import { FaSun, FaMoon, FaDesktop, FaCog } from 'react-icons/fa';

// function Navbar() {

//   const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'system');
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   useEffect(() => {
//     const applyTheme = () => {
//       const root = document.documentElement;
//       const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

//       if (theme === 'system') {
//         root.setAttribute('data-theme', systemTheme);
//       } else {
//         root.setAttribute('data-theme', theme);
//       }
//     };

//     applyTheme();
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleDropdown = () => setDropdownOpen(prev => !prev);
//   const setAndClose = (value) => {
//     setTheme(value);
//     setDropdownOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo-link">
//         <img src={logo} alt="Shahid-e-Khair Logo" className="logo-img" />
//       </Link>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/search">Search</NavLink></li>
//         <li><NavLink to="/hadith">Hadiths</NavLink></li>
//         <li><NavLink to="/quranic-verses">Quranic Verses</NavLink></li>
//         <li><NavLink to="/duas">Duas</NavLink></li>
//       </ul>
//         <div className="theme-dropdown-container">
//         <FaCog className="settings-icon" onClick={toggleDropdown} />
//         {dropdownOpen && (
//           <div className="theme-dropdown">
//             <button onClick={() => setAndClose('light')}><FaSun /> Light</button>
//             <button onClick={() => setAndClose('dark')}><FaMoon /> Dark</button>
//             <button onClick={() => setAndClose('system')}><FaDesktop /> System</button>
//           </div>
//         )}
//       </div>        
//     </nav>
//   );
// }

// export default Navbar;
