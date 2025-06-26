import { createServerSupabaseClient } from '@/lib/supabase/server';
import { toCamelCase } from '@/utils/to-camel-case';
import { toSnakeCase } from '@/utils/to-snake-case';
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
        { error: '인증이 필요합니다.' },
        { status: 401 }
      );
    }

    const { searchParams } = req.nextUrl;
    const page = parseInt(searchParams.get('page') ?? '1', 10);
    const pageSize = 10;
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    const { data, count, error } = await supabase
      .from('roommates')
      .select('*', { count: 'exact' })
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .range(from, to);

    if (error) {
      return NextResponse.json(
        {
          error: '룸메이트 프로필을 찾을 수 없습니다.',
        },
        {
          status: 404,
        }
      );
    }

    const roommateProfileData = toCamelCase(data).map(
      ({ id, ...rest }: any) => ({
        ...rest,
        roommateId: id,
      })
    );

    return NextResponse.json({
      data: roommateProfileData,
      total: count,
      pageSize,
    });
  } catch (e) {
    console.error('룸메이트 프로필 조회 서버 오류 : ', e);
    return NextResponse.json(
      {
        error: '서버 오류가 발생하였습니다. 관리자에게 문의주세요.',
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: Request) {
  try {
    const supabase = await createServerSupabaseClient();
    const body = await req.json();

    const {
      dormitory,
      roomType,
      sociability,
      cleanliness,
      smoking,
      indoorEating,
      sleepPattern,
      sleepHabit,
      noise,
      kakaoOpenLink,
      message,
    } = body;

    if (
      !dormitory ||
      !roomType ||
      !sleepHabit ||
      !sleepPattern ||
      !noise ||
      !kakaoOpenLink
    ) {
      return NextResponse.json(
        { error: '프로필 등록을 위한 내용들을 필수로 입력해주세요.' },
        { status: 400 }
      );
    }

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: '인증되지 않은 사용자입니다.' },
        { status: 401 }
      );
    }

    const insertData = toSnakeCase({
      userId: user.id,
      dormitory,
      roomType,
      sociability,
      cleanliness,
      smoking,
      indoorEating,
      sleepPattern,
      sleepHabit,
      noise,
      kakaoOpenLink,
      message,
    });

    const { error: insertError } = await supabase
      .from('roommates')
      .insert(insertData);

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: '룸메이트 프로필 등록 성공' },
      { status: 200 }
    );
  } catch (e) {
    console.error('룸메이트 프로필 등록 API 오류 : ', e);
    return NextResponse.json(
      {
        error: '서버 오류가 발생하였습니다. 관리자에게 문의주세요.',
      },
      { status: 500 }
    );
  }
}
