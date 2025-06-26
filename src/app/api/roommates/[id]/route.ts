import { createServerSupabaseClient } from '@/lib/supabase/server';
import { toSnakeCase } from '@/utils/to-snake-case';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createServerSupabaseClient();
    const body = await req.json();
    const roommateId = (await params).id;

    const {
      dormitory,
      roomType,
      sociability,
      cleanliness,
      smoking,
      indoorEating,
      sleepHabit,
      sleepPattern,
      noise,
      message,
      kakaoOpenLink,
    } = body;

    const { roommateId: _, ...rest } = body;
    const updateRoommateProfileData = toSnakeCase(rest);

    if (
      !dormitory ||
      !roomType ||
      !sleepHabit ||
      !sleepPattern ||
      !noise ||
      !kakaoOpenLink
    ) {
      return NextResponse.json(
        { error: '프로필 수정에 필요한 항목이 누락되었습니다.' },
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

    const { data: existing, error: fetchError } = await supabase
      .from('roommates')
      .select('id')
      .eq('id', roommateId)
      .eq('user_id', user.id)
      .single();

    if (fetchError || !existing) {
      return NextResponse.json(
        { error: '해당 룸메이트 프로필을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    const { error: updateError } = await supabase
      .from('roommates')
      .update(updateRoommateProfileData)
      .eq('id', roommateId);

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: '룸메이트 프로필이 성공적으로 수정되었습니다.' },
      { status: 200 }
    );
  } catch (e) {
    console.error('룸메이트 프로필 수정 오류:', e);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 관리자에게 문의해주세요.' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createServerSupabaseClient();
    const { id: roommateId } = await params;

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        {
          error: '인증이 필요합니다.',
        },
        {
          status: 401,
        }
      );
    }

    const { data: profile, error: fetchError } = await supabase
      .from('roommates')
      .select('user_id')
      .eq('id', roommateId)
      .single();

    if (fetchError || !profile) {
      return NextResponse.json(
        {
          error: '프로필을 찾을 수 없습니다.',
        },
        { status: 404 }
      );
    }

    if (profile.user_id !== user.id) {
      return NextResponse.json(
        { error: '삭제 권한이 없습니다.' },
        { status: 403 }
      );
    }

    const { error: deleteError } = await supabase
      .from('roommates')
      .delete()
      .eq('id', roommateId);

    if (deleteError) {
      return NextResponse.json({ error: '삭제 중 오류 발생' }, { status: 500 });
    }

    return NextResponse.json({ message: '삭제 성공' }, { status: 200 });
  } catch (e) {
    console.error('룸메이트 프로필 삭제 오류:', e);
    return NextResponse.json(
      { error: '서버 오류가 발생하였습니다.' },
      { status: 500 }
    );
  }
}
