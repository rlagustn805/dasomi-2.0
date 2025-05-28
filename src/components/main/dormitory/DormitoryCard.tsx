import Button from '@/components/button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { dormitorys } from './dormitorys';

const DormitoryCard = () => {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {dormitorys.map(dormitory => (
        <div
          key={dormitory.id}
          className="border border-gray-200 rounded overflow-hidden">
          <Image
            src={dormitory.src}
            alt={dormitory.id}
            className="w-full h-30 md:h-40 lg:h-50 object-cover"
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-3 px-2 py-3">
            <span className="font-bold ">{dormitory.title}</span>
            <Link href="/">
              <Button variant="outline" size="sm" className="w-full">
                룸메이트 찾기
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DormitoryCard;
