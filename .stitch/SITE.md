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

## 4. Live Sitemap (refonte oct. 2026, FR)

* [x] `index.html` — page unique : hero, à propos, projets, parcours, compétences, contact
* [x] `projets/shakeup.html` — étude de cas (ex-The Forest ; `the-forest.html` redirige)
* [x] `projets/resultats-escrime.html` — étude de cas
* [x] `projets/station-meteo.html` — étude de cas
* [x] `projets/pompe-essence.html` — étude de cas
* Anciennes pages (projects/experience/skills/contact, fr/*, ffe/, pump/, station/) = redirections

## 5. Roadmap
- [ ] Version anglaise
- [ ] Étude de cas Pac-Man quand le projet sera terminé
