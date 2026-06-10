import React from 'react';

export default function Footer({ currentView, setView }) {
  return (
    <footer className="w-full max-w-7xl mx-auto bg-white border-t border-zinc-100 mt-auto box-border">
      <div className="px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400 font-sans tracking-wide">
        
        {/* LEFT SIDE: PRODUCTION & HOSTING CREDITS */}
        <div className="select-none text-center sm:text-left">
          © 2026 Yvonne Martinez. Hosted via Firebase Infrastructure.
        </div>

        {/* RIGHT SIDE: INTERACTIVE ROUTING ACTION BUTTONS */}
        <div className="flex items-center gap-6 justify-center sm:justify-end">
          <button 
            onClick={() => {
              setView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`cursor-pointer hover:text-purple-600 transition-colors bg-transparent border-none p-0 font-medium uppercase tracking-wider focus:outline-none ${currentView === 'home' ? 'text-purple-600 font-bold' : ''}`}
          >
            Explore Platform
          </button>
          
          <button 
            onClick={() => {
              setView('forward-moves');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`cursor-pointer hover:text-purple-600 transition-colors bg-transparent border-none p-0 font-medium uppercase tracking-wider focus:outline-none ${currentView === 'forward-moves' ? 'text-purple-600 font-bold' : ''}`}
          >
            Dashboard Hub
          </button>

          <a 
            href="mailto:yvonne.martinez@aitogethernow.com" 
            className="hover:text-purple-600 transition-colors no-underline font-medium uppercase tracking-wider"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </footer>
  );
}