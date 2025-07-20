// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { getLatestEntries, getEntriesByType } from '../api/entries';
import Section from '../components/Section';


const Home = () => {
  const [hadiths, setHadiths] = useState([]);
  
  useEffect(() => {
    getEntriesByType('hadith').then(setHadiths);
  }, []);

  return (
    <div className="page-container" style={styles.container}>
      <h1 className="main-title">📚 Shahid-e-Khair Islamic Library</h1>
      <Section id="hadith" title="📜 Hadith Collection" entries={hadiths} />
    </div>
  );
};


const styles = {
  container: {
    padding: '24px',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  section: {
    marginBottom: '40px',
  },
};

export default Home;
