import React from 'react';
import './ContactUs.css'; // Import your custom CSS file

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-img">
        <img src="/images/contact.jpg" alt="Contact Us" />
      </div>
      <div className="contact-us-info">
        <h2>Contact Us</h2>
        <p>
          For any inquiries or assistance, please feel free to contact us using the information below:
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fa fa-map-marker"></i>
            <span>123 Main Street, City, Country</span>
          </div>
          <div className="contact-item">
            <i className="fa fa-envelope"></i>
            <span>info@example.com</span>
          </div>
          <div className="contact-item">
            <i className="fa fa-phone"></i>
            <span>+1 123-456-7890</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
