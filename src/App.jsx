// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;



// import React, { useEffect, useState } from 'react';
// import { fetchHadiths } from './utils/sheets'; // we will create this next
// import './App.css';

// function App() {
//   const [hadiths, setHadiths] = useState([]);

//   useEffect(() => {
//     const loadData = async () => {
//       console.log('[App] Loading Hadiths...');
//       const data = await fetchHadiths();
//       setHadiths(data);
//     };

//     loadData();
//   }, []);

//   return (
//     <div className="App">
//       <h1>📜 Shahid-e-Khair Hadith Cards</h1>
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {hadiths.map((h) => (
//           <li key={h.arabic} style={{
//             background: '#fff',
//             margin: '16px 0',
//             padding: '16px',
//             borderRadius: '12px',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             textAlign: 'left'
//           }}>
//             <p><strong>📖 Arabic:</strong> {h.arabic}</p>
//             <p><strong>🌐 English:</strong> {h.english}</p>
//             <p><strong>🇵🇰 Urdu:</strong> {h.urdu}</p>
//             <hr />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
