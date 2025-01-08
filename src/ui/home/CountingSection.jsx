import { useEffect, useState } from 'react';
import { Users, GraduationCap, Building2 } from 'lucide-react';
import BackgroundImg from "../../media/img/background.jpg";
import apiService from '../../services/apiService'; // Pastikan path ini sesuai dengan struktur folder Anda

import CountingSkeleton from '../skeleton/home/CountingSkeleton';

const Counter = ({ endValue, label, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = endValue / 100;
    const interval = setInterval(() => {
      current += increment;
      if (current >= endValue) {
        clearInterval(interval);
        setCount(endValue);
      } else {
        setCount(Math.floor(current));
      }
    }, 120);

    return () => clearInterval(interval);
  }, [endValue]);

  const getIcon = () => {
    switch (icon) {
      case 'students':
        return <Users className="w-6 h-6 text-blue-400" />;
      case 'teachers':
        return <GraduationCap className="w-6 h-6 text-blue-400" />;
      case 'staff':
        return <Building2 className="w-6 h-6 text-blue-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="text-center min-w-[250px]">
      <h2 className="text-6xl font-bold text-white mb-4">{count}</h2>
      <div className="flex items-center justify-center gap-2">
        {getIcon()}
        <span className="text-lg text-blue-400">{label}</span>
      </div>
    </div>
  );
};

export default function CountingSection() {
  const [counts, setCounts] = useState({ students: 0, teachers: 0, staff: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false); // State tambahan untuk menandai apakah data telah diambil

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const data = await apiService.getCounts(); // Mengambil data jumlah pelajar, guru, dan staff
        setCounts(data); // Set data counts
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching counts data:', err);
      } finally {
        setLoading(false); // Set loading ke false setelah data diambil
        setDataFetched(true); // Tandai bahwa data telah diambil
      }
    };

    fetchCounts();
  }, []);

  if (loading) {
    return <CountingSkeleton />; // Tampilkan Skeleton saat data sedang diambil
  }

  // Jika data telah diambil tetapi ada error, tetap tampilkan skeleton
  if (dataFetched && error) {
    return <CountingSkeleton />; // Tampilkan skeleton jika ada error
  }

  return (
    <section className="relative min-h-[30vh] md:min-h-[40vh] h-auto overflow-hidden px-4 md:px-8 py-12">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${BackgroundImg})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 30%',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-32 px-4 sm:px-8">
        <Counter endValue={counts.students} label="Siswa" icon="students" />
        <Counter endValue={counts.teachers} label="Guru" icon="teachers" />
        <Counter endValue={counts.staff} label="Tenaga Kependidikan" icon="staff" />
      </div>
    </section>
  );
}