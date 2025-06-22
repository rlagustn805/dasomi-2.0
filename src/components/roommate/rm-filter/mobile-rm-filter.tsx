'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RmContent from '../rm-content';
import { useRouter } from 'next/navigation';
import { RoomMateProfileFilter, RoommateFilterProps } from '@/types/roommates';

const MobileRmFilter = ({ filters }: RoommateFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [profile, setProfile] = useState<RoomMateProfileFilter>({
    matching_status: filters.matchingStatus === 'true' || true,
    dormitory: filters.dormitory || '',
    gender: filters.gender || '',
    mbti: filters.mbti || '',
    noise: filters.noise || '',
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

  const handleFilterOpen = () => {
    setIsFilterOpen(() => !isFilterOpen);
  };

  return (
    <div className="block lg:hidden mt-5 w-full">
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
              <RmContent
                label="필터 설정"
                profile={profile}
                handleChange={handleChange}
                isFilter
                handleFilterOpen={handleFilterOpen}
              />
              <Button
                onClick={() => {
                  handleApply();
                  handleFilterOpen();
                }}>
                적용
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileRmFilter;
