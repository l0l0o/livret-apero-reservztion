'use client';

import Image from 'next/image';

import { getNextTier } from '@/lib/memberTiers';
import NFZCounter from '@/features/NFZCounter/NFZCounter';
import InviteButton from '@/features/InviteButton/InviteButton';

type MembersRewardsProps = {
  /** Nombre de membres invités (variable serveur poll-ée par le parent). */
  memberNumber: number;
  /** Solde NFZ effectif déjà calculé (base + bonus). */
  nfz: number;
  maxValue: number;
};

const MembersRewards = ({ memberNumber, nfz, maxValue }: MembersRewardsProps) => {
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
