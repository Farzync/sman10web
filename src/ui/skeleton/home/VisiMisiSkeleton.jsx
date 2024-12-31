const MisiSkeleton = () => {
    return (
      <section id="misi-section" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Judul */}
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-300 w-40 mx-auto rounded"></div>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
          </div>
  
          <div className="grid md:grid-cols-1 gap-8">
            {/* Visi Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse">
              <div className="h-6 bg-gray-300 w-24 mb-4 rounded"></div>
              <div className="h-8 bg-gray-300 w-full mb-4 rounded"></div>
            </div>
  
            {/* Misi Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse">
              <div className="h-6 bg-gray-300 w-24 mb-4 rounded"></div>
              <div className="space-y-3">
                <div className="h-6 bg-gray-300 w-full rounded mb-2"></div>
                <div className="h-6 bg-gray-300 w-full rounded mb-2"></div>
                <div className="h-6 bg-gray-300 w-full rounded mb-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MisiSkeleton;
  