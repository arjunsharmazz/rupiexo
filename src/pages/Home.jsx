import React from 'react';
import '../styles/home.css';
import { ShieldCheck, DocumentIcon, UserCheck, SearchPulse, TargetIcon, UsersIcon, GlobeIcon, HandshakeIcon, LockIcon } from '../components/icons';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="compliance-pill">
              <ShieldCheck className="pill-icon" />
              <span>Compliance First. Always.</span>
            </div>
            <h1 className="hero-title">
              Facilitated Peer-to-Peer Transactions on a <span className="highlight-blue">Compliance-First Platform</span>
            </h1>
            <p className="hero-subtitle">
              aligned with applicable regulatory and reporting standards.
            </p>
            <p className="hero-description">
              We provide a secure and structured environment for verified users to conduct peer-to-peer transactions with a strong focus on compliance, transparency and record integrity.
            </p>
            <div className="hero-actions">
              <a href="#" className="btn btn-primary">Learn More &rarr;</a>
              <a href="#" className="btn btn-outline">Contact Us</a>
            </div>
          </div>
          <div className="hero-graphic">
            <img src="/hero_graphic.png" alt="Platform graphic showing security and compliance" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features bg-light">
        <div className="container features-container">
          <div className="section-header center">
            <h2>Built on Trust. Backed by <span className="highlight-blue">Compliance.</span></h2>
            <p>Our core pillars ensure a safe, transparent and well-documented platform experience.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck className="feature-icon" />
              </div>
              <h3>Compliance Framework</h3>
              <p>Aligned with applicable regulatory and reporting standards.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <DocumentIcon className="feature-icon" />
              </div>
              <h3>Record Keeping</h3>
              <p>Structured record management and secure data retention.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <UserCheck className="feature-icon" />
              </div>
              <h3>KYC Verification</h3>
              <p>Robust identity verification and due diligence processes.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <SearchPulse className="feature-icon" />
              </div>
              <h3>Transaction Monitoring</h3>
              <p>Continuous monitoring to ensure safe and compliant transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container about-container">
          <div className="about-graphic">
            <img src="/target_graphic.png" alt="Target focused graphic" />
          </div>
          <div className="about-content">
            <div className="section-subtitle">ABOUT OUR PLATFORM</div>
            <h2>A Startup Focused on <br/> <span className="highlight-blue">Compliance & Transparency</span></h2>
            <p>
              We are a growing startup focused on facilitating peer-to-peer transactions in India, strictly in compliance with registered FIRs and applicable laws. Our platform supports users with funds management, service support, and deposit-related functionalities in a structured and compliant manner.
            </p>
            
            <div className="about-list">
              <div className="about-list-item">
                <UsersIcon className="list-icon" />
                <span>User-Centric Approach</span>
              </div>
              <div className="about-list-item">
                <ShieldCheck className="list-icon" />
                <span>Compliance Driven</span>
              </div>
              <div className="about-list-item">
                <LockIcon className="list-icon" />
                <span>Secure & Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team bg-light">
        <div className="container team-container">
          <div className="team-content">
            <div className="section-subtitle">OUR STRENGTH</div>
            <h2>Supported by a <span className="highlight-blue">Worldwide Team</span></h2>
            <p>
              Our diverse and experienced team operates across multiple regions, working together to build technology, strengthen compliance processes and deliver a trusted platform experience.
            </p>
          </div>
          
          <div className="team-stats">
            <div className="stat-item">
              <UsersIcon className="stat-icon" />
              <span>Global<br/>Team</span>
            </div>
            <div className="stat-item">
              <GlobeIcon className="stat-icon" />
              <span>Multiple<br/>Regions</span>
            </div>
            <div className="stat-item">
              <ShieldCheck className="stat-icon" />
              <span>One Goal:<br/>Trust & Compliance</span>
            </div>
          </div>

          <div className="team-graphic">
            <img src="/globe_graphic.png" alt="Globe showing worldwide reach" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container cta-container">
          <div className="cta-box">
            <div className="cta-left">
              <div className="cta-icon-wrapper">
                <HandshakeIcon className="cta-icon" />
              </div>
              <h2>Looking for a Compliance-Focused<br/>Transaction Facilitation Partner?</h2>
            </div>
            <div className="cta-right">
              <a href="#" className="btn btn-secondary">Contact Our Team &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
