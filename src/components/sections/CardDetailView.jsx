import React from 'react';

const detailPages = {
  reskilling: {
    category: 'Reskilling Portal',
    title: 'Accelerate team readiness with structured AI reskilling.',
    description:
      'Centralize learning pathways, project-based skill upgrades, and measurable role transitions for operational teams.',
    blocks: [
      {
        title: 'Skill Journey Mapping',
        points: [
          'Define capability sets for AI enablement.',
          'Align technical and business skill trajectories.',
          'Measure progress through practical milestones.',
        ],
      },
      {
        title: 'Curriculum Playbooks',
        points: [
          'Deliver enterprise-grade learning frameworks.',
          'Support hands-on labs, case studies, and real-world operations.',
          'Keep adoption momentum across teams and roles.',
        ],
      },
    ],
  },
  careers: {
    category: 'Careers Tracking',
    title: 'Monitor career progress for AI, data, and technology roles.',
    description:
      'A unified tracking dashboard for skills, promotions, and internal mobility aligned to AI business outcomes.',
    blocks: [
      {
        title: 'Role Readiness Signals',
        points: [
          'Capture skill gaps, project experience, and stakeholder feedback.',
          'Surface candidates for emerging AI leadership roles.',
          'Filter by capability, tenure, and strategic alignment.',
        ],
      },
      {
        title: 'People-First Insights',
        points: [
          'Spotlight high-potential team members.',
          'Visualize mobility pathways and career readiness.',
          'Embed durable talent conversations into operational planning.',
        ],
      },
    ],
  },
  scout: {
    category: 'AI Career Scout',
    title: 'Discover the right AI career paths for modern enterprise professionals.',
    description:
      'Intelligent career scouting for AI talent, matching role themes with experience signals and future-proof job outcomes.',
    blocks: [
      {
        title: 'Guided Career Matches',
        points: [
          'Recommend target roles based on skill clusters.',
          'Align candidate strengths with AI operating models.',
          'Convert discovery into tangible career steps.',
        ],
      },
      {
        title: 'Opportunity Intelligence',
        points: [
          'Highlight top internal and external career paths.',
          'Compare career options with readiness signals.',
          'Track momentum across hiring and internal placement.',
        ],
      },
    ],
  },
  resume: {
    category: 'Resume Prep',
    title: 'Polish career narratives for AI and infrastructure leadership roles.',
    description:
      'Create compelling resumes, project summaries, and executive-facing profiles that present AI work in business terms.',
    blocks: [
      {
        title: 'Narrative Design',
        points: [
          'Frame achievements with strategic impact.',
          'Align experience to AI operating excellence.',
          'Use clean, professional language for enterprise audiences.',
        ],
      },
      {
        title: 'Resume Toolkit',
        points: [
          'Offer role-specific resume formats.',
          'Provide bullet-focused achievement statements.',
          'Support portfolio-ready project summaries.',
        ],
      },
    ],
  },
  glossary: {
    category: 'Glossary System',
    title: 'Standardize AI and infrastructure vocabulary across the platform.',
    description:
      'A shared glossary for decision makers, engineers, and operations teams to reduce ambiguity and accelerate collaboration.',
    blocks: [
      {
        title: 'Terms & Definitions',
        points: [
          'Define the key concepts used across AI programs.',
          'Keep definitions consistent across teams.',
          'Support shared decision-making with common language.',
        ],
      },
      {
        title: 'Stakeholder Alignment',
        points: [
          'Create a single source of truth for terminology.',
          'Reduce translation work between technical and business groups.',
          'Enable cross-functional clarity for every launch.',
        ],
      },
    ],
  },
  comparison: {
    category: 'Comparison Matrix',
    title: 'Compare capabilities, tools, and operating models with confidence.',
    description:
      'A precise comparison layer for AI platforms, vendor decisions, and internal capability scoring.',
    blocks: [
      {
        title: 'Side-by-Side Evaluation',
        points: [
          'Compare features, readiness, and operational fit.',
          'Score options by business, security, and scalability.',
          'Make faster, more repeatable decisions.',
        ],
      },
      {
        title: 'Decision Support',
        points: [
          'Surface the strongest option for each use case.',
          'Reduce risk with repeatable evaluation criteria.',
          'Turn matrix output into actionable recommendations.',
        ],
      },
    ],
  },
};

const CardDetailView = ({ type, onBack }) => {
  const page = detailPages[type] || detailPages.dashboard;

  return (
    <section className="detail-view section-padding">
      <div className="container-lg">
        <div className="detail-hero">
          <button type="button" className="btn-tertiary detail-back" onClick={onBack}>
            ← Return to dashboard
          </button>
          <span className="section-pill">{page.category}</span>
          <h1>{page.title}</h1>
          <p className="detail-description">{page.description}</p>
        </div>

        <div className="detail-grid">
          {page.blocks.map((block) => (
            <article key={block.title} className="detail-card">
              <h2>{block.title}</h2>
              <ul>
                {block.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="detail-actions">
          <button className="btn-primary" type="button" onClick={onBack}>
            Back to Dashboard Hub
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardDetailView;
