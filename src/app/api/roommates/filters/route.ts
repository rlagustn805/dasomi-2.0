import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const dormitory = searchParams.get('dormitory');
  const gender = searchParams.get('gender');
  const mbti = searchParams.get('mbti');
  const roomType = searchParams.get('room_type');
  const noise = searchParams.get('noise');
  const smoking = searchParams.get('smoking');
  const indoorEating = searchParams.get('indoor_eating');
  const sleepHabit = searchParams.get('sleep_habit');
  const sleepPattern = searchParams.get('sleep_pattern');
  const matchingStatus = searchParams.get('matching_status');
  const sociabilityMin = searchParams.get('sociabilityMin');
  const sociabilityMax = searchParams.get('sociabilityMax');
  const cleanlinessMin = searchParams.get('cleanlinessMin');
  const cleanlinessMax = searchParams.get('cleanlinessMax');

  return NextResponse.json({
    filters: {
      dormitory,
      gender,
      mbti,
      noise,
      roomType,
      smoking,
      indoorEating,
      sleepHabit,
      sleepPattern,
      matchingStatus,
      sociabilityRange: { min: sociabilityMin, max: sociabilityMax },
      cleanlinessRange: { min: cleanlinessMin, max: cleanlinessMax },
    },
  });
}
