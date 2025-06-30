'use client';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { slogans } from './slogans';
import LocationIcon from '@/assets/icon/location-icon';

const TitleSlogan = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx(i => (i + 1) % slogans.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <LayoutGroup>
        <div className="flex flex-col md:flex-row md:justify-center md:items-center font-semibold text-2xl overflow-hidden">
          <div>
            <motion.span
              layout
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="inline-block mr-1">
              <LocationIcon />
            </motion.span>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={slogans[idx]}
                layout
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="inline-block">
                {slogans[idx]}
              </motion.div>
            </AnimatePresence>

            <motion.span
              layout
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="inline-block mr-1">
              에서
            </motion.span>
          </div>

          <motion.span
            layout
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="inline-block ">
            룸메이트를 찾고 계신가요?
          </motion.span>
        </div>
      </LayoutGroup>
    </>
  );
};

export default TitleSlogan;
