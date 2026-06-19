# T3 — Home : polling + affichage du bonus NFZ

## Objectif
Sur la home, poller `memberNumber`, afficher la progression vers le prochain palier,
et ajouter le bonus NFZ débloqué au **solde affiché** (pas côté serveur).

## Fichiers
- Créer `features/MembersRewards/MembersRewards.tsx` (`'use client'`)
- Modifier `app/page.tsx`
- Modifier `features/InviteButton/InviteButton.tsx`
- Modifier `features/NFZCounter/NFZCounter.tsx`

## MembersRewards (nouveau composant client)
Props : `baseNfz: number`, `maxValue: number`.
- Poll `GET /api/members` toutes les 2000 ms (`setInterval`, nettoyé au démontage) +
  un fetch immédiat au montage.
- `bonus = getNfzBonus(memberNumber)` ; `nfz = baseNfz + bonus` (import depuis `@/lib/memberTiers`).
- Rend :
  - `<NFZCounter NFZvalue={nfz} maxValue={maxValue} />`
  - `<InviteButton />`
  - Le badge de progression (voir ci-dessous).

## Badge de progression
Remplace le bloc statique actuel `0/5 membres | +20` (lignes ~27-34 de page.tsx).
- `nextTier = getNextTier(memberNumber)`.
- Si `nextTier` : afficher `{memberNumber}/{nextTier.threshold} membres` `|` `+{nextTier.bonus}` + l'image `/image/NightFlouz.png` (width/height 18, `next/image`).
- Si `null` (tout débloqué) : afficher `{memberNumber} membres · paliers max atteints`.

## NFZCounter
Actuellement `useState(NFZvalue)` n'est jamais mis à jour (`setNfzValue` inutilisé), donc
la valeur ne réagit pas au changement de prop. **Dériver directement de `NFZvalue`** :
supprimer l'état interne et utiliser `NFZvalue` (et `percentageValue` recalculée) directement,
pour que le bonus se reflète au polling. Ne rien changer d'autre au visuel.

## InviteButton
Le rendre cliquable vers `/invite` : envelopper le `Button` dans un `<Link href="/invite">`
de `next/link` (garder le style/texte actuels).

## page.tsx
Remplacer le bloc `<NFZCounter ... />` + le `<div>` invite/badge (lignes ~24-35) par
`<MembersRewards baseNfz={userNfz} maxValue={500} />`. Garder le reste (Navbar, titre, OffersList).

## Avant de coder
Lire `node_modules/next/dist/docs/01-app/03-api-reference/02-components/link.md` et
`node_modules/next/dist/docs/01-app/01-getting-started/04-linking-and-navigating.md`.
NE PAS créer/modifier `app/api/members/route.ts`, `app/invite/`, ni `lib/memberTiers.ts`.

## Vérification
- `npx tsc --noEmit` passe.
- Le badge et le solde NFZ se mettent à jour ~2 s après un `+` sur `/invite`
  (5→+20, 10→+50, 20→+90).
