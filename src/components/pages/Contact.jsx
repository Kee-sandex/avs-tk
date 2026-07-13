import React, { useState } from 'react';
import { sendFormViaWhatsApp } from '../../utils/whatsapp';
import '../../styles/pages/Contact.css';
const ContactItem = ({ icon, title, value, link }) => (
  <div className="contact-item">
    <span className="contact-icon">{icon}</span>
    <div>
      <strong className="contact-item-title">{title}:</strong>
      {link ? (
        <a href={link} className="contact-item-link">{value}</a>
      ) : (
        <span className="contact-item-value">{value}</span>
      )}
    </div>
  </div>
);

const Contact = ({ translations }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    sendFormViaWhatsApp(form, 'New Investment Inquiry');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h1 className="title">
            {translations['contact-title'] || 'Contact Tika Thhapa'}
          </h1>
          <p className="subtitle">
            {translations['contact-subtitle'] || 'Get in touch to learn more about investment opportunities with AVS Group'}
          </p>
        </div>

        <div className="info-grid">
          <div className="card">
            <div className="card-header">
              <span className="card-icon">☎</span>
              <h3>Contact Information</h3>
            </div>
            <ContactItem icon="✆" title="Phone" value="+91 9517173555" link="tel:+919517173555" />
            <ContactItem icon="✉" title="Email" value="tikathhapa3333@gmail.com" link="mailto:tikathhapa3333@gmail.com" />
            <ContactItem
              icon="⌂"
              title="Address"
              value="AVS Dairy Projects Limited, H. Office: Plot NO. 9/1 Mustil No.4, Dera Village Near Asthal Mandir New Delhi - 110074"
            />
          </div>

          <div className="card">
            <div className="card-header">
              <span className="card-icon">✎</span>
              <h3>Send via WhatsApp</h3>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Name *</label>
              <input id="name" type="text" name="name" value={form.name} onChange={handleChange} required />

              <label htmlFor="phone">Phone *</label>
              <input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} required />

              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={form.email} onChange={handleChange} />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} />

              <button type="submit" className="btn btn-primary">Send on WhatsApp</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;