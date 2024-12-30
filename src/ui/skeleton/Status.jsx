import React from 'react';

const StatusSkeleton = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-4 animate-pulse">Loading...</h1>
      <ul className="mt-6 space-y-4">
        <li className="flex items-center justify-between p-4 bg-gray-200 rounded-lg shadow animate-pulse">
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
          <div className="w-1/4 h-6 bg-gray-300 rounded"></div>
        </li>
        <li className="flex items-center justify-between p-4 bg-gray-200 rounded-lg shadow animate-pulse">
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
          <div className="w-1/4 h-6 bg-gray-300 rounded"></div>
        </li>
        <li className="flex items-center justify-between p-4 bg-gray-200 rounded-lg shadow animate-pulse">
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
          <div className="w-1/4 h-6 bg-gray-300 rounded"></div>
        </li>
      </ul>
    </div>
  );
};

export default StatusSkeleton;