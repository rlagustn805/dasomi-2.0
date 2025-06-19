import Link from 'next/link';
import { Button } from '../ui/button';
import CmHeader from '../common/cm-header';

const CommHeader = () => {
  return (
    <CmHeader
      label="대나무숲"
      description="기숙사 생활에 대한 이야기를 자유롭게 나눌 수 있는 공간입니다.">
      <Button size="sm" className="max-w-[100px]">
        <Link href="/">글 작성하기</Link>
      </Button>
    </CmHeader>
  );
};

export default CommHeader;
