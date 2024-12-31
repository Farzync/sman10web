import React from 'react';

// Skeleton untuk counter (angka dan label)
const CounterSkeleton = () => (
  <div className="text-center min-w-[250px]">
    <div className="w-24 h-24 bg-gray-300 animate-pulse rounded-full mb-4 mx-auto"></div>
    <div className="w-40 h-6 bg-gray-300 animate-pulse mx-auto rounded"></div>
  </div>
);

const CountingSkeleton = () => {
  return (
    <section className="relative h-[40vh] overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
      
      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70" />

      {/* Content Container */}
      <div className="relative h-full overflow-x-auto overflow-y-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 w-full">
          <div className="flex justify-center items-center gap-32 px-16">
            <CounterSkeleton />
            <CounterSkeleton />
            <CounterSkeleton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountingSkeleton;
