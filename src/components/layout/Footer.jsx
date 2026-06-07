import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-50 px-12 py-6 text-[11px] text-[#9CA3AF] flex items-center justify-between">
      <p>© 2026 Yvonne Martinez. Hosted via Firebase Infrastructure.</p>
      <div className="flex items-center gap-6">
        <button type="button" className="text-[#6B7280] hover:text-gray-900 transition-colors">Explore Platform</button>
        <button type="button" className="text-[#6B7280] hover:text-gray-900 transition-colors">Get in Touch</button>
      </div>
    </footer>
  )
}
