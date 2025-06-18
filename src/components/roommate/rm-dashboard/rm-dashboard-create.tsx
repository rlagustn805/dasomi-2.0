'use client';

import { Card } from '@/components/ui/card';
import RmContent from '../rm-content/rm-filter-content';
import { RoommateProfile } from '../rm-content/rm-type';

const RmDashboardCreate = () => {
  const handleCreateProfile = async (profile: RoommateProfile) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_KEY}/api/roommates/me`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(profile),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || '등록에 실패했습니다.');
      }

      console.log('등록 성공:', data.message);
      // ✅ 라우팅 또는 알림 처리
    } catch (err) {
      console.error('등록 에러:', err);
    }
  };

  return (
    <Card className="max-w-[500px]">
      <RmContent
        label="프로필 등록"
        showMessageField
        onSubmit={handleCreateProfile}
      />
    </Card>
  );
};

export default RmDashboardCreate;
