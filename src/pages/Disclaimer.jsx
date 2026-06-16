import React from 'react';
import '../styles/legal.css';

const Disclaimer = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-container">
          <div className="legal-header">
            <h1>Compliance Disclaimer</h1>
            <p>Last Updated: June 2026</p>
          </div>
          
          <div className="legal-content">
            <div className="legal-highlight-box">
              <p>The platform facilitates operational and compliance-related services. Availability of services may vary based on applicable regulations and internal review processes.</p>
            </div>

            <h2>General Disclaimer</h2>
            <p>Rupiexo operates strictly as a platform to facilitate structured peer-to-peer transactions. While we mandate compliance and provide verification services, users are responsible for conducting their own due diligence before entering into any transaction.</p>

            <h2>Regulatory Alignment</h2>
            <p>Our operations are designed to align with current regulatory and reporting standards. However, regulations are subject to change. We continuously update our compliance frameworks but do not provide legal or financial advice.</p>

            <h2>No Guarantees</h2>
            <p>While we employ rigorous monitoring and verification procedures, Rupiexo does not guarantee the complete prevention of disputes between users. Our role is strictly to provide a secure environment and maintain tamper-proof records for traceability.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
