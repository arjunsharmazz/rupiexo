import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Exchange', path: '/exchange' },
  { label: 'Rates', path: '/rates' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'History', path: '/history' },
  { label: 'Admin', path: '/admin' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar glass-card">
      <div className="nav-brand">
        <span className="brand-mark">R</span>
        <div>
          <h1>Rupiexo </h1>
          <p>Futuristic finance made simple</p>
        </div>
      </div>

      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-links ${open ? 'active' : ''}`}>
        {navLinks.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink to="/auth" className="nav-cta" onClick={() => setOpen(false)}>
          Sign in
        </NavLink>
      </nav>
    </header>
  );
}
