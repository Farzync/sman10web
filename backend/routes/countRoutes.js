// routes/countRoutes.js
const express = require('express');
const { getCounts } = require('../controllers/countController');

const router = express.Router();

// Route untuk mendapatkan jumlah pelajar, guru, dan staff
router.get('/counts', getCounts);

module.exports = router;