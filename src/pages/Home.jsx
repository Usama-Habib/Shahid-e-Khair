// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { getLatestEntries, getEntriesByType } from '../api/entries';
import Section from '../components/Section';


const Home = () => {
  const [latest, setLatest] = useState([]);
  const [hadiths, setHadiths] = useState([]);
  const [verses, setVerses] = useState([]);
  const [duas, setDuas] = useState([]);

  useEffect(() => {
    getLatestEntries().then(setLatest);
    getEntriesByType('hadith').then(setHadiths);
    getEntriesByType('verse').then(setVerses);
    getEntriesByType('dua').then(setDuas);
  }, []);

  return (
    <div className="page-container" style={styles.container}>
      <h1 className="main-title">📚 Shahid-e-Khair Islamic Library</h1>

      {/* <Section title="🆕 Latest Entries" entries={latest} /> */}
      <Section id="verses" title="📖 Quranic Verses" entries={verses} />
      <Section id="hadith" title="📜 Hadith Collection" entries={hadiths} />
      <Section id="duas" title="🤲 Daily Duas" entries={duas} />
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
