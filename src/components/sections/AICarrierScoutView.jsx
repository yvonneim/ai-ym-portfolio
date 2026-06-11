import React, { useState } from 'react';

export default function AICarrierScoutView({ setView }) {
  const [messages] = useState([
    { 
      role: 'assistant', 
      content: "Hello! I am your Forward Moves AI Career Scout. To see this active AI engine execute real-time web-grounded job searches, please launch the standalone **AI Scout Sandbox Module** from my project repository. Here on the main platform, you can preview the production interface design below!"
    }
  ]);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto flex flex-col h-[80vh]">
        
        {/* HEADER BRANDING BANNER */}
        <div className="w-full pb-6 border-b border-zinc-100 mb-6 flex-shrink-0">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">
            <span className="w-4 h-0.5 bg-zinc-400 rounded"></span>
            Forward Moves Navigator
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-zinc-900 tracking-tight leading-none mb-4">
            AI Career Scout
          </h1>
          <p className="text-zinc-500 text-sm font-light">
            Interface Preview Module • Static Portfolio Presentation Mode
          </p>
        </div>

        {/* CHAT CHANNELS DISPLAY WINDOW */}
        <div className="flex-grow bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm overflow-y-auto mb-4 flex flex-col space-y-4 min-h-0">
          {messages.map((m, idx) => (
            <div 
              key={idx} 
              className="max-w-[85%] p-5 rounded-2xl text-xs flex flex-col bg-zinc-50 border border-zinc-100 text-zinc-800 self-start rounded-bl-none font-light"
            >
              <div className="font-bold text-[9px] uppercase tracking-wider text-zinc-400 mb-2">
                🧭 Scout Engine (Preview)
              </div>
              <div className="prose prose-zinc leading-relaxed font-sans text-[13px] break-words w-full text-zinc-600">
                {m.content}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT INTERFACE CONTROL FORM (DISABLED FOR COST-FREE STATIC SIMULATION) */}
        <div className="flex gap-3 w-full flex-shrink-0 opacity-60">
          <input 
            type="text"
            disabled
            placeholder="AI Live streaming is exclusive to the standalone sandbox module repository..."
            className="flex-grow bg-zinc-100 border border-zinc-200 rounded-xl px-5 py-4 text-xs text-zinc-400 cursor-not-allowed"
          />
          <button 
            disabled
            className="bg-zinc-300 text-white text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-xl cursor-not-allowed flex-shrink-0"
          >
            Locked
          </button>
        </div>
      </div>
    </div>
  );
}