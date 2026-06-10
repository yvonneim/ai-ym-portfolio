import React from 'react';

export default function ForwardMovesHome({ setView }) {
  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-6 md:px-12 flex flex-col items-center">
      <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
        <div className="text-[10px] font-bold tracking-widest text-purple-600 uppercase">• Forward Moves USA</div>
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 tracking-tight">Explore What's Inside</h2>
        <p className="text-gray-500 text-sm font-light">Select a path to begin your journey.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full mx-auto">
        <div
          onClick={() => setView('skill-studio')}
          className="bg-white border border-purple-100 hover:border-purple-300 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/5 flex flex-col justify-between min-h-[220px] cursor-pointer group"
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

        <div
          onClick={() => setView('careers')}
          className="bg-white border border-blue-100 hover:border-blue-300 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/5 flex flex-col justify-between min-h-[220px] cursor-pointer group"
        >
          <div>
            <span className="text-2xl block mb-3 group-hover:scale-110 transition-transform origin-left">📊</span>
            <h4 className="font-sans font-bold text-base text-zinc-900 group-hover:text-blue-600 transition-colors mb-2">Careers</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">
              Track macro employment datasets, hiring shifts, and career pathway signals.
            </p>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600 flex items-center gap-1 mt-4">
            Open Employment Tracking →
          </div>
        </div>

        <div
          onClick={() => setView('glossary')}
          className="bg-white border border-fuchsia-100 hover:border-fuchsia-300 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-fuchsia-900/5 flex flex-col justify-between min-h-[220px] cursor-pointer group"
        >
          <div>
            <span className="text-2xl block mb-3 group-hover:scale-110 transition-transform origin-left">📁</span>
            <h4 className="font-sans font-bold text-base text-zinc-900 group-hover:text-fuchsia-600 transition-colors mb-2">Glossary System</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">
              Break down architecture jargon, infrastructure tags, and technical syntax definitions.
            </p>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-fuchsia-600 flex items-center gap-1 mt-4">
            Open Reference Matrix →
          </div>
        </div>
      </div>
    </div>
  );
}
