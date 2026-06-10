import React, { useState } from 'react';

export default function Navbar({ currentView, setView }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[200] bg-white/90 backdrop-blur-md border-b border-zinc-100 w-full transition-all duration-200">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 md:px-12 w-full">
        
        {/* LEFT SIDE: BRAND IDENTITY WITH PREMIUM PURPLE "Y" BADGE */}
        <button 
          onClick={() => { setView('home'); setIsOpen(false); }} 
          className="flex items-center gap-3 font-sans font-bold text-zinc-900 cursor-pointer text-base bg-transparent border-none p-0 focus:outline-none select-none items-center"
        >
          <div className="w-[38px] h-[38px] bg-[#6c5ce7] text-white rounded-full flex items-center justify-center font-bold text-sm tracking-tight shadow-md shadow-[#6c5ce7]/15 flex-shrink-0">
            Y
          </div>
          <span className="tracking-tight font-extrabold text-zinc-900 text-base">
            Yvonne Martinez
          </span>
        </button>

        {/* RIGHT SIDE: HORIZONTAL NAVIGATION LINKS (Now with Careers Added) */}
        <div className="hidden md:flex items-center gap-8 h-full">
          {currentView === 'home' ? (
            <button 
              onClick={() => setView('forward-moves')}
              className="text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none"
            >
              Forward Moves AI
            </button>
          ) : (
            <div className="flex items-center gap-8">
              <button 
                onClick={() => setView('home')}
                className={`text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none ${currentView === 'home' ? 'text-purple-600' : 'text-zinc-500 hover:text-purple-600'}`}
              >
                🏡 Home
              </button>
              <button 
                onClick={() => setView('forward-moves')}
                className={`text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none ${currentView === 'forward-moves' ? 'text-purple-600' : 'text-zinc-500 hover:text-purple-600'}`}
              >
                Dashboard Hub
              </button>
              <button 
                onClick={() => setView('skill-studio')}
                className={`text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none ${currentView === 'skill-studio' ? 'text-purple-600' : 'text-zinc-500 hover:text-purple-600'}`}
              >
                Skill Studio
              </button>
              <button 
                onClick={() => setView('careers')}
                className={`text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none ${currentView === 'careers' ? 'text-purple-600' : 'text-zinc-500 hover:text-purple-600'}`}
              >
                Careers
              </button>
              <button 
                onClick={() => setView('glossary')}
                className={`text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none ${currentView === 'glossary' ? 'text-purple-600' : 'text-zinc-500 hover:text-purple-600'}`}
              >
                Glossary
              </button>
            </div>
          )}
        </div>

        {/* MOBILE RESPONSIVE HAMBURGER MENU BUTTON ENGINE */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-900 cursor-pointer bg-transparent border-none focus:outline-none flex items-center justify-center"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <span className="text-xl font-light block w-6 text-center">✕</span>
          ) : (
            <div className="w-6 h-3.5 flex flex-col justify-between items-end">
              <span className="w-full h-0.5 bg-zinc-900 block rounded"></span>
              <span className="w-4/5 h-0.5 bg-zinc-900 block rounded"></span>
              <span className="w-full h-0.5 bg-zinc-900 block rounded"></span>
            </div>
          )}
        </button>
      </div>

      {/* DROPDOWN OVERLAY PANEL LAYOUT (Mobile Menu - with Careers Added) */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-zinc-200 shadow-xl z-[200] md:hidden">
          <div className="flex flex-col p-8 space-y-5">
            {currentView === 'home' ? (
              <button
                onClick={() => {
                  setView('forward-moves');
                  setIsOpen(false);
                }}
                className="w-full text-left font-sans font-bold text-xs tracking-widest text-zinc-700 hover:text-purple-600 py-2 cursor-pointer block bg-transparent uppercase focus:outline-none"
              >
                FORWARD MOVES AI
              </button>
            ) : (
              <>
                <button
                  onClick={() => { setView('home'); setIsOpen(false); }}
                  className="w-full text-left font-sans font-bold text-xs tracking-widest text-zinc-500 hover:text-purple-600 py-2 cursor-pointer block bg-transparent uppercase focus:outline-none"
                >
                  🏡 Home
                </button>
                <button
                  onClick={() => { setView('forward-moves'); setIsOpen(false); }}
                  className="w-full text-left font-sans font-bold text-xs tracking-widest text-zinc-700 hover:text-purple-600 py-2 cursor-pointer block bg-transparent uppercase focus:outline-none"
                >
                  Dashboard Hub
                </button>
                <button
                  onClick={() => { setView('skill-studio'); setIsOpen(false); }}
                  className="w-full text-left font-sans font-bold text-xs tracking-widest text-zinc-700 hover:text-purple-600 py-2 cursor-pointer block bg-transparent uppercase focus:outline-none"
                >
                  Skill Studio
                </button>
                <button
                  onClick={() => { setView('careers'); setIsOpen(false); }}
                  className="w-full text-left font-sans font-bold text-xs tracking-widest text-zinc-700 hover:text-purple-600 py-2 cursor-pointer block bg-transparent uppercase focus:outline-none"
                >
                  Careers
                </button>
                <button
                  onClick={() => { setView('glossary'); setIsOpen(false); }}
                  className="w-full text-left font-sans font-bold text-xs tracking-widest text-zinc-700 hover:text-purple-600 py-2 cursor-pointer block bg-transparent uppercase focus:outline-none"
                >
                  Glossary
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}