import React from 'react';
import '../styles/legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-container">
          <div className="legal-header">
            <h1>Privacy Policy</h1>
            <p>Last Updated: June 2026</p>
          </div>
          
          <div className="legal-content">
            <div className="legal-highlight-box">
              <p>The platform facilitates operational and compliance-related services. Availability of services may vary based on applicable regulations and internal review processes.</p>
            </div>

            <h2>1. Information We Collect</h2>
            <p>We collect information necessary to provide our compliance-first peer-to-peer services. This includes personal identification information (Name, Email, Phone Number, Government IDs) required for our KYC verification process.</p>

            <h2>2. How We Use Your Information</h2>
            <p>Your information is primarily used to verify your identity, monitor transactions for fraud prevention, maintain structured records, and comply with applicable regulatory standards.</p>

            <h2>3. Data Security</h2>
            <p>We implement robust security measures to maintain the safety of your personal information. All sensitive data is encrypted and stored securely with strict access controls.</p>

            <h2>4. Information Sharing</h2>
            <p>We do not sell your personal data. Information may be shared with regulatory bodies or law enforcement strictly when required by law or as part of our registered compliance framework.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
