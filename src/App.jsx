import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PortfolioHome from './components/sections/PortfolioHome';
import ForwardMovesHome from './components/sections/ForwardMovesHome';
import SkillStudioView from './components/sections/SkillStudioView';
import CareersView from './components/sections/CareersView';
import GlossaryView from './components/sections/GlossaryView';
import AICarrierScoutView from './components/sections/AICarrierScoutView'; // Verify this path matches your file explorer!

export default function App() {
  const [view, setView] = useState('home');

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
      case 'ai-career-scout': // Explicit case catcher for the Scout view
        return <AICarrierScoutView setView={handleViewChange} />;
      default:
        return <PortfolioHome setView={handleViewChange} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-900 antialiased">
      <Navbar currentView={view} setView={handleViewChange} />
      <main className="flex-grow w-full">
        {renderContent()}
      </main>
      <Footer currentView={view} setView={handleViewChange} />
    </div>
  );
}