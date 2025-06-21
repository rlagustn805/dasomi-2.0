'use client';

import { useState } from 'react';
import { RoomMateProfileType, RoomMateProfileFilter } from '@/types/roommates';
import { registerRoomMateProfile } from '@/services/api-roommates/api-roommates-client';
import { Button } from '@/components/ui/button';
import RmContent from '..';

const RmRegisterForm = () => {
  const [profile, setProfile] = useState<RoomMateProfileType>({
    dormitory: '',
    room_type: '',
    sociability: 3,
    cleanliness: 3,
    smoking: false,
    indoor_eating: false,
    sleep_pattern: '',
    sleep_habit: '',
    noise: '',
    kakao_open_link: '',
    message: '',
  });

  const isValidKakaoLink = (url: string): boolean => {
    const kakaoRegex = /^https:\/\/open\.kakao\.com\/o\/[A-Za-z0-9]+$/;
    return kakaoRegex.test(url);
  };

  const handleChange = (key: keyof RoomMateProfileFilter, value: any) => {
    setProfile(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!isValidKakaoLink(profile.kakao_open_link)) {
      alert('올바른 카카오 오픈채팅 링크를 입력해주세요.');
      return;
    }

    await registerRoomMateProfile(profile);
  };
  return (
    <>
      <RmContent
        label="프로필 등록"
        profile={profile}
        handleChange={handleChange}
        showMessageField
      />
      <div className="text-right px-6">
        <Button
          onClick={handleSubmit}
          disabled={
            !profile.dormitory ||
            !profile.room_type ||
            !profile.sleep_habit ||
            !profile.sleep_pattern ||
            !profile.noise ||
            !profile.kakao_open_link
          }>
          등록
        </Button>
      </div>
    </>
  );
};

export default RmRegisterForm;
