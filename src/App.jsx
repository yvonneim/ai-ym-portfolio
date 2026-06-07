import React, { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PortfolioHome from './components/sections/PortfolioHome'
import ForwardMovesHome from './components/sections/ForwardMovesHome'

export default function App() {
  const [view, setView] = useState('home')

  const renderContent = () => {
    switch (view) {
      case 'home':
        return <PortfolioHome setView={setView} />
      case 'forward-moves':
        return <ForwardMovesHome setView={setView} />
      default:
        return <PortfolioHome setView={setView} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-900 antialiased">
      <Navbar currentView={view} setView={setView} />

      <main className="flex-grow w-full max-w-7xl mx-auto px-16 md:px-24 py-16 box-border">
        {renderContent()}
      </main>

      <Footer currentView={view} setView={setView} />
    </div>
  )
}
