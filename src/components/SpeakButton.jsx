import React, { useState } from 'react';

const SpeakButton = ({ text, lang }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const handleSpeak = () => {
    if (!text || !window.speechSynthesis) return;
    
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.cancel(); // Cancel any previous speech
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={handleSpeak}
      className={`relative p-2 rounded-lg text-white focus:outline-none hover:scale-105 active:scale-95 transition-all duration-200 ${isSpeaking ? 'bg-cyan-600/70' : 'bg-gray-700/70'}`}
      title={isSpeaking ? "Stop speaking" : "Listen to text"}
    >
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${isSpeaking ? 'from-cyan-600 to-blue-600' : 'from-gray-600 to-gray-700'} opacity-80 blur-[1px] transition-colors duration-300`}></div>
      
      <div className="relative">
        {isSpeaking ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.858 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.858l4.707-4.707a1 1 0 011.414 0V19.707a1 1 0 01-1.414 0L5.858 15z" />
          </svg>
        )}
      </div>
    </button>
  );
};

export default SpeakButton;
