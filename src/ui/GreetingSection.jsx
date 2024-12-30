import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService'; // Pastikan path ini sesuai dengan struktur folder Anda

import fotoKepsek from '../media/img/kepsek.png';

const SambutanKepalaSekolah = () => {
  const [kepalaSekolah, setKepalaSekolah] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.getKepalaSekolah(); // Mengambil data kepala sekolah dari API
        setKepalaSekolah(data); // Set data kepala sekolah
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading ke false setelah data diambil
      }
    };

    fetchData(); // Panggil fungsi fetchData
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-100 py-12 px-4 w-full">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (!kepalaSekolah) {
    return (
      <div className="bg-gray-100 py-12 px-4 w-full">
        <h1 className="text-center text-red-500">Data kepala sekolah tidak tersedia.</h1>
      </div>
    ); // Tampilkan pesan jika data tidak tersedia
  }

  return (
    <div className="md:col-span-9 bg-white rounded-xl shadow-md p-6 h-full">
  {/* Judul di atas kedua kartu */}
  <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
    Sambutan Kepala Sekolah
  </h3>

  {/* Grid untuk kartu */}
  <div className="grid grid-cols-1 md:grid-cols-1618 gap-6 h-full">
    {/* Kartu Foto Kepala Sekolah */}
    <div className="flex items-center justify-center bg-gray-50 rounded-lg p-6 shadow-inner relative h-60 md:h-80">
      {/* Foto dan detail dalam wrapper */}
      <div className="text-center">
        <img
          src={fotoKepsek}
          alt={kepalaSekolah.nama}
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover mb-4 border-4 border-indigo-500"
          loading="lazy"
        />
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
          {kepalaSekolah.nama}
        </h3>
        <p className="text-sm md:text-base text-gray-500 mt-1">
          Kepala Sekolah
        </p>
      </div>
    </div>

    {/* Kartu Sambutan */}
    <div className="relative bg-gray-50 rounded-lg shadow-inner p-6 flex flex-col justify-between h-96 md:h-[28rem]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-80 rounded-lg pointer-events-none"></div>

      {/* Area Sambutan */}
      <textarea
        readOnly
        className="w-full h-full bg-transparent text-gray-700 text-base md:text-lg leading-relaxed resize-none focus:outline-none overflow-y-auto"
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