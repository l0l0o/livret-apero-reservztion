'use client';

import { IconLockFilled } from '@tabler/icons-react';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';

type BarCardProps = {
  title: string;
  city: string;
  hours: string;
  maxPeople: number;
  imageSrc: string;
  discount?: string;
  disabled?: boolean;
};

export function BarCard({
  title,
  city,
  hours,
  maxPeople,
  imageSrc,
  discount,
  disabled,
}: BarCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative w-full shrink-0">
      <div
        className={cn(
          'flex h-47 w-full flex-col gap-3 overflow-hidden rounded-md border border-[#9E90FF] p-3',
          disabled && 'opacity-30',
        )}
        style={{
          background:
            'linear-gradient(122deg, rgba(192, 183, 255, 0.50) -9.09%, rgba(118, 101, 222, 0.20) 49.81%, rgba(78, 58, 189, 0.00) 108.71%), #1B1B1B',
        }}
      >
        <div className="relative h-25 w-full shrink-0 overflow-hidden rounded-sm">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
          {discount && (
            <span className="absolute top-1 left-1 rounded-sm bg-[#725ADF] px-1.5 py-1 text-[11px] font-medium text-white">
              {discount}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-start justify-between">
            <h3 className="text-[18px] font-medium text-white">{title}</h3>
            <button type="button" onClick={() => setLiked((v) => !v)} aria-label="Favori">
              <Heart className={cn('size-5 text-white', liked && 'fill-current text-red-500')} />
            </button>
          </div>

          <div className="flex items-center gap-2 text-[14px] text-white opacity-60">
            <span>{city}, France</span>
            <span>|</span>
            <span>{hours}</span>
            <span>|</span>
            <span>+{maxPeople} pers.</span>
          </div>
        </div>
      </div>

      {disabled && (
        <div className="absolute inset-0 flex items-center justify-center">
          <IconLockFilled className="size-10 text-white opacity-70" />
        </div>
      )}
    </div>
  );
}
