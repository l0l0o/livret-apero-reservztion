'use client';

import { useState } from 'react';

import { BarCard } from './components/BarCard';
import FilterList from './components/FilterList';
import { TabBar } from './components/TabBar';
import { EMPTY_FILTERS, matchesFilters, type Filters } from './filters';
import { MOCK_BARS } from './mock';
import { isTierUnlocked, NFZ_TIERS } from './tiers';

type OffersListProps = {
  /** Solde NFZ de l'utilisateur. */
  userNfz: number;
};

const OffersList = ({ userNfz }: OffersListProps) => {
  const [selectedCost, setSelectedCost] = useState<number>(NFZ_TIERS[0].cost);
  // Filtres conservés en mémoire pour la session.
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);

  const selectedTier = NFZ_TIERS.find((tier) => tier.cost === selectedCost) ?? NFZ_TIERS[0];
  const unlocked = isTierUnlocked(userNfz, selectedTier);
  const bars = MOCK_BARS.filter((bar) => matchesFilters(bar, filters));

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col gap-6">
      <FilterList
        filters={filters}
        onApply={setFilters}
        onReset={() => setFilters(EMPTY_FILTERS)}
      />
      <TabBar selected={selectedCost} onSelect={setSelectedCost} userNfz={userNfz} />

      <div className="flex flex-col gap-4 overflow-y-auto scrollbar-hide">
        {bars.length === 0 && (
          <p className="text-center text-sm text-white/60">
            Aucune offre ne correspond à vos filtres.
          </p>
        )}
        {bars.map((bar) => (
          <BarCard
            key={bar.id}
            title={bar.title}
            city={bar.city}
            hours={bar.hours}
            maxPeople={bar.maxPeople}
            imageSrc={bar.imageSrc}
            discount={`-${bar.discounts[selectedCost]}%`}
            disabled={!unlocked}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersList;
