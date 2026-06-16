import React from 'react';
import '../styles/legal.css';

const Terms = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-container">
          <div className="legal-header">
            <h1>Terms of Use</h1>
            <p>Last Updated: June 2026</p>
          </div>
          
          <div className="legal-content">
            <div className="legal-highlight-box">
              <p>The platform facilitates operational and compliance-related services. Availability of services may vary based on applicable regulations and internal review processes.</p>
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the Rupiexo platform, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

            <h2>2. User Registration & KYC</h2>
            <p>Users are required to undergo a comprehensive Know Your Customer (KYC) verification process. Rupiexo reserves the right to suspend or terminate accounts that fail to meet compliance standards or provide fraudulent information.</p>

            <h2>3. Transaction Rules</h2>
            <p>All peer-to-peer transactions facilitated through the platform must comply with local laws and the registered compliance frameworks we operate within. The platform acts as a structured environment to ensure record integrity.</p>

            <h2>4. Modifications</h2>
            <p>Rupiexo may revise these Terms of Use at any time without prior notice. By using this platform, you are agreeing to be bound by the current version of these Terms.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
