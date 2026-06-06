import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PortfolioHome from './components/sections/PortfolioHome';
import ForwardMovesHome from './components/sections/ForwardMovesHome';
import CardDetailView from './components/sections/CardDetailView';
import './App.css';

function App() {
  const [view, setView] = useState('portfolio');

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar view={view} setView={setView} />

        <main className="main-content">
          {view === 'portfolio' && <PortfolioHome onExplore={() => setView('dashboard')} />}
          {view === 'dashboard' && <ForwardMovesHome onCardClick={setView} />}
          {['reskilling', 'careers', 'scout', 'resume', 'glossary', 'comparison'].includes(view) && (
            <CardDetailView type={view} onBack={() => setView('dashboard')} />
          )}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
