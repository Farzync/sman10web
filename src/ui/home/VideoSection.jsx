import React, { useEffect, useState } from "react";
import Skeleton from "../skeleton/home/VideoSkeleton"; // Import skeleton
import Video from "../../media/vid/background.mp4"; // Ganti dengan path video yang sesuai
import BackgroundImg from "../../media/img/background.jpg"; // Ganti dengan path gambar poster yang sesuai
import { Link } from "react-router-dom"; // Ganti dengan Link dari react-router-dom
import apiService from "../../services/apiService"; // Import apiService

const VideoSection = () => {
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.getVideoData(); // Ambil data dari API
        setVideoData(data); // Simpan data ke state
      } catch (error) {
        console.error("Error fetching video data:", error);
      } finally {
        setLoading(false); // Set loading ke false setelah data diambil
      }
    };

    fetchData(); // Panggil fungsi fetchData
  }, []);

  if (!videoData || loading) {
    return <Skeleton />; // Tampilkan skeleton loading hingga data berhasil diambil
  }

  return (
    <section id="video-section" className="h-screen bg-gray-800">
      <div className="relative z-10 w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={Video} // Ganti dengan path video yang sesuai
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={BackgroundImg} // Ganti dengan gambar poster yang sesuai
        ></video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>

        {/* Content */}
        <div className="flex items-center justify-center h-full text-center text-white z-10 relative">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {videoData.title} {/* Tampilkan judul dari data */}
            </h1>
            <p className="text-base md:text-lg italic">
              {videoData.description} {/* Tampilkan deskripsi dari data */}
            </p>
            <div className="flex font-semibold justify-center items-center space-x-4 mt-4">
              <Link
                to="/berita"
                className="px-10 py-4 bg-sky-800 text-white font-semibold shadow-lg rounded-full transition-all duration-300 ease-in-out transform hover:bg-indigo-600 hover:scale-110 hover:shadow-xl focus:ring-4 focus:outline-none"
              >
                Berita Selengkapnya
              </Link>
            </div>
          </div>
        </div>

        {/* Selengkapnya Button */}
        <div 
          className="absolute bottom-8 z-20 left-1/2 transform -translate-x-1/2 text-white cursor-pointer text-center" 
          onClick={() => {
            const element = document.getElementById('greetings-section');
            if (element) {
              window.scrollTo({
                top: element.offsetTop - 5, // Offset 5px ke atas dari posisi elemen
                behavior: 'smooth',
              });
            }
          }}
        >
          <button className="flex flex-col items-center transition-all duration-300 hover:translate-y-1">
            <span className="text-lg mb-2 cursor-pointer">Selengkapnya</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;