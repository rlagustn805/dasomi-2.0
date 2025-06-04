import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

const KakaoLogin = () => {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle className="text-lg">로그인</CardTitle>
        <CardDescription>다솜이 서비스를 위해 로그인 해주세요.</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          src="/images/login/kakao-login.png"
          alt="카카오 로그인"
          width={300}
          height={45}
        />
      </CardContent>
      <CardFooter className="text-xs text-gray-400">
        처음 방문하시나요? 카카오톡으로 로그인하시면 자동으로 회원가입이
        진행됩니다.
      </CardFooter>
    </Card>
  );
};

export default KakaoLogin;
