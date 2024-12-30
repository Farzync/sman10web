// controllers/visiMisiController.js
const { VisiMisi } = require('../models');

// Fungsi untuk mendapatkan data visi dan misi
const getVisiMisi = async (req, res) => {
  try {
    const visiMisi = await VisiMisi.findOne(); // Ambil satu data visi dan misi
    if (!visiMisi) {
      return res.status(404).json({ message: 'Data visi dan misi tidak ditemukan' });
    }
    res.status(200).json(visiMisi); // Kirim data visi dan misi dengan status 200
  } catch (error) {
    console.error("Error fetching visi dan misi data:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getVisiMisi,
};