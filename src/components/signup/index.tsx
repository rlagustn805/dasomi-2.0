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
import { useCallback, useState } from 'react';
import SignUpNickname from './signup-nickname';
import SignUpDepartment from './signup-department';
import SignUpStudentId from './signup-studentId';
import SignUpMbti from './signup-mbti';
import SignUpGender from './signup-gender';
import { insertUserProfile } from '@/services/api-users/api-users-client';
import { SignUpForm } from '@/types/sign-up';
import { toast } from 'sonner';
import { useFilterHandlers } from '@/hooks/useFilterHandlers';

const SignUp = () => {
  const supabase = createClient();
  const router = useRouter();

  const [signUp, setSignUp] = useState<SignUpForm>({
    nickname: '',
    department: '',
    gender: 'male',
    studentId: '',
    mbti: '',
  });

  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  const handleChange = useCallback(
    (field: keyof typeof signUp, value: string) => {
      setSignUp(prev => ({
        ...prev,
        [field]: value,
      }));

      if (field === 'nickname') {
        setIsNicknameAvailable(false);
      }
    },
    []
  );

  const {
    handleNicknameChange,
    handleDepartmentChange,
    handleStudentIdChange,
    handleMbtiChange,
    handleGenderChange,
  } = useFilterHandlers<SignUpForm>(handleChange);

  const handleIsNicknameAvailable = useCallback((value: boolean) => {
    setIsNicknameAvailable(value);
  }, []);

  const handleSignUp = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      toast.error('인증되지 않은 사용자입니다.');
      return;
    }
    const kakaoId = user.user_metadata?.provider_id;
    if (!kakaoId) {
      toast.error('Kakao ID가 존재하지 않습니다.');
      return;
    }

    const { success, message } = await insertUserProfile(user.id, kakaoId, {
      nickname: signUp.nickname,
      department: signUp.department,
      gender: signUp.gender,
      studentId: signUp.studentId,
      mbti: signUp.mbti,
    });

    if (success) {
      toast.success(message);
      router.push('/');
      router.refresh();
    } else {
      toast.error(message);
    }
  };

  const isFormValid =
    signUp.nickname !== '' &&
    signUp.department !== '' &&
    signUp.gender !== '' &&
    signUp.mbti !== '' &&
    signUp.studentId !== '' &&
    isNicknameAvailable;

  return (
    <div className="h-[90vh] flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>회원가입</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <SignUpNickname
            value={signUp.nickname}
            isNicknameAvailable
            handleIsNicknameAvailable={handleIsNicknameAvailable}
            onChange={handleNicknameChange}
          />
          <SignUpDepartment
            value={signUp.department ?? ''}
            onChange={handleDepartmentChange}
          />
          <SignUpStudentId
            value={signUp.studentId ?? ''}
            onChange={handleStudentIdChange}
          />
          <SignUpMbti value={signUp.mbti ?? ''} onChange={handleMbtiChange} />
          <SignUpGender
            value={signUp.gender ?? ''}
            onChange={handleGenderChange}
          />
          <Button
            className="w-full"
            size="sm"
            disabled={!isFormValid}
            onClick={handleSignUp}>
            회원가입
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
