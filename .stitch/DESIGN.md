# Design System: Grégoire Desparain Portfolio (v2 — oct. 2026)

## 1. Atmosphère
« Fiche technique d'ingénieur » : papier crème, encre presque noire, un seul signal orange.
Éditorial et précis : grands titres serif, métadonnées en mono, filets fins, sections numérotées (§01, P—01).

## 2. Couleurs (tokens dans assets/style.css, mode sombre automatique)
- Papier `#f3f0e8` / Papier 2 `#ebe7dc` — fonds
- Encre `#17160f`, `#4a473d`, `#8a8677` — texte principal, secondaire, métadonnées
- Filet `#d6d1c3`
- Signal `#e2471b` — accent unique : CTA, numéros de section, mots en italique

## 3. Typographie
- Display : Instrument Serif (italique pour les mots accentués)
- Texte : Geist
- Métadonnées / labels : Geist Mono, majuscules, interlettrage .08–.12em

## 4. Composants
Boutons pilule (plein orange / contour encre), liste de projets en index numéroté,
registre d'expérience (date à gauche, contenu à droite), schémas d'architecture en blocs,
blocs de code sombres, tableaux de règles, chiffres-clés en serif.

## 5. Mise en page
Largeur max 1180px, gouttière clamp(16px, 4vw, 40px), colonne de label de 180px sur desktop,
une seule colonne sous 760px.

## 6. Bloc pour prompts Stitch
- Theme: light cream paper (#f3f0e8), near-black ink (#17160f), single signal orange accent (#e2471b)
- Fonts: Instrument Serif display, Geist body, Geist Mono labels
- Thin 1px rules, numbered sections, editorial engineering spec-sheet vibe, no shadows, no gradients
