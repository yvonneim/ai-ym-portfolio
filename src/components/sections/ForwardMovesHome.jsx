import React from 'react'

export default function ForwardMovesHome({ setView }) {
  const cards = [
    {
      type: 'comparison',
      title: 'Comparison Matrix',
      desc: 'Analyze key differences between legacy roles and AI career vectors side-by-side.',
      badge: 'COMING SOON',
      style: 'bg-indigo-50/50 border-indigo-100 text-indigo-700',
    },
    {
      type: 'ai-career-scout',
      title: 'AI Career Scout',
      desc: 'Consult with our real-time assistant regarding target metrics, cluster velocities, or upcoming pivots.',
      badge: 'COMING SOON',
      style: 'bg-amber-50/50 border-amber-100 text-amber-700',
    },
    {
      type: 'resume-prep',
      title: 'Resume Prep',
      desc: 'Anonymize professional trajectory rows securely and cross-evaluate matching algorithmic profiles.',
      badge: 'COMING SOON',
      style: 'bg-emerald-50/50 border-emerald-100 text-emerald-700',
    },
    {
      type: 'reskilling',
      title: 'Reskilling Portal',
      desc: 'Access curated technical learning modules, programs, and development sandboxes.',
      badge: null,
      style: 'bg-purple-50/50 border-purple-100 text-purple-700',
    },
    {
      type: 'careers',
      title: 'Careers',
      desc: 'Track live macro employment tracking datasets and macro regional hiring shifts.',
      badge: null,
      style: 'bg-blue-50/50 border-blue-100 text-blue-700',
    },
    {
      type: 'glossary',
      title: 'Glossary System',
      desc: 'Break down interface architecture jargon, infrastructure tags, and technical syntax definition data.',
      badge: null,
      style: 'bg-fuchsia-50/50 border-fuchsia-100 text-fuchsia-700',
    },
  ]

  return (
    <div className="w-full">
      <div className="w-full bg-amber-50 border-b border-amber-100 px-6 py-2 text-center text-xs font-medium text-amber-800">
        Sample Disclaimer: "Forward Moves AI is currently in its community-testing phase. To protect your privacy, please remove personal contact information from your resume before uploading."
      </div>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-6 text-center max-w-2xl mx-auto mb-12">
          <div className="text-[10px] font-bold tracking-widest text-purple-600 uppercase">• Forward Moves USA</div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            Step Into Your <span className="text-purple-600">AI-Driven Future.</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Your bridge to a more fulfilling career. We connect your unique talents to the opportunities in the AI workforce.
          </p>
          <div className="max-w-xs mx-auto bg-gray-50 rounded-xl p-2 border border-gray-100 flex items-center justify-center gap-2">
            <span className="text-xs">🔊 Audio Player Interface Mock</span>
          </div>
          <button className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold px-6 py-3 rounded-lg shadow-sm">
            Get Started →
          </button>
        </div>
        <div className="py-10 text-center">
          <div className="text-xl mb-1">🧭</div>
          <h3 className="font-bold text-gray-900 text-xl">Explore What's Inside</h3>
          <p className="text-gray-400 text-xs mt-0.5">Select a path to begin your journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div
              key={c.type}
              onClick={() => setView(c.type)}
              className={`${c.style} border rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-sm cursor-pointer relative`}
            >
              {c.badge && (
                <span className="absolute top-4 right-4 bg-gray-200/60 text-gray-500 text-[9px] font-bold px-2 py-0.5 rounded-full">
                  {c.badge}
                </span>
              )}
              <h4 className="font-bold text-gray-900 text-base mb-1.5">{c.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
