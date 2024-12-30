import React from 'react';

const NavSkeleton = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-black text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo Skeleton */}
        <div className="h-8 w-32 bg-gray-700 rounded animate-pulse"></div>

        {/* Mobile Menu Toggle Skeleton */}
        <div className="lg:hidden h-6 w-6 bg-gray-700 rounded animate-pulse"></div>

        {/* Desktop Navigation Skeleton */}
        <ul className="hidden lg:flex space-x-6 items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="relative group">
              <div className="h-6 w-24 bg-gray-700 rounded animate-pulse"></div>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Skeleton */}
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-blue-800 to-blue-600 lg:hidden">
          <ul className="px-4 py-4 space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index} className="h-8 w-full bg-gray-700 rounded animate-pulse"></li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavSkeleton;