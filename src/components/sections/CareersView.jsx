import React, { useState, useMemo } from 'react';

export default function CareersView() {
  const [activeSector, setActiveSector] = useState('all');

  const sectors = [
    { id: 'all', n: 'All Sectors', icon: '✨' },
    { id: 'health', n: 'Health', icon: '🏥' },
    { id: 'climate', n: 'Climate', icon: '🌍' },
    { id: 'education', n: 'Education', icon: '📚' },
    { id: 'civic', n: 'Civic', icon: '🏛️' },
    { id: 'fintech', n: 'FinTech', icon: '💳' }
  ];

  const jobs = [
    { p: 'health', sub: 'Health • Data Modeling', n: 'Aledade', d: 'Technology for independent primary care networks.', u: 'https://www.aledade.com/careers' },
    { p: 'health', sub: 'Health • Engineering Ops', n: 'Alma', d: 'High-quality, affordable mental healthcare platform matching matrix networks across structural insurance routes.', u: 'https://helloalma.com/careers/' },
    { p: 'health', sub: 'Health • Behavioral Analytics', n: 'Brightline', d: 'Behavioral health coaching and therapy arrays for children and families.', u: 'https://www.hellobrightline.com/careers' },
    { p: 'health', sub: 'Health • Care Delivery Tech', n: 'Cityblock Health', d: 'Integrated medical, behavioral, and social care for underserved communities.', u: 'https://www.cityblock.com/careers' },
    { p: 'health', sub: 'Health • Public Infrastructure', n: 'Color Health', d: 'Logistical and digital infrastructure for public health at scale metrics.', u: 'https://www.color.com/careers' },
    { p: 'health', sub: 'Health • Clinical Pharma', n: 'Formation Bio', d: 'AI-driven drug development, engineering pipelines, and clinical trial accelerators building data hubs.', u: 'https://formation.bio/careers' },
    { p: 'health', sub: 'Health • Practice Management', n: 'Grow Therapy', d: 'Decentralized platform scaling mental health practices and insurance billing layers.', u: 'https://growtherapy.com/careers' },
    { p: 'health', sub: 'Health • Credentialing Tech', n: 'Headway', d: 'Building a new mental healthcare system by scaling software credentialing layers.', u: 'https://headway.co/careers' },
    { p: 'health', sub: 'Health • Digital Therapeutics', n: 'Hinge Health', d: 'Digital clinic frameworks managing joint, muscle, and chronic musculoskeletal pain.', u: 'https://www.hingehealth.com/careers/' },
    { p: 'health', sub: 'Health • AI Agents', n: 'Hippocratic AI', d: 'Developing safety-focused, voice-based LLM architectures for real-time patient care workflows.', u: 'https://www.hippocraticai.com/careers' },
    { p: 'health', sub: 'Health • Home Care Automation', n: 'Honor', d: 'Empowering home care agencies and worker networks through scaled software engines.', u: 'https://www.joinhonor.com/careers' },
    { p: 'health', sub: 'Health • Navigation Systems', n: 'Included Health', d: 'Comprehensive healthcare navigation navigation arrays and integrated clinical care.', u: 'https://includedhealth.com/careers/' },
    { p: 'health', sub: 'Health • Enterprise Wellness', n: 'Lyra Health', d: 'Transforming mental health benefits management for global enterprise employee workforces.', u: 'https://www.lyrahealth.com/careers/' },
    { p: 'health', sub: 'Health • Maternity Networks', n: 'Maven Clinic', d: 'Virtual clinic networks optimized explicitly for women and family healthcare tracks.', u: 'https://www.mavenclinic.com/careers' },
    { p: 'health', sub: 'Health • Chronic Behavior', n: 'Omada Health', d: 'Virtual care models optimizing behavior tracking mechanisms for chronic conditions.', u: 'https://www.omadahealth.com/careers' },
    { p: 'health', sub: 'Health • Companion Logistics', n: 'Papa', d: 'Providing scaled companion networks and assistance arrays for seniors and families.', u: 'https://www.papa.com/about/careers' },
    { p: 'health', sub: 'Health • Value Analytics', n: 'Pearl Health', d: 'Data science technology helping primary care doctors transition to value-based care.', u: 'https://pearlhealth.com/careers/' },
    { p: 'health', sub: 'Health • Neonatal Systems', n: 'Pomelo Care', d: 'Virtual maternity personalized coaching and neonatal care operational platforms.', u: 'https://www.pomelocare.com/careers' },
    { p: 'health', sub: 'Health • Telehealth Delivery', n: 'Ro', d: 'Direct-to-patient digital telehealth system managing pharmacies and clinical labs.', u: 'https://ro.co/careers/' },
    { p: 'health', sub: 'Health • Precision Data', n: 'Spring Health', d: 'Precision mental health data analytics metrics tracking employer wellness benefits.', u: 'https://www.springhealth.com/careers/' },
    { p: 'health', sub: 'Health • Applied ML', n: 'Sword Health', d: 'AI-powered physical therapy clinic tracking patient kinetic responses natively from home.', u: 'https://swordhealth.com/careers' },
    { p: 'health', sub: 'Health • Metabolic Science', n: 'Virta Health', d: 'Clinically-backed data models to reverse Type 2 diabetes without pharmaceutical reliance.', u: 'https://www.virtahealth.com/careers' },
    { p: 'health', sub: 'Health • Medicaid Tech', n: 'Waymark', d: 'Community-based technology scaling care coordination for Medicaid recipient populations.', u: 'https://www.waymark.com/careers' },
    { p: 'climate', sub: 'Climate • Energy Utilities', n: 'Arcadia Power', d: 'Clean energy software utilities bridging consumers directly to renewable power distribution grids.', u: 'https://www.arcadia.com/careers' },
    { p: 'climate', sub: 'Climate • Sequestration', n: 'Charm Industrial', d: 'Carbon removal deployment tracking structures via high-density bio-oil sequestration loops.', u: 'https://jobs.lever.co/charmindustrial' },
    { p: 'climate', sub: 'Climate • Industrial DAC', n: 'Climeworks', d: 'Direct air capture (DAC) scaling parameters removing CO2 at true industrial volumes.', u: 'https://www.climeworks.com/careers' },
    { p: 'climate', sub: 'Climate • Fusion Systems', n: 'Commonwealth Fusion', d: 'Compact magnetic fusion energy hardware blueprints for high-velocity grid delivery.', u: 'https://cfs.energy/careers' },
    { p: 'climate', sub: 'Climate • Cloud Computing', n: 'Crusoe Energy', d: 'Trapping stranded flare gas energy assets to power modular cloud data centers.', u: 'https://www.crusoeenergy.com/careers' },
    { p: 'climate', sub: 'Climate • Bio Materials', n: 'Ecovative', d: 'Mycelium-based biological material science engineering to replace petroleum plastics.', u: 'https://www.ecovative.com/pages/careers' },
    { p: 'climate', sub: 'Climate • Clean Industry', n: 'Electra', d: 'Low-temperature electrochemical processes decarbonizing raw steel industrial production.', u: 'https://electra.earth/careers' },
    { p: 'climate', sub: 'Climate • Storage Tech', n: 'Moment Energy', d: 'Repurposing second-life electric vehicle batteries into sustainable energy storage packs.', u: 'https://www.momentenergy.com/careers' },
    { p: 'climate', sub: 'Climate • Hydropower', n: 'Natel Energy', d: 'Fish-safe hydropower turbines scaling environmental restoration and clean generation.', u: 'https://www.natelenergy.com/careers' },
    { p: 'climate', sub: 'Climate • Closed Loop Supply', n: 'Redwood Materials', d: 'Circular localization storage infrastructure recycling electric vehicle battery materials.', u: 'https://www.redwoodmaterials.com/careers/' },
    { p: 'climate', sub: 'Climate • Market Data', n: 'Rho Motion', d: 'Market data intelligence tracking vehicle electrification and battery supply chains.', u: 'https://rhomotion.com/careers' },
    { p: 'climate', sub: 'Climate • SAF Synthesis', n: 'Twelve', d: 'Carbon transformation technology processing captured CO2 emissions into sustainable aviation fuel.', u: 'https://www.twelve.co/careers' },
    { p: 'climate', sub: 'Climate • Energy Optimization', n: 'Turntide Technologies', d: 'High-efficiency smart motor tracking engines minimizing industrial equipment power draw.', u: 'https://turntide.com/careers/' },
    { p: 'climate', sub: 'Climate • Enterprise Carbon', n: 'Watershed', d: 'Enterprise carbon tracking ledger platform accelerating scope accounting parameters.', u: 'https://watershed.com/careers' },
    { p: 'education', sub: 'Education • Early Childhood', n: 'Age of Learning', d: 'Interactive game-based curriculum models accelerating early childhood learning metrics.', u: 'https://www.ageoflearning.com/careers/' },
    { p: 'education', sub: 'Education • Global EdTech', n: 'Coursera', d: 'Global multi-university course catalog management tracking dynamic certification pathways.', u: 'https://careers.coursera.com/' },
    { p: 'education', sub: 'Education • Retentive Gaming', n: 'Duolingo', d: 'Gamified learning engine optimization patterns utilizing personalized language retention tracking.', u: 'https://careers.duolingo.com/' },
    { p: 'education', sub: 'Education • Career Pipeline', n: 'Grad Leaders', d: 'University career placement network tracking corporate alignment interfaces.', u: 'https://www.gradleaders.com/careers' },
    { p: 'education', sub: 'Education • Adaptive Systems', n: 'Khan Academy', d: 'Free open-access structural knowledge systems and personalized AI tutoring matrices.', u: 'https://www.khanacademy.org/careers' },
    { p: 'education', sub: 'Education • Literacy Customization', n: 'Newsela', d: 'Adaptive reading level literacy tracking processing real-time current events content.', u: 'https://newsela.com/about/careers/' },
    { p: 'education', sub: 'Education • Continuous Support', n: 'Paper', d: '24/7 educational support software systems backing public school district infrastructures.', u: 'https://www.paper.co/careers' },
    { p: 'education', sub: 'Education • Collaborative Simulators', n: 'Synthesis', d: 'Complex sandbox software maps instructing student mental models in strategic collaboration.', u: 'https://www.synthesis.com/careers' },
    { p: 'education', sub: 'Education • Core Math', n: 'Zearn', d: 'Nonprofit structural mathematics digital learning platform serving K-8 parameters.', u: 'https://about.zearn.org/careers' },
    { p: 'civic', sub: 'Civic • Municipal Innovation', n: 'Bloomberg Philanthropies', d: 'Data-driven global investments tracking public health, climate innovation, and municipal metrics.', u: 'https://www.bloomberg.org/careers/' },
    { p: 'civic', sub: 'Civic • Public Safety Nets', n: 'Code for America', d: 'Civic technology solutions reshaping tracking rules for social services safety nets.', u: 'https://www.codeforamerica.org/jobs' },
    { p: 'civic', sub: 'Civic • Voter Operations', n: 'DemocracyWorks', d: 'Nonpartisan voting data logging engine tracking national structural information.', u: 'https://www.democracy.works/careers' },
    { p: 'civic', sub: 'Civic • Nutritional Access', n: 'mRelief', d: 'Simplified mobile interfaces tracking assistance eligibility for families nationwide.', u: 'https://www.mrelief.com/about' },
    { p: 'civic', sub: 'Civic • Public Software Engine', n: 'Nava PBC', d: 'Public benefit software restructuring critical architecture scaling tools for government.', u: 'https://www.navapbc.com/careers' },
    { p: 'civic', sub: 'Civic • Big Data Systems', n: 'Palantir', d: 'Data integration analytics engines mapping complex logistical variables for public sectors.', u: 'https://www.palantir.com/careers/' },
    { p: 'civic', sub: 'Civic • Transaction Interfaces', n: 'Propel', d: 'Financial transaction tracking application managing nutritional assistance processing.', u: 'https://www.joinpropel.com/careers' },
    { p: 'civic', sub: 'Civic • Federal Taskforce', n: 'U.S. Digital Service', d: 'Elite technology engineering strike teams optimizing infrastructure loops inside federal agencies.', u: 'https://www.usds.gov/apply' },
    { p: 'fintech', sub: 'FinTech • Corporate Ledgers', n: 'Brex', d: 'Corporate financial operation ledgers tracking multi-currency scaling parameters.', u: 'https://www.brex.com/careers' },
    { p: 'fintech', sub: 'FinTech • Global Clearing', n: 'Checkout.com', d: 'Global payment clearing networks tracking programmatic settlement transactions.', u: 'https://www.checkout.com/careers' },
    { p: 'fintech', sub: 'FinTech • Credit Point-of-Sale', n: 'Klarna', d: 'Point-of-sale credit underwriting algorithms tracking global shopping trends.', u: 'https://www.klarna.com/careers/' },
    { p: 'fintech', sub: 'FinTech • Token Issuing', n: 'Marqeta', d: 'Programmatic card issuing framework tracking real-time authorization parameters.', u: 'https://www.marqeta.com/company/careers' },
    { p: 'fintech', sub: 'FinTech • API Authentication Bridges', n: 'Plaid', d: 'Secure pipeline bridge routing user authentication banking data arrays directly to apps.', u: 'https://plaid.com/careers/' },
    { p: 'fintech', sub: 'FinTech • Corporate Spend Analytics', n: 'Ramp', d: 'Automated corporate ledger platforms monitoring expenditure tracking algorithms.', u: 'https://ramp.com/careers' },
    { p: 'fintech', sub: 'FinTech • Retail Investing', n: 'Stash', d: 'Micro-investing account management engines tracking fractional equity parameters.', u: 'https://www.stash.com/careers' },
    { p: 'fintech', sub: 'FinTech • Platform Processing', n: 'Stripe', d: 'The standard economic payment processing architecture framework layer of the web.', u: 'https://stripe.com/jobs' }
  ];

  const counts = useMemo(() => {
    const base = { all: jobs.length };
    sectors.forEach(s => {
      if (s.id !== 'all') {
        base[s.id] = jobs.filter(j => j.p === s.id).length;
      }
    });
    return base;
  }, []);

  const filteredJobs = useMemo(() => {
    if (activeSector === 'all') return jobs;
    return jobs.filter(j => j.p === activeSector);
  }, [activeSector]);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-6 md:px-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        
        {/* Upper Descriptive Header Section */}
        <div className="mb-12">
          <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-blue-600 mb-3 flex items-center gap-2">
            <span className="w-4 h-px bg-blue-400"></span> Mission-Driven Companies
          </p>
          <h2 className="font-serif text-4xl text-zinc-900 mb-2">Careers</h2>
          <p className="text-zinc-500 text-sm font-light">Explore ecosystem opportunities across mission-driven sectors nationwide.</p>
        </div>

        {/* Network Metrics Alert Stripe */}
        <div className="mb-8 bg-zinc-50 border border-zinc-200 p-5 rounded-2xl">
          <p className="text-xs text-zinc-600 leading-relaxed font-light">
            <strong>Available Networks:</strong> Select your sector vertical using your platform parameters to match with verified algorithmic technology opportunities.
          </p>
        </div>

        {/* Studio Side Splits */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Sticky Tab Filters Panel */}
          <div className="w-full lg:w-[230px] lg:sticky lg:top-24 flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            {sectors.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveSector(s.id)}
                className={`flex items-center justify-between py-3 px-4 rounded-xl border text-left cursor-pointer transition-all text-xs font-bold uppercase tracking-wider ${
                  activeSector === s.id
                    ? 'bg-zinc-950 text-white border-zinc-950 shadow-md'
                    : 'bg-white border-zinc-100 text-zinc-600 hover:border-zinc-300'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span>{s.icon}</span>
                  <span className="truncate">{s.n}</span>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${activeSector === s.id ? 'bg-zinc-800 text-white' : 'bg-zinc-50 text-zinc-400'}`}>
                  {counts[s.id] || 0}
                </span>
              </button>
            ))}
          </div>

          {/* Right Cards Deck Panel Workspace */}
          <div className="flex-grow w-full min-w-0 grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredJobs.map((j, i) => (
              <a
                key={j.n + i}
                href={j.u}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-zinc-100 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-300 flex items-start gap-4 card-shadow group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-base flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                  {j.p === 'health' ? '🏥' : j.p === 'climate' ? '🌍' : j.p === 'education' ? '📚' : j.p === 'civic' ? '🏛️' : '💳'}
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-bold text-blue-600 tracking-wider uppercase block mb-1">{j.sub}</span>
                  <h4 className="font-sans font-bold text-base text-zinc-900 group-hover:text-blue-600 transition-colors tracking-tight leading-snug">
                    {j.n} ↗
                  </h4>
                  <p className="text-xs text-zinc-500 font-light leading-relaxed mt-1">{j.d}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
