const express = require('express');
const { getAllBerita, getBeritaBySlug } = require('../controllers/beritaController');

const router = express.Router();

// Endpoint untuk mendapatkan semua berita
router.get('/berita', getAllBerita);

// Endpoint untuk mendapatkan berita berdasarkan slug
router.get('/berita/:slug', getBeritaBySlug);

module.exports = router;
