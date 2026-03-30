# Emancia — Charte Graphique

Site web de la charte graphique d'Emancia, ASBL belge d'education financiere gratuite.

**Live** : [emancia-brand.vercel.app](https://emancia-brand.vercel.app)

## Stack

- Next.js 16 + TypeScript
- Tailwind CSS 4
- Vercel (deploy auto sur push)

## Brand Kit

Le systeme de design est centralise dans `lib/brand/` :

- `defaults.ts` — couleurs, typographie, espacements, logos
- `types.ts` — types TypeScript
- `css-vars.ts` — generation de variables CSS

## Pages

| Route | Contenu |
|-------|---------|
| `/` | Identite de marque, mission, vision, valeurs |
| `/logo` | Versions du logo, zone de protection, tailles min, usages interdits |
| `/couleurs` | Palette principale, secondaire, fonctionnelle, mode sombre |
| `/typographie` | Fraunces + DM Sans + JetBrains Mono, hierarchie |
| `/composants` | Boutons, cartes, alertes, espacement, grille |
| `/regles` | Do / Don't, accessibilite |

## Dev

```bash
npm install
npm run dev
```

Le site tourne sur `http://localhost:3000`.

## Deploiement

Push sur `main` → deploiement automatique sur Vercel.
