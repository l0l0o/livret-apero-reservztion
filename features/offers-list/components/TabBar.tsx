'use client';

import { IconLockFilled } from '@tabler/icons-react';

import { cn } from '@/lib/utils';

import { isTierUnlocked, NFZ_TIERS } from '../tiers';

type TabBarProps = {
  /** Coût du palier sélectionné. */
  selected: number;
  onSelect: (cost: number) => void;
  /** Solde NFZ de l'utilisateur, pour afficher les paliers verrouillés. */
  userNfz: number;
};

export function TabBar({ selected, onSelect, userNfz }: TabBarProps) {
  return (
    <div className="flex border-b border-white/20">
      {NFZ_TIERS.map((tier) => {
        const unlocked = isTierUnlocked(userNfz, tier);
        return (
          <button
            key={tier.cost}
            type="button"
            onClick={() => onSelect(tier.cost)}
            className={cn(
              'flex w-full max-w-17.5 items-center justify-center gap-0.5 rounded-t-sm px-4 py-2 text-[12px] text-white transition-colors',
              selected === tier.cost && 'bg-white/20',
              !unlocked && 'opacity-50',
            )}
          >
            {!unlocked && <IconLockFilled className="size-2.5" />}
            {tier.cost}
            <span className="text-[9px] text-white/80">NFZ</span>
          </button>
        );
      })}
    </div>
  );
}
