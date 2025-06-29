import { createServerSupabaseClient } from '@/lib/supabase/server';
import { toCamelCase } from '@/utils/to-camel-case';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get('page') || '1', 10);
    const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);

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

    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    let query = supabase
      .from('roommates')
      .select(
        '*, users!inner(id, nickname, mbti, department, gender, student_id)',
        {
          count: 'exact',
        }
      )
      .order('created_at', { ascending: false })
      .range(from, to);

    if (dormitory) {
      query = query.eq('dormitory', dormitory);
    }

    if (gender) {
      query = query.eq('users.gender', gender);
    }

    if (mbti) {
      query = query.eq('users.mbti', mbti);
    }

    if (roomType) {
      query = query.eq('room_type', roomType);
    }

    if (smoking) {
      query = query.eq('smoking', smoking === 'true');
    }

    if (indoorEating) {
      query = query.eq('indoor_eating', indoorEating === 'true');
    }

    if (noise) {
      query = query.eq('noise', noise);
    }

    if (sleepHabit === 'true') {
      query = query.neq('sleep_habit', 'sleep_no_habit');
    } else if (sleepHabit === 'false') {
      query = query.eq('sleep_habit', 'sleep_no_habit');
    }

    if (sleepPattern) {
      query = query.eq('sleep_pattern', sleepPattern);
    }

    if (matchingStatus === 'true') {
      query = query.eq('matching_status', 'available');
    } else if (matchingStatus === 'false') {
      query = query.neq('matching_status', 'available');
    }
    const sociabilityMinNum = parseInt(sociabilityMin ?? '', 10);
    const sociabilityMaxNum = parseInt(sociabilityMax ?? '', 10);
    const cleanlinessMinNum = parseInt(cleanlinessMin ?? '', 10);
    const cleanlinessMaxNum = parseInt(cleanlinessMax ?? '', 10);

    if (!isNaN(sociabilityMinNum) && !isNaN(sociabilityMaxNum)) {
      query = query
        .gte('sociability', sociabilityMinNum)
        .lte('sociability', sociabilityMaxNum);
    }

    if (!isNaN(cleanlinessMinNum) && !isNaN(cleanlinessMaxNum)) {
      query = query
        .gte('cleanliness', cleanlinessMinNum)
        .lte('cleanliness', cleanlinessMaxNum);
    }

    const { data, count, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const currentUserId = user?.id ?? null;

    let likedIds: number[] = [];

    if (currentUserId) {
      const { data: likedRows, error: likedError } = await supabase
        .from('roommate_likes')
        .select('liked_roommate_id')
        .eq('liker_id', currentUserId);

      if (!likedError && likedRows) {
        likedIds = likedRows.map(r => r.liked_roommate_id);
      }
    }

    const camelData = toCamelCase(data).map((item: any) => {
      const { id, ...rest } = item;
      return {
        roommateId: id,
        ...rest,
        isLiked: currentUserId ? likedIds.includes(id) : false,
      };
    });

    return NextResponse.json({
      data: camelData,
      total: count,
      page,
      pageSize,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: '서버 오류' }, { status: 500 });
  }
}
