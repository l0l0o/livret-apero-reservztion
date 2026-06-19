# T2 — Écran `/invite` avec bouton `+`

## Objectif
Nouvelle route, écran **très simple**, avec un bouton `+` qui incrémente `memberNumber`
côté serveur (POST `/api/members`). Affiche le nombre courant de membres invités.

## Fichiers à créer
- `app/invite/page.tsx` (page de la route)
- `features/InviteScreen/InviteScreen.tsx` (composant client `'use client'`)

## Comportement
- Au montage : `GET /api/members` pour afficher la valeur courante.
- Bouton `+` : `POST /api/members`, met à jour l'affichage avec la valeur renvoyée.
- Affiche `memberNumber / MAX_MEMBERS` (import `MAX_MEMBERS` depuis `@/lib/memberTiers`).
- Désactiver le bouton `+` quand `memberNumber >= MAX_MEMBERS`.
- Un petit lien/bouton « Retour » vers `/` (via `next/link`).

## Style
- Reprendre l'esprit visuel de la home : fond sombre `#000613`, texte blanc.
- Réutiliser `@/components/ui/button` (`Button`) pour le `+` (gros, centré).
- Ne PAS faire de polling ici : la mise à jour vient de la réponse du POST.

## Avant de coder
Lire `node_modules/next/dist/docs/01-app/01-getting-started/15-route-handlers.md`
(section fetch côté client) et la doc de page App Router.
NE PAS modifier `app/page.tsx`, `features/InviteButton`, ni `lib/memberTiers.ts` (appartiennent à d'autres tickets).

## Vérification
- `npx tsc --noEmit` passe.
- `/invite` s'affiche, le `+` incrémente et l'affichage suit, plafonné à MAX_MEMBERS.
