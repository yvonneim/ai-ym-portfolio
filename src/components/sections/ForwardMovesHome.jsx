import React from 'react'

export default function ForwardMovesHome({ setView }) {
  const cards = [
    { type: 'comparison', title: 'Comparison Matrix', desc: 'Analyze key differences between legacy roles and AI career vectors side-by-side.', badge: 'COMING SOON', icon: '⚖️' },
    { type: 'ai-career-scout', title: 'AI Career Scout', desc: 'Consult with our real-time assistant regarding target metrics, cluster velocities, or upcoming pivots.', badge: 'COMING SOON', icon: '🌐' },
    { type: 'resume-prep', title: 'Resume Prep', desc: 'Anonymize professional trajectory rows securely and cross-evaluate matching algorithmic profiles.', badge: 'COMING SOON', icon: '📄' },
    { type: 'reskilling', title: 'Reskilling Portal', desc: 'Access curated technical learning modules, programs, and development sandboxes.', badge: null, icon: '🎚️' },
    { type: 'careers', title: 'Careers', desc: 'Track live macro employment tracking datasets and macro regional hiring shifts.', badge: null, icon: '📊' },
    { type: 'glossary', title: 'Glossary System', desc: 'Break down interface architecture jargon, infrastructure tags, and technical syntax definition data.', badge: null, icon: '📁' },
  ]

  return (
    <div className="w-full bg-[#FAFBFD] min-h-screen pb-24">
      <div className="w-full bg-[#FFFDF6] border-b border-[#FBECC5] px-6 py-2.5 text-center text-[11px] font-normal text-[#D97706] tracking-wide">
        Sample Disclaimer: <span className="font-light text-[#78350F]">"Forward Moves AI is currently in its community-testing phase. To protect your privacy, please remove personal contact information from your resume before uploading."</span>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mt-12 mb-16 text-center bg-white border border-gray-100 rounded-3xl p-10 md:py-16 md:px-12 shadow-sm shadow-gray-100/40">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-purple-600 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            Forward Moves USA
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 leading-none">
            Step Into Your <span className="text-purple-600">AI-Driven Future.</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 font-light">
            Your bridge to a more fulfilling career. We connect your unique talents to the opportunities in the AI workforce.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <audio controls className="w-full h-10 rounded-full bg-gray-50 border border-gray-100 shadow-inner">
              <source src="#" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <button className="bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs font-bold px-8 py-3.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
            Get Started →
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="text-xl mb-2">🧭</div>
          <h3 className="font-extrabold text-gray-900 text-2xl tracking-tight">Explore What's Inside</h3>
          <p className="text-gray-400 text-xs mt-1 font-light">Select a path to begin your journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(c => (
            <div 
              key={c.type} 
              onClick={() => setView(c.type)} 
              className="bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-gray-200/40 cursor-pointer relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-sm shadow-inner group-hover:scale-105 transition-transform">
                    {c.icon}
                  </div>
                  {c.badge && (
                    <span className="bg-gray-100 text-gray-400 text-[8px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase">
                      {c.badge}
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-1.5 tracking-tight group-hover:text-purple-600 transition-colors">
                  {c.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
