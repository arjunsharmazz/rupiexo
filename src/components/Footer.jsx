import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, MailIcon, MessageIcon } from './icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="/" className="logo footer-logo">
            <Logo className="logo-icon" />
            <div className="logo-text">
              <span className="brand-name">Rupiexo</span>
              <span className="brand-tagline">Connecting Trust</span>
            </div>
          </a>
          <p className="footer-desc">
            Facilitated Peer-to-Peer Transactions on a <strong>Compliance-First Platform</strong> aligned with applicable regulatory and reporting standards.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/compliance">Compliance</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-links">
          <h4>Platform</h4>
          <a href="#">Our Approach</a>
          <a href="#">KYC & Verification</a>
          <a href="#">Record Keeping</a>
          <a href="#">Monitoring</a>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/disclaimer">Compliance Disclaimer</Link>
        </div>

        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <div className="contact-item">
            <MailIcon className="contact-icon" />
            <a href="mailto:business@rupiexo.com">business@rupiexo.com</a>
          </div>
          <div className="contact-item">
            <MessageIcon className="contact-icon" />
            <p>We are here to help with your compliance and partnership enquiries.</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Rupiexo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
