import React, { useState, useMemo } from 'react';

export default function SkillStudioView() {
  const [activePortal, setActivePortal] = useState('All');

  const portals = [
    { id: 'All', n: 'All Modules', icon: '✨', bg: 'bg-zinc-50', border: 'border-zinc-100' },
    { id: 'Anthropic', n: 'Anthropic', u: 'https://anthropic.skilljar.com/', d: 'Anthropic provides direct access to frontier-model research and AI development resources.', icon: '⚡', bg: 'bg-purple-50/60', border: 'border-purple-100' },
    { id: 'edX', n: 'edX', u: 'https://authn.edx.org/login?next=https%3A%2F%2Flearning.edx.org%2Fcourse%2Fcourse-v1%3AAI%2Bllmops3x%2B1T2024%2Fhome', d: 'edX is a global learning platform offering courses from world-class universities and industry leaders.', icon: '🧠', bg: 'bg-emerald-50/60', border: 'border-emerald-100' },
    { id: 'LHH', n: 'LHH', u: 'https://www.lhh.com/en-us', d: 'LHH brings together global excellence, local knowledge, and decades of experience to support companies and professionals across the talent lifecycle.', icon: '💼', bg: 'bg-zinc-50', border: 'border-zinc-200' },
    { id: 'LinkedIn', n: 'LinkedIn Learning', u: 'https://www.linkedin.com/learning/', d: 'LinkedIn Learning offers professional skill development through a vast library of expert-led video content.', icon: '🔗', bg: 'bg-blue-50/60', border: 'border-blue-100' },
    { id: 'Microsoft', n: 'Microsoft', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/', d: 'Microsoft provides comprehensive training modules for mastering AI architecture and safe deployment at enterprise scale.', icon: '💡', bg: 'bg-sky-50/60', border: 'border-sky-100' },
    { id: 'Pega', n: 'Pega', u: 'https://academy.pega.com/', d: 'Pega offers enterprise-grade automation and workflow optimization training for digital transformation professionals.', icon: '🏛️', bg: 'bg-zinc-50', border: 'border-zinc-200' },
    { id: 'SAFe', n: 'SAFe', u: 'https://connect.scaledagile.com/login', d: 'The Scaled Agile Framework provides guidance for implementing lean-agile practices at enterprise scale.', icon: '🛡️', bg: 'bg-rose-50/60', border: 'border-rose-100' },
    { id: 'Udemy', n: 'Udemy', u: 'https://verizonreskilling.udemy.com/', d: 'Udemy is a broad marketplace of technical and strategic AI courses curated for professional growth.', icon: '🎓', bg: 'bg-orange-50/60', border: 'border-orange-100' },
    { id: 'Verizon', n: 'Verizon Reskilling', u: 'https://www.verizon.com/about/responsibility/human-prosperity/reskilling-program', d: 'Verizon offers technical reskilling programs focused on workforce readiness and digital prosperity.', icon: '📡', bg: 'bg-red-50/60', border: 'border-red-100' }
  ];

  const modules = [
    { p: 'Anthropic', e: '⚡', n: 'Claude Code In Action', d: 'AI-assisted coding workflows and real-world application patterns.', u: 'https://anthropic.skilljar.com/claude-code-in-action' },
    { p: 'Anthropic', e: '🌱', n: 'Claude 101', d: 'Core interaction patterns with the Claude model family.', u: 'https://anthropic.skilljar.com/claude-101' },
    { p: 'Anthropic', e: '🧠', n: 'AI Fluency: Foundations', d: 'Core AI terminology, mental models, and key concepts.', u: 'https://anthropic.skilljar.com/ai-fluency-framework-foundations' },
    { p: 'Anthropic', e: '🎓', n: 'Teaching AI Fluency', d: 'Strategies for instructing others in AI concepts and practices.', u: 'https://anthropic.skilljar.com/teaching-ai-fluency' },
    { p: 'Anthropic', e: '📚', n: 'AI Fluency For Educators', d: 'AI methodology tailored to academic and educational settings.', u: 'https://anthropic.skilljar.com/ai-fluency-for-educators' },
    { p: 'Anthropic', e: '🎒', n: 'AI Fluency For Students', d: 'Leveraging AI tools effectively for learning and research.', u: 'https://anthropic.skilljar.com/ai-fluency-for-students' },
    { p: 'Anthropic', e: '🤝', n: 'AI Fluency For Nonprofits', d: 'Creating social impact through thoughtful AI integration.', u: 'https://anthropic.skilljar.com/ai-fluency-for-nonprofits' },
    { p: 'Anthropic', e: '🛠️', n: 'Claude API', d: 'Full API implementation guide for production deployments.', u: 'https://anthropic.skilljar.com/claude-with-the-anthropic-api' },
    { p: 'Anthropic', e: '🔗', n: 'Intro to Model Context Protocol', d: 'Standard protocol for structured data integration and exchange.', u: 'https://anthropic.skilljar.com/introduction-to-model-context-protocol' },
    { p: 'Anthropic', e: '🚀', n: 'MCP: Advanced Topics', d: 'Deep-dive into Model Context Protocol architecture and patterns.', u: 'https://anthropic.skilljar.com/model-context-protocol-advanced-topics' },
    { p: 'Anthropic', e: '☁️', n: 'Claude with Amazon Bedrock', d: 'Deploying Claude within Amazon cloud infrastructure at scale.', u: 'https://anthropic.skilljar.com/claude-in-amazon-bedrock' },
    { p: 'Anthropic', e: '🌐', n: 'Claude with Vertex AI', d: 'Integrating Claude into Google Cloud platform environments.', u: 'https://anthropic.skilljar.com/claude-with-google-vertex' },
    { p: 'Anthropic', e: '🤖', n: 'Intro to Agent Skills', d: 'Foundations for building autonomous AI agents and pipelines.', u: 'https://anthropic.skilljar.com/introduction-to-agent-skills' },
    { p: 'Microsoft', e: '💡', n: 'Episode 1: Intro to Gen AI', d: 'Introduction to Generative AI and Large Language Models.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/introduction-to-generative-ai-and-llms-generative-ai-for-beginners' },
    { p: 'Microsoft', e: '🔭', n: 'Episode 2: Exploring LLMs', d: 'Comparing and evaluating different LLM architectures.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/exploring-and-comparing-different-llms-generative-ai-for-beginners' },
    { p: 'Microsoft', e: '⚖️', n: 'Episode 3: Responsible AI', d: 'Frameworks for using Generative AI responsibly and safely.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/using-generative-ai-responsibly-generative-ai-for-beginners' },
    { p: 'Microsoft', e: '⌨️', n: 'Episode 4: Prompt Engineering', d: 'Fundamentals of prompt engineering and instruction design.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/understanding-prompt-engineering-fundamentals-generative-ai-for-beginners' },
    { p: 'Microsoft', e: '🚀', n: 'Episode 5: Advanced Prompts', d: 'Advanced prompting techniques for precise AI control.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/creating-advanced-prompts-generative-ai-for-beginners' },
    { p: 'Microsoft', e: '📝', n: 'Episode 6: Text Generation', d: 'Building text-generation applications with generative models.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/building-text-generation-applications-generative-ai-for-beginners' },
    { p: 'Microsoft', e: '💬', n: 'Episode 7: Chat Apps', d: 'Building LLM-powered chat applications from scratch.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/building-chat-applications-generative-ai-for-beginners' },
    { p: 'Pega', e: '🏛️', n: 'Pega Process AI Essentials', d: 'AI-powered process automation and decisioning fundamentals.', u: 'https://academy.pega.com/mission/pega-process-ai-essentials/v7' },
    { p: 'SAFe', e: '🛡️', n: 'SAFe Login Portal', d: 'Access the Scaled Agile Framework training and certification platform.', u: 'https://connect.scaledagile.com/login' },
    { p: 'Verizon', e: '🎓', n: 'Udemy — AI Leader Cert', d: 'Generative AI leadership strategy and certification, via Verizon Udemy access.', u: 'https://verizonreskilling.udemy.com/course/ai-leader-the-ultimate-generative-ai-leader-cert-training/' },
    { p: 'Verizon', e: '🌟', n: 'edX — Skill Forward', d: 'Exclusive career reskilling pathways curated for Verizon alumni.', u: 'https://enterprise.edx.org/verizon-skill-forward/search' },
    { p: 'LinkedIn', e: '🔗', n: 'LinkedIn Learning Portal', d: 'Access the full LinkedIn Learning library — courses, paths, and certificates.', u: 'https://www.linkedin.com/learning/' },
    { p: 'edX', e: '🧠', n: 'LLM Ops', d: 'Large Language Model operations, monitoring, and management.', u: 'https://learning.edx.org/course/course-v1:AI+llmops3x+1T2024/home' },
    { p: 'LHH', e: '💼', n: 'Career Transition', d: 'Lee Hecht Harrison professional coaching and support services.', u: 'https://www.lhh.com/en-us' }
  ];

  const filteredModules = useMemo(() => {
    if (activePortal === 'All') return modules;
    return modules.filter(m => m.p === activePortal);
  }, [activePortal]);

  const activeMeta = useMemo(() => {
    if (activePortal === 'All') {
      return { d: 'Explore the complete collection of learning tracks across all available portals.', icon: '✨' };
    }
    return portals.find(p => p.id === activePortal) || { d: '', icon: '' };
  }, [activePortal]);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-6 md:px-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        
        {/* Descriptive Section Header */}
        <div className="mb-12">
          <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-purple-600 mb-3 flex items-center gap-2">
            <span className="w-4 h-px bg-purple-400"></span> Learning Resources
          </p>
          <h2 className="font-serif text-4xl text-zinc-900 mb-2">Skill Studio</h2>
          <p className="text-zinc-500 text-sm font-light">Select a provider track to sort specific model modules.</p>
        </div>

        {/* Structural Interactive Layout split */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sticky Left Sidebar Navigation Filters */}
          <div className="w-full lg:w-[230px] lg:sticky lg:top-24 flex-shrink-0 z-10">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
              {portals.map(p => (
                <button
                  key={p.id}
                  onClick={() => setActivePortal(p.id)}
                  className={`flex items-center gap-2.5 py-3 px-4 rounded-xl border text-left cursor-pointer transition-all text-xs font-bold uppercase tracking-wider ${
                    activePortal === p.id
                      ? 'bg-zinc-950 text-white border-zinc-950 shadow-sm'
                      : 'bg-white border-zinc-100 text-zinc-700 hover:border-zinc-300'
                  }`}
                >
                  <span>{p.icon}</span>
                  <span className="truncate">{p.n}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Right Content Panel Card Row outputs */}
          <div className="flex-grow w-full min-w-0 bg-white border border-zinc-100 rounded-2xl p-6 md:p-8 card-shadow">
            <div className="mb-8 pb-6 border-b border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl text-zinc-900 flex items-center gap-2">
                  <span>{activeMeta.icon}</span>
                  {activePortal === 'All' ? 'All Active Portals' : `${activePortal} Track`}
                </h3>
                <p className="text-xs text-zinc-400 font-light mt-1 max-w-xl">{activeMeta.d}</p>
              </div>
              <span className="bg-purple-50 text-purple-700 font-mono text-[10px] font-bold px-3 py-1 rounded-full self-start sm:self-center">
                {filteredModules.length} Modules Found
              </span>
            </div>

            <div className="divide-y divide-zinc-50">
              {filteredModules.map((m, i) => (
                <a
                  key={m.n + i}
                  href={m.u}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 hover:bg-purple-50/30 px-3 -mx-3 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="w-9 h-9 bg-zinc-50 rounded-lg flex items-center justify-center text-sm border border-zinc-100 flex-shrink-0">{m.e}</span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-zinc-900 group-hover:text-purple-600 transition-colors truncate">{m.n}</p>
                      <p className="text-xs text-zinc-400 font-light truncate mt-0.5">{m.d}</p>
                    </div>
                  </div>
                  <span className="text-zinc-300 group-hover:text-purple-600 text-xs font-bold ml-4">↗</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
