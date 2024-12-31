import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavSection from "../ui/NavSection";
import Footer from "../ui/FooterSection";
import apiService from "../services/apiService";
import ExtracurricularSkeleton from "../ui/skeleton/ekstrakurikuler/Skeleton"; // Buat skeleton khusus ekstrakurikuler

const Ekstrakurikuler = () => {
  const [ekstrakurikulerData, setEkstrakurikulerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [ekstrakurikulerPerPage] = useState(12);

  useEffect(() => {
    const fetchEkstrakurikuler = async () => {
      try {
        const response = await apiService.getEkstrakurikuler(); // Gunakan fungsi dari apiService
        const ekstrakurikuler = response.ekstrakurikuler;

        // Sort ekstrakurikuler berdasarkan nama (opsional)
        const sortedEkstrakurikuler = ekstrakurikuler.sort((a, b) => 
          a.shortName.localeCompare(b.shortName)
        );

        setEkstrakurikulerData(sortedEkstrakurikuler);
      } catch (err) {
        setError("Gagal memuat data Ekstrakurikuler");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEkstrakurikuler();
  }, []);

  // Mengatur margin-top untuk memberikan ruang bagi navbar
  const contentStyle = {
    paddingTop: "7rem",
  };

  // Pagination Logic
  const indexOfLastEkstrakurikuler = currentPage * ekstrakurikulerPerPage;
  const indexOfFirstEkstrakurikuler = indexOfLastEkstrakurikuler - ekstrakurikulerPerPage;
  const currentEkstrakurikuler = ekstrakurikulerData.slice(
    indexOfFirstEkstrakurikuler, 
    indexOfLastEkstrakurikuler
  );

  const totalPages = Math.ceil(ekstrakurikulerData.length / ekstrakurikulerPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return (
      <div>
        <NavSection />
        <div style={contentStyle}>
          <div className="py-20">
            <ExtracurricularSkeleton />
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

  if (ekstrakurikulerData.length === 0) {
    return (
      <div>
        <NavSection />
        <div style={contentStyle}>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Ekstrakurikuler</h1>
            <p className="text-gray-600 mt-2">
              Daftar ekstrakurikuler di SMAN 10 Bekasi.
            </p>
          </div>
          <div className="py-20 text-center text-gray-500">
            <p>Tidak ada ekstrakurikuler yang tersedia saat ini.</p>
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
            <h1 className="text-4xl font-bold text-gray-800">Ekstrakurikuler</h1>
            <p className="text-gray-600 mt-2">
              Berikut adalah daftar ekstrakurikuler di SMAN 10 Bekasi.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentEkstrakurikuler.map((ekstrakurikuler) => (
              <Link
                key={ekstrakurikuler.id}
                to={`/ekstrakurikuler/${ekstrakurikuler.shortName.toLowerCase().replace(/\s+/g, '-')}`}
                className="block"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center p-6 bg-blue-50">
                    <img
                      src={ekstrakurikuler.logo}
                      alt={ekstrakurikuler.shortName}
                      className="w-32 h-32 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-blue-900 text-center mb-2">
                      {ekstrakurikuler.shortName}
                    </h2>
                    <p className="text-blue-600 text-center mb-4">
                      {ekstrakurikuler.fullName}
                    </p>
                    <p className="text-gray-600 text-center line-clamp-3">
                      {ekstrakurikuler.description}
                    </p>
                  </div>
                  <div className="p-4 text-sm text-gray-500 border-t border-gray-100 text-center">
                    <p>Ketua: {ekstrakurikuler.chairman}</p>
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
                      className=" px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
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

export default Ekstrakurikuler;