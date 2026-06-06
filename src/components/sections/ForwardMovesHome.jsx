import React from 'react';

const cardList = [
  {
    key: 'reskilling',
    title: 'Reskilling Portal',
    description: 'Self-directed learning pathways for teams preparing to move into AI-first roles.',
    colorClass: 'card-lavender',
  },
  {
    key: 'careers',
    title: 'Careers Tracking',
    description: 'Track internal mobility, evolving skill maps, and role readiness across the organization.',
    colorClass: 'card-blue',
  },
  {
    key: 'scout',
    title: 'AI Career Scout',
    description: 'Discover AI career journeys with smart recommendations and growth signals.',
    colorClass: 'card-cream',
  },
  {
    key: 'resume',
    title: 'Resume Prep',
    description: 'Generate polished, role-focused candidate narratives for AI and operations leadership.',
    colorClass: 'card-mint',
  },
  {
    key: 'glossary',
    title: 'Glossary System',
    description: 'Maintain a shared AI vocabulary for teams, products, and infrastructure concepts.',
    colorClass: 'card-violet',
  },
  {
    key: 'comparison',
    title: 'Comparison Matrix',
    description: 'Evaluate models, tools, partners, and capabilities across standardized dimensions.',
    colorClass: 'card-teal',
  },
];

const ForwardMovesHome = ({ onCardClick }) => {
  return (
    <section className="forward-home section-padding">
      <div className="container-lg">
        <div className="section-header">
          <span className="section-pill">FORWARD MOVES | DASHBOARD</span>
          <h1>Forward Moves Venture Platform</h1>
          <p>
            A bright, modern hub for core product modules. Select any card to explore the feature-rich
            sub-platform and access curated operational content.
          </p>
        </div>

        <div className="forward-grid">
          {cardList.map((card) => (
            <button
              key={card.key}
              type="button"
              className={`forward-card ${card.colorClass}`}
              onClick={() => onCardClick(card.key)}
            >
              <div className="forward-card-head">
                <span className="forward-card-label">{card.title}</span>
              </div>
              <p className="forward-card-copy">{card.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForwardMovesHome;
