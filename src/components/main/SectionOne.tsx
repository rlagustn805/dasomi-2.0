'use client';

import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Button from '../button/Button';

const words = ['참인재관', '예지관', '효성관', '성김대건관'];

const SectionOne = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx(i => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="flex flex-col bg-gradient-to-b from-green-500/5 pt-8 px-4 md:px-10 lg:px-20">
      <LayoutGroup>
        <div className="flex flex-col md:flex-row md:justify-center md:items-center h-40 font-semibold text-2xl overflow-hidden">
          <div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={words[idx]}
                layout
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="inline-block">
                {words[idx]}
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
      <div className="flex flex-col gap-6 md:flex-row md: justify-center">
        <Button>룸메이트 찾기</Button>
        <Button variant="outline">대나무숲 가기</Button>
      </div>
    </section>
  );
};

export default SectionOne;
