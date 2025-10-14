
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/pages/Home';
import AvsModel from './components/pages/AvsModel';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import { translations } from './data/translations';

import './index.css';

function App() {
  const [lang, setLang] = useState(localStorage.getItem('preferred-language') || 'en');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);


  return (
    <Router>
      <Header setLang={setLang} lang={lang} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} translations={translations[lang]} />
      <main>
        <Routes>
          <Route path="/" element={<Home translations={translations[lang]} />} />
          <Route path="/avs-model" element={<AvsModel translations={translations[lang]} />} />
          <Route path="/portfolio" element={<Portfolio translations={translations[lang]} />} />
          <Route path="/contact" element={<Contact translations={translations[lang]} />} />
        </Routes>
      </main>
      <Footer lang={lang} translations={translations} />
    </Router>
  );
};

export default App;
