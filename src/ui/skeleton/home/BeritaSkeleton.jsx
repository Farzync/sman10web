import React from 'react';

const CardSkeleton = () => (
  <div className="w-80 flex-shrink-0 bg-white rounded-lg shadow-lg p-4">
    <div className="h-40 bg-gray-300 animate-pulse rounded-lg mb-4"></div>
    <div className="w-3/4 h-6 bg-gray-300 animate-pulse rounded mb-2"></div>
    <div className="w-2/4 h-4 bg-gray-300 animate-pulse rounded"></div>
  </div>
);

const BeritaSkeleton = () => {
  return (
    <section className="py-16 px-4 md:px-8 mx-auto bg-gradient-to-b from-blue-50 to-sky-100">
      {/* Skeleton Title and Divider */}
      <div className="text-center mb-8">
        <div className="w-1/3 h-8 bg-gray-300 animate-pulse mx-auto mb-2"></div>
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
      </div>
      
      {/* Skeleton for the List of Berita Cards */}
      <div className="relative">
        <div className="flex space-x-6 overflow-x-auto scroll-smooth pb-6 hide-scrollbar px-2 pt-16">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
      
      {/* Skeleton for the "Selengkapnya" Button */}
      <div className="text-center mb-2 mt-24">
        <div className="w-40 h-12 bg-gray-300 animate-pulse rounded-full mx-auto mb-4"></div>
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
      </div>
    </section>
  );
};

export default BeritaSkeleton;
