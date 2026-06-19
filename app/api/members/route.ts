import { MAX_MEMBERS } from '@/lib/memberTiers';

export const dynamic = 'force-dynamic';

// État serveur en mémoire (module), partagé entre les requêtes.
// Persiste tant que le process tourne, remis à 0 au redémarrage.
let memberNumber = 0;

export async function GET() {
  return Response.json({ memberNumber });
}

export async function POST() {
  memberNumber = Math.min(memberNumber + 1, MAX_MEMBERS);
  return Response.json({ memberNumber });
}
