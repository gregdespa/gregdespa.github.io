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

## 4. Live Sitemap (oct. 2026 — profil « Ingénieur IA + dev + entrepreneur », cible stage IA US)

FR (racine) ↔ EN (`en/`), sélecteur FR/EN dans la nav sur chaque page. Premier passage d'un navigateur non francophone → `en/`.

* [x] `index.html` / `en/index.html` — page unique : hero, à propos, projets, parcours, compétences, contact
* [x] `projets/shakeup.html` / `en/projects/shakeup.html`
* [x] `projets/resultats-escrime.html` / `en/projects/fencing-results.html`
* [x] `projets/station-meteo.html` / `en/projects/weather-station.html`
* [x] `projets/pompe-essence.html` / `en/projects/gas-pump.html`
* Anciennes pages = redirections (pages EN d'origine → `en/`, pages FR → racine)

## 5. Roadmap
- [ ] Deux projets IA (P—02, P—03) affichés « en cours » sans détails : études de cas à écrire quand Grégoire donne les infos
- [ ] CV en anglais (le site EN pointe vers le CV français)
- [ ] Étude de cas Pac-Man quand le projet sera terminé
- [ ] Supprimer `/new` et `assets/fx.*` (vestiges, non utilisés) si Grégoire valide
