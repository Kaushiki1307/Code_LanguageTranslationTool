import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { languages } from './constants/languages';
import LanguageSelector from './components/LanguageSelector';
import TextArea from './components/TextArea';
import SwapButton from './components/SwapButton';
import CopyButton from './components/CopyButton';
import SpeakButton from './components/SpeakButton';

function App() {
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const swapLanguages = () => {
    if (sourceLang === 'auto') return; // Cannot swap if source is auto-detect
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  const handleTranslate = useCallback(async () => {
    if (!inputText.trim()) {
      setTranslatedText('');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/translate', {
        text: inputText,
        from: sourceLang === 'auto' ? null : sourceLang,
        to: targetLang,
      });
      setTranslatedText(response.data[0].translations[0].text);
    } catch (err) {
      setError('Translation failed. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [inputText, sourceLang, targetLang]);

  // Debounced translation effect
  useEffect(() => {
    const timerId = setTimeout(() => {
      handleTranslate();
    }, 500); // 500ms delay

    return () => {
      clearTimeout(timerId);
    };
  }, [inputText, handleTranslate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-900 text-white flex flex-col items-center p-4 md:p-8">
      <header className="text-center mb-8 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 drop-shadow-lg">
          Dialect
        </h1>
        <p className="text-blue-200 mt-2 text-lg">Advanced Language Translation Tool</p>
      </header>

      <main className="w-full max-w-5xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl shadow-2xl p-6 md:p-8 backdrop-blur-sm border border-gray-700/50">
        {/* Language selection bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative group w-full md:w-48">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <LanguageSelector
                selectedLang={sourceLang}
                onLangChange={setSourceLang}
                options={[{ code: 'auto', name: '🔍 Auto-Detect' }, ...languages]}
              />
            </div>
            <div className="hidden md:block">
              <SwapButton onClick={swapLanguages} disabled={sourceLang === 'auto'} />
            </div>
            <div className="relative group w-full md:w-48">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <LanguageSelector
                selectedLang={targetLang}
                onLangChange={setTargetLang}
                options={languages}
              />
            </div>
          </div>
          <div className="md:hidden flex justify-center w-full">
            <SwapButton onClick={swapLanguages} disabled={sourceLang === 'auto'} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Source Language Section */}
          <div className="flex flex-col gap-4">
            <div className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative h-full">
                <TextArea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter text to translate..."
                />
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <SpeakButton text={inputText} lang={sourceLang === 'auto' ? 'en' : sourceLang} />
                </div>
              </div>
            </div>
          </div>

          {/* Target Language Section */}
          <div className="flex flex-col gap-4">
            <div className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative h-full">
                <TextArea
                  value={translatedText}
                  placeholder={isLoading ? 'Translating...' : 'Translation will appear here...'}
                  readOnly
                  isLoading={isLoading}
                />
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <SpeakButton text={translatedText} lang={targetLang} />
                  <CopyButton textToCopy={translatedText} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {error && (
          <div className="mt-6 p-3 bg-red-900/50 border border-red-700 rounded-lg text-center">
            <p className="text-red-300">{error}</p>
          </div>
        )}
        
        {/* Feature highlights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-800/50">
            <div className="text-blue-300 text-xl mb-2">🔍</div>
            <h3 className="font-semibold text-blue-200">Auto-Detection</h3>
            <p className="text-blue-300/80 text-sm">Automatically detects source language</p>
          </div>
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-800/50">
            <div className="text-blue-300 text-xl mb-2">🔊</div>
            <h3 className="font-semibold text-blue-200">Text-to-Speech</h3>
            <p className="text-blue-300/80 text-sm">Listen to both source and translated text</p>
          </div>
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-800/50">
            <div className="text-blue-300 text-xl mb-2">⚡</div>
            <h3 className="font-semibold text-blue-200">Real-time Translation</h3>
            <p className="text-blue-300/80 text-sm">Translates as you type with smart debouncing</p>
          </div>
        </div>
      </main>

      <footer className="text-center mt-8 text-blue-300/70">
        <p className="text-sm">Powered by Google Cloud Translation API</p>
        
      </footer>
    </div>
  );
}

export default App;
