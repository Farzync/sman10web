import React from "react";

const BeritaSkeleton = () => {
  return (
    <div className="py-10 px-4 lg:px-14 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="h-8 bg-gray-300 rounded-md w-48 mx-auto animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-md w-64 mx-auto mt-4 animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse"
            >
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-300 rounded-md w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-md w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
              </div>
              <div className="p-4 text-sm border-t border-gray-100">
                <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeritaSkeleton;