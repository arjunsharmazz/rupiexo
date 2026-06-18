import React from 'react';
import '../styles/home.css';
import '../styles/compliance.css';
import { 
  ShieldCheck, 
  DocumentIcon, 
  UserCheck, 
  SearchPulse, 
  BuildingIcon, 
  BadgeIcon,
  LockIcon
} from '../components/icons';

const Compliance = () => {
  return (
    <div className="compliance-page">
      {/* Hero Section */}
      <section className="compliance-hero">
        <div className="container compliance-hero-container">
          <div className="compliance-hero-content">
            <div className="section-subtitle">COMPLIANCE</div>
            <h1 className="compliance-hero-title">
              Our Compliance <br/> <span className="highlight-blue">Framework</span>
            </h1>
            <p className="compliance-hero-description">
              We follow a compliance-first approach aligned with applicable regulatory and reporting standards to ensure transparency, accountability and trust in every transaction.
            </p>
            
            <div className="pill-box">
              <ShieldCheck className="pill-icon" />
              <p>
                Facilitated Peer-to-Peer Transactions on a <strong>Compliance-First Platform</strong> aligned with applicable regulatory and reporting standards.
              </p>
            </div>
          </div>
          <div className="compliance-hero-graphic">
            <div className="fallback-graphic">
              <ShieldCheck className="giant-icon" />
              <h3>COMPLIANCE</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="compliance-main">
        <div className="container compliance-main-container">
          
          {/* Left Column: Pillars */}
          <div className="pillars-column">
            <h2 className="compliance-section-title">OUR COMPLIANCE PILLARS</h2>
            <div className="pillars-list">
              
              <div className="pillar-card">
                <div className="pillar-graphic">
                  <UserCheck className="p-icon" />
                  <div className="p-badge"><ShieldCheck /></div>
                </div>
                <div className="pillar-content">
                  <h3>1. KYC Procedures</h3>
                  <p>We have a robust KYC process to verify the identity of our users. This includes identity verification, address verification and other risk-based checks in line with applicable regulations.</p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-graphic">
                  <DocumentIcon className="p-icon" />
                  <div className="p-badge"><LockIcon /></div>
                </div>
                <div className="pillar-content">
                  <h3>2. Record Management</h3>
                  <p>We maintain structured and secure records of all transactions and user activities. Our systems ensure data accuracy, confidentiality and availability for audit and regulatory review.</p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-graphic">
                  <SearchPulse className="p-icon" />
                  <div className="p-badge"><ShieldCheck /></div>
                </div>
                <div className="pillar-content">
                  <h3>3. Transaction Monitoring</h3>
                  <p>We continuously monitor transactions to identify unusual patterns or activities. Our risk-based monitoring systems help ensure a safe and compliant platform.</p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-graphic">
                  <DocumentIcon className="p-icon" />
                  <div className="p-badge"><ShieldCheck /></div>
                </div>
                <div className="pillar-content">
                  <h3>4. Documentation Standards</h3>
                  <p>All required documentation is collected, verified and maintained as per internal policies and applicable regulatory requirements. We ensure documentation integrity and traceability.</p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-graphic">
                  <BuildingIcon className="p-icon" />
                  <div className="p-badge"><ShieldCheck /></div>
                </div>
                <div className="pillar-content">
                  <h3>5. GST &amp; Business Documentation</h3>
                  <p>We are fully registered and maintain all applicable business documentation including GST registration and corporate identity records.</p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-graphic">
                  <SearchPulse className="p-icon" />
                  <div className="p-badge"><ShieldCheck /></div>
                </div>
                <div className="pillar-content">
                  <h3>6. Audit Support</h3>
                  <p>We maintain audit-ready records and support internal and external audits by providing relevant documents and reports as required.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Journey & Registration */}
          <div className="sidebar-column">
            
            {/* Journey Timeline Box */}
            <div className="journey-card">
              <div className="section-subtitle">COMPLIANCE JOURNEY</div>
              <h2>Our Compliance<br/>Process Flow</h2>
              <p>A structured and continuous process designed to ensure compliance at every step.</p>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-icon-wrap">
                    <UserCheck className="t-icon" />
                    <span className="step-num">1</span>
                  </div>
                  <div className="timeline-content">
                    <h4>Verification</h4>
                    <p>User identification and verification through KYC procedures.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-icon-wrap">
                    <DocumentIcon className="t-icon" />
                    <span className="step-num">2</span>
                  </div>
                  <div className="timeline-content">
                    <h4>Documentation</h4>
                    <p>Collection and verification of required documents and information.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon-wrap">
                    <SearchPulse className="t-icon" />
                    <span className="step-num">3</span>
                  </div>
                  <div className="timeline-content">
                    <h4>Monitoring</h4>
                    <p>Continuous transaction monitoring and risk assessment.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon-wrap">
                    <ShieldCheck className="t-icon" />
                    <span className="step-num">4</span>
                  </div>
                  <div className="timeline-content">
                    <h4>Record Retention</h4>
                    <p>Secure record keeping and retention as per policy and regulatory norms.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Details Box */}
            <div className="registration-box">
              <h3 style={{ marginBottom: '24px', fontSize: '18px', color: 'var(--primary)' }}>Our Registration Details</h3>
              
              <div className="reg-item">
                <div className="reg-icon">
                  <BuildingIcon />
                </div>
                <div className="reg-content">
                  <p>Goods and Services Tax Identification Number</p>
                  <h4>09AAPCR8674P1Z1</h4>
                </div>
              </div>

              <div className="reg-item" style={{ marginBottom: 0, paddingBottom: 0, borderBottom: 'none' }}>
                <div className="reg-icon">
                  <BadgeIcon />
                </div>
                <div className="reg-content">
                  <p>The Corporate Identity Number of the company is</p>
                  <h4>U62099UW2026PTC252368</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" style={{ marginTop: '-80px' }}>
        <div className="container cta-container">
          <div className="cta-box">
            <div className="cta-left">
              <div className="cta-icon-wrapper">
                <ShieldCheck className="cta-icon" />
              </div>
              <h2>Compliance is not just a process,<br/>it's our commitment to trust and transparency.</h2>
            </div>
            <div className="cta-right">
              <a href="#" className="btn btn-secondary">Contact Our Compliance Team &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
