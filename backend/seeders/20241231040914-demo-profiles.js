// seeders/20241231003001-demo-profile.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Profiles', [
      {
        name: 'Budi Waskito, SE',
        image: 'path-to-image/budi.jpg',
        description: 'Ketua komite sekolah bertanggung jawab atas keseluruhan operasional komite...',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Drs. Hj. Mukarromah, M.Pd',
        image: 'path-to-image/rukmanah.jpg',
        description: 'Kepala sekolah adalah pemimpin utama yang bertanggung jawab atas pengelolaan dan administrasi sekolah...',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dra. Mutinah',
        image: 'path-to-image/murniah.jpg',
        description: 'Wakil Kepala Sekolah Bidang Kurikulum bertanggung jawab atas perencanaan, pengembangan...',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Agung Zainuddin, S.Pd., M.M',
        image: 'path-to-image/abung.jpg',
        description: 'Wakil Kepala Sekolah Bidang Kesiswaan bertanggung jawab atas semua hal yang berkaitan dengan siswa...',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Haryono, S.Pd',
        image: 'path-to-image/asep.jpg',
        description: 'Wakil Kepala Sekolah Bidang Sarana dan Prasarana bertanggung jawab atas pengelolaan...',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Eko Ariyanto, M.Pd',
        image: 'path-to-image/asep.jpg',
        description: 'Wakil Kepala Sekolah Bidang Humas bertanggung jawab untuk membangun dan menjaga hubungan...',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mutmainah, M.Pd',
        image: 'path-to-image/asep.jpg',
        description: 'Wakil Kepala Sekolah Bidang Peningkatan Mutu bertanggung jawab untuk merancang...',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Esthi Wikantini, S.Pd',
        image: 'path-to-image/esthi.jpg',
        description: 'Koordinator Laboratorium bertanggung jawab atas pengelolaan dan pemeliharaan laboratorium...',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Naimah',
        image: 'path-to-image/naimah.jpg',
        description: 'Koordinator Perpustakaan bertanggung jawab atas pengelolaan dan pengembangan perpustakaan...',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Guru',
        image: 'path-to-image/guru.jpg',
        description: 'Guru di bawah pengawasan organisasi.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Siswa',
        image: 'path-to-image/siswa.jpg',
        description: 'Siswa di bawah pengawasan organisasi.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Profiles', null, {});
  },
};
