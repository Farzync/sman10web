'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('KepalaSekolah', [{
      nama: 'Dra. Hj. Mukaromah, M.Pd',
      gambar: 'kepsek.png',
      sambutan: `Assalamalaikum wr.wb.\n\nSelamat datang di website SMAN 10 Kota Bekasi.\n\nAlhamdulillah, puji syukur kehadirat Allah SWT, Pencipta seluruh semesta alam, atas kemurahanNya kami hadir menyapa publik dalam rangka berbagi informasi seputar dunia pendidikan.\n\nKehadiran website SMAN 10 Kota Bekasi menjadi bagian yang tak dapat dipisahkan terhadap konstelasi institusi pendidikan. Keberadaannya sangat penting agar mempermudah seluruh civitas pendidikan, baik pendidik/tenaga kependidikan, peserta didik, orang tua dan masyarakat dapat mengakses informasi dan memperluas jejaring.\n\nDerasnya perkembangan teknologi informasi saat ini menjadi tantangan tersendiri dalam dunia pendidikan. Untuk itu rekayasa teknologi menjadi pilihan agar melahirkan generasi yang adaptif terhadap teknologi.\n\nSMA Negeri 10 Kota Bekasi diusianya yang cukup matang senantiasa terus mengembangkan prestasi menuju sekolah unggul sebagaimana tertuang dalam visi sekolah:\n\n"Terwujudnya Sumber Daya Manusia yang cerdas, terampil, kreatif, berbudaya lingkungan berlandaskan IMTAK dan IPTEK."\n\nKeunggulan tidak hanya sebatas ditandai dengan capaian prestasi akademik tetapi secara integral dengan implementasi karakter. Budaya mutu menjadi satu kesatuan antara kualitas akademik dengan nilai-nilai karakter.\n\nSMAN 10 Kota Bekasi di era pandemi ini melaksanakan pembelajaran dari rumah (BDR) dengan sistem blended learning, kombinasi antara belajar dalam jaringan (daring) dengan belajar di luar jaringan (luring). Menghadapi masa AKB (adaptasi kebiasaan baru) kami tim manajemen sekolah telah menyiapkan berbagai sarana dan prosedur.\n\nSemoga pandemi virus covid-19 segera berakhir sehingga seluruh elemen dapat kembali melaksanakan aktivitas rutin di sekolah.\n\nBillahi Taufiq wal Hidayah, Wassalamu’alaikum wr.wb.\n\nKepala Sekolah\nDra. Hj. Mukaromah, M.Pd`,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('KepalaSekolah', null, {});
  }
};