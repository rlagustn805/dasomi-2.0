'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RmContent from '../rm-content';

const MobileRmFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
            <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-lg p-4 ">
              <RmContent
                label="필터 설정"
                handleFilterOpen={handleFilterOpen}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileRmFilter;
