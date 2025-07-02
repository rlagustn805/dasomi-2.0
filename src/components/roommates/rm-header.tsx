import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CmHeader from '../common/cm-header';

const RmHeader = () => {
  return (
    <CmHeader
      label="룸메이트 구하기"
      description="나와 맞는 룸메이트를 손쉽게 찾을 수 있어요.">
      <Link href="/roommates/dashboard">
        <Button size="sm">내 룸메이트 정보 등록하기</Button>
      </Link>
    </CmHeader>
  );
};

export default RmHeader;
