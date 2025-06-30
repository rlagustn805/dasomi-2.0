'use client';

import { Button } from '@/components/ui/button';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { RoommateFilterProps, RoommateFilterState } from '@/types/roommates';
import RmFilterContent from '../rm-content/rm-filter-content';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

const MobileRmFilter = ({
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
  const initialFilterState: RoommateFilterState = {
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
  };

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterItem, setFilterItem] =
    useState<RoommateFilterState>(initialFilterState);

  const router = useRouter();

  const handleChange = useCallback(
    <T extends keyof typeof filterItem>(
      key: T,
      value: (typeof filterItem)[T]
    ) => {
      setFilterItem(prev => ({
        ...prev,
        [key]: value,
      }));
    },
    []
  );

  const handleReset = () => {
    setFilterItem({
      matchingStatus: true,
      dormitory: '',
      gender: '',
      mbti: '',
      noise: '',
      roomType: '',
      smoking: false,
      indoorEating: false,
      sleepHabit: false,
      sleepPattern: '',
      sociabilityRange: {
        min: 0,
        max: 5,
      },
      cleanlinessRange: {
        min: 0,
        max: 5,
      },
    });
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

  const handleFilterOpen = () => {
    setIsFilterOpen(() => !isFilterOpen);
  };

  return (
    <div className="block lg:hidden mt-2 w-full">
      <Button variant="outline" className="w-full" onClick={handleFilterOpen}>
        맞춤 룸메이트 찾기
      </Button>
      <Sheet open={isFilterOpen} onOpenChange={handleFilterOpen}>
        <SheetContent side="bottom" className="h-[90vh] overflow-auto p-4">
          <SheetHeader>
            <SheetTitle>맞춤 룸메이트 찾기</SheetTitle>
            <SheetDescription>필요한 부분만 적용할 수 있어요!</SheetDescription>
          </SheetHeader>
          <RmFilterContent
            label="맞춤 룸메이트 찾기"
            {...filterItem}
            handleChange={handleChange}
            handleReset={handleReset}
            handleApply={handleApply}
            isMobile
          />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileRmFilter;
