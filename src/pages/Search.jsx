// src/pages/Search.jsx
import React, { useState } from 'react';
import EntryCard from '../components/EntryCard';
import { searchEntries } from '../api/entries';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    const res = await searchEntries(query);
    setResults(res);
    setSearched(true);
  };

  return (
    <div style={styles.container}>
      <h2>🔍 Search Hadith, Quranic Verses & Duas</h2>
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          placeholder="Search by keyword..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Search</button>
      </form>

      <div style={styles.results}>
        {searched && results.length === 0 && <p>No results found.</p>}
        {results.map(entry => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '24px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    marginRight: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#00897B',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  results: {
    marginTop: '20px',
  },
};

export default Search;
