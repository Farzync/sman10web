import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavSection from "../ui/NavSection";
import Footer from "../ui/FooterSection";
import { FaUser } from "react-icons/fa";
import apiService from "../services/apiService"; // Sesuaikan dengan lokasi sebenarnya
import BeritaSkeleton from "../ui/skeleton/berita/Skeleton";

const BeritaDetail = () => {
  const { slug } = useParams(); // Ambil slug dari URL params
  const [berita, setBerita] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [otherBerita, setOtherBerita] = useState([]); // State untuk berita lainnya

  useEffect(() => {
    const fetchBeritaDetail = async () => {
      try {
        const response = await apiService.getBeritaBySlug(slug);
        setBerita(response.data);
      } catch (err) {
        setError("Gagal memuat detail berita");
      } finally {
        setIsLoading(false);
      }
    };

    const fetchOtherBerita = async () => {
      try {
        const response = await apiService.getAllBerita(); // Ambil semua berita
        const berita = response.data;

        // Sort berita berdasarkan tanggal terbaru
        const sortedBerita = berita.sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));

        // Ambil 5 berita lainnya, kecuali berita yang sedang ditampilkan
        const filteredBerita = sortedBerita.filter(b => b.slug !== slug).slice(0, 5);
        setOtherBerita(filteredBerita);
      } catch (err) {
        console.error("Gagal memuat berita lainnya", err);
      }
    };

    fetchBeritaDetail();
    fetchOtherBerita();
  }, [slug]); // Effect akan dipanggil setiap kali slug berubah

  if (isLoading) {
    return (
      <div>
        <NavSection />
        <div className="py-20">
          <BeritaSkeleton />
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <NavSection />
        <div className="py-20 text-center text-red-500">
          <p>{error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!berita) {
    return (
      <div>
        <NavSection />
        <div className="py-20 text-center text-gray-500">
          <p>Berita tidak ditemukan.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavSection />
      <main style={{ paddingTop: "7rem" }} className="bg-gray-50 py-10 px-4 lg:px-14">
        <div className="container mx-auto max-w-screen-lg">
          {/* Card Container */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 relative">
            {/* Tanggal dan Info Admin */}
            <div className="absolute top-6 left-6 sm:left-12 flex items-center space-x-4 text-gray-600">
              <p className="text-sm font-medium">
                {new Date(berita.tanggal).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
  
            <div className="absolute top-6 right-6 sm:right-12 flex items-center space-x-2 text-gray-500">
              <FaUser />
              <p className="text-sm font-medium">Dibuat: Admin</p>
            </div>
  
            {/* Judul Berita */}
            <div className="text-center sm:text-left p-8 pt-16">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight transition-colors duration-300 hover:text-blue-600">
                {berita.judul}
              </h1>
            </div>
  
            {/* Gambar */}
            <div className="flex justify-center mb-8">
              <img
                src={berita.gambar}
                alt={berita.judul}
                className="w-full sm:w-3/4 lg:w-2/3 h-96 object-contain rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

  
            {/* Isi Konten Berita */}
            <div className="prose lg:prose-xl max-w-none p-8 text-gray-700 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: berita.content }} />
            </div>
          </div>
  
          {/* Berita Lainnya */}
          <div className="container mx-auto max-w-screen-lg mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Berita Lainnya</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherBerita.map((beritaItem) => (
                <div
                  key={beritaItem.slug}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                >
                  <img
                    src={beritaItem.gambar}
                    alt={beritaItem.judul}
                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                      {beritaItem.judul}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {new Date(beritaItem.tanggal).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <button
                      onClick={() => (window.location.href = `/berita/${beritaItem.slug}`)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-700"
                    >
                      Baca Selengkapnya
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
  
};

export default BeritaDetail;