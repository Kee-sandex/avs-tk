// Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link



const Footer = ({ lang , translations }) => {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-col">
          <h3>{translations[lang]['footer-h3-1']}</h3>
          <p>{translations[lang]['footer-p-1']}</p>
          <div className="social-links">
            <a href="https://www.facebook.com/share/1LwXRmEtk5/"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.instagram.com/tikathhapa3333?igsh=ZnZvbmZ3dHV3YXp0"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://wa.me/9517173555"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>{translations[lang]['footer-h3-2']}</h3>
          <ul className="footer-links">
            {/* The "Home" link will likely be the root path "/" */}
            <li><Link to="/">{translations[lang].home}</Link></li>
            {/* These paths should match the routes defined in your App.js or router setup */}
            <li><Link to="/avs-model">{translations[lang]['avs-model']}</Link></li>
            <li><Link to="/portfolio">{translations[lang].portfolio}</Link></li>
            <li><Link to="/contact">{translations[lang].contact}</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>{translations[lang]['footer-h3-3']}</h3>
          <ul className="footer-links">
            {/* These links may not have specific routes yet, so keeping them as '#' or linking to a specific page is fine */}
            <li><a href="#">{translations[lang]['avs-dairy']}</a></li>
            <li><a href="#">{translations[lang]['avs-flour']}</a></li>
            <li><a href="#">{translations[lang]['avs-restaurants']}</a></li>
            <li><a href="#">{translations[lang]['avs-properties']}</a></li>
            <li><a href="#">{translations[lang]['avs-resorts']}</a></li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>{translations[lang].copyright}</p>
        {/* The new disclaimer paragraph */}
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#ff4d4f' }}>
          {translations[lang]['disclaimer']}
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', padding: '1rem' }}>{translations[lang]['footer-address']}</p>
      </div>
    </footer>
  );
};

export default Footer;