import React, { useEffect, useState } from 'react';
import apiService from '../../services/apiService'; // Pastikan path ini sesuai dengan struktur folder Anda
import VisiMisiSkeleton from '../skeleton/home/VisiMisiSkeleton';

const VisiMisi = () => {
  const [visiMisi, setVisiMisi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState(false); // State tambahan untuk menandai apakah data telah diambil

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.getVisiMisi(); // Mengambil data visi dan misi dari API
        // Mengonversi string JSON misi menjadi array
        const misiArray = JSON.parse(data.misi);
        setVisiMisi({ ...data, misi: misiArray }); // Set data visi dan misi
      } catch (error) {
        console.error('Error fetching visi dan misi data:', error);
      } finally {
        setLoading(false); // Set loading ke false setelah data diambil
        setDataFetched(true); // Tandai bahwa data telah diambil
      }
    };

    fetchData(); // Panggil fungsi fetchData
  }, []);

  if (loading) {
    return <VisiMisiSkeleton />; // Tampilkan skeleton saat loading
  }

  // Jika data telah diambil tetapi tidak ada, tetap tampilkan skeleton
  if (dataFetched && !visiMisi) {
    return <VisiMisiSkeleton />; // Tampilkan skeleton jika data tidak ada
  }

  return (
    <section id="misi-section" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Visi & Misi</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
      </div>

        <div className="grid md:grid-cols-1 gap-8">
          {/* Visi Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Visi</h3>
            <p className="text-lg text-gray-600 font-bold">
              {visiMisi.visi}
            </p>
          </div>

          {/* Misi Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Misi</h3>
            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
              {visiMisi.misi.map((misi, index) => (
                <li key={index}>{misi}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;