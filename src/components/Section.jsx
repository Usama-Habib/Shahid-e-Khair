import React from 'react';
import EntryCard from './EntryCard';

const Section = ({id, title, entries }) => (
  <div id={id} className="section">
    <h2>{title}</h2>
    {entries.length === 0 ? (
      <p>Loading...</p>
    ) : (
      entries.map((entry) => <EntryCard key={entry.id} entry={entry} />)
    )}
  </div>
);

export default Section;
