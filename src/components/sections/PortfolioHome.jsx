import React from 'react'

export default function PortfolioHome({ setView }) {
  return (
    <div className="flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto px-6 py-16">
      <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm">
        Enterprise AI Operations & Infrastructure
      </div>
      <div className="space-y-6">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight max-w-4xl mx-auto leading-tight">
          Orchestrating Enterprise <br />
          <span className="text-gray-900">AI Implementation.</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Hi, I'm Yvonne. I leverage over a decade of enterprise systems analysis to architect, deploy, and scale advanced generative AI applications. I specialize in model integration, secure data pipeline orchestration, and end-to-end technical enablement.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-8 w-full">
        <div className="flex justify-center w-full">
          <button
            type="button"
            onClick={() => setView('forward-moves')}
            className="bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm tracking-wide px-8 py-4 rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            EXPLORE FORWARD MOVES AI →
          </button>
        </div>
        <div className="max-w-md w-full mx-auto bg-gray-50 border border-gray-100 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4">
          <button type="button" className="w-10 h-10 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center text-white transition-all cursor-pointer shadow-sm">
            <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <div className="flex-grow text-left space-y-2">
            <div className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">Audio Overview • 0:25</div>
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-purple-500 rounded-full" />
            </div>
          </div>
          <div className="text-[10px] font-mono font-bold text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded">
            1x
          </div>
        </div>
      </div>
    </div>
  )
}
