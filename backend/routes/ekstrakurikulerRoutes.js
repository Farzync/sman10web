// routes/ekstrakurikulerRoutes.js
const express = require('express');
const { getEkstrakurikuler } = require('../controllers/ekstrakurikulerController');

const router = express.Router();

// Route untuk mendapatkan data ekstrakurikuler
router.get('/ekstrakurikuler', getEkstrakurikuler);

module.exports = router;