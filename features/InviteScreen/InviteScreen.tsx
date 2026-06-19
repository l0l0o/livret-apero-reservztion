'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { MAX_MEMBERS } from '@/lib/memberTiers';

const InviteScreen = () => {
  const [memberNumber, setMemberNumber] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;

    async function loadCurrent() {
      const res = await fetch('/api/members');
      const data: { memberNumber: number } = await res.json();
      if (!cancelled) {
        setMemberNumber(data.memberNumber);
      }
    }

    loadCurrent();

    return () => {
      cancelled = true;
    };
  }, []);

  async function handleIncrement() {
    setLoading(true);
    try {
      const res = await fetch('/api/members', { method: 'POST' });
      const data: { memberNumber: number } = await res.json();
      setMemberNumber(data.memberNumber);
    } finally {
      setLoading(false);
    }
  }

  async function handleReset() {
    setLoading(true);
    try {
      const res = await fetch('/api/members', { method: 'DELETE' });
      const data: { memberNumber: number } = await res.json();
      setMemberNumber(data.memberNumber);
    } finally {
      setLoading(false);
    }
  }

  const reachedMax = memberNumber >= MAX_MEMBERS;

  return (
    <div style={containerStyles}>
      <p style={countStyles}>
        {memberNumber} / {MAX_MEMBERS}
      </p>

      <Button
        onClick={handleIncrement}
        disabled={reachedMax || loading}
        className="size-24 rounded-full text-5xl font-bold"
      >
        +
      </Button>

      <Button
        variant="outline"
        onClick={handleReset}
        disabled={memberNumber === 0 || loading}
      >
        Reset
      </Button>

      <Link href="/" style={backLinkStyles}>
        Retour
      </Link>
    </div>
  );
};

const containerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '32px',
  minHeight: '100vh',
  background: '#000613',
  color: '#FFFFFF',
  padding: '16px',
};

const countStyles: React.CSSProperties = {
  fontSize: '40px',
  fontWeight: 'bold',
};

const backLinkStyles: React.CSSProperties = {
  color: '#FFFFFF',
  textDecoration: 'underline',
  fontSize: '14px',
};

export default InviteScreen;
