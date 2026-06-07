import React from 'react'

export default function Navbar({ currentView, setView }) {
  const isHome = currentView === 'home'

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
          {!isHome && (
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
              F.
            </div>
          )}
          <span className="font-bold text-gray-900 tracking-tight text-lg">
            {isHome ? 'AITogetherNow' : 'Forward Moves'}
          </span>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          {isHome ? (
            <>
              <button
                type="button"
                onClick={() => setView('forward-moves')}
                className="text-purple-600 hover:text-purple-700 font-bold transition-colors cursor-pointer"
              >
                FORWARD MOVES AI
              </button>
              <button type="button" className="hover:text-gray-900 transition-colors cursor-pointer">
                CONTACT
              </button>
            </>
          ) : (
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider">
              <button type="button" onClick={() => setView('home')} className="hover:text-purple-600 cursor-pointer">
                🏡 HOME
              </button>
              <button type="button" onClick={() => setView('forward-moves')} className="text-purple-600 cursor-pointer">
                DASHBOARD HUB
              </button>
              <button type="button" onClick={() => setView('comparison')} className="hover:text-purple-600 cursor-pointer">
                COMPARISON
              </button>
              <button type="button" onClick={() => setView('reskilling')} className="hover:text-purple-600 cursor-pointer">
                RESKILLING
              </button>
              <button type="button" onClick={() => setView('careers')} className="hover:text-purple-600 cursor-pointer">
                CAREERS
              </button>
              <button type="button" onClick={() => setView('ai-career-scout')} className="hover:text-purple-600 cursor-pointer">
                AI CAREER SCOUT
              </button>
              <button type="button" onClick={() => setView('resume-prep')} className="hover:text-purple-600 cursor-pointer">
                RESUME PREP
              </button>
              <button type="button" onClick={() => setView('glossary')} className="hover:text-purple-600 cursor-pointer">
                GLOSSARY
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
