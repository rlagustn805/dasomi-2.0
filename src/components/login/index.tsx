'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { createClient } from '@/lib/supabase/client';

const KakaoLogin = () => {
  const handleLogin = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle className="text-lg">로그인</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          src="/images/login/kakao-login.png"
          alt="카카오 로그인"
          width={300}
          height={45}
          onClick={handleLogin}
          priority
        />
      </CardContent>
      <CardFooter className="text-xs text-gray-400">
        처음 방문하시나요? 카카오톡으로 로그인하시면 자동으로 회원가입이
        진행되요.
      </CardFooter>
    </Card>
  );
};

export default KakaoLogin;
