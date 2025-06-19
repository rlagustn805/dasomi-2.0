'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SignUpNickname from './signup-nickname';
import SignUpDepartment from './signup-department';
import SignUpStudentId from './signup-studentId';
import SignUpMbti from './signup-mbti';
import SignUpGender from './signup-gender';
import { SignUpForm } from './signup-type';
import { insertUserProfile } from '@/services/api-users/api-users-client';

const SignUp = () => {
  const supabase = createClient();
  const router = useRouter();

  const [signUp, setSignUp] = useState<SignUpForm>({
    nickname: '',
    department: '',
    gender: 'male',
    student_id: '',
    mbti: null,
  });

  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  const handleChange = (field: keyof typeof signUp, value: string) => {
    setSignUp(prev => ({
      ...prev,
      [field]: value,
    }));

    if (field === 'nickname') {
      setIsNicknameAvailable(false);
    }
  };

  const handleIsNicknameAvailable = (value: boolean) => {
    setIsNicknameAvailable(value);
  };

  const handleSignUp = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert('인증되지 않은 사용자입니다.');
      return;
    }
    const kakaoId = user.user_metadata?.provider_id;
    if (!kakaoId) {
      alert('Kakao ID가 존재하지 않습니다.');
      return;
    }

    const { success, message } = await insertUserProfile(user.id, kakaoId, {
      nickname: signUp.nickname,
      department: signUp.department,
      gender: signUp.gender,
      student_id: signUp.student_id,
      mbti: signUp.mbti,
    });

    alert(message);
    if (success) {
      router.push('/');
      router.refresh();
    }
  };

  return (
    <div className="h-[90vh] flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>회원가입</CardTitle>
          <CardDescription>
            간단한 입력 후 회원가입이 진행됩니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <SignUpNickname
            value={signUp.nickname}
            isNicknameAvailable
            handleIsNicknameAvailable={handleIsNicknameAvailable}
            onChange={value => handleChange('nickname', value)}
          />
          <SignUpDepartment
            value={signUp.department ?? ''}
            onChange={value => handleChange('department', value)}
          />
          <SignUpStudentId
            value={signUp.student_id ?? ''}
            onChange={value => handleChange('student_id', value)}
          />
          <SignUpMbti
            value={signUp.mbti ?? ''}
            onChange={value => handleChange('mbti', value)}
          />
          <SignUpGender
            value={signUp.gender ?? ''}
            onChange={value => handleChange('gender', value)}
          />
          <Button
            className="w-full"
            size="sm"
            disabled={
              signUp.nickname === '' ||
              signUp.department === '' ||
              signUp.gender === null ||
              signUp.mbti === null ||
              signUp.student_id === '' ||
              !isNicknameAvailable
            }
            onClick={handleSignUp}>
            회원가입
          </Button>
        </CardContent>
        <CardFooter className="text-muted-foreground text-xs">
          <p>
            다솜이 서비스는 어떠한 경우에도 회원의 정보를 타 플랫폼 등 악용하지
            않습니다.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
