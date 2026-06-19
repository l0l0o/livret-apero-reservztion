// Contrat partagé : paliers de récompense liés au nombre de membres invités.
// `memberNumber` est la variable serveur (poll-ée). Les bonus sont CUMULÉS :
// chaque palier atteint ajoute son bonus au total.
//   5 membres  -> +20 NFZ  (total +20)
//   10 membres -> +30 NFZ  (total +50)
//   20 membres -> +270 NFZ (total +320)
// Avec un solde de base de 180 NFZ, le total à 20 membres atteint exactement 500.

export type Tier = { threshold: number; bonus: number };

export const MEMBER_TIERS: Tier[] = [
  { threshold: 5, bonus: 20 },
  { threshold: 10, bonus: 30 },
  { threshold: 20, bonus: 270 },
];

// Plafond du compteur : dernier palier.
export const MAX_MEMBERS = MEMBER_TIERS[MEMBER_TIERS.length - 1].threshold;

// Bonus NFZ total débloqué pour un nombre de membres donné (somme des paliers atteints).
export function getNfzBonus(memberNumber: number): number {
  return MEMBER_TIERS.reduce(
    (sum, tier) => (memberNumber >= tier.threshold ? sum + tier.bonus : sum),
    0,
  );
}

// Prochain palier non encore atteint, ou null si tout est débloqué.
export function getNextTier(memberNumber: number): Tier | null {
  return MEMBER_TIERS.find((tier) => memberNumber < tier.threshold) ?? null;
}
