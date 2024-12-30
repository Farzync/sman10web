import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Status from './pages/Status';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </Router>
  );
}

export default App;