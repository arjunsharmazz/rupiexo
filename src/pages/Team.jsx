import React from 'react';
import '../styles/home.css';
import '../styles/team.css';
import { ShieldCheck } from '../components/icons';

import shivaImg from '../assets/shiva.png';
// import rohitImg from '../assets/rohit.png';
import shivamImg from '../assets/shivam.png';
import arjunImg from '../assets/arjun.png';
import nazimImg from '../assets/nazim.png';
import shankyImg from '../assets/shanky.png';

const ceoProfile = {
  name: "Shiva Verma",
  title: "Founder, Chief Executive Officer (CEO) & Designated Director",
  image: shivaImg,
  bio: [
    "Shiva Verma is the Founder, CEO, and Designated Director of Rupiexo, bringing over 5 years of industry experience in business operations, strategic planning, and merchant-led financial services. With an entrepreneurial mindset and a strong focus on innovation, he has played a pivotal role in building and driving the Company's vision, operational framework, and long-term growth strategy.",
    "He is actively involved in business development, regulatory coordination, risk management, and the implementation of scalable processes that support sustainable expansion. His leadership emphasizes integrity, compliance, customer-centricity, and operational excellence.",
    "At Rupiexo, Shiva oversees the Company's strategic direction, partnerships, and day-to-day decision-making while fostering a culture of accountability, adaptability, and continuous improvement.",
  ],
  meta: [{ label: "Experience", value: "5+ Years" }],
  expertise: [
    "Business Strategy & Leadership",
    "Business Operations Management",
    "Merchant Operations & Process Optimization",
    "Regulatory & Compliance Coordination",
    "Risk Assessment & Mitigation",
    "Strategic Partnerships & Business Development",
    "Team Leadership & Decision Making",
    "Growth Planning & Execution",
  ],
  email: "shivaexora@gmail.com",
  phone: "+91 93114 80203",
  tel: "+919311480203",
};

const teamProfiles = [
  {
    initials: "ST",
    name: "Shivam Tripathi",
    title: "Business Advisor",
    image: shivamImg,
    bio: [
      "Shivam Tripathi is a results-driven business professional with over 5 years of experience in business and market analysis. He specializes in identifying growth opportunities, evaluating market trends, and providing strategic insights that support informed decision-making and sustainable business expansion.",
      "At Rupiexo, he contributes to business planning and advisory initiatives by leveraging analytical expertise to help drive operational efficiency and long-term growth.",
    ],
    meta: [{ label: "Experience", value: "5+ Years" }],
    expertise: [
      "Business Analysis",
      "Market Analysis",
      "Strategic Planning",
      "Business Research",
      "Growth Strategy & Advisory",
    ],
    email: "test@gmail.com",
    phone: "+91 91185 36098",
    tel: "+919118536098",
  },
  {
    initials: "AS",
    name: "Arjun Sharma",
    title: "Tech Head",
    image: arjunImg,
    bio: [
      "Arjun Sharma is a technology leader with 5+ years of experience in software development, AI, blockchain, and product design. As Tech Head at Rupiexo, he drives the technical roadmap and oversees the delivery of secure, scalable digital solutions.",
      "A BCA and MCA graduate, he works across the full development lifecycle—frontend, backend, UI/UX, and system architecture—turning business goals into reliable, innovation-focused products.",
    ],
    meta: [
      { label: "Experience", value: "5+ Years" },
      { label: "Education", value: "BCA & MCA" },
    ],
    expertise: [
      "Full-Stack Development",
      "Artificial Intelligence (AI)",
      "UI/UX Design",
      "Blockchain Development",
      "System Architecture",
      "Technical Leadership",
    ],
    email: "tech@exorain.com",
    phone: "+91 7078849475",
    tel: "+917078849475",
  },
  {
    initials: "SV",
    name: "Shankey Verma",
    title: "Client Relationship Manager",
    image: shankyImg,
    bio: [
      "Shankey Verma is a client-focused professional with over 3 years of experience in building and maintaining strong customer relationships. He is committed to delivering exceptional service, ensuring smooth communication, and enhancing overall client satisfaction.",
      "At Rupiexo, he serves as the primary point of contact for clients, helping address their requirements efficiently while fostering long-term business relationships built on trust and professionalism.",
    ],
    meta: [{ label: "Experience", value: "3+ Years" }],
    expertise: [
      "Client Relationship Management",
      "Customer Service & Support",
      "Client Communication",
      "Stakeholder Coordination",
      "Relationship Building",
      "Problem Resolution",
    ],
    email: "vshankey88@gmail.com",
    phone: "+91 80062 13918",
    tel: "+918006213918",
  },
  {
    initials: "NS",
    name: "Nazim Saif",
    title: "Client Relationship Manager",
    image: nazimImg,
    bio: [
      "Nazim Saif is a dedicated client relationship professional with over 3 years of experience in managing client interactions and fostering long-term business relationships. He is committed to delivering exceptional service, understanding client requirements, and ensuring seamless communication to enhance customer satisfaction.",
      "At Rupiexo, he plays a key role in maintaining strong client relationships, addressing concerns efficiently, and contributing to a positive customer experience through professionalism and responsiveness.",
    ],
    meta: [{ label: "Experience", value: "3+ Years" }],
    expertise: [
      "Client Relationship Management",
      "Customer Service & Support",
      "Client Communication",
      "Stakeholder Coordination",
      "Relationship Building",
      "Problem Resolution",
    ],
    email: "saifexora@gmail.com",
    phone: "+91 63958 78013",
    tel: "+916395878013",
  },
];

