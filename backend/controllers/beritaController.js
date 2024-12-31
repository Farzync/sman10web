const { Berita } = require('../models');

const getAllBerita = async (req, res) => {
  try {
    const berita = await Berita.findAll({
      attributes: ['id', 'judul', 'deskripsi', 'gambar', 'slug', 'tanggal'], // Pilih atribut yang ingin ditampilkan
      order: [['tanggal', 'DESC']], // Urutkan berdasarkan tanggal (terbaru)
    });

    if (!berita) {
        return res.status(404).json({
            success: false,
            message: 'Berita not found',
        });
    }

    res.status(200).json({
      success: true,
      data: berita,
    });
  } catch (error) {
    console.error('Error fetching berita:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch berita',
      error: error.message
    });
  }
};

const getBeritaBySlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const berita = await Berita.findOne({
      where: { slug },
      attributes: ['id', 'judul', 'deskripsi', 'content', 'gambar', 'slug', 'tanggal'], // Pilih atribut yang ingin ditampilkan
    });

    if (!berita) {
      return res.status(404).json({
        success: false,
        message: 'Berita not found',
      });
    }

    res.status(200).json({
      success: true,
      data: berita,
    });
  } catch (error) {
    console.error('Error fetching berita by slug:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch berita by slug',
      error: error.message
    });
  }
};

module.exports = {
  getAllBerita,
  getBeritaBySlug,
};
