const { Video } = require('../models');

// Fungsi untuk mendapatkan data video
const getVideoData = async (req, res) => {
  try {
    const videoData = await Video.findOne(); // Ambil satu data video
    if (!videoData) {
      return res.status(404).json({ message: 'Video data not found' });
    }
    res.status(200).json(videoData);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getVideoData,
};