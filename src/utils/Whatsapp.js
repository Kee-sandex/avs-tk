// src/utils/whatsapp.js

const WHATSAPP_NUMBER = '919517173555'; // country code + number, no + or spaces

/**
 * Opens WhatsApp (app on mobile, web on desktop) with a prefilled message.
 * @param {string} message - Text to prefill.
 * @param {string} [number] - Overrides default WHATSAPP_NUMBER.
 */
export const openWhatsApp = (message = '', number = WHATSAPP_NUMBER) => {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${number}?text=${encoded}`, '_blank');
};

/**
 * Builds a readable message from a form data object and opens WhatsApp.
 * @param {Object} formData - e.g. { name: 'Ravi', email: 'a@b.com', phone: '999...' }
 * @param {string} [title] - Heading line for the message.
 * @param {string} [number] - Overrides default WHATSAPP_NUMBER.
 */
export const sendFormViaWhatsApp = (formData, title = 'New Inquiry', number = WHATSAPP_NUMBER) => {
  const lines = Object.entries(formData)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => {
      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());
      return `*${label}:* ${value}`;
    });

  const message = `*${title}*\n\n${lines.join('\n')}`;
  openWhatsApp(message, number);
};  