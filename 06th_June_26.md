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