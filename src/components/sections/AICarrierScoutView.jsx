import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const fetchAIResponse = async (prompt) => {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("SDK Error:", error);
    throw new Error("Failed to reach Gemini via SDK");
  }
};

export default function AICarrierScoutView({ setView }) {
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: "Hello! I am your Forward Moves AI Career Scout. I can help you find current job trends, company news, and career advice using real-time analysis. What would you like to know today?",
      sources: []
    }
  ]);
  const [input, setInput] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isAiLoading) return;

    const userMessage = input.trim();
    const updatedMessages = [...messages, { role: 'user', content: userMessage }];
    
    setMessages(updatedMessages);
    setInput('');
    setIsAiLoading(true);

    try {
      // Calling the service directly - secure and no backend server needed!
      const aiResponse = await fetchAIResponse(userMessage);
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: aiResponse,
        sources: []
      }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "⚠️ Scout Error: Unable to reach the AI Service. Please check your .env configuration.",
        sources: []
      }]);
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto flex flex-col h-[80vh]">
        
        <div className="w-full pb-6 border-b border-zinc-100 mb-6 flex-shrink-0">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">
            <span className="w-4 h-0.5 bg-zinc-400 rounded"></span>
            Forward Moves Navigator
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-zinc-900 tracking-tight leading-none mb-4">
            AI Career Scout
          </h1>
          <p className="text-zinc-500 text-sm font-light">
            Consult with our system regarding real-time job openings, trends, and market metrics across all industries.
          </p>
        </div>

        <div className="flex-grow bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm overflow-y-auto mb-4 flex flex-col space-y-4 min-h-0">
          {messages.map((m, idx) => (
            <div 
              key={idx} 
              className={`max-w-[85%] p-5 rounded-2xl text-xs ${
                m.role === 'user' 
                  ? 'bg-zinc-900 text-white self-end rounded-br-none font-medium' 
                  : 'bg-zinc-50 border border-zinc-100 text-zinc-800 self-start rounded-bl-none font-light'
              }`}
            >
              {m.role === 'assistant' && <div className="font-bold text-[9px] uppercase tracking-wider text-zinc-400 mb-2">🧭 Scout Engine</div>}
              <div className="whitespace-pre-wrap leading-relaxed font-sans text-zinc-800 text-[13px]">
                {m.content}
              </div>
            </div>
          ))}
          {isAiLoading && (
            <div className="bg-zinc-50 text-zinc-400 text-xs italic p-5 rounded-2xl self-start rounded-bl-none animate-pulse">
              Scout is processing your request...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="flex gap-3 w-full flex-shrink-0">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isAiLoading}
            placeholder="Ask about live job trends, company openings, or career advice..."
            className="flex-grow bg-white border border-zinc-200 rounded-xl px-5 py-4 text-xs text-zinc-800 focus:outline-none shadow-sm"
          />
          <button 
            type="submit"
            disabled={isAiLoading || !input.trim()}
            className="bg-zinc-950 hover:bg-zinc-800 disabled:bg-zinc-100 disabled:text-zinc-300 text-white text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-xl transition-colors cursor-pointer flex-shrink-0"
          >
            Consult →
          </button>
        </form>
      </div>
    </div>
  );
}