import React from 'react';
import '../styles/home.css';
import '../styles/contact.css';
import { 
  UserCheck, 
  MailIcon, 
  BuildingIcon, 
  EditIcon, 
  SendIcon, 
  LockIcon, 
  BriefcaseIcon, 
  ShieldCheck, 
  HandshakeIcon, 
  ClockIcon,
  BankIcon,
  MessageIcon
} from '../components/icons';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container contact-hero-container">
          <div className="contact-hero-content">
            <div className="section-subtitle">CONTACT US</div>
            <h1 className="contact-hero-title">
              We're Here to Help <br/> Let's <span className="highlight-blue">Connect.</span>
            </h1>
            <p className="contact-hero-description">
              Have a question or looking to work together? Fill out the form and our team will get back to you as soon as possible.
            </p>
          </div>
          <div className="contact-hero-graphic">
            {/* CSS Fallback Illustration for Envelope */}
            <div className="envelope-illustration">
              <div className="env-back"></div>
              <div className="env-letter">
                <div className="env-line"></div>
                <div className="env-line"></div>
                <div className="env-line short"></div>
              </div>
              <div className="env-front"></div>
              <div className="env-flap"></div>
              
              <div className="env-bubble">
                <MessageIcon className="bubble-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="contact-main">
        <div className="container contact-main-container">
          
          {/* Left Column: Form */}
          <div className="form-column">
            <div className="form-card">
              <h2>Send Us a Message</h2>
              
              <form className="contact-form">
                <div className="form-group">
                  <label>Name</label>
                  <div className="input-wrapper">
                    <UserCheck className="input-icon" />
                    <input type="text" placeholder="Enter your full name" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <div className="input-wrapper">
                    <MailIcon className="input-icon" />
                    <input type="email" placeholder="Enter your email address" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Organization</label>
                  <div className="input-wrapper">
                    <BuildingIcon className="input-icon" />
                    <input type="text" placeholder="Enter your organization name" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <div className="input-wrapper textarea-wrapper">
                    <EditIcon className="input-icon" />
                    <textarea placeholder="Write your message here..." rows="5"></textarea>
                  </div>
                </div>

                <button type="button" className="btn btn-primary submit-btn">
                  <SendIcon className="btn-icon" />
                  Send Message
                </button>
              </form>

              <div className="form-footer">
                <LockIcon className="footer-icon" />
                <p>Your information is safe with us. We respect your privacy.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Info Cards */}
          <div className="info-column">
            <div className="info-main-card">
              <h2>How Can We Help You?</h2>
              <p className="info-subtitle">Reach out to the right team for quick and efficient support.</p>
              
              <div className="info-list">
                
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <BriefcaseIcon className="i-icon" />
                  </div>
                  <div className="info-content">
                    <h3>Business Enquiries</h3>
                    <p>For general information about our platform, features and services.</p>
                    <a href="mailto:business@rupiexo.com" className="info-link">
                      <MailIcon className="link-icon" />
                      business@rupiexo.com
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <ShieldCheck className="i-icon" />
                  </div>
                  <div className="info-content">
                    <h3>Compliance Queries</h3>
                    <p>For compliance related questions, documentation and regulatory clarifications.</p>
                    <a href="mailto:compliance@rupiexo.com" className="info-link">
                      <MailIcon className="link-icon" />
                      compliance@rupiexo.com
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <HandshakeIcon className="i-icon" />
                  </div>
                  <div className="info-content">
                    <h3>Partnership Requests</h3>
                    <p>For partnership opportunities, collaborations and strategic alliances.</p>
                    <a href="mailto:partnerships@rupiexo.com" className="info-link">
                      <MailIcon className="link-icon" />
                      partnerships@rupiexo.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Response Time Badge */}
            <div className="response-time-card">
              <ClockIcon className="clock-icon" />
              <div className="response-content">
                <p>We aim to respond within</p>
                <h4>24 - 48 hours</h4>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Banner Section */}
      <section className="trust-banner-section">
        <div className="container">
          <div className="trust-banner">
            <div className="trust-icon-left">
              <ShieldCheck className="t-shield" />
            </div>
            <div className="trust-text">
              <h3>Committed to Transparency & Trust</h3>
              <p>We value open communication and are committed to responding to all enquiries in a timely and professional manner.</p>
            </div>
            <div className="trust-graphic-right">
              <BankIcon className="bank-icon" />
              <div className="small-shield"><ShieldCheck /></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
