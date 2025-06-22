'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { RoommateFilterProps, RoommateFilterState } from '@/types/roommates';
import RmFilterContent from '../rm-content/rm-filter-content';

const DesktopRmFilter = ({
  dormitory,
  gender,
  mbti,
  noise,
  roomType,
  smoking,
  indoorEating,
  sleepHabit,
  sleepPattern,
  matchingStatus,
  sociabilityRange,
  cleanlinessRange,
}: RoommateFilterProps) => {
  const [filterItem, setFilterItem] = useState<RoommateFilterState>({
    matchingStatus: matchingStatus === 'true' || true,
    dormitory: dormitory || '',
    gender: gender || '',
    mbti: mbti || '',
    noise: noise || '',
    roomType: roomType || '',
    smoking: smoking === 'true' || false,
    indoorEating: indoorEating === 'true' || false,
    sleepHabit: sleepHabit === 'true' || false,
    sleepPattern: sleepPattern || '',
    sociabilityRange: {
      min: parseInt(sociabilityRange?.min || '0', 10) || 0,
      max: parseInt(sociabilityRange?.max || '5', 10) || 5,
    },
    cleanlinessRange: {
      min: parseInt(cleanlinessRange?.min || '0', 10) || 0,
      max: parseInt(cleanlinessRange?.max || '5', 10) || 5,
    },
  });

  const router = useRouter();

  const handleChange = <T extends keyof RoommateFilterState>(
    key: T,
    value: (typeof filterItem)[T]
  ) => {
    setFilterItem(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleApply = () => {
    const { sociabilityRange, cleanlinessRange, ...restProfile } = filterItem;

    const filters = {
      ...restProfile,
      sociabilityMin: sociabilityRange.min,
      sociabilityMax: sociabilityRange.max,
      cleanlinessMin: cleanlinessRange.min,
      cleanlinessMax: cleanlinessRange.max,
    };

    const searchParams = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        searchParams.append(key, String(value));
      }
    });

    router.push(`/roommates?${searchParams.toString()}`);
  };

  return (
    <Card className="col-span-1 lg:mt-15 sticky top-[10px] h-fit hidden lg:block">
      <RmFilterContent
        label="필터 설정"
        {...filterItem}
        handleChange={handleChange}
      />
      <button onClick={handleApply}>적용</button>
    </Card>
  );
};

export default DesktopRmFilter;
