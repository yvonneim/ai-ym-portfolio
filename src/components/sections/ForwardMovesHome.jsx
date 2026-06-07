import React from 'react';

export default function ForwardMovesHome({ setView }) {
  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-6 md:px-12 flex flex-col items-center">
      {/* Upper Content Presentation Headers */}
      <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
        <div className="text-[10px] font-bold tracking-widest text-purple-600 uppercase">• Forward Moves USA</div>
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 tracking-tight">Explore What's Inside</h2>
        <p className="text-gray-500 text-sm font-light">Select a path to begin your journey.</p>
      </div>

      {/* Authentic Category Layout Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mx-auto">
        {/* Card 1: Comparison Matrix */}
        <div className="bg-white border border-zinc-100 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[190px] relative">
          <span className="absolute top-4 right-4 bg-zinc-100 text-zinc-500 text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Coming Soon</span>
          <div>
            <span className="text-2xl block mb-3">⚖️</span>
            <h4 className="font-sans font-bold text-base text-zinc-900 mb-2">Comparison Matrix</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">
              Analyze key differences between legacy roles and AI career vectors side-by-side.
            </p>
          </div>
        </div>

        {/* Card 2: AI Career Scout */}
        <div className="bg-white border border-zinc-100 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[190px] relative">
          <span className="absolute top-4 right-4 bg-zinc-100 text-zinc-500 text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Coming Soon</span>
          <div>
            <span className="text-2xl block mb-3">🌐</span>
            <h4 className="font-sans font-bold text-base text-zinc-900 mb-2">AI Career Scout</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">
              Consult with our real-time assistant regarding target metrics, cluster velocities, or upcoming pivots.
            </p>
          </div>
        </div>

        {/* Card 3: Resume Prep */}
        <div className="bg-white border border-zinc-100 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[190px] relative">
          <span className="absolute top-4 right-4 bg-zinc-100 text-zinc-500 text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Coming Soon</span>
          <div>
            <span className="text-2xl block mb-3">📄</span>
            <h4 className="font-sans font-bold text-base text-zinc-900 mb-2">Resume Prep</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">
              Anonymize professional trajectory rows securely and cross-evaluate matching algorithmic profiles.
            </p>
          </div>
        </div>

        {/* Card 4: Skill Studio (Fully Interactive View-State Router) */}
        <div 
          onClick={() => setView('skill-studio')}
          className="bg-white border border-purple-100 hover:border-purple-300 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/5 flex flex-col justify-between min-h-[190px] cursor-pointer group animate-fadeIn"
        >
          <div>
            <span className="text-2xl block mb-3 group-hover:scale-110 transition-transform origin-left">📖</span>
            <h4 className="font-sans font-bold text-base text-zinc-900 group-hover:text-purple-600 transition-colors mb-2">Skill Studio</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">
              Access curated technical learning modules, programs, and development sandboxes.
            </p>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-purple-600 flex items-center gap-1 mt-4">
            Open Studio Modules →
          </div>
        </div>

        {/* Card 5: Careers */}
        <div className="bg-white border border-zinc-100 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[190px]">
          <div>
            <span className="text-2xl block mb-3">📊</span>
            <h4 className="font-sans font-bold text-base text-zinc-900 mb-2">Careers</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">
              Track live macro employment tracking datasets and macro regional hiring shifts.
            </p>
          </div>
        </div>

        {/* Card 6: Glossary System */}
        <div className="bg-white border border-zinc-100 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[190px]">
          <div>
            <span className="text-2xl block mb-3">📁</span>
            <h4 className="font-sans font-bold text-base text-zinc-900 mb-2">Glossary System</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">
              Break down interface architecture jargon, infrastructure tags, and technical syntax definition data.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
