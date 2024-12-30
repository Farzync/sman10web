'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Counts', [{
      students: 500, // Ganti dengan jumlah pelajar yang sesuai
      teachers: 30, // Ganti dengan jumlah guru yang sesuai
      staff: 10, // Ganti dengan jumlah staff yang sesuai
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Counts', null, {});
  }
};