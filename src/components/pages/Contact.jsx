// import React from 'react';

// const Contact = ({ translations }) => {
//   return (
//     <section id="contact" style={{ paddingTop: '100px', paddingBottom: '50px', minHeight: '100vh' }}>
//       <div className="container">
//         <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
//           <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', marginTop:'2.5rem',color: 'var(--primary)' }}>
//             {translations['contact-title'] || 'Contact Tika Thhapa'}
//           </h1>
//           <p style={{ fontSize: '1.2rem', color: 'var(--gray)', maxWidth: '800px', margin: '0 auto' }}>
//             {translations['contact-subtitle'] || 'Get in touch to learn more about investment opportunities with AVS Group'}
//           </p>
//         </div>

//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
//           <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow)' }}>
//             <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Why Join AVS?</h3>
//             <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
//               <li>3% monthly returns on investment</li>
//               <li>100% security of your principal amount</li>
//               <li>48-month agreement with monthly payments</li>
//               <li>Proven business model with physical assets</li>
//               <li>Multiple revenue streams (dairy, flour, restaurants)</li>
//               <li>Professional management team</li>
//             </ul>
//           </div>

//           <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow)' }}>
//             <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Contact Information</h3>
//             <p style={{ marginBottom: '1rem' }}>
//               <strong>Phone:</strong> +91 9517173555
//             </p>
//             <p style={{ marginBottom: '1rem' }}>
//               <strong>Email:</strong> tikathhapa3333@gmail.com
//             </p>
//             <p style={{ marginBottom: '1rem' }}>
//               <strong>Address:</strong> AVS Dairy Projects Limited, H. Office: Plot NO. 9/1 Mustil No.4, Dera Village Near Asthal Mandir New Delhi - 110074
//             </p>
          
//           </div>
//         </div>

//         <div style={{ textAlign: 'center' }}>
//           <h2 style={{ marginBottom: '1.5rem' }}>Apply Now</h2>
//           <p style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto' }}>
//             Fill out the form below to get started with your investment journey with AVS Group. I'll contact you personally to guide you through the process.
//           </p>
//           <iframe 
//             src="https://docs.google.com/forms/d/1HntCgR64NQf97ybBroTMuBnIL6WeiqqfNlbf9Cf28Q0/edit?pli=1" 
//             width="80%" 
//             height="1000" 
//             frameBorder="0" 
//             marginHeight="0" 
//             marginWidth="0"
//             title="AVS Investment Contact Form"
//           >
//             Loading…
//           </iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;   

import React, { useState, useEffect } from 'react';

// Enhanced Card component
const Card = ({ children }) => (
  <div style={{
    background: 'var(--card-bg)',
    padding: '2.5rem',
    borderRadius: '16px',
    boxShadow: 'var(--shadow)',
    border: '1px solid var(--light-gray)',
    transition: 'var(--transition)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    {/* Card accent */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '4px',
      height: '100%',
      background: 'linear-gradient(to bottom, var(--primary), var(--accent))'
    }}></div>

    <div style={{ marginLeft: '1rem' }}>
      {children}
    </div>
  </div>
);

// Enhanced ContactItem component
const ContactItem = ({ icon, title, value, link }) => (
  <div style={{
    marginBottom: '1.8rem',
    lineHeight: '1.5',
    display: 'flex',
    alignItems: 'flex-start',
    padding: '1rem',
    borderRadius: '8px',
    transition: 'var(--transition)',
    background: 'transparent'
  }}>
    <span style={{
      fontSize: '1.3rem',
      marginRight: '1rem',
      minWidth: '30px'
    }}>
      {icon}
    </span>
    <div>
      <strong style={{
        display: 'block',
        marginBottom: '0.4rem',
        color: 'var(--text-color)',
        fontSize: '1.15rem',
        fontWeight: '600'
      }}>
        {title}:
      </strong>
      {link ? (
        <a
          href={link}
          style={{
            color: 'var(--primary)',
            textDecoration: 'none',
            transition: 'var(--transition)',
            fontWeight: '500'
          }}
          onMouseOver={(e) => e.target.style.color = 'var(--secondary)'}
          onMouseOut={(e) => e.target.style.color = 'var(--primary)'}
        >
          {value}
        </a>
      ) : (
        <span style={{ color: 'var(--gray)', fontWeight: '500' }}>
          {value}
        </span>
      )}
    </div>
  </div>
);

