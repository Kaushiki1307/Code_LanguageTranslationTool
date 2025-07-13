import React from 'react';

const SwapButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative p-3 rounded-full text-white focus:outline-none group transition-all duration-300
        ${disabled 
          ? 'cursor-not-allowed bg-gray-700 opacity-40' 
          : 'hover:scale-110 active:scale-95'}`}
      title="Swap languages"
    >
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${disabled ? 'from-gray-700 to-gray-600' : 'from-blue-500 to-purple-500'} opacity-80 blur-[1px] group-hover:opacity-100 transition-opacity`}></div>
      <div className="relative z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      </div>
    </button>
  );
};

export default SwapButton;
