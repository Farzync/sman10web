const express = require('express');
const db = require('./models'); // Impor folder models untuk koneksi ke database

const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint untuk memeriksa status API, server, dan database
app.get('/api/status', async (req, res) => {
  try {
    // Cek status server
    const serverStatus = 'RUNNING';

    // Cek koneksi database
    await db.sequelize.authenticate();
    const dbStatus = 'OK';

    res.status(200).json({
      apiStatus: 'RUNNING',
      serverStatus,
      dbStatus,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error connecting to the database',
      error: error.message,
    });
  }
});

const videoRoutes = require('./routes/videoRoutes');
app.use('/api', videoRoutes);

const kepalaSekolahRoutes = require('./routes/kepalaSekolahRoutes');
app.use('/api', kepalaSekolahRoutes);

const visiMisiRoutes = require('./routes/visiMisiRoutes');
app.use('/api', visiMisiRoutes);

const ekstrakurikulerRoutes = require('./routes/ekstrakurikulerRoutes');
app.use('/api', ekstrakurikulerRoutes);

const countRoutes = require('./routes/countRoutes');
app.use('/api', countRoutes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
