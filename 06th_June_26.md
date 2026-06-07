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

# Prompt 1.2 — Populating Boilerplate JSX Code
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

# Repository Sync Checkpoint
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
# Repository Sync Checkpoint
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
# Repository Sync Checkpoint
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
# Repository Sync Checkpoint
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
# Repository Sync Checkpoint
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
# Repository Sync Checkpoint
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
# Repository Sync Checkpoint
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

# Phase 5.3 — Pixel-Perfect Minimalist Portfolio Realignment

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

# Phase 5.3 — Edge Padding & Pastel Theme Restoration

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

# Phase 5.4 — Premium Violet & Airy Pastel Token Realignment

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

# Phase 5.5 — Core Brand Assets & Live Content Synthesis

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

# Phase 6.3 — Global Margin Override Implementation

## Prompt 6.4 — Enforcing 1-Inch Page Frame Spacing Core
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

# Phase 6.4 — Individual Page Layout Optimization

## Prompt 6.5 — Separating Viewport Frameworks and Unsquishing the Dashboard
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

# Phase 6.4 — Individual Page Layout Optimization

## Prompt 6.5 — Separating Viewport Frameworks and Unsquishing the Dashboard
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
git commit -m "Optimize viewport layout containment, unsquish the dashboard page, and lock in elegant spacing"

# Phase 6.5 — Mobile Hamburger Menu Integration

## Prompt 6.6 — Injecting Side-Drawer Toggle State into Navbar
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Upgrades `Navbar.jsx` with an interactive state to dynamically open and close a full-height slide-out mobile menu panel when the user taps the three lines on small screens.

### AI Prompt
```text
Please open `src/components/layout/Navbar.jsx`. We need to implement a fully functional, highly responsive mobile hamburger menu drawer specifically for cell phones and small browser viewports.

Modify the component structure to follow this interactive React state design pattern:

1. Add Toggle State Tracking:
   - Import `useState` at the top of the file and initialize a visibility tracker: `const [isOpen, setIsOpen] = useState(false)`

2. Configure Desktop vs Mobile Navigation Breaks:
   - On large screens (desktop), keep the horizontal tab list layout visible exactly as it is now by utilizing Tailwind's `hidden md:flex` utility rules.
   - On small screens (mobile/cell phones), hide that long row and display an interactive hamburger button containing the three stacked lines (`hidden max-md:block` or `md:hidden`). Clicking this button must toggle `setIsOpen(!isOpen)`.

3. Render the Expandable Slide-Out Overlay Side Menu Drawer:
   - When `isOpen` evaluates to true, render a clean, high-end slide-out vertical container overlay panel mimicking our design specifications:
     * Include a prominent "X" close icon button at the top right corner that safely reverts `setIsOpen(false)`.
     * Display the full link menu array stacked vertically in a generous spacing format with clear typography sizing: "🏡 HOME", "DASHBOARD HUB", "COMPARISON", "RESKILLING", "CAREERS", "AI CAREER SCOUT", "RESUME PREP", "GLOSSARY".
     * Tapping any of these navigation link items must cleanly update our central layout view state AND auto-close the drawer via `setIsOpen(false)`.
```
## Repository Sync Checkpoint
git add .
git commit -m "Implement responsive hamburger toggle button state and mobile overlay side menu drawer"

# Phase 6.7 — Root Navigation Link Isolation

## Prompt 6.8 — Stripping Hub Links from Main View Mobile Drawer and Desktop Bars
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Modifies the conditional rendering loops inside `Navbar.jsx` so that the main landing view isolates "Forward Moves AI" as the sole interactive option across desktop and cell phone menus.

### AI Prompt
```text
Please open `src/components/layout/Navbar.jsx`. We need to refine our navigation routing logic to match our isolated entry-hub strategy. 

When the central application state view is set to 'home' (the main personal portfolio landing page), the navigation menu must contain ONLY ONE target item across all screen sizes. Please implement these specific updates:

1. Desktop Navigation Limit (`md:flex` view):
   - Clear out any leftover links like "CONTACT" or submenu pieces while on the home view. Render exactly one link button reading: "FORWARD MOVES AI".

2. Mobile Hamburger Drawer Limit (`isOpen` overlay panel):
   - Modify the mobile menu drawer code so that if a user clicks the three lines while on the home landing page, the panel does not display the long grid of internal sub-platform links (COMPARISON, RESKILLING, CAREERS, AI CAREER SCOUT, etc.).
   - Instead, the drawer panel on the home view must display ONLY ONE single link action stacked nicely below the logo header text block: "FORWARD MOVES AI". Clicking this option must cleanly shift our state to 'forward-moves' and automatically close the panel (`setIsOpen(false)`).

3. Maintain Dashboard Full Expansion:
   - Ensure that when the active view state is 'forward-moves' or any deeper internal project view layer, the full utility selection remains completely intact in both desktop bars and mobile drawer toggles so users can navigate the project tools freely.
```
## Repository Sync Checkpoint
git add .
git commit -m "Isolate navigation menus to display Forward Moves AI as the sole link on the main landing view"

# Phase 6.8 — Side Menu Routing Interactivity Fix

## Prompt 6.9 — Mapping Click Listeners to View States in Navbar Components
* **Where to paste:** Your VS Code AI Composer panel (`Ctrl + I`) in Agent/Project mode.
* **Intent:** Modifies the navigation layout array logic inside `Navbar.jsx` to explicitly invoke `setView('forward-moves')` and `setIsOpen(false)` upon interaction.

### AI Prompt
```text
Please open `src/components/layout/Navbar.jsx`. Currently, when a user clicks on the "FORWARD MOVES AI" option inside our horizontal menu or our mobile slide-out drawer, nothing happens because the click handler is missing.

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
