// routes/departmentRoutes.js
const express = require('express');
const router = express.Router();
const { getDepartments } = require('../controllers/departmentController');

// Define route to fetch departments
router.get('/departments', getDepartments);

module.exports = router;
