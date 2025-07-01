import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import precognitionImg from '@/components/main/dormitory/imgs/precognition.jpg';

const NotFound = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={precognitionImg}
        alt="404"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute font-semibold text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-3">
          <p>존재하지 않는 페이지에요!</p>
          <Button variant="secondary">
            <Link href="/">메인으로 돌아가기</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
