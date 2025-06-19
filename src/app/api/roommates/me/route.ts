import { createServerSupabaseClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
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

    const { data: roommateProfile, error } = await supabase
      .from('roommates')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

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

    return NextResponse.json(roommateProfile);
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
      room_type,
      sociability,
      cleanliness,
      smoking,
      indoor_eating,
      sleep_pattern,
      sleep_habit,
      noise,
      kakao_open_link,
      message,
    } = body;

    if (
      !dormitory ||
      !room_type ||
      !sleep_habit ||
      !sleep_pattern ||
      !noise ||
      !kakao_open_link
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

    const { error: insertError } = await supabase.from('roommates').insert({
      user_id: user.id,
      dormitory,
      room_type,
      sociability,
      cleanliness,
      smoking,
      indoor_eating,
      sleep_pattern,
      sleep_habit,
      noise,
      kakao_open_link,
      message,
    });

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
