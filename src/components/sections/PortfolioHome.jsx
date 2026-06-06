import React from 'react';

const PortfolioHome = ({ onExplore }) => {
  const highlights = [
    {
      title: 'Enterprise AI Strategy',
      description: 'A disciplined approach to scaling AI adoption across operations, infrastructure, and governance.',
    },
    {
      title: 'Platform-Ready Execution',
      description: 'Premium implementation frameworks built for reliability, compliance, and enterprise velocity.',
    },
    {
      title: 'AI Infrastructure Orchestration',
      description: 'Designing resilient, secure AI systems that are easy to operate and evolve over time.',
    },
  ];

  return (
    <section className="portfolio-home section-padding">
      <div className="container-lg portfolio-home-shell">
        <div className="portfolio-hero-panel">
          <span className="section-pill">ENTERPRISE AI OPERATIONS & INFRASTRUCTURE</span>
          <h1 className="portfolio-hero-title">Orchestrating Enterprise AI Implementation.</h1>
          <p className="portfolio-hero-copy">
            Deliver a clean, premium experience for advanced AI programs. Forward Moves bridges strategy,
            operations, and engineering with executive-ready design and a technology-first execution model.
          </p>

          <div className="portfolio-actions">
            <button className="btn-primary hero-cta" onClick={onExplore}>
              EXPLORE FORWARD MOVES AI →
            </button>
            <a className="btn-secondary hero-secondary" href="#contact">
              Contact the team
            </a>
          </div>
        </div>

        <div className="portfolio-grid">
          {highlights.map((item) => (
            <article key={item.title} className="portfolio-stat-card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <section id="contact" className="contact-section">
        <div className="container-lg contact-panel">
          <div className="contact-card">
            <div>
              <p className="section-pill">GET IN TOUCH</p>
              <h2>Scheduled briefings and AI plan reviews</h2>
              <p>
                Connect directly with the operations team to review platform strategy, implementation
                readiness, and enterprise alignment.
              </p>
            </div>
            <a className="btn-primary" href="mailto:hello@example.com">
              hello@example.com
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PortfolioHome;
