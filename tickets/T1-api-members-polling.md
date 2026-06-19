# T1 — Route Handler `memberNumber` (état serveur + polling)

## Objectif
Exposer une variable serveur `memberNumber` (commence à 0), incrémentable et lisible
par polling. Stockage **en mémoire** (module), partagé entre les requêtes.

## Fichier à créer
- `app/api/members/route.ts`

## Contrat
- `GET /api/members` → `200 { "memberNumber": number }`
- `POST /api/members` → incrémente de 1 (plafonné à `MAX_MEMBERS`), retourne `200 { "memberNumber": number }`

## Détails
- Déclarer `let memberNumber = 0;` au niveau module (hors handlers) → persiste tant que
  le process tourne, remis à 0 au redémarrage (attendu pour un prototype).
- Plafond : importer `MAX_MEMBERS` depuis `@/lib/memberTiers` et ne jamais dépasser.
- `export const dynamic = 'force-dynamic';` pour éviter toute mise en cache du GET.
- Réponses via `Response.json(...)` ou `NextResponse.json(...)`.

## Avant de coder
Lire `node_modules/next/dist/docs/01-app/01-getting-started/15-route-handlers.md`
et `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/route.md`
(cette version de Next a des conventions à respecter).

## Vérification
- `npx tsc --noEmit` passe.
- `curl http://localhost:3000/api/members` (après `npm run dev`) retourne `{"memberNumber":0}`,
  un POST l'incrémente.
