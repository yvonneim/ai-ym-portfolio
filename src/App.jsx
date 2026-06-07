import React, { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PortfolioHome from './components/sections/PortfolioHome'
import ForwardMovesHome from './components/sections/ForwardMovesHome'
import CardDetailView from './components/sections/CardDetailView'
import './App.css'

export default function App() {
  const [view, setView] = useState('home')

  const renderContent = () => {
    switch (view) {
      case 'home':
        return <PortfolioHome setView={setView} />
      case 'forward-moves':
        return <ForwardMovesHome setView={setView} />
      case 'comparison':
      case 'reskilling':
      case 'careers':
      case 'ai-career-scout':
      case 'resume-prep':
      case 'glossary':
        return <CardDetailView setView={setView} type={view} />
      default:
        return <PortfolioHome setView={setView} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 px-8 sm:px-12 max-w-7xl mx-auto">
      <Navbar currentView={view} setView={setView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}
