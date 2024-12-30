// controllers/ekstrakurikulerController.js
const { Ekstrakurikuler } = require('../models');

// Fungsi untuk mendapatkan data ekstrakurikuler
const getEkstrakurikuler = async (req, res) => {
  try {
    const ekstrakurikuler = await Ekstrakurikuler.findAll(); // Ambil semua data ekstrakurikuler
    res.status(200).json({ ekstrakurikuler }); // Kirim data ekstrakurikuler dengan status 200
  } catch (error) {
    console.error("Error fetching ekstrakurikuler data:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getEkstrakurikuler,
};