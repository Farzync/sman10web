'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Berita', [
      {
        judul: "OPTION menetapkan acara serial Skibidi Toilet sebagai animasi terbaik tahun 2024!",
        deskripsi: "'Saya sangat bangga dengan keputusan yang diambil oleh rekan-rekan juri saya,' ujar Wiliam Gabriel, ketua umum OPTION.",
        content: `
          <p>Rakha Ardani, selaku wakil presiden OPTION yang memiliki wewenang atas berjalannya divisi DKV, menetapkan sebuah program baru, <strong>'OPTIONitive'</strong>, yang merupakan wadah dalam mengapresiasikan karya-karya yang telah dihasilkan oleh siswa-siswi SMAN 10 Bekasi. Salah satu program yang diusung oleh 'OPTIONitive' adalah serial animasi <em>Skibidi Toilet</em> yang diangkat dari kisah nyata yang terjadi di SMAN 10 Bekasi.</p>
          <p>Serial animasi ini berhasil menarik perhatian para juri yang terdiri dari para guru dan alumni SMAN 10 Bekasi. <strong>'Saya sangat bangga dengan keputusan yang diambil oleh rekan-rekan juri saya,'</strong> ujar Wiliam Gabriel, ketua umum OPTION. <strong>'Serial animasi Skibidi Toilet ini merupakan karya yang sangat luar biasa dan patut diapresiasi.'</strong></p>
          <p>Para juri mengakui kualitas visual, cerita yang unik, serta pesan moral yang diangkat dalam animasi tersebut. Setiap episode dari Skibidi Toilet menyajikan kisah yang menginspirasi, menggugah pemikiran, dan tentu saja menghibur. Salah satu aspek yang paling dihargai adalah cara kreatif dalam mengadaptasi kisah nyata menjadi sesuatu yang menarik dalam format animasi.</p>
          <p>Program 'OPTIONitive' ini diharapkan dapat terus berkembang, menjadi platform yang memberi ruang bagi karya-karya kreatif dari siswa SMAN 10 Bekasi dan memperkenalkan potensi mereka ke masyarakat luas.</p>
        `,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNN91odcRYpnGcyruwLo_xLhuga6NOwWkfA&s",
        slug: "option-menjadikan-skibidi-toilet-animasi-terbaik-2024",
        tanggal: "2024-11-17",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: "OPTION Masuk Nominasi Top 3 Ekstrakurikuler Terbaik Se-Kota Bekasi",
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque dui ante. Fusce consectetur magna quis gravida pulvinar. Sed mauris.",
        content: `
          <p>Acara penghargaan untuk ekstrakurikuler terbaik se-Kota Bekasi tahun ini berlangsung meriah, dengan banyak peserta yang menunjukkan potensi luar biasa. Salah satu yang mencuri perhatian adalah organisasi siswa, OPTION, yang berhasil masuk nominasi Top 3 ekstrakurikuler terbaik.</p>
          <p>Dalam acara tersebut, juri menilai berbagai aspek penting, seperti prestasi yang dihasilkan, dampak terhadap siswa, dan kemampuan dalam membina kerja sama tim. OPTION, yang memiliki berbagai program unggulan, seperti 'OPTIONitive', berhasil menunjukkan bahwa mereka layak mendapatkan pengakuan ini.</p>
          <p>"Kami merasa sangat terhormat dapat masuk nominasi ini. Ini adalah hasil dari kerja keras seluruh anggota OPTION dan dukungan dari pihak sekolah," ujar Wiliam Gabriel, ketua umum OPTION. "Kami berkomitmen untuk terus meningkatkan kualitas kegiatan ekstrakurikuler kami dan memberikan kontribusi positif bagi sekolah serta masyarakat."</p>
          <p>Meski belum memenangkan posisi pertama, pencapaian ini menjadi bukti bahwa OPTION adalah salah satu kekuatan terbesar dalam dunia ekstrakurikuler di Kota Bekasi. Mereka berharap dapat terus berkembang dan memberikan lebih banyak manfaat di masa depan.</p>
        `,
        gambar: "https://picsum.photos/400/200",
        slug: "option-top-3-ekstrakurikuler-bekasi",
        tanggal: "2024-11-16",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: "SMAN 10 Kota Bekasi Meraih Juara 1 Lomba Cerdas Cermat Se-Jawa Barat",
        deskripsi: "Prestasi membanggakan diraih oleh tim cerdas cermat SMAN 10 Kota Bekasi.",
        content: `
          <p>Tim cerdas cermat SMAN 10 Kota Bekasi berhasil meraih juara 1 dalam lomba cerdas cermat tingkat Jawa Barat yang diselenggarakan di Bandung. Acara ini diikuti oleh lebih dari 50 sekolah unggulan di provinsi tersebut, yang bersaing ketat dalam berbagai kategori soal yang menguji pengetahuan umum serta kemampuan berpikir kritis.</p>
          <p>"Kemenangan ini adalah hasil dari kerja keras dan dedikasi seluruh tim serta dukungan dari sekolah," ujar Kepala Sekolah SMAN 10 Kota Bekasi. "Kami sangat bangga dengan prestasi ini, dan kami berharap dapat terus mempertahankan kualitas dalam berbagai bidang, baik akademik maupun non-akademik."</p>
          <p>Para siswa yang mengikuti lomba tersebut juga merasa sangat bangga dapat mewakili sekolah mereka. "Ini adalah hasil kerja keras kami selama ini, dan kami tidak akan pernah menyerah untuk memberikan yang terbaik," ujar salah satu anggota tim cerdas cermat.</p>
          <p>Tim cerdas cermat SMAN 10 Kota Bekasi berharap dapat terus berprestasi dan membawa nama baik sekolah ke tingkat yang lebih tinggi. Mereka juga berharap prestasi ini dapat menjadi inspirasi bagi siswa lain untuk selalu berusaha dan berprestasi dalam bidang apa pun yang mereka tekuni.</p>
        `,
        gambar: "https://picsum.photos/400/300",
        slug: "sman-10-bekasi-juara-1-cerdas-cermat",
        tanggal: "2024-10-10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: "Hari Guru Nasional: SMAN 10 Kota Bekasi Mengadakan Acara Apresiasi Guru",
        deskripsi: "Acara Hari Guru diisi dengan berbagai kegiatan untuk menghormati jasa para guru.",
        content: `
          <p>Hari Guru Nasional tahun ini dirayakan dengan meriah di SMAN 10 Kota Bekasi. Sekolah mengadakan acara khusus untuk mengapresiasi jasa para guru yang telah memberikan pengajaran dan bimbingan terbaik bagi siswa-siswi. Kegiatan ini dihadiri oleh seluruh guru, siswa, serta orang tua yang mendukung acara tersebut.</p>
          <p>Acara ini meliputi pemberian penghargaan kepada guru teladan dan pertunjukan seni yang dipersembahkan oleh siswa-siswi. "Ini adalah bentuk penghormatan kami kepada guru-guru yang telah berdedikasi tinggi dalam membentuk generasi penerus bangsa," ujar Ketua OSIS.</p>
          <p>Selain itu, ada juga sesi khusus di mana siswa dapat menyampaikan ucapan terima kasih dan apresiasi mereka kepada guru-guru yang telah memberikan ilmu dan pengaruh positif dalam kehidupan mereka. Acara ini sangat bermakna, bukan hanya bagi guru, tetapi juga bagi siswa, yang merasa dihargai atas usaha mereka selama ini.</p>
          <p>SMAN 10 Kota Bekasi berharap dapat terus menjalin kerja sama yang baik antara guru dan siswa untuk menciptakan lingkungan pendidikan yang lebih baik di masa depan.</p>
        `,
        gambar: "https://picsum.photos/400/250",
        slug: "hari-guru-nasional-apresiasi-sman-10-bekasi",
        tanggal: "2024-11-25",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Tambahkan data demo lainnya...
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Berita', null, {});
  },
};
