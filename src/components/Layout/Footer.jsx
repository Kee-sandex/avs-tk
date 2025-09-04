// Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link

// Translations for footer based on the provided script
const translations = {
  'en': {
    'footer-h3-1': 'TK THHAPA ',
    'footer-p-1': 'Investor at AVS Group of Companies. Achieved financial freedom through strategic investments and now helping others do the same.',
    'footer-h3-2': 'Quick Links',
    'footer-h3-3': 'AVS Group Companies',
    'home': 'Home',
    'avs-model': 'AVS Model',
    'portfolio': 'Portfolio',
    'contact': 'Contact',
    'avs-dairy': 'AVS Dairy',
    'avs-flour': 'AVS Flour Mills',
    'avs-restaurants': 'AVS Restaurants',
    'avs-properties': 'AVS Properties',
    'avs-resorts': 'AVS Resorts',
    'copyright': '© 2025 tTK THHAPA - AVS Group Investor. All Rights Reserved.',
    'footer-address': 'AVS Dairy Projects Limited | Visit My Office: H. Office: Plot NO. 9/1 Mustil No.4, Dera Village Near Asthal Mandir New Delhi - 110074',
  },
  'hi': {
    'footer-h3-1': 'TK THHAPA',
    'footer-p-1': 'AVS ग्रुप ऑफ कंपनीज़ में निवेशक। रणनीतिक निवेश के through वित्तीय स्वतंत्रता प्राप्त की और अब दूसरों की मदद कर रहे हैं।',
    'footer-h3-2': 'त्वरित लिंक',
    'footer-h3-3': 'AVS ग्रुप कंपनियां',
    'home': 'होम',
    'avs-model': 'AVS मॉडल',
    'portfolio': 'पोर्टफोलियो',
    'contact': 'संपर्क',
    'avs-dairy': 'AVS डेयरी',
    'avs-flour': 'AVS आटा मिल्स',
    'avs-restaurants': 'AVS रेस्तरां',
    'avs-properties': 'AVS प्रॉपर्टीज',
    'avs-resorts': 'AVS रिसॉर्ट्स',
    'copyright': '© 2025 tTK THHAPA - AVS ग्रुप निवेशक। सर्वाधिकार सुरक्षित।',
    'footer-address': 'AVS Dairy Projects Limited | Visit My Office: H. Office: Plot NO. 9/1 Mustil No.4, Dera Village Near Asthal Mandir New Delhi - 110074',
  },
};

const Footer = ({ lang }) => {
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
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>{translations[lang]['footer-address']}</p>
      </div>
    </footer>
  );
};

export default Footer;