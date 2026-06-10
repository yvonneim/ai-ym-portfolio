Yvonne Martinez - Enterprise AI Operations Playbook
Master Production Manifest (React 19 & Tailwind CSS v4)
# Phase 1 — Project Initialization & Structure

## Prompt 1.1 — Building the Architecture Scaffold
* **Where to paste:** Run the terminal commands inside VS Code first, then give the text prompt to your AI.
* **Intent:** Automatically builds a clean directory layout and creates the starting boilerplate files.

### Terminal Step A: Create Folders (Windows PowerShell)
```powershell
mkdir src/components/layout, src/components/ui, src/components/sections, src/context, src/hooks, src/utils, src/assets -Force
```
### Terminal Step B: Create the Missing Files (Windows PowerShell)
New-Item src/components/layout/Navbar.jsx, src/components/layout/Footer.jsx, src/context/ThemeContext.jsx -Force

### Terminal Step C: Initialize Your Git Safety Net (Windows PowerShell)
git init
git add .
git commit -m "Initial commit: Empty project architecture and workspace files"

## Prompt 1.2 — Populating Boilerplate JSX Code
Where to paste: Open your VS Code AI Composer panel (Ctrl + I or Cmd + I on Mac). Ensure the Composer is set to Project or Agent mode so it can edit multiple files simultaneously.

Intent: Automatically populates your empty components with highly responsive semantic layouts and hooks them directly into your main app entry point.

# AI Prompt
I have initialized our folder architecture and generated empty files for `Navbar.jsx`, `Footer.jsx`, and `ThemeContext.jsx`. 

Please analyze our project workspace and perform the following code generation operations:
1. Populate `src/context/ThemeContext.jsx` with a fully functional React context provider that manages a 'light' vs 'dark' mode string state, persisting the preference inside the browser's localStorage.
2. Populate `src/components/layout/Navbar.jsx` with a modern, responsive navigation container utilizing mobile responsive flex layouts, a simple text logo, a theme toggle button hooked to our theme context, and basic navigation links.
3. Populate `src/components/layout/Footer.jsx` with a clean structural layout displaying a dynamic copyright year script and social link icons.
4. Open `src/App.jsx`, clear its current placeholder code, import our new layout elements, and wrap the layout components cleanly inside our Theme Provider.

Ensure all file imports match our structural directories flawlessly and output complete, production-ready code.

## Repository Sync Checkpoint
git add .
git commit -m "Complete Phase 1 architecture setup"

# Phase 2 — Tailwind v4 & Global Styling (Custom Brand Identity)

## Prompt 2.1 — Brand Typography and Custom Card Tokens
* **Where to paste:** Your VS Code AI Chat / Composer panel (`Ctrl + I`).
* **Intent:** Completely rewrites the global CSS to implement your premium light-themed aesthetic and saves your pastel card colors as reusable Tailwind classes.

### AI Prompt
```text
We are using Tailwind CSS v4, which configures design tokens directly inside the main CSS entry point using CSS variables. 

Please locate and open `src/index.css`. Completely rewrite it to implement our premium light-themed tech aesthetic exactly matching these design rules from our brand assets:

1. Global Styles:
- Primary Background: Crisp, bright light-grey background gradient (#F9F9FB blending smoothly into white)
- Primary Text: Deep charcoal/slate black for headings and body copy to ensure ultra-sharp readability (#111827)
- Accent Colors: Set up a signature electric violet/purple gradient token (#7C3AED to #A855F7)

2. Reusable Card Theme Tokens (Define these as custom classes or CSS variables):
- Create a `.card-lavender` class: Soft lavender background (#F5F3FF) with a subtle border tint.
- Create a `.card-blue` class: Soft sky blue background (#EFF6FF) with a subtle border tint.
- Create a `.card-cream` class: Soft warm peach/cream background (#FFFBEB) with a subtle border tint.
- Create a `.card-mint` class: Soft mint green background (#F0FDF4) with a subtle border tint.

Ensure all cards feature smooth hover states (like a gentle shadow or slight lift transition). The styling must respect standard HTML semantics and apply beautifully across our components.
```
## Repository Sync Checkpoint
``` Powershell
git add .
git commit -m "Configure customized brand layout, typography, and pastel card utility tokens"
```
# Phase 3 — Multi-View Architecture & Dynamic Product Sub-Pages

## Prompt 3.1 — Building Interactive Light-Themed Navigation and Content Views
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Destroys old dark themes, synchronizes the main portfolio to toggle views, and setups up detailed light-themed inner product pages for all 6 target modules.

### AI Prompt
```text
We want to fully scale our React application into a high-end multi-view layout using state management inside `src/App.jsx`. Ensure that all dark blues, heavy dark backgrounds, or unappealing dark styling blocks are completely removed from the entire application workspace. Every container, background, and text layer must reflect a clean, premium light-themed tech aesthetic (white backgrounds, soft gray transitions, and sharp charcoal text).

Please configure, structure, and connect the following views:

1. Main Portfolio Home View (`src/components/sections/PortfolioHome.jsx`):
   - Implement the clean white personal portfolio UI with Royal Blue accents as seen on aitogethernow.com.
   - Set up the main tracking badge: "ENTERPRISE AI OPERATIONS & INFRASTRUCTURE".
   - Set up the hero title: "Orchestrating Enterprise AI Implementation."
   - Clicking the primary dark-styled CTA button "EXPLORE FORWARD MOVES AI →" must instantly transition our state to render the Forward Moves sub-platform.

2. Forward Moves Venture Platform View (`src/components/sections/ForwardMovesHome.jsx`):
   - This page acts as the main Dashboard Hub for the product. Set up a bright grid layout presenting 6 distinct sub-page entry points utilizing our premium pastel color tokens:
     * Card 1: Reskilling Portal (Soft lavender style)
     * Card 2: Careers Tracking (Soft blue style)
     * Card 3: AI Career Scout (Soft warm peach/cream style)
     * Card 4: Resume Prep (Soft mint green style)
     * Card 5: Glossary System (Soft violet style)
     * Card 6: Comparison Matrix (Soft light-teal style)
   - Ensure each card is clickable and dynamically triggers a view change to that specific module.

3. Modular Content Detail Pages (`src/components/sections/CardDetailView.jsx`):
   - Create a clean component file to dynamically handle the information layout for the active selection based on a `type` property.
   - For example, when viewing 'reskilling' or 'careers', show highly informative, crisp layout layers. 
   - Ensure every sub-page details section entirely matches the light mode aesthetic, featuring explicit informational blocks, light card cards, and violet/blue outline action buttons.

4. Top Navigation Synchronization (`src/components/layout/Navbar.jsx`):
   - Set up `const [view, setView] = useState('portfolio')` inside `src/App.jsx` to govern current rendering layout blocks.
   - The Navbar must change its links dynamically based on the current view.
   - When on the portfolio view, display only: "FORWARD MOVES AI" and "CONTACT".
   - When inside any Forward Moves platform view, render the full navigation selection verbatim: "🏡 HOME", "DASHBOARD HUB", "COMPARISON", "RESKILLING", "CAREERS", "AI CAREER SCOUT", "RESUME PREP", "GLOSSARY". Clicking "🏡 HOME" must seamlessly return the state back to the portfolio home view.
```
# Live Preview Workflow
# Run this inside your terminal to stream live hot-reloads side-by-side:
```powershell
npm run dev
```
## Repository Sync Checkpoint
git add .
git commit -m "Implement 6-section product grid routing, drop old dark styles, and build dynamic navbar tabs"

# Phase 4 — Configuration Engine & Dependency Setup

## Prompt 4.1 — Dropping the Node & Project Configuration Files
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Automatically generates the missing root `package.json` and `vite.config.js` so your system can install packages and boot up the real local preview server.

### AI Prompt
```text
Please look at our root directory (`AI-YM-PORTFOLIO`). We need to drop in the formal project configuration files so we can run the real application.

1. Create a `package.json` file exactly in the root folder with this content:
{
  "name": "ai-ym-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.0.0",
    "vite": "^6.0.0"
  }
}

2. Create a `vite.config.js` file exactly in the root folder with this content:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```
# Terminal Operations: Booting the Nodes
``` powershell
# Step 1: Install all your React & Tailwind dependencies
npm install

# Step 2: Fire up your brand-new local server engine
npm run dev
```
## Prompt 4.2 — Creating the Root HTML Entry Point
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Automatically generates the root `index.html` entry point that connects Vite to your React `src/main.jsx` or `src/App.jsx` entry points.

### AI Prompt
```text
Please look at our root directory (`AI-YM-PORTFOLIO`). Vite requires a root entry file to display our app on localhost.

Create an `index.html` file exactly in the root folder with this content:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Yvonne Martinez - AI Operations Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

Note: If our entry script is named `/src/index.jsx` or `/src/App.jsx` instead of `/src/main.jsx`, please automatically adjust the script src path inside this file to match whichever file initializes our React DOM render.
```
## Repository Sync Checkpoint
git add .
git commit -m "Create root index.html entry point for Vite dev server parsing"

## Prompt 4.3 — Creating the Main DOM Mount Script
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Automatically generates the missing `src/main.jsx` orchestration file to formally mount React 19 onto our index template container.

### AI Prompt
```text
Please look at our `src/` directory. We are missing the standard entry point execution file. 

Create a new file at `src/main.jsx` to anchor our React 19 app to our HTML tree layout. Use this exact source code structure:

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
```
## Repository Sync Checkpoint
git add .
git commit -m "Deploy src/main.jsx DOM mounting layer to render React tree layout structure"

## Prompt 4.4 — Synchronizing App.jsx with State Routing
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Completely rewrites `src/App.jsx` to eliminate rendering silence, hook up the state engine, and pull in the clean light-themed page views.

