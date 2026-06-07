import React from 'react'

export default function PortfolioHome({ setView }) {
  return (
    <div className="w-full max-w-7xl mx-auto p-24 md:p-32 space-y-10">
      <div className="flex flex-col items-center justify-center space-y-10 text-center">
        <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#3B82F6] px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase">
          • ENTERPRISE AI OPERATIONS & INFRASTRUCTURE
        </div>

        <h1 className="font-serif font-normal tracking-tight text-[#111827] text-5xl md:text-6xl max-w-4xl mx-auto leading-tight">
          Fuel your <span className="italic text-purple-600 font-normal">infinite growth.</span>
        </h1>

        <p className="text-[#6B7280] max-w-2xl mx-auto text-lg leading-relaxed">
          Hi, I'm Yvonne. I leverage over a decade of enterprise systems analysis to architect, deploy, and scale advanced generative AI applications. I specialize in model integration, secure data pipeline orchestration, and end-to-end technical enablement.
        </p>

        <button
          type="button"
          onClick={() => setView('forward-moves')}
          className="bg-[#030712] hover:bg-[#111827] text-white text-xs font-bold tracking-wider px-8 py-4 rounded-xl shadow-sm transition-all hover:-translate-y-0.5"
        >
          EXPLORE FORWARD MOVES AI →
        </button>
      </div>

      <div className="w-full max-w-3xl mx-auto bg-white border border-gray-100 rounded-3xl p-8 shadow-sm shadow-gray-100/60 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-[#9CA3AF] font-semibold mb-1">Audio Overview</div>
            <div className="text-xs text-[#6B7280] font-light">• 0:25 • Playback preview</div>
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7280] bg-[#F3F4F6] px-3 py-1 rounded-full">
            1x
          </div>
        </div>
        <div className="h-3 rounded-full bg-[#E5E7EB] overflow-hidden">
          <div className="h-full w-2/5 rounded-full bg-[#1D4ED8]" />
        </div>
      </div>
    </div>
  )
}
