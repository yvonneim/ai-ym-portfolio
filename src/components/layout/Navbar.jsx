import React, { useState } from 'react';

export default function Navbar({ currentView, setView }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[200] bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => { setView('home'); setIsOpen(false); }} 
          className="flex items-center gap-2 font-sans font-bold text-zinc-900 cursor-pointer text-base bg-transparent border-none p-0"
        >
          <span className="w-2 h-2 rounded-full bg-purple-600"></span>
          Yvonne Martinez
        </button>

        <div className="hidden md:flex items-center gap-6">
          {currentView === 'home' ? (
            <button 
              onClick={() => setView('forward-moves')}
              className="text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Forward Moves AI
            </button>
          ) : (
            <button 
              onClick={() => setView('home')}
              className="text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Home
            </button>
          )}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-900 cursor-pointer bg-transparent border-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <span className="text-2xl font-light block w-6 text-center">✕</span>
          ) : (
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className="w-full h-0.5 bg-zinc-900 block rounded"></span>
              <span className="w-4/5 h-0.5 bg-zinc-900 block rounded"></span>
              <span className="w-full h-0.5 bg-zinc-900 block rounded"></span>
            </div>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-zinc-200 shadow-xl z-[200] md:hidden">
          <div className="flex flex-col p-8 space-y-6">
            <button
              onClick={() => {
                setView('forward-moves');
                setIsOpen(false);
              }}
              className="w-full text-left font-sans font-bold text-base tracking-wide text-zinc-800 hover:text-purple-600 py-3 border-b border-zinc-50 cursor-pointer block bg-transparent"
            >
              FORWARD MOVES AI
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