### AI Prompt
```text
Please open `src/App.jsx`. We need to completely rewrite it to manage our two main platform views ('portfolio' and 'forward-moves') along with our 6 specific inner target sub-views. Remove all leftover dark backgrounds or old CSS rules, and ensure the paths to our components match exactly.

Use this verified script architecture for `src/App.jsx`:

import React, { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PortfolioHome from './components/sections/PortfolioHome'
import ForwardMovesHome from './components/sections/ForwardMovesHome'
import CardDetailView from './components/sections/CardDetailView'
import './App.css'

export default function App() {
  const [view, setView] = useState('portfolio')

  // Render the correct layout view container text matching the user state selection
  const renderContent = () => {
    switch (view) {
      case 'portfolio':
        return <PortfolioHome setView="{setView}"/>
      case 'forward-moves':
        return <ForwardMovesHome setView="{setView}"/>
      case 'reskilling':
      case 'careers':
      case 'ai-career-scout':
      case 'resume-prep':
      case 'glossary':
      case 'comparison':
        return <CardDetailView setView="{setView}" type="{view}"/>
      default:
        return <PortfolioHome setView="{setView}"/>
    }
  }

  return (
    <div class="min-h-screen flex flex-col bg-[#F9F9FB] text-[#111827] antialiased">
      <Navbar currentView="{view}" setView="{setView}"/>
      <main class="flex-grow max-w-7xl w-full mx-auto px-6 py-12">
        {renderContent()}
      </main>
      <Footer/>
    </div>
  )
}
```
## Repository Sync Checkpoint
git add .
git commit -m "Completely rebuild src/App.jsx state engine logic to resolve blank display page"

## Prompt 4.5 — Purging Unknown Gradient Utility Classes
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Scans `src/index.css` to locate and fix the broken `to-white` utility token crash, substituting it with clean, compliant Tailwind CSS v4 layout properties.

### AI Prompt
```text
Please open `src/index.css`. The Tailwind CSS v4 compiler is throwing a compilation error because of an unknown utility class (`to-white`). 

Scan the file to locate any dynamic gradient utilities using `to-white` (for example, look inside our custom `.text-gradient` or `.text-royal-gradient` definition rule blocks). Change any broken `to-white` references to a standard valid layout property or explicitly use color values (like `to-transparent` or matching background values) so that the `@tailwindcss/vite` generation plugin compiles successfully without crashing.
```
## Repository Sync Checkpoint
git add .
git commit -m "Fix unknown to-white utility class to resolve Tailwind v4 compilation crash"

## Prompt 4.6 — Injecting Standard Tailwind v4 Directives
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Overwrites `src/index.css` to inject the official Tailwind v4 `@import "tailwindcss";` directive and configures clean utility components without compilation crashes.

### AI Prompt
```text
Please open `src/index.css`. We need to rewrite it completely to fix the Tailwind v4 build crash regarding 'font-sans'. 

Ensure that the top of the file explicitly imports Tailwind CSS using the new modern v4 syntax, and configure our custom color tokens and utility classes inside native CSS layers so the compiler reads them perfectly. 

Replace the contents of `src/index.css` with this exact structure:

@import "tailwindcss";

@theme {
  --color-brand-blue: #1e40af;
  --color-brand-purple: #7c3aed;
}

/* Custom Base Utilities */
.text-gradient {
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-royal-gradient {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Clean Brand Content Cards */
.card-lavender { background-color: #f5f3ff; border: 1px solid #e0d7ff; }
.card-blue { background-color: #eff6ff; border: 1px solid #dbeafe; }
.card-cream { background-color: #fffbeb; border: 1px solid #fef3c7; }
.card-mint { background-color: #f0fdf4; border: 1px solid #dcfce7; }
.card-violet { background-color: #faf5ff; border: 1px solid #f3e8ff; }
.card-teal { background-color: #f0fdfa; border: 1px solid #ccfbf1; }

```
## Repository Sync Checkpoint
git add .
git commit -m "Completely clean src/index.css and import Tailwind v4 modules natively to clear font-sans crash"

# Phase 5 — Core UI Theme & Layout Realignment

## Prompt 5.1 — Implementing Pristine Whites, Lilacs, and Isolated Routing
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Strips all blue elements, keeps the landing page completely clean, and configures the beautiful pastel-toned project hub.

### AI Prompt
```text
We want to completely update our application to match a high-end minimalist tech aesthetic: beautiful crisp whites, deep charcoal text, and soft lilac/pastel tokens. Please rewrite our core layout files to fix old path conflicts and clean up the design layout.

1. Overwrite `src/App.jsx` with this exact state router:
import React, { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PortfolioHome from './components/sections/PortfolioHome'
import ForwardMovesHome from './components/sections/ForwardMovesHome'
import CardDetailView from './components/sections/CardDetailView'

export default function App() {
  const [view, setView] = useState('home')

  const renderContent = () => {
    switch (view) {
      case 'home':
        return <PortfolioHome setView="{setView}"/>
      case 'forward-moves':
        return <ForwardMovesHome setView="{setView}"/>
      case 'comparison':
      case 'reskilling':
      case 'careers':
      case 'ai-career-scout':
      case 'resume-prep':
      case 'glossary':
        return <CardDetailView setView="{setView}" type="{view}"/>
      default:
        return <PortfolioHome setView="{setView}"/>
    }
  }

  return (
    <div class="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
      <Navbar currentView="{view}" setView="{setView}"/>
      <main class="flex-grow w-full mx-auto">
        {renderContent()}
      </main>
      <Footer/>
    </div>
  )
}

2. Overwrite `src/components/layout/Navbar.jsx`:
import React from 'react'

export default function Navbar({ currentView, setView }) {
  const isHome = currentView === 'home'

  return (
    <header class="bg-white border-b border-gray-100 sticky top-0 z-50 px-6 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
          {!isHome && <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">F.</div>}
          <span class="font-bold text-gray-900 tracking-tight text-lg">
            {isHome ? 'AITogetherNow' : 'Forward Moves'}
          </span>
        </div>
        <nav class="flex items-center gap-6 text-sm font-medium text-gray-600">
          {isHome ? (
            <>
              <button onClick={() => setView('forward-moves')} class="text-purple-600 hover:text-purple-700 font-bold transition-colors cursor-pointer">FORWARD MOVES AI</button>
              <button class="hover:text-gray-900 transition-colors cursor-pointer">CONTACT</button>
            </>
          ) : (
            <div class="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider">
              <button onClick={() => setView('home')} class="hover:text-purple-600 cursor-pointer">🏡 HOME</button>
              <button onClick={() => setView('forward-moves')} class="text-purple-600 cursor-pointer">DASHBOARD HUB</button>
              <button onClick={() => setView('comparison')} class="hover:text-purple-600 cursor-pointer">COMPARISON</button>
              <button onClick={() => setView('reskilling')} class="hover:text-purple-600 cursor-pointer">RESKILLING</button>
              <button onClick={() => setView('careers')} class="hover:text-purple-600 cursor-pointer">CAREERS</button>
              <button onClick={() => setView('ai-career-scout')} class="hover:text-purple-600 cursor-pointer">AI CAREER SCOUT</button>
              <button onClick={() => setView('resume-prep')} class="hover:text-purple-600 cursor-pointer">RESUME PREP</button>
              <button onClick={() => setView('glossary')} class="hover:text-purple-600 cursor-pointer">GLOSSARY</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

3. Overwrite `src/components/sections/PortfolioHome.jsx` (Pure Minimalist Landing):
import React from 'react'

export default function PortfolioHome({ setView }) {
  return (
    <div class="max-w-4xl mx-auto text-center py-20 px-6">
      <div class="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm">
        Enterprise AI Operations & Infrastructure
      </div>
      <h2 class="text-5xl md:text-6xl font-black text-gray-900 tracking-tight max-w-4xl mx-auto mb-6 leading-tight">
        Orchestrating Enterprise <br />
        <span class="text-gray-900">AI Implementation.</span>
      </h2>
      <p class="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
        Hi, I'm Yvonne. I leverage over a decade of enterprise systems analysis to architect, deploy, and scale advanced generative AI applications. I specialize in model integration, secure data pipeline orchestration, and end-to-end technical enablement.
      </p>
      <div class="flex justify-center mb-16">
        <button onClick={() => setView('forward-moves')} class="bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm tracking-wide px-8 py-4 rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
          EXPLORE FORWARD MOVES AI →
        </button>
      </div>
      <div class="max-w-md mx-auto bg-gray-50 border border-gray-100 rounded-2xl p-4 flex items-center gap-4">
        <button class="w-10 h-10 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center text-white transition-all cursor-pointer shadow-sm">
          <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <div class="flex-grow text-left">
          <div class="text-[10px] font-bold tracking-wider text-gray-400 uppercase">Audio Overview • 0:25</div>
          <div class="h-1 bg-gray-200 rounded-full mt-2 relative w-full"><div class="absolute left-0 top-0 h-full w-1/4 bg-purple-500 rounded-full"></div></div>
        </div>
        <div class="text-[10px] font-mono font-bold text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded">1x</div>
      </div>
    </div>
  )
}

4. Overwrite `src/components/sections/ForwardMovesHome.jsx` (Project Dashboard):
import React from 'react'

export default function ForwardMovesHome({ setView }) {
  const cards = [
    { type: 'comparison', title: 'Comparison Matrix', desc: 'Analyze key differences between legacy roles and AI career vectors side-by-side.', badge: 'COMING SOON', style: 'bg-indigo-50/50 border-indigo-100 text-indigo-700' },
    { type: 'ai-career-scout', title: 'AI Career Scout', desc: 'Consult with our real-time assistant regarding target metrics, cluster velocities, or upcoming pivots.', badge: 'COMING SOON', style: 'bg-amber-50/50 border-amber-100 text-amber-700' },
    { type: 'resume-prep', title: 'Resume Prep', desc: 'Anonymize professional trajectory rows securely and cross-evaluate matching algorithmic profiles.', badge: 'COMING SOON', style: 'bg-emerald-50/50 border-emerald-100 text-emerald-700' },
    { type: 'reskilling', title: 'Reskilling Portal', desc: 'Access curated technical learning modules, programs, and development sandboxes.', badge: null, style: 'bg-purple-50/50 border-purple-100 text-purple-700' },
    { type: 'careers', title: 'Careers', desc: 'Track live macro employment tracking datasets and macro regional hiring shifts.', badge: null, style: 'bg-blue-50/50 border-blue-100 text-blue-700' },
    { type: 'glossary', title: 'Glossary System', desc: 'Break down interface architecture jargon, infrastructure tags, and technical syntax definition data.', badge: null, style: 'bg-fuchsia-50/50 border-fuchsia-100 text-fuchsia-700' },
  ]

  return (
    <div class="w-full">
      <div class="w-full bg-amber-50 border-b border-amber-100 px-6 py-2 text-center text-xs font-medium text-amber-800">
        Sample Disclaimer: "Forward Moves AI is currently in its community-testing phase. To protect your privacy, please remove personal contact information from your resume before uploading."
      </div>
      <div class="max-w-6xl mx-auto px-6 py-12">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <div class="text-[10px] font-bold tracking-widest text-purple-600 uppercase mb-2">• Forward Moves USA</div>
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
            Step Into Your <span class="text-purple-600">AI-Driven Future.</span>
          </h2>
          <p class="text-gray-500 text-sm mb-6">Your bridge to a more fulfilling career. We connect your unique talents to the opportunities in the AI workforce.</p>
          <div class="max-w-xs mx-auto bg-gray-50 rounded-xl p-2 border border-gray-100 mb-6 flex items-center justify-center gap-2"><span class="text-xs">🔊 Audio Player Interface Mock</span></div>
          <button class="bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold px-6 py-3 rounded-lg shadow-sm">Get Started →</button>
        </div>
        <div class="text-center mb-8">
          <div class="text-xl mb-1">🧭</div>
          <h3 class="font-bold text-gray-900 text-xl">Explore What's Inside</h3>
          <p class="text-gray-400 text-xs mt-0.5">Select a path to begin your journey.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(c => (
            <div key={c.type} onClick={() => setView(c.type)} class={`${c.style} border rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-sm cursor-pointer relative`}>
              {c.badge && <span class="absolute top-4 right-4 bg-gray-200/60 text-gray-500 text-[9px] font-bold px-2 py-0.5 rounded-full">{c.badge}</span>}
              <h4 class="font-bold text-gray-900 text-base mb-1.5">{c.title}</h4>
              <p class="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```
