const express = require('express');
const { getVideoData } = require('../controllers/videoController');

const router = express.Router();

// Route untuk mendapatkan data video
router.get('/video', getVideoData);

module.exports = router;