const Contact = ({ translations }) => {
  // 1. State for managing screen size
  const [isMobile, setIsMobile] = useState(false);

  // 2. Function to update the mobile state
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // 3. Effect to set initial state and add/remove event listener
  useEffect(() => {
    // Set initial state
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup function to remove the listener on component unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []); // Empty dependency array means this runs only on mount and unmount

  // 4. Dynamic styles based on screen size

  const sectionStyle = {
    paddingTop: '120px',
    paddingBottom: '80px',
    minHeight: '100vh',
    background: 'var(--body-bg)',
    position: 'relative'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 15px' : '0 20px', // Smaller padding on mobile
    position: 'relative',
    zIndex: 1
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: isMobile ? '3rem' : '5rem', // Reduced margin on mobile
    position: 'relative'
  };

  const titleStyle = {
    fontSize: isMobile ? '2.5rem' : '3.2rem', // Smaller title on mobile
    fontWeight: '700',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '1.1rem' : '1.3rem', // Smaller subtitle on mobile
    color: 'var(--gray)',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.7',
    fontWeight: '400'
  };
  
  const infoGridStyle = {
    display: 'grid',
    // Change to single column layout on mobile
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(420px, 1fr))',
    gap: isMobile ? '2rem' : '2.5rem', // Smaller gap on mobile
    marginBottom: '5rem'
  };
  
  const applyNowStyle = {
    textAlign: 'center',
    padding: isMobile ? '3rem 1.5rem' : '4rem 3rem', // Smaller padding on mobile
    background: 'var(--card-bg)',
    borderRadius: '20px',
    boxShadow: 'var(--shadow)',
    border: '1px solid var(--light-gray)',
    position: 'relative',
    overflow: 'hidden'
  };

  const applyNowTitleStyle = {
    marginBottom: '1rem',
    fontSize: isMobile ? '1.8rem' : '2.3rem', // Smaller title on mobile
    color: 'var(--text-color)',
    fontWeight: '600'
  };

  const applyNowSubtitleStyle = {
    marginBottom: '2rem',
    maxWidth: '650px',
    margin: '0 auto 2rem auto',
    fontSize: isMobile ? '1rem' : '1.15rem', // Smaller text on mobile
    color: 'var(--gray)',
    lineHeight: '1.7'
  };

  const iframeContainerStyle = {
    overflow: 'hidden',
    // Reduce iframe height for a better mobile experience
    height: isMobile ? '800px' : '1000px',
    width: '100%',
    borderRadius: '12px',
    boxShadow: '0 5px 25px rgba(0, 0, 0, 0.1)',
    border: '1px solid var(--light-gray)'
  };
  
  const additionalCtaStyle = {
    marginTop: '2rem',
    padding: isMobile ? '1.5rem' : '2rem',
    background: 'var(--light-gray)',
    borderRadius: '12px',
    borderLeft: '4px solid var(--primary)'
  };


  return (
    <section 
      id="contact" 
      className="contact-section"
      style={sectionStyle}
    >
      {/* Background decorative elements (Keep as-is or optimize/remove if they cause mobile performance issues) */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
        borderRadius: '50%',
        opacity: '0.1',
        filter: 'blur(40px)',
        zIndex: 0
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '3%',
        width: '150px',
        height: '150px',
        background: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)',
        borderRadius: '50%',
        opacity: '0.08',
        filter: 'blur(30px)',
        zIndex: 0
      }}></div>

      <div className="container" style={containerStyle}>
        
        {/* === ENHANCED HEADER SECTION === */}
        <div style={headerStyle}>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, var(--primary), var(--accent))',
            margin: '0 auto 2rem auto',
            borderRadius: '2px'
          }}></div>
          
          <h1 
            className="title" 
            style={titleStyle}
          >
            {translations['contact-title'] || 'Contact Tika Thhapa'}
          </h1>
          <p 
            className="subtitle" 
            style={subtitleStyle}
          >
            {translations['contact-subtitle'] || 'Get in touch to learn more about investment opportunities with AVS Group'}
          </p>
        </div>
        
        {/* === ENHANCED FEATURE CARDS GRID === */}
        <div 
          className="info-grid" 
          style={infoGridStyle}
        >
          {/* Why Invest with AVS Card */}
          <Card>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.8rem'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem',
                boxShadow: '0 4px 15px rgba(67, 97, 238, 0.3)'
              }}>
                <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>✓</span>
              </div>
              <h3 style={{ 
                margin: 0,
                color: 'var(--text-color)', 
                fontSize: isMobile ? '1.4rem' : '1.6rem', // Smaller heading on mobile
                fontWeight: '600'
              }}>
                Why Invest with AVS?
              </h3>
            </div>
            <ul style={{ 
              lineHeight: '2.2', 
              paddingLeft: '0', 
              listStyle: 'none',
              margin: 0
            }}>
              {[
                '3% monthly returns on investment',
                '100% security of your principal amount',
                '48-month agreement with monthly payments',
                'Proven business model with physical assets',
                'Multiple revenue streams (dairy, flour, restaurants)',
                'Professional management team'
              ].map((item, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '1rem',
                  fontSize: isMobile ? '1rem' : '1.1rem', // Smaller text on mobile
                  color: 'var(--text-color)',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid var(--light-gray)'
                }}>
                  <span style={{ 
                    color: 'var(--success)', 
                    marginRight: '12px', 
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    minWidth: '24px'
                  }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Contact Information Card */}
          <Card>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.8rem'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem',
                boxShadow: '0 4px 15px rgba(63, 55, 201, 0.3)'
              }}>
                <span style={{ color: 'white', fontSize: '1.3rem' }}>📞</span>
              </div>
              <h3 style={{ 
                margin: 0,
                color: 'var(--text-color)', 
                fontSize: isMobile ? '1.4rem' : '1.6rem', // Smaller heading on mobile
                fontWeight: '600'
              }}>
                Contact Information
              </h3>
            </div>
            
            <ContactItem 
              icon="📱" 
              title="Phone" 
              value="+91 9517173555" 
              link="tel:+919517173555"
            />
            <ContactItem 
              icon="✉️" 
              title="Email" 
              value="tikathhapa3333@gmail.com" 
              link="mailto:tikathhapa3333@gmail.com"
            />
            {/* The address item will now have its text wrap better on mobile due to the fixed width being removed, but we'll keep the ContactItem structure */}
            <ContactItem 
              icon="📍" 
              title="Address" 
              value="AVS Dairy Projects Limited, H. Office: Plot NO. 9/1 Mustil No.4, Dera Village Near Asthal Mandir New Delhi - 110074" 
            />
          </Card>
        </div>

        {/* === ENHANCED APPLY NOW SECTION === */}
        <div 
          className="apply-now-section" 
          style={applyNowStyle}
        >
          {/* Section background accent */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '5px',
            background: 'linear-gradient(90deg, var(--primary), var(--accent))'
          }}></div>
          
          <h2 style={applyNowTitleStyle}>
            Start Your Investment Journey
          </h2>
          <p style={applyNowSubtitleStyle}>
            Fill out the form below. I'll contact you personally to guide you through the process and answer any questions you may have.
          </p>
          
          <div style={iframeContainerStyle}>
            <iframe 
              // Consider using a simpler, embedding-friendly URL if available, but using the provided one for now.
              src="https://docs.google.com/forms/d/1HntCgR64NQf97ybBroTMuBnIL6WeiqqfNlbf9Cf28Q0/edit?pli=1" 
              width="100%" 
              height="1000" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              title="AVS Investment Contact Form"
              style={{
                borderRadius: '12px'
              }}
            >
              Loading…
            </iframe>
          </div>
          
          
        </div>
        
      </div>
    </section>
  );
};

export default Contact;