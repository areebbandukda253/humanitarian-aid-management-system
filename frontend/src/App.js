import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Donors from './pages/Donors';
import Donations from './pages/Donations';
import Beneficiaries from './pages/Beneficiaries';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/donors">Donors</Link></li>
            <li><Link to="/donations">Donations</Link></li>
            <li><Link to="/beneficiaries">Beneficiaries</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/donors" element={<Donors />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;