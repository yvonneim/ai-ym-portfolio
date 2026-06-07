import React from 'react'

export default function ForwardMovesHome({ setView }) {
  const cards = [
    {
      type: 'skill-studio',
      title: 'Skill Studio',
      desc: 'AI certifications and technical training across 9 partner portals.',
      icon: '⚡',
      className: 'bg-[#F5F3FF] border border-[#E0D7FF] text-purple-700',
    },
    {
      type: 'careers',
      title: 'Careers',
      desc: 'Mission-driven opportunities across Health, Climate, FinTech & more.',
      icon: '🌍',
      className: 'bg-[#EFF6FF] border border-[#DBEAFE] text-blue-700',
    },
    {
      type: 'community',
      title: 'Community',
      desc: 'Networking, mentorship, and the alumni collective.',
      icon: '🤝',
      className: 'bg-[#FFFBEB] border border-[#FEF3C7] text-amber-700',
    },
    {
      type: 'interviewing',
      title: 'Interviewing',
      desc: 'Interview prep, frameworks, and behavioral excellence.',
      icon: '🎯',
      className: 'bg-[#F0FDF4] border border-[#DCFCE7] text-emerald-700',
    },
  ]

  return (
    <div className="w-full bg-[#fafafa] min-h-screen py-12 px-6 md:px-12">
      <div className="w-full bg-[#FFFDF6] border-b border-[#FBECC5] px-6 py-2.5 text-center text-[11px] font-normal text-[#D97706] tracking-wide">
        Sample Disclaimer: <span className="font-light text-[#78350F]">"Forward Moves AI is currently in its community-testing phase. To protect your privacy, please remove personal contact information from your resume before uploading."</span>
      </div>

      <div className="max-w-6xl mx-auto w-full space-y-12 px-6 py-16 hero-mesh rounded-[2rem]">
        <div className="bg-white border border-gray-100 rounded-3xl p-10 md:p-14 shadow-sm shadow-gray-100/40 space-y-6">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-purple-600 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            Forward Moves USA
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
            Step Into Your <span className="text-purple-600">AI-Driven Future.</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Your bridge to a more fulfilling career. We connect your unique talents to the opportunities in the AI workforce.
          </p>

          <div className="max-w-md mx-auto">
            <audio controls className="w-full h-10 rounded-full bg-gray-50 border border-gray-100 shadow-inner">
              <source src="#" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <button
            type="button"
            onClick={() => setView('careers')}
            className="bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs font-bold px-8 py-3.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Get Started →
          </button>
        </div>

        <div className="text-center mb-12 mt-16">
          <div className="text-xl mb-2">🧭</div>
          <h3 className="font-extrabold text-gray-900 text-2xl tracking-tight">Explore What's Inside</h3>
          <p className="text-gray-400 text-xs mt-1 font-light">Select a path to begin your journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map(card => (
            <div
              key={card.type}
              onClick={() => setView(card.type)}
              className={`${card.className} rounded-3xl p-8 hover-lift transition-all duration-200 cursor-pointer relative flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-base shadow-inner group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                </div>
                <h4 className="font-bold text-2xl mb-3 tracking-tight">{card.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
