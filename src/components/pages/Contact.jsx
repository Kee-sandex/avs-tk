import React from 'react';

const Contact = ({ translations }) => {
  return (
    <section id="contact" style={{ paddingTop: '100px', paddingBottom: '50px', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', marginTop:'2.5rem',color: 'var(--primary)' }}>
            {translations['contact-title'] || 'Contact Tika Thhapa'}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--gray)', maxWidth: '800px', margin: '0 auto' }}>
            {translations['contact-subtitle'] || 'Get in touch to learn more about investment opportunities with AVS Group'}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Why Join AVS?</h3>
            <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
              <li>3% monthly returns on investment</li>
              <li>100% security of your principal amount</li>
              <li>48-month agreement with monthly payments</li>
              <li>Proven business model with physical assets</li>
              <li>Multiple revenue streams (dairy, flour, restaurants)</li>
              <li>Professional management team</li>
            </ul>
          </div>

          <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Contact Information</h3>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Phone:</strong> +91 9517173555
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Email:</strong> tikathhapa3333@gmail.com
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Address:</strong> AVS Dairy Projects Limited, H. Office: Plot NO. 9/1 Mustil No.4, Dera Village Near Asthal Mandir New Delhi - 110074
            </p>
          
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Apply Now</h2>
          <p style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            Fill out the form below to get started with your investment journey with AVS Group. I'll contact you personally to guide you through the process.
          </p>
          <iframe 
            src="https://docs.google.com/forms/d/1HntCgR64NQf97ybBroTMuBnIL6WeiqqfNlbf9Cf28Q0/edit?pli=1" 
            width="80%" 
            height="1000" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            title="AVS Investment Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;   