import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ view, setView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const portfolioLinks = [
    { label: 'FORWARD MOVES AI', action: () => setView('dashboard') },
    {
      label: 'CONTACT',
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      },
    },
  ];

  const platformLinks = [
    { label: '🏡 HOME', action: () => setView('portfolio') },
    { label: 'DASHBOARD HUB', action: () => setView('dashboard') },
    { label: 'COMPARISON', action: () => setView('comparison') },
    { label: 'RESKILLING', action: () => setView('reskilling') },
    { label: 'CAREERS', action: () => setView('careers') },
    { label: 'AI CAREER SCOUT', action: () => setView('scout') },
    { label: 'RESUME PREP', action: () => setView('resume') },
    { label: 'GLOSSARY', action: () => setView('glossary') },
  ];

  const navItems = view === 'portfolio' ? portfolioLinks : platformLinks;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <button type="button" className="navbar-logo-button" onClick={() => setView('portfolio')}>
            FORWARD MOVES
          </button>
        </div>

        <button
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            {navItems.map((item) => (
              <li key={item.label} className="navbar-item">
                <button type="button" className="navbar-link" onClick={() => { item.action(); closeMobileMenu(); }}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
