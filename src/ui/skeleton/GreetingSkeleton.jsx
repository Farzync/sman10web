const GreetingSkeleton = () => {
    return (
      <div className="md:col-span-9 bg-white rounded-2xl shadow-lg p-8 h-full animate-pulse">
        {/* Judul di atas kedua kartu */}
        <div className="text-center mb-8">
          <div className="h-8 bg-gray-300 w-40 mx-auto rounded"></div>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
        </div>
    
        {/* Grid untuk kartu */}
        <div className="grid md:grid-cols-1618 gap-8 h-full">
          {/* Kartu Foto Kepala Sekolah */}
          <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6 shadow-md relative h-full">
            {/* Foto dan detail dalam wrapper */}
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gray-300 mb-4"></div>
              <div className="w-32 h-6 bg-gray-300 rounded mb-2"></div>
              <div className="w-24 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
    
          {/* Kartu Sambutan */}
          <div className="relative bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col justify-between min-h-[28rem] md:min-h-[30rem]">
            {/* Overlay yang dihapus pada area textarea */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent opacity-0 rounded-lg pointer-events-none"></div>
    
            {/* Area Sambutan */}
            <div className="w-full h-full bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default GreetingSkeleton;
  