## Repository Sync Checkpoint
git add .
git commit -m "Execute targeted color sweep, establish proper home routing context, and deploy aesthetic pastel cards"

# Phase 5.1 — Layout Margins & Footer Cleanup

## Prompt 5.2 — Restructuring Component Spacing and Purging Corporate Footer
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Fixes the squeezed elements and broken layout tracking, completely removes the heavy multi-column footer layout, and adds proper vertical breathing room.

### AI Prompt
```text
Please fix the broken margins and overlapping layout spacing visible in our layout views across `src/components/layout/Footer.jsx`, `src/components/sections/PortfolioHome.jsx`, and `src/components/sections/ForwardMovesHome.jsx`. 

Please execute these exact structural updates:

1. Completely Overwrite `src/components/layout/Footer.jsx`:
   - Delete the multi-column layout links, the platform categories, and the bright blue circular social media icons completely.
   - Replace it with a single, simple, ultra-clean centermaligned line of text with plenty of vertical padding:
     "© 2026 Forward Moves AI. All rights reserved."

2. Fix Overlapping and Margins on the Main Page (`src/components/sections/PortfolioHome.jsx`):
   - Wrap the main sections inside a clean, vertical layout stack using flexbox and proper spacing (`flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto px-6 py-16`).
   - Give the main button block and the audio player clear separation so they never overlap or collide, using native Tailwind spacing classes.

3. Fix Layout Margins on the Project Dashboard (`src/components/sections/ForwardMovesHome.jsx`):
   - Ensure the upper content section elements (the disclaimer, the hero title, the audio player mockup container, and the "Get Started" button) are cleanly stacked with distinct margins (`space-y-6`).
   - Add clean padding blocks above and below our "Explore What's Inside" section headers and expand the grid container gap structure (`gap-8`) so the pastel cards look spacious and beautiful.
```
## Repository Sync Checkpoint
git add .
git commit -m "Fix overlapping layout margins and completely purge extra multi-column corporate footer"

# Phase 5.2 — Pixel-Perfect Dashboard Structural Realignment

## Prompt 5.3 — Replicating Spacious Component Spacing from Image Reference
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Completely rewrites `ForwardMovesHome.jsx` to natively match the grid ratios, font weights, and spacing layout shown in `image_763b8d.png`.

### AI Prompt
```text
Please rewrite `src/components/sections/ForwardMovesHome.jsx` to perfectly match the spacious, balanced layout shown in `image_763b8d.png`. Avoid forcing elements into a cramped global wrapper—let the blocks flow down the page naturally with generous spacing and margins.

Implement this exact React component code structure:

import React from 'react'

export default function ForwardMovesHome({ setView }) {
  const cards = [
    { type: 'comparison', title: 'Comparison Matrix', desc: 'Analyze key differences between legacy roles and AI career vectors side-by-side.', badge: 'COMING SOON', icon: '⚖️' },
    { type: 'ai-career-scout', title: 'AI Career Scout', desc: 'Consult with our real-time assistant regarding target metrics, cluster velocities, or upcoming pivots.', badge: 'COMING SOON', icon: '🌐' },
    { type: 'resume-prep', title: 'Resume Prep', desc: 'Anonymize professional trajectory rows securely and cross-evaluate matching algorithmic profiles.', badge: 'COMING SOON', icon: '📄' },
    { type: 'reskilling', title: 'Reskilling Portal', desc: 'Access curated technical learning modules, programs, and development sandboxes.', badge: null, icon: '🎚️' },
    { type: 'careers', title: 'Careers', desc: 'Track live macro employment tracking datasets and macro regional hiring shifts.', badge: null, icon: '📊' },
    { type: 'glossary', title: 'Glossary System', desc: 'Break down interface architecture jargon, infrastructure tags, and technical syntax definition data.', badge: null, icon: '📁' },
  ]

  return (
    <div class="w-full bg-[#FAFBFD] min-h-screen pb-24">
      
      <div class="w-full bg-[#FFFDF6] border-b border-[#FBECC5] px-6 py-2.5 text-center text-[11px] font-normal text-[#D97706] tracking-wide">
        Sample Disclaimer: <span class="font-light text-[#78350F]">"Forward Moves AI is currently in its community-testing phase. To protect your privacy, please remove personal contact information from your resume before uploading."</span>
      </div>

      <div class="max-w-6xl mx-auto px-6">
        
        <div class="mt-12 mb-16 text-center bg-white border border-gray-100 rounded-3xl p-10 md:py-16 md:px-12 shadow-sm shadow-gray-100/40">
          <div class="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-purple-600 uppercase mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            Forward Moves USA
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 leading-none">
            Step Into Your <span class="text-purple-600">AI-Driven Future.</span>
          </h2>
          <p class="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 font-light">
            Your bridge to a more fulfilling career. We connect your unique talents to the opportunities in the AI workforce.
          </p>

          
          <div class="max-w-md mx-auto mb-8">
            <audio controls class="w-full h-10 rounded-full bg-gray-50 border border-gray-100 shadow-inner">
              <source src="#" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <button class="bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs font-bold px-8 py-3.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
            Get Started →
          </button>
        </div>

        
        <div class="text-center mb-12">
          <div class="text-xl mb-2">🧭</div>
          <h3 class="font-extrabold text-gray-900 text-2xl tracking-tight">Explore What's Inside</h3>
          <p class="text-gray-400 text-xs mt-1 font-light">Select a path to begin your journey.</p>
        </div>

        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(c => (
            <div 
              key={c.type} 
              onClick={() => setView(c.type)} 
              class="bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-gray-200/40 cursor-pointer relative flex flex-col justify-between group"
            >
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div class="w-8 h-8 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-sm shadow-inner group-hover:scale-105 transition-transform">
                    {c.icon}
                  </div>
                  {c.badge && (
                    <span class="bg-gray-100 text-gray-400 text-[8px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase">
                      {c.badge}
                    </span>
                  )}
                </div>
                <h4 class="font-bold text-gray-900 text-base mb-1.5 tracking-tight group-hover:text-purple-600 transition-colors">
                  {c.title}
                </h4>
                <p class="text-gray-400 text-xs leading-relaxed font-light">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```
## Repository Sync Checkpoint
git add .
git commit -m "Execute spacious visual dashboard layout update matching image_763b8d.png structure"

## Prompt 5.4 — Matching Minimalist Layout Spacing from Home Reference
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Rewrites `PortfolioHome.jsx` and refines our layout constraints to match the clean presentation shown in `image_76387e.png`.

