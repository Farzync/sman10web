// seeders/20241231040900-demo-departments.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Departments', [
      {
        department: 'Komite',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        department: 'Kepala Sekolah',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        department: 'Kaur Tata Usaha',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        department: 'Wakil Kepala Sekolah',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        department: 'Koordinator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        department: 'Guru',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        department: 'Siswa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Departments', null, {});
  },
};
