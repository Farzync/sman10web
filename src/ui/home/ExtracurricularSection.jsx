import React, { useEffect, useState, useRef, useCallback } from 'react';
import apiService from '../../services/apiService';
import ExtracurricularSkeleton from '../skeleton/home/ExtracurricularSekeleton';

const ExtracurricularSection = () => {
    const [extracurriculars, setExtracurriculars] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dataFetched, setDataFetched] = useState(false); // State tambahan untuk menandai apakah data telah diambil
    const scrollContainerRef = useRef(null);
    const animationFrameRef = useRef(null);
    const scrollSpeedRef = useRef(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await apiService.getEkstrakurikuler();
                setExtracurriculars(data.ekstrakurikuler);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
                setDataFetched(true); // Tandai bahwa data telah diambil
            }
        };

        fetchData();
    }, []);

    const startInfiniteScroll = useCallback(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const scroll = () => {
            scrollContainer.scrollLeft += scrollSpeedRef.current;

            const halfWidth = scrollContainer.scrollWidth / 2;
            if (scrollContainer.scrollLeft >= halfWidth) {
                scrollContainer.scrollLeft = 0;
            }

            animationFrameRef.current = requestAnimationFrame(scroll);
        };

        animationFrameRef.current = requestAnimationFrame(scroll);

        const handleMouseEnter = () => {
            cancelAnimationFrame(animationFrameRef.current);
            scrollSpeedRef.current = 0;
        };

        const handleMouseLeave = () => {
            scrollSpeedRef.current = 1;
            animationFrameRef.current = requestAnimationFrame(scroll);
        };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameRef.current);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        if (extracurriculars.length > 0) {
            startInfiniteScroll();
        }

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [extracurriculars, startInfiniteScroll]);

    if (error) {
        return (
            <div className="p-5 text-red-600 text-center">
                Error loading data: {error}
            </div>
        );
    }

    if (loading) {
        return <ExtracurricularSkeleton />;
    }

    // Jika data telah diambil tetapi tidak ada, tetap tampilkan skeleton
    if (dataFetched && !extracurriculars.length) {
        return <ExtracurricularSkeleton />; // Tampilkan skeleton jika data tidak ada
    }

    // Create multiple copies to ensure smooth infinite scroll
    const infiniteExtracurriculars = [
        ...extracurriculars, 
        ...extracurriculars, 
        ...extracurriculars, 
        ...extracurriculars
    ];

    return (
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">
                        Ekstrakurikuler
                    </h2>
                    <div className="h-1 w-24 bg-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Mengembangkan potensi, keterampilan, dan karakter peserta didik 
                        sesuai minat dan bakat masing-masing.
                    </p>
                </div>

                {/* Infinite Scrollable Container */}
                <div className="relative group overflow-hidden">
                    <div 
                        ref={scrollContainerRef}
                        className="scroll-container flex overflow-x-scroll space-x-6 pb-6 
                        scrollbar-hide scroll-smooth no-scrollbar"
                        style={{
                            scrollSnapType: 'x mandatory',
                            WebkitOverflowScrolling: 'touch',
                            cursor: 'grab',
                        }}
                    >
                        {infiniteExtracurriculars.map((item, index) => (
                            <div 
                                key={`${item.shortName}-${index}`}
                                className="scroll-snap-align-center flex-shrink-0 w-80 
                                bg-white rounded-2xl shadow-lg 
                                transform transition-all duration-300 
                                hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="p-6">
                                    {/* Logo */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-32 h-32 rounded-full 
                                        bg-blue-50 flex items-center justify-center 
                                        p-4 shadow-md">
                                            <img 
                                                src={item.logo} 
                                                alt={item.shortName} 
                                                className="w-24 h-24 object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                            {item.shortName}
                                        </h3>
                                        <p className="text-blue-600 mb-4">
                                            {item.fullName}
                                        </p>

                                        <div className="bg-blue-50 rounded-lg p-4 mb-4 min-h-[120px]">
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="mt-4">
                                            <span className="text-sm text-gray-500">Ketua Umum</span>
                                            <p className="text-blue-800 font-semibold">
                                                {item.chairman}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom CSS for hiding scrollbar */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scroll-snap-align-center {
                    scroll-snap-align: center;
                }
                .no-scrollbar {
                    -ms-overflow-style : none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default ExtracurricularSection;