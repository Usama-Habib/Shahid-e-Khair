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
import ImageCreator from './pages/CreateImage';

const App = () => {
  return (
    <Router>
      <ThemeProvider>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/hadith" element={<Hadith />} />
        <Route path="/duas" element={<Duas />} />
        <Route path="/quranic-verses" element={<QuranicVerse />} />
        <Route path="/create-image" element={<ImageCreator />} />
      </Routes>  
      </div>
    </ThemeProvider>
    </Router>
  );
};

export default App;