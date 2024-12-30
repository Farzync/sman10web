// routes/kepalaSekolahRoutes.js
const express = require('express');
const { getKepalaSekolah } = require('../controllers/kepalaSekolahController');

const router = express.Router();

// Route untuk mendapatkan data kepala sekolah
router.get('/kepala-sekolah', getKepalaSekolah);

module.exports = router;