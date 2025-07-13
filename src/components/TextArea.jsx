import React from 'react';

const TextArea = ({ isLoading = false, ...props }) => {
  return (
    <div className="relative w-full h-64">
      <textarea
        className={`w-full h-full p-4 bg-gray-800/80 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner ${
          isLoading ? 'opacity-50' : ''
        } border border-gray-700/50 backdrop-blur-sm placeholder:text-gray-500`}
        style={{ caretColor: '#38bdf8' }}
        {...props}
      ></textarea>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="animate-ping absolute inset-0 rounded-full h-10 w-10 bg-blue-400 opacity-20"></div>
            <div className="animate-spin relative rounded-full h-10 w-10 border-b-2 border-t-2 border-blue-400"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextArea;
