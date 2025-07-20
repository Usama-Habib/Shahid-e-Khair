// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './utils/ThemeContext';
import Home from './pages/Home';
import Search from './pages/Search';
import Hadith from './pages/Hadith';
import Duas from './pages/Duas';
import QuranicVerse from './pages/Quranic Verse';
import Navbar from './components/NavBar';

const App = () => {
  // const [theme, setTheme] = useState('light');
  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   root.setAttribute('data-theme', theme);
  // }, [theme]);
  return (
    <Router>
      <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/hadith" element={<Hadith />} />
        <Route path="/duas" element={<Duas />} />
        <Route path="/quranic-verses" element={<QuranicVerse />} />
      </Routes>  
      </div>
    </ThemeProvider>
    </Router>
  );
};

export default App;