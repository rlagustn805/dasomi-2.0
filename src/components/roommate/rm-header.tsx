import Link from 'next/link';
import { Button } from '@/components/ui/button';

const RmHeader = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">룸메이트 찾기</h2>
      <p className="text-sm text-gray-400">나와 맞는 룸메이트를 찾아보세요.</p>
      <Link href="/">
        <Button size="sm">내 룸메이트 정보 등록하기</Button>
      </Link>
    </div>
  );
};

export default RmHeader;
