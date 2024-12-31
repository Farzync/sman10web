// seeders/20241231003003-demo-hierarchy.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Hierarchies', [
      {
        memberId: 1, // Budi Waskito
        role: 'Ketua Komite',
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        memberId: 2, // Drs. Hj. Mukarromah
        role: 'Kepala Sekolah',
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        memberId: 3, // Dra. Mutinah
        role: 'Waka Kurikulum',
        level: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        memberId: 4, // Agung Zainuddin
        role: 'Waka Kesiswaan',
        level: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        memberId: 5, // Haryono
        role: 'Waka Sarana Prasarana',
        level: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        memberId: 6, // Eko Ariyanto
        role: 'Waka Humas',
        level: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        memberId: 7, // Mutmainah
        role: 'Waka Peningkatan Mutu',
        level: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        memberId: 8, // Esthi Wikantini
        role: 'Koordinator Lab',
        level: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        memberId: 9, // Naimah
        role: 'Koordinator Perpustakaan',
        level: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        memberId: 10, // Guru
        role: 'Guru',
        level: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        memberId: 11, // Siswa
        role: 'Siswa',
        level: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Hierarchies', null, {});
  },
};
