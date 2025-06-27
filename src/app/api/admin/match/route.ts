import { createServerSupabaseClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

type MatchingStatus = 'available' | 'matching' | 'matched';

export async function GET() {
  const supabase = await createServerSupabaseClient();

  const { data: allRoommates, error } = await supabase
    .from('roommates')
    .select('matching_status');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const counts: Record<MatchingStatus, number> = {
    available: 0,
    matching: 0,
    matched: 0,
  };

  allRoommates.forEach(r => {
    const status = r.matching_status as MatchingStatus | undefined;
    if (status && counts.hasOwnProperty(status)) {
      counts[status]++;
    }
  });

  return NextResponse.json(counts);
}
