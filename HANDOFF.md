# S//SYSTEMS portfolio handoff

## Current state

- Static GitHub Pages portfolio: homepage, three dedicated project case-study pages, shared CSS and shared JavaScript; no framework or build step.
- Current design direction: premium editorial/product website. Projects are the centrepiece; avoid dashboard UI, logo walls, heavy animation and long CV-style copy.
- `npm run dev` starts a dependency-free local preview at `http://127.0.0.1:4173`; `npm run test` validates all pages, mobile guardrails, local assets, links, ARIA targets, external-link safety and JavaScript syntax.
- GitHub Actions runs the same validation on pushes and pull requests to `main`.
- Follow `ENGINEERING_REQUIREMENTS.md` for responsive UX, accessibility, performance and release requirements.

## Facts to preserve

- Current role: IT Support Technician at MEGA.
- Degree: BSc Information Technology, North-West University, completed November 2025.
- Verified project evidence: Heritage 45 automated tests / two databases / CI/CD; Salesforce 7 test classes / 86%+ Apex coverage; NIDS 150k+ records / five survey waves.
- Do not invent project URLs, live demos, credentials, dates or employer claims.

## Remaining inputs and release work

1. Obtain approved project screenshots if they are to be displayed.
2. Run `npm run test`, review the page in a desktop and mobile browser, then commit and push the local changes to publish them on GitHub Pages.