### AI Prompt
```text
Please rewrite `src/components/sections/PortfolioHome.jsx` and refine our dynamic navbar tracking layout to perfectly replicate the minimalist design shown in `image_76387e.png`. 

Implement these exact layout specs:

1. Update the Main Portfolio Home UI (`src/components/sections/PortfolioHome.jsx`):
   - Wrap everything in an ultra-clean layout flow with open vertical breathing room (`min-h-[80vh] flex flex-col justify-center items-center py-20 px-6`).
   - The top pill element must read exactly: "• ENTERPRISE AI OPERATIONS & INFRASTRUCTURE" inside a light-blue accent theme (`bg-[#EEF2FF] text-[#3B82F6]`).
   - The main header text must be exactly: "Orchestrating Enterprise AI Implementation." Make sure "AI Implementation." uses your vibrant royal blue tone (`text-[#1D4ED8]`) while everything else stays deep charcoal.
   - The paragraph content should stay light gray, airy, and centered (`text-[#6B7280] max-w-2xl text-center leading-relaxed mb-10`).
   - Center the crisp black action button below: "EXPLORE FORWARD MOVES AI →" (`bg-[#030712] hover:bg-[#111827] text-white text-xs font-bold tracking-wider px-8 py-4 rounded-xl shadow-sm`).
   - Implement the exact spacious custom audio player track container shown underneath the button layout.

2. Update the Footer Component Layout (`src/components/layout/Footer.jsx`):
   - Make it a single, edge-to-edge row that sits nicely at the bottom of the viewport with a tiny font size (`text-[11px] text-[#9CA3AF] px-12 py-6 border-t border-gray-50 bg-white flex items-center justify-between`).
   - Bottom Left Text: "© 2026 Yvonne Martinez. Hosted via Firebase Infrastructure."
   - Bottom Right Links: "Explore Platform    Get in Touch"

3. Update Left Identity Brand Text (`src/components/layout/Navbar.jsx`):
   - When the active state view is 'home', the top-left element must render a subtle blue circle dot alongside the text logo: "Yvonne Martinez".
```
## Repository Sync Checkpoint
git add .
git commit -m "Configure pixel-perfect minimalist layout for PortfolioHome matching image_76387e.png layout"

## Prompt 5.5 — Injecting Layout Margins and Re-Compiling Pastel Tokens
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Fixes the zero-margin layout squash, injects proper vertical breathing room between buttons, and re-maps the beautiful lilac and pastel tints cleanly.

### AI Prompt
```text
Please open `src/App.jsx`, `src/components/sections/PortfolioHome.jsx`, and `src/components/sections/ForwardMovesHome.jsx`. Our pages are completely broken: everything is crashing right against the outer left and right edges of the browser screen with zero margin, and our beautiful pastel tints have disappeared.

Please fix this layout with these exact code implementations:

1. Fix Global Application Container Wrap (`src/App.jsx`):
   - Ensure the outer wrapping layout container has consistent horizontal padding and max-widths so text can never touch the screen edge: `min-h-screen flex flex-col bg-white text-gray-900 px-8 sm:px-12 max-w-7xl mx-auto`.

2. Repair Spacing and Elements in the Main Landing Page (`src/components/sections/PortfolioHome.jsx`):
   - Wrap the hero elements in a deep vertical stack layout (`flex flex-col items-center justify-center space-y-10 text-center py-20`).
   - Give the "EXPLORE FORWARD MOVES AI" button separate, absolute margins (`my-6`) so it never collides or sits right on top of the audio player container text track.

3. Repair Layout Margins and Pastel Tints in Dashboard (`src/components/sections/ForwardMovesHome.jsx`):
   - Ensure the outer dashboard layer applies generous structural bounding padding (`w-full py-6 px-4 md:px-8 space-y-12`).
   - Add specific separation spacing (`space-y-6`) inside the main header container card so the audio track player and the "Get Started" button never mash together.
   - Re-enable our custom beautiful light pastel card classes by assigning clear, explicit styling properties to the 6 matrix containers:
     * Comparison Matrix Card: Use a soft light indigo pastel (`bg-[#F0F2FE] border border-[#DDDFFF]`)
     * AI Career Scout Card: Use a soft light warm amber/cream pastel (`bg-[#FFFBEB] border border-[#FEF3C7]`)
     * Resume Prep Card: Use a soft light mint pastel (`bg-[#F0FDF4] border border-[#DCFCE7]`)
     * Reskilling Portal Card: Use a gorgeous soft lilac/lavender (`bg-[#F5F3FF] border border-[#E0D7FF]`)
     * Careers Card: Use a crisp light sky pastel (`bg-[#EFF6FF] border border-[#DBEAFE]`)
     * Glossary System Card: Use a beautiful light fuchsia pastel (`bg-[#FDF4FF] border border-[#F5D0FE]`)
```
## Repository Sync Checkpoint
git add .
git commit -m "Restore beautiful pastel color themes and fix edge-to-edge layout margin crashes"

## Prompt 5.6 — Injecting Curated Color Blocks from Image References
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Completely maps the premium violet gradient and soft card glow parameters from `image_75cb4c.jpg` and `image_75cb2b.png` straight into our global CSS definitions.

### AI Prompt
```text
Please rewrite our global CSS rules and update our main layout views to implement the premium, high-end color themes shown in `image_75cb4c.jpg` and `image_75cb2b.png`. Remove any remaining flat colors or harsh generic borders, replacing them with these exact design assets:

1. Update Style Variables (`src/index.css`):
   - Background Canvas: Create an elegant, ultra-light background gradient that incorporates a soft, glowing hint of violet (`bg-gradient-to-tr from-[#FFFFFF] via-[#FBFBFE] to-[#F5F3FF]`).
   - Define `.text-infinite-violet`: Implement the exact gorgeous text gradient from image_75cb4c.jpg for emphasized header items (`background: linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #A855F7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`).

2. Re-Skin Dashboard Grid Cards (`src/components/sections/ForwardMovesHome.jsx`):
   - Refactor the 6 grid containers to utilize these exact custom pastel background tints and soft border values to match the spacious layout of image_75cb2b.png:
     * Reskilling Portal (Skill Studio): Soft airy lavender (`bg-[#F6F5FE] border border-[#E9E6FD]`)
     * Careers Dashboard: Soft airy sky pastel (`bg-[#F3F8FF] border border-[#E0EEFF]`)
     * AI Career Scout (Community): Soft warm peach/cream (`bg-[#FFFBF4] border border-[#FFF3E0]`)
     * Resume Prep (Interviewing): Soft pastel mint/teal (`bg-[#F2FDF9] border border-[#DFFCEF]`)
     * Comparison Matrix: Soft lavender variant (`bg-[#F8F7FF] border border-[#EDE9FE]`)
     * Glossary System: Soft pastel orchid (`bg-[#FAFAFF] border border-[#F1E9FE]`)
   - Add clean internal padding blocks (`p-8`) and gentle hover transformations to all cards so they remain elegant and scannable.

3. Synchronize Main Home Page Hero Text (`src/components/sections/PortfolioHome.jsx`):
   - Apply our new `.text-infinite-violet` class directly onto the emphasized text row ("AI Implementation.") so it glows beautifully against the clean white portfolio header.
```
## Repository Sync Checkpoint
git add .
git commit -m "Apply premium violet text gradient and beautiful airy pastel card canvas layers"

## Prompt 5.7 — Synchronizing Production Theme Variables and Content Grid Arrays
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Syncs global font kits, configures custom Tailwind rules, patches page margins, and fully populates the authentic portfolio resource metrics.

### AI Prompt
```text
We want to align our local React files with our verified production markup architecture, design assets, and functional dataset links. Please update our global styling sheets and views to execute this structural synthesis flawlessly.

1. Overwrite our Global Style Rules (`src/index.css`):
   - Add the explicit Google Font imports for 'Playfair Display' and 'DM Sans' right at the top of the file.
   - Configure our modern Tailwind theme properties to utilize these typography family extensions, custom keyframes, and animations:
     * `@import "tailwindcss";`
     * Set up our typography shortcuts inside the root theme layout configuration block:
       --font-sans: "DM Sans", sans-serif;
       --font-serif: "Playfair Display", serif;
   - Embed our custom structural glass utility filters, mesh hero layer rules, and liftoff hover transition classes:
     .hero-mesh {
       background: radial-gradient(ellipse 80% 60% at 70% 20%, rgba(167, 139, 250, 0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(196, 181, 253, 0.14) 0%, transparent 55%), #FAFABA;
     }
     .glass {
       background: rgba(255, 255, 255, 0.72);
       backdrop-filter: blur(18px);
       -webkit-backdrop-filter: blur(18px);
       border: 1px solid rgba(228, 228, 231, 0.6);
     }
     .card-shadow {
       box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
     }
     .hover-lift {
       transition: transform 0.22s ease, box-shadow 0.22s ease;
     }
     .hover-lift:hover {
       transform: translateY(-3px);
       box-shadow: 0 20px 48px -12px rgba(124, 58, 237, 0.18);
     }

2. Re-Skin and Spacing Update for the Project Dashboard View (`src/components/sections/ForwardMovesHome.jsx`):
   - Ensure the main content blocks utilize the premium `.hero-mesh` background token class with ample padding limits (`max-w-6xl mx-auto px-6 py-16`) so items never crash into the screen edge.
   - Refactor the card matrix loop to map directly onto these four elegant brand tool variants verbatim with their correct text details:
     * Card 1: 'Skill Studio' (Icon: '⚡', Background: 'bg-purple-50/60 border-purple-100 hover:bg-purple-100/60') -> Description text: "AI certifications and technical training across 9 partner portals."
     * Card 2: 'Careers' (Icon: '🌍', Background: 'bg-blue-50/60 border-blue-100 hover:bg-blue-100/60') -> Description text: "Mission-driven opportunities across Health, Climate, FinTech & more."
     * Card 3: 'Community' (Icon: '🤝', Background: 'bg-orange-50/60 border-orange-100 hover:bg-orange-100/60') -> Description text: "Networking, mentorship, and the alumni collective."
     * Card 4: 'Interviewing' (Icon: '🎯', Background: 'bg-emerald-50/60 border-emerald-100 hover:bg-emerald-100/60') -> Description text: "Interview prep, frameworks, and behavioral excellence."
   - Ensure clicking the cards cleanly routes deeper into their respective content views or details rows.

3. Refine Minimalist Title Text on the Main Landing View (`src/components/sections/PortfolioHome.jsx`):
   - Wrap our main title text using our clean premium serif font family (`font-serif font-normal`) and match the stylized phrase color emphasis:
     "Fuel your infinite growth." (Render "infinite growth." as italicized text colored with our signature violet tone: `italic text-purple-600 font-normal`).

```
## Repository Sync Checkpoint
git add .
git commit -m "Synchronize structural font kits, custom animations, mesh headers, and complete card link parameters"

# Phase 6 — High-End Aesthetic Automation (Vibe Coding Edition)

## Prompt 6.1 — Injecting Executive Spacing Framework and Custom Pastel Datasets
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Automates your single-page setup using a luxury 1-inch padding framework, imports custom typography layers, and wires your premium pastel tool matrix dynamically with zero overlapping text.

### AI Prompt
```text
We are vibe coding our master portfolio deployment. Please open our application setup scripts (`src/App.jsx`, `src/components/sections/PortfolioHome.jsx`, and `src/components/sections/ForwardMovesHome.jsx`). We need to completely rewrite these layout layers to enforce a premium, executive aesthetic with expansive whitespace margins and elegant pastel cards. 

Please execute these design parameters flawlessly:

1. Luxury 1-Inch Border Framework (Padding & Clearance):
   - Wrap both `PortfolioHome.jsx` and `ForwardMovesHome.jsx` root elements in an extensive padding boundary (`p-24 md:p-32 w-full max-w-7xl mx-auto`). This guarantees at least 1-2 inches of pure breathing room so text never touches the edge of the page workspace.
   - Enforce distinct vertical layout stacks (`space-y-10` or generous bottom margins like `mb-12`) across your header, descriptive paragraphs, CTA buttons, and audio player blocks so elements never overlap or collide.

2. Typography Sheet & Asset Sync:
   - Ensure the 'Playfair Display' and 'DM Sans' Google Fonts are pulled in cleanly.
   - Map your layout headers to utilize the premium serif font syntax (`font-serif font-normal tracking-tight`).
   - The main title on our landing page must read exactly: "Fuel your infinite growth." Make sure "infinite growth." is fully italicized and styled with our beautiful violet accent text color (`italic text-purple-600 font-normal`).

3. Porting the Interactive 4-Card Portal Grid:
   - Inside `ForwardMovesHome.jsx`, dynamically map the card collection layout to output these four specific core modules with their authentic text parameters and custom pastel background shades:
     * Card 1: 'Skill Studio' (Icon: '⚡', Background: 'bg-[#F5F3FF] border border-[#E0D7FF] text-purple-700') -> Description text: "AI certifications and technical training across 9 partner portals."
     * Card 2: 'Careers' (Icon: '🌍', Background: 'bg-[#EFF6FF] border border-[#DBEAFE] text-blue-700') -> Description text: "Mission-driven opportunities across Health, Climate, FinTech & more."
     * Card 3: 'Community' (Icon: '🤝', Background: 'bg-[#FFFBEB] border border-[#FEF3C7] text-amber-700') -> Description text: "Networking, mentorship, and the alumni collective."
     * Card 4: 'Interviewing' (Icon: '🎯', Background: 'bg-[#F0FDF4] border border-[#DCFCE7] text-emerald-700') -> Description text: "Interview prep, frameworks, and behavioral excellence."
   - Set up comfortable internal padding blocks (`p-8`) and clean lifting transformations (`hover-lift`) on the card grid so they layout beautifully.
```
## Repository Sync Checkpoint
git add .
git commit -m "Successfully run Phase 6 vibe coding layout automation patch"

## Prompt 6.2 — Enforcing 1-Inch Page Frame Spacing Core
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Clears old restricted parent containers in `App.jsx` and injects an unconstrained layout wrap that forces text away from the screen edge.

### AI Prompt
```text
Please open `src/App.jsx`. We need to fix the margin issue permanently by changing the global parent wrapper that sits around our home landing page and project hub page. 

Completely replace the contents of `src/App.jsx` with this exact structure, which guarantees a minimum 1-inch luxury layout padding frame across all screen viewports:

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
        return <PortfolioHome setView="{setView}"/>
      case 'forward-moves':
        return <ForwardMovesHome setView="{setView}"/>
      default:
        return <PortfolioHome setView="{setView}"/>
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-900 antialiased">
      
      <Navbar currentView="{view}" setView="{setView}"/>
      
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-16 md:px-24 py-16 box-border">
        {renderContent()}
      </main>
      
      
      <Footer currentView="{view}" setView="{setView}"/>
    </div>
  )
}
```
## Repository Sync Checkpoint
git add .
git commit -m "Force root 1-inch wrapper limits inside App.jsx to unlock wide layout margins"

## Prompt 6.3 — Separating Viewport Frameworks and Unsquishing the Dashboard
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Clears the aggressive global padding from `App.jsx` and applies individual, native whitespace properties directly to the home page and dashboard views respectively.

### AI Prompt
```text
Our project dashboard page layout is completely squished and needs serious structural cleanup. The global padding inside `App.jsx` is choking it. Let's fix this by moving layout containment logic inside the individual page components where they belong.

