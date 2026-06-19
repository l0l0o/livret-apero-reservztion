'use client';

import { useEffect, useState } from 'react';

import { getNfzBonus } from '@/lib/memberTiers';
import MembersRewards from '@/features/MembersRewards/MembersRewards';
import OffersList from '@/features/offers-list/OffersList';

type HomeContentProps = {
  baseNfz: number;
  maxValue: number;
};

// Source unique de vérité côté home : on poll `memberNumber` ici et on calcule le
// solde NFZ effectif (base + bonus), partagé au compteur ET aux offres pour que
// l'état grisé des cards suive le bonus.
const HomeContent = ({ baseNfz, maxValue }: HomeContentProps) => {
  const [memberNumber, setMemberNumber] = useState<number>(0);

  useEffect(() => {
    let active = true;

    const fetchMembers = async () => {
      try {
        const res = await fetch('/api/members');
        if (!res.ok) return;
        const data: { memberNumber: number } = await res.json();
        if (active) setMemberNumber(data.memberNumber);
      } catch {
        // Ignore les erreurs réseau, on réessaiera au prochain tick.
      }
    };

    fetchMembers();
    const intervalId = setInterval(fetchMembers, 2000);

    return () => {
      active = false;
      clearInterval(intervalId);
    };
  }, []);

  const effectiveNfz = baseNfz + getNfzBonus(memberNumber);

  return (
    <>
      <MembersRewards memberNumber={memberNumber} nfz={effectiveNfz} maxValue={maxValue} />
      <OffersList userNfz={effectiveNfz} />
    </>
  );
};

export default HomeContent;
