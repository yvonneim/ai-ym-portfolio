// C:\ai-ym-portfolio\src\App.jsx (Final Streamlined Production Layout Router)
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PortfolioHome from './components/sections/PortfolioHome';
import ForwardMovesHome from './components/sections/ForwardMovesHome';
import SkillStudioView from './components/sections/SkillStudioView';
import CareersView from './components/sections/CareersView';
import GlossaryView from './components/sections/GlossaryView';

import ReactMarkdown from 'react-markdown';
import { streamCareerScoutResponse } from './services/aiService';

export default function App() {
  const [view, setView] = useState('home');
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: "Hello! I am your active AI Career Scout. Ask me anything regarding current target metrics, industry cluster velocities, or upcoming structural pivots.",
      sources: []
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleViewChange = (nextView) => {
    setView(nextView);
    const urlPath = nextView === 'home' ? '/' : `/${nextView}`;
    window.history.pushState({ view: nextView }, '', urlPath);
  };

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.view) {
        setView(event.state.view);
      } else {
        setView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    window.history.replaceState({ view: 'home' }, '', window.location.pathname);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const path = window.location.pathname.replace('/', '');
    if (path === 'ai-career-scout') {
      setView('ai-career-scout');
    }
  }, []);

  useEffect(() => {
    if (view === 'ai-career-scout') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, view]);

  const handlePromptClick = (suggestedText) => {
    if (isLoading) return;
    setInput(suggestedText);
  };

  const handleSend = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    const userBubble = { role: 'user', content: userMessage, sources: [] };
    // 🧠 STATUS STRIPPED UPDATED: Reinstated the original organic "Thinking..." string status value
    const assistantPlaceholder = { role: 'assistant', content: 'Thinking...', sources: [] };
    
    setMessages(prev => [...prev, userBubble, assistantPlaceholder]);

    try {
      const aiHistoryPayload = [...messages, userBubble];
      
      await streamCareerScoutResponse(aiHistoryPayload, (simulatedText, sourceMatrix) => {
        setMessages(prev => {
          const copy = [...prev];
          copy[copy.length - 1].content = simulatedText;
          copy[copy.length - 1].sources = sourceMatrix;
          return copy;
        });
      });
    } catch (err) {
      console.error("Pipeline failure: ", err);
      setMessages(prev => {
        const copy = [...prev];
        copy[copy.length - 1].content = "### ⚠️ System Connection Interrupted\n\nUnable to read live search grounding channels. Please confirm your local keys inside your `.env` param variables.";
        return copy;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => {
    switch (view) {
      case 'home':
        return <PortfolioHome setView={handleViewChange} />;
      case 'forward-moves':
        return <ForwardMovesHome setView={handleViewChange} />;
      case 'skill-studio':
        return <SkillStudioView setView={handleViewChange} />;
      case 'careers':
        return <CareersView setView={handleViewChange} />;
      case 'glossary':
        return <GlossaryView setView={handleViewChange} />;
      
      case 'ai-career-scout':
        return (
          <div className="flex-grow max-w-4xl w-full mx-auto py-6 px-0 md:px-6 box-border flex flex-col">
            
            <div className="w-full pb-6 border-b border-zinc-100 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-800 m-0">AI Career Scout Console</h2>
                <p className="text-zinc-500 text-xs font-light m-0 mt-1">Real-time web-grounded search verification active.</p>
              </div>
              
              <div className="text-[11px] text-zinc-400 font-normal select-none whitespace-nowrap">
                Try: {' '}
                <button type="button" disabled={isLoading} onClick={() => handlePromptClick("What are the current AI hiring trends for a Business Analyst?")} className="bg-transparent border-none p-0 inline text-purple-600 hover:text-purple-800 font-semibold cursor-pointer underline transition-colors disabled:opacity-50 font-sans">
                  Business Analyst
                </button>
                {' '} | {' '}
                <button type="button" disabled={isLoading} onClick={() => handlePromptClick("Find current technical AI program manager roles and news")} className="bg-transparent border-none p-0 inline text-purple-600 hover:text-purple-800 font-semibold cursor-pointer underline transition-colors disabled:opacity-50 font-sans">
                  Project Manager
                </button>
              </div>
            </div>

            <div className="flex flex-col flex-grow min-h-0">
              <div className="flex-grow bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm overflow-y-auto mb-6 flex flex-col space-y-4 min-h-[400px] max-h-[55vh]">
                {messages.map((m, idx) => (
                  <div key={idx} className={`max-w-[85%] p-5 rounded-2xl text-xs flex flex-col ${m.role === 'user' ? 'bg-zinc-900 text-white self-end rounded-br-none font-medium' : 'bg-[#F9F8FF] border border-purple-100/60 text-zinc-800 self-start rounded-bl-none font-light'}`}>
                    {m.role === 'assistant' && <div className="font-bold text-[9px] uppercase tracking-wider text-purple-400 mb-2">🤖 SCOUT</div>}
                    
                    {/* 🛠️ ENHANCED PARSING MAP: Enforces correct markdown style rules and clickable inline link configurations */}
                    <div className="leading-relaxed font-sans text-[13px] break-words w-full prose prose-zinc max-w-none">
                      <ReactMarkdown
                        components={{
                          h3: ({node, ...props}) => <h3 className="text-sm font-bold text-zinc-900 mt-4 mb-2 first:mt-0" {...props} />,
                          p: ({node, ...props}) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-2 space-y-1" {...props} />,
                          li: ({node, ...props}) => <li className="marker:text-purple-400" {...props} />,
                          strong: ({node, ...props}) => <strong className="font-bold text-zinc-900" {...props} />,
                          a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" className="text-purple-600 font-semibold underline hover:text-purple-800 transition-colors" {...props} />
                        }}
                      >
                        {m.content}
                      </ReactMarkdown>
                    </div>

                    {m.sources && m.sources.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-purple-100 w-full">
                        <span className="text-[9px] font-bold tracking-wider text-purple-400 uppercase block mb-2">🔍 Verified Web Sources:</span>
                        <div className="flex flex-col gap-1.5">
                          {m.sources.map((src, sIdx) => (
                            <a key={sIdx} href={src.url} target="_blank" rel="noopener noreferrer" className="no-underline flex items-center justify-between text-[11px] bg-white hover:bg-zinc-50 border border-zinc-200 p-2 rounded-xl text-purple-700 font-semibold transition-colors">
                              <span className="truncate pr-4">🔗 {src.title}</span>
                              <span className="text-[9px] bg-zinc-50 px-1.5 py-0.5 rounded border border-zinc-200 text-zinc-500 whitespace-nowrap">Visit ↗</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSend} className="flex gap-3 w-full flex-shrink-0">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} disabled={isLoading} placeholder="Ask your career scout about market trends, certifications, or roles..." className="flex-grow bg-white border border-purple-200 rounded-xl px-5 py-4 text-xs text-zinc-800 focus:outline-none shadow-sm shadow-purple-900/5 focus:border-purple-400" />
                <button type="submit" disabled={isLoading || !input.trim()} className="bg-purple-600 hover:bg-purple-700 disabled:bg-zinc-100 disabled:text-zinc-300 text-white text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-xl transition-colors cursor-pointer flex-shrink-0">
                  {isLoading ? '...' : 'Send'}
                </button>
              </form>
            </div>
          </div>
        );
      default:
        return <PortfolioHome setView={handleViewChange} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-900 antialiased box-border">
      <Navbar currentView={view} setView={handleViewChange} />
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 box-border flex flex-col">
        {renderContent()}
      </main>
      <Footer currentView={view} setView={handleViewChange} />
    </div>
  );
}