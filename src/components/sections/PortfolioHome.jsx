import React from 'react'

export default function PortfolioHome({ setView }) {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center py-20 px-6">
      <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#3B82F6] px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-10">
        • ENTERPRISE AI OPERATIONS & INFRASTRUCTURE
      </div>

      <h2 className="text-5xl md:text-6xl font-black text-[#111827] tracking-tight text-center max-w-4xl leading-tight mb-6">
        Orchestrating Enterprise <span className="text-[#1D4ED8]">AI Implementation.</span>
      </h2>

      <p className="text-[#6B7280] max-w-2xl text-center leading-relaxed mb-10">
        Hi, I'm Yvonne. I leverage over a decade of enterprise systems analysis to architect, deploy, and scale advanced generative AI applications. I specialize in model integration, secure data pipeline orchestration, and end-to-end technical enablement.
      </p>

      <button
        type="button"
        onClick={() => setView('forward-moves')}
        className="bg-[#030712] hover:bg-[#111827] text-white text-xs font-bold tracking-wider px-8 py-4 rounded-xl shadow-sm transition-all hover:-translate-y-0.5"
      >
        EXPLORE FORWARD MOVES AI →
      </button>

      <div className="mt-10 w-full max-w-3xl bg-white border border-gray-100 rounded-3xl p-6 shadow-sm shadow-gray-100/60">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-[#9CA3AF] font-semibold mb-2">Audio Overview</div>
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
