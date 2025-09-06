// // App.jsx
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Layout/Header';
// import Footer from './components/Layout/Footer';


// import './App.css';

// function App() {
//   const [lang, setLang] = useState(localStorage.getItem('preferred-language') || 'en');
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDarkMode(true);
//       document.body.classList.add('dark-mode');
//     }
//   }, []);

//   const translations = {
//     // ... your full translations object
//     // (Ensure you have all the new keys for the pages added here)
//     // Example:
//     'en': {
//       // ... all previous translations
//       'avs-model-h2-1': 'The Tika Thhapa',
//       'avs-model-h2-2': 'AVS Model',
//       'avs-model-subtitle': 'Here is how you can invest in AVS Group of Companies with me',
//       // ... and so on for all new content
//     },
//     'hi': {
//       // ... all previous translations
//       'avs-model-h2-1': 'टीका थापा',
//       'avs-model-h2-2': 'AVS मॉडल',
//       'avs-model-subtitle': 'आप मेरे साथ AVS ग्रुप ऑफ कंपनीज में ऐसे निवेश कर सकते हैं',
//       // ... and so on for all new content
//     },
//   };

//   return (
//     <Router>
//       <Header setLang={setLang} lang={lang} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} translations={translations[lang]} />
//       <main>

//       </main>
//       <Footer lang={lang} translations={translations[lang]} />
//     </Router>
//   );
// };

// export default App;


// App.jsx
// App.jsx
// App.jsx
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