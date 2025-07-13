import React, { useState } from 'react';

const CopyButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!textToCopy) return;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <button
      onClick={handleCopy}
      disabled={!textToCopy}
      className={`relative p-2 rounded-lg text-white focus:outline-none hover:scale-105 active:scale-95 transition-all duration-200 ${!textToCopy ? 'opacity-40 cursor-not-allowed' : ''} ${copied ? 'bg-emerald-600/70' : 'bg-gray-700/70'}`}
      title="Copy to clipboard"
    >
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${copied ? 'from-emerald-600 to-green-600' : 'from-gray-600 to-gray-700'} opacity-80 blur-[1px] transition-colors duration-300`}></div>
      
      <div className="relative">
        {copied ? (
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
              Copied!
            </span>
          </div>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </div>
    </button>
  );
};

export default CopyButton;
