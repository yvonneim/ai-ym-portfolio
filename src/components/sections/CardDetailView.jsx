import React from 'react';

const detailPages = {
  reskilling: {
    category: '--- Select your courses.',
    title: 'Skill Studio',
    description:
      'A calm executive environment for guided learning pathways, curated modules, and practical role growth.',
    blocks: [
      {
        title: 'Focused Learning Tracks',
        points: [
          'Curated course sequences aligned to modern AI workflows.',
          'Practical modules designed for efficient upskilling.',
          'Clear milestones for professional capability growth.',
        ],
      },
      {
        title: 'Course Navigation',
        points: [
          'Rapidly access core lessons from partner platforms.',
          'Maintain progress with a clean, distraction-free layout.',
          'Filter by role, tool, and priority skill set.',
        ],
      },
    ],
  },
  careers: {
    category: '--- Career opportunities.',
    title: 'Careers',
    description:
      'A refined dashboard to review mission-driven employer pathways, target roles, and hiring momentum.',
    blocks: [
      {
        title: 'Opportunity Signals',
        points: [
          'Track live hiring trends across verticals.',
          'Match skills to emerging roles with confidence.',
          'Visualize workforce demand with elegant clarity.',
        ],
      },
      {
        title: 'Talent Intelligence',
        points: [
          'Surface high-priority career channels.',
          'Compare pathways across industries succinctly.',
          'Preserve a single source of truth for role strategy.',
        ],
      },
    ],
  },
  scout: {
    category: '--- Intelligent career discovery.',
    title: 'AI Career Scout',
    description:
      'A light, focused experience for evaluating role fit and career direction in modern AI organizations.',
    blocks: [
      {
        title: 'Curated Matches',
        points: [
          'Recommend opportunities based on skill alignment.',
          'Provide clear guidance across career pathways.',
          'Make decisions with concise, contextual insight.',
        ],
      },
      {
        title: 'Opportunity Clarity',
        points: [
          'Surface relevant roles with minimal noise.',
          'Compare options through consistent criteria.',
          'Advance with confidence in your next career move.',
        ],
      },
    ],
  },
  resume: {
    category: '--- Refine your profile.',
    title: 'Resume Prep',
    description:
      'An executive polish toolkit for concise, professional career narratives tailored to AI and technology leadership.',
    blocks: [
      {
        title: 'Narrative Precision',
        points: [
          'Frame achievements with clarity and impact.',
          'Present experience in streamlined enterprise language.',
          'Maintain a modern, minimal format for hiring managers.',
        ],
      },
      {
        title: 'Profile Toolkit',
        points: [
          'Access role-specific resume structures.',
          'Build a concise summary of outcomes and skills.',
          'Keep your professional materials clean and compelling.',
        ],
      },
    ],
  },
  glossary: {
    category: '--- AI terminology.',
    title: 'Glossary',
    description:
      'A refined term library that keeps technical language consistent, precise, and easy to reference across teams.',
    blocks: [
      {
        title: 'Core Definitions',
        points: [
          'Clarify key concepts with simple, authoritative language.',
          'Reduce ambiguity across collaboration and execution.',
          'Preserve a consistent vocabulary for every stakeholder.',
        ],
      },
      {
        title: 'Shared Context',
        points: [
          'Align teams with a single source of technical truth.',
          'Enable faster, safer decision-making through shared terms.',
          'Keep communication focused and intentional.',
        ],
      },
    ],
  },
  comparison: {
    category: '--- Precise evaluation.',
    title: 'Comparison Matrix',
    description:
      'A streamlined comparison canvas for assessing tools, platforms, and operating models with quiet confidence.',
    blocks: [
      {
        title: 'Side-by-Side Clarity',
        points: [
          'Compare features and readiness in a clean format.',
          'Measure options against consistent criteria.',
          'Choose with reduced noise and increased certainty.',
        ],
      },
      {
        title: 'Decision Framework',
        points: [
          'Evaluate tradeoffs with straightforward context.',
          'Keep comparisons light and focused.',
          'Turn insight into decisive next steps.',
        ],
      },
    ],
  },
};

const CardDetailView = ({ type, onBack }) => {
  const page = detailPages[type] || detailPages.reskilling;

  return (
    <section className="w-full min-h-screen bg-[#FAFAFA] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="bg-white border border-zinc-200 rounded-[28px] p-10 shadow-sm">
          <button
            type="button"
            onClick={onBack}
            className="text-xs uppercase tracking-[0.3em] text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            ← Return to dashboard
          </button>
          <div className="mt-8 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.4em] text-zinc-400">{page.category}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-zinc-900 tracking-tight leading-tight">
              {page.title}
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-zinc-600">
              {page.description}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {page.blocks.map((block) => (
            <article key={block.title} className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900 mb-4">{block.title}</h2>
              <ul className="space-y-3 text-sm text-zinc-600 list-disc list-inside">
                {block.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onBack}
            className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
          >
            Back to Dashboard Hub
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardDetailView;
