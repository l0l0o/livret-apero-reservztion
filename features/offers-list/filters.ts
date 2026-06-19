// État des filtres de la liste d'offres. Conservé en mémoire pour la session
// dans OffersList (source unique de vérité).
export type Filters = {
  /** Date sélectionnée (affichée et conservée ; non utilisée pour filtrer faute de données de dispo). */
  date: Date | undefined;
  /** Texte de recherche sur la ville. */
  city: string;
  /** Nombre de personnes minimum (chaîne pour coller à l'input ; vide = pas de filtre). */
  guests: string;
};

export const EMPTY_FILTERS: Filters = {
  date: undefined,
  city: '',
  guests: '',
};

import type { Bar } from './mock';

/** Un filtre est-il actif (différent de l'état vide) ? */
export function hasActiveFilters(filters: Filters): boolean {
  return filters.date !== undefined || filters.city.trim() !== '' || filters.guests.trim() !== '';
}

/** Applique les filtres ville + capacité à un bar. */
export function matchesFilters(bar: Bar, filters: Filters): boolean {
  const cityQuery = filters.city.trim().toLowerCase();
  if (cityQuery && !bar.city.toLowerCase().includes(cityQuery)) {
    return false;
  }

  const minGuests = Number.parseInt(filters.guests, 10);
  if (!Number.isNaN(minGuests) && bar.maxPeople < minGuests) {
    return false;
  }

  return true;
}
