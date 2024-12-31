import React, { useEffect, useState } from 'react';
import { FaSpinner, FaExclamationTriangle, FaTimes } from 'react-icons/fa';
import apiService from '../services/apiService'; 
import NavSection from '../ui/NavSection';
import Footer from '../ui/FooterSection';

const StrukturOrganisasi = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = await apiService.getAllDepartments();
        setDepartments(data.departments);
      } catch (error) {
        setError('Gagal memuat data departemen');
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  const renderHierarchy = (hierarchy) => {
    return hierarchy.map((h, index) => (
      <div 
        key={index} 
        className={`
          flex items-center space-x-3 
          pl-${h.level * 4} 
          text-gray-700 
          bg-gray-100 
          rounded-lg 
          p-2 
          mb-2 
          shadow-sm 
          transition-all 
          duration-300 
          hover:bg-blue-50 
          hover:shadow-md 
          animate-fade-in-down
        `}
      >
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="flex flex-col">
          <span className="font-bold text-gray-800 text-sm">
            {h.role}
          </span>
        </div>
      </div>
    ));
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <FaSpinner className="animate-spin text-4xl text-blue-500" />
    </div>
  );

  if (error) return (
    <div className="flex flex-col justify-center items-center h-screen text-red-600">
      <FaExclamationTriangle className="text-6xl mb-4" />
      <p className="text-2xl">{error}</p>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavSection />
      <div style={{ paddingTop: "7rem" }} className="container mx-auto px-4 py-16 animate-fade-in">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 animate-bounce-in">
          Struktur Organisasi
        </h1>

        <div className="space-y-10">
        {departments.map((department, index) => {
        const departmentPosition = department.members.length > 0 
          ? department.members[0].position 
          : `Department ${index + 1}`;

        return (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="bg-black text-white p-4">
              <h2 className="text-2xl font-semibold">{departmentPosition}</h2>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {department.members.map((member) => (
                <div
                  key={member.id}
                  onClick={() => handleMemberClick(member)}
                  className="bg-gray-100 rounded-lg p-5 text-center cursor-pointer 
                    transition-all duration-300 
                    hover:shadow-lg hover:scale-105 
                    active:scale-95 
                    group"
                >
                  <div className="relative inline-block">
                    <img
                      // src={member.profile.image || 'https://icon-library.com/images/default-user-icon/default-user-icon-9.jpg'}
                      src={'https://icon-library.com/images/default-user-icon/default-user-icon-9.jpg'}
                      alt={member.profile.name}
                      className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-300 
                        group-hover:border-blue-500 
                        transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-blue-500 bg-opacity-0 
                      group-hover:bg-opacity-20 
                      rounded-full 
                      transition-all duration-300"></div>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{member.profile.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
        </div>

        {/* Modal Detail Anggota */}
        {selectedMember && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 
              flex justify-center items-center z-50 
              animate-fade-in"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl p-8 max-w-md w-full 
                animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                <FaTimes className="text-2xl" />
              </button>
              <img
                // src={selectedMember.profile.image || 'https://icon-library.com/images/default-user-icon/default-user-icon-9.jpg'}
                src={'https://icon-library.com/images/default-user-icon/default-user-icon-9.jpg'}
                alt={selectedMember.profile.name}
                className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-blue-300"
              />
              <h2 className="text-2xl font-bold text-center mt-4">{selectedMember.profile.name}</h2>
              <div className="mt-4">
                {renderHierarchy(selectedMember.hierarchy)}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default StrukturOrganisasi;