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

    fetchBeritaDetail();
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
          <main style={{ paddingTop: "7rem" }} className="bg-gray-100 py-10 px-4 lg:px-14">
            <div className="container mx-auto max-w-screen-lg">
              {/* Card Container */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 relative">
      
                {/* Tanggal dan Info Admin */}
                <div className="absolute top-6 left-6 sm:left-12 flex items-center space-x-4 text-gray-600">
                    <p className="text-sm">
                        {new Date(berita.tanggal).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        })}
                    </p>
                </div>

                <div className="absolute top-6 right-6 sm:right-12 flex items-center space-x-2 text-gray-500">
                    <FaUser />
                    <p className="text-sm">Dibuat: Admin</p>
                </div>

                {/* Judul Berita */}
                <div className="text-center sm:text-left p-8 pt-16"> {/* Add padding-top here */}
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
                        {berita.judul}
                    </h1>
                </div>
      
                {/* Gambar */}
                <div className="flex justify-center mb-8">
                  <img
                    src={berita.gambar}
                    alt={berita.judul}
                    className="w-full sm:w-2/3 h-80 object-cover rounded-lg shadow-xl"
                    loading="lazy"
                  />
                </div>
      
                {/* Isi Konten Berita */}
                <div className="prose lg:prose-xl max-w-none p-8">
                  <div dangerouslySetInnerHTML={{ __html: berita.content }} />
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
    );
};

export default BeritaDetail;