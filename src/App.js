import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Berita from './pages/Berita';
import BeritaDetail from './pages/BeritaDetail';

import Ekstrakurikuler from './pages/Ekstrakurikuler';

import StrukturOrganisasi from './pages/StrukturOrganisasi';

import Status from './pages/Status';

import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home />} />

        <Route path="/berita"  element={<Berita />} />
        <Route path="/berita/:slug" element={<BeritaDetail />} />

        <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} />

        <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />

        <Route path="/status" element={<Status />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;