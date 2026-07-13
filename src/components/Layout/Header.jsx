import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setLang, lang, translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ----- Language persistence (run once on mount) -----
  useEffect(() => {
    const preferredLanguage = localStorage.getItem('preferred-language');
    if (preferredLanguage) {
      setLang(preferredLanguage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ----- Handlers -----
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleLangChange = useCallback((newLang) => {
    setLang(newLang);
    localStorage.setItem('preferred-language', newLang);
  }, [setLang]);

  // ----- Menu items -----
  const navItems = [
    { path: '/', label: translations['home'] || 'Home' },
    { path: '/avs-model', label: translations['avs-model'] || 'Avs Model' },
    { path: '/portfolio', label: translations['portfolio'] || 'Portfolio' },
    { path: '/contact', label: translations['contact'] || 'Contact' },
  ];

  return (
    <>
      <header>
        <div className="container nav-container">
          <Link to="/" className="logo">
            TK <span>THHAPA</span>
          </Link>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-toggles">
            <div className="lang-switcher">
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => handleLangChange('en')}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                className={`lang-btn ${lang === 'hi' ? 'active' : ''}`}
                onClick={() => handleLangChange('hi')}
                aria-label="Switch to Hindi"
              >
                HI
              </button>
            </div>
          </div>

          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      <div
        className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        role="button"
        aria-label="Close menu"
        tabIndex={-1}
      />
    </>
  );
};

export default Header;