// controllers/countController.js
const { Count } = require('../models');

// Fungsi untuk mendapatkan jumlah pelajar, guru, dan staff
const getCounts = async (req, res) => {
  try {
    const count = await Count.findOne(); // Ambil satu data count
    if (!count) {
      return res.status(404).json({ message: 'Data count tidak ditemukan' });
    }
    res.status(200).json(count); // Kirim data count dengan status 200
  } catch (error) {
    console.error("Error fetching count data:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getCounts,
};