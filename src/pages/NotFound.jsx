import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavSection from "../ui/NavSection";
import Footer from "../ui/FooterSection";
import BgImg from '../media/img/background.jpg';
import RickRoll from '../media/vid/rickroll.mp4';

const NotFound = () => {
  const audioRef = useRef(null); // Referensi untuk audio

  useEffect(() => {
    const audio = audioRef.current;

    // Coba untuk memulai audio secara paksa
    const playAudio = () => {
      audio.play().catch(error => {
        console.log("Audio autoplay was prevented:", error);
      });
    };

    // Tambahkan event listener untuk interaksi pengguna
    document.addEventListener('click', playAudio);
    document.addEventListener('touchstart', playAudio);

    return () => {
      document.removeEventListener('click', playAudio);
      document.removeEventListener('touchstart', playAudio);
    };
  }, []);

  return (
    <div>
      <NavSection />
        <div className="fixed inset-0 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center border-4 border-white shadow-lg"
          style={{ 
            backgroundImage: `url(${BgImg})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'blur(5px)', 
            zIndex: -1, 
          }}
        />

        {/* Audio Element */}
        <audio ref={audioRef} loop>
          <source src={RickRoll} type="audio/mp4" />
        </audio>

        {/* Overlay Content */}
        <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-60">
          <div className="text-center max-w-2xl px-4">
            <div className="mb-8">
              <h1 className="text-9xl font-extrabold text-white animate-pulse">
                404
              </h1>
              <h2 className="text-4xl font-bold text-yellow-300 mb-4">
                Ups! Kamu Ketahuan 😏
              </h2>
            </div>

            <div className="bg-white bg-opacity-20 rounded-xl p-6 mb-8">
              <p className="text-white text-xl mb-4">
                Sepertinya kamu sedang mencari sesuatu yang tidak ada...
                Atau mungkin kamu sedang dalam misi khusus? 🕵️‍♂️
              </p>
              <p className="text-yellow-200 italic">
                "Never gonna give you up, never gonna let you down!" 🎵
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <Link 
                to="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg 
                hover:bg-blue-700 transition duration-300 
                flex items-center space-x-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span>Kembali ke Beranda</span>
              </Link>

              <button 
                onClick={() => {
                  // Jika ingin menambahkan aksi tambahan
                  alert('Nice try! 😂');
                }}
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg 
                hover:bg-yellow-600 transition duration-300"
              >
                Coba Lagi
              </button>
            </div>
          </div>
        </div>

        {/* Easter Egg Text */}
        <div className="fixed bottom-4 left-0 right-0 text-center">
          <p className="text-white text-sm opacity-50">
            Terima kasih telah mengunjungi halaman rahasia ini! 🕺 
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;