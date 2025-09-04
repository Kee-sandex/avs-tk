import React, { useState, useEffect } from 'react';
import '../../styles/pages/Home.css';
import profilePhoto from '../../assets/images/tika_image_2.png';

const Home = ({ translations }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation trigger on component mount
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className={`home-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="home-content">
          <h1 className="home-title">
            {translations['home-title'] || 'Tika Thhapa - AVS Group Investor'}
          </h1>
          <p className="home-subtitle">
            {translations['home-subtitle'] || 'Achieving Financial Freedom Through Strategic Investments'}
          </p>
        </div>

        <div className="home-about-container">
          <div className="home-photo-wrapper">
            <img 
              src={profilePhoto} 
              alt="Tika Thhapa" 
              className="home-profile-photo" 
              loading="eager" // Prioritize loading this image
            />
          </div>

          <div className="home-about-section">
            <h2 className="home-about-title">{translations['home-about-title'] || 'About Me'}</h2>
            <p className="home-about-text">
              {translations['home-about-text'] || "I'm Tika Thhapa, an investor at AVS Group of Companies. Through strategic investments, I've achieved financial freedom and now I'm helping others do the same. I'm financially independent and can do everything I want in life."}
            </p>
            <p className="home-about-text">
              {translations['home-about-text2'] || "AVS Group is one of the best investment companies where you can invest and earn good profits. If you want to invest your money and learn how to earn from AVS Group, you can contact me directly or explore this portfolio website to find all the details."}
            </p>
            <div className="home-buttons">
              <a href="/avs-model" className="home-button-primary">
                {translations['home-explore-btn'] || 'Explore Investment Options'}
                <span className="button-arrow">→</span>
              </a>
              <a href="/contact" className="home-button-secondary">
                {translations['home-contact-btn'] || 'Contact Me Directly'}
                <span className="button-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default Home;