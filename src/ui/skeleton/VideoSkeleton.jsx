import React from "react";

const VideoSkeleton = () => {
  return (
    <section id="video-section" className="h-screen bg-gray-800">
      <div className="relative z-10 w-full h-screen overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-700 animate-pulse"></div>

        {/* Overlay Placeholder */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>

        {/* Content Placeholder */}
        <div className="flex items-center justify-center h-full text-center text-white z-10 relative">
            <div>
                {/* Memperpanjang judul */}
                <div className="h-12 w-4/5 bg-gray-700 rounded mb-4 animate-pulse"></div>
                {/* Memperpanjang deskripsi */}
                <div className="h-8 w-3/4 bg-gray-700 rounded mb-4 animate-pulse"></div>
                <div className="flex justify-center items-center space-x-4 mt-4">
                {/* Memperpanjang tombol */}
                <div className="h-14 w-36 bg-sky-700 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>

        {/* Selengkapnya Button Placeholder */}
        <div className="absolute bottom-8 z-20 left-1/2 transform -translate-x-1/2 text-white cursor-pointer text-center">
          <div className="flex flex-col items-center transition-all duration-300">
            <div className="h-6 w-24 bg-gray-700 rounded mb-2 animate-pulse"></div>
            <div className="h-6 w-6 bg-gray-700 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSkeleton;