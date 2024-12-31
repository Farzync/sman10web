import React from 'react';

const ExtracurricularSkeleton = () => {
    return (
        <section className="p-5 relative py-24 bg-gradient-to-b from-gray-100 to-blue-50">
            <div className="text-center mb-8">
                <div className="text-3xl font-bold text-gray-300 bg-gray-200 h-8 w-40 mx-auto rounded"></div>
                <div className="h-1 w-20 bg-gray-200 mx-auto mt-2"></div>
            </div>
            <div className="text-center mb-8">
                <p className="px-4 md:px-36 text-gray-300 bg-gray-200 h-6 w-3/4 mx-auto rounded"></p>
            </div>
            <div className="relative">
                <div 
                    className="flex space-x-6 overflow-x-auto scroll-smooth pb-6 hide-scrollbar px-2 pt-16"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {/* Skeleton for each extracurricular item */}
                    {[...Array(5)].map((_, index) => (
                        <div 
                            key={index}
                            className="flex-shrink-0 w-80 h-80 bg-white rounded-xl shadow-lg animate-pulse mt-8"
                        >
                            <div className="relative">
                                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                                    <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
                                </div>
                                <div className="pt-20 p-6">
                                    <div className="text-center mb-4">
                                        <div className="text-xl font-bold text-gray-300 bg-gray-200 h-6 w-32 mx-auto rounded"></div>
                                        <p className="text-sm text-gray-300 bg-gray-200 h-4 w-24 mx-auto rounded mt-2"></p>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-4 mb-4 min-h-[100px]">
                                        <p className="text-gray-300 bg-gray-200 h-4 w-64 mx-auto rounded"></p>
                                    </div>
                                    <div className="flex items-center justify-between border-t pt-4">
                                        <div className="flex flex-col space-y-1">
                                            <span className="text-xs font-medium text-gray-300 bg-gray-200 h-4 w-32 mx-auto rounded"></span>
                                            <span className="text-sm font-semibold text-gray-300 bg-gray-200 h-4 w-24 mx-auto rounded"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skeleton for buttons */}
                <button 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full animate-pulse"
                    disabled
                >
                    &lt;
                </button>
                <button 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full animate-pulse"
                    disabled
                >
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default ExtracurricularSkeleton;
