'use client';

import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import { dormitorys } from './dormitorys';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DormitoryCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    loop: false,
    containScroll: 'trimSnaps',
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', updateButtons);
    updateButtons();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {dormitorys.map(dormitory => (
            <Link
              key={dormitory.id}
              href={`/roommates?dormitory=${dormitory.id}`}
              className="shrink-0 rounded-xl hover:brightness-90 transition w-[calc(100%/2.3)] md:w-[calc(100%/2.5)] lg:w-[calc(100%/3.5)]">
              <Image
                src={dormitory.src}
                alt={dormitory.id}
                className="w-full h-40 md:h-52 lg:h-60 object-cover rounded-xl"
                width={300}
                height={300}
                priority
              />
              <div className="flex flex-col gap-2 px-2 py-3">
                <span className="text-sm">{dormitory.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full">
        <ChevronLeft />
      </button>
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full">
        <ChevronRight />
      </button>
    </div>
  );
};

export default DormitoryCarousel;