Please execute these changes across our layout files:

1. Update Global Outer Frame (`src/App.jsx`):
   - Change the `<main>` element to be completely unconstrained: `<main className="flex-grow w-full">`. 
   - This ensures the home page and the dashboard can control their own spacious margins individually.

2. Maintain Main Page Spacing (`src/components/sections/PortfolioHome.jsx`):
   - Ensure the home landing elements remain perfectly framed by keeping its custom container spacing intact: `className="w-full max-w-5xl mx-auto px-16 md:px-24 py-16 text-center flex flex-col items-center justify-center bg-white"`.

3. Unsquish and Expand Dashboard Hub (`src/components/sections/ForwardMovesHome.jsx`):
   - Change the root wrapper of this dashboard page to a wide, open grid layout canvas: `className="w-full bg-[#fafafa] min-h-screen py-12 px-6 md:px-12"`. This gives the cards, headers, and navigation room to breathe without clamping them into a tight center container.
   - For the main internal text area and header container card layout blocks, utilize `className="max-w-6xl mx-auto w-full space-y-12"`. This keeps everything lined up perfectly with an elegant widescreen presentation.
```
## Repository Sync Checkpoint
git add .
git commit -m "Force root 1-inch wrapper limits inside App.jsx to unlock wide layout margins"

## Prompt 6.4 — Mobile Hamburger Menu Integration
Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.

Intent: Upgrades Navbar.jsx with an interactive state to dynamically open and close a full-height slide-out mobile menu panel when the user taps the three lines on small screens.

### AI Prompt
Please open src/components/layout/Navbar.jsx. We need to implement a fully functional, highly responsive mobile hamburger menu drawer specifically for cell phones and small browser viewports.

Modify the component structure to follow this interactive React state design pattern:

1. Add Toggle State Tracking:
   - Import useState at the top of the file and initialize a visibility tracker: const [isOpen, setIsOpen] = useState(false)

2. Configure Desktop vs Mobile Navigation Breaks:
   - On large screens (desktop), keep the horizontal tab list layout visible exactly as it is now by utilizing Tailwind's hidden md:flex utility rules.
   - On small screens (mobile/cell phones), hide that long row and display an interactive hamburger button containing the three stacked lines (hidden max-md:block or md:hidden). Clicking this button must toggle setIsOpen(!isOpen).

3. Render the Expandable Slide-Out Overlay Side Menu Drawer:
   - When isOpen evaluates to true, render a clean, high-end slide-out vertical container overlay panel mimicking our design specifications:
     * Include a prominent "X" close icon button at the top right corner that safely reverts setIsOpen(false).
     * Display the full link menu array stacked vertically in a generous spacing format with clear typography sizing: "🏡 HOME", "DASHBOARD HUB", "COMPARISON", "RESKILLING", "CAREERS", "AI CAREER SCOUT", "RESUME PREP", "GLOSSARY".
     * Tapping any of these navigation link items must cleanly update our central layout view state AND auto-close the drawer via setIsOpen(false).
## Repository Sync Checkpoint
git add .
git commit -m "Implement responsive hamburger toggle button state and mobile overlay side menu drawer"

## Prompt 6.5 — Stripping Hub Links from Main View Mobile Drawer and Desktop Bars
* Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.

Intent: Modifies the conditional rendering loops inside Navbar.jsx so that the main landing view isolates "Forward Moves AI" as the sole interactive option across desktop and cell phone menus.

### AI Prompt
```text
Please open src/components/layout/Navbar.jsx. We need to refine our navigation routing logic to match our isolated entry-hub strategy. 

When the central application state view is set to 'home' (the main personal portfolio landing page), the navigation menu must contain ONLY ONE target item across all screen sizes. Please implement these specific updates:

1. Desktop Navigation Limit (md:flex view):
   - Clear out any leftover links like "CONTACT" or submenu pieces while on the home view. Render exactly one link button reading: "FORWARD MOVES AI".

2. Mobile Hamburger Drawer Limit (isOpen overlay panel):
   - Modify the mobile menu drawer code so that if a user clicks the three lines while on the home landing page, the panel does not display the long grid of internal sub-platform links (COMPARISON, RESKILLING, CAREERS, AI CAREER SCOUT, etc.).
   - Instead, the drawer panel on the home view must display ONLY ONE single link action stacked nicely below the logo header text block: "FORWARD MOVES AI". Clicking this option must cleanly shift our state to 'forward-moves' and automatically close the panel (setIsOpen(false)).

3. Maintain Dashboard Full Expansion:
   - Ensure that when the active view state is 'forward-moves' or any deeper internal project view layer, the full utility selection remains completely intact in both desktop bars and mobile drawer toggles so users can navigate the project tools freely.
```
## Repository Sync Checkpoint
git add .
git commit -m "Isolate navigation menus to display Forward Moves AI as the sole link on the main landing view"


## Prompt 6.6 — Mapping Click Listeners to View States in Navbar Components
* **Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.
* **Intent: Modifies the navigation layout array logic inside Navbar.jsx to explicitly invoke setView('forward-moves') and setIsOpen(false) upon interaction.

### AI Prompt
```text
Please open src/components/layout/Navbar.jsx. Currently, when a user clicks on the "FORWARD MOVES AI" option inside our horizontal menu or our mobile slide-out drawer, nothing happens because the click handler is missing.

