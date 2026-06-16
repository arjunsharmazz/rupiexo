import React from 'react';
import '../styles/home.css'; // Reuse some common styles like .btn, .container
import '../styles/about.css';
import { ShieldCheck, DocumentIcon, UserCheck, SearchPulse, TargetIcon, UsersIcon, GlobeIcon, HandshakeIcon, LockIcon, EyeIcon, BriefcaseIcon } from '../components/icons';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container about-hero-container">
          <div className="about-hero-content">
            <div className="section-subtitle">ABOUT US</div>
            <h1 className="about-hero-title">
              Building Trust. <br/> Driven by <span className="highlight-blue">Compliance.</span>
            </h1>
            <p className="about-hero-description">
              We are a startup focused on facilitating structured peer-to-peer transactions in India through a compliance-first approach. Our platform is built to ensure verification, transparency, record keeping and regulatory alignment at every step.
            </p>
            
            <div className="pill-box">
              <ShieldCheck className="pill-icon" />
              <p>
                Facilitated Peer-to-Peer Transactions on a <strong>Compliance-First Platform</strong> aligned with applicable regulatory and reporting standards.
              </p>
            </div>
          </div>
          <div className="about-hero-graphic">
            <img src="/about_hero.png" alt="Team collaboration and global reach" />
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="company-overview">
        <div className="container company-container">
          <div className="company-image">
            <img src="/skyscraper.png" alt="Modern corporate skyscraper" />
          </div>
          <div className="company-content">
            <div className="section-subtitle">OUR STORY</div>
            <h2>Company Overview</h2>
            <p>
              We are an early-stage startup with a clear mission to bring structure, transparency and accountability to peer-to-peer transactions.
            </p>
            <p>
              Our focus is India-specific, where we operate within the framework of registered compliance requirements, <strong>ensuring every transaction is backed by proper verification, documentation and record management.</strong>
            </p>
            <p>
              We work closely with compliance standards to build trust with our users, partners and financial institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon-wrapper">
                <TargetIcon className="mv-icon" />
              </div>
              <div className="mv-content">
                <h3>Our Mission</h3>
                <p>To facilitate secure, compliant and transparent peer-to-peer transactions by maintaining verification, monitoring and record keeping standards aligned with applicable regulatory and reporting requirements.</p>
              </div>
            </div>
            <div className="mv-card">
              <div className="mv-icon-wrapper">
                <EyeIcon className="mv-icon" />
              </div>
              <div className="mv-content">
                <h3>Our Vision</h3>
                <p>To be a trusted and globally recognized platform known for compliance excellence, operational integrity and delivering structured financial services for a better digital ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worldwide Team Section */}
      <section className="about-team">
        <div className="container">
          <div className="about-team-grid">
            <div className="team-left">
              <div className="about-team-header">
                <div>
                  <div className="section-subtitle">OUR STRENGTH</div>
                  <h2>Worldwide Team</h2>
                </div>
                <a href="#" className="btn btn-primary" style={{ height: 'fit-content' }}>Join Our Team</a>
              </div>
              <p>
                Our diverse and experienced team operates across multiple regions, bringing together expertise in technology, compliance, operations and user experience to build a trusted platform.
              </p>
              
              <div className="team-stats-grid">
                <div className="team-stat">
                  <GlobeIcon className="stat-icon" />
                  <h4>15+</h4>
                  <p>Countries</p>
                </div>
                <div className="team-stat">
                  <UsersIcon className="stat-icon" />
                  <h4>50+</h4>
                  <p>Team Members</p>
                </div>
                <div className="team-stat">
                  <BriefcaseIcon className="stat-icon" />
                  <h4>100+</h4>
                  <p>Years of Combined Experience</p>
                </div>
                <div className="team-stat">
                  <UsersIcon className="stat-icon" />
                  <h4>One</h4>
                  <p>Shared Vision</p>
                </div>
              </div>
            </div>
            <div className="team-right">
              <img src="/team_map.png" alt="Worldwide team map" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <div className="values-header">
            <div className="section-subtitle">OUR VALUES</div>
            <h2>The Principles We Stand By</h2>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck className="feature-icon" />
              </div>
              <h3>Transparency</h3>
              <p>We believe in clear communication and openness in all our processes and operations.</p>
            </div>
            
            <div className="value-card">
              <div className="feature-icon-wrapper">
                <UserCheck className="feature-icon" />
              </div>
              <h3>Accountability</h3>
              <p>We take responsibility for our actions and ensure commitment at every level.</p>
            </div>

            <div className="value-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck className="feature-icon" />
              </div>
              <h3>Verification</h3>
              <p>We follow robust verification procedures to ensure authenticity and compliance.</p>
            </div>

            <div className="value-card">
              <div className="feature-icon-wrapper">
                <DocumentIcon className="feature-icon" />
              </div>
              <h3>Record Integrity</h3>
              <p>We maintain accurate, secure and tamper-proof records for complete traceability and trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (reused from Home) */}
      <section className="cta" style={{ marginTop: '-80px' }}>
        <div className="container cta-container">
          <div className="cta-box">
            <div className="cta-left">
              <div className="cta-icon-wrapper">
                <ShieldCheck className="cta-icon" />
              </div>
              <h2>Let's Build a Compliant<br/>and Trusted Ecosystem Together.</h2>
            </div>
            <div className="cta-right">
              <a href="#" className="btn btn-secondary">Contact Us &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
