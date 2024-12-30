import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md mx-auto" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline">{message}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" onClick={() => window.location.reload()}>
            <title>Close</title>
            <path d="M10 9l-4-4-1.414 1.414L8.586 10l-4 4L6 15l4-4 4 4 1.414-1.414-4-4 4-4L14 5l-4 4z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ErrorMessage;