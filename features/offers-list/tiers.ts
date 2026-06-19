// Paliers NFZ : chaque palier coûte un certain nombre de NFZ. Tous les bars
// proposent une réduction pour chaque palier (voir Bar.discounts dans mock.ts).
// Source unique de vérité pour la TabBar et la liste.
export type NfzTier = {
  /** Coût en NFZ du palier (sert aussi de libellé : "100NFZ"). */
  cost: number;
};

export const NFZ_TIERS: NfzTier[] = [
  { cost: 100 },
  { cost: 200 },
  { cost: 300 },
  { cost: 400 },
  { cost: 500 },
];

/** L'utilisateur a-t-il assez de NFZ pour débloquer ce palier ? */
export function isTierUnlocked(userNfz: number, tier: NfzTier): boolean {
  return userNfz >= tier.cost;
}
