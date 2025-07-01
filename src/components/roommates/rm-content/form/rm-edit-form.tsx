'use client';

import { RoommateInfo } from '@/types/roommates';
import { useCallback, useState } from 'react';
import {
  deleteRoommateProfile,
  updateRoommateProfile,
} from '@/services/api-roommates/api-roommates-client';
import RmContent from '..';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetDescription,
} from '@/components/ui/sheet';
import { dormitorys } from '@/components/main/dormitory/dormitorys';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const MatchingLabels: Record<string, string> = {
  available: '매칭 가능',
  matching: '매칭중',
  matched: '매칭 완료',
};

const RmEditForm = ({ profiles }: { profiles: RoommateInfo[] }) => {
  const [localProfiles, setLocalProfiles] = useState(profiles);
  const [editingProfile, setEditingProfile] = useState<RoommateInfo | null>(
    null
  );
  const [tempProfile, setTempProfile] = useState<RoommateInfo | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const router = useRouter();

  const isValidKakaoLink = (url: string): boolean => {
    const kakaoRegex = /^https:\/\/open\.kakao\.com\/o\/[A-Za-z0-9]+$/;
    return kakaoRegex.test(url);
  };

  const openEditDialog = (profile: RoommateInfo) => {
    setEditingProfile(profile);
    setTempProfile({ ...profile });
  };

  const closeEditDialog = () => {
    setEditingProfile(null);
    setTempProfile(null);
  };

  const handleTempChange = useCallback(
    (key: keyof RoommateInfo, value: any) => {
      setTempProfile(prev => {
        if (!prev) return prev;
        return { ...prev, [key]: value };
      });
    },
    []
  );
  const handleUpdate = async () => {
    if (!tempProfile) return;

    if (!isValidKakaoLink(tempProfile.kakaoOpenLink)) {
      return;
    }

    setIsUpdating(true);
    try {
      await updateRoommateProfile(tempProfile);

      setLocalProfiles(prev =>
        prev.map(p =>
          p.roommateId === tempProfile.roommateId ? tempProfile : p
        )
      );
      toast.success('수정되었습니다.');
      closeEditDialog();
    } catch (e) {
      console.error('프로필 수정 실패:', e);
      toast.error('수정에 실패하였습니다. 다시 시도해주세요.');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async (profile: RoommateInfo) => {
    const res = await deleteRoommateProfile(profile);

    // setLocalProfiles(prev =>
    //   prev.filter(p => p.roommateId !== profile.roommateId)
    // );

    if (res) toast.success('삭제되었습니다.');

    router.refresh();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 px-2">
      {localProfiles.map(profile => {
        const dorm = dormitorys.find(dorm => dorm.id === profile.dormitory);
        const dormTitle = dorm ? dorm.title : '';

        return (
          <Card key={profile.roommateId}>
            <CardContent className="flex justify-between items-center">
              <p className="text-sm">
                {dormTitle} {profile.roomType === '2room' ? '2인실' : '4인실'}{' '}
                {MatchingLabels[profile.matchingStatus as string]}
              </p>
              <span className="text-xs">
                {profile.createdAt?.split('T')[0]}
              </span>
            </CardContent>
            <CardFooter className="flex gap-5">
              <Button
                variant="destructive"
                onClick={() => handleDelete(profile)}
                className="flex-1">
                삭제
              </Button>
              <Button
                onClick={() => openEditDialog(profile)}
                className="flex-1">
                수정
              </Button>
            </CardFooter>
          </Card>
        );
      })}

      <Sheet
        open={!!editingProfile}
        onOpenChange={open => !open && closeEditDialog()}>
        <SheetContent side="bottom" className="h-[90vh] overflow-auto">
          <SheetHeader>
            <SheetTitle>룸메이트 프로필 수정</SheetTitle>
            <SheetDescription>
              프로필 정보를 수정한 후 저장 버튼을 눌러주세요.
            </SheetDescription>
          </SheetHeader>

          {tempProfile && (
            <RmContent
              profile={tempProfile}
              showMessageField
              isEdit
              handleChange={handleTempChange}
              label=""
            />
          )}

          <SheetFooter className="flex justify-end mt-4 gap-2">
            <Button
              variant="outline"
              onClick={closeEditDialog}
              className="flex-1">
              취소
            </Button>
            <Button
              className="flex-1"
              onClick={handleUpdate}
              disabled={
                !tempProfile?.dormitory ||
                !tempProfile?.roomType ||
                !tempProfile?.sleepHabit ||
                !tempProfile?.sleepPattern ||
                !tempProfile?.noise ||
                !tempProfile?.kakaoOpenLink ||
                !isValidKakaoLink(tempProfile.kakaoOpenLink) ||
                isUpdating
              }>
              {isUpdating ? '수정중...' : '수정'}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default RmEditForm;
