'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { createClient } from '@/lib/supabase/client';

const AppInit = () => {
  const { setUser, clearUser } = useAuthStore();

  // 1) localStorage에서 즉시 복구 (깜빡임 방지)
  useEffect(() => {
    const cached = localStorage.getItem('user');
    if (cached) {
      setUser(JSON.parse(cached));
    }
  }, [setUser]);

  // 2) 백그라운드로 세션 유효성 검사 후 이상시 로그아웃 처리
  useEffect(() => {
    const validateSession = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        clearUser();
        return;
      }

      const { data: userProfile, error } = await supabase
        .from('users')
        .select('nickname')
        .eq('id', user.id)
        .maybeSingle();

      if (error || !userProfile) {
        clearUser();
        return;
      }

      setUser({
        nickname: userProfile.nickname ?? null,
      });
    };
    validateSession();
  }, [clearUser, setUser]);

  return null;
};

export default AppInit;
