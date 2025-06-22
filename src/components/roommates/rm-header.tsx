import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CmHeader from '../common/cm-header';

const RmHeader = () => {
  return (
    <CmHeader
      label="룸메이트 찾기"
      description="나와 맞는 룸메이트를 찾아보세요.">
      <Link href="/roommates/dashboard">
        <Button size="sm">내 룸메이트 정보 등록하기</Button>
      </Link>
    </CmHeader>
  );
};

export default RmHeader;
