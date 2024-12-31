// seeders/20241231003002-demo-member.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Members', [
      {
        departmentId: 1, // Komite
        profileId: 1,    // Budi Waskito, SE
        position: 'Ketua Komite',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departmentId: 2, // Kepala Sekolah
        profileId: 2,    // Drs. Hj. Mukarromah, M.Pd
        position: 'Kepala Sekolah',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departmentId: 3, // Kaur Tata Usaha
        profileId: 10,   // N/A
        position: 'Kaur TU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departmentId: 4, // Wakil Kepala Sekolah
        profileId: 3,    // Dra. Mutinah
        position: 'Waka Kurikulum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departmentId: 4, // Wakil Kepala Sekolah
        profileId: 4,    // Agung Zainuddin, S.Pd., M.M
        position: 'Waka Kesiswaan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departmentId: 4, // Wakil Kepala Sekolah
        profileId: 8,    // Haryono, S.Pd
        position: 'Waka Sarana Prasarana',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departmentId: 4, // Wakil Kepala Sekolah
        profileId: 9,    // Eko Ariyanto, M.Pd
        position: 'Waka Humas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departmentId: 4, // Wakil Kepala Sekolah
        profileId: 10,   // Mutmainah, M.Pd
        position: 'Waka Peningkatan Mutu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departmentId: 5, // Koordinator
        profileId: 5,    // Esthi Wikantini, S.Pd
        position: 'Koordinator Lab',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departmentId: 5, // Koordinator
        profileId: 6,    // Naimah
        position: 'Koordinator Perpustakaan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departmentId: 6, // Guru
        profileId: 11,   // Guru
        position: 'Guru',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departmentId: 7, // Siswa
        profileId: 7,    // Siswa
        position: 'Siswa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Members', null, {});
  },
};
