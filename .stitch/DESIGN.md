# Design System: Grégoire Desparain Portfolio

**Project ID:** *(fill in after first `create_project` call)*

## 1. Visual Theme & Atmosphere

Dark-tech engineer aesthetic. Deep navy-slate background with a radial gradient suggesting depth. Cards float on the surface with heavy shadows. Sky-blue electric accent creates focal points without being loud. Typography is tight, system-native, and functional — no decorative serifs. The overall mood: late-night IDE, precision tools, someone who ships.

## 2. Color Palette & Roles

- **Deep Navy** (`#0f172a`) — Primary background base; darkest surface
- **Slate Dark** (`#1e293b`) — Gradient overlay, secondary background
- **Card Surface** (`#1e2537`) — Card backgrounds; slightly lighter than bg
- **Snow White** (`#f8fafc`) — Primary text, headings, labels
- **Muted Slate** (`#94a3b8`) — Secondary / dimmed text, descriptions, metadata
- **Electric Sky** (`#38bdf8`) — Primary accent: CTAs, links, borders, glows
- **Amber Yellow** (`#facc15`) — "In progress" state indicator only

## 3. Typography Rules

- **Font Stack:** `system-ui, -apple-system, BlinkMacSystemFont, "Inter", Roboto, "Segoe UI", sans-serif`
- **Smoothing:** `-webkit-font-smoothing: antialiased`
- **Headings:** `font-weight: 600`, `letter-spacing: -0.04em` — tight and confident
- **Body / descriptions:** `font-size: 0.9rem`, `line-height: 1.4–1.5`, `color: #94a3b8`
- **Labels / pills:** `font-size: 0.7–0.75rem`, `font-weight: 500`
- **H1 hero:** `clamp(2rem, 2vw, 2.5rem)`, weight 600

## 4. Component Stylings

* **Primary Button:** `background: #38bdf8`, `color: #0f172a`, `font-weight: 600`, `border-radius: 1.25rem`, `box-shadow: 0 20px 40px rgba(56,189,248,.2)` — hover lifts with `translateY(-1px) scale(1.01)` and brighter shadow
* **Ghost Button:** `background: rgba(148,163,184,.08)`, `border: 1px solid rgba(148,163,184,.3)`, `color: #f8fafc` — same hover lift
* **Cards:** `background: #1e2537`, `border: 1px solid rgba(148,163,184,.15)`, `border-radius: 1.25rem`, `box-shadow: 0 30px 80px rgba(0,0,0,.6)`, `overflow: hidden`
* **Accent Link:** `background: rgba(56,189,248,.08)`, `border: 1px solid rgba(56,189,248,.4)`, `color: #38bdf8`, `border-radius: 1.25rem` — used for project CTAs
* **Skill Pills:** `background: rgba(148,163,184,.12)`, `border: 1px solid rgba(148,163,184,.3)`, `color: #f8fafc`, `border-radius: 1.25rem`, `font-size: 0.75rem`
* **Section Tags:** `background: rgba(56,189,248,.12)`, `border: 1px solid rgba(56,189,248,.4)`, `color: #38bdf8` — small accent label beside section titles

## 5. Layout Principles

- Max content width: `1100px`, centered with `margin: 0 auto`
- Page padding: `2rem 1rem 4rem`
- Section spacing: `margin-bottom: 3rem`
- Grid for cards: `repeat(auto-fit, minmax(min(320px,100%), 1fr))`, `gap: 1rem`
- Background: `radial-gradient(circle at 20% 20%, #1e293b 0%, #0f172a 60%)` — gradient originates top-left
- All transitions: `0.15s linear`

## 6. Design System Notes for Stitch Generation

**Copy this block into every baton prompt:**

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
