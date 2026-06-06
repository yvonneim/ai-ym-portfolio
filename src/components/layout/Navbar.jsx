import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

/**
 * Responsive Navbar component
 * Features: Mobile menu toggle, theme switcher, responsive design
 */
const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home">Portfolio</a>
        </div>

        {/* Menu toggle button for mobile */}
        <button
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation links */}
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            {navLinks.map((link) => (
              <li key={link.href} className="navbar-item">
                <a
                  href={link.href}
                  className="navbar-link"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme toggle button */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            title={`${isDarkMode ? 'Light' : 'Dark'} Mode`}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Theme toggle for desktop (outside mobile menu) */}
        <button
          className="theme-toggle desktop-only"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          title={`${isDarkMode ? 'Light' : 'Dark'} Mode`}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
