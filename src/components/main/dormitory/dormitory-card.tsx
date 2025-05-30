import Image from 'next/image';
import Link from 'next/link';
import { dormitorys } from './dormitorys';
import { Button } from '@/components/ui/button';

const DormitoryCard = () => {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {dormitorys.map(dormitory => (
        <div
          key={dormitory.id}
          className="border shadow-xs rounded-xl overflow-hidden">
          <Image
            src={dormitory.src}
            alt={dormitory.id}
            className="w-full h-30 md:h-40 lg:h-50 object-cover"
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-3 px-2 py-3">
            <span className="font-bold ">{dormitory.title}</span>
            <Button size="sm" variant="outline">
              <Link href="/">이동하기</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DormitoryCard;
