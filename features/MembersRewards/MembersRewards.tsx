'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { getNfzBonus, getNextTier } from '@/lib/memberTiers';
import NFZCounter from '@/features/NFZCounter/NFZCounter';
import InviteButton from '@/features/InviteButton/InviteButton';

type MembersRewardsProps = {
  baseNfz: number;
  maxValue: number;
};

const MembersRewards = ({ baseNfz, maxValue }: MembersRewardsProps) => {
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

  const bonus = getNfzBonus(memberNumber);
  const nfz = baseNfz + bonus;
  const nextTier = getNextTier(memberNumber);

  return (
    <>
      <NFZCounter NFZvalue={nfz} maxValue={maxValue} />
      <div className="flex flex-col items-center justify-center gap-2">
        <InviteButton />
        {nextTier ? (
          <div className="flex items-center gap-3">
            <p className="text-white text-sm">
              {memberNumber}/{nextTier.threshold} membres
            </p>
            <span className="text-white text-sm">|</span>
            <div className="flex items-center gap-1 ml-1">
              <span className="font-bold text-white">+{nextTier.bonus}</span>
              <Image src="/image/NightFlouz.png" alt="Coin" width={18} height={18} />
            </div>
          </div>
        ) : (
          <p className="text-white text-sm">
            {memberNumber} membres · paliers max atteints
          </p>
        )}
      </div>
    </>
  );
};

export default MembersRewards;
