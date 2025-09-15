// Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setLang, lang, isDarkMode, setIsDarkMode, translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }

    const preferredLanguage = localStorage.getItem('preferred-language');
    if (preferredLanguage) {
      setLang(preferredLanguage);
    }
  }, [setIsDarkMode, setLang]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    document.body.classList.toggle('dark-mode', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const handleLangChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem('preferred-language', newLang);
  };

  return (
    <header>
      <div className="container nav-container">
        <Link to="/" className="logo"> TK <span>THHAPA </span></Link>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className={location.pathname === '/' ? 'active' : ''}
            >
              {translations['home'] || 'Home'}
            </Link>
          </li>
          <li>
            <Link
              to="/avs-model"
              onClick={closeMenu}
              className={location.pathname === '/avs-model' ? 'active' : ''}
            >
              {translations['avs-model'] || 'Avs Model'}
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              onClick={closeMenu}
              className={location.pathname === '/portfolio' ? 'active' : ''}
            >
              {translations['portfolio'] || 'Portfolio'}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              {translations['contact'] || 'Contact'}
            </Link>
          </li>
        </ul>
        <div className="nav-toggles">
          <div className="lang-switcher">
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => handleLangChange('en')}
            >
              EN
            </button>
            <button
              className={`lang-btn ${lang === 'hi' ? 'active' : ''}`}
              onClick={() => handleLangChange('hi')}
            >
              HI
            </button>
          </div>
          <button id="theme-toggle" className="theme-toggle" onClick={toggleTheme}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>
      
      {/* Overlay element - Add this right here */}
      <div 
        className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      />
    </header>
  );
};

export default Header;