import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Berita from './pages/Berita';
import BeritaDetail from './pages/BeritaDetail';

import StrukturOrganisasi from './pages/StrukturOrganisasi';

import Status from './pages/Status';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home />} />

        <Route path="/berita"  element={<Berita />} />
        <Route path="/berita/:slug" element={<BeritaDetail />} />

        <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />

        <Route path="/status" element={<Status />} />
      </Routes>
    </Router>
  );
}

export default App;