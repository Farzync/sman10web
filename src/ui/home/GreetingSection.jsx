import React, { useEffect, useState } from 'react';
import GreetingSkeleton from '../skeleton/GreetingSkeleton';

import apiService from '../../services/apiService'; // Pastikan path ini sesuai dengan struktur folder Anda

import fotoKepsek from '../../media/img/kepsek.png';

const SambutanKepalaSekolah = () => {
  const [kepalaSekolah, setKepalaSekolah] = useState(null);
const [loading, setLoading] = useState(true);
const [dataFetched, setDataFetched] = useState(false); // State tambahan untuk menandai apakah data telah diambil

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await apiService.getKepalaSekolah(); // Mengambil data kepala sekolah dari API
      setKepalaSekolah(data); // Set data kepala sekolah
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading ke false setelah data diambil
      setDataFetched(true); // Tandai bahwa data telah diambil
    }
  };

  fetchData(); // Panggil fungsi fetchData
}, []);

if (loading) {
  return <GreetingSkeleton />; // Tampilkan skeleton saat loading
}

// Jika data telah diambil tetapi tidak ada, tetap tampilkan skeleton
if (dataFetched && !kepalaSekolah) {
  return <GreetingSkeleton />; // Tampilkan skeleton jika data tidak ada
}

  return (
    <div className="md:col-span-9 bg-white rounded-2xl shadow-lg p-8 h-full" id='greetings-section'>
      {/* Judul di atas kedua kartu */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Sambutan Kepala Sekolah</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
      </div>
  
      {/* Grid untuk kartu */}
      <div className="grid md:grid-cols-1618 gap-8 h-full">
        {/* Kartu Foto Kepala Sekolah */}
        <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6 shadow-md relative h-full">
          {/* Foto dan detail dalam wrapper */}
          <div className="text-center mb-6">
            <img
              src={fotoKepsek}
              alt={kepalaSekolah.nama}
              className="w-50 h-50 rounded-full object-cover border-8 border-indigo-500 mb-4"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold text-gray-900">
              {kepalaSekolah.nama}
            </h3>
            <p className="text-base text-gray-500 mt-1">
              Kepala Sekolah
            </p>
          </div>
        </div>
  
        {/* Kartu Sambutan */}
        <div className="relative bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col justify-between min-h-[28rem] md:min-h-[30rem]">
          {/* Overlay yang dihapus pada area textarea */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent opacity-0 rounded-lg pointer-events-none"></div>
  
          {/* Area Sambutan */}
          <textarea
            readOnly
            className="w-full h-full bg-transparent text-gray-700 text-lg leading-relaxed resize-none focus:outline-none overflow-auto"
            defaultValue={kepalaSekolah.sambutan}
            style={{
              scrollbarWidth: 'none', // Untuk Firefox
              msOverflowStyle: 'none', // Untuk IE
            }}
          />
          {/* CSS tambahan untuk menyembunyikan scrollbar */}
          <style jsx>{`
            textarea::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
  
};

export default SambutanKepalaSekolah;