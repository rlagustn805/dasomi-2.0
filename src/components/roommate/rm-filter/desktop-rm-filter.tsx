'use client';

import { useState } from 'react';
import RmContent from '../rm-content';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { RoomMateProfileFilter, RoommateFilterProps } from '@/types/roommates';

const DesktopRmFilter = ({ filters }: RoommateFilterProps) => {
  const [profile, setProfile] = useState<RoomMateProfileFilter>({
    matching_status: filters.matchingStatus === 'true' || true,
    dormitory: filters.dormitory || '',
    gender: filters.gender || '',
    mbti: filters.mbti || '',
    room_type: filters.roomType || '',
    smoking: filters.smoking === 'true' || false,
    indoor_eating: filters.indoorEating === 'true' || false,
    sleep_habit: filters.sleepHabit === 'true' || false,
    sleep_pattern: filters.sleepPattern || '',
    sociabilityRange: {
      min: parseInt(filters.sociabilityRange?.min || '0', 10) || 0,
      max: parseInt(filters.sociabilityRange?.max || '5', 10) || 5,
    },
    cleanlinessRange: {
      min: parseInt(filters.cleanlinessRange?.min || '0', 10) || 0,
      max: parseInt(filters.cleanlinessRange?.max || '5', 10) || 5,
    },
  });

  const router = useRouter();

  const handleChange = <T extends keyof typeof profile>(
    key: T,
    value: (typeof profile)[T]
  ) => {
    setProfile(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleApply = () => {
    const { sociabilityRange, cleanlinessRange, ...restProfile } = profile;

    const filters = {
      ...restProfile,
      sociabilityMin: sociabilityRange!.min,
      sociabilityMax: sociabilityRange!.max,
      cleanlinessMin: cleanlinessRange!.min,
      cleanlinessMax: cleanlinessRange!.max,
    };

    const searchParams = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        searchParams.append(key, String(value));
      }
    });

    router.push(`/roommate?${searchParams.toString()}`);
  };

  return (
    <Card className="col-span-1 lg:mt-15 sticky top-[10px] h-fit hidden lg:block">
      <RmContent
        label="필터 설정"
        profile={profile}
        handleChange={handleChange}
        isFilter
      />
      <button onClick={handleApply}>적용</button>
    </Card>
  );
};

export default DesktopRmFilter;
