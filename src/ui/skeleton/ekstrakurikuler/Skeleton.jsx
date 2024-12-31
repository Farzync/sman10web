import React from 'react';

const ExtracurricularSkeleton = () => {
  // Array untuk membuat placeholder skeleton
  const skeletonItems = Array.from({ length: 12 }, (_, index) => index);

  return (
    <div className="container mx-auto px-4 lg:px-14">
      {/* Judul Skeleton */}
      <div className="text-center mb-8 animate-pulse">
        <div className="h-10 bg-gray-300 w-64 mx-auto mb-4 rounded"></div>
        <div className="h-4 bg-gray-200 w-96 mx-auto rounded"></div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skeletonItems.map((item) => (
          <div 
            key={item} 
            className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse"
          >
            {/* Logo Skeleton */}
            <div className="flex justify-center p-6 bg-gray-100">
              <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
            </div>

            {/* Konten Skeleton */}
            <div className="p-6">
              {/* Judul */}
              <div className="h-8 bg-gray-300 w-3/4 mx-auto mb-4 rounded"></div>
              
              {/* Subjudul */}
              <div className="h-4 bg-gray-200 w-1/2 mx-auto mb-4 rounded"></div>
              
              {/* Deskripsi */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 w-full rounded"></div>
                <div className="h-4 bg-gray-200 w-5/6 rounded"></div>
                <div className="h-4 bg-gray-200 w-4/6 rounded"></div>
              </div>
            </div>

            {/* Footer Skeleton */}
            <div className="p-4 border-t border-gray-100">
              <div className="h-4 bg-gray-200 w-1/2 mx-auto rounded"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="flex justify-center mt-8 space-x-2 animate-pulse">
        {[1, 2, 3, 4, 5].map((page) => (
          <div 
            key={page} 
            className="w-10 h-10 bg-gray-300 rounded-md"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ExtracurricularSkeleton;