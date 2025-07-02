'use client';

import { useCallback, useState } from 'react';
import { RoommateInfo } from '@/types/roommates';
import { registerRoommateProfile } from '@/services/api-roommates/api-roommates-client';
import { Button } from '@/components/ui/button';
import RmContent from '..';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const RmRegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profile, setProfile] = useState<RoommateInfo>({
    dormitory: '',
    roomType: '',
    sociability: 3,
    cleanliness: 3,
    smoking: false,
    indoorEating: false,
    sleepPattern: '',
    sleepHabit: '',
    noise: '',
    kakaoOpenLink: '',
    message: '',
  });

  const router = useRouter();

  const isValidKakaoLink = (url: string): boolean => {
    const kakaoRegex = /^https:\/\/open\.kakao\.com\/o\/[A-Za-z0-9]+$/;
    return kakaoRegex.test(url);
  };

  const handleChange = useCallback(
    (key: keyof RoommateInfo, inputValue: any) => {
      let value = inputValue; // 파라미터 복사

      if (key === 'kakaoOpenLink') {
        const matched = value.match(
          /https:\/\/open\.kakao\.com\/o\/[A-Za-z0-9]+/
        );
        value = matched ? matched[0] : '';
      }

      setProfile(prev => ({
        ...prev,
        [key]: value,
      }));
    },
    []
  );

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      await registerRoommateProfile(profile);
      setProfile({
        dormitory: '',
        roomType: '',
        sociability: 3,
        cleanliness: 3,
        smoking: false,
        indoorEating: false,
        sleepPattern: '',
        sleepHabit: '',
        noise: '',
        kakaoOpenLink: '',
        message: '',
      });

      toast.success('등록 되었습니다.');
      router.refresh();
    } catch (e) {
      console.error('프로필 등록 실패:', e);
      toast.error('등록에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    profile.dormitory &&
    profile.roomType &&
    profile.sleepHabit &&
    profile.sleepPattern &&
    profile.noise &&
    profile.kakaoOpenLink &&
    isValidKakaoLink(profile.kakaoOpenLink);

  return (
    <>
      <RmContent
        label="름메이트 모집 글 올리기"
        profile={profile}
        handleChange={handleChange}
      />
      <div className="text-right px-6">
        <Button onClick={handleSubmit} disabled={!isFormValid || isSubmitting}>
          {isSubmitting ? '등록중...' : '등록'}
        </Button>
      </div>
    </>
  );
};

export default RmRegisterForm;
