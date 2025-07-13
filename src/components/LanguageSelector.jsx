import React from 'react';

const LanguageSelector = ({ selectedLang, onLangChange, options }) => {
  return (
    <select
      value={selectedLang}
      onChange={(e) => onLangChange(e.target.value)}
      className="relative w-full p-3 bg-gray-800/80 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400
        border border-gray-700/50 shadow-md appearance-none cursor-pointer z-10
        backdrop-blur-sm transition-all duration-300 hover:bg-gray-800
        font-medium"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23CBD5E1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0.75rem center',
        backgroundSize: '1rem',
        paddingRight: '2.5rem'
      }}
    >
      {options.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
