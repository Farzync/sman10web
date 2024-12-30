// routes/visiMisiRoutes.js
const express = require('express');
const { getVisiMisi } = require('../controllers/visiMisiController');

const router = express.Router();

// Route untuk mendapatkan data visi dan misi
router.get('/visi-misi', getVisiMisi);

module.exports = router;