const Team = () => {
  return (
    <div className="team-page">

      {/* ── Hero ── */}
      <section className="team-page-hero">
        <div className="container">
          <div className="team-hero-inner">
            <span className="team-hero-badge">
              <ShieldCheck /> Our People
            </span>
            <h1 className="team-hero-title">
              The Minds Behind <span className="highlight-blue">Rupiexo</span>
            </h1>
            <p className="team-hero-desc">
              A passionate team of strategists, technologists, and compliance professionals
              committed to building India's most trusted peer-to-peer financial platform.
            </p>
            <div className="team-stats-row">
              <div className="team-stat">
                <div className="team-stat-number">6+</div>
                <div className="team-stat-label">Team Members</div>
              </div>
              <div className="team-stat">
                <div className="team-stat-number">30+</div>
                <div className="team-stat-label">Years Combined Exp.</div>
              </div>
              <div className="team-stat">
                <div className="team-stat-number">5+</div>
                <div className="team-stat-label">Industry Verticals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CEO Spotlight ── */}
      <section className="ceo-spotlight">
        <div className="container">
          <div className="ceo-spotlight-card">
            <div className="ceo-gradient-bar"></div>
            <div className="ceo-spotlight-inner">
              <div className="ceo-photo-col">
                <div className="ceo-photo-frame">
                  <img src={ceoProfile.image} alt={ceoProfile.name} />
                </div>
                <span className="ceo-role-pill">Founder · CEO</span>
              </div>
              <div className="ceo-detail-col">
                <h2 className="ceo-detail-name">{ceoProfile.name}</h2>
                <p className="ceo-detail-title">{ceoProfile.title}</p>
                {ceoProfile.bio.map((para, i) => (
                  <p key={i} className="ceo-bio-text">{para}</p>
                ))}
                <div className="profile-meta-chips">
                  {ceoProfile.meta.map((m) => (
                    <div key={m.label} className="meta-chip">
                      <span className="meta-chip-label">{m.label}</span>
                      <span className="meta-chip-value">{m.value}</span>
                    </div>
                  ))}
                </div>
                <div className="expertise-tag-section">
                  <h4 className="expertise-tag-title">Core Expertise</h4>
                  <div className="expertise-tags">
                    {ceoProfile.expertise.map((s) => (
                      <span key={s} className="expertise-tag">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="profile-contact-row">
                  <a href={`mailto:${ceoProfile.email}`} className="profile-contact-link">
                    <span className="pc-icon">✉</span> {ceoProfile.email}
                  </a>
                  <a href={`tel:${ceoProfile.tel}`} className="profile-contact-link">
                    <span className="pc-icon">📞</span> {ceoProfile.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Principal Officer ── */}
      <section className="po-section">
        <div className="container">
          <div className="po-connector">
            <div className="po-connector-line"></div>
            <span className="po-connector-label">Reporting Structure</span>
            <div className="po-connector-line"></div>
          </div>
          <div className="po-card">
            <div className="po-icon-wrap">
              <ShieldCheck />
            </div>
            <div className="po-card-content">
              <h3>Yashvardhan Tyagi</h3>
              <p className="po-role">Principal Officer (PO)</p>
              <p className="po-desc">
                Oversees AML/CFT implementation, suspicious transaction reporting
                (STR/CTR), and internal monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Members Grid ── */}
      <section className="team-members-section">
        <div className="container">
          <div className="team-members-header">
            <div className="section-subtitle">OUR TEAM</div>
            <h2 className="team-members-title">Meet the Team</h2>
            <p className="team-members-subtitle">
              Our experienced professionals drive every aspect of Rupiexo's operations, technology, and client success.
            </p>
          </div>

          <div className="team-cards-grid">
            {teamProfiles.map((profile) => (
              <div key={profile.name} className="member-card">
                <div className="member-card-accent"></div>
                <div className="member-card-inner">
                  <div className="member-card-top">
                    {profile.image ? (
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="member-photo"
                      />
                    ) : (
                      <div className="member-photo-placeholder">
                        <span>{profile.initials}</span>
                      </div>
                    )}
                    <div className="member-identity">
                      <h3>{profile.name}</h3>
                      <p>{profile.title}</p>
                    </div>
                  </div>

                  {profile.bio.map((para, i) => (
                    <p key={i} className="member-bio">{para}</p>
                  ))}

                  <div className="member-meta">
                    {profile.meta.map((m) => (
                      <div key={m.label} className="meta-chip">
                        <span className="meta-chip-label">{m.label}</span>
                        <span className="meta-chip-value">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="member-expertise-title">Core Expertise</div>
                  <div className="member-expertise-tags">
                    {profile.expertise.map((s) => (
                      <span key={s} className="member-expertise-tag">{s}</span>
                    ))}
                  </div>

                  <div className="member-contact">
                    <a href={`mailto:${profile.email}`} className="member-contact-link">
                      <span className="mc-icon">✉</span> {profile.email}
                    </a>
                    <a href={`tel:${profile.tel}`} className="member-contact-link">
                      <span className="mc-icon">📞</span> {profile.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIU Badge ── */}
      {/* <section className="team-fiu-badge">
        <div className="container">
          <div className="fiu-pill">
            <span className="fiu-pill-dot"></span>
            Rupiexo India Pvt Ltd – In process of FIU-IND registration under PMLA 2002.
          </div>
        </div>
      </section> */}

      {/* ── CTA ── */}
      <section className="cta">
        <div className="container cta-container">
          <div className="cta-box">
            <div className="cta-left">
              <div className="cta-icon-wrapper">
                <ShieldCheck className="cta-icon" />
              </div>
              <h2>Want to join our mission?<br />We'd love to hear from you.</h2>
            </div>
            <div className="cta-right">
              <a href="/contact" className="btn btn-secondary">Get In Touch &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
