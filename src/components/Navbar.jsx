import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Logo } from './icons';
import '../styles/home.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <Logo className="logo-icon" />
          <div className="logo-text">
            <span className="brand-name">Rupiexo</span>
            <span className="brand-tagline">Connecting Trust</span>
          </div>
        </NavLink>

        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/team" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={closeMenu}>Team</NavLink>
          <NavLink to="/compliance" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={closeMenu}>Compliance</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={closeMenu}>Contact Us</NavLink>
          <Link to="/contact" className="btn btn-primary nav-btn-mobile" onClick={closeMenu}>Get In Touch</Link>
        </nav>

        <Link to="/contact" className="btn btn-primary nav-btn">Get In Touch</Link>
      </div>
    </header>
  );
};

export default Navbar;
