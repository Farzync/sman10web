'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('VisiMisis', [{
      visi: "Terwujudnya Sumber Daya Manusia yang cerdas, terampil, kreatif, berbudaya lingkungan berlandaskan IMTAK dan IPTEK.",
      misi: JSON.stringify([
        "Membentuk SDM yang memiliki budaya Religius.",
        "Melaksanakan KBM secara Profesional dan Proporsional yang didukung oleh media pembelajaran yang relevan.",
        "Mengembangkan bahan ajar berbasis TIK mengacu pada SKL.",
        "Mengutamakan prestasi akademik dan non akademik secara kompetitif.",
        "Menyiapkan lulusan yang mampu bersaing di masyarakat dan menuju jenjang pendidikan yang lebih tinggi.",
        "Mengembangkan sarana dan prasarana TIK untuk menunjang keberhasilan pendidikan.",
        "Menciptakan budaya baca melalui pelayanan perpustakaan yang optimal.",
        "Memberdayakan stakeholders dalam menciptakan lingkungan yang sehat, kondusif, dan alami.",
        "Mengembangkan budaya Senyum, Salam, Sapa, Sopan dan Santun (5S)."
      ]),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('VisiMisis', null, {});
  }
};