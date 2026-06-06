# Phase 1 — Project Initialization & Structure

## Prompt 1.2 — Building the Architecture Scaffold
* **Where to paste:** Run the terminal commands inside VS Code first, then give the text prompt to your AI.
* **Intent:** Automatically builds a clean directory layout and creates the starting boilerplate files.

### Terminal Step A: Create Folders (Windows PowerShell)
```powershell
mkdir src/components/layout, src/components/ui, src/components/sections, src/context, src/hooks, src/utils, src/assets -Force

### Terminal Step B: Create the Missing Files (Windows PowerShell)
```powershell
New-Item src/components/layout/Navbar.jsx, src/components/layout/Footer.jsx, src/context/ThemeContext.jsx -Force

AI Prompt
Your Next Step: The Vibe Code
Copy the exact text inside the box below.

Open your VS Code AI Chat or Composer panel (usually on the right side of your screen, or opened by pressing Ctrl + I).

Paste the text into the AI chat box and hit Enter.

I have initialized the directory structure and created empty files. Please analyze our project root. Generate and configure the baseline boilerplate files for our structural scaffold:
1. Populate `src/components/layout/Navbar.jsx` and `src/components/layout/Footer.jsx` with responsive layouts.
2. Populate the context provider in `src/context/ThemeContext.jsx` (supporting light/dark mode toggles).
3. Update `src/App.jsx` to assemble these elements into a clean, unified base layout.

Ensure all imports match our newly created directories perfectly.

```Powershell
git add . ; git commit -m "Complete Phase 1 architecture setup" ; git push