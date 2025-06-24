import KakaoIcon from '@/assets/icon/kakao-icon';
import Link from 'next/link';
import { RoommateInfo, RoommateUserInfo } from '@/types/roommates';
import { dormitorys } from '@/components/main/dormitory/dormitorys';
import { Button } from '@/components/ui/button';

type isUser = {
  currentUserId: string | null;
  currentUserGender: string | null;
};

const RmCardContact = ({
  kakaoOpenLink,
  dormitory,
  matchingStatus,
  id,
  gender,
  currentUserId,
  currentUserGender,
}: Pick<RoommateInfo, 'kakaoOpenLink' | 'dormitory' | 'matchingStatus'> &
  Pick<RoommateUserInfo, 'id' | 'gender'> &
  isUser) => {
  const dormitoryTitle = dormitorys.find(item => item.id === dormitory)?.title;

  let actionButton;

  const isOwner = id === currentUserId;
  const isSameGender = gender === currentUserGender;

  if (currentUserId === null) {
    actionButton = (
      <Link href="/login">
        <Button size="sm">로그인</Button>
      </Link>
    );
  } else if (isOwner) {
    actionButton = (
      <Link href="/roommates/dashboard">
        <Button size="sm">수정하기</Button>
      </Link>
    );
  } else if (!isSameGender) {
    actionButton = <span className="text-xs text-red-500">성별이 달라요</span>;
  } else if (matchingStatus === 'available') {
    actionButton = (
      <Link
        href={kakaoOpenLink}
        target="_blank"
        className="inline-flex items-center gap-1 bg-yellow-400 rounded-xl px-2 py-1 text-sm">
        <KakaoIcon width={20} height={20} />
        <span className="text-xs">연락하기</span>
      </Link>
    );
  } else {
    actionButton = null;
  }

  return (
    <div className="flex justify-between items-center text-sm  pt-4  border-t border-gray-200">
      <div>{dormitoryTitle}</div>
      {actionButton}
    </div>
  );
};

export default RmCardContact;
