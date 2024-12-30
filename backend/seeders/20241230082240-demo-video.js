'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Videos', [{
      title: 'SMA Negeri 10 Kota Bekasi',
      description: 'Terwujudnya sumber daya manusia yang cerdas, terampil, kreatif, berbudaya lingkungan berlandaskan IMTAK dan IPTEK.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Videos', null, {});
  }
};