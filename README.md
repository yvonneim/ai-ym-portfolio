# Yvonne Martinez — Enterprise AI Operations Playbook

An enterprise-grade AI portfolio tracking repository, configuration blueprint, and operations playbook designed for orchestrating premium, high-performance client interface solutions.

---

## 🎯 What is this Project About? (Layman's Terms)

Imagine wanting to transition into a career in Artificial Intelligence but feeling overwhelmed by complicated jargon, not knowing which skills are actually in demand, or struggling to find credible, free courses. 

This project serves as a digital career launchpad called **Forward Moves AI** (a core branch of Yvonne Martinez's unified portfolio platform). It is engineered as a clean, hyper-fast, mobile-friendly environment designed to guide individuals step-by-step into the modern AI workforce. 

Instead of searching the web aimlessly, users arrive at a unified Dashboard Hub that offers four core, high-impact career transition tools:
* **📖 Skill Studio:** A personalized digital classroom that curates top-tier, free AI training modules from trusted providers like Google and Anthropic. Users can choose their target path (e.g., Prompt Architect or AI Systems Developer) and check off completed courses as they learn.
* **📊 Careers:** A live job-market radar that tracks real-time hiring shifts and maps out emerging career paths, helping users target high-velocity sectors like HealthTech, ClimateTech, and FinTech.
* **🌐 AI Career Scout:** A real-time virtual career coach. Powered by **Google's Gemini Pro API**, users can ask highly specific questions about emerging job markets, regional workforce velocities, and technical skill gaps, or receive personalized advice on how to pivot their existing professional experience into AI domains.
* **📁 Glossary System:** A simple, searchable translator that demystifies confusing tech terms (like "RAG," "Tokens," or "Embeddings") and explains them in everyday English.

---

## 🛠️ How We Created It (The Vibe Coding Revolution)

Building a single-page website that loads instantly, handles complex chat interfaces, and renders search queries in milliseconds traditionally required years of computer science background. Instead of writing every line of layout syntax and application logic manually, this repository was engineered using a progressive **AI Pair-Programming Framework** known as **Vibe Coding**.

Here is the exact suite of languages and tools we utilized to create the platform:

### 1. The Full-Stack Polyglot Engine (Languages We Used)
* **JavaScript (ES6+) & JSX:** The core operational engine of our application. We leveraged JavaScript to build out the client-side state machine, process asynchronous browser API calls, handle user interface events, and compute dynamic search metrics in real time.
* **Python:** Used in our AI research sandbox, backend scripting pipelines, and automation data structures. Python scripts handle data parsing, prompt tuning evaluation protocols, and pre-processing pipeline checks before deploying structural constraints to our live cloud infrastructure.
* **HTML5:** Provides the semantic foundational tree and baseline root entry point layout structure for DOM parsing.
* **Modern CSS & CSS Variables:** Serves as the primary global token dictionary and styling baseline. We leveraged deep variable tables to establish reusable design presets, light-tint borders, and layout properties natively parsed by compiled utility classes.

### 2. The Core AI Development Stack
* **Gemini Code Assist (VS Code Extension):** Our primary natural language workspace orchestrator. By installing the official *Gemini Code Assist* tool inside VS Code, we used regular conversational English to edit, refactor, and link multiple files across our workspace simultaneously using Agent mode.
* **Google AI Studio:** The rapid prototyping dashboard where we tested our system prompts, configured safety thresholds, and acquired our production model API keys securely.
* **Firebase & Google Cloud Platform (GCP):** Firebase served as our continuous deployment environment. Because Firebase is natively powered by Google Cloud, our serverless hosting and back-end proxies execute seamlessly on premium Google infrastructure.
* **Firebase CLI (`firebase-tools`):** The command-line engine used to bundle, compile, and push our local files directly live onto custom domain web servers.

### 3. Frontend Architecture (React 19 & Tailwind CSS v4)
We built the interface using **React 19** for high-speed dynamic rendering. For styling, we utilized **Tailwind CSS v4**, a cutting-edge design engine. This allowed us to construct a clean, spacious, minimalist layout—using soft pastel theme borders, plenty of white space, and subtle hover animations that make the site feel premium and natural to navigate.

### 4. The Smart Navigation System (History API)
Traditional websites reload entirely when you click a link, resulting in slow load times. Single-page applications, however, often break the browser's native "Back" and "Forward" buttons, causing user frustration. To solve this, we vibe-coded a **custom History-State Router**. When a user moves from the Homepage to the Skill Studio or Glossary, the app instantly swaps out the view in milliseconds while secretly updating the address bar—ensuring native browser navigation works flawlessly without reloading the page.

### 5. Bulletproof Security & Isolated Serverless AI Routing
When connecting a client web app to intelligent LLM backends like Gemini, exposing private API keys directly in front-end browser logs is a massive security hazard. We structured this platform to follow a **Secure Proxy Pattern**. 
Instead of the user's browser talking directly to third-party endpoints, it communicates with an isolated serverless tier (**Firebase Cloud Functions** running on **Google Cloud**). This backend layer appends hidden environment configuration secrets, manages token consumption limits, and executes **CORS (Cross-Origin Resource Sharing) Defensive Measures**, ensuring credentials are secure and completely insulated from front-end exposure.

---

## 🧭 Table of Contents
- [Yvonne Martinez — Enterprise AI Operations Playbook](#yvonne-martinez--enterprise-ai-operations-playbook)
  - [🎯 What is this Project About? (Layman's Terms)](#-what-is-this-project-about-laymans-terms)
  - [🛠️ How We Created It (The Vibe Coding Revolution)](#️-how-we-created-it-the-vibe-coding-revolution)
    - [1. The Full-Stack Polyglot Engine (Languages We Used)](#1-the-full-stack-polyglot-engine-languages-we-used)
    - [2. The Core AI Development Stack](#2-the-core-ai-development-stack)
    - [3. Frontend Architecture (React 19 \& Tailwind CSS v4)](#3-frontend-architecture-react-19--tailwind-css-v4)
    - [4. The Smart Navigation System (History API)](#4-the-smart-navigation-system-history-api)
    - [5. Bulletproof Security \& Isolated Serverless AI Routing](#5-bulletproof-security--isolated-serverless-ai-routing)
  - [🧭 Table of Contents](#-table-of-contents)
  - [Architectural Diagrams](#architectural-diagrams)
    - [Client-Side State \& Browser History Engine](#client-side-state--browser-history-engine)
    - [Secured Enterprise Proxy Architecture](#secured-enterprise-proxy-architecture)
    - [Prerequisites \& Requirements](#prerequisites--requirements)
  - [Installation Instructions](#installation-instructions)
    - [Terminal Step 1: Clone the Repository](#terminal-step-1-clone-the-repository)
    - [Terminal Step 2: Install Package Dependencies](#terminal-step-2-install-package-dependencies)
    - [Terminal Step 3: Run the Local Development Environment](#terminal-step-3-run-the-local-development-environment)
  - [Usage Examples](#usage-examples)
    - [Terminal Step A: Launch the Sandboxed Hot-Reload Server](#terminal-step-a-launch-the-sandboxed-hot-reload-server)
    - [Terminal Step B: Compile Static Optimization Builds](#terminal-step-b-compile-static-optimization-builds)
    - [Terminal Step C: Preview Compiled Output Locally](#terminal-step-c-preview-compiled-output-locally)
  - [Phase 1 — Project Initialization \& Folder Scaffolding](#phase-1--project-initialization--folder-scaffolding)
    - [Prompt 1.1 — Building the Core Directory Scaffold](#prompt-11--building-the-core-directory-scaffold)
    - [Terminal Step A: Folder Setup \& Repository Initiation](#terminal-step-a-folder-setup--repository-initiation)
    - [Prompt 1.2 — Populating Boilerplate JSX Code](#prompt-12--populating-boilerplate-jsx-code)
    - [🤖 AI Composer System Prompt:](#-ai-composer-system-prompt)
  - [Repository Sync Checkpoint](#repository-sync-checkpoint)
  - [Phase 2 — Tailwind v4 \& Global Styling (Custom Brand Identity)](#phase-2--tailwind-v4--global-styling-custom-brand-identity)
    - [Prompt 2.1 — Brand Typography and Custom Card Tokens](#prompt-21--brand-typography-and-custom-card-tokens)
    - [🤖 AI Composer System Prompt:](#-ai-composer-system-prompt-1)
  - [Repository Sync Checkpoint](#repository-sync-checkpoint-1)

---

## Architectural Diagrams

### Client-Side State & Browser History Engine
```plaintext
                    [User Interacts with UI Trigger / Navbar]
                                       │
                                       ▼
                     [handleViewChange(nextView) Executed]
                                       │
                ┌──────────────────────┴──────────────────────┐
                ▼                                             ▼
     [setView(nextView) Called]                   [window.history.pushState]
  (Re-renders App.jsx Tree View)                 (Updates Browser URL Path)
                │                                             │
                ▼                                             ▼
   ┌──────────────────────────┐                  ┌──────────────────────────┐
   │ 'home'          =>  /    │                  │  Preserves History Stack │
   │ 'forward-moves' =>  /fm  │                  │  for seamless native     │
   │ 'skill-studio'  =>  /ss  │                  │  browser back / forward  │
   └──────────────────────────┘                  └──────────────────────────┘

```
### Secured Enterprise Proxy Architecture

Secured Enterprise Proxy Architecture
Plaintext
                                    CLIENT PERIMETER (DOM)
 ┌────────────────────────────────────────────────────────────────────────────────────────┐
 │  [Client Viewport] ───────────► [Dispatches Fetch Request]                             │
 │         ▲                                    │                                         │
 └─────────┼────────────────────────────────────┼─────────────────────────────────────────┘
           │                                    │
           │ (Returns Clean Payload)            │ (HTTPS POST Payload - NO Key Exposure)
           │                                    ▼
 ┌─────────┼──────────────────────────────────────────────────────────────────────────────┐
 │  [Cloud Functions Sandbox] ──► [Appends SECURE_API_SECRET From Environment Values]     │
 │                                              │                                         │
 │                                              ▼                                         │
 │  [Proxy Routing Agent] ◄─────────────────────┘                                         │
 │         │                                                                              │
 │         │ (Authorized API Call via HTTPS TLS)                                          │
 │         ▼                                                                              │
 │  [Target External Endpoint] (e.g., Google LLM / Airtable Databases)                    │
 │                                                                                        │
 │                                   SECURED SERVER PERIMETER                             │
 └────────────────────────────────────────────────────────────────────────────────────────┘

### Prerequisites & Requirements
Ensure your system environment matches these target parameters before initializing setup:  

* ** Operating System: Windows 10/11 (PowerShell), macOS (Zsh Terminal), or Linux.  
* ** Node.js Environment: Version v18.0.0 or higher (v20.x LTS strongly recommended).  
* ** Package Manager: npm (packaged with Node.js) or yarn.  
* ** Git Setup: Configured CLI with target remote authorizations.  
* ** Hosting Command Tools: Firebase CLI (npm install -g firebase-tools).  

## Installation Instructions
Follow these steps to deploy and structure your local workspace sandbox:  

### Terminal Step 1: Clone the Repository
* ** Bash
git clone [https://github.com/your-username/ai-ym-portfolio.git](https://github.com/your-username/ai-ym-portfolio.git)
cd ai-ym-portfolio

### Terminal Step 2: Install Package Dependencies
* ** Bash
npm install

### Terminal Step 3: Run the Local Development Environment
* ** Bash
npm run dev

## Usage Examples
Quick reference scripts for managing development and production server builds:  
### Terminal Step A: Launch the Sandboxed Hot-Reload Server
* ** Bash
npm run dev

  Live test server is hosted at http://localhost:5173.  
  
### Terminal Step B: Compile Static Optimization Builds
  * ** Bash
  npm run build

  Compiles static production structures cleanly inside the /dist destination folder.  

### Terminal Step C: Preview Compiled Output Locally
  * ** Bash
  npm run preview
  
## Phase 1 — Project Initialization & Folder Scaffolding   
  
### Prompt 1.1 — Building the Core Directory Scaffold   
  
* ** Execution Location: Local System OS Terminal pointed at your target directory root (C:\AI_Portfolio\ai-ym-portfolio).  
  
* ** Intent: Generates standard folder configurations and initializes baseline git commit records.  
 
### Terminal Step A: Folder Setup & Repository Initiation
* ** PowerShell
* ** Create folder matrices natively
mkdir src/components/layout, src/components/ui, src/components/sections, src/context, src/hooks, src/utils, src/assets -Force

* ** Initialize tracking and scaffold boilerplate file markers
New-Item src/components/layout/Navbar.jsx, src/components/layout/Footer.jsx, src/context/ThemeContext.jsx -Force

* ** Stage baseline layout records
git init
git add .
git commit -m "Initial commit: Empty project architecture and workspace files"
  
### Prompt 1.2 — Populating Boilerplate JSX Code

* ** Execution Location: VS Code AI Composer panel (Ctrl + I / Cmd + I) set to Project or Agent mode running Gemini Code Assist.  

* ** Intent: Generates basic functional structures and mounts them to the root entry point.  

### 🤖 AI Composer System Prompt:
* ** Plaintext

I have initialized our folder architecture and generated empty files for Navbar.jsx, Footer.jsx, and ThemeContext.jsx. 

Please analyze our project workspace and perform the following code generation operations:
1. Populate src/context/ThemeContext.jsx with a fully functional React context provider that manages a 'light' vs 'dark' mode string state, persisting the preference inside the browser's localStorage.
2. Populate src/components/layout/Navbar.jsx with a modern, responsive navigation container utilizing mobile responsive flex layouts, a simple text logo, a theme toggle button hooked to our theme context, and basic navigation links.
3. Populate src/components/layout/Footer.jsx with a clean structural layout displaying a dynamic copyright year script and social link icons.
4. Open src/App.jsx, clear its current placeholder code, import our new layout elements, and wrap the layout components cleanly inside our Theme Provider.

Ensure all file imports match our structural directories flawlessly and output complete, production-ready code.

## Repository Sync Checkpoint
* ** PowerShell
git add .
git commit -m "Complete Phase 1 architecture setup"

## Phase 2 — Tailwind v4 & Global Styling (Custom Brand Identity)
### Prompt 2.1 — Brand Typography and Custom Card Tokens
* ** Execution Location: VS Code AI Composer / Chat panel (Ctrl + I) leveraging Gemini Code Assist.  

* ** Intent: Configures the global style entry sheet with customized Tailwind CSS v4 design variables.

### 🤖 AI Composer System Prompt:
* ** Plaintext
We are using Tailwind CSS v4, which configures design tokens directly inside the main CSS entry point using CSS variables. 

Please locate and open src/index.css. Completely rewrite it to implement our premium light-themed tech aesthetic exactly matching these design rules from our brand assets:

1. Global Styles:
- Primary Background: Crisp, bright light-grey background gradient (#F9F9FB blending smoothly into white)
- Primary Text: Deep charcoal/slate black for headings and body copy to ensure ultra-sharp readability (#111827)
- Accent Colors: Set up a signature electric violet/purple gradient token (#7C3AED to #A855F7)

2. Reusable Card Theme Tokens (Define these as custom classes or CSS variables):
- Create a .card-lavender class: Soft lavender background (#F5F3FF) with a subtle border tint.
- Create a .card-blue class: Soft sky blue background (#EFF6FF) with a subtle border tint.
- Create a .card-cream class: Soft warm peach/cream background (#FFFBEB) with a subtle border tint.
- Create a .card-mint class: Soft mint green background (#F0FDF4) with a subtle border tint.

Ensure all cards feature smooth hover states (like a gentle shadow or slight lift transition). The styling must respect standard HTML semantics and apply beautifully across our components.

## Repository Sync Checkpoint
* ** PowerShell
git add .
git commit -m "Configure customized brand layout, typography, and pastel card utility tokens"

to be continued

