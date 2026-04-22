# Project Vision & Constitution

> **AGENT INSTRUCTION:** Read this file before every iteration. It serves as the project's "Long-Term Memory."

## 1. Core Identity

* **Project Name:** Grégoire Desparain — Portfolio
* **Stitch Project ID:** *(fill in after first `create_project` call)*
* **Mission:** A personal portfolio for a 1st-year engineering student at IMT Nord Europe (Mines de Douai), showcasing technical projects, internship experience, and skills to English-speaking recruiters.
* **Target Audience:** Tech recruiters and companies looking for a cybersecurity / data / digital-tech intern (10–16 weeks from May 2026)
* **Voice:** Clean, confident, professional but not stiff — lets the work speak. No filler text. English primary.

## 2. Visual Language

*Reference these descriptors when prompting Stitch.*

* **The "Vibe" (Adjectives):**
    * *Primary:* Dark-tech — deep navy slate backgrounds, feels like an IDE at night
    * *Secondary:* Precision — tight typography, clear hierarchy, no clutter
    * *Tertiary:* Electric — sky-blue accent that pops on dark surfaces, subtle glow effects

## 3. Architecture & File Structure

* **Root:** `site/public/`
* **Asset Flow:** Stitch generates to `.stitch/designs/` → Validate → Move to `site/public/`
* **Navigation Strategy:** Persistent top nav bar on every page linking to Home, Projects, Experience, Skills/About, Contact.

## 4. Live Sitemap (Current State)

*Update this when a new page is successfully merged.*

* [x] `index.html` — Landing / Hero: photo, name, tagline, CTA buttons (LinkedIn, CV, email), teaser sections + sticky nav bar added
* [x] `projects.html` — Technical Projects: full cards for The Forest App, Fencing Results Reader, Arduino Gas Pump, Weather Station, Pac-Man (C)
* [x] `experience.html` — Work Experience: timeline cards for Passman/Passenergy, FFE, Disneyland Paris, Coca-Cola, Challenge Aramis
* [x] `skills.html` — Skills & About: skill groups, language cards (EN C1/TOEIC 955, IT B1), education card (IMT Nord Europe)
* [x] `contact.html` — Contact: email, phone, LinkedIn, CV download, availability strip

## 5. The Roadmap (Backlog)

*Pick the next task from here if available.*

### High Priority
*(all completed)*

### Medium Priority
- [ ] French version parity — mirror pages under `fr/` for French recruiters
- [ ] `resume.html` — Interactive résumé view (alternative to PDF download)
- [ ] `404.html` — Branded error page with nav back to home

## 6. Creative Freedom Guidelines

*When the backlog is empty, follow these guidelines to innovate.*

1. **Stay On-Brand:** New pages must fit the dark-tech, precision, electric vibe
2. **Enhance the Core:** Support the internship-search mission — make Grégoire look hireable
3. **Naming Convention:** Use lowercase, descriptive filenames

### Ideas to Explore

*Pick one, build it, then REMOVE it from this list.*

- [ ] `resume.html` — Interactive résumé view (alternative to PDF download)
- [ ] `404.html` — Branded error page with nav back to home
- [ ] `fr/index.html` — French-language landing page mirror

## 7. Rules of Engagement

1. Do not recreate pages listed with `[x]` in Section 4
2. Always update `.stitch/next-prompt.md` before completing each iteration
3. Consume ideas from Section 6 when you use them (remove the line)
4. All pages must include the full nav bar linking to every live page
5. CV download always points to `CVATSEN.pdf` at the root
6. Contact email: `gdespar1@hotmail.com` — phone: `+33 7 82 82 79 55`
