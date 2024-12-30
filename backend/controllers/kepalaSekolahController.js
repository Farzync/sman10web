// controllers/kepalaSekolahController.js
const { KepalaSekolah } = require('../models');

// Fungsi untuk mendapatkan data kepala sekolah
const getKepalaSekolah = async (req, res) => {
  try {
    const kepalaSekolah = await KepalaSekolah.findOne(); // Ambil satu data kepala sekolah
    if (!kepalaSekolah) {
      return res.status(404).json({ message: 'Kepala sekolah tidak ditemukan' });
    }
    res.status(200).json(kepalaSekolah); // Kirim data kepala sekolah dengan status 200
  } catch (error) {
    console.error("Error fetching kepala sekolah data:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getKepalaSekolah,
};