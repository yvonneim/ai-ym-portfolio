import React, { useState, useMemo } from 'react';

export default function SkillStudioView() {
  const [activePortal, setActivePortal] = useState('all');
  const [chosenRole, setChosenRole] = useState('none');
  const [completedCourses, setCompletedCourses] = useState(() =>
    JSON.parse(localStorage.getItem('completedCourses') || '[]')
  );

  const portals = [
    { id: 'all', n: 'All Modules', icon: '✨' },
    { id: 'google', n: 'Google', icon: '📘' },
    { id: 'notebooklm', n: 'NotebookLM', icon: '📓' },
    { id: 'anthropic', n: 'Anthropic', icon: '⚡' },
    { id: 'deeplearning', n: 'DeepLearning', icon: '🧠' },
    { id: 'edx', n: 'edX', icon: '🧠' },
    { id: 'lhh', n: 'LHH', icon: '💼' },
    { id: 'linkedin', n: 'LinkedIn', icon: '🔗' },
    { id: 'microsoft', n: 'Microsoft', icon: '💡' },
    { id: 'pega', n: 'Pega', icon: '🏛️' },
    { id: 'safe', n: 'SAFe', icon: '🛡️' },
    { id: 'udemy', n: 'Udemy', icon: '🎓' },
    { id: 'verizon', n: 'Verizon', icon: '📈' }
  ];

  const modules = [
    { id: 'g1', p: 'google', e: '🧠', n: 'AI for Brainstorming and Planning', d: 'Use AI to brainstorm concepts, build detailed timelines, and organize a clear plan for any goal.', u: 'https://www.coursera.org/learn/google-ai-for-brainstorming-and-planning', r: 'prompt analyst engineer', dur: '2 Hours', rec: true },
    { id: 'g2', p: 'google', e: '✨', n: 'AI Fundamentals', d: 'Learn essential AI concepts and practice prompting effectively inside real cloud environments.', u: 'https://www.coursera.org/learn/google-ai-fundamentals', r: 'prompt analyst', dur: '3 Hours' },
    { id: 'g3', p: 'google', e: '🔍', n: 'AI for Research and Insights', d: 'Use AI as your research partner, leveraging Gemini Deep Research and NotebookLM to quickly generate summaries, gain insights, and pressure test ideas for informed decision-making.', u: 'https://www.coursera.org/learn/google-ai-for-writing-and-communicating', r: 'prompt analyst', dur: '1 Hour' },
    { id: 'g4', p: 'google', e: '✍️', n: 'AI for Writing and Communicating', d: 'Turn rough notes into clear messages, easily adapt them for different stakeholders, and practice for corporate mock presentations.', u: 'https://www.coursera.org/learn/google-ai-for-writing-and-communicating', r: 'prompt', dur: '2 Hours' },
    { id: 'g5', p: 'google', e: '🎨', n: 'AI for Content Creation', d: 'Use AI as your creative partner to generate high-quality vector images, streaming video compositions, and premium slide presentations.', u: 'https://www.coursera.org/learn/google-ai-for-content-creation', r: 'prompt', dur: '2.5 Hours' },
    { id: 'g6', p: 'google', e: '📊', n: 'AI for Data Analysis', d: 'Transform unstructured data sheets into clear insights, master data clean-up skills, and create formulas with Gemini in Google Sheets.', u: 'https://www.coursera.org/learn/google-ai-for-data-analysis', r: 'analyst', dur: '3.5 Hours' },
    { id: 'g7', p: 'google', e: '🛠️', n: 'AI for App Building', d: 'Master vibe coding and build your own custom app. Tackle the most tedious tasks, all without writing a single line of code.', u: 'https://www.coursera.org/learn/google-ai-for-app-building', r: 'engineer', dur: 'Flexible' },
    { id: 'n1', p: 'notebooklm', e: '🔍', n: 'NotebookLM System Grounding Matrix', d: 'Use AI as your personal research partner, leveraging Deep Research structures and NotebookLM context tokens to pressure test ideas.', u: 'https://notebooklm.google.com/', r: 'prompt analyst', dur: '45 Mins' },
    { id: 'n2', p: 'notebooklm', e: '🎙️', n: 'NotebookLM: Audio Overview', d: 'Listen to an AI-generated deep dive into strategic workforce repositioning and career transition blueprints.', u: 'https://notebooklm.google.com/notebook/b02cfeb6-d2bc-4ec8-94e3-5c8f9f5ec40b?artifactId=14120553-0dc1-4f84-b985-ac28f4a8e14a', r: 'prompt analyst', dur: '15 Mins' },
    { id: 'a1', p: 'anthropic', e: '⚡', n: 'Claude Code in Action', d: 'Deep dive into AI-assisted structural terminal engineering workflows, API routing structures, and real-world system patterns.', u: 'https://anthropic.skilljar.com/claude-code-in-action', r: 'engineer', dur: '1 Hour' },
    { id: 'a2', p: 'anthropic', e: '🌱', n: 'Claude 101', d: 'Master core interaction patterns, multi-prompt constraints, sandbox configurations, and contextual behavior variables with the Claude family.', u: 'https://anthropic.skilljar.com/claude-101', r: 'prompt engineer', dur: '1.5 Hours' },
    { id: 'a3', p: 'anthropic', e: '🧠', n: 'AI Fluency: Foundations', d: 'Explore core foundational technical terminologies, prompt system architectures, safety alignment vectors, and key enterprise AI mental models.', u: 'https://anthropic.skilljar.com/ai-fluency-framework-foundations', r: 'prompt analyst engineer', dur: '2 Hours' },
    { id: 'a4', p: 'anthropic', e: '🎓', n: 'Teaching AI Fluency', d: 'Strategies for instructing others in organizational AI concepts, prompting frameworks, and continuous scaling parameters.', u: 'https://anthropic.skilljar.com/teaching-ai-fluency', r: 'prompt analyst', dur: '1.5 Hours' },
    { id: 'a5', p: 'anthropic', e: '📚', n: 'AI Fluency For Educators', d: 'AI instructional methodologies tailored explicitly for academic architectures, lecture planning, and administrative frameworks.', u: 'https://anthropic.skilljar.com/ai-fluency-for-educators', r: 'prompt', dur: '2 Hours' },
    { id: 'a6', p: 'anthropic', e: '🎒', n: 'AI Fluency For Students', d: 'Leveraging Claude reasoning-heavy environments safely for research synthesis, note aggregation, and technical deep-dives.', u: 'https://anthropic.skilljar.com/ai-fluency-for-students', r: 'prompt', dur: '1 Hour' },
    { id: 'a7', p: 'anthropic', e: '🤝', n: 'AI Fluency For Nonprofits', d: 'Creating systemic social impact and driving workflow automation loops inside global nonprofit operational blueprints.', u: 'https://anthropic.skilljar.com/ai-fluency-for-nonprofits', r: 'analyst', dur: '1.5 Hours' },
    { id: 'a8', p: 'anthropic', e: '🛠️', n: 'Claude with the Anthropic API', d: 'Full enterprise API implementation guide, covering structured outputs parsing, system instructions mapping, and tokens monitoring.', u: 'https://anthropic.skilljar.com/claude-with-the-anthropic-api', r: 'engineer', dur: '2.5 Hours' },
    { id: 'a9', p: 'anthropic', e: '🔗', n: 'Intro to Model Context Protocol', d: 'Standardized architecture protocols for syncing secure structural external database matrices directly with LLM cores.', u: 'https://anthropic.skilljar.com/introduction-to-model-context-protocol', r: 'engineer', dur: '1.5 Hours' },
    { id: 'a10', p: 'anthropic', e: '🚀', n: 'MCP: Advanced Topics', d: 'Deep-dive context engine custom server writing patterns, secure tool integration parameters, and high-velocity token pipeline management.', u: 'https://anthropic.skilljar.com/model-context-protocol-advanced-topics', r: 'engineer', dur: '2 Hours' },
    { id: 'a11', p: 'anthropic', e: '☁️', n: 'Claude in Amazon Bedrock', d: 'Deploying safe enterprise cloud architectures with Claude cores inside secure AWS identity access management perimeter networks.', u: 'https://anthropic.skilljar.com/claude-in-amazon-bedrock', r: 'engineer', dur: '2 Hours' },
    { id: 'a12', p: 'anthropic', e: '🌐', n: 'Claude with Google Vertex AI', d: 'Deploying Claude model instances within Google Vertex AI sandbox environments, data tracking spaces, and pipeline repositories.', u: 'https://anthropic.skilljar.com/claude-with-google-vertex', r: 'engineer', dur: '2 Hours' },
    { id: 'a13', p: 'anthropic', e: '🤖', n: 'Intro to Agent Skills', d: 'Foundations for building autonomous AI agents and pipelines.', u: 'https://anthropic.skilljar.com/introduction-to-agent-skills', r: 'engineer', dur: '2 Hours' },
    { id: 'd1', p: 'deeplearning', e: '🧠', n: 'AI For Everyone', d: 'A non-technical introduction to AI concepts, corporate implementation cycles, data strategies, and their structural impact on business and society.', u: 'https://www.deeplearning.ai/courses/ai-for-everyone/', r: 'prompt analyst engineer', dur: '6 Hours' },
    { id: 'd2', p: 'deeplearning', e: '⚡', n: 'Short Courses', d: 'Free, bite-sized targeted technical courses on the latest structural AI tools and frameworks including LLMs, RAG deployment, and agent orchestration.', u: 'https://learn.deeplearning.ai/', r: 'analyst engineer', dur: '1 Hour Each' },
    { id: 'd3', p: 'deeplearning', e: '🏗️', n: 'AI Agentic Design Patterns', d: 'Learn to configure and deploy multi-agent systems, communication loop frameworks, and execution rules via Microsoft AutoGen parameters.', u: 'https://learn.deeplearning.ai/courses/ai-agentic-design-patterns-with-autogen/', r: 'engineer', dur: '1.5 Hours' },
    { id: 'e1', p: 'edx', e: '🧠', n: 'LLM Ops Certification', d: 'Master baseline Large Language Model operations, continuous testing loops, infrastructure pipeline optimization, prompt metrics, and model management.', u: 'https://learning.edx.org/course/course-v1:AI+llmops3x+1T2024/home', r: 'engineer', dur: '12 Hours' },
    { id: 'e2', p: 'edx', e: '🌟', n: 'Skill Forward Gateway', d: 'Global professional track hub delivering verified technical courses from world-class university partners for workforce transition pipelines.', u: 'https://enterprise.edx.org/verizon-skill-forward/search', r: 'prompt analyst engineer', dur: 'Flexible' },
    { id: 'l1', p: 'lhh', e: '💼', n: 'Enterprise Workforce Transformation', d: 'Strategic career guidance mapping workforce data matrices, individual pivot parameters, and systemic industry repositioning tracks.', u: 'https://www.lhh.com/en-us', r: 'analyst', dur: 'Self-Paced' },
    { id: 'l2', p: 'lhh', e: '📝', n: 'Presence Optimization Blueprint', d: 'Tailored coaching methodology to optimize digital branding alignment, match corporate filter keywords, and refine resume architectures.', u: 'https://www.lhh.com/en-us/individuals/', r: 'prompt analyst', dur: 'Self-Paced' },
    { id: 'li1', p: 'linkedin', e: '🔗', n: 'Generative AI Career Essentials', d: 'Official foundations track covering neural token networks, ethical AI alignment standards, and real-world executive productivity paradigms.', u: 'https://www.linkedin.com/learning-login/continue?account=67698794', r: 'prompt analyst', dur: '4 Hours', rec: true },
    { id: 'li2', p: 'linkedin', e: '🎯', n: 'AI & Machine Learning Matrix', d: 'Comprehensive repository paths delivering professional skills tracking in vector database mechanics, prompt systems, and pipeline logic.', u: 'https://www.linkedin.com/learning-login/continue?account=67698794', r: 'analyst engineer', dur: 'Flexible' },
    { id: 'li3', p: 'linkedin', e: '💼', n: 'Career Development Blueprint', d: 'Professional growth framework tracking strategic navigation, network building, and career translation benchmarks.', u: 'https://www.linkedin.com/learning-login/continue?account=67698794', r: 'prompt analyst', dur: 'Self-Paced' },
    { id: 'm1', p: 'microsoft', e: ' Hawke 🔭', n: 'Episode 1: Intro to Gen AI', d: 'Introduction to Generative AI mechanisms and basic multi-prompt Transformer architectures.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/introduction-to-generative-ai-and-llms-generative-ai-for-beginners', r: 'prompt analyst', dur: '4 Hours' },
    { id: 'm2', p: 'microsoft', e: '📊', n: 'Episode 2: Exploring LLMs', d: 'Comparing performance metrics and deployment parameters across different open source models.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/exploring-and-comparing-different-llms-generative-ai-for-beginners', r: 'analyst', dur: '3 Hours' },
    { id: 'm3', p: 'microsoft', e: '⚖️', n: 'Episode 3: Responsible AI', d: 'Evaluating algorithmic transparency metrics, bias detection data arrays, and safe scaling parameters.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/using-generative-ai-responsibly-generative-ai-for-beginners', r: 'analyst', dur: '3 Hours' },
    { id: 'm4', p: 'microsoft', e: '⌨️', n: 'Episode 4: Prompting Foundations', d: 'Structural blueprint design rules for constructing predictable instruction contexts on large transformer cores.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/understanding-prompt-engineering-fundamentals-generative-ai-for-beginners', r: 'prompt', dur: '4 Hours' },
    { id: 'm5', p: 'microsoft', e: '🚀', n: 'Episode 5: Advanced Prompts', d: 'Deep-dive into programmatic context anchoring patterns, constraints templates, and meta-prompts formatting loops.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/creating-advanced-prompts-generative-ai-for-beginners', r: 'prompt engineer', dur: '3 Hours' },
    { id: 'm6', p: 'microsoft', e: '📝', n: 'Episode 6: Text Generation Apps', d: 'Building automated continuous copy production systems and report aggregation flows utilizing open generative layers.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/building-text-generation-applications-generative-ai-for-beginners', r: 'prompt analyst', dur: '4 Hours' },
    { id: 'm7', p: 'microsoft', e: '💬', n: 'Episode 7: Chat Apps', d: 'Building LLM-powered chat applications from scratch.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/building-chat-applications-generative-ai-for-beginners', r: 'prompt analyst engineer', dur: '3 Hours' },
    { id: 'pe1', p: 'pega', e: '🏛️', n: 'Pega GenAI Architecture Essentials', d: 'Master enterprise low-code integration blueprints, cognitive business process engines, and programmatic API bridge configurations.', u: 'https://academy.pega.com/', r: 'analyst engineer', dur: '5 Hours' },
    { id: 'pe2', p: 'pega', e: '🤖', n: 'Pega Process AI Essentials', d: 'Integrating real-time event predictive analytics engines and active operational decisioning algorithms into corporate process workflows.', u: 'https://academy.pega.com/mission/pega-process-ai-essentials/v7', r: 'analyst engineer', dur: '4 Hours' },
    { id: 's1', p: 'safe', e: '🛡️', n: 'SAFe Agile Framework Implementation', d: 'Scaling complex software delivery pipelines across large enterprise models utilizing predictive agile roadmap frameworks.', u: 'https://connect.scaledagile.com/login', r: 'analyst', dur: '2 Days' },
    { id: 'u1', p: 'udemy', e: '🎓', n: 'LangChain & Vector Database Mastery', d: 'Build real-world multi-agent pipelines, link dense structural semantic data stores, and configure cognitive memory frameworks.', u: 'https://verizonreskilling.udemy.com/course/ai-leader-the-ultimate-generative-ai-leader-cert-training/', r: 'engineer', dur: '8 Hours' },
    { id: 'u2', p: 'udemy', e: '🔐', n: 'AI Auditing & Compliance Masterclass', d: 'Risk mitigation models, performance monitoring structures, data accountability protocols, and safety compliance checks for enterprise LLM tracking.', u: 'https://verizonreskilling.udemy.com/course/ai-audit-certification-mastercalss/', r: 'analyst', dur: '6 Hours' },
    { id: 'u3', p: 'udemy', e: '🛡️', n: 'AI Governance Professional (AIGP)', d: 'Risk mapping matrices, structural compliance workflows, alignment constraints, and deployment audit tracking guidelines.', u: 'https://verizonreskilling.udemy.com/course/ai-governance-professional-aigp-2025/', r: 'analyst', dur: '5 Hours' },
    { id: 'u4', p: 'udemy', e: '📈', n: 'GCP Generative AI Leader Mock Exams', d: 'Strategic architecture evaluation scenarios, pipeline performance checklists, and compliance execution preparation matrices.', u: 'https://verizonreskilling.udemy.com/course/google-cloud-generative-ai-leader-3-mock-generative-ai-leader-exams/', r: 'prompt analyst', dur: '3 Hours' },
    { id: 'v1', p: 'verizon', e: '📈', n: 'Verizon Skill Forward Initiative', d: 'Technical upskilling tracks explicitly designed to match digital workforce transformation parameters with modern employment pipelines.', u: 'https://www.verizon.com/about/responsibility/human-prosperity/reskilling-program', r: 'prompt analyst engineer', dur: 'Flexible' },
    { id: 'v2', p: 'verizon', e: '📡', n: 'Generative AI Leadership Strategy', d: 'High-level enterprise alignment planning, transformation pipeline roadmap tracking, and cognitive workflow optimization strategy framework blueprints.', u: 'https://verizonreskilling.udemy.com/course/ai-leader-the-ultimate-generative-ai-leader-cert-training/', r: 'prompt analyst', dur: '4 Hours' },
    { id: 'v3', p: 'verizon', e: '🌟', n: 'Skill Forward edX Alumni Pathway', d: 'Specialized access portal delivering curated enterprise technical certificates, continuous development loops, and system verification credentials.', u: 'https://enterprise.edx.org/verizon-skill-forward/search', r: 'prompt analyst engineer', dur: 'Flexible' }
  ];

  const toggleComplete = (id) => {
    const next = completedCourses.includes(id)
      ? completedCourses.filter(cId => cId !== id)
      : [...completedCourses, id];
    setCompletedCourses(next);
    localStorage.setItem('completedCourses', JSON.stringify(next));
  };

  const counts = useMemo(() => {
    const base = { all: modules.length };
    portals.forEach(p => {
      if (p.id !== 'all') {
        base[p.id] = modules.filter(m => m.p === p.id).length;
      }
    });
    return base;
  }, []);

  const filteredModules = useMemo(() => {
    return modules.filter(m => {
      const vendorMatch = activePortal === 'all' || m.p === activePortal;
      const roleMatch = chosenRole === 'none' || m.r.includes(chosenRole);
      return vendorMatch && roleMatch;
    });
  }, [activePortal, chosenRole]);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-6 md:px-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        
        {/* PLAIN AND SIMPLE HERO HEADER */}
        <div className="w-full pt-6 pb-12 text-left border-b border-zinc-100 mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            <span className="w-4 h-0.5 bg-blue-600 rounded"></span>
            Select your courses
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-zinc-900 tracking-tight leading-none mb-4">
            Skill Studio
          </h1>
          <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-3xl">
            Select a provider track to sort specific model modules.
          </p>
        </div>

        {/* Dynamic Focus Path Selection Box */}
        <div className="mb-8 bg-white border border-zinc-100 rounded-2xl p-6 card-shadow">
          <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-1">🎯 Target Learning Path Alignment</h3>
          <p className="text-xs text-zinc-400 font-light mb-4">Select a career pivot focus profile to reveal and isolate recommended skills curriculum.</p>
          <select
            value={chosenRole}
            onChange={(e) => setChosenRole(e.target.value)}
            className="w-full max-w-md bg-zinc-50 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider p-3.5 rounded-xl cursor-pointer outline-none focus:border-purple-500 transition-colors"
          >
            <option value="none">🌐 Explore All Courses</option>
            <option value="prompt">⌨️ Prompt Architect</option>
            <option value="analyst">📊 AI Data Analyst</option>
            <option value="engineer">🤖 AI Systems Developer</option>
          </select>
        </div>

        {/* Section Matrix Labels */}
        <div className="text-center mb-10 pb-4 border-b border-zinc-100">
          <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase block mb-1">Learning Portals</span>
          <h2 className="font-serif text-3xl text-zinc-900">Skill Studio</h2>
          <p className="text-xs text-zinc-500 font-light mt-0.5">Select a provider profile filtering mechanism to explore tailored curricula.</p>
        </div>

        {/* Workspace Split Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sticky Left Filtering Buttons Panel */}
          <div className="w-full lg:w-[230px] lg:sticky lg:top-24 flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            {portals.map(p => (
              <button
                key={p.id}
                onClick={() => setActivePortal(p.id)}
                className={`flex items-center justify-between py-3 px-4 rounded-xl border text-left cursor-pointer transition-all text-xs font-bold uppercase tracking-wider ${
                  activePortal === p.id
                    ? 'bg-zinc-950 text-white border-zinc-950 shadow-md'
                    : 'bg-white border-zinc-100 text-zinc-600 hover:border-zinc-300'
                }`}
              >
                <span className="truncate">{p.icon} {p.n}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${activePortal === p.id ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-50 text-zinc-400'}`}>
                  {counts[p.id] || 0}
                </span>
              </button>
            ))}
          </div>

          {/* Right Curriculum Stream Workspace */}
          <div className="flex-grow w-full min-w-0 flex flex-col gap-4">
            {filteredModules.length === 0 ? (
              <div className="bg-white border border-zinc-150 rounded-2xl p-12 text-center text-zinc-400 font-light text-sm border-dashed">
                No matching modules tracking this alignment focus query.
              </div>
            ) : (
              filteredModules.map((m) => {
                const isCompleted = completedCourses.includes(m.id);
                const isFocused = chosenRole !== 'none' && m.r.includes(chosenRole);
                return (
                  <div
                    key={m.id}
                    className={`relative bg-white border rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 card-shadow hover:-translate-y-0.5 transition-all duration-300 ${
                      isCompleted ? 'border-green-500 bg-green-50/5' : isFocused ? 'border-blue-400' : 'border-zinc-100'
                    }`}
                  >
                    <a href={m.u} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 min-w-0 flex-grow text-decoration-none">
                      <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-xl flex items-center justify-center text-lg flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                        {m.e}
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{m.p} • {m.dur}</span>
                          {m.rec && <span className="bg-amber-50 text-amber-700 text-[8px] font-bold uppercase px-2 py-0.5 rounded">Recommended</span>}
                          {isFocused && <span className="bg-blue-50 text-blue-700 text-[8px] font-bold uppercase px-2 py-0.5 rounded">🎯 Core Skill Requirement</span>}
                        </div>
                        <h3 className="font-sans font-bold text-base text-zinc-900 leading-tight">
                          {m.n} <span className="text-zinc-300 text-xs font-normal">↗</span>
                        </h3>
                        <p className="text-xs text-zinc-500 font-light mt-1 leading-relaxed max-w-2xl">{m.d}</p>
                      </div>
                    </a>
                    <button
                      onClick={() => toggleComplete(m.id)}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold cursor-pointer transition-all self-start sm:self-center flex-shrink-0 ${
                        isCompleted ? 'bg-green-600 border-green-600 text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-300 hover:border-zinc-400'
                      }`}
                    >
                      ✓
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
