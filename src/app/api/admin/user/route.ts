import { createServerSupabaseClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const supabase = await createServerSupabaseClient();

  const { data: users, error: userError } = await supabase
    .from('users')
    .select('created_at');

  if (userError) {
    return NextResponse.json(
      { error: '가입자 집계 실패', detail: userError },
      { status: 500 }
    );
  }

  const signUpByMonth = users.reduce((acc: Record<string, number>, user) => {
    if (!user.created_at) return acc;
    const date = new Date(user.created_at);
    const key = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const { data: adminData, error: adminError } = await supabase
    .from('admin')
    .select('created_at, withdraw_count');

  if (adminError) {
    return NextResponse.json(
      { error: '탈퇴자 집계 실패', detail: adminError },
      { status: 500 }
    );
  }

  const withdrawByMonth = adminData.reduce(
    (acc: Record<string, number>, row) => {
      if (!row.created_at) return acc;
      const date = new Date(row.created_at);
      const key = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}`;
      acc[key] = (acc[key] || 0) + (row.withdraw_count || 0);
      return acc;
    },
    {}
  );

  const allMonths = new Set([
    ...Object.keys(signUpByMonth),
    ...Object.keys(withdrawByMonth),
  ]);

  const result = Array.from(allMonths)
    .sort()
    .map(month => ({
      month,
      signUp: signUpByMonth[month] || 0,
      withdraw: withdrawByMonth[month] || 0,
    }));

  return NextResponse.json(result);
}
