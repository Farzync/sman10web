import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService'; 

const StrukturOrganisasi = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch departments data
    const fetchDepartments = async () => {
      try {
        const data = await apiService.getAllDepartments();
        setDepartments(data.departments); // Assuming the data structure matches { departments: [...] }
      } catch (error) {
        setError('Failed to fetch departments');
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  const renderHierarchy = (hierarchy) => {
    return hierarchy.map((h, index) => (
      <div key={index} className={`pl-${h.level * 4} text-gray-600`}>
        <strong>{h.role}</strong> (Level {h.level})
      </div>
    ));
  };

  if (loading) return <div className="text-center py-10 text-xl">Loading...</div>;
  if (error) return <div className="text-center py-10 text-xl text-red-600">{error}</div>;

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-semibold text-center mb-8">Struktur Organisasi</h1>
      <div className="space-y-8">
        {departments.map((department, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Department {index + 1}</h2>
            <div className="flex flex-wrap space-x-8">
              {department.members.map((member) => (
                <div
                  key={member.id}
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md transform transition-all hover:scale-105 hover:bg-gray-200"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={member.profile.image}
                      alt={member.profile.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-200"
                    />
                    <div className="mt-4">
                      <h3 className="text-xl font-medium text-gray-900">{member.profile.name}</h3>
                      <p className="text-md text-gray-700">{member.position}</p>
                      <p className="text-sm text-gray-600 mt-2">{member.profile.description}</p>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      {renderHierarchy(member.hierarchy)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
