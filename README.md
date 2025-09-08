[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/zNKu7jDa)

- URL site WEB (Netlify) : <à compléter après déploiement>
- URL Notebook Observable : <optionnel>
- Nom : <votre nom>
- Prénom : <votre prénom>

## Structure du TP2

- Une page par graphique (3 sous-pages):
  - `src/pages/species/Adelie.astro`
  - `src/pages/species/Gentoo.astro`
  - `src/pages/species/Chinstrap.astro`
  - Composant utilisé: `src/components/GraphicSpecies.astro`

- Iframe:
  - `src/pages/test-iframe.astro`
  - Menu avec attribut `target` + `iframe name` et redimensionnement auto à `onload`.

- Une seule page avec ancres + slider CSS:
  - `src/pages/slider.astro`
  - Menu d’ancres qui fait défiler horizontalement les graphiques (scroll-snap + smooth scroll).

- Page d’accueil (liens de navigation + graphique global):
  - `src/pages/index.astro`

## Déploiement Netlify

1. Construire le site: `npm run build`
2. Déployer sur Netlify (adapter selon votre setup Netlify).
3. Mettre à jour l’URL Netlify ci-dessus.

## Remarques

- Les graphiques utilisent Observable Plot, pré-rendus côté serveur via `jsdom` (voir `src/components/PlotFigure.astro`).
- Le composant `GraphicSpecies.astro` filtre les données par espèce et évite la duplication de code.

