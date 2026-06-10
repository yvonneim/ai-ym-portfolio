import React, { useState, useMemo } from 'react';

export default function GlossaryView() {
  const [searchQuery, setSearchQuery] = useState('');

  const terms = [
    { id: 'genai', icon: '🧠', title: 'Generative AI', label: 'Cognitive AI', desc: 'AI capable of creating completely fresh text, code, images, synthesis briefs, or data structures by programmatically learning complex underlying statistical weights from massive training datasets.' },
    { id: 'llm', icon: '⚙️', title: 'LLM', label: 'Architecture', desc: 'Large Language Model — the multi-layer transformer-based cognitive neural engine built with billions of floating parameters that handles reasoning, instruction logic parsing, and conversational system outputs.' },
    { id: 'rag', icon: '⚡', title: 'RAG', label: 'Grounding Layer', desc: 'Retrieval-Augmented Generation. Optimization pattern that programmatically fetches relevant factual blocks from an external verified corpus or enterprise dataset to ground an LLM\'s response, completely halting hallucinations.' },
    { id: 'prompting', icon: '📝', title: 'Prompting', label: 'Interface Logic', desc: 'The structural methodology of crafting contextual parameters, precise system instructions, and structural data constraints to cleanly guide AI outputs toward predictable professional behaviors.' },
    { id: 'finetuning', icon: '🛠️', title: 'Fine-Tuning', label: 'Optimization', desc: 'The process of updating the weights of an existing pretrained base model by training it on a targeted, specialized dataset to drastically optimize accuracy for a highly specific industry domain track.' },
    { id: 'embedding', icon: '💾', title: 'Embedding', label: 'Vector Spaces', desc: 'A dense mathematical vector representation of data (like strings or files) that maps semantic meaning into high-dimensional vector spaces, letting databases run semantic searches based on intent instead of text matches.' },
    { id: 'token', icon: '🔢', title: 'Token', label: 'Computational Metrics', desc: 'The fundamental unit of data processing inside large text transformers. Represents fragments of strings, averaging roughly 4 characters or 0.75 words in standard English prose compositions.' },
    { id: 'agent', icon: '🤖', title: 'Agent', label: 'Automation Architecture', desc: 'An autonomous layer of software powered by an LLM core that can dynamically observe its environment, make execution step plans, call external APIs or tools, and loop until it solves a complex goal from scratch.' }
  ];

  const filteredTerms = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return terms;
    return terms.filter(t => 
      t.title.toLowerCase().includes(query) || 
      t.label.toLowerCase().includes(query) || 
      t.desc.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-6 md:px-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* PLAIN AND SIMPLE HERO HEADER */}
        <div className="w-full pt-6 pb-12 text-left border-b border-zinc-100 mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            <span className="w-4 h-0.5 bg-blue-600 rounded"></span>
            AI terminology
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-zinc-900 tracking-tight leading-none mb-4">
            Glossary
          </h1>
          <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-3xl">
            Standard terminology for navigating technical and strategic discussions in the generative AI space.
          </p>
        </div>

        {/* CONCEPT SEARCH INPUT BLOCK */}
        <div className="w-full bg-white border border-zinc-100 rounded-2xl p-6 card-shadow">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
            🔍 Interactive Concept Search
          </label>
          <p className="text-xs text-zinc-400 font-light mb-4">
            Type keywords to instantaneously isolate architectural mechanics or model operations criteria.
          </p>
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search concepts (e.g., RAG, LLM, Agent)..."
            className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3.5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-purple-300 transition-colors"
          />
        </div>

        {/* Industry External References */}
        <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-zinc-600 font-light">
            <strong>External Repositories:</strong> Explore verified industry reference frameworks to augment your tactical domain technical vocabulary context metrics.
          </p>
          <div className="flex gap-3 flex-wrap flex-shrink-0">
            <a href="https://www.ibm.com/topics/artificial-intelligence/glossary" target="_blank" rel="noopener noreferrer" className="bg-white border border-zinc-200 text-zinc-800 text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl hover:border-purple-300 transition-colors">📘 IBM AI Glossary ↗</a>
            <a href="https://developers.google.com/machine-learning/glossary" target="_blank" rel="noopener noreferrer" className="bg-white border border-zinc-200 text-zinc-800 text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl hover:border-purple-300 transition-colors">🌐 Google ML Glossary ↗</a>
          </div>
        </div>

        {/* METRIC COUNTER */}
        <div className="text-left">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Terminology Reference Matrix • {filteredTerms.length} Terms
          </h3>
        </div>

        {/* TERMINOLOGY GRID */}
        {filteredTerms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {filteredTerms.map((t) => (
              <div key={t.id} className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[190px]">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center text-sm shadow-inner">{t.icon}</span>
                    <h4 className="font-sans font-bold text-base text-zinc-900 tracking-tight">{t.title}</h4>
                  </div>
                  <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded uppercase tracking-wide inline-block mb-3">
                    {t.label}
                  </span>
                  <p className="text-zinc-500 text-xs font-light leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full text-center py-12 bg-white border border-zinc-100 border-dashed rounded-2xl text-zinc-400 font-light text-sm">
            No matching terminologies found. Try a different keyword!
          </div>
        )}

      </div>
    </div>
  );
}
