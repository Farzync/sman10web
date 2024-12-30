import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import StatusSkeleton from '../ui/skeleton/Status';
import { CheckCircleIcon, XCircleIcon, CogIcon } from '@heroicons/react/solid';

const Status = () => {
  const [statusData, setStatusData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const data = await apiService.getStatus();
        setStatusData(data);
      } catch (err) {
        setError('Failed to fetch status. Please try again.');
      }
    };

    fetchStatus();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-500 text-lg font-semibold">{error}</div>
      </div>
    );
  }

  if (!statusData) {
    return <StatusSkeleton />;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full h-full max-w-screen-lg mx-auto">
    <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">System Status</h1>
        <ul className="mt-6 space-y-4">
            <li className={`flex items-center justify-between p-4 rounded-lg shadow transition duration-200 ${statusData.apiStatus === 'RUNNING' ? 'bg-green-50' : 'bg-red-50'}`}>
            <div className="flex items-center">
                {statusData.apiStatus === 'RUNNING' ? (
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                ) : (
                <XCircleIcon className="h-6 w-6 text-red-500 mr-2" />
                )}
                <strong className="text-gray-700">API Status:</strong>
            </div>
            <span className={`font-medium ${statusData.apiStatus === 'RUNNING' ? 'text-green-500' : 'text-red-500'}`}>
                {statusData.apiStatus}
            </span>
            </li>
            <li className={`flex items-center justify-between p-4 rounded-lg shadow transition duration-200 ${statusData.serverStatus === 'RUNNING' ? 'bg-green-50' : 'bg-red-50'}`}>
            <div className="flex items-center">
                {statusData.serverStatus === 'RUNNING' ? (
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                ) : (
                <XCircleIcon className="h-6 w-6 text-red-500 mr-2" />
                )}
                <strong className="text-gray-700">Server Status:</strong>
            </div>
            <span className={`font-medium ${statusData.serverStatus === 'RUNNING' ? 'text-green-500' : 'text-red-500'}`}>
                {statusData.serverStatus}
            </span>
            </li>
            <li className={`flex items-center justify-between p-4 rounded-lg shadow transition duration-200 ${statusData.dbStatus === 'OK' ? 'bg-green-50' : 'bg-red-50'}`}>
            <div className="flex items-center">
                {statusData.dbStatus === 'OK' ? (
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                ) : (
                <XCircleIcon className="h-6 w-6 text-red-500 mr-2" />
                )}
                <strong className="text-gray-700">Database Status:</strong>
            </div>
            <span className={`font-medium ${statusData.dbStatus === 'OK' ? 'text-green-500' : 'text-red-500'}`}>
                {statusData.dbStatus}
            </span>
            </li>
        </ul>
        <div className="mt-6 text-center">
            <CogIcon className="h-8 w-8 text-gray-500 animate-spin" />
        </div>
    </div>
  );
};

export default Status;