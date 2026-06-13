# Yvonne Martinez — Enterprise AI Operations Portfolio & Hub

Welcome to the master repository for my Enterprise AI Operations and Infrastructure ecosystem. This platform acts as a production-ready showcase of modern, multi-view React architecture, seamless client-side state routing, and bulletproof environment isolation protocols.

---

## 🚀 Live Infrastructure Deployments

*   **Production Platform**: [aitogethernow.com](https://aitogethernow.com) (Hosted via Firebase Infrastructure)
*   **Design Reference System**: [yvonneim.github.io/forward-moves/](https://yvonneim.github.io/forward-moves/) (Hosted via GitHub Pages)

---

## 🛡️ Core Security Architecture & Guardrails

This project enforces strict, enterprise-grade data security parameters across all operational environments to eliminate credential leaks and cross-origin security traps.

### 1. Airtight Vault Isolation (`.gitignore`)
To shield application secrets against accidental tracking or remote repository leaks, a strict zero-trust parameter mask is enforced at the project root. The `.gitignore` asset explicitly blocks the following structural pathways:
*   `.env` and `.env.local` (Masks local configuration files)
*   `node_modules/` and `.vite/` (Excludes heavy dependency structures and internal compiler caches)
*   `dist/` and `build/` (Isolates compiled production output trees)

All API credentials, such as the private `VITE_GEMINI_API_KEY`, reside strictly within the physical boundaries of the local deployment disk and are **100% untracked by public cloud networks**.

### 2. Network Security & CORS Risk Mitigation
Cross-Origin Resource Sharing (CORS) is explicitly handled to prevent malicious parameter sniffing in public network spaces.
*   **The Zero-Trust Pattern**: Sensitive endpoints requiring private authenticated secret keys are never called directly from cleartext client-side React components.
*   **The Secure Proxy Protocol**: Frontend multi-view sections route requests asynchronously through a secured server-side proxy layer (utilizing Firebase Cloud Functions). This proxy receives client parameters, securely appends private API keys on the isolated backend grid out of user sight, fetches the raw payload from Google AI Studio, and pipes a sanitized, clean JSON payload back to the client viewport.

---

## 🛠️ Local Engineering & Build Runbook

To review, compile, or audit this codebase locally, execute the following pipelines inside your local system OS terminal pointed at the workspace root directory:

### Dependencies Installation
```bash
npm install
```
### Local Development Preview
``` bash
npm run dev
```
### Production Compilation (Safety Gate Pass)
``` bash
npm run build
```
### Infrastructure Deployment
``` bash
firebase deploy --only hosting