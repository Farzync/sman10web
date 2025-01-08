import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Gunakan react-router-dom untuk link navigasi
import apiService from '../../services/apiService'; // Import apiService

import BeritaSkeleton from '../skeleton/home/BeritaSkeleton';

// Komponen kartu berita
const BeritaCard = ({ berita }) => (
  <div
    className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-2xl cursor-pointer transform hover:scale-105 duration-300"
  >  
    <img
      src={berita.gambar}
      alt={berita.judul}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 line-clamp-2">{berita.judul}</h2>
      <p className="text-gray-600 mt-4 line-clamp-3">{berita.deskripsi}</p>
    </div>
    <div className="p-4 text-sm text-gray-500 border-t border-gray-100">
      <p>
        Tanggal:{" "}
        {new Date(berita.tanggal).toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  </div>
);

// Komponen utama untuk berita
export default function BeritaSection() {
  const [beritaData, setBeritaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false); // State tambahan untuk menandai apakah data telah diambil
  const containerRef = useRef(null); // Referensi untuk container scroll

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await apiService.getAllBerita(); // Ambil data berita
        const berita = response.data; // Ambil data dari properti 'data' dalam response API

        // Sort berita berdasarkan tanggal terbaru tanpa pemotongan
        const sortedBerita = berita.sort((a, b) => new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime());

        setBeritaData(sortedBerita); // Set data yang sudah di-sort
      } catch (err) {
        setError("Gagal memuat berita");
      } finally {
        setIsLoading(false);
        setDataFetched(true); // Tandai bahwa data telah diambil
      }
    };

    fetchBerita();
  }, []);

  if (isLoading) {
    return <BeritaSkeleton />; // Tampilkan skeleton saat data sedang diambil
  }

  // Jika data telah diambil tetapi ada error, tetap tampilkan skeleton
  if (dataFetched && error) {
    return <BeritaSkeleton />; // Tampilkan skeleton jika ada error
  }

  return (
    <section className="py-16 px-4 md:px-8 mx-auto bg-gradient-to-b from-blue-50 to-sky-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Berita Kami</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
      </div>
      <div className="relative">
        {/* Container berita tanpa tombol scroll kiri dan kanan */}
        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth pb-6 hide-scrollbar px-2 pt-16"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {beritaData.map((berita) => (
            <Link
              key={berita.id}
              to={`/berita/${berita.slug}`}  // Gunakan slug untuk URL
              className="block w-80 flex-shrink-0"
            >
              <BeritaCard berita={berita} />
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center mb-2 mt-24">
        <Link 
          to="/berita"
          className="px-10 py-4 bg-sky-800 text-white font-semibold shadow-lg rounded-full transition-all duration-300 ease-in-out transform hover:bg-indigo-600 hover:scale-110 hover:shadow-xl focus:ring-4 focus:outline-none"
        >
          Berita Selengkapnya
        </Link>
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
      </div>
    </section>
  );
}
