import { createServerSupabaseClient } from '@/lib/supabase/server';
import { toCamelCase } from '@/utils/to-camel-case';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: '로그인이 필요합니다.' },
        { status: 401 }
      );
    }

    const { data: currentUserData, error: userError } = await supabase
      .from('users')
      .select('id, gender')
      .eq('id', user.id)
      .single();

    if (userError) {
      console.error('사용자 정보 조회 실패:', userError);
      return NextResponse.json({ error: userError.message }, { status: 500 });
    }

    const { searchParams } = req.nextUrl;
    const page = parseInt(searchParams.get('page') ?? '1', 10);
    const pageSize = 10;
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    const { data, count, error } = await supabase
      .from('roommate_likes')
      .select(
        `
        liked_roommate_id,
        roommates (
          *,
          users (
            id,
            nickname,
            mbti,
            department,
            gender,
            student_id
          )
        )
      `,
        { count: 'exact' }
      )
      .eq('liker_id', user.id)
      .order('created_at', { ascending: false })
      .range(from, to);

    if (error) {
      console.error('찜한 룸메이트 조회 실패:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const camelData = toCamelCase(data).map((item: any) => {
      const { roommates } = item;
      const { id, users, ...rest } = roommates;
      return {
        ...rest,
        roommateId: id,
        isLiked: true,
        users,
      };
    });

    return NextResponse.json({
      data: camelData,
      total: count,
      currentUserGender: currentUserData.gender,
      currentUserId: currentUserData.id,
      pageSize,
    });
  } catch (e) {
    console.error('서버 오류:', e);
    return NextResponse.json({ error: '서버 오류' }, { status: 500 });
  }
}
