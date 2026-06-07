import React, { useState } from 'react'

export default function Navbar({ currentView, setView }) {
  const isHome = currentView === 'home'
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { key: 'home', label: '🏡 HOME' },
    { key: 'forward-moves', label: 'DASHBOARD HUB' },
    { key: 'comparison', label: 'COMPARISON' },
    { key: 'reskilling', label: 'RESKILLING' },
    { key: 'careers', label: 'CAREERS' },
    { key: 'ai-career-scout', label: 'AI CAREER SCOUT' },
    { key: 'resume-prep', label: 'RESUME PREP' },
    { key: 'glossary', label: 'GLOSSARY' },
  ]

  const handleNavClick = (key) => {
    setView(key === 'home' ? 'home' : key)
    setIsOpen(false)
  }

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setView('home'); setIsOpen(false) }}>
          {isHome && <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />}
          <span className="font-bold text-gray-900 tracking-tight text-lg">Yvonne Martinez</span>
        </div>

        {/* Desktop nav - hidden on small screens */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
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
              {links.map(l => (
                <button
                  key={l.key}
                  type="button"
                  onClick={() => setView(l.key === 'home' ? 'home' : l.key)}
                  className={`hover:text-purple-600 cursor-pointer ${l.key === 'forward-moves' ? 'text-purple-600' : ''}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile slide-out drawer overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <button aria-label="Close menu" onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/40" />

          {/* Panel */}
          <aside className="ml-auto w-72 sm:w-96 h-full bg-white shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
                <span className="font-bold text-gray-900">Yvonne Martinez</span>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close drawer" className="p-2 rounded-md hover:bg-gray-100">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-sm">
              {links.map(l => (
                <button
                  key={l.key}
                  onClick={() => handleNavClick(l.key)}
                  className="text-left py-3 px-2 rounded-md hover:bg-gray-50 font-semibold"
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  )
}
