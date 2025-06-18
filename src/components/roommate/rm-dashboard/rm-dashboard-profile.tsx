'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import RmContent from '../rm-content/rm-filter-content';
import { RoommateProfileWithId } from '../rm-content/rm-type';

const RmDashboardProfile = () => {
  const [profiles, setProfiles] = useState<RoommateProfileWithId[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      const res = await fetch('/api/roommates/me', {
        credentials: 'include',
      });
      const data = await res.json();
      setProfiles(data);
      setIsLoading(false);
    };

    fetchProfiles();
  }, []);

  console.log('룸메 프로필 :', profiles);

  const handleUpdate = async (updatedProfile: RoommateProfileWithId) => {
    const res = await fetch(`/api/roommates/${updatedProfile.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(updatedProfile),
    });

    const data = await res.json();
    console.log('Updated:', data);

    // 성공 시 상태 업데이트 (선택사항)
    setProfiles(prev =>
      prev.map(p => (p.id === updatedProfile.id ? updatedProfile : p))
    );
  };

  if (isLoading) return <p>로딩 중...</p>;

  if (profiles.length === 0) return <p>등록된 프로필이 없습니다.</p>;

  return (
    <>
      {profiles.map(profile => (
        <Card key={profile.id} className="max-w-[500px] mb-5">
          <RmContent
            label="프로필 수정"
            showMessageField
            onSubmit={handleUpdate}
            initialProfile={profile}
          />
        </Card>
      ))}
    </>
  );
};

export default RmDashboardProfile;
