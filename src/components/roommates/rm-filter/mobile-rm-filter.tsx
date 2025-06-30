'use client';

import { Button } from '@/components/ui/button';
import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { RoommateFilterProps, RoommateFilterState } from '@/types/roommates';
import RmFilterContent from '../rm-content/rm-filter-content';

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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}>
            <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-lg p-4 max-h-[80vh] overflow-y-auto">
              <RmFilterContent
                label="맞춤 룸메이트 찾기"
                {...filterItem}
                handleChange={handleChange}
                handleFilterOpen={handleFilterOpen}
                handleApply={handleApply}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileRmFilter;
