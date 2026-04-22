---
page: resume
---
An interactive résumé page for Grégoire Desparain — a cleaner, richer alternative to the PDF download.
The page should mirror the CV structure but presented as a web page with the portfolio design system.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Desktop-first (responsive)
- Theme: Dark, navy-slate, electric sky-blue accent
- Background: Deep navy radial gradient — `#0f172a` base to `#1e293b` at top-left
- Primary Accent: Electric sky blue `#38bdf8` — used for CTAs, borders, glows
- Text Primary: Snow white `#f8fafc`
- Text Secondary: Muted slate `#94a3b8`
- Card Surface: `#1e2537` with `rgba(148,163,184,.15)` border and heavy black shadow
- Font: System-UI / Inter stack, weight 500–600, tight letter-spacing (-0.04em on headings)
- Border Radius: `1.25rem` (20px) on all components — soft but not bubbly
- Transitions: `0.15s linear`, hover lifts with `translateY(-1px) scale(1.01)`
- Vibe keywords: dark-tech, IDE-night, precision, electric, clean, hireable engineer

**Page Structure:**
1. Sticky nav bar (Home / Projects / Experience / Skills / Contact) — active: none (standalone)
2. Page hero: "Résumé" title + "Download PDF" ghost button linking to CVATSEN.pdf
3. Section: Education — IMT Nord Europe (Mines de Douai), 2024–2027, Digital Technology track
4. Section: Experience — same 5 entries as experience.html, compact timeline style
5. Section: Projects — 5 project chips with tech tags
6. Section: Skills — compact chip grid (Python, C, PHP, Arduino, IoT, SQL…)
7. Section: Languages — EN C1 (TOEIC 955), FR native, IT B1
8. Footer: contact info + CV link

**Rules:**
- CV download always points to `CVATSEN.pdf` (root-relative)
- Contact email: `gdespar1@hotmail.com` · phone: `+33 7 82 82 79 55`
- Nav bar must link to all live pages: index.html, projects.html, experience.html, skills.html, contact.html
