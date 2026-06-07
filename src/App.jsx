import React, { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PortfolioHome from './components/sections/PortfolioHome'
import ForwardMovesHome from './components/sections/ForwardMovesHome'
import SkillStudioView from './components/sections/SkillStudioView'

export default function App() {
  const [view, setView] = useState('home')

  const renderContent = () => {
    switch (view) {
      case 'home':
        return <PortfolioHome setView={setView} />
      case 'forward-moves':
        return <ForwardMovesHome setView={setView} />
      case 'skill-studio':
        return <SkillStudioView setView={setView} />
      default:
        return <PortfolioHome setView={setView} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
      <Navbar currentView={view} setView={setView} />

      <main className="flex-grow w-full">
        {renderContent()}
      </main>

      <Footer currentView={view} setView={setView} />
    </div>
  )
}
