import Link from 'next/link';
import { Button } from '../ui/button';

const CommHeader = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">대나무숲</h2>
      <p className="text-sm text-gray-400">
        기숙사 생활에 대한 이야기를 자유롭게 나눌 수 있는 공간입니다.
      </p>

      <Button size="sm" className="max-w-[100px]">
        <Link href="/">글 작성하기</Link>
      </Button>
    </div>
  );
};

export default CommHeader;
