import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'GitHub', icon: 'GH', url: 'https://github.com' },
    { label: 'LinkedIn', icon: 'LI', url: 'https://linkedin.com' },
    { label: 'Twitter', icon: 'TW', url: 'https://twitter.com' },
    { label: 'Email', icon: 'EM', url: 'mailto:hello@example.com' },
  ];

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'Forward Moves', href: '#home' },
        { label: 'Dashboard', href: '#dashboard' },
        { label: 'Glossary', href: '#glossary' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Resume Prep', href: '#resume' },
        { label: 'Careers', href: '#careers' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="footer-title">Forward Moves</h3>
            <p className="footer-description">
              Light, premium platform design with enterprise AI operations and infrastructure at the core.
            </p>
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

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Forward Moves AI. All rights reserved.
          </p>
          <p className="footer-credit">Built for premium AI operations and enterprise readiness.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