Let's activate the routing hook. Ensure that both the desktop menu button and the mobile menu drawer button are updated with this exact interactive click wrapper:

onClick={() => {
  setView('forward-moves');
  setIsOpen(false);
}}

Make sure this state transition functions perfectly for:
1. The desktop horizontal navigation link layout container.
2. The interactive text item stacked inside our cell phone menu drawer overlay panel.

This ensures that the instant a user taps the text link, the system switches our main page context to our project view, clears the grey screen layer, and closes the mobile side drawer panel smoothly!
```
## Repository Sync Checkpoint
git add .
git commit -m "Hook up click event listeners inside Navbar menu strings to unlock active routing transitions"

## Prompt 6.7 — Locking Down Navbar and App.jsx Communication
* **Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.

* **Intent: Synchronizes both App.jsx and Navbar.jsx simultaneously to guarantee the setView function prop drops cleanly into the navigation click listeners.
## Repository Sync Checkpoint
git add .
git commit -m "Lock down airtight App and Navbar prop states to unlock responsive mobile drawer routing links"

### AI Prompt
Please open src/App.jsx and src/components/layout/Navbar.jsx simultaneously. Our side menu mobile links are currently static and frozen because the parent state functions are not passing down cleanly as component props.

Let's overwrite both files to establish an airtight React communication bridge:

1. Update the Component Wrapper inside src/App.jsx:
   - Ensure the Navbar instance explicitly declares BOTH state tracking attributes like this:
     <Navbar currentView={view} setView={setView} />

2. Overwrite the Interactive Core inside src/components/layout/Navbar.jsx:
   - Ensure the component explicitly accepts the parameters at the top declaration row:
     export default function Navbar({ currentView, setView }) { ... }
   
   - Update BOTH the horizontal desktop menu button and the mobile cell phone drawer overlay link text to run this exact combined operation hook:
     onClick={() => {
       setView('forward-moves');
       setIsOpen(false);
     }}

   - Add standard pointer styling (cursor-pointer select-none) to the clickable link wrapper tags so the browser knows they are active structural links.

## Repository Sync Checkpoint
git add .
git commit -m "Lock down airtight App and Navbar prop states to unlock responsive mobile drawer routing links"

## Prompt 6.8 — Overwriting Navbar with Explicit Button Elements
* ** Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.

* ** Intent: Strips out abstract loops or array mappings in Navbar.jsx and implements raw, direct React <button> tags with hardcoded onClick events.
### AI Prompt
Please completely rewrite src/components/layout/Navbar.jsx with a clean, un-mapped button layout to ensure the navigation clicks work perfectly on cell phones.

Use this exact, clean component code:

import React, { useState } from 'react'

export default function Navbar({ currentView, setView }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-[150] bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <button 
          onClick={() => { setView('home'); setIsOpen(false); }} 
          className="flex items-center gap-2 font-sans font-bold text-zinc-900 cursor-pointer text-base bg-transparent border-none p-0"
        >
          <span className="w-2 h-2 rounded-full bg-purple-600"></span>
          Yvonne Martinez
        </button>

        <div className="hidden md:flex items-center gap-6">
          {currentView === 'home' ? (
            <button 
              onClick={() => setView('forward-moves')}
              className="text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-purple-600 transition-colors cursor-pointer"
            >
              Forward Moves AI
            </button>
          ) : (
            <button 
              onClick={() => setView('home')}
              className="text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-purple-600 transition-colors cursor-pointer"
            >
              🏡 Home
            </button>
          )}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-900 cursor-pointer bg-transparent border-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <span className="text-2xl font-light block w-6 text-center">✕</span>
          ) : (
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className="w-full h-0.5 bg-zinc-900 block rounded"></span>
              <span className="w-4/5 h-0.5 bg-zinc-900 block rounded"></span>
              <span className="w-full h-0.5 bg-zinc-900 block rounded"></span>
            </div>
          )}
        </button>
      </div>

      {/* Full Screen Slide-Out Mobile Overlay Menu Panel */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-zinc-200 shadow-xl z-[200] md:hidden animate-fadeIn">
          <div className="flex flex-col p-8 space-y-6">
            
            <button
              onClick={() => {
                setView('forward-moves');
                setIsOpen(false);
              }}
              className="w-full text-left font-sans font-bold text-base tracking-wide text-zinc-800 hover:text-purple-600 py-3 border-b border-zinc-50 cursor-pointer block bg-transparent"
            >
              FORWARD MOVES AI
            </button>

          </div>
        </div>
      )}
    </nav>
  )
}
## Repository Sync Checkpoint
git add .
git commit -m "Completely rebuild Navbar with explicit HTML button handlers to ensure mobile routing events execute"

## Prompt 6.9 — Cleaning Up Hanging Tags in Navbar.jsx
* ** Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.

* ** Intent: Completely clears out potential syntax errors and delivers a clean, fully functional compiled navigation component.
### AI Prompt
Please completely replace the content of src/components/layout/Navbar.jsx to resolve any potential unexpected token compiler errors. Ensure every single HTML tag and JavaScript bracket matches perfectly.

Use this clean, verified code:

import React, { useState } from 'react';

export default function Navbar({ currentView, setView }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-[150] bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left Side: Brand Identity */}
        <button 
          onClick={() => { setView('home'); setIsOpen(false); }} 
          className="flex items-center gap-2 font-sans font-bold text-zinc-900 cursor-pointer text-base bg-transparent border-none p-0"
        >
          <span className="w-2 h-2 rounded-full bg-purple-600"></span>
          Yvonne Martinez
        </button>

        {/* Right Side: Desktop Menu (Visible on Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {currentView === 'home' ? (
            <button 
              onClick={() => setView('forward-moves')}
              className="text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Forward Moves AI
            </button>
          ) : (
            <button 
              onClick={() => setView('home')}
              className="text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Home
            </button>
          )}
        </div>

        {/* Right Side: Hamburger Trigger (Visible on Mobile Phones) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-900 cursor-pointer bg-transparent border-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <span className="text-2xl font-light block w-6 text-center">✕</span>
          ) : (
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className="w-full h-0.5 bg-zinc-900 block rounded"></span>
              <span className="w-4/5 h-0.5 bg-zinc-900 block rounded"></span>
              <span className="w-full h-0.5 bg-zinc-900 block rounded"></span>
            </div>
          )}
        </button>
      </div>

      {/* Dropdown Mobile Drawer Panel Layer */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-zinc-200 shadow-xl z-[200] md:hidden">
          <div className="flex flex-col p-8 space-y-6">
            <button
              onClick={() => {
                setView('forward-moves');
                setIsOpen(false);
              }}
              className="w-full text-left font-sans font-bold text-base tracking-wide text-zinc-800 hover:text-purple-600 py-3 border-b border-zinc-50 cursor-pointer block bg-transparent"
            >
              FORWARD MOVES AI
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
## Repository Sync Checkpoint
git add .
git commit -m "Resolve token compiler crash and restore responsive click events inside Navbar.jsx"

## Prompt 6.10 — Enforcing Sticky Headers and Restoring the 4 Core Cards
* ** Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.

* ** Intent: Fixes mobile headers, purges secondary accent background leakage, and provisions unified layouts across active view components.
### AI Prompt
Please open src/components/layout/Navbar.jsx and src/components/sections/ForwardMovesHome.jsx. We want to apply specific layout updates to ensure visual harmony: ensure the top navigation pins correctly on scroll, any unauthorized yellow backgrounds are wiped out, and content tracks follow strict presentation dimensions.

Please apply these exact code updates:

1. Force Permanent Sticky Navbar (src/components/layout/Navbar.jsx):
   - Ensure the outer navigation wrapper forces a fixed position that stays pinned during scrolling across all viewports, especially cell phones: className="sticky top-0 z-[200] bg-white/90 backdrop-blur-md border-b border-zinc-100".

2. Purge Yellow Background & Sync the 4 Categories (src/components/sections/ForwardMovesHome.jsx):
   - Locate and completely remove the random yellow container layer class (bg-[#FAFABA] or any yellow/amber utilities). The entire page background canvas must remain clean: className="w-full bg-[#FAFAFA] min-h-screen py-12 px-6 md:px-12".
   - Update the card grid loop to display exactly the 4 main categories from our official directory code block layout, utilizing our premium custom pastel shades:
     * Card 1: 'Skill Studio' (Icon: '⚡', Style: 'bg-purple-50/60 border-purple-100 text-purple-700') -> Desc: "AI certifications and technical training across 9 partner portals."
     * Card 2: 'Careers' (Icon: '🌍', Style: 'bg-blue-50/60 border-blue-100 text-blue-700') -> Desc: "Mission-driven opportunities across Health, Climate, FinTech & more."
     * Card 3: 'Community' (Icon: '🤝', Style: 'bg-orange-50/60 border-orange-100 text-orange-700') -> Desc: "Networking, mentorship, and the alumni collective."
     * Card 4: 'Interviewing' (Icon: '🎯', Style: 'bg-emerald-50/60 border-emerald-100 text-emerald-700') -> Desc: "Interview prep, frameworks, and behavioral excellence."
   - Adjust the grid display format to stack perfectly on mobile and side-by-side on desktop layouts: className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full mt-12".
## Repository Sync Checkpoint
git add .
git commit -m "Fix sticky navbar scroll tracking, delete yellow backdrop anomaly, and reset card grid to 4 core modules"

## Prompt 6.11 — Overwriting Dashboard Grid with Explicit Authentic Cards
* ** Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.

* ** Intent: Hardcodes your precise 6-card multi-view dashboard module matrix directly, completely bypassing obsolete looping metrics or layout constraints.

### AI Prompt
Please open src/components/sections/ForwardMovesHome.jsx. We need to rewrite this file to implement our explicit 6-card matrix, renaming the core dynamic card to 'Skill Studio' and ensuring there are absolutely zero yellow utility background leaks anywhere in the code.

Completely replace the component file with this clean architecture:

import React from 'react';

export default function ForwardMovesHome({ setView }) {
  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-6 md:px-12 flex flex-col items-center">
      
      {/* Upper Content Presentation Headers */}
      <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
        <div className="text-[10px] font-bold tracking-widest text-purple-600 uppercase">• Forward Moves USA</div>
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 tracking-tight">Explore What's Inside</h2>
        <p className="text-gray-500 text-sm font-light">Select a path to begin your journey.</p>
      </div>

      {/* Authentic Category Layout Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mx-auto">
        
        {/* Card 1: Comparison Matrix */}
        <div className="bg-white border border-zinc-100 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[190px] relative">
          <span className="absolute top-4 right-4 bg-zinc-100 text-zinc-500 text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Coming Soon</span>
          <div>
            <span className="text-2xl block mb-3">⚖️</span>
            <h4 className="font-sans font-bold text-base text-zinc-900 mb-2">Comparison Matrix</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">
              Analyze key differences between legacy roles and AI career vectors side-by-side.
            </p>
          </div>
        </div>

        {/* Card 2: AI Career Scout */}
        <div className="bg-white border border-zinc-100 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[190px] relative">
          <span className="absolute top-4 right-4 bg-zinc-100 text-zinc-500 text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Coming Soon</span>
          <div>
            <span className="text-2xl block mb-3">🌐</span>
            <h4 className="font-sans font-bold text-base text-zinc-900 mb-2">AI Career Scout</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">
              Consult with our real-time assistant regarding target metrics, cluster velocities, or upcoming pivots.
            </p>
          </div>
        </div>

        {/* Card 3: Resume Prep */}
        <div className="bg-white border border-zinc-100 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[190px] relative">
          <span className="absolute top-4 right-4 bg-zinc-100 text-zinc-500 text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Coming Soon</span>
          <div>
            <span className="text-2xl block mb-3">📄</span>
            <h4 className="font-sans font-bold text-base text-zinc-900 mb-2">Resume Prep</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">
              Anonymize professional trajectory rows securely and cross-evaluate matching algorithmic profiles.
            </p>
          </div>
        </div>

        {/* Card 4: Skill Studio (Fully Interactive View-State Router) */}
        <div 
          onClick={() => setView('skill-studio')}
          className="bg-white border border-purple-100 hover:border-purple-300 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/5 flex flex-col justify-between min-h-[190px] cursor-pointer group animate-fadeIn"
        >
          <div>
            <span className="text-2xl block mb-3 group-hover:scale-110 transition-transform origin-left">📖</span>
            <h4 className="font-sans font-bold text-base text-zinc-900 group-hover:text-purple-600 transition-colors mb-2">Skill Studio</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">
              Access curated technical learning modules, programs, and development sandboxes.
            </p>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-purple-600 flex items-center gap-1 mt-4">
            Open Studio Modules →
          </div>
        </div>

        {/* Card 5: Careers */}
        <div className="bg-white border border-zinc-100 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[190px]">
          <div>
            <span className="text-2xl block mb-3">📊</span>
            <h4 className="font-sans font-bold text-base text-zinc-900 mb-2">Careers</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">
              Track live macro employment tracking datasets and macro regional hiring shifts.
            </p>
          </div>
        </div>

        {/* Card 6: Glossary System */}
        <div className="bg-white border border-zinc-100 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-h-[190px]">
          <div>
            <span className="text-2xl block mb-3">📁</span>
            <h4 className="font-sans font-bold text-base text-zinc-900 mb-2">Glossary System</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">
              Break down interface architecture jargon, infrastructure tags, and technical syntax definition data.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

## Repository Sync Checkpoint
git add .
git commit -m "Hardcode authentic 6-card grid with active Skill Studio interactive entry point"

# Phase 7 — Skill Studio Interactive Sub-Page Generation
## Prompt 7.1 — Injecting Dynamic Filtering Component and Unified Curriculum Assets
* ** Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.

* ** Intent: Completely replaces src/components/sections/SkillStudioView.jsx to parse HTML course nodes and provider tracking datasets natively with clean, plain hero elements.

# AI Prompt
Please open `src/components/sections/SkillStudioView.jsx`. We need to completely overwrite this file to render our modern React curriculum studio layout, integrating our fresh Google AI, NotebookLM system grounding links, and course data structures exactly.

Ensure the code uses this precise verified layout model:

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
    { id: 'a5', p: 'anthropic', e: '📚', n: 'AI Fluency For Educators', d: 'AI methodology tailored explicitly for academic architectures, lecture planning, and administrative frameworks.', u: 'https://anthropic.skilljar.com/ai-fluency-for-educators', r: 'prompt', dur: '2 Hours' },
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
    { id: 'm1', p: 'microsoft', e: '🔬', n: 'Episode 1: Intro to Gen AI', d: 'Introduction to Generative AI mechanisms and basic multi-prompt Transformer architectures.', u: 'https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/introduction-to-generative-ai-and-llms-generative-ai-for-beginners', r: 'prompt analyst', dur: '4 Hours' },
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
    { id: 'u3', p: 'udemy', e: '🛡️', n: 'AI Governance Professional (AIGP)', d: 'Risk management and compliance for LLM deployments.', u: 'https://verizonreskilling.udemy.com/course/ai-governance-professional-aigp-2025/', r: 'analyst', dur: '5 Hours' },
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

## Prompt 7.2 — Registering Active View States Inside the Core Shell Router
* ** Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.

* ** Intent: Overwrites src/App.jsx to natively bind our active multi-view context state routines.

# AI Prompt
Please open `src/App.jsx`. We need to import our interactive sub-page modules and mount them into our central router layer.

Please rewrite `src/App.jsx` to match this exact clean tree structure:

import React, { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PortfolioHome from './components/sections/PortfolioHome'
import ForwardMovesHome from './components/sections/ForwardMovesHome'
import SkillStudioView from './components/sections/SkillStudioView'
import CareersView from './components/sections/CareersView'
import GlossaryView from './components/sections/GlossaryView'

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
      case 'careers':
        return <CareersView setView={setView} />
      case 'glossary':
        return <GlossaryView setView={setView} />
      default:
        return <PortfolioHome setView={setView} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 antialiased">
      <Navbar currentView={view} setView={setView} />
      <main className="flex-grow w-full">
        {renderContent()}
      </main>
      <Footer currentView={view} setView={setView} />
    </div>
  )
}

## Prompt 7.3 — Upgrading Navbar Navigation Header Links
Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.

Intent: Syncs links across header items to support smooth routing for all initialized features.

# AI Prompt
Please open `src/components/layout/Navbar.jsx`. We need to update our navigation layout menu. Ensure both our horizontal link grouping bar and our mobile hamburger side-drawer menu expose active, stylized buttons for our project tools when currentView !== 'home'.

Ensure the navigation link stack renders explicit triggers for:
1. HOME: onClick={() => { setView('home'); setIsOpen(false); }}
2. DASHBOARD HUB: onClick={() => { setView('forward-moves'); setIsOpen(false); }}
3. SKILL STUDIO: onClick={() => { setView('skill-studio'); setIsOpen(false); }}
4. GLOSSARY: onClick={() => { setView('glossary'); setIsOpen(false); }}

Ensure that clicking the text logo on the far left remains globally configured to return the system viewport safely back to 'home' at all times.

## Repository Sync Checkpoint
git add .
git commit -m "Execute Phase 7 layout integration and deploy structured Skill Studio sub-page"

## Phase 8 — Glossary System Integration & Header Unification
Prompt 8.1 — Creating the Glossary Reference Matrix Component
Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.

Intent: Generates a state-driven searchable terminology card workspace matching the unboxed, layout style parameters of your other project views.

# AI Prompt
Please create a new dedicated component file at src/components/sections/GlossaryView.jsx. This component handles our vocabulary dataset natively with an integrated live keyword filtering system and matches our plain and simple text header styles.

Populate the file with this clean, complete React component code structure:

import React, { useState, useMemo } from 'react';

export default function GlossaryView() {
  const [searchQuery, setSearchQuery] = useState('');

  const terms = [
    { id: 'genai', icon: '🧠', title: 'Generative AI', label: 'Cognitive AI', desc: 'AI capable of creating completely fresh text, code, images, synthesis briefs, or data structures by programmatically learning complex underlying statistical weights from massive training datasets.' },
    { id: 'llm', icon: '⚙️', title: 'LLM', label: 'Architecture', desc: 'Large Language Model — the multi-layer transformer-based cognitive neural engine built with billions of floating parameters that handles reasoning, instruction logic parsing, and conversational system outputs.' },
    { id: 'rag', icon: '⚡', title: 'RAG', label: 'Grounding Layer', desc: 'Retrieval-Augmented Generation. Optimization pattern that programmatically fetches relevant factual blocks from an external verified corpus or enterprise dataset to ground an LLM\'s response, completely halting hallucinations.' },
    { id: 'prompting', icon: '📝', title: 'Prompting', label: 'Interface Logic', desc: 'The structural methodology of crafting contextual parameters, precise system instructions, and structural data constraints to cleanly guide AI outputs toward predictable professional behaviors.' },
    { id: 'finetuning', icon: '🛠️', title: 'Fine-Tuning', label: 'Optimization', desc: 'The process of updating the weights of an existing pretrained base model by training it on a targeted, specialized dataset to drastically optimize accuracy for a highly specific industry domain track.' },
    { id: 'embedding', icon: '💾', title: 'Embedding', label: 'Vector Spaces', desc: 'A dense mathematical vector representation of data (like strings or files) that maps semantic meaning into high-dimensional vector spaces, letting databases run semantic searches based on intent instead of text matches.' },
    { id: 'token', icon: '🔢', title: 'Token', label: 'Computational Metrics', desc: 'The fundamental unit of data processing inside large text transformers. Represents fragments of strings, averaging roughly 4 characters or 0.75 words in standard English prose compositions.' },
    { id: 'agent', icon: '🤖', title: 'Agent', label: 'Automation Architecture', desc: 'An autonomous layer of software powered by an LLM core that can dynamically observe its environment, make execution step plans, call external APIs or tools, and loop until it solves a complex goal from scratch.' }
  ];

  const filteredTerms = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return terms;
    return terms.filter(t => 
      t.title.toLowerCase().includes(query) || 
      t.label.toLowerCase().includes(query) || 
      t.desc.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-16 px-6 md:px-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* PLAIN AND SIMPLE HERO HEADER */}
        <div className="w-full pt-6 pb-12 text-left border-b border-zinc-100 mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            <span className="w-4 h-0.5 bg-blue-600 rounded"></span>
            AI terminology
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-zinc-900 tracking-tight leading-none mb-4">
            Glossary
          </h1>
          <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-3xl">
            Standard terminology for navigating technical and strategic discussions in the generative AI space.
          </p>
        </div>

        {/* CONCEPT SEARCH INPUT BLOCK */}
        <div className="w-full bg-white border border-zinc-100 rounded-2xl p-6 card-shadow">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
            🔍 Interactive Concept Search
          </label>
          <p className="text-xs text-zinc-400 font-light mb-4">
            Type keywords to instantaneously isolate architectural mechanics or model operations criteria.
          </p>
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search concepts (e.g., RAG, LLM, Agent)..."
            className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3.5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-purple-300 transition-colors"
          />
        </div>

        {/* Industry External References */}
        <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-zinc-600 font-light">
            <strong>External Repositories:</strong> Explore verified industry reference frameworks to augment your tactical domain technical vocabulary context metrics.
          </p>
          <div className="flex gap-3 flex-wrap flex-shrink-0">
            <a href="https://www.ibm.com/topics/artificial-intelligence/glossary" target="_blank" rel="noopener noreferrer" className="bg-white border border-zinc-200 text-zinc-800 text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl hover:border-purple-300 transition-colors">📘 IBM AI Glossary ↗</a>
            <a href="https://developers.google.com/machine-learning/glossary" target="_blank" rel="noopener noreferrer" className="bg-white border border-zinc-200 text-zinc-800 text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl hover:border-purple-300 transition-colors">🌐 Google ML Glossary ↗</a>
          </div>
        </div>

        {/* METRIC COUNTER */}
        <div className="text-left">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Terminology Reference Matrix • {filteredTerms.length} Terms
          </h3>
        </div>

        {/* TERMINOLOGY GRID */}
        {filteredTerms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {filteredTerms.map((t) => (
              <div key={t.id} className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[190px]">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center text-sm shadow-inner">{t.icon}</span>
                    <h4 className="font-sans font-bold text-base text-zinc-900 tracking-tight">{t.title}</h4>
                  </div>
                  <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded uppercase tracking-wide inline-block mb-3">
                    {t.label}
                  </span>
                  <p className="text-zinc-500 text-xs font-light leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full text-center py-12 bg-white border border-zinc-100 border-dashed rounded-2xl text-zinc-400 font-light text-sm">
            No matching terminologies found. Try a different keyword!
          </div>
        )}

      </div>
    </div>
  );
}
## Prompt 8.2 — Integrating Dynamic Routing Events for the Glossary System
Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.

Intent: Connects the active single-page router interaction on your platform's Glossary card block to load the newly formatted view script seamlessly.

# AI Prompt
Please open src/components/sections/ForwardMovesHome.jsx. We need to wire up the interactive click handler on our Glossary System container (Card 6) to jump smoothly into our new view state.

Locate the Glossary System markup block near the bottom of the grid layout and verify it handles click parameters explicitly like this:

<div 
  onClick={() => setView('glossary')}
  className="bg-white border border-zinc-100 hover:border-purple-200 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer group"
>
  <div>
    <span className="text-2xl block mb-3 group-hover:scale-110 transition-transform origin-left">📁</span>
    <h4 className="font-sans font-bold text-base text-zinc-900 group-hover:text-purple-600 transition-colors mb-2">Glossary System</h4>
    <p className="text-zinc-500 text-xs font-light leading-relaxed">
      Break down interface architecture jargon, infrastructure tags, and technical syntax definition data.
    </p>
  </div>
</div>

## Repository Sync Checkpoint
git add .
git commit -m "Deploy complete interactive GlossaryView terminology framework and sync unified view headers"

# Phase 9 — Environmental Configuration & Security Architecture
## Prompt 9.1 — Activating the Master Git Exclusions File
* ** Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.

* ** Intent: Automatically generates a comprehensive .gitignore file at the root directory to permanently shield active credential modules and heavy background node folders from leaking online.

# AI Prompt
Please look at our root project workspace directory. Generate a brand new `.gitignore` file exactly at the root level. Ensure it explicitly lists `.env`, `.env.local`, and `node_modules/` to completely secure our local environment parameters against accidental remote repository tracking.

## Custom Grounding Asset — .gitignore Blueprint Configuration
Ensure the file contains this complete protection script to mask credentials and configuration variables verbatim:

# AI-YM-PORTFOLIO/.gitignore

# ── SECRET KEY PROTECTION ──
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
*.env
*.secret

# ── DEPENDENCY EXCLUSIONS ──
node_modules/
jspm_packages/
.npm/
.pnpm-store/

# ── BUILD OUTPUTS ──
dist/
dist-ssr/
build/
out/
.vtex-cache

# ── SYSTEM & IDE RESIDUALS ──
.DS_Store
Thumbs.db
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.swp

## Safety Net Diagnostic Routine
To make absolutely sure your environment files are hidden from Git's tracking radar before you push to production, run these diagnostic check lines inside your VS Code terminal:

PowerShell
## Step A: Instantiate an un-tracked workspace dummy secret variable container
New-Item .env -Force

## Step B: Ask Git what files are waiting to be tracked
git status

🛡️ Verification Criteria: .env must not appear anywhere under the Untracked files: section output.

## Repository Sync Checkpoint
git add .gitignore
git commit -m "Deploy root gitignore security matrix to protect environmental configuration profiles"

# Prompt 9.2 — Initializing Safe Environment Instantiations
* ** Where to paste: Run the powershell initialization scripts inside your workspace terminal, then update the target values.

* ** Intent: Permanently segregates private deployment environment variables out of components code logic.

## Local Initialization Scripts
# Create the local private variable environment file
New-Item .env -Force

## Production Variable Configuration
Open your new root .env file and use it to store variables out of plain sight:

### Place any public domain config parameters safely isolated here:
VITE_DEPLOY_ENVIRONMENT="production"

## Prompt 9.3 — Web Security Protocols & Hosting Headers Audits
* ** Where to paste: Your VS Code AI Composer panel (Ctrl + I) in Agent/Project mode.

* ** Intent: Outlines standard network, browser-level HTTP responses, and hosting configuration rules to prevent cross-origin scripting vulnerabilities.
# AI Prompt
Please analyze our web hosting infrastructure parameters. Draft a template configuration standard for our hosting deployment scripts ensuring that modern security headers (CSP, HSTS, and Content-Type constraints) are systematically documented for web-facing infrastructure layers.

# Web Defenses Reference Criteria Standard
When preparing infrastructure profiles for custom enterprise hosting deployment parameters, enforce these four criteria elements systematically:

1. Content Security Policy (CSP): Restricts script resource origins to block Cross-Site Scripting (XSS) code injections.

2. X-Frame-Options: Locked to DENY or SAMEORIGIN to mitigate clickjacking attacks inside hidden iframe elements.

3. X-Content-Type-Options: Enforced via nosniff to protect the browser against file type sniffing extensions.

4. Strict-Transport-Security (HSTS): Restricts interactions exclusively to encrypted TLS/HTTPS lines.

## Repository Sync Checkpoint
git add .
git commit -m "Establish permanent web response security preference and document edge-header protection metrics"

# Phase 10 — Memory Engine Rules & Instruction Settings
Global Security Instruction Token
To lock your step-zero safety constraint directly into the long-term context memory engine layer, submit this direct declaration row statement:
* ** Systemic AI Behavior Baseline Updates
1. Automated Variable Scaffolding: Any subsequent utility integration recommendation will dynamically separate private credentials from client component markup layers.

2. Proactive Repository Audit Warnings: Installation prompts will automatically feature validation scripts to prevent accidental pushes of configuration files.

3. Frontend Exposure Warnings: Subpage tools requiring private API tokens will automatically recommend secure backend proxy pipeline designs.

🏗️ Step 1: Compile the Clean Production Build
Before uploading, you need to compress your React components and Tailwind v4 directives into high-performance static files. Open your terminal in VS Code at your root directory (AI-YM-PORTFOLIO) and run:

PowerShell
# Step A: Lock down your local package trees
npm install

# Step B: Compile your source files into static assets
npm run build

🎯 What this does: Vite scans your codebase, optimizes your images/audio, strips out development debugging tools, and bundles everything into a pristine production-ready folder named dist/ at your project root.

☁️ Step 2: Push Your Assets to Firebase Hosting
Now, use the Firebase CLI engine to upload your newly compiled dist/ folder straight to your live cloud architecture slot. Execute these three command steps sequentially:

1. Authenticate Your Terminal Session
Make sure your local system environment holds your developer account clearance tokens:

PowerShell
firebase login
(If you are already logged in, the terminal will safely display your active account details).

2. Verify Active Project Linkage
Ensure your local code is pointing to the correct cloud destination:

PowerShell
firebase projects:list
Look at your project list output and confirm that the indicator matches your active production instance.

🛠️ Step 1: Re-authenticate Firebase
Run the re-authentication command inside your VS Code terminal to generate a fresh cloud connection token:

PowerShell
firebase login --reauth
🌐 What will happen: A secure Google login window will pop up automatically inside your browser. Sign in using your yvonne.martinez@aitogethernow.com developer account profile and click Allow to pass authorization clearance back to your local machine.