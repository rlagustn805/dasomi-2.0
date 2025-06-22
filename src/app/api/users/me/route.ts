import { createServerSupabaseClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { toSnakeCase } from '@/utils/to-snake-case';
import { toCamelCase } from '@/utils/to-camel-case';
import { Users } from '@/types/users';

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

    const { data: profile, error } = await supabase
      .from('users')
      .select('id, nickname, department, gender, student_id, mbti, created_at')
      .eq('id', user.id)
      .single();

    if (error) {
      return NextResponse.json(
        {
          error: '프로필을 찾을 수 없습니다.',
        },
        { status: 404 }
      );
    }

    const fetchUserProfileData = toCamelCase(profile);

    return NextResponse.json(fetchUserProfileData);
  } catch (e) {
    console.log(`프로필 조회 서버 오류 : ${e}`);
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

    const { nickname, department, gender, student_id, mbti } = body;
    const insertUserProfileData = toSnakeCase(body);

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

    const { error: insertError } = await supabase.from('users').insert({
      id: user.id,
      kakao_id: user.user_metadata.provider_id,
      ...insertUserProfileData,
    });

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    return NextResponse.json({ message: '회원가입 성공' }, { status: 200 });
  } catch (e) {
    console.error('회원가입 API 오류:', e);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 관리자에게 문의해주세요.' },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
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

    const body = await req.json();

    const { nickname, department, mbti } = body;

    if (nickname) {
      const { data: existingUser, error: error } = await supabase
        .from('users')
        .select('id')
        .eq('nickname', nickname)
        .maybeSingle();

      if (error) {
        return NextResponse.json(
          { error: '중복 확인 중 오류가 발생하였습니다.' },
          { status: 500 }
        );
      }

      if (existingUser) {
        return NextResponse.json(
          { error: '이미 사용 중인 닉네임입니다.' },
          { status: 409 }
        );
      }
    }

    const updates: Partial<Users> = {};
    if (nickname) updates.nickname = nickname;
    if (department) updates.department = department;
    if (mbti) updates.mbti = mbti;

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: '수정할 필드가 없습니다.' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', user.id)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        {
          error: '프로필을 찾을 수 없습니다.',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: '수정되었습니다.' });
  } catch (e) {
    console.error(`프로필 업데이트 오류 : ${e}`);

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

async function unlinkKakaoAccount(kakaoId: string) {
  try {
    const response = await fetch('https://kapi.kakao.com/v1/user/unlink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `KakaoAK ${process.env.KAKAO_ADMIN_KEY}`, // 카카오 Admin Key 필요
      },
      body: `target_id_type=user_id&target_id=${kakaoId}`,
    });

    if (!response.ok) {
      console.error('카카오 연결 해제 실패:', await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error('카카오 연결 해제 API 호출 오류:', error);
    return false;
  }
}

export async function DELETE() {
  try {
    const supabase = await createServerSupabaseClient();

    // 현재 사용자 확인
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { error: '인증되지 않은 사용자입니다.' },
        { status: 401 }
      );
    }

    let kakaoId = null;
    if (user.app_metadata?.provider === 'kakao' && user.user_metadata?.sub) {
      kakaoId = user.user_metadata.sub;
    }

    // 1. 카카오 연결 해제 (카카오 로그인 사용자인 경우)
    if (kakaoId) {
      const unlinkSuccess = await unlinkKakaoAccount(kakaoId);
      if (!unlinkSuccess) {
        console.warn('카카오 연결 해제에 실패했지만 계속 진행합니다.');
      }
    }

    // 사용자 관련 데이터 삭제
    const tables = ['profiles']; // 실제 사용하는 테이블명들로 변경

    for (const table of tables) {
      const { error: deleteDataError } = await supabase
        .from(table)
        .delete()
        .eq('user_id', user.id);

      if (deleteDataError) {
        console.error(`${table} 테이블 데이터 삭제 오류:`, deleteDataError);
      }
    }

    // 관리자 클라이언트로 계정 삭제
    const supabaseAdmin = createAdminClient();
    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(
      user.id
    );

    if (deleteError) {
      console.error('계정 삭제 오류:', deleteError);
      return NextResponse.json(
        { error: '계정 삭제에 실패했습니다.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: '계정이 성공적으로 삭제되었습니다.' });
  } catch (error) {
    console.error('계정 삭제 API 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
