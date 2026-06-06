import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Footer.css';

/**
 * Responsive Footer component
 * Features: Social links, contact info, copyright, responsive grid
 */
const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'GitHub', icon: 'GH', url: 'https://github.com' },
    { label: 'LinkedIn', icon: 'LI', url: 'https://linkedin.com' },
    { label: 'Twitter', icon: 'TW', url: 'https://twitter.com' },
    { label: 'Email', icon: 'EM', url: 'mailto:hello@example.com' },
  ];

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#blog' },
        { label: 'Documentation', href: '#docs' },
        { label: 'Resume', href: '#resume' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Content Grid */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <h3 className="footer-title">Portfolio</h3>
            <p className="footer-description">
              A modern portfolio showcasing projects, skills, and experiences.
            </p>
            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="social-link"
                  title={social.label}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="footer-section">
              <h4 className="footer-section-title">{section.title}</h4>
              <ul className="footer-links">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Divider */}
        <hr className="footer-divider" />

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <p className="footer-credit">
            Built with <span className="heart">❤️</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
