import React, { useEffect, useState, useRef } from 'react';
import apiService from '../services/apiService'; // Pastikan path ini sesuai dengan struktur folder Anda

const ExtracurricularSection = () => {
    const [extracurriculars, setExtracurriculars] = useState([]);
    const [error, setError] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiService.getEkstrakurikuler(); // Mengambil data ekstrakurikuler dari API
                setExtracurriculars(data.ekstrakurikuler); // Set data ekstrakurikuler
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
    }, []);

    const handleScroll = (direction) => {
        if (containerRef.current) {
            const scrollAmount = 300;
            containerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (error) {
        return (
            <div className="p-5 text-red-600">
                Error loading data: {error}
            </div>
        );
    }

    if (!extracurriculars.length) {
        return (
            <div className="p-5 text-gray-600">
                Tidak ada ekstrakurikuler yang ditemukan.
            </div>
        );
    }

    return (
        <section className="p-5 relative py-24 bg-gradient-to-b from-gray-100 to-blue-50">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
                Ekstrakurikuler
            </h2>
            <div className="text-center mb-8">
                <p className="px-4 md:px-36 text-gray-600 leading-relaxed">
                    Ekstrakurikuler dapat membantu peserta didik mendapatkan pengetahuan, 
                    keterampilan, serta membantu membentuk karakter peserta didik sesuai 
                    dengan minat dan bakat masing-masing.
                </p>
            </div>
            <div className="relative">
                <div 
                    ref={containerRef}
                    className="flex space-x-6 overflow-x-auto scroll-smooth pb-6 hide-scrollbar px-2 pt-16"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {extracurriculars.map((item, index) => (
                        <div 
                            key={item.shortName || index}
                            className="flex-shrink-0 w-80 h-5/4 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 mt-8"
                        >
                            <div className="relative">
                                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                                    <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center p-4 border-4 border-blue-100">
                                        <img 
                                            src={item.logo} 
                                            alt={item.shortName} 
                                            className="w-24 h-24 object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="pt-20 p-6">
                                    <div className="text-center mb-4">
                                        <h3 className="text-xl font-bold text-blue-900 mb-1">
                                            {item.shortName}
                                        </h3>
                                        <p className="text-sm text-blue-600">
                                            {item.fullName}
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-4 mb-4 min-h-[100px]">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between border-t pt-4">
                                        <div className="flex flex-col space-y-1">
                                            <span className="text-xs font-medium text-gray-500">
                                                Ketua Umum
                                            </span>
                                            <span className="text-sm font-semibold text-blue-800">
                                                {item.chairman}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                    <button 
                        onClick={() => handleScroll('left')} 
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
                    >
                        &lt;
                    </button>
                    <button 
                        onClick={() => handleScroll('right')} 
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
                    >
                        &gt;
                    </button>
                </div>
            </section>
        );
    };

export default ExtracurricularSection;