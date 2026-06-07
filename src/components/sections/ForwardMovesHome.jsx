import React from 'react'

export default function ForwardMovesHome({ setView }) {
  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-12 px-6 md:px-12 flex flex-col items-center">
      
      <div className="text-center mb-12 max-w-2xl mx-auto space-y-4">
        <div className="text-[10px] font-bold tracking-widest text-purple-600 uppercase">• Forward Moves USA</div>
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 tracking-tight">
          Explore What's Inside
        </h2>
        <p className="text-gray-500 text-sm font-light">
          Select a path to begin your journey.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full mx-auto">
        
        {/* Card 1: Skill Studio */}
        <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[180px]">
          <div>
            <span className="text-2xl block mb-3">⚡</span>
            <h4 className="font-sans font-bold text-lg text-purple-900 mb-2">Skill Studio</h4>
            <p className="text-purple-700/80 text-xs font-light leading-relaxed">
              AI certifications and technical training across 9 partner portals.
            </p>
          </div>
        </div>

        
        <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[180px]">
          <div>
            <span className="text-2xl block mb-3">🌍</span>
            <h4 className="font-sans font-bold text-lg text-blue-900 mb-2">Careers</h4>
            <p className="text-blue-700/80 text-xs font-light leading-relaxed">
              Mission-driven opportunities across Health, Climate, FinTech & more.
            </p>
          </div>
        </div>

        {/* Card 3: Community */}
        <div className="bg-orange-50/60 border border-orange-100 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[180px]">
          <div>
            <span className="text-2xl block mb-3">🤝</span>
            <h4 className="font-sans font-bold text-lg text-orange-900 mb-2">Community</h4>
            <p className="text-orange-700/80 text-xs font-light leading-relaxed">
              Networking, mentorship, and the alumni collective.
            </p>
          </div>
        </div>

        
        <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[180px]">
          <div>
            <span className="text-2xl block mb-3">🎯</span>
            <h4 className="font-sans font-bold text-lg text-emerald-900 mb-2">Interviewing</h4>
            <p className="text-emerald-700/80 text-xs font-light leading-relaxed">
              Interview prep, frameworks, and behavioral excellence.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
