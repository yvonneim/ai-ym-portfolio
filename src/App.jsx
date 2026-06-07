import React, { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PortfolioHome from './components/sections/PortfolioHome'
import ForwardMovesHome from './components/sections/ForwardMovesHome'
import CardDetailView from './components/sections/CardDetailView'
import './App.css'

export default function App() {
  const [view, setView] = useState('portfolio')

  const renderContent = () => {
    switch (view) {
      case 'portfolio':
        return <PortfolioHome setView={setView} />
      case 'forward-moves':
        return <ForwardMovesHome setView={setView} />
      case 'reskilling':
      case 'careers':
      case 'ai-career-scout':
      case 'resume-prep':
      case 'glossary':
      case 'comparison':
        return <CardDetailView setView={setView} type={view} />
      default:
        return <PortfolioHome setView={setView} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9FB] text-[#111827] antialiased">
      <Navbar currentView={view} setView={setView} />
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12">
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}
