import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavSection from "../ui/NavSection";
import Footer from "../ui/FooterSection";
import apiService from "../services/apiService"; // Pastikan ini sesuai dengan lokasi sebenarnya
import BeritaSkeleton from "../ui/skeleton/berita/Skeleton";

const BeritaPage = () => {
  const [beritaData, setBeritaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [beritaPerPage] = useState(12); // Menampilkan 10 berita per halaman

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await apiService.getAllBerita(); // Ambil data dari API
        const berita = response.data;

        // Sort berita berdasarkan tanggal terbaru
        const sortedBerita = berita.sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));

        setBeritaData(sortedBerita);
      } catch (err) {
        setError("Gagal memuat berita");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBerita();
  }, []);

  // Mengatur margin-top untuk memberikan ruang bagi navbar
  const contentStyle = {
    paddingTop: "7rem", // Sesuaikan tinggi ini dengan tinggi NavSection
  };

  // Pagination Logic
  const indexOfLastBerita = currentPage * beritaPerPage;
  const indexOfFirstBerita = indexOfLastBerita - beritaPerPage;
  const currentBerita = beritaData.slice(indexOfFirstBerita, indexOfLastBerita);

  const totalPages = Math.ceil(beritaData.length / beritaPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return (
      <div>
        <NavSection />
        <div style={contentStyle}>
          <div className="py-20">
            <BeritaSkeleton />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <NavSection />
        <div style={contentStyle}>
          <div className="py-20 text-center text-red-500">
            <p>Error: {error}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (beritaData.length === 0) {
    return (
      <div>
        <NavSection />
        <div style={contentStyle}>
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Berita Terbaru</h1>
                <p className="text-gray-600 mt-2">
                Berikut adalah daftar berita terbaru dari SMAN 10 Bekasi.
                </p>
            </div>
          <div className="py-20 text-center text-gray-500">
            <p>Tidak ada berita yang tersedia saat ini.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavSection />
      <main style={contentStyle} className="bg-gray-100 py-10 px-4 lg:px-14">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Berita Terbaru</h1>
            <p className="text-gray-600 mt-2">
              Berikut adalah daftar berita terbaru dari SMAN 10 Bekasi.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentBerita.map((berita) => (
              <Link
                key={berita.id}
                to={`/berita/${berita.slug}`} // Gunakan slug untuk URL detail berita
                className="block"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={berita.gambar}
                    alt={berita.judul}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
                      {berita.judul}
                    </h2>
                    <p className="text-gray-600 mt-4 line-clamp-3">
                      {berita.deskripsi}
                    </p>
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
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav>
              <ul className="flex space-x-2">
                {/* Previous Button */}
                {currentPage > 1 && (
                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                    >
                      Prev
                    </button>
                  </li>
                )}
                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className={`px-4 py-2 rounded-md ${
                        currentPage === index + 1
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                {/* Next Button */}
                {currentPage < totalPages && (
                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                    >
                      Next
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BeritaPage;
