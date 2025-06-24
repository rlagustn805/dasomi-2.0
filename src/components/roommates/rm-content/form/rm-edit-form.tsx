'use client';

import { RoommateInfo } from '@/types/roommates';
import { useEffect, useState } from 'react';
import {
  deleteRoommateProfile,
  fetchRoommateProfile,
  updateRoommateProfile,
} from '@/services/api-roommates/api-roommates-client';
import RmContent from '..';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const RmEditForm = () => {
  const [profiles, setProfiles] = useState<RoommateInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchRoommateProfile();
        setProfiles(data);
      } catch (e) {
        console.error('룸메이트 프로필 불러오기 실패 : ', e);
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, []);

  const isValidKakaoLink = (url: string): boolean => {
    const kakaoRegex = /^https:\/\/open\.kakao\.com\/o\/[A-Za-z0-9]+$/;
    return kakaoRegex.test(url);
  };

  const handleChange = (index: number, key: keyof RoommateInfo, value: any) => {
    setProfiles(prev =>
      prev.map((profile, i) =>
        i === index ? { ...profile, [key]: value } : profile
      )
    );
  };

  const handleUpdate = async (profile: RoommateInfo) => {
    if (!isValidKakaoLink(profile.kakaoOpenLink)) {
      alert('올바른 카카오 오픈채팅 링크를 입력해주세요.');
      return;
    }

    await updateRoommateProfile(profile);
  };

  const handleDelete = async (profile: RoommateInfo) => {
    await deleteRoommateProfile(profile);
  };

  if (isLoading) return <div>로딩중..</div>;
  if (!profiles) return <div>등록된 룸메이트가 없어요</div>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 px-2">
      {profiles.map((profile, index) => (
        <Card key={profile.id}>
          <RmContent
            label={`${profile.createdAt?.split('T')[0]}에 등록한 프로필`}
            profile={profile}
            showMessageField
            handleChange={(key, value) => handleChange(index, key, value)}
            isEdit
          />
          <div className="flex gap-3 px-2">
            <Button
              variant="destructive"
              onClick={() => handleDelete(profile)}
              className="flex-1">
              삭제
            </Button>
            <Button
              onClick={() => handleUpdate(profile)}
              className="flex-1"
              disabled={
                !profile.dormitory ||
                !profile.roomType ||
                !profile.sleepHabit ||
                !profile.sleepPattern ||
                !profile.noise ||
                !profile.kakaoOpenLink
              }>
              수정
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default RmEditForm;
