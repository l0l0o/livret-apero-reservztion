'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

const TABS = ['100NFZ', '200NFZ', '300NFZ', '400NFZ', '500NFZ'] as const;

type Tab = (typeof TABS)[number];

export function TabBar() {
  const [selected, setSelected] = useState<Tab>(TABS[0]);

  return (
    <div className="flex border-b border-white/20">
      {TABS.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setSelected(tab)}
          className={cn(
            'w-full max-w-17.5 rounded-t-sm px-4 py-2 text-[12px] transition-colors',
            selected === tab && 'bg-white/20',
          )}
        >
          {tab.replace('NFZ', '')}
          <span className="text-[9px] text-white/80">NFZ</span>
        </button>
      ))}
    </div>
  );
}
