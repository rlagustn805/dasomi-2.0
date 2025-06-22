'use client';

import { useState } from 'react';
import { RoommateInfo } from '@/types/roommates';
import { registerRoommateProfile } from '@/services/api-roommates/api-roommates-client';
import { Button } from '@/components/ui/button';
import RmContent from '..';

const RmRegisterForm = () => {
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

  const isValidKakaoLink = (url: string): boolean => {
    const kakaoRegex = /^https:\/\/open\.kakao\.com\/o\/[A-Za-z0-9]+$/;
    return kakaoRegex.test(url);
  };

  const handleChange = (key: keyof RoommateInfo, value: any) => {
    setProfile(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!isValidKakaoLink(profile.kakaoOpenLink)) {
      alert('올바른 카카오 오픈채팅 링크를 입력해주세요.');
      return;
    }

    await registerRoommateProfile(profile);
  };
  return (
    <>
      <RmContent
        label="프로필 등록"
        profile={profile}
        handleChange={handleChange}
      />
      <div className="text-right px-6">
        <Button
          onClick={handleSubmit}
          disabled={
            !profile.dormitory ||
            !profile.roomType ||
            !profile.sleepHabit ||
            !profile.sleepPattern ||
            !profile.noise ||
            !profile.kakaoOpenLink
          }>
          등록
        </Button>
      </div>
    </>
  );
};

export default RmRegisterForm;
