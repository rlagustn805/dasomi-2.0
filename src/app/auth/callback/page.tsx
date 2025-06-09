'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

const AuthCallbackPage = () => {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const user = session?.user;
      // getUser가 더 안정된 방법?
      // zustand 도입?

      if (!user) {
        router.push('/login');
        return;
      }

      const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('id', user.id)
        .single();

      if (existingUser) {
        router.push('/');
        router.refresh();
      } else {
        router.push('/signup');
      }
    };

    checkUser();
  }, [router, supabase]);

  return <p>로그인 처리 중...</p>;
};

export default AuthCallbackPage;
