import React from 'react';

const EntryCard = ({ entry }) => {
  const tags = entry.tags?.split(',').map(tag => tag.trim()).filter(Boolean) || [];
  const showReference = entry.reference && entry.reference.toLowerCase() !== 'n/a';

  return (
    <div className="entry-card" style={styles.card}>
      <div style={styles.header}>
        <span style={styles.type}>{entry.type.toUpperCase()}</span>
        {showReference && <span style={styles.reference}>{entry.reference}</span>}
      </div>

      {entry.source && (
        <p style={styles.source}><strong>Source:</strong> {entry.source}</p>
      )}

      {entry.arabic_text && (
        <p style={styles.arabic} lang="ar">{entry.arabic_text}</p>
      )}

      {entry.urdu_translation && (
        <p style={styles.urdu}>{entry.urdu_translation}</p>
      )}

      {entry.english_translation && (
        <p style={styles.english}><em>{entry.english_translation}</em></p>
      )}

      {tags.length > 0 && (
        <p style={styles.tags}>
          <strong>Tags:</strong>{" "}
          {tags.map((tag, idx) => (
            <span key={idx} style={styles.tag} className="tag-badge">{tag}</span>
          ))}
        </p>
      )}
    </div>
  );
};

const styles = {
  card: {
    background: 'linear-gradient(135deg, #fdfcfb, #e2d1c3)',
    border: '1px solid #e0ddd5',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '15px',
    color: '#4a4a4a',
  },
  type: {
    backgroundColor: '#006400',
    color: 'white',
    padding: '2px 8px',
    borderRadius: '5px',
    fontSize: '13px',
  },
  reference: {
    fontStyle: 'italic',
    fontSize: '13px',
    color: '#333',
  },
  source: {
    fontSize: '14px',
    marginBottom: '8px',
    color: '#555',
  },
  arabic: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#004d40',
    direction: 'rtl',
    textAlign: 'right',
    fontFamily: `'Scheherazade New', 'Amiri', serif`,
    lineHeight: '1.8',
    marginTop: '10px',
  },
  urdu: {
    fontFamily: `'Noto Nastaliq Urdu', serif`,
    fontSize: '18px',
    color: '#222',
    direction: 'rtl',
    textAlign: 'right',
    lineHeight: '1.6',
    marginTop: '10px',
  },
  english: {
    fontSize: '16px',
    color: '#444',
    marginTop: '10px',
    lineHeight: '1.6',
  },
  tags: {
    marginTop: '12px',
    color: '#666',
    fontSize: '13px',
  },
  tag: {
    display: 'inline-block',
    backgroundColor: '#cde6d0',
    color: '#064d1f',
    padding: '5px 10px',
    borderRadius: '16px',
    marginRight: '6px',
    marginTop: '4px',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
  },
};

// Optional CSS for hover effect
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  .tag-badge:hover {
    background-color: #afd9b5 !important;
    color: #003f18 !important;
  }
`, styleSheet.cssRules.length);

export default EntryCard;
