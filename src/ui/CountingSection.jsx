import { useEffect, useState } from 'react';
import { Users, GraduationCap, Building2 } from 'lucide-react';
import apiService from '../services/apiService'; // Pastikan path ini sesuai dengan struktur folder Anda

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
      }
    };

    fetchCounts();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>; // Tampilkan loading saat data sedang diambil
  }

  if (error) {
    return <div className="text-center text-red-600">Error loading data: {error}</div>; // Tampilkan error jika ada
  }

  return (
    <section className="relative h-[40vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('background.jpg')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 30%',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70" />

      {/* Content Container */}
      <div className="relative h-full overflow-x-auto overflow-y-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 w-full">
          <div className="flex justify-center items-center gap-32 px-16">
            <Counter endValue={counts.students} label="Siswa" icon="students" />
            <Counter endValue={counts.teachers} label="Guru" icon="teachers" />
            <Counter endValue={counts.staff} label="Tenaga Kependidikan" icon="staff" />
          </div>
        </div>
      </div>
    </section>
  );
}