// src/components/layout/Navbar.jsx (Unified Element Architecture)
import React, { useState } from 'react';

export default function Navbar({ currentView, setView }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (targetView) => {
    setView(targetView);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-white/90 backdrop-blur-md border-b border-zinc-100 box-border">
      
      {/* 📐 STRUCTURAL GRID WALL: Keeps both left brand and right menu items inside the alignment lines */}
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 md:px-12 w-full box-border relative">
        
        {/* LEFT SIDE: BRAND BADGE BUTTON */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 font-sans font-bold text-zinc-900 cursor-pointer text-base bg-transparent border-none p-0 focus:outline-none select-none"
        >
          <div className="w-[38px] h-[38px] bg-[#6c5ce7] text-white rounded-full flex items-center justify-center font-bold text-sm tracking-tight shadow-md shadow-[#6c5ce7]/15 flex-shrink-0">
            Y
          </div>
          <span className="tracking-tight font-extrabold text-zinc-900 text-base">Yvonne Martinez</span>
        </button>

        {/* RIGHT SIDE: DESKTOP NAVIGATION ROW (Pure Button Layout Parity) */}
        <div className="hidden md:flex items-center gap-8 h-full">
          {currentView === 'home' ? (
            <button onClick={() => handleNavClick('forward-moves')} className="text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none">Forward Moves AI</button>
          ) : (
            <div className="flex items-center gap-8">
              <button onClick={() => handleNavClick('home')} className="text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none text-zinc-500 hover:text-purple-600">🏡 Home</button>
              <button onClick={() => handleNavClick('forward-moves')} className={`text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none ${currentView === 'forward-moves' ? 'text-purple-600' : 'text-zinc-500 hover:text-purple-600'}`}>Dashboard Hub</button>
              <button onClick={() => handleNavClick('skill-studio')} className={`text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none ${currentView === 'skill-studio' ? 'text-purple-600' : 'text-zinc-500 hover:text-purple-600'}`}>Skill Studio</button>
              <button onClick={() => handleNavClick('careers')} className={`text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none ${currentView === 'careers' ? 'text-purple-600' : 'text-zinc-500 hover:text-purple-600'}`}>Careers</button>
              
              {/* 🎯 NATIVE COMPONENT BUTTON: Sizing, width, font and pixel weight match perfectly */}
              <button 
                onClick={() => handleNavClick('ai-career-scout')} 
                className={`text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none font-sans antialiased ${currentView === 'ai-career-scout' ? 'text-purple-600' : 'text-zinc-500 hover:text-purple-600'}`}
              >
                AI Career Scout
              </button>
              
              <button onClick={() => handleNavClick('glossary')} className={`text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none ${currentView === 'glossary' ? 'text-purple-600' : 'text-zinc-500 hover:text-purple-600'}`}>Glossary</button>
            </div>
          )}
        </div>

        {/* MOBILE RESPONSIVE HAMBURGER NAVIGATION TRIGGER ICON */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-900 cursor-pointer bg-transparent border-none focus:outline-none flex items-center justify-center z-[10000]"
          aria-label="Toggle Menu"
        >
          {isOpen ? <span className="text-xl font-light block w-6 text-center">✕</span> : <div className="w-6 h-3.5 flex flex-col justify-between items-end"><span className="w-full h-0.5 bg-zinc-900 block rounded"></span><span className="w-4/5 h-0.5 bg-zinc-900 block rounded"></span><span className="w-full h-0.5 bg-zinc-900 block rounded"></span></div>}
        </button>

      </div>

      {/* MOBILE DROPDOWN MODAL PORTAL BACKGROUND ROW */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-zinc-200 shadow-xl z-[9998] md:hidden">
          <div className="flex flex-col p-8 space-y-5">
            {currentView === 'home' ? (
              <button onClick={() => handleNavClick('forward-moves')} className="w-full text-left font-sans font-bold text-xs tracking-widest text-zinc-700 hover:text-purple-600 py-2 cursor-pointer block bg-transparent uppercase focus:outline-none">FORWARD MOVES AI</button>
            ) : (
              <>
                <button onClick={() => handleNavClick('home')} className="w-full text-left font-sans font-bold text-xs tracking-widest text-zinc-500 hover:text-purple-600 py-2 cursor-pointer block bg-transparent uppercase focus:outline-none">🏡 Home</button>
                <button onClick={() => handleNavClick('forward-moves')} className="w-full text-left font-sans font-bold text-xs tracking-widest text-zinc-700 hover:text-purple-600 py-2 cursor-pointer block bg-transparent uppercase focus:outline-none">Dashboard Hub</button>
                <button onClick={() => handleNavClick('skill-studio')} className="w-full text-left font-sans font-bold text-xs tracking-widest text-zinc-700 hover:text-purple-600 py-2 cursor-pointer block bg-transparent uppercase focus:outline-none">Skill Studio</button>
                <button onClick={() => handleNavClick('careers')} className="w-full text-left font-sans font-bold text-xs tracking-widest text-zinc-700 hover:text-purple-600 py-2 cursor-pointer block bg-transparent uppercase focus:outline-none">Careers</button>
                <button onClick={() => handleNavClick('ai-career-scout')} className="w-full text-left font-sans font-bold text-xs tracking-widest text-zinc-700 hover:text-purple-600 py-2 cursor-pointer block bg-transparent uppercase focus:outline-none">AI Career Scout</button>
                <button onClick={() => handleNavClick('glossary')} className="w-full text-left font-sans font-bold text-xs tracking-widest text-zinc-700 hover:text-purple-600 py-2 cursor-pointer block bg-transparent uppercase focus:outline-none">Glossary